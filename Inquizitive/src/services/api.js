export const handleFetch = async (url, options = {}, retries = 5, delay = 5000) => {
  for (let attempt = 0; attempt < retries; attempt++) {
      try {
        console.log("Fetching URL:", url);
const response = await fetch(url, options);
          if (response.status === 429) {
              const waitTime = delay * Math.pow(2, attempt); // Exponential backoff
              console.warn(`Rate limited! Retrying in ${waitTime / 1000} seconds...`);
              await new Promise(resolve => setTimeout(resolve, waitTime));
              continue; // Retry after waiting
          }

          if (!response.ok) {
              throw new Error(`Fetch failed with status - ${response.status}, ${response.statusText}`);
          }

          const data = await response.json();
          return [data, null]; // Return the data and no error
      } catch (error) {
          console.warn(error);
          if (attempt === retries - 1) {
              return [null, error]; // Return error after all retries fail
          }
      }
  }
};


// OpenTDB API URL for fetching trivia questions
const API_URL = "https://the-trivia-api.com/v2/questions?limit=5";


let cachedQuestions = null;
let lastFetchTime = 0;

export const fetchQuestions = async () => {
    const now = Date.now();
    
    // Use cached questions if the last fetch was less than 10 minutes ago
    if (cachedQuestions && now - lastFetchTime < 10 * 60 * 1000) {
        return [cachedQuestions, null];
    }

    const API_URL = "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple";
    const [data, error] = await handleFetch(API_URL);

    if (error) {
        console.error("Error fetching trivia questions:", error);
        return [null, error];
    }

    cachedQuestions = data.results;
    lastFetchTime = now;
    
    return [cachedQuestions, null];
};

