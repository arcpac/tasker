import List from "./List";
import ItemForm from "./ItemForm";
import * as Icon from "react-feather";

function Main(props) {
  const saveGoalHandler = (enteredData) => {
    const goalData = {
      ...enteredData,
      id: props.lastID,
    };

    props.onSaveGoal(goalData);
  };

//   const onFilterValueSelected = (filterValue) => {
//     props.onFilterSelected(filterValue);
//   };

//   const onUpdateTask = (taskData) => {
//     props.onUpdateTask(taskData);
//   };

  return (
    <div className="p-lg-5 p-md-2">
      <div className="row justify-content-end align-items-center pb-lg-3 border-bottom">
        <div className="p-3 col-8 text-start">
          <h4>
            <Icon.Check /> Tasker
          </h4>
        </div>
        <div className="p-3 col-2 text-center">
          <p>
            <Icon.UserPlus />
          </p>
          <p className="d-none d-sm-block d-sm-none d-md-block">Send task</p>
        </div>
        <div className="p-3 col-2 text-center">
          <p>
            <Icon.Settings />
          </p>
          <p className="d-none d-sm-block d-sm-none d-md-block">Settings</p>
        </div>
      </div>
      <ItemForm onSaveGoal={saveGoalHandler} />
      <List
        goals={props.items}
        setGoals={props.setGoals}
        // onFilterSelected={onFilterValueSelected}
        // onUpdateTask={onUpdateTask}
      />
    </div>
  );
}
export default Main;
