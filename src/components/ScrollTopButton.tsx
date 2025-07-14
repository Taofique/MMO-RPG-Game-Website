import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function toggleVisibility() {
      setVisible(window.pageYOffset > 300);
    }

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition"
        >
          <FaArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  );
}

export default ScrollToTopButton;
