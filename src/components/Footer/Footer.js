import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
const Footer = () => {
  return (
    <footer className="w-100  bg-light  py-5 ">
      <p className="py-2 text-center">Get all the brand new tutorial first.</p>
      <div>
        <InputGroup className="mb-3 w-50 mx-auto">
          <FormControl
            placeholder="Write your email address"
            aria-label="Write your email address"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary btnStyle" id="button-addon2">
            Button
          </Button>
        </InputGroup>
      </div>
      <p className="py-3  text-center">
        <small>Copyright 2021 © Codding School.com All Rights Reserved.</small>
      </p>
    </footer>
  );
};

export default Footer;
