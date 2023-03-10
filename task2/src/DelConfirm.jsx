import axios from 'axios';

const URL = 'http://localhost:3003/accounts';

function DelConfirm({ setPerson, setDelConfirm, p }) {
  const delAcceptHandler = (el) => {
    setPerson((pers) => pers.filter((pers) => pers.id !== el.id));
    setDelConfirm(false);
    el.deleting = false;

      axios.delete(URL + '/' + el.id)
          .then(res => console.log(res.data));
    
  };

  const delCancelHandler = (el) => {
    setDelConfirm(false);
    el.deleting = false;
  };

  return (
    <>
      <div className='del-confirm'>
        <span>Are you sure?</span>
        <div style={{ display: 'flex', gap: '30px' }}>
          <button
            className='del-confirmBtn accept'
            onClick={() => delAcceptHandler(p)}
          >
            Yes
          </button>
          <button
            className='del-confirmBtn deny'
            onClick={() => delCancelHandler(p)}
          >
            No
          </button>
        </div>
      </div>
    </>
  );
}

export default DelConfirm;
