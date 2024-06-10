import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { base_url } from "../services/baseurl";
import { updateBooks } from "../services/allApis";

function Update() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [updateData, setUpdateData] = useState({});
  const accessSingleBook = async () => {
    const data = await axios.get(`${base_url}/books/${id}`);
    setUpdateData(data.data);
  };
  useEffect(() => {
    accessSingleBook();
  }, []);

  const setData = (e) => {
    let { name, value } = e.target;
    setUpdateData({ ...updateData, [name]: value });
  };
  const handleUpdate = async () => {
    let { title, author, coverImg } = updateData;
    if (title === "" || author === "" || coverImg === "") {
      alert("Please Fill All Fields");
    } else {
      await updateBooks(updateData);
      navigate("/");
    }
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <div className="border rounded p-3" style={{ width: "300px" }}>
        <h3 className="text-center my-3">Update Book</h3>
        <p className="text-center my-3">{`Book id : ${updateData.id}`}</p>
        <div className="d-flex flex-column gap-3">
          <div>
            <label htmlFor="title" className="mb-1">
              Book Title
            </label>
            <input
              id="title"
              type="text"
              className="form-control"
              onChange={setData}
              name="title"
              defaultValue={updateData.title}
            />
          </div>
          <div>
            <label htmlFor="author" className="mb-1">
              Author Name
            </label>
            <input
              id="author"
              type="text"
              className="form-control"
              onChange={setData}
              name="author"
              defaultValue={updateData.author}
            />
          </div>
          <div>
            <label htmlFor="img" className="mb-1">
              Book Cover Image Url
            </label>
            <input
              id="img"
              type="text"
              className="form-control"
              onChange={setData}
              name="coverImg"
              defaultValue={updateData.coverImg}
            />
          </div>
        </div>
        <div className="d-flex mt-4 justify-content-evenly">
          <Link to={"/"}>
            <button className="btn btn-secondary">Cancel</button>
          </Link>
          <button className="btn btn-success" onClick={handleUpdate}>
            Update
          </button>
        </div>
      </div>
    </div>
  );
}

export default Update;
