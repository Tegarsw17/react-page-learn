import Axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Alert, Button, ButtonGroup } from "react-bootstrap";
import Loaders from "../Utilities/loaders";

const Collection = () => {
  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState(3);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;
    if (isCancelled === false) {
      setLoading(true);
      Axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`,
      })
        .then((result) => setDatas(result.data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
    return () => {
      isCancelled = true;
    };
  }, [limit]);

  const handleLimit = (option) => {
    option === "+"
      ? setLimit((prev) => prev + 1)
      : setLimit((prev) => prev - 1);
  };

  if (loading) return <Loaders />;

  return (
    <React.Fragment>
      <h2>Albums API</h2>
      <h4>Fetch Image with API</h4>
      <Alert variant="primary">Show {limit} Collection !</Alert>
      <Carousel>
        {/* maping data start */}
        {datas.map((data, i) => {
          return (
            <Carousel.Item key={i}>
              <img
                className="d-block w-100"
                src={data.url}
                alt="First slide"
                height={450}
                width={450}
              />
              <Carousel.Caption>
                <h3>{data.title}</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
        {/* maping data end */}
      </Carousel>
      <ButtonGroup className="d-flex justify-content-center align-items-center mt-2">
        {limit > 1 && (
          <Button variant="outline-primary" onClick={() => handleLimit("-")}>
            -
          </Button>
        )}

        <Button variant="outline-primary" onClick={() => handleLimit("+")}>
          +
        </Button>
      </ButtonGroup>
    </React.Fragment>
  );
};

export default Collection;
