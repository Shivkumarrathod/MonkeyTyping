import getRandomWords from "@/utiles/words";
import { useEffect, useRef, useState } from "react";
import Results from "./Result"; 
import { Globe, RefreshCw } from "lucide-react";

const Body = ({ time, timeLeft, setTimeLeft, restart, reset, setUserInput, setIsRunning, setRestart }) => {
  const [defaultText, setDefaultText] = useState("");
  const [userInput, setUserInputState] = useState("");
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  const [isRunning, setIsRunningState] = useState(false);
  const [lastScrollIndex, setLastScrollIndex] = useState(0);

  useEffect(() => {
    setDefaultText(getRandomWords(time)); 
    setTimeLeft(time); // Ensure timeLeft resets when time changes
  }, [time, setTimeLeft]);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
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
    setUserInputState(""); 
    setTimeLeft(time); // Ensure timer resets correctly
    setIsRunningState(false); 
    setLastScrollIndex(0); 
    setDefaultText(getRandomWords(time)); 
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
          containerRef.current.scrollTop += 40;
        }
      }, 0);
    }
  };

  if (timeLeft === 0) {
    return <Results userInput={userInput} setUserInput={setUserInputState} defaultText={defaultText} setTimeLeft={setTimeLeft} setIsRunning={setIsRunning} time={time} />;
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
      <div ref={containerRef} className="overflow-hidden max-h-[12rem] p-5 w-[80rem] text-3xl leading-loose tracking-wider">
  {defaultText.split("").map((char, index) => {
    const isTyped = userInput[index] !== undefined;
    const isCorrect = userInput[index] === char;
    const isCursor = userInput.length === index; // Check if cursor is at this character

    return (
      <span
        key={index}
        style={{
          color: isTyped ? (isCorrect ? "white" : "red") : "white",
          opacity: isTyped ? 1 : 0.5,
          borderBottom: isCursor ? "3px solid yellow" : "none", // Yellow underline for cursor position
          paddingBottom: isCursor ? "2px" : "0", // Adjust spacing for better visibility
        }}
      >
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
