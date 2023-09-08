import { useState, useEffect } from "react";
import { DynamicHeadingStyled } from "./DynamicHeading.styled";

export default function DynamicHeading() {
  const phrases = [" Dream Wedding", " Budget", " Vision"];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState(
    phrases[currentPhraseIndex]
  );
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); // Start fading out
      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setIsFading(false); // Start fading in with the new phrase
      }, 700); // Wait for 500ms (half of the transition duration) before changing the phrase
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentPhrase(phrases[currentPhraseIndex]);
  }, [currentPhraseIndex]);

  return (
    <DynamicHeadingStyled>
      <h1>
        Hassle-Free Vendor Search for Your
        <span className={`heading ${isFading ? "fade-out" : ""}`}>
          {currentPhrase}
        </span>{" "}
      </h1>
    </DynamicHeadingStyled>
  );
}
