import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Main from "./components/Main";
import Preloader from "./components/preloader/preloader";
import { useState } from "react";

import * as Icon from "react-feather";
import Modal from "./components/UI/Modal";

function App() {
  const [isModal, setModal] = useState();

  const dummy_goals = [
    {
      id: 1,
      title: "Have fun",
      status: "active",
    },
  ];

  const latestID = parseInt(dummy_goals[dummy_goals.length - 1].id) + 1;

  let [goals, setGoals] = useState(dummy_goals);

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

  const construction = () => {
    setModal({
      title: "Under construction!",
      message: "🚧 🚧 🚧",
    });
  };

  const onConfirmError = () => {
    setModal(null);
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        {isModal && (
          <Modal
            title={isModal.title}
            message={isModal.message}
            onConfirmError={onConfirmError}
          />
        )}
        <div className="col-lg-8 col-md-8">
          <div className="row justify-content-end align-items-center pb-lg-3 border-bottom">
            <div className="p-3 col-8 text-start">
              <h4>
                <Icon.Check /> Tasker
              </h4>
            </div>
            <div className="p-3 col-2 text-center" onClick={construction}>
              <p>
                <Icon.UserPlus />
              </p>
              <p className="d-none d-sm-block d-sm-none d-md-block">
                Send task
              </p>
            </div>
            <div className="p-3 col-2 text-center" onClick={construction}>
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
          />
        </div>
      </div>
      <footer className="footer mt-auto text-center text-lg-start bg-light text-muted">
        <div className="container-fluid"></div>
        <div className="text-center p-lg-4 p-md-3 p-sm-1">
          <p>© 2022 Copyright: antonraphaelcaballes@gmail.com</p>
        </div>
      </footer>
      <Preloader />
    </div>
  );
}

export default App;
