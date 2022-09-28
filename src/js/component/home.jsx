import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [todos, setToDos] = useState(["wash my hands", "make the bed"]);
  const [newToDo, setnewToDo] = useState("");
  function handleInput(event) {
    event.preventDefault();
    setnewToDo(event.target.value);
    console.log(newToDo);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let newArray = [...todos];
    newArray.push(newToDo);
    setToDos(newArray);
    setnewToDo("");
  }
  function deleteToDo(index) {
    let newArr = [...todos];
    newArr.splice(index, 1);
    setToDos(newArr);
  }

  return (
    <div className=" container text-center">
      <h1 className="display-4">todos</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Add To Do Here"
            aria-label=".form-control-lg example"
            onChange={handleInput}
            value={newToDo}
          />
        </form>

        <ul className="list-group text-start">
          {todos.map((item, index) => {
            return (
              <li key={index} className="list-group-item">
                {item}

                <span className="float-end">
                  <i className="fa-solid fa-trash-can" onClick={deleteToDo}></i>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
