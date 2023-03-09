function DeductMoneyModal({balance, person}) {
        
    return <div className='modal insufficient'>
        <span>Deducted {balance}$ from {person.name} {person.lastName}</span>
        </div>
  }
  
  export default DeductMoneyModal;
  