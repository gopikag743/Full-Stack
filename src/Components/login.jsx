import './login.css'
import { Link } from 'react-router-dom';

import React, { useReducer } from "react";

const initialState = {
  email: "",
  password: "",
  errors: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "SET_ERRORS":
      return { ...state, errors: action.errors };
    default:
      return state;
  }
};

function Login() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const validate = () => {
      const errors = {};
      if (!state.email.includes("@")) errors.email = "Invalid email address.";
      if (state.password.length < 6) errors.password = "Password too short.";
      return errors;
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const errors = validate();
      if (Object.keys(errors).length === 0) {
        console.log("Form submitted:", state);
      } else {
        dispatch({ type: "SET_ERRORS", errors });
      }
    };

    return (
        <>
        <div className='arr'>
            <Link to='/'><i class="fa-solid fa-arrow-left"></i></Link>
        </div>
<div className="main">
        <form>
            <h1>Login</h1> 
            <form onSubmit={handleSubmit}>
      <div>
        
        <input
          type="email"
          placeholder='Email'
          value={state.email}
          onChange={(e) =>
            dispatch({ type: "SET_FIELD", field: "email", value: e.target.value })
          }
        />
        {state.errors.email && <p>{state.errors.email}</p>}
      </div>
      <div>
        
        <input
          type="password"
          placeholder='Password'
          value={state.password}
          onChange={(e) =>
            dispatch({
              type: "SET_FIELD",
              field: "password",
              value: e.target.value,
            })
          }
        />
        state.errors.password && <p>{state.errors.password}</p>}
      </div>



        <button type='submit' className='bt1'><h4>Sign in</h4></button>
        </form>


            <h3 id="pass">Forgot Password?</h3>
            <button id="login">Login</button>
            <Link to='/Signup'><h3 class="acc">Don't have an account? Signup</h3></Link>
            <h2>Or</h2>
            <div className="google">
               <button><i class="fa-brands fa-google"></i> Login with Google</button>
            </div>
         <div className="link">
           <button><i class="fa-brands fa-linkedin"></i> Login with LinkedIn</button>
         </div>
        </form>
    </div>

        </>
    )
}

export default Login
 
