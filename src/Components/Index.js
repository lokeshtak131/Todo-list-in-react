import React, { useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft , faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import "../Components/style.scss";
function TodoList() {
  const [intData, setIntData] = useState("");
  const [updateData, setUpdateData] = useState([]);

  
  const onsubmithandler = (e) => { 
    let newData = intData;
    setUpdateData([...updateData, newData]);
    setIntData('');
    // console.log(updateData)
  };
  return (
    <section className="TodoList-area">
      <div className="col-md-4 mx-auto">
        <div className="card todoCard">
          <div className="card-body">
            <h1>To do List</h1>
            <div className="InputBox">
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Enter to do list"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                  type="text"
                  value={intData}
                  onChange={(e) => setIntData(e.target.value)}
                  autoFocus
                />
                <Button
                  variant="outline-primary"
                  onClick={(e) => onsubmithandler(e)}
                >
                  Submit
                </Button>
              </InputGroup>
            </div>
            <ol className="todoItem-list">
              {updateData.map((item, index) => (
                <li key={index}>
                  <div className="listInner-data">
                  <span>{item}</span>
                  <div className="leftIcons">
                    <FontAwesomeIcon icon={faDeleteLeft} className="iconCss" />
                    <FontAwesomeIcon icon={faPenToSquare} className="iconCss"/>
                  </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TodoList;
