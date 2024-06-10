import React, { useEffect, useState } from "react";

import Card from "react-bootstrap/Card";
import { deleteBooks, getBooks } from "../services/allApis";
import { Link } from "react-router-dom";

import { Col, Row } from "react-bootstrap";

function Home() {
  const [books, setBooks] = useState([]);
  const accesBooks = async () => {
    const data = await getBooks();
    setBooks(data.data);
  };

  const handleDelete = async (id) => {
    await deleteBooks(id);
    accesBooks();
  };
  useEffect(() => {
    accesBooks();
  }, []);

  return (
    <>
      <div className="container my-4 hero-container">
        <Row>
          <Col lg={6}>
            <img
              src="https://i.postimg.cc/wM1gF2NT/Reading-glasses-cuate-1.png"
              alt=""
              style={{ width: "100%" }}
            />
          </Col>
          <Col lg={6} className="d-flex align-items-center">
            <div className="hero-text">
              <h1>Your Personal Library,</h1>
              <h1>Perfectly Organized</h1>
              <p>"Effortless Book Management, Infinite Possibilities"</p>
              <div className="my-4">
                <Link to={"/add"}>
                  <button className="btn btn-primary">
                    ----- Add Book -----
                  </button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className=" my-4 mx-2">
        <p className="text-start">Showing Result For All Books ---</p>
        <div className="d-flex flex-wrap gap-3 justify-content-center">
          {books.length > 0 ? (
            books.map((book) => (
              <Card
                style={{ width: "15rem" }}
                key={book.id}
                className="book-card"
              >
                <Card.Img
                  variant="top"
                  src={book.coverImg}
                  className="book-cover-img mt-3"
                />
                <Card.Body className="d-flex flex-column align-items-center ">
                  <Card.Title>{book.title.slice(0, 18)}</Card.Title>
                  <Card.Text>{book.author}</Card.Text>
                  <div className="d-flex ">
                    <Link to={`/update/${book.id}`}>
                      <button className="btn btn-primary me-3">Edit</button>
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(book.id)}
                    >
                      Delete
                    </button>
                  </div>
                </Card.Body>
              </Card>
            ))
          ) : (
            <div class="boxes mt-5">
              <div class="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div class="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div class="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div class="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;
