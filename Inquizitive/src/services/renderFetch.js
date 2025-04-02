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

import { fetchQuestions } from "./api";

// Function to fetch and return questions
const renderFetch = async () => {
  const [questions, error] = await fetchQuestions();
  console.log(questions);
  if (error) {
    console.error("Error fetching questions:", error);
    return [];
  }
  return questions;
};

export default renderFetch;
