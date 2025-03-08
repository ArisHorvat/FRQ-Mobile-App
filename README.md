# 🏈FRQ - NFL Quiz Trivia Mobile App

Welcome to **FRQ**, the mobile version of the interactive NFL quiz trivia game. This app lets you test your knowledge of NFL players and teams through engaging quiz-style games, just like the website! Below is an overview of the games included, as well as setup instructions for getting the app up and running on your mobile device.

## Game Overview

### 1. WORDLE
- **Description**: A Wordle-style game where you guess the name of an NFL player.
- **Objective**: Use your knowledge of NFL players to make correct guesses within a limited number of tries.

### 2. TOP 10
- **Description**: A guessing game where you try to identify the top 10 players based on specific criteria.
- **Objective**: Use your NFL knowledge to complete the top 10 list for various categories.

### 3. CONNECTIONS
- **Description**: A group-connection game featuring 16 NFL players.
- **Objective**: Connect players in groups of 4 based on common characteristics or criteria.

### 4. GUESS WHO
- **Description**: A guessing game where you identify an NFL player based on hints.
- **Objective**: Guess the player while receiving clues about their team, conference, division, position, age, and number.

## Setup Instructions

### 1. Prerequisites
- [Node.js](https://nodejs.org/) installed (version 16+ recommended).
- [npm](https://www.npmjs.com/) installed.
- [Expo Go](https://expo.dev/) installed on your mobile device.

### 2. Installation Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/YourUsername/FRQ.git
   cd FRQ
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### 3. Run the App
To run the app on your mobile device, use Expo:
```bash
npm start
```
Scan the QR code with Expo Go on your mobile device.

---

## API Endpoints

The app interacts with the same backend API as the website:

| **Endpoint**                | **Description**                                          |
|-----------------------------|----------------------------------------------------------|
| `/api/top10`                | Retrieves the top 10 players from a specific team.       |
| `/api/connections`          | Returns grouped players for the Connections game.        |
| `/api/filter-player/:filter`| Searches for players by name using a filter.             |
| `/api/count-player`         | Returns the total count of players in the database.      |
| `/api/mystery-player`       | Fetches a random NFL player for the Mystery game.        |
| `/api/wordle-player`        | Retrieves a player name for the Wordle game.             |
| `/api/players`              | Returns all players from the database.                   |

---

## Technologies Used

### Frontend
- **React Native** and **Expo** for mobile app development.
- **JavaScript** and **TypeScript** for frontend logic.

### Backend
- **Node.js**: Backend runtime.
- **Express.js**: Web server framework.
- **MSSQL**: Database integration using the `mssql` package.
- **CORS**: Cross-origin resource sharing.

### Database
- **SQL Server**: Stores player, team, and division data.

---

Thank you for checking out FRQ! Test your NFL knowledge and have fun!
