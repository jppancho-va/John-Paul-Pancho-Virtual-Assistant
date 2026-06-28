import { useEffect, useRef } from "react";

export default function StatsBar() {
  const containerRef = useRef(null);
  // Tracks active intervals to safely reset animations without collisions
  const timersRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const counters = container.querySelectorAll(".cnt");

    const animateCounter = (counter) => {
      const target = parseInt(counter.getAttribute("data-to"), 10);
      const duration = 1500; 
      const frameRate = 1000 / 60; // Smooth 60 FPS baseline
      const totalFrames = Math.round(duration / frameRate);
      let frame = 0;

      const timer = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const easeOutQuad = progress * (2 - progress);
        const currentValue = Math.round(easeOutQuad * target);

        if (frame >= totalFrames) {
          counter.textContent = target.toLocaleString();
          clearInterval(timer);
        } else {
          counter.textContent = currentValue.toLocaleString();
        }
      }, frameRate);

      timersRef.current.push(timer);
    };

    const clearAllTimers = () => {
      timersRef.current.forEach((id) => clearInterval(id));
      timersRef.current = [];
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger animation on entering viewport
            clearAllTimers();
            counters.forEach((counter) => animateCounter(counter));
          } else {
            // Reset to 0 when scrolled completely off-screen for loop capability
            clearAllTimers();
            counters.forEach((counter) => {
              counter.textContent = "0";
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(container);

    return () => {
      clearAllTimers();
      observer.disconnect();
    };
  }, []);

  return (
    /* UPDATED: Converted outer container to full-bleed divider layout */
    <div className="stats-section-divider" ref={containerRef}>
      <div className="stats-grid">
        <div className="stat-box">
          <div className="stat-number">
            <span className="cnt" data-to="12">0</span>+
          </div>
          <div className="stat-label">Years Experience</div>
        </div>
        
        <div className="sdv" />
        
        <div className="stat-box">
          <div className="stat-number">
            $<span className="cnt" data-to="121">0</span>K+
          </div>
          <div className="stat-label">Revenue in 2 Weeks</div>
        </div>
        
        <div className="sdv" />
        
        <div className="stat-box">
          <div className="stat-number">
            <span className="cnt" data-to="1000">0</span>+
          </div>
          <div className="stat-label">Monthly Interactions</div>
        </div>
        
        <div className="sdv" />
        
        <div className="stat-box">
          <div className="stat-number">
            <span className="cnt" data-to="75">0</span>%
          </div>
          <div className="stat-label">Sales Conversion Rate</div>
        </div>
      </div>
    </div>
  );
}
