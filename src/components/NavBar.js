import * as Icon from "react-feather";

const construction = () => {
  setModal({
    title: "Under construction!",
    message: "🚧 🚧 🚧",
  });
  props.modal()
};

function NavBar(props) {
  return (
    <div className="row justify-content-end align-items-center pb-lg-3 border-bottom">
      <div className="p-3 col-8 text-start">
        <h4>
          <Icon.Check /> Tasker
        </h4>
      </div>
      <div className="p-3 col text-center" onClick={construction}>
        <p>
          <Icon.Edit3 />
        </p>
        <p className="d-none d-sm-block d-sm-none d-md-block">Send task</p>
      </div>
      <div className="p-3 col text-center" onClick={construction}>
        <p>
          <Icon.Settings />
        </p>
        <p className="d-none d-sm-block d-sm-none d-md-block">Settings</p>
      </div>
    </div>
  );
}

export default NavBar;
