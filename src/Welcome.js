//The html inside return is actually JSX
//Template syntax - {}
function Welcome(props) {
  console.log(props);
  // const name = "Osama";
  return (
    <div>
      <h1>Hello {props.name}</h1>
    </div>
  );
}
