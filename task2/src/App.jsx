import './App.scss';
import { useState, useEffect } from 'react';
import ContactForm from './ContactForm';
import { v4 as uuidv4 } from 'uuid';
import List from './ContactList';
import Summary from './Summary';
import axios from 'axios';

const URL = 'http://localhost:3003/accounts';

function App() {
  const [createPerson, setCreatePerson] = useState(null);
  const [person, setPerson] = useState(null);

  const [selectedFilter, setSelectedFilter] = useState('all');

  const addPerson = (name, lastName) => {
    setCreatePerson({
      name: name,
      lastName: lastName,
      balance: 0,
      deleting: false,
    });
  };

  useEffect(() => {
    axios.get(URL).then((res) => {
      setPerson(res.data);
    });
  }, []);

  useEffect(() => {
    if (createPerson === null) {
      return;
    }
    //PROMISE
    const promiseId = uuidv4();
    setPerson((d) => [...d, { ...createPerson, promiseId }]);

    //SERVER

    axios
      .post(URL, { ...createPerson, promiseId })
      .then((res) =>
        setPerson((d) =>
          d.map((d) =>
            res.data.promiseId === d.promiseId
              ? { ...d, id: res.data.id, promiseId: null }
              : { ...d },
          ),
        ),
      );
  }, [createPerson]);

  return (
    <div className='App'>
      <div className='bank-name'>
        BANK OF<span className='kaunas'>KAUNAS</span>
      </div>
      <Summary person={person}></Summary>
      <div className='canvas'>
        <ContactForm addPerson={addPerson}></ContactForm>
        <div className='clientele'>
          <div className='client-header'>
            <div>NAME</div>
            <select
              name='filter'
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              <option value='all'>All accounts</option>
              <option value='empty'>Empty accounts</option>
              <option value='full'>Accounts with money</option>
            </select>
            <div>AMOUNT</div>
          </div>
          <List
            person={person}
            setPerson={setPerson}
            filter={selectedFilter}
          ></List>
        </div>
      </div>
    </div>
  );
}

export default App;
