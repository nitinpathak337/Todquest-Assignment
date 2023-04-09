
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="card">
          <img src="https://michi-blog321.com/wp-content/uploads/2020/12/blog-template3.jpg" alt="login" className="image"/>
          <div className="right-container">
            <form className="form-container">
              <div className="form-top">
                <p className="top-para">ALREADY MEMBERS</p>
                <p className="need-help-para">Need help?</p>
              </div>
              <div className="input-btn-container">
                <input type="text" className="input-el" placeholder="Enter your username"/>
                <input type="password" className="input-el" placeholder="Enter your password"/>
                <button type="button" className="btn">SIGN IN</button>
              </div>
            </form>
            <p className="dont-have-para">Don't have an account yet ?</p>
            <p className="create-account-para">Create an account</p>
          </div>
        </div>
    </div>
  );
}

export default App;
