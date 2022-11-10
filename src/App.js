import {useState} from "react";


import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
    
  return (
    <div className="App">
      <h1>LikeButton</h1>
    <button style={{fontSize:"20px",cursor:"pointer",margin:"10px",padding:"10px 30px",borderRadius:"5px",border:"1px solid blue",backgroundColor:"#24A0ED"}} onClick={() => setCount(count + 1)}>+</button>
    <button style={{fontSize:"20px",cursor:"pointer",margin:"10px",padding:"10px 30px",borderRadius:"5px",border:"1px solid blue",backgroundColor:"#24A0ED"}} onClick={() => setCount(count - 1)}>-</button>
    <h1>{count} Likes</h1>
    </div>
  );
}
