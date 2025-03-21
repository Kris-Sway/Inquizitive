// handleFetch function that can be reused for different API requests
export const handleFetch = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    const { ok, status, statusText, headers } = response;

    if (!ok) {
      throw new Error(`Fetch failed with status - ${status}, ${statusText}`);
    }

    // Check if the response is JSON or not
    const isJson = (headers.get("content-type") || "").includes(
      "application/json"
    );
    const responseData = await (isJson ? response.json() : response.text());

    // Return the data and null (no error)
    return [responseData, null];
  } catch (error) {
    console.warn(error);
    // Return null for data and the error
    return [null, error];
  }
};

// Fetch trivia questions
const API_URL =
  "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";

// Function to fetch questions using the handleFetch logic
export const fetchQuestions = async () => {
  const [data, error] = await handleFetch(API_URL);

  if (error) {
    console.error("Error fetching trivia questions:", error);
    return [null, error];
  }

  return [data.results, null]; // Return questions and null for no error
};
