import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import heroImage from "../../Images/heroimage.png";
import bgImg from "../../Images/bgImg.jpg";
import "./Home.css";

const Home = () => {
  const [courses, setCourses] = useState([]);
  const history = useHistory();
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ShowrovChy/fake-data-assigntment-nine/main/fakedata.json"
    )
      .then((res) => res.json())
      .then((data) => setCourses(data.splice(0, 4)));
  }, []);

  //handle tutorial Reference Event
  const handleTutorialReference = () => {
    history.push("/reference");
  };

  //send to tutorial page by clicking start tutorial
  const sendToTutorials = () => {
    history.push("/tutorials");
  };
  return (
    <div className="mb-5 ">
      <Row className=" align-items-center gy-5 mb-5 banner-container   ">
        <Col md={6} className="left-part  pt-5 ps-5">
          <div>
            <h1>
              Welcome To <span className="titleInSpan"> Codding School</span>
            </h1>
            <p className="mt-4">
              This is a free <b>programming learning </b> platform.You will get{" "}
              <br />
              lot of resources.Get seated with your goal and start learning.
            </p>
            <Button onClick={sendToTutorials} className="btn btnStyle">
              Start Learning
            </Button>
          </div>
        </Col>
        <Col
          md={6}
          className="hero-image right-part  justify-content-center align-items-center d-flex "
        >
          <img className="img-banner" src={heroImage} alt="" />
        </Col>
      </Row>

      <div>
        <div>
          <h1 className="text-center py-3 tutorial-text">Tutorials</h1>
        </div>

        <Row className="gy-5 tutorials-row px-3 mt-3">
          {courses.map((course) => (
            <Col md={6} className="">
              <div className="course-inside-card h-100 rounded-2">
                <div className="pt-5 px-4">
                  <img className="img-fluid" src={course.img} alt="" />
                </div>
                <div className="text-center p-2">
                  <h1>{course.name} </h1>
                  <p className="fw-bold">{course.shortIntro}</p>
                  <Button className=" btnStyle mt-3">
                    <Link
                      className="text-decoration-none text-white"
                      to={`/tutorial/${course.id}`}
                    >
                      {course.learnBtn}
                    </Link>
                  </Button>
                  <br />
                  <Button
                    onClick={handleTutorialReference}
                    className=" btnStyle mt-3"
                  >
                    {course.reference}
                  </Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <div className="text-center my-5">
          <Button className="btn-lg">
            {" "}
            <Link to="/tutorials" className="text-white text-decoration-none">
              {" "}
              See all Tutorials{" "}
            </Link>{" "}
          </Button>
        </div>
        <div
          className="img-div"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.616), rgba(0, 0, 0, 0.705)),url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "100px 0",
          }}
        >
          <div className="text-white text-center">
            <h1
              style={{
                fontSize: "3.4em",
                fontWeight: "700",
                fontFamily: "sans-serif",
              }}
            >
              More than 500 Online Tutorials
            </h1>
            <p
              style={{
                fontSize: "1.5em",
                fontFamily: "sans-serif",
                marginTop: "18px",
              }}
            >
              You`re guaranteed to find something that`s right for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
