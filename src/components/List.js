import * as Icon from "react-feather";

function List(props) {
  const deleteItem = (event) => {
    let new_goals = props.goals.filter((goal) => goal !== event);
    props.setGoals(new_goals);
  };

  return (
    <div className="row align-items-center">
      <div className="col-lg-8">
        {props.goals.map((item) => (
          <div class="card my-2">
            <div class="card-body">
              <div class="row justify-content-between">
                <div class="col-8">{item.title}</div>
                <div class="col-2 text-center">
                  <Icon.CheckSquare />
                </div>
                <div class="col-2 text-center" onClick={() => deleteItem(item)}>
                  <Icon.XSquare />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default List;
