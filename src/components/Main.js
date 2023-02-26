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

  return (
    <div className="p-5">
      <div className="row justify-content-end pb-3 border-bottom">
        <div class="p-3 col-8 text-start">
          <h4>
            <Icon.Check /> Task
          </h4>
        </div>
        <div class="p-3 col-2 text-center">
          <p>
            <Icon.User /> Log In
          </p>
        </div>
        <div class="p-3 col-2 text-center">
          <p>
            <Icon.Settings /> Settings
          </p>
        </div>
      </div>
      <ItemForm onSaveGoal={saveGoalHandler} />
      <List goals={props.items} setGoals={props.setGoals} />
    </div>
  );
}
export default Main;
