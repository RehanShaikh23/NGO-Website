import React from 'react';

/**
 * AnimatedText splits text into individual letters and animates them with a vertical clip slide-down effect.
 */
export default function AnimatedText({ 
  text, 
  className = "", 
  style = {},
  delay = 0, 
  duration = 0.8, 
  stagger = 0.04,
  byWord = false
}) {
  const words = text.split(" ");
  let globalCharIndex = 0;

  if (byWord) {
    return (
      <span className={`inline-flex flex-wrap ${className}`} style={style}>
        {words.map((word, wordIndex) => {
          const currentDelay = delay + wordIndex * stagger;
          return (
            <span 
              key={wordIndex} 
              className="inline-block overflow-hidden mr-[0.25em] py-[0.1em] my-[-0.1em] px-[0.05em] mx-[-0.05em]"
              style={{ verticalAlign: 'bottom' }}
            >
              <span
                className="inline-block animate-slide-down-clip"
                style={{
                  animationDelay: `${currentDelay}s`,
                  animationDuration: `${duration}s`,
                  animationFillMode: 'both',
                }}
              >
                {word}
              </span>
            </span>
          );
        })}
      </span>
    );
  }

  return (
    <span className={`inline-flex flex-wrap ${className}`} style={style}>
      {words.map((word, wordIndex) => {
        const letters = word.split("");
        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.25em]">
            {letters.map((char, charIndex) => {
              const currentDelay = delay + globalCharIndex * stagger;
              globalCharIndex++;
              return (
                <span 
                  key={charIndex} 
                  className="inline-block overflow-hidden px-[0.15em] mx-[-0.15em] py-[0.05em] my-[-0.05em]"
                  style={{ verticalAlign: 'bottom' }}
                >
                  <span
                    className="inline-block animate-slide-down-clip"
                    style={{
                      animationDelay: `${currentDelay}s`,
                      animationDuration: `${duration}s`,
                      animationFillMode: 'both',
                    }}
                  >
                    {char}
                  </span>
                </span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
}
