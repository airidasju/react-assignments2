function AddedMoneyModal({ balance, person }) {
  return (
    <div className='modal created'>
      <span>
        Added {balance}$ to {person.name} {person.lastName}
      </span>
    </div>
  );
}

export default AddedMoneyModal;
