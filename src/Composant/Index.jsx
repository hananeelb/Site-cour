import React from 'react'
import { Link } from 'react-router-dom'

function Index() {
  return (
    <>
  {/* Spinner Start */}
  {/* <div
    id="spinner"
    className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
  >
    <div
      className="spinner-border text-primary"
      style={{ width: "3rem", height: "3rem" }}
      role="status"
    >
      <span className="sr-only">Chargement...</span>
    </div>
  </div> */}
  {/* Spinner End */}
  {/* Navbar Start */}
  <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
    <Link
      to="index.html"
      className="navbar-brand d-flex align-items-center px-4 px-lg-5"
    >
      <h2 className="m-0 text-primary">
        <i className="fa fa-book me-3" />
        {/* eLEARNING */}
        FrFacile
      </h2>
    </Link>
    <button
      type="button"
      className="navbar-toggler me-4"
      data-bs-toggle="collapse"
      data-bs-target="#navbarCollapse"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto p-4 p-lg-0">
      </div>
     <Link to="/Home" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">
  Commencer
  <i className="fa fa-arrow-right ms-3" />
</Link>

    </div>
  </nav>
  {/* Navbar End */}
  {/* Carousel Start */}
  
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
      <h5 className="text-primary text-uppercase mb-3">Meilleurs cours en ligne</h5>
      <h1 className="display-3 mb-4 hero-title">La meilleure plateforme d'apprentissage en ligne</h1>
      <p className="fs-5 mb-4">
        Apprenez le francais pas a pas avec des cours simples, des exercices
        pratiques et un suivi progressif adapte a votre niveau.
      </p>
      <div>
        <button
  className="btn btn-primary py-3 px-5 me-3"
  onClick={() => {
    const section = document.getElementById("Lsuive");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  Lire plus
</button>
        
        <Link to="#" className="btn btn-light py-3 px-5">
          Commencer
        </Link>
      </div>
    </div>
  </div>
</div>


    {/* <div className="owl-carousel header-carousel position-relative">
      <div className="owl-carousel-item position-relative">
        <img className="img-fluid" src="./templ/img/carousel-1.jpg" alt="" />
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
          style={{ background: "rgba(24, 29, 56, .7)" }}
        >
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-sm-10 col-lg-8">
                <h5 className="text-primary text-uppercase mb-3 animated slideInDown">
                  Best Online Courses
                </h5>
                <h1 className="display-3 text-white animated slideInDown">
                  The Best Online Learning Platform
                </h1>
                <p className="fs-5 text-white mb-4 pb-2">
                  Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam
                  no. Kasd rebum ipsum et diam justo clita et kasd rebum sea
                  sanctus eirmod elitr.
                </p>
                <Link
                  to=""
                  className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                >
                  Read More
                </Link>
                <Link
                  to=""
                  className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                >
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="owl-carousel-item position-relative">
        <img className="img-fluid" src="./templ/img/carousel-2.jpg" alt="" />
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
          style={{ background: "rgba(24, 29, 56, .7)" }}
        >
          <div className="container">
            <div className="row justify-content-start">
              <div className="col-sm-10 col-lg-8">
                <h5 className="text-primary text-uppercase mb-3 animated slideInDown">
                  Best Online Courses
                </h5>
                <h1 className="display-3 text-white animated slideInDown">
                  Get Educated Online From Your Home
                </h1>
                <p className="fs-5 text-white mb-4 pb-2">
                  Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam
                  no. Kasd rebum ipsum et diam justo clita et kasd rebum sea
                  sanctus eirmod elitr.
                </p>
                <Link
                  to=""
                  className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                >
                  Read More
                </Link>
                <Link
                  to=""
                  className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                >
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> */}
  {/* </div> */}
  {/* Carousel End */}
  {/* Service Start */}
  <div className="container-xxl py-5" id='Lsuive'>
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s" >
          <div className="service-item text-center pt-3" >
            <div className="p-4" >
              <i className="fa fa-3x fa-graduation-cap text-primary mb-4" />
              <h5 className="mb-3">Formateurs qualifies</h5>
              <p>
                Des explications claires pour progresser rapidement en francais.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-item text-center pt-3">
            <div className="p-4">
              <i className="fa fa-3x fa-globe text-primary mb-4" />
              <h5 className="mb-3">Cours en ligne</h5>
              <p>
                Accedez aux lecons a tout moment, sur mobile et ordinateur.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="service-item text-center pt-3">
            <div className="p-4">
              <i className="fa fa-3x fa-home text-primary mb-4" />
              <h5 className="mb-3">Exercices a la maison</h5>
              <p>
                Entrainez-vous avec des activites concretes et progressives.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="service-item text-center pt-3">
            <div className="p-4">
              <i className="fa fa-3x fa-book-open text-primary mb-4" />
              <h5 className="mb-3">Bibliotheque</h5>
              <p>
                Retrouvez des ressources utiles pour renforcer vos connaissances.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Service End */}
  {/* About Start */}
  <div className="container-xxl py-5">
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
            A propos
          </h6>
          <h1 className="mb-4">Bienvenue sur FrFacile</h1>
          <p className="mb-4">
            FrFacile vous aide a apprendre la grammaire et le vocabulaire
            francais avec une methode simple, claire et efficace.
          </p>
          <p className="mb-4">
            Vous progressez grace a des cours resumes, des exemples concrets et
            des exercices corriges pour pratiquer chaque notion.
          </p>
          <div className="row gy-2 gx-4 mb-4">
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                Formateurs qualifies
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                Cours en ligne
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                Certificat international
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                Formateurs qualifies
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                Cours en ligne
              </p>
            </div>
            <div className="col-sm-6">
              <p className="mb-0">
                <i className="fa fa-arrow-right text-primary me-2" />
                Certificat international
              </p>
            </div>
          </div>
          <Link className="btn btn-primary py-3 px-5 mt-2" to="">
            Lire plus
          </Link>
        </div>
      </div>
    </div>
  </div>
  {/* About End */}
  {/* Categories Start */}
  <div className="container-xxl py-5 category">
    <div className="container">
      <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
        <h6 className="section-title bg-white text-center text-primary px-3">
          Categories
        </h6>
        <h1 className="mb-5">Categories de cours</h1>
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
                  <h5 className="m-0">Conception web</h5>
                  <small className="text-primary">49 cours</small>
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
                  <h5 className="m-0">Design graphique</h5>
                  <small className="text-primary">49 cours</small>
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
                  <h5 className="m-0">Montage video</h5>
                  <small className="text-primary">49 cours</small>
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
              <h5 className="m-0">Marketing en ligne</h5>
              <small className="text-primary">49 cours</small>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
  {/* Categories Start */}
  
  <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
           
               
                </div>
               
                    </div>
               
               
        <div class="container">
           
        </div>
   
   
</>

  )
}

export default Index
