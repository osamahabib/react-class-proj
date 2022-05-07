import { useState } from "react";
import "./App.css";

//Component definition/declaraion
// App - components
//DRY - Dont Repeat Yourself - repeating same code again and again
export default function App() {
  const names=['Dhruv','Shivam','Kampa','Osama'];
  const users=[{name: 'Shivam', pic: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.qH6csuqIVO9NfJnClXhuHwHaE7%26pid%3DApi&f=1"},
              {name: 'Dhruv', pic: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.OUHsdOcgAi6XwPhUeqOF0wHaFj%26pid%3DApi&f=1"},
              {name: 'Kampa', pic: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.0d2skZjK6mbEb4SpSBiCbwHaE5%26pid%3DApi&f=1"}

  ];
  return (
    <div className="App">
    {/* {     
      <Welcome name={names[0]} />
      <Welcome name={names[1]} />
      <Welcome name={names[2]} /> } */}

      {users.map(usr => <Msg name={usr.name} pic={usr.pic} />)}
      <Counter />
    </div>
  );
}

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
function Counter(){
  // let like=100;
  const [like, setLike] = useState(0); //these are called hooks
  const [dislike, setDislike] = useState(0);
  return(
    <div>
      <button className='btn-like' onClick={()=>setLike(like+1)}>👍 {like}</button>
      <button className='btn-dislike' onClick={()=>setDislike(dislike+1)}>👎{dislike}</button>
    </div>

  )

}
//creating msg component
function Msg({name, pic}) {
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