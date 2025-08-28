import Prop2 from "./prop2";

function Prop1({ name }) {
  return (
    <>
      <h1>Props no 01 {name}</h1>
      <Prop2 name= {name}/>
    </>
  );
}

export default Prop1;
