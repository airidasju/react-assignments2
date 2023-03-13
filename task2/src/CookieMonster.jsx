import { useState } from 'react';
import axios from 'axios';

function CookieMonster() {

  const [text, setText] = useState('');

  const set = () => {
    axios
      .post('http://localhost:3003/cookie', { text }, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div style={{ color: 'black' }}>
        <h5>COOKIE TEXT</h5>
        <div>
          <label>NEW Cookie TEXT</label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></input>
          <button onClick={set}>Set</button>
        </div>
    </div>
  );
}

export default CookieMonster;
