import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Main from "./components/Main";
import Preloader from "./components/preloader/preloader";
import { useState } from "react";

import * as Icon from "react-feather";

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
              <p className="d-none d-sm-block d-sm-none d-md-block">
                Send task
              </p>
            </div>
            <div className="p-3 col-2 text-center">
              <p>
                <Icon.Settings />
              </p>
              <p className="d-none d-sm-block d-sm-none d-md-block">Settings</p>
            </div>
          </div>
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
      <footer class="fixed-bottom text-center text-lg-start bg-light text-muted">
        <div class="text-center p-lg-4 p-md-3 p-sm-1">
          <p>© 2022 Copyright: antonraphaelcaballes@gmail.com</p>
        </div>
      </footer>
      <Preloader />
    </div>
  );
}

export default App;
