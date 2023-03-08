import { useContext } from 'react';
import { useState } from 'react';
import { Global } from './Global';
import { v4 as uuidv4 } from 'uuid';

function Create() {


    const {setCreate} = useContext(Global);


    const [name, setName] = useState('');
  const handleName = (event) => {
    setName(event.target.value);
  };

  const [lastName, setLastName] = useState('');
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

      const add = _ => {
        setCreate({
            name: name,
            lastName: lastName,
            balance: 0,
            id: uuidv4(),
        });

    }

      const onSubmit = (e) => {
        e.preventDefault();
          add(name, lastName);
          setName("");
          setLastName("")
        }
      

    return (
        <form className='form' onSubmit={onSubmit}>
        <div className='input-bin'>
          <label htmlFor='name'>First name</label>
          <input
            className='input-field'
            type='text'
            id='name'
            value={name}
            onChange={handleName}
          ></input>
        </div>
        <div className='input-bin'>
          <label htmlFor='last-name'>Last name</label>
          <input
            className='input-field'
            type='text'
            id='last-name'
            value={lastName}
            onChange={handleLastName}
          ></input>
        </div>
        <button className='submit-acc' type='submit'>
          Submit
        </button>
      </form>
    )
}

export default Create;