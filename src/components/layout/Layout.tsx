import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "@/components/ui/sonner";

const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    // Intersection Observer to handle reveal animation for text and images
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -50px 0px", // Trigger slightly before it hits the bottom
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Function to find and observe all target elements
    const observeElements = () => {
      // Select text elements and images for animation
      const selectors = "h1, h2, h3, h4, h5, h6, p, li, figcaption, img";
      const elements = document.querySelectorAll(selectors);
      
      elements.forEach((el) => {
        // Only observe elements that aren't already visible
        if (!el.classList.contains("is-visible")) {
          observer.observe(el);
        }
      });
    };

    // Initial check
    observeElements();

    // Re-check after a short delay to catch elements that might render late (e.g., after data fetch)
    const timer = setTimeout(observeElements, 500);

    // Use MutationObserver to catch elements added dynamically within the page
    const mutationObserver = new MutationObserver((mutations) => {
      let shouldRecheck = false;
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
          shouldRecheck = true;
        }
      });
      if (shouldRecheck) {
        observeElements();
      }
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      clearTimeout(timer);
    };
  }, [location.pathname]); // Re-run on navigation to handle new page content

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
};

export default Layout;