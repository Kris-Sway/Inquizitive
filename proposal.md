# react-project

Created by Kristopher Noel and Josue Molina.

## 🚀 Mission statement

Our application, OmniTune is for lovers of any genre of music. It allows users to choose music from every genre, for people who may be interested in looking for new genres of music and playlists within those genres to listen to.

## API & React Router

This application will use the (https://binaryjazz.us/wp-json/genrenator/v1.) API. Below are the documentation and specific endpoints we intend to use and the front-end pages that will use them.

- Link to API documentation: (https://binaryjazz.us/genrenator-api/?ref=apilist.fun)
https://binaryjazz.us/wp-json/genrenator/v1/genre/
  - This will fetch an array of music genres
  - For each genre, I want the `id` and `title`
  - When a specific genre is selected, it will then direct to a list of subgenres in that genre
  - Based on the genre you choose it will fetch a playlist of that genre from Spotify
  https://binaryjazz.us/wp-json/genrenator/v1/story/ 
  - This will return an array of stories.
  - Each endpoint can be fed an additional parameter if you want more than one result returned.

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

* On the `/home` page, users can see all the genres of music
* On the `/home` page, there will be a nav bar to see the lists of genres, and then click to see the subgenres and playlists
* On the `/home` page, users can search for genres and artists

**Example:**
- On the `/artworks` page, users can view a grid of all artwork
- On the `/artworks` page, users can click on a piece of art in the grid, taking them to the details page for that piece of art.
- On the `/artworks/:artworkId` page, users can view additional details for a single piece of art
- On the `/` page, users can search for artwork titles related to a search term.

## 🤔 Stretch User Stories

If time permits, the following stretch features will be implemented in order of priority:

* Users will be able to save their favorite genres
* Users will be able to save and view their favorite artists
* Users will be able to view suggestions of playlists they might like

**Example:**
* Users will be able to save and view favorited artworks using local storage
* Users will be able to change the color scheme of the website from light mode to dark mode

## 📆 Timeline for reaching MVP in 1 week

To ensure that we can complete all core features of the application in 1 week, we will aim to complete tasks according to the following timeline:

Day 1: Project Setup & UI Structure
Goal: Set up the project, create basic UI components, and implement genre selection.
	•	Install React, React Router & set up project structure (Due: Day 1)
	•	Create Title, Header, and Navbar components (Due: Day 1)
	•	Implement Genre Selection UI (Dropdown or Buttons) (Due: Day 1)
	•	Add Favicon (Website Tab Logo) (Due: Day 1)
⸻
Day 2:
Goal: Fetch music from an API and display songs based on genre selection.
	•	Integrate API & fetch songs based on the selected genre (Due: Day 2)
	•	Display song list with a Play button for each track (Due: Day 2)
⸻
Day 3: MVP Due – Core Features Must Work
Goal: Ensure the app can successfully fetch and play music.
	•	Implement Music Player functionality (Due: Day 3)
	•	Add Loading Indicator for API calls(maybe) (Due: Day 3)
	•	Implement Basic Error Handling (Due: Day 3)
Day 4:
Goal: Improve UI and add optional features.
	•	Add a Favorites System (Save liked songs locally) (Due: Day 4)
	•	Display Genre Images next to selections (Due: Day 4)
	•	Implement Dark Mode Toggle (Due: Day 4)
⸻
Day 5: Final Testing & Deployment
Goal: Test, fix bugs, and deploy the app.
	•	Add Search Bar to find specific songs (Due: Day 5)
	•	Perform Final Testing & Bug Fixes (Due: Day 5)

## Wireframes of each page in your application

Below, you can find wireframes for our project. Each wireframe shows a different page of our application as well as the key components of the application. Details such as specific text values or images are intentionally not included:

<img width="567" alt="Screenshot 2025-03-17 at 7 30 34 PM" src="https://github.com/user-attachments/assets/8feb614c-7d01-4345-8cbb-fdb0c8762415" />

<img width="558" alt="Screenshot 2025-03-17 at 7 30 24 PM" src="https://github.com/user-attachments/assets/62d4092d-a599-419a-94d8-d044f52a5a40" />

