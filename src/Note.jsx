function Note(props) {
  return (
    <div>
      <div className="note">
        <h3>{props.title}</h3>
        <p>{props.details}</p>
      </div>
    </div>
  );
}
export default Note;
