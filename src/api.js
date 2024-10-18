import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const startQuiz = () => {
    return axios.post(`${API_URL}/start`);
};

export const submitAnswer = (questionId, answer, timeTaken) => {
    return axios.post(`${API_URL}/submit`, { questionId, answer, timeTaken });
};

export const finishQuiz = () => {
    return axios.post(`${API_URL}/finish`);
};