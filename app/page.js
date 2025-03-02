'use client'
import { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Body from "@/components/Body";
import Footer from "@/components/Footer";

export default function Page() {
  const [restart, setRestart] = useState(false);
  const [reset, setReset] = useState(false);
  const [time, setTime] = useState(30);
  const [isRunning, setIsRunning] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(time);

  // Sync timeLeft when time changes
  useEffect(() => {
    setTimeLeft(time);
  }, [time]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Nav setRestart={setRestart} setReset={setReset} setTime={setTime} />
      <Body 
        time={time} 
        timeLeft={timeLeft} 
        setTimeLeft={setTimeLeft} 
        restart={restart} 
        setRestart={setRestart} 
        reset={reset} 
        setIsRunning={setIsRunning} 
        setUserInput={setUserInput} 
      />
      <Footer/>
    </div>
  );
}
