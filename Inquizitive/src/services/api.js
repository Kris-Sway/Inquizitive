// Enhanced fetch handler with retry logic for API calls
export const handleFetch = async (
  url,
  options = {},
  retries = 5,
  delay = 8000 // Increased from 5000ms to reduce rate limiting issues
) => {
  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      console.log("Fetching URL:", url);
      const response = await fetch(url, options);

      if (response.status === 429) {
        const waitTime = delay * Math.pow(2, attempt); // Exponential backoff
        console.warn(`Rate limited! Retrying in ${waitTime / 1000} seconds...`);
        await new Promise((resolve) => setTimeout(resolve, waitTime));
        continue; // Retry after waiting
      }

      if (!response.ok) {
        throw new Error(
          `Fetch failed with status - ${response.status}, ${response.statusText}`
        );
      }

      const data = await response.json();
      return [data, null]; // Return the data and no error
    } catch (error) {
      console.warn(error);

      // Only return error on the last retry attempt
      if (attempt === retries - 1) {
        return [null, error]; // Return error after all retries fail
      }

      // Wait before the next retry
      const waitTime = delay * Math.pow(2, attempt);
      await new Promise((resolve) => setTimeout(resolve, waitTime));
    }
  }
};

// Function to get a session token to reduce rate limiting
export const getSessionToken = async () => {
  // Check if we have a token in localStorage
  const savedToken = localStorage.getItem("triviaToken");

  if (savedToken) {
    return savedToken;
  }

  const tokenUrl = "https://opentdb.com/api_token.php?command=request";
  const [data, error] = await handleFetch(tokenUrl);

  if (error || !data || data.response_code !== 0) {
    console.error("Error getting session token:", error || "Invalid response");
    return null;
  }

  // Save token to localStorage
  try {
    localStorage.setItem("triviaToken", data.token);
  } catch (e) {
    console.warn("Could not save token to localStorage:", e);
  }

  return data.token;
};

// Cache for questions with timestamp
let questionsCache = {
  data: null,
  timestamp: 0,
  params: "", // Store the params used to fetch these questions
};

// Function to fetch categories
export const fetchCategories = async () => {
  try {
    const cachedCategories = localStorage.getItem("triviaCategories");

    if (cachedCategories) {
      return [JSON.parse(cachedCategories), null];
    }

    const categoriesUrl = "https://opentdb.com/api_category.php";
    const [data, error] = await handleFetch(categoriesUrl);

    if (error) {
      return [null, error];
    }

    // Save categories to localStorage
    localStorage.setItem(
      "triviaCategories",
      JSON.stringify(data.trivia_categories)
    );

    return [data.trivia_categories, null];
  } catch (error) {
    console.error("Error in fetchCategories:", error);
    return [null, error];
  }
};

// Main function to fetch questions
export const fetchQuestions = async (
  amount = 5,
  categoryId = "",
  difficulty = ""
) => {
  try {
    const now = Date.now();
    const paramsKey = `${amount}-${categoryId}-${difficulty}`;
    const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes

    // Use cached questions if parameters match and cache is still valid
    if (
      questionsCache.data &&
      questionsCache.params === paramsKey &&
      now - questionsCache.timestamp < CACHE_DURATION
    ) {
      console.log("Using cached questions");
      return [questionsCache.data, null];
    }

    // Get a session token to reduce rate limiting
    const token = await getSessionToken();

    // Build the API URL
    let apiUrl = `https://opentdb.com/api.php?amount=${amount}&type=multiple`;

    if (categoryId) {
      apiUrl += `&category=${categoryId}`;
    }

    if (difficulty) {
      apiUrl += `&difficulty=${difficulty}`;
    }

    if (token) {
      apiUrl += `&token=${token}`;
    }

    // Fetch questions from API
    const [data, error] = await handleFetch(apiUrl);

    if (error || !data || data.response_code !== 0) {
      console.error(
        "Error fetching questions:",
        error || `Response code: ${data?.response_code}`
      );
      return [
        null,
        error || new Error(`Failed with response code: ${data?.response_code}`),
      ];
    }

    // Process questions to include all answers in one array
    const processedQuestions = data.results.map((question) => ({
      ...question,
      all_answers: [
        ...question.incorrect_answers,
        question.correct_answer,
      ].sort(() => Math.random() - 0.5),
    }));

    // Update cache
    questionsCache = {
      data: processedQuestions,
      timestamp: now,
      params: paramsKey,
    };

    return [processedQuestions, null];
  } catch (error) {
    console.error("Error in fetchQuestions:", error);
    return [null, error];
  }
};
