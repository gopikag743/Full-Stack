import './signup.css'
import { Link } from 'react-router-dom';
function Signup() {
    return (
        <>
         <div className='arrow'><Link to='/'><i class="fa-solid fa-arrow-left"></i></Link>
        </div>
<div class="main">
        <form>
            <h1>Signup</h1> 
            <table>
                <tr>
                    <td>
                        <input type="text" placeholder="Email"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="password" placeholder=" Create password"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input type="password" placeholder="Confirm password"/>
                    </td>
                </tr>
            </table>
            <button id="login">Signup</button>
            <Link to='/Login'><h3 class="acc">Already have an account? Login</h3></Link>
            <h2>Or</h2>
            <div class="google">
                <button><i class="fa-brands fa-google"></i> Login with Google</button>
            </div>
         <div class="link">
            <button><i class="fa-brands fa-linkedin"></i> Login with LinkedIn</button>
         </div>
        </form>
</div>

        </>
    )
}

export default Signup