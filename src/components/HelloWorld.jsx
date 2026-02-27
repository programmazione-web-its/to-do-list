

function HelloWorld({user, message, text = 'Testo di default'}) {

  return (
    <div>
      <h1>Ciao {user}!</h1>
      <p>{message}</p>
      <p>{text}</p>
    </div>
  );
}

export default HelloWorld