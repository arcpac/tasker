import Tasks from "./Tasks";

function ActiveTasks(props) {
  return (
    <div className="col-lg-8">
      <Tasks goals={props.goals} setGoals={props.setGoals} />
    </div>
  );
}

export default ActiveTasks;
