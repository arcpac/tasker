import classes from "./Modal.module.css";
function Modal(props) {
  return (
    <div className={classes.backdrop} onClick={props.onConfirmError}>
      <div
        className={`${classes.position} row justify-content-center error-modal`}
      >
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{props.title}</h5>
              <p class="card-text">{props.message}</p>
              <button class="btn btn-dark btn-sm" onClick={props.onConfirmError}>Ok</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
