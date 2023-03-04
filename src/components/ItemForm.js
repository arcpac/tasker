import React, { useState } from "react";
import Modal from "./UI/Modal";

function ItemForm(props) {
  const [enteredGoal, setGoal] = useState("");
  const [isValid, setIsValid] = useState();

  const goalChangeHandler = (event) => {
    setGoal(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredGoal);

    if (enteredGoal.trim().length === 0) {
      setIsValid({ title: "Input required", message: "You've entered a blank task" });
      return;
    }

    const goalData = {
      title: enteredGoal,
      status: "active",
    };
    props.onSaveGoal(goalData);
    setGoal("");
  };
  const errorHandler = () => {
    setIsValid(null);
  };

  return (
    <div>
      {isValid && (
        <Modal
          title={isValid.title}
          message={isValid.message}
          onConfirmError={errorHandler}
        />
      )}
      <form onSubmit={submitHandler} className="m-1 pt-3 pb-3">
        <div className="row justify-content-end">
          <div className="col-8">
            <div className="form-floating mb-3">
              <input
                onChange={goalChangeHandler}
                value={enteredGoal}
                id="floatingInput"
                type="text"
                className={`form-control ${isValid ? "is-invalid" : ""}`}
              ></input>
              <label htmlFor="floatingInput">Enter task</label>
            </div>
          </div>

          <div className="d-grid col-4">
            <button type="submit" className="btn btn-dark">
              List
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default ItemForm;
