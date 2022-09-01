import React from "react";
import { Alert, Card, Container } from "react-bootstrap";
import Articels from "./articel.posts";

const Posts = () => {
  return (
    <React.Fragment>
      <Container className="mt-2">
        <Articels />
      </Container>
    </React.Fragment>
  );
};

export default Posts;
