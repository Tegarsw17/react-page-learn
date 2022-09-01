import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Button, ButtonGroup, Card } from "react-bootstrap";
import Loaders from "../Utilities/loaders";

const Articels = () => {
  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState(3);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;
    if (isCancelled === false) {
      setLoading(true);
      Axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASEURL}/posts?_limit=${limit}`,
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

  //   console.log(datas);
  if (loading) return <Loaders />;

  return (
    <div>
      <h1>Posts API</h1>
      <h4>Fetch post from API</h4>
      <Alert variant="primary">Show {limit} Current Posts !</Alert>
      <div className="d-flex flex-column justify-content-center align-items-center">
        {datas.map((data, i) => {
          return (
            <React.Fragment>
              <Card style={{ width: "22rem" }} className="mt-3">
                <Card.Body className="text-center">{data.title}</Card.Body>
              </Card>
            </React.Fragment>
          );
        })}
        <ButtonGroup className="mt-3" style={{ width: "22rem" }}>
          <Button onClick={() => handleLimit("+")}>Add Post</Button>
          <Button onClick={() => handleLimit("-")} className="btn-danger">
            Remove Post
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Articels;
