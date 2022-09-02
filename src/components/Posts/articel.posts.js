import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Button, ButtonGroup, Card, Modal } from "react-bootstrap";
import Loaders from "../Utilities/loaders";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

const Articels = () => {
  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState(3);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
      <Alert variant="primary">
        Show <b>{limit}</b> Current Posts !
      </Alert>
      <div className="d-flex flex-column justify-content-center align-items-center">
        {datas.map((data, i) => {
          return (
            <React.Fragment key={i}>
              <Card
                onClick={handleShow}
                style={{ width: "22rem", cursor: "pointer" }}
                className="mt-3"
              >
                <Card.Body className="text-center">{data.title}</Card.Body>
              </Card>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    User Id : {data.userId} <br></br> No Post : {data.id}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <h4 className="text-center text-capitalize">{data.title}</h4>
                  <br></br>
                  <p>
                    <b>Description : </b>
                    {data.body}
                  </p>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="danger" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </React.Fragment>
          );
        })}
        <ButtonGroup className="mt-3" style={{ width: "22rem" }}>
          {limit > 1 && (
            <Button onClick={() => handleLimit("-")} className="btn-danger">
              <FontAwesomeIcon icon={faTrash} /> Remove Post
            </Button>
          )}
          <Button onClick={() => handleLimit("+")}>
            <FontAwesomeIcon icon={faPlus} /> Add Post
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default Articels;
