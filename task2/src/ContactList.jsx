import Amount from './Amount';
import NotEmptyPop from './NotEmptyPop';
import { useState } from 'react';
import DelConfirm from './DelConfirm';
import { v4 as uuidv4 } from 'uuid';

function List({ person, setPerson, filter }) {
  const [notEmpty, setNotEmpty] = useState(false);

  const handleNotEmpty = () => {
    setNotEmpty(true);

    setTimeout(() => {
      setNotEmpty(false);
    }, 3000);
  };

  const [delConfirm, setDelConfirm] = useState(false);

  const handleDelConfirm = (el) => {
    setDelConfirm(true);
    el.deleting = true;
  };

  if (filter === 'all') {
    return (
      <ul>
        {person !== null ?
          person.sort((a, b) => (a > b ? -1 : 1))
          .map((p) => (
            <li className='single-client' key={uuidv4()}>
              <div className='client-name'>
                {p.name} {p.lastName}
                <button
                  className='remove-user'
                  onClick={() =>
                    p.balance < 1 ? handleDelConfirm(p) : handleNotEmpty()
                  }
                >
                  &#8855;
                </button>
                {delConfirm && p.deleting === true ? (
                  <DelConfirm
                    setPerson={setPerson}
                    setDelConfirm={setDelConfirm}
                    p={p}
                  ></DelConfirm>
                ) : null}
              </div>
              <Amount person={p} people={person} setPerson={setPerson}></Amount>
              {notEmpty ? <NotEmptyPop></NotEmptyPop> : null}
            </li>
          )) : null}
      </ul>
    );
  } else if (filter === 'full') {
    return (
      <ul>
        {person
          .sort((a, b) => (a > b ? -1 : 1))
          .filter((p) => p.balance > 0)
          .map((p) => (
            <li className='single-client' key={uuidv4()}>
              <div className='client-name'>
                {p.name} {p.lastName}
                <button
                  className='remove-user'
                  onClick={() =>
                    p.balance < 1 ? handleDelConfirm(p) : handleNotEmpty()
                  }
                >
                  &#8855;
                </button>
                {delConfirm && p.deleting === true ? (
                  <DelConfirm
                    setPerson={setPerson}
                    setDelConfirm={setDelConfirm}
                    p={p}
                  ></DelConfirm>
                ) : null}
              </div>
              <Amount person={p} people={person} setPerson={setPerson}></Amount>
              {notEmpty ? <NotEmptyPop></NotEmptyPop> : null}
            </li>
          ))}
      </ul>
    );
  } else if (filter === 'empty') {
    return (
      <ul>
        {person
          .sort((a, b) => (a > b ? -1 : 1))
          .filter((p) => p.balance === 0)
          .map((p) => (
            <li className='single-client' key={uuidv4()}>
              <div className='client-name'>
                {p.name} {p.lastName}
                <button
                  className='remove-user'
                  onClick={() =>
                    p.balance < 1 ? handleDelConfirm(p) : handleNotEmpty()
                  }
                >
                  &#8855;
                </button>
                {delConfirm && p.deleting === true ? (
                  <DelConfirm
                    setPerson={setPerson}
                    setDelConfirm={setDelConfirm}
                    p={p}
                  ></DelConfirm>
                ) : null}
              </div>
              <Amount person={p} people={person} setPerson={setPerson}></Amount>
              {notEmpty ? <NotEmptyPop></NotEmptyPop> : null}
            </li>
          ))}
      </ul>
    );
  }
}

export default List;
