# react-project

Created by Kristopher Noel and Josue Molina.

## 🚀 Mission statement

Our application, Inquizitive, is designed for trivia lovers of all backgrounds. It offers a fun and engaging way to test knowledge across various topics, helping users challenge themselves, learn new facts, and enjoy interactive quizzes. Whether you're a casual player or a trivia expert, Inquizitive makes learning exciting and rewarding.

## API & React Router

This application will use the Open Trivia Database (OpenTDB) API. Below are the documentation and specific endpoints we intend to use, along with the front-end pages that will utilize them.

- Link to API documentation: https://opentdb.com/api_config.php

  - Endpoint: https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple 

  - This will fetch an array of trivia questions.

Each question will include:

question (text of the question)

correct_answer (the correct answer)

incorrect_answers (array of wrong answers)

The application will shuffle the answers to randomize the choices.

https://opentdb.com/api_category.php

This will return a list of all trivia categories.

The application will allow users to choose a category before starting the quiz.

https://opentdb.com/api_count.php?category=9

This will return the total number of questions available in a specific category.

The application will use these endpoints to create a dynamic trivia experience, allowing users to select categories, answer questions, and track their scores.

[If your API requires an API key, say so here.]

**Example:**
- https://api.artic.edu/api/v1/artworks
  - This will fetch an array of artwork objects
  - For each artwork, I want the `id`, `title`, and `image_id`
- https://api.artic.edu/api/v1/artworks/{id}
  - This will fetch a single artwork object
  - I will use the `id`, `title`, `short_description`, `medium_display`, `place_of_origin`, and `image_id`
- https://api.artic.edu/api/v1/artworks/search?q={query}
  - This will fetch a list of artworks that relate to the search query
  - For each artwork, I will use the `id` and `title`

## 👩‍💻 MVP User Stories & Frontend Routes

The application will feature the following frontend routes and core features:

On the /home page, users can start a trivia game by selecting a category and difficulty level.

On the `/quiz` page, users will see trivia questions with multiple-choice answers and can select their responses.

On the `/results` page, users will see their final score and have the option to restart the quiz.

A navbar will allow users to navigate between different sections, such as selecting a category, viewing their score history, and starting a new game.

Users can search for trivia categories before starting the game.

**Example:**
- On the `/artworks` page, users can view a grid of all artwork
- On the `/artworks` page, users can click on a piece of art in the grid, taking them to the details page for that piece of art.
- On the `/artworks/:artworkId` page, users can view additional details for a single piece of art
- On the `/` page, users can search for artwork titles related to a search term.

## 🤔 If time permits, the following stretch features will be implemented in order of priority:

Users will be able to save their favorite trivia categories for quick access.

Users will be able to view their past scores and quiz history to track progress.

Users will receive personalized trivia recommendations based on their past quiz performances.

**Example:**
* Users will be able to save and view favorited artworks using local storage
* Users will be able to change the color scheme of the website from light mode to dark mode

## 📆 Timeline for reaching MVP in 1 week

To ensure that we can complete all core features of the application in 1 week, we will aim to complete tasks according to the following timeline:

Day 1: Project Setup & UI Structure
Goal: Set up the project, create basic UI components, and implement trivia category selection.

Install React, React Router & set up project structure (Due: Day 1)

Create Title, Header, and Navbar components (Due: Day 1)

Implement Trivia Category Selection UI (Dropdown or Buttons) (Due: Day 1)

Add Favicon (Website Tab Logo) (Due: Day 1)
⸻
Day 2: API Integration & Question Display
Goal: Fetch trivia questions from the API and display them.

Integrate API & fetch questions based on the selected category (Due: Day 2)

Display trivia questions and multiple-choice answers (Due: Day 2)

Implement Answer Selection Logic (Due: Day 2)


⸻
Day 3: MVP Due – Core Features Must Work
Goal: Ensure the quiz game functions correctly.

Implement Score Tracking (Due: Day 3)

Implement Loading Indicator for API calls (Due: Day 3)

Implement Basic Error Handling (Due: Day 3)

Day 4: UI Improvements & Additional Features
Goal: Enhance UI and add extra functionality.

Add a Restart Quiz Button (Due: Day 4)

Improve UI Styling for better user experience (Due: Day 4)

Implement Dark Mode Toggle (Due: Day 4)

⸻
Day 5: Final Testing & Deployment
Goal: Test, fix bugs, and deploy the app.

Perform Final Testing & Bug Fixes (Due: Day 5)

Deploy the app (Due: Day 5)

## Wireframes of each page in your application

Below, you can find wireframes for our project. Each wireframe shows a different page of our application as well as the key components of the application. Details such as specific text values or images are intentionally not included:

<img width="1440" alt="Screenshot 2025-03-24 at 11 19 42 AM" src="https://github.com/user-attachments/assets/84c904b5-5ae5-4335-b7e8-f7063cc59432" />
<img width="1440" alt="Screenshot 2025-03-24 at 11 19 35 AM" src="https://github.com/user-attachments/assets/14a5d06c-258b-430a-9fab-5cf5e530f024" />
<img width="1440" alt="Screenshot 2025-03-24 at 11 19 26 AM" src="https://github.com/user-attachments/assets/4760a608-eb8d-44d0-b35b-797c30360d13" />

