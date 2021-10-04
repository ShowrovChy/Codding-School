import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FormControl, InputGroup, Row } from "react-bootstrap";
import Tutorial from "../Tutorial/Tutorial";
import { Button } from "react-bootstrap";

const Tutorials = () => {
  const [tutorials, setTutorials] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ShowrovChy/fake-data-assigntment-nine/main/fakedata.json"
    )
      .then((res) => res.json())
      .then((data) => setTutorials(data));
  }, []);
  return (
    <div>
      <div className="container ">
        <InputGroup className="mb-3 w-50 mt-5 mx-auto ">
          <FormControl
            placeholder="Search tutorial"
            aria-label="Search tutorial"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-info text-black" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </div>
      <Row md={6} className="g-4 my-5 mx-auto" style={{ width: "100%" }}>
        {tutorials.map((tutorial) => (
          <Tutorial key={tutorial.id} tutorial={tutorial}></Tutorial>
        ))}
      </Row>
    </div>
  );
};

export default Tutorials;
