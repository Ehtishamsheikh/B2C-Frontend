import React from 'react';

function BookingCard({ items, heading }) {
  return (
    <section id="why-us" className="services">
      <div className="container">
        <div className="row">
          <div className="section-title text-center" data-aos="fade-left">
            <h2>{heading}</h2>
          </div>
          <div className="col-lg-12 d-flex align-items-stretch">
            <div className="row">
              {items.map((item, index) => (
                <div key={index} className="col-lg-3 col-md-6 col-sm-12 col-12" data-aos="fade-up" data-aos-delay={100 + (index * 100)}>
                  <div className="card">
                    <div className="card-img">
                      <img src={item.imageSrc} alt="" className="img-fluid" />
                    </div>
                    <h3><a href={item.link} className="stretched-link">{item.title}</a></h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingCard;
