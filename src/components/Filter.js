function Filter(props) {
    const onFilterValueChanged = event => {
        props.filterValueSelected(event.target.value)
    }
  return (
    <div className="form">
      <select className="form-select" onChange={onFilterValueChanged}>
        <option value="active" defaultValue>Your tasks</option>
        <option value="inactive">Well done!</option>
        <option value="all">All</option>
      </select>
    </div>
  );
}

export default Filter;
