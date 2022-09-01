// children component

import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Axios from "axios";
import Collection from "./collection.albums";

const Albums = (props) => {
  return (
    <React.Fragment>
      <Container className="mt-2">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <Collection />
      </Container>
    </React.Fragment>
  );
};

export default Albums;
