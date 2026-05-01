import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force immediate scroll to top on route change or refresh
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Use instant to avoid jitter on refresh
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
