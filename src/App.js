import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const dummy_goals = [
    {
      id: 1,
      title: "Fun",
    },
  ];
  const latestID = parseInt(dummy_goals[dummy_goals.length - 1].id) + 1;
  const [goals, setGoals] = useState(dummy_goals);
  let [id, setID] = useState(latestID);

  const saveGoalHandler = (goal) => {
    setGoals((existingGoals) => {
      return [goal, ...existingGoals];
    });
    id = id + 1;
    setID(id);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-12">
          <Main lastID={id} items={goals} onSaveGoal={saveGoalHandler} setGoals={setGoals}/>
        </div>
      </div>
    </div>
  );
}

export default App;
