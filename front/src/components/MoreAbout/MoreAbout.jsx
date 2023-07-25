export const AboutComponent = ({ children, url }) => (
  <div className="row content">
    <div className="col-lg-6" data-aos="fade-right" data-aos-delay="100">
      <img src={url} className="more-about-img" alt="About Us" />
    </div>
    {children}
  </div>
);
