import React from "react";
import { Col } from "react-bootstrap";
import "./Tutorial.css";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";

const Tutorial = (props) => {
  const history = useHistory();
  const { id, img, name, shortIntro, learnBtn, reference } = props.tutorial;
  //handle Tutorial Details Event
  const handleTutorialDetails = () => {
    history.push(`/tutorial/${id}`);
  };
  //handle  Tutorial Reference Event
  const handleTutorialReference = () => {
    history.push("/reference");
  };
  return (
    <Col md={6} className="">
      <div className="course-inside-card h-100 rounded-2">
        <div className="p-3">
          <img className="img-fluid" src={img} alt="" />
        </div>
        <div className="text-center p-2">
          <h1 className="fw-bold">{name} </h1>
          <p className="fw-bold">{shortIntro}</p>
          <Button onClick={handleTutorialDetails} className="btn-info mt-3">
            {" "}
            {learnBtn}
          </Button>{" "}
          <br />
          <Button onClick={handleTutorialReference} className="btn-info mt-2">
            {" "}
            {reference}
          </Button>
        </div>
      </div>
    </Col>
  );
};

export default Tutorial;
