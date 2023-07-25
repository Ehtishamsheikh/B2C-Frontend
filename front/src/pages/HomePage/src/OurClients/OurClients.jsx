import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./OurClients.css";
import { ourClientImages } from "../../../../constants/CardsConstants";

function ClientsSection() {
  useEffect(() => {
    Aos.init();
  }, []);

  const ImageMap = (reversed) => (
    <div className="marquee_container">
      {[...Array(4)].map((_, index) => (
        <React.Fragment key={`marquee1-${index}`}>
          {reversed !== "reversed"
            ? ourClientImages.map((image, innerIndex) => (
                <div
                  className="marqueeElement"
                  key={`marquee1-${index}-${innerIndex}`}
                >
                  <img src={image} className="img-fluid" alt="" />
                </div>
              ))
            : ourClientImages
                .slice()
                .reverse()
                .map((image, innerIndex) => (
                  <div
                    className="marqueeElement"
                    key={`marquee1-${index}-${innerIndex}`}
                  >
                    <img src={image} className="img-fluid" alt="" />
                  </div>
                ))}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="container-fluid">
      <div className="section-title text-center" data-aos="fade-down">
        <h2 className="p-0 m-0">Our Clients</h2>
      </div>
      <section id="clients" className="clients mb-0">
        <div className="marquee_text">{ImageMap("not reversed")}</div>
      </section>

      <section id="clients" className="clients">
        <div className="marquee_text2">{ImageMap("reversed")}</div>
      </section>
    </div>
  );
}

export default ClientsSection;
