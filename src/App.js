import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Main from "./components/Main";
import { useState } from "react";

function App() {
  const dummy_goals = [
    {
      id: 1,
      title: "Have fun",
      status: "active",
    },
  ];


  const latestID = parseInt(dummy_goals[dummy_goals.length - 1].id) + 1;

  let [goals, setGoals] = useState(dummy_goals);
  // let [filterTextValue, setFilterValue] = useState("active");

  // let filteredTasksList = goals.filter((task) => {
  //   if (filterTextValue === "active") {
  //     return task.status === "active";
  //   } else if (filterTextValue === "inactive") {
  //     return task.status === "inactive";
  //   } else {
  //     return task;
  //   }
  // });

  let [id, setID] = useState(latestID);

  const saveGoalHandler = (goal) => {
    setGoals((existingGoals) => {
      const updatedItems = [...existingGoals];
      updatedItems.unshift(goal);
      return updatedItems;
    });
    id = id + 1;
    setID(id);
  };

  // const onFilterValueSelected = (filterValue) => {
  //   setFilterValue(filterValue);
  // };

  // const onUpdateTask = (taskData) => {
  //   goals.map((goal) => {
  //     if (goal.title === taskData.title) {
  //       goal.status = "inactive";
  //     }
  //     return goal;
  //   });
  // };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-12">
          <Main
            lastID={id}
            items={goals}
            setGoals={setGoals}
            onSaveGoal={saveGoalHandler}

            // onFilterSelected={onFilterValueSelected}
            // onUpdateTask={onUpdateTask}
            
          />
        </div>
      </div>
    </div>
  );
}

export default App;
