function PersonModal({ savedName, savedLastName }) {
  return (
    <div className='modal created'>
      <span>Created new user</span>
      <span>
        {savedName} {savedLastName}
      </span>
    </div>
  );
}

export default PersonModal;
