import React from "react";
import MainLayouts from "./components/Layouts/main.layouts";
import Albums from "./components/Albums/main.albums";
import CardHome from "./components/Home/main.homes";
import Posts from "./components/Posts/main.posts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <MainLayouts>
        <Router>
          <Routes>
            <Route path="/" element={<CardHome />} />
            <Route path="/albums" element={<Albums />} />
            <Route path="/posts" element={<Posts />} />
            <Route
              path="/*"
              element={
                <h1 className="text-center text-danger">404 NOT FOUND</h1>
              }
            />
          </Routes>
        </Router>
        {/* <Albums title="Image API" description="We fetch API from third party" /> */}
      </MainLayouts>
    </>
  );
};

export default App;
