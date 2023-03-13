import { useState } from 'react';
import axios from 'axios';

function CookieMonster() {

    const [text, setText] = useState("")

    const set = e => {
        e.preventDefault()
        axios.get("http://localhost:3003/cookie", {withCredentials: true})
        .then(res => {
            console.log(res.data)
        })
    }

  return (
    <div style={{color: "black"}}>
      <form onSubmit={set}>
        <h5>COOKIE TEXT</h5>
        <div>
          <label>NEW Cookie TEXT</label>
          <input type='text' value={text} onChange={e => setText(e.target.value)}></input>
        <button>Set</button>
        </div>
      </form>
    </div>
  );
}


export default CookieMonster