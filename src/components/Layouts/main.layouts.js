import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "./navigation.Layouts";

const MainLayouts = ({ children }) => {
  return (
    <React.Fragment>
      <Navigation />
      {children}
    </React.Fragment>
  );
};

export default MainLayouts;
