import List from "./List";
import ItemForm from "./ItemForm";

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
