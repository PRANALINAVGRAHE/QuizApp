# QuizApp

This is a Quiz web app built with React. The app asks the users a set of questions and provides them a score at the end.

## Features

- Home screen to start the quiz
- Question screen to show questions one after the other
- Report screen to show the total score and number of correct and incorrect answers
- Mock server to simulate the REST API


## Installation

1. Clone the repository:
git clone https://github.com/your-username/quiz-app.git
cd quiz-app


2. Install dependencies:
npm install

3. Start the mock server:
json-server --watch db.json --port 3000

4. Start the React app:
npm start


Usage

- Click on the "Start" button to begin the quiz.
- Answer the questions one by one.
- After the last question, the report screen will show your score.
- Click on the "Start Again" button to take the quiz again.

API Endpoints

- `POST /start`: Start a new quiz and fetch questions.
- `POST /submit`: Submit the response for a question.
- `POST /finish`: Finish the quiz and get the score report.
