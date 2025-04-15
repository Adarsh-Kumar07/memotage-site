import FadeInSection from "./FadeInSection";
import ButtonMotion from "./ButtonMotion";
import React, { useEffect, useState } from 'react';

export default function Hero() {
  const fullText = "MemoTag is an AI-powered dementia care platform helping caregivers and doctors support memory and routine — with empathy.";
  const words = fullText.split(' '); // Split sentence into words

  const [visibleWords, setVisibleWords] = useState([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setVisibleWords((prev) => [...prev, words[index]]);
      index++;
      if (index >= words.length) clearInterval(interval);
    }, 150); // Speed of appearance (ms per word)

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <FadeInSection>
      <section className="h-screen flex flex-col pt-20 justify-center items-center bg-gradient-to-br from-indigo-900 to-purple-700 text-white text-center p-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">AI That Remembers When They Can’t</h1>
        <p className="text-xl md:text-2xl max-w-xl mb-8">
          {visibleWords.map((word, i) => (
              <span key={i} className="inline-block mr-2 animate-fade-in">
                {word}
              </span>
            ))}
        </p>
        <div className="space-x-4 text-black">
        <ButtonMotion >
          Join as a Caregiver
        </ButtonMotion>
        <ButtonMotion>
          Partner as Doctor
        </ButtonMotion>
        </div>
      </section>
    </FadeInSection>
  );
}


  