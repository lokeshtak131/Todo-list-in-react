import React, { useEffect, useState } from "react";
import {} from "react-bootstrap";
import InputCheckbox from "./Input-checkbox";
import "./style.scss";
import { AiFillDelete } from 'react-icons/ai';
function TodoListOne() {
  const getLocalItem = () => {
    let list = localStorage.getItem("tak");
    if (list) {
      return JSON.parse(localStorage.getItem("tak"));
    } else {
      return [];
    }
  };

  //  debugger
  const [inpdata, SetInpdata] = useState();
  const [subinpdata, Setsubinpdata] = useState(getLocalItem());

  // Submit button function start //
  const SubmitData = () => {
    if (inpdata) {
      var inputData = {
        text: inpdata,
        checked: false,
      };
      Setsubinpdata([...subinpdata, inputData.text]);
      SetInpdata("");
    } else {
      alert("Please Enter data");
    }
  };
  // Submit button function end //

  const itemDelete = (deleteItem) => {
    const newItem = subinpdata.filter((item) => item !== deleteItem);
    Setsubinpdata(newItem);
  };

  useEffect(() => {
    localStorage.setItem("tak", JSON.stringify(subinpdata));
  }, [subinpdata]);

  return (
    <section className="mainTodo-area">
      <div className="container">
        <div className="row">
          <div className="col-md-5 mx-auto">
            <h1>Our Todo List</h1>
            <div className="card todoBox-area">
              <div className="card-body">
                <div className="inputData-sec">
                  <input
                    type=""
                    className="form-control"
                    onChange={(e) => SetInpdata(e.target.value)}
                    name=""
                    placeholder=""
                    value={inpdata}
                  />
                  <button
                    className="btn btn-success"
                    onClick={(e) => SubmitData(e.target.value)}
                  >
                    Submit
                  </button>
                </div>
                <ul className="outputData-list">
                  {subinpdata.map((item, index) => (
                    <li key={index}>
                      <InputCheckbox label={item} />
                      <div className="right-list">
                        <AiFillDelete className="deleteicon" onClick={() => itemDelete(item)} />
                        
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TodoListOne;
