import classes from "./Modal.module.css";
function Modal(props) {
  return (
    <div className={classes.backdrop} onClick={props.onConfirmError}>
      <div
        className={`${classes.position} row justify-content-center error-modal`}
      >
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.message}</p>
              <button
                className="btn btn-dark btn-sm"
                onClick={props.onConfirmError}
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
