'use client'
import { useState } from "react";
import Nav from "@/components/Nav";
import Body from "@/components/Body";
import Footer from "@/components/Footer";
import { Globe, RefreshCw, Settings } from "lucide-react";

export default function Page() {
  const [restart, setRestart] = useState(false);
  const [reset, setReset] = useState(false);
  const [time, setTime] = useState(30);
  const [isRunning, setIsRunning] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(time);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Nav setRestart={setRestart} setReset={setReset} setTime={setTime} />
      <Body time={time} restart={restart} setRestart={setRestart} reset={reset} setIsRunning={setIsRunning} setTimeLeft={setTimeLeft} setUserInput={setUserInput} />
      
      <Footer/>
    </div>
  );
}


