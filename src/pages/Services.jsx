import React from "react";

function Services() {
  return (
    <div>
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                Services
              </h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li
                    className="breadcrumb-item text-white active"
                    aria-current="page"
                  >
                    Services
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Services
            </h6>
            <h1 className="mb-5">Our Services</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-globe text-primary mb-4" />
                  <h5>WorldWide Tours</h5>
                  <p>
                    Embark on a global adventure with our expertly curated tours
                    to every corner of the world.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-hotel text-primary mb-4" />
                  <h5>Hotel Reservation</h5>
                  <p>
                    Book your stay in the finest hotels with exclusive deals and
                    unparalleled comfort.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-user text-primary mb-4" />
                  <h5>Travel Guides</h5>
                  <p>
                    Navigate your journey with our experienced travel guides who
                    bring each destination to life.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-cog text-primary mb-4" />
                  <h5>Event Management</h5>
                  <p>
                    Let us turn your travel into an experience with bespoke
                    event management for all occasions.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-globe text-primary mb-4" />
                  <h5>24/7 Support</h5>
                  <p>
                    Travel worry-free with our dedicated 24/7 support, always
                    ready to assist you, anytime, anywhere
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-sm-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item rounded pt-3">
                <div className="p-4">
                  <i className="fa fa-3x fa-hotel text-primary mb-4" />
                  <h5>Homely food</h5>
                  <p>
                    Enjoy wholesome, homely food that caters to your palate,
                    wherever your journey takes you
                  </p>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-user text-primary mb-4" />
                <h5>Travel Guides</h5>
                <p>
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                  amet diam
                </p>
              </div>
            </div>
          </div> */}
            {/* <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="service-item rounded pt-3">
              <div className="p-4">
                <i className="fa fa-3x fa-cog text-primary mb-4" />
                <h5>Event Management</h5>
                <p>
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                  amet diam
                </p>
              </div>
            </div>
          </div> */}
          </div>
        </div>
      </div>
      {/* Service End */}
      {/* Testimonial Start */}

      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="text-center">
            <h6 className="section-title bg-white text-center text-primary px-3">
              Testimonial
            </h6>
            <h1 className="mb-5">Our Clients Say!!!</h1>
          </div>
          <div className="owl-carousel testimonial-carousel position-relative">
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src="assets/img/pics/rev-1.jpg"
                style={{ width: 80, height: 80 }}
                alt="rev-1"
              />
              <h5 className="mb-0">Akshay</h5>
              <p>Telangana, India</p>
              <p className="mb-0">
                Absolutely fantastic experience! The travel recommendations were
                spot-on, and every detail was meticulously planned. Highly
                recommend!
              </p>
            </div>
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src="assets/img/pics/rev-2.jpg"
                style={{ width: 80, height: 80 }}
                alt="rev-2"
              />
              <h5 className="mb-0">Naveen</h5>
              <p>New York, USA</p>
              <p className="mt-2 mb-0">
                From booking to exploring, everything was seamless. The website
                provided great insights and tips for a memorable trip. Will
                definitely use it again
              </p>
            </div>
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src="assets/img/pics/rev-3.jpg"
                style={{ width: 80, height: 80 }}
                alt="rev-3"
              />
              <h5 className="mb-0">Vinay</h5>
              <p>Telangana, India</p>
              <p className="mt-2 mb-0">
                Exceptional service and a wealth of information. The
                personalized travel guides made our trip to Malaysia truly
                special. Thank you for such an amazing experience!
              </p>
            </div>
            <div className="testimonial-item bg-white text-center border p-4">
              <img
                className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
                src="assets/img/pics/rev-4.jpg"
                style={{ width: 80, height: 80 }}
                alt="review"
              />
              <h5 className="mb-0">Sai kiran</h5>
              <p>Uk</p>
              <p className="mt-2 mb-0">
                Great resource for travelers! The site was easy to navigate, and
                the suggestions were incredibly helpful. We had a wonderful time
                exploring Malaysia
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </div>
  );
}

export default Services;
