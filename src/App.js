import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Preloader from "./components/preloader/preloader";
import { useState } from "react";
import { ReactSketchCanvas } from "react-sketch-canvas";

import * as Icon from "react-feather";
import Modal from "./components/UI/Modal";

const styles = {
  border: "0.0625rem solid #9c9c9c",
  borderRadius: "0.25rem",
  height: "500px",
};

function App() {
  const dummy_goals = [
    {
      id: 1,
      title: "Have fun",
      status: "active",
    },
  ];
  const latestID = parseInt(dummy_goals[dummy_goals.length - 1].id) + 1;
  const [isModal, setModal] = useState();

  let [goals, setGoals] = useState(dummy_goals);
  let [id, setID] = useState(latestID);

  const useDrawToggle = (initialState) => {
    const [toggleDraw, setToggleDraw] = useState(initialState);
    const toggler = () => {
      setToggleDraw(!toggleDraw);
    };
    return [toggleDraw, toggler];
  };
  const [toggleDraw, setToggleDraw] = useDrawToggle();

  const saveGoalHandler = (goal) => {
    setGoals((existingGoals) => {
      const updatedItems = [...existingGoals];
      updatedItems.unshift(goal);
      return updatedItems;
    });
    id = id + 1;
    setID(id);
  };

  const onConfirmError = () => {
    setModal(null);
  };

  const onConfirmContruction = () => {
    console.log("MODAL");
    setModal({
      title: "Under construction!",
      message: "🚧 🚧 🚧",
    });
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        {isModal && (
          <Modal
            title={isModal.title}
            message={isModal.message}
            onConfirmError={onConfirmError}
            setModal={setModal}
          />
        )}
        <div className="col-lg-8 col-md-8">
          <NavBar
            onConfirmContruction={onConfirmContruction}
            onConfirmDraw={setToggleDraw}
          />
          {/* Sketch */}
          {toggleDraw && (
            <ReactSketchCanvas
              style={styles}
              width="500"
              height="300"
              strokeWidth={4}
              strokeColor="red"
            />
          )}

          {/* end of sketch */}
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
