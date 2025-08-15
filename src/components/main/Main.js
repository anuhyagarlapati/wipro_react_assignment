import React from "react";
import "./Main.css";
import img1 from "../../Images/course1.jpg";
import img2 from '../../Images/courasel2.jpg'
import web from '../../Images/web.jpeg'
import market from '../../Images/market.jpeg'
import data from '../../Images/data.jpeg'
const Main = (props) => {
  return (
    <div className="Main">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="..." />
            <div className="carousel-caption custom-caption">
              <div className="custom-card p-4">
                <h2 className="fw-bold display-6">
                  Meet your new AI conversation coach
                </h2>
                <p className="fs-6">
                  Role Play is the interactive way to practice your business
                  and communication skills.
                </p>
                <a href="" className="btn btn-custom">
                  Find courses with Role Play
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
            <div className="carousel-caption custom-caption">
              <div className="custom-card p-4">
                <h2 className="fw-bold display-6">
                  Skills that drive you forward
                </h2>
                <p className="fs-6">
                  Technology and the world of work change fast — with us, you’re faster. Get the skills to achieve goals and stay competitive.
                </p>
                <a href="" className="btn btn-custom">
                  View Plans
                </a>
              </div>
            </div>
          </div>

        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next  "
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        <div className="Text">
            <h1>Ready to reimagine your career?</h1>
            <h5>Get the skills and real-world experience employers want with Career Accelerators.</h5>
        </div>
        <div className="course">
            <div class="row">
            <div class="col-sm-4 mb-3 mb-sm-0">
                <div class="card">
                    <img src={web} alt=""/>
                <div class="card-body">
                    <h5 class="card-title">Full Stack Web Devolper</h5>
                    <button type="button" class="btn  btn-sm active" data-bs-toggle="button" aria-pressed="true"><i class="bi bi-star-fill"></i>4.7</button>
                    <button type="button" class="btn  btn-sm active" data-bs-toggle="button" aria-pressed="true">474k ratings</button>
                    <button type="button" class="btn btn-sm active" data-bs-toggle="button" aria-pressed="true">87.9 hours</button>
                </div>
                </div>
            </div>
            <div class="col-sm-4">
                    <div class="card">
                        <img src={market} alt=""/>
                    <div class="card-body">
                        <h5 class="card-title">Digital Marketer</h5>
                        <button type="button" class="btn  btn-sm active" data-bs-toggle="button" aria-pressed="true"><i class="bi bi-star-fill"></i>4.5</button>
                    <button type="button" class="btn  btn-sm active" data-bs-toggle="button" aria-pressed="true">3.5k ratings</button>
                    <button type="button" class="btn btn-sm active" data-bs-toggle="button" aria-pressed="true">28.4 hours</button>
                    </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <img src={data} alt=""/>
                    <div class="card-body">
                        <h5 class="card-title">Data Scientist</h5>
                        <button type="button" class="btn  btn-sm active" data-bs-toggle="button" aria-pressed="true"><i class="bi bi-star-fill"></i>4.7</button>
                    <button type="button" class="btn  btn-sm active" data-bs-toggle="button" aria-pressed="true">220k ratings</button>
                    <button type="button" class="btn btn-sm active" data-bs-toggle="button" aria-pressed="true">46.1 hours</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Main;
