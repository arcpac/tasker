import * as Icon from "react-feather";

function Tasks(props) {
  const deleteItem = (event) => {
    let new_goals = props.goals.filter((goal) => goal !== event);
    props.setGoals(new_goals);
  };

  return (
    <>
      {props.goals.map((item) => (
        <div key={item.id} className="card my-2">
          <div key={item.id} className="card-body">
            <div key={item.id} className="row justify-content-between">
              <div className="col-8">
                {item.title}
              </div>
              <div
                key={item.id}
                className="col-2 text-center"
                onClick={() => deleteItem(item)}
              >
                <Icon.XSquare />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Tasks;
