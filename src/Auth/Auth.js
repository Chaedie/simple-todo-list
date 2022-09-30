import './Auth.scss';

function Auth() {
  return (
    <div className="Auth">
      <header>
        <h1>Auth Page</h1>
      </header>
      <main className="LoginContainer">
        <form>
          <label htmlFor="id">ID</label>
          <input type="text" name="id"></input>
          <br></br>
          <label htmlFor="password">PWD</label>
          <input type="password" name="password"></input>
        </form>
      </main>
    </div>
  );
}

export default Auth;
