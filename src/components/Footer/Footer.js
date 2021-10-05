import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, FormControl, InputGroup, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhoneAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../Images/navlogo.png";
const Footer = () => {
  return (
    <footer className="w-100  bg-light  pt-5 ">
      <Row className="upper w-100 px-4">
        <Col md={5}>
          <Link className=" text-decoration-none" to="/about">
            <h5>About</h5>
          </Link>
          <div className="d-flex align-items-center">
            <div className="me-2">
              <img style={{ width: "60px" }} src={logo} alt="" />
            </div>
            <p className="text-secondary pt-2">
              Codding School is an evolving learning platform for Web
              technologies and the software that powers the Web, including CSS,
              HTML, and JavaScript. We also have a detailed set of beginner's
              learning material — see Learn Web development
            </p>
          </div>
        </Col>
        <Col md={4}>
          <Link className=" text-decoration-none" to="/contact">
            <h5 className="ps-3">Contact Us</h5>
          </Link>

          <ul class="list-group bg-light   ">
            <li class="list-group-item text-secondary  bg-light border-0   d-flex">
              <span className="me-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </span>
              <p>
                {" "}
                <b>Address:</b> 106, C Block, East Street, New York, BMC, US
              </p>
            </li>
            <li class="list-group-item text-secondary  bg-light border-0   d-flex">
              <span className="me-2">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>{" "}
              <p>
                {" "}
                <b>Mail:</b> coddingschool@gmail.com
              </p>
            </li>
            <li class="list-group-item text-secondary  bg-light border-0   d-flex">
              <span className="me-2">
                <FontAwesomeIcon icon={faPhoneAlt} />
              </span>
              <p>
                {" "}
                <b>Phone:</b> 050 63341 665145
              </p>
            </li>
          </ul>
        </Col>
        <Col md={3}>
          <Link className=" text-decoration-none" to="/follow">
            <h5 className="mb-5 ">Follow Us</h5>
          </Link>
          <div className="d-flex justify-content-around fs-2 ">
            <a className="text-secondary" href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a
              className="text-secondary"
              href="https://www.instagram.com/ah__showrov/"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a className="text-secondary" href="https://twitter.com/home">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              className="text-secondary"
              href="https://www.youtube.com/results?search_query=programming+hero"
            >
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </Col>
      </Row>
      <p className="py-3  text-center text-secondary">
        <small>Copyright 2021 © Codding School.com All Rights Reserved.</small>
      </p>
    </footer>
  );
};

export default Footer;
