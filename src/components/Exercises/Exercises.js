import React from "react";
import practice from "../../Images/practice.png";
import { Button } from "react-bootstrap";

const Exercises = () => {
  return (
    <div className="" style={{ backgroundColor: "#5cb1c3", height: "100vh" }}>
      <div className="text-center ">
        <div style={{ height: "70%" }}>
          <img
            style={{ width: "40%", height: "100%" }}
            src={practice}
            alt="Practice Img"
          />
        </div>
        <div style={{ height: "30%" }}>
          <Button
            style={{
              backgroundColor: "#fff",
              border: "0",
            }}
          >
            {" "}
            <a
              className="text-decoration-none text-info"
              target="_blank"
              href="https://codepen.io/pen/"
            >
              Practice Here{" "}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Exercises;
