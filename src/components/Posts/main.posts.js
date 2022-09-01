import React from "react";
import { Alert, Card, Container } from "react-bootstrap";

const Posts = () => {
  return (
    <React.Fragment>
      <Container className="mt-2">
        <h1>Posts API</h1>
        <h4>Fetch post from API</h4>
        <Alert variant="primary">Show 5 Current Posts !</Alert>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <React.Fragment>
            <Card
              style={{ width: "22rem" }}
              className="mt-3"
              onClick={console.log("masuk")}
            >
              <Card.Body className="text-center">Berita Nomor Satu</Card.Body>
            </Card>
            <Card style={{ width: "22rem" }} className="mt-3">
              <Card.Body className="text-center">Berita Nomor dua</Card.Body>
            </Card>
          </React.Fragment>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Posts;
