import React from "react";
import { Button, Card } from "react-daisyui";
import { Link } from "react-router-dom";
import { SchoolContext } from "../../utilities/SchoolContext";
import "./school.scss";

export default function School(params: any) {
  const { students, classes } = React.useContext(SchoolContext);

  return (
    <div className="h-full w-full flex flex-col items-center p-10">
      <h1 className="text-7xl uppercase">
        <Link to="/school">My School</Link>
      </h1>
      <div className="flex flex-row h-full w-full items-center justify-center gap-10">
        <div>
          <Card imageFull>
            <Card.Body>
              <Card.Title tag="h2">Total Classes</Card.Title>
              <Button size="lg">{classes?.length || 0}</Button>
              <Card.Actions className="justify-center">
                <Button color="primary">
                  <Link to="/class">View All Classes</Link>
                </Button>
              </Card.Actions>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card imageFull>
            <Card.Body>
              <Card.Title tag="h2">Total Student</Card.Title>
              <Button size="lg">{students?.length || 0}</Button>
              <Card.Actions className="justify-center">
                <Button color="primary">
                  <Link to="/student">View All Students</Link>
                </Button>
              </Card.Actions>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}
