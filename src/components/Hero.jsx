export default function Hero() {
  return (
    <section id="hero" className="hero-grid-container">
      {/* Left Side: Content & Action */}
      <div className="hero-l">
        <div className="hero-ey">
          Senior Virtual Assistant · 12+ Years · U.S.-Based Clients
        </div>

        <h1 className="hero-h1">
          REAL WORK.<br />
          <span className="hl">REAL RESULTS.</span>
        </h1>

        <p className="hero-sub">
          I help Healthcare Practices, E-commerce Brands, and Service-Based Businesses Streamline Operations, Improve Customer Experience, and Support Revenue-Generating Workflows through Structured Virtual Assistance and Operational Execution.
        </p>

        <div className="hero-ctas">
          <a href="#book" className="btn-y" data-track="hero_book">
            Book Interview →
          </a>
          <a href="#services" className="btn-o" data-track="hero_services">
            View Capabilities
          </a>
        </div>

      
      </div>

      {/* Right Side: Portrait Image & Floating 3D Stat Cards */}
      <div className="hero-r">
        <div className="hero-image-wrapper">
          <img
            src="/images/hero-profile.jpg"
            alt="John Paul Pancho"
            className="hero-photo"
          />
          <div className="flc fc1">
            <strong>12+</strong>
            <span>Years Experience</span>
          </div>
          <div className="flc fc2">
            <strong>$121K+</strong>
            <span>Revenue in 2 Weeks</span>
          </div>
        </div>
      </div>
    </section>
  );
}
