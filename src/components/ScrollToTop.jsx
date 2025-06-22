import { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      id="scrollTopBtn"
      className={`btn btn-secondary position-fixed bottom-0 end-0 mb-3 me-3 ${isVisible ? '' : 'd-none'}`}
      style={{ zIndex: 9999 }}
      onClick={scrollToTop}
    >
      <i className="fas fa-arrow-up fs-8"></i>
    </button>
  );
};

export default ScrollToTop;

