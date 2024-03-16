import React from 'react'
import '../Home.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 450,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="container-fluid">
      <div className="row mb-5">
        <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false">
          <div class="carousel-inner ">
            <div class="carousel-item active">
              <img src="https://www.the20sresort.in/images/s1.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption  align-items-center justify-content-center">

                <h5>---------------------WELCOME TO---------------------</h5>
                <h1>Yashraj Resort</h1>

              </div>
            </div>
            <div class="carousel-item">
              <img src="https://www.the20sresort.in/images/s2.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption  align-items-center justify-content-center ">
                <h5>---------------------WELCOME TO---------------------</h5>
                <h1>Yashraj Resort</h1>
              </div>
            </div>

            <div class="carousel-item">
              <img src="https://www.the20sresort.in/images/s3.jpg" class="d-block w-100" alt="..." />
              <div class="carousel-caption  align-items-center justify-content-center  ">
                <h5>---------------------WELCOME TO---------------------</h5>
                <h1>Yashraj Resort</h1>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="row mb-5 bg-body-tertiary">
        <h2 className="text-center about-heading">About Us</h2>
        <p className="about-text fs-3 text-center">
          We Provide The Most Luxurious Hospitality Services The land of sun, sand, and sea – Goa
          is synonymous with unhindered beauty and splendid recreation. Paradise Hotels Goa is a
          captivating paradise for unwinding and revelling, perfect for an idyllic family vacation and conducting important business meetings.
        </p>
      </div>
      <div className="row mb-5 align-items-center">
        <div className="col-xl-3 col-md-6 text-center">
          <img src="https://www.the20sresort.in/images/abn1.jpg" className="img-responsive img-left shadow pt-1" alt="Image1" />
        </div>
        <div className="col-xl-6 col-md-6 text-center">
          <img src="https://www.the20sresort.in/images/abn.jpg" className="img-responsive shadow pt-1" alt="Image2" />
        </div>
        <div className="col-xl-3 col-md-6 text-center">
          <img src="https://www.the20sresort.in/images/abt2.jpg" className="img-responsive img-right shadow pt-1" alt="Image3" />
        </div>
      </div>

      <div className="row mt-3 mb-5 bg-body-tertiary">
        <h1 className='text-center mb-3 fachead'>Facilities</h1>
        <div id="facilityCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner align-content-center">
            <Slider {...settings}>
              <div className="carousel-item active ">
                <img src="https://www.the20sresort.in/images/Home-1/about-icon-2.png" className='i1' alt='img2' />
                <h3>Parking</h3>
              </div>
              <div className="carousel-item">
                <img src="https://www.the20sresort.in/images/Home-1/about-icon-3.png" className='i1' alt='img3' />
                <h3>Security</h3>
              </div>
              <div className="carousel-item">
                <img src="https://www.the20sresort.in/images/Home-1/about-icon-4.png" className='i1' alt='img4' />
                <h3>Wifi</h3>
              </div>
              <div className="carousel-item">
                <img src="https://www.the20sresort.in/images/Home-1/about-icon-1.png" className='i1' alt='img5' />
                <h3>Restaurant</h3>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  )
}
