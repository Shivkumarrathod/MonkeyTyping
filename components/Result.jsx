'use client';
import { useEffect, useRef, useState } from 'react';
import getRandomWords from '@/utiles/words';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const Results = ({ userInput, defaultText, setTimeLeft, time, setUserInput, setIsRunning }) => {
  const totalChars = defaultText.length;
  const correctChars = userInput.split('').filter((char, i) => char === defaultText[i]).length;
  const accuracy = ((correctChars / totalChars) * 100).toFixed(2);
  const incorrectChars = userInput.length - correctChars;

  const data = {
    labels: ['Correct', 'Incorrect'],
    datasets: [
      {
        label: 'Typing Accuracy',
        data: [correctChars, incorrectChars],
        backgroundColor: ['#4CAF50', '#F44336'],
      },
    ],
  };

  return (
    <div className="flex flex-col items-center gap-4 p-5">
      <h2 className="text-2xl font-bold">Time's Up!</h2>
      <div className="flex justify-center items-center gap-10">
        <p className="text-lg">Accuracy: {accuracy}%</p>
        <p className="text-lg">Correct: {correctChars} / {totalChars}</p>
        <p className="text-lg">Total Typed: {userInput.length} chars</p>
      </div>
      <div className="w-80">
        <Bar data={data} />
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => {
            setUserInput('');
            setTimeLeft(time);
            setIsRunning(false);
          }}
          className="p-2 bg-black rounded-lg text-white hover:text-lg"
        >
          Restart
        </button>
        <button
          onClick={() => {
            setUserInput('');
            setTimeLeft(time);
            setIsRunning(false);
          }}
          className="p-2 bg-black rounded-lg text-white hover:text-lg"
        >
          Reset (New Words)
        </button>
      </div>
    </div>
  );
};
export default Results