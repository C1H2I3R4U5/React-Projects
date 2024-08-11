import React from 'react'

function Testimonial() {
  return (
    <div>
      {/* Header Section */}
      <div className="container-fluid bg-primary py-5 mb-5 hero-header">
        <div className="container py-5">
          <div className="row justify-content-center py-5">
            <div className="col-lg-10 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-3 text-white animated slideInDown">
                Testimonial
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
                    Testimonial
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

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
            />
            <h5 className="mb-0">Akshay</h5>
            <p>Telangana, India</p>
            <p className="mb-0">
            Absolutely fantastic experience! The travel recommendations were spot-on, and every detail was meticulously planned. Highly recommend!
            </p>
          </div>
          <div className="testimonial-item bg-white text-center border p-4">
            <img
              className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
              src="assets/img/pics/rev-2.jpg"
              style={{ width: 80, height: 80 }}
            />
            <h5 className="mb-0">Naveen</h5>
            <p>New York, USA</p>
            <p className="mt-2 mb-0">
            From booking to exploring, everything was seamless. The website provided great insights and tips for a memorable trip. Will definitely use it again
            </p>
          </div>
          <div className="testimonial-item bg-white text-center border p-4">
            <img
              className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
              src="assets/img/pics/rev-3.jpg"
              style={{ width: 80, height: 80 }}
            />
            <h5 className="mb-0">Vinay</h5>
            <p>Telangana, India</p>
            <p className="mt-2 mb-0">
            Exceptional service and a wealth of information. The personalized travel guides made our trip to Malaysia truly special. Thank you for such an amazing experience!
            </p>
          </div>
          <div className="testimonial-item bg-white text-center border p-4">
            <img
              className="bg-white rounded-circle shadow p-1 mx-auto mb-3"
              src="assets/img/pics/rev-4.jpg"
              style={{ width: 80, height: 80 }}
            />
            <h5 className="mb-0">Sai kiran</h5>
            <p>Uk</p>
            <p className="mt-2 mb-0">
            Great resource for travelers! The site was easy to navigate, and the suggestions were incredibly helpful. We had a wonderful time exploring Malaysia
            </p>
          </div>
        </div>
      </div>
    </div>
      {/* Testimonial End */}
    </div>
  )
}

export default Testimonial
