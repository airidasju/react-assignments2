import './App.scss';
import { useState } from 'react';
import PersonModal from './PersonModal';

function ContactForm({ addPerson }) {
  const [name, setName] = useState('');
  const handleName = (event) => {
    setName(event.target.value);
  };

  const [lastName, setLastName] = useState('');
  const handleLastName = (event) => {
    setLastName(event.target.value);
  };

  const isValidInput = (name, lastname) => {
    return name.length > 3 && lastname.length > 3;
  };

  const [personModal, setPersonModal] = useState(false);
  const [savedName, setSavedName] = useState();
  const [savedLastName, setSavedLastName] = useState();

  const personCreatedPop = () => {
    setPersonModal(true);
    setTimeout(() => {
      setPersonModal(false);
    }, 3000);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (isValidInput(name, lastName)) {
      addPerson(name, lastName);
      setSavedName(name);
      setSavedLastName(lastName);
      personCreatedPop();
      setName('');
      setLastName('');
    }
  };

  return (
    <div className='all-clients'>
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
      {personModal ? (
        <PersonModal
          savedName={savedName}
          savedLastName={savedLastName}
        ></PersonModal>
      ) : null}
    </div>
  );
}

export default ContactForm;
