import React, { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);


  return (
    <div className="fixed bottom-3 right-3 cursor-pointer z-20 hover:animate-pulse">
      {isVisible && (
        <div onClick={scrollToTop} className='bg-white hover:bg-other stroke-black border-black rounded-full h-16 w-16'>
          <div className="px-1 py-1 text-xl leading-5 px-auto">
          <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-14"
      viewBox="0 0 512 512"
    >
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M176 249.38L256 170l80 79.38m-80-68.35V342"
      ></path>
      <path
        fill="none"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
      ></path>
    </svg>
            </div>
        </div>
      )}
    </div>
  );
}