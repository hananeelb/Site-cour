import React from 'react'
import Menu from './Menu'
import { Link } from 'react-router-dom';
function Home() {
  return (
    <>
    <Menu/>
  <div className="container-fluid p-0 mb-5">
  <div
    className="container-fluid p-0 mb-5 position-relative"
    style={{
      backgroundImage: "url('./back.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100vh",
      position: "relative",
    }}
  >
    {/* Overlay */}
    <div
      style={{
        backgroundColor: "rgba(24, 29, 56, 0.6)",
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    ></div>

    {/* Content centered */}
    <div
      className="text-center p-4"
      style={{
        position: "relative",
        zIndex: 2,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      {/* <h5 className="text-primary text-uppercase mb-3">Best Online Courses</h5> */}
      <h1 className="display-3 mb-4 hero-title">La meilleure plateforme d’apprentissage</h1>
      <p className="fs-5 mb-4">
        Bienvenue dans votre espace dédié à la compréhension des leçons de votre formation
      </p>
      <div>
        {/* <button
  className="btn btn-primary py-3 px-5 me-3"
  onClick={() => {
    const section = document.getElementById("Lsuive");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  Read More
</button> */}
        
        
      </div>
    </div>
  </div>
</div>


  
  {/* Service Start */}
  {/* <div className="container-xxl py-5" id='Lsuive'>
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s" >
          <div className="service-item text-center pt-3" >
            <div className="p-4" >
              <i className="fa fa-3x fa-graduation-cap text-primary mb-4" />
              <h5 className="mb-3">Skilled Instructors</h5>
              <p>
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-item text-center pt-3">
            <div className="p-4">
              <i className="fa fa-3x fa-globe text-primary mb-4" />
              <h5 className="mb-3">Online Classes</h5>
              <p>
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="service-item text-center pt-3">
            <div className="p-4">
              <i className="fa fa-3x fa-home text-primary mb-4" />
              <h5 className="mb-3">Home Projects</h5>
              <p>
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="service-item text-center pt-3">
            <div className="p-4">
              <i className="fa fa-3x fa-book-open text-primary mb-4" />
              <h5 className="mb-3">Book Library</h5>
              <p>
                Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita
                amet diam
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
  {/* Service End */}
  {/* About Start */}
  {/* <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5">
        <div
          className="col-lg-6 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ minHeight: 400 }}
        >
          <div className="position-relative h-100">
            <img
              className="img-fluid position-absolute w-100 h-100"
              src="./templ/img/about.jpg"
              alt=""
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
          <h6 className="section-title bg-white text-start text-primary pe-3">
            About Us
          </h6>
          <h1 className="mb-4">Welcome to eLEARNING</h1>
          <p className="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit.
          </p>
          <p className="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <div className="row gy-2 gx-4 mb-4">
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                Skilled Instructors
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                Online Classes
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                International Certificate
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                Skilled Instructors
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                Online Classes
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                International Certificate
              </p>
            </div>
          </div>
          <Link className="btn btn-primary py-3 px-5 mt-2" to="">
            Read More
          </Link>
        </div>
      </div>
    </div>
  </div> */}
  {/* About End */}
  {/* Categories Start */}
  {/* <div className="container-xxl py-5 category">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Categories
        </h6>
        <h1 className="mb-5">Courses Categories</h1>
      </div>
      <div className="row g-3">
        <div className="col-lg-7 col-md-6">
          <div className="row g-3">
            <div
              className="col-lg-12 col-md-12 wow zoomIn"
              data-wow-delay="0.1s"
            >
              <Link className="position-relative d-block overflow-hidden" to="">
                <img className="img-fluid" src="./templ/img/cat-1.jpg" alt="" />
                <div
                  className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                  style={{ margin: 1 }}
                >
                  <h5 className="m-0">Web Design</h5>
                  <small className="text-primary">49 Courses</small>
                </div>
              </Link>
            </div>
            <div
              className="col-lg-6 col-md-12 wow zoomIn"
              data-wow-delay="0.3s"
            >
              <Link className="position-relative d-block overflow-hidden" to="">
                <img className="img-fluid" src="./templ/img/cat-2.jpg" alt="" />
                <div
                  className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                  style={{ margin: 1 }}
                >
                  <h5 className="m-0">Graphic Design</h5>
                  <small className="text-primary">49 Courses</small>
                </div>
              </Link>
            </div>
            <div
              className="col-lg-6 col-md-12 wow zoomIn"
              data-wow-delay="0.5s"
            >
              <Link className="position-relative d-block overflow-hidden" to="">
                <img className="img-fluid" src="./templ/img/cat-3.jpg" alt="" />
                <div
                  className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
                  style={{ margin: 1 }}
                >
                  <h5 className="m-0">Video Editing</h5>
                  <small className="text-primary">49 Courses</small>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div
          className="col-lg-5 col-md-6 wow zoomIn"
          data-wow-delay="0.7s"
          style={{ minHeight: 350 }}
        >
          <Link
            className="position-relative d-block h-100 overflow-hidden"
            to=""
          >
            <img
              className="img-fluid position-absolute w-100 h-100"
              src="./templ/img/cat-4.jpg"
              alt=""
              style={{ objectFit: "cover" }}
            />
            <div
              className="bg-white text-center position-absolute bottom-0 end-0 py-2 px-3"
              style={{ margin: 1 }}
            >
              <h5 className="m-0">Online Marketing</h5>
              <small className="text-primary">49 Courses</small>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div> */}
  {/* Categories Start */}
  
  {/* <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
           
               
                </div>
               
                    </div>
                   
        <div class="container">
           
        </div> */}
   
   </>
  )
}

export default Home
