import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Index = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    const jsonData = JSON.stringify(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    formData.append("data", jsonData);
    console.log(data);
  };

  return (
    <div>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div id="formBox">
            <div className="inputBoxes">
              <input
                ref={register({
                  required: "Name is required",
                })}
                className="input"
                type="text"
                name="title"
                placeholder="Title"
              />
              <input
                ref={register({
                  required: "Name is required",
                })}
                className="input"
                type="text"
                name="price"
                placeholder="Price"
              />{" "}
              <br />
              <input
                ref={register({
                  required: "Name is required",
                })}
                className="input"
                type="text"
                name="location"
                placeholder="Location"
              />
              <input
                ref={register({
                  required: "Name is required",
                })}
                className="input"
                type="text"
                name="bedroom"
                placeholder="No of bedroom"
              />{" "}
              <br />
              <input
                ref={register({
                  required: "Name is required",
                })}
                className="input"
                type="text"
                name="bathroom"
                placeholder="No of bathroom"
              />
              <input
                ref={register({
                  required: "Name is required",
                })}
                className="input"
                type="file"
                name="image"
              />
            </div>
          </div>
          <input
            className="allButtons submitBtn"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Index;
