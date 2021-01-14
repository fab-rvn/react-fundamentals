import * as React from 'react'


function UsernameForm({onSubmitUsername}) {
  const [username, setUsername] = React.useState('');

  function handleSubmit(e) {
    e.preventDefault();
    onSubmitUsername(username);
  }

  function handleChange(e) {
    setUsername(e.target.value.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          onChange={handleChange}
          value={username}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`);
  return (
    <div style={{minWidth: 400}}>
      <UsernameForm onSubmitUsername={onSubmitUsername} />
    </div>
  )
}


export default App
