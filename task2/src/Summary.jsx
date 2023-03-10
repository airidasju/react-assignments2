import { useEffect, useState } from 'react';

function Summary({ person }) {
  const [allMoney, setAllMoney] = useState(0);

  useEffect(() => {
    if (person === null) {
      return;
    } else if (person.length === 1) {
      setAllMoney(person[0].balance);
    } else {
      setAllMoney(person.reduce((sum, obj) => sum + obj['balance'], 0));
    }
  }, [person]);

  if (person === null) {
    return;
  } else {
    return (
      <div className='summary'>
        <div className='summary-info'>
          <div>
            <span>Total people : {person.length}</span>
          </div>
          <div>
            <span>Total money : {allMoney} </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;
