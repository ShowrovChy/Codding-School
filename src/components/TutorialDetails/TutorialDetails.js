import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useHistory, useParams } from "react-router";
import { Button } from "react-bootstrap";

const TutorialDetails = () => {
  const { tutorialId } = useParams();
  const [tutorials, setTutorials] = useState([]);
  const [matchedTutorial, setMatchedTutorial] = useState({});
  const numTutorialId = Number(tutorialId);
  const history = useHistory();

  // Loading data from DataBase
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ShowrovChy/fake-data-assigntment-nine/main/fakedata.json"
    )
      .then((res) => res.json())
      .then((data) => setTutorials(data));
  }, []);

  // finding and matching the  id of clicked tutorial.
  useEffect(() => {
    const getMatchedTutorial = tutorials?.find(
      (tutorial) => tutorial?.id === numTutorialId
    );
    setMatchedTutorial(getMatchedTutorial);
  }, [tutorialId, tutorials]);

  //handle Go back onclick event
  const handleGoBack = () => {
    history.push(`/tutorials`);
  };

  return (
    <div className="container">
      <Card className="text-center my-5  test">
        <Card.Header>
          <h1 className="fw-bold">
            <span style={{ color: "#127488" }}> {matchedTutorial?.name} </span>{" "}
          </h1>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <h5>
              Invented By :{" "}
              <span style={{ color: "#127488" }}>
                {matchedTutorial?.inventor}
              </span>
            </h5>
          </Card.Title>
          <Card.Text>
            <p className="lh-lg">{matchedTutorial?.description}</p>
          </Card.Text>
          <Button onClick={handleGoBack} variant="primary">
            Go Back
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TutorialDetails;
