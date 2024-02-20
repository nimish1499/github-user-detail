

# GitHub Users Web App

## Overview
This repository contains a React-based web application that interfaces with the GitHub Users API to display a list of users and their detailed profiles. The app is designed as part of the selection process for the Frontend Software Engineer - CDRO role at CloudBees.

## Deployment:

The live version of this project can be viewed [here](https://github-user-app-detail.netlify.app/).

The app has two main pages:
- **User List page**: Displays a list of GitHub users including their avatar, username, and guthub profile url.
- **User Details page**: Shows more detailed information for a selected user, such as the number of public repositories, total stars of the repository, total watchers, total number of issues in the repositor, a link to open the repository on a new page.

**An additional feature of vertical infinite scrolling has been implemented  on the User Detail Pageto enhance user experience and optimize performance when viewing user details.**


## Features
- Fetches data from the GitHub Users API.
- Displays a list of users with essential information.
- Shows detailed profile information on a separate page.
- Implements vertical infinite scrolling for an optimal user experience.
- Fully responsive design for mobile and desktop viewports.

## Technology Stack
- React
- React Router for navigation
- Material-UI for React components
- JavaScript (ES6+)
- Tailwind CSS

### Prerequisites

You will need Node.js and npm installed on your system to run the project. You can download and install them from [Node.js official website](https://nodejs.org/).

## Installation and Setup
To run this project locally, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/nimish1499/github-user-detail.git


2. Navigate to the project directory:
   ```sh
    cd github-user-detail 


3. Navigate to the project directory:
   ```sh
    npm install --legacy-peer-deps

4. Istall project Dependencies: Runs the app in the development mode.\
  Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

  ```sh
    npm start

  

















   
