import React from 'react';
import { useHistory } from 'react-router-dom';
import { startQuiz } from '../api';

const Home = () => {
    const history = useHistory();

    const handleStart = async () => {
        try {
            await startQuiz();
            history.push('/question/1');
        } catch (error) {
            console.error('Error starting quiz:', error);
        }
    };

    return (
<div classname="flex justify-center items-center min-h-screen bg-gray-100">
 <div classname="w-full max-w-md">
  <div classname="bg-white rounded-lg shadow-lg overflow-hidden">
   <div classname="p-4 bg-gradient-to-b from-purple-400 to-purple-500 text-white text-center">
    <img alt="Logo" classname="mx-auto mb-2" height="50" src="https://storage.googleapis.com/a1aa/image/T7frieQFk0omlUnjJcHy185XJqLZ07uBhkhoTywkRYYxofPnA.jpg" width="50"/>
    <h1 classname="text-2xl font-bold">
     Quiz
    </h1>
   </div>
   <div classname="p-4">
    <button classname="w-full py-2 bg-red-500 text-white rounded-lg font-bold" onclick="{handleStart}">
     Start
    </button>
   </div>
  </div>
 </div>
</div>
);
};

export default Home;