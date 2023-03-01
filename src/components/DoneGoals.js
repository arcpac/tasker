function DoneGoals(props) {
  return (
    <div className="col-lg-8">
      {props.doneGoals.map((item) => (
        <div className="card my-2">
          <div className="card-body">
            <div className="row justify-content-between">
              <div className="col-12">{item.title}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DoneGoals;
