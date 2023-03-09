import { useState } from 'react';
import InsufficientPop from './InsufficientPop';
import AddedMoneyModal from './AddedMoneyModal';
import DeductMoneyModal from './DeductMoneyModal';

function Amount({ person, setPerson, people }) {
  const [balance, setBalance] = useState(0);
  const handleBalance = (event) => {
    setBalance(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setBalance('');
  };

  const [negativeMoney, setNegativeMoney] = useState(false);

  const handleNegativeMoney = () => {
    setNegativeMoney(true);

    setTimeout(() => {
      setNegativeMoney(false);
    }, 3000);
  };

  const [added, setAdded] = useState(false);
  const [savedBalance, setSavedBalance] = useState();
  const [deducted, setDeducted] = useState(false);

  function handleAdd(p) {
    const updatedBalance = people.map((person) => {
      if (person.id !== p.id) {
        // No change
        return person;
      } else {
        return {
          ...person,
          balance: Number(person.balance) + Number(balance),
        };
      }
    });
    // Re-render with the new array
    if (balance > 0) {
      setAdded(true);
      setSavedBalance(balance);
      setTimeout(() => {
        setAdded(false);
      }, 3000);
    }

    setPerson(updatedBalance);
  }

  function handleDeduct(p) {
    const updatedBalance = people.map((person) => {
      if (person.id !== p.id) {
        // No change
        return person;
      } else {
        return {
          ...person,
          balance: Number(person.balance) - Number(balance),
        };
      }
    });
    if (balance > 0) {
      setDeducted(true);
      setSavedBalance(balance);
      setTimeout(() => {
        setDeducted(false);
      }, 3000);
    }

    setPerson(updatedBalance);
  }

  return (
    <div className='money-bin'>
      <form className='amount-toChange' onSubmit={submitHandler}>
        <div className='money-label'>
          <label htmlFor='money'>Amount</label>
          <input
            className='money'
            id='money'
            type='text'
            value={balance}
            onChange={handleBalance}
          ></input>
        </div>
        <button className='money-btn add' onClick={() => handleAdd(person)}>
          +
        </button>
        <button
          className='money-btn remove'
          onClick={() =>
            Number(person.balance) - Number(balance) >= 0
              ? handleDeduct(person)
              : handleNegativeMoney()
          }
        >
          -
        </button>
      </form>
      {person.balance}
      {negativeMoney ? <InsufficientPop></InsufficientPop> : null}
      {added ? (
        <AddedMoneyModal
          balance={savedBalance}
          person={person}
        ></AddedMoneyModal>
      ) : null}
      {deducted ? (
        <DeductMoneyModal
          balance={savedBalance}
          person={person}
        ></DeductMoneyModal>
      ) : null}
    </div>
  );
}

export default Amount;
