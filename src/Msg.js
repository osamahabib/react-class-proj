import { Counter } from "./Counter";

//creating msg component
function Msg({ name, pic }) {
  // console.log(props);
  // const name = "Osama";
  return (
    <div className="msg-container">
      <img className="profile-pic" src={pic} alt="{name}" />
      <h1>Hello {name}</h1>
      <Counter />
    </div>
  );
}
