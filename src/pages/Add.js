import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addBooks } from "../services/allApis";

function Add() {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    title: "",
    author: "",
    coverImg: "",
  });

  const setData = (e) => {
    let { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleAdd = async () => {
    let { title, author, coverImg } = inputData;
    if (title === "" || author === "" || coverImg === "") {
      alert("Please Fill All Fields");
    } else {
      await addBooks(inputData);
      navigate("/");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="border rounded p-3 " style={{ width: "300px" }}>
        <h3 className="text-center my-3">Add Book</h3>
        <div className="d-flex flex-column gap-3">
          <div>
            <label htmlFor="" className="mb-1">
              Book Title
            </label>
            <input
              type="text"
              className="form-control"
              onChange={setData}
              name="title"
            />
          </div>
          <div>
            <label htmlFor="" className="mb-1">
              Author Name
            </label>
            <input
              type="text"
              className="form-control"
              onChange={setData}
              name="author"
            />
          </div>
          <div>
            <label htmlFor="" className="mb-1">
              Book Cover Image Url
            </label>
            <input
              type="text"
              className="form-control"
              onChange={setData}
              name="coverImg"
            />
          </div>
        </div>
        <div className="d-flex mt-4 justify-content-evenly">
          <Link to={"/"}>
            <button className="btn btn-secondary">Cancel</button>
          </Link>
          <button className="btn btn-success" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Add;
