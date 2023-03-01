import ActiveTasks from "./ActiveTasks";
// import Filter from "./Filter";

function List(props) {
  //   const onFilterValueSelected = (filterValue) => {
  //     props.onFilterSelected(filterValue);
  //   };

//   const saveTaskHandler = (enteredtTaskHandler) => {
//     const taskData = {
//       ...enteredtTaskHandler,
//       id: Math.random().toString(),
//     };
//     props.onUpdateTask(taskData);
//   };

  return (
    <div className="row align-items-center">
      {/* <Filter filterValueSelected={onFilterValueSelected} /> */}
      <ActiveTasks
        setGoals={props.setGoals}
        // onSaveTaskData={saveTaskHandler}
        goals={props.goals}
      />
    </div>
  );
}

export default List;
