import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Question from './components/Question';
import Report from './components/Report';

const App = () => {
    const [questions, setQuestions] = useState([
        {
            text: "How do you judge what should be added in the next version of the app?",
            options: ["Data Analysis", "User's feedback", "Copy from similar product", "Make a questionnaire", "Personal feeling"],
            image: null
        },
        {
            text: "How do you judge what should be added in the next version of the app?",
            options: ["Data Analysis", "User's feedback", "Copy from similar product", "Make a questionnaire", "Personal feeling"],
            image: "https://placehold.co/300x200"
        },
        {
            text: "How do you judge what should be added in the next version of the app?",
            options: ["Data Analysis", "User's feedback", "Copy from similar product", "Make a questionnaire", "Personal feeling"],
            image: null
        }
    ]);

    const [score, setScore] = useState(60);
    const [correctAnswers, setCorrectAnswers] = useState(3);
    const [incorrectAnswers, setIncorrectAnswers] = useState(2);

    return (
        <Router>
            
        </Router>
    );
};

export default App;
