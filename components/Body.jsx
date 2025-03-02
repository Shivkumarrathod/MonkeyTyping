import getRandomWords from "@/utiles/words";
import { useEffect, useRef, useState } from "react";
import Results from "./Result"; // Assuming Results component is in the same folder
import { Globe, RefreshCw } from "lucide-react";

const Body = ({ time, restart, reset, setUserInput, setIsRunning, setTimeLeft, setRestart }) => {
  const [defaultText, setDefaultText] = useState("");
  const [userInput, setUserInputState] = useState("");
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const [timeLeft, setTimeLeftState] = useState(time);
  const [isRunning, setIsRunningState] = useState(false);
  const [lastScrollIndex, setLastScrollIndex] = useState(0);

  useEffect(() => {
    setDefaultText(getRandomWords(time)); // Generate new words when time changes
  }, [time]);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeftState((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isRunning, timeLeft]);

  useEffect(() => {
    if (restart || reset) {
      resetGame();
      setRestart(false);
    }
  }, [restart, reset]);

  const resetGame = () => {
    setUserInputState(""); // Reset user input
    setTimeLeftState(time); // Reset timer
    setIsRunningState(false); // Stop the timer
    setLastScrollIndex(0); // Reset scroll index
    setDefaultText(getRandomWords(time)); // Generate new random words when reset is clicked
  };

  const handleChange = (e) => {
    if (timeLeft <= 0) return;
    if (!isRunning) setIsRunningState(true);

    const value = e.target.value;
    if (value.length > defaultText.length) return;

    setUserInputState(value);

    const wordsPerLine = 10;
    const wordsTyped = value.trim().split(" ").length;
    const linesCompleted = Math.floor(wordsTyped / wordsPerLine);

    if (linesCompleted > lastScrollIndex) {
      setLastScrollIndex(linesCompleted);
      setTimeout(() => {
        if (containerRef.current) {
          containerRef.current.scrollTop += 40; // Scroll when 10 words are typed
        }
      }, 0);
    }
  };

  if (timeLeft === 0) {
    return <Results userInput={userInput} setUserInput={setUserInputState} defaultText={defaultText} setTimeLeft={setTimeLeftState} setIsRunning={setIsRunningState} time={time} />;
  }

  return (
    <div className="flex flex-col items-center gap-4 px-4 text-2xl max-w-2xl mx-auto" onClick={() => inputRef.current.focus()}>
      <div className="flex justify-center w-full ">
        <div className="flex  gap-5 justify-center items-center">
          <Globe size={20} color="yellow" />
          <span className="text-white text-sm ">english </span>
        </div>
      </div>
      <p className="w-full text-end text-yellow-300">{isRunning ? timeLeft : ""}</p>
      <div ref={containerRef} className="overflow-hidden max-h-[12rem]  p-5 w-[80rem] text-3xl leading-loose tracking-wider">
        {defaultText.split("").map((char, index) => {
          const isTyped = userInput[index] !== undefined;
          const isCorrect = userInput[index] === char;
          return (
            <span key={index} style={{ color: isTyped ? (isCorrect ? "white" : "red") : "white", opacity: isTyped ? 1 : 0.5 }}>
              {char}
            </span>
          );
        })}
      </div>
      <input ref={inputRef} type="text" value={userInput} onChange={handleChange} className="absolute opacity-0" autoFocus />
      <div className="flex justify-center w-full max-w-2xl text-xl gap-20">
        <button onClick={() => setRestart(true)} className="flex items-center gap-2 text-white hover:font-bold cursor-pointer">
          <RefreshCw size={20} /> 
        </button>
      </div>
    </div>
  );
};

export default Body;