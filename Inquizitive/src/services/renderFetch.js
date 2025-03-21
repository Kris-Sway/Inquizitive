// const API_URL =
//   "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";

// // Function to fetch trivia questions
// const renderFetch = async () => {
//   try {
//     const response = await fetch(API_URL);
//     const data = await response.json();
//     return data.results; // Return the fetched questions as an array
//   } catch (error) {
//     console.error("Error fetching trivia questions:", error);
//     return []; // Return an empty array in case of failure
//   }
// };

import { handleFetch } from "./api"; // Ensure this is the correct import

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple";

export const renderFetch = async (retries = 3, delay = 5000) => {
  for (let attempt = 0; attempt < retries; attempt++) {
    const [data, error] = await handleFetch(API_URL);

    if (error) {
      if (error.message.includes("429")) {
        console.warn(`Rate limited! Retrying in ${delay / 1000} seconds...`);
        await new Promise((res) => setTimeout(res, delay));
        continue; // Try again after waiting
      }
      console.error("API fetch failed:", error);
      return []; // Return empty array to prevent crashes
    }

    return data.results; // Successfully fetched questions
  }

  console.error("Failed after multiple attempts.");
  return []; // Return empty array if all attempts fail
};

export default renderFetch;
