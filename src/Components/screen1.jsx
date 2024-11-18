import './screen1.css'
import { Link } from 'react-router-dom';
function Screen1() {
  return (
    <>
      <header className="head">
        <h1>JOB PORTAL</h1>
    </header>
    <nav class="list">
        <h1 id="job">
          <img src="data:image/png;base64,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" alt="logo" />Jobc</h1>
        <ul>
            <li>Home</li>
            <li>Jobs</li>
            <Link to='/Signup'><li><button>Signup</button></li></Link>
            <Link to='/Login'><li><button>Login</button></li></Link>
        </ul>
    </nav>
    <article>
        <h1>INDIA'S#1 JOB PLATFORM</h1>
        <p>Find Your Dream Job</p>
        <p id="p1">Discover 50 lakh+ career opportunities</p>
    </article>
    </>
  );
}

export default Screen1;