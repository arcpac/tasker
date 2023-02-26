import React, { useState } from "react";

function ItemForm(props) {
  const [enteredGoal, setGoal] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setGoal(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredGoal.trim().length === 0) {
      setIsValid(false);
      return;
    }

    const goalData = {
      title: enteredGoal,
    };
    console.log(goalData);
    props.onSaveGoal(goalData);
    setGoal("");
  };

  return (
    <form onSubmit={submitHandler} className="m-1 pt-3 pb-3">
      <div className="row justify-content-end">
        <div class="col-8">
          <div class="form-floating mb-3">
            <input
              onChange={goalChangeHandler}
              value={enteredGoal}
              id="floatingInput"
              type="text"
              className={`form-control ${!isValid ? 'is-invalid' : ''}`}
            ></input>
            <label for="floatingInput">Enter task</label>
          </div>
        </div>

        <div class="d-grid col-4">
          <button type="submit" class="btn btn-dark">
            List
          </button>
        </div>
      </div>
    </form>
  );
}
export default ItemForm;
