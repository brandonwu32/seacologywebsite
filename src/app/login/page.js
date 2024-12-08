import './page.css';
import Button from '../components/button/button'

export default function Login() {
    return (
        <div>
            <p>Email:</p>
            <input></input>
            <p>Password:</p>
            <input></input>
            <Button onClick = {console.log("hello")} id = 'large' color = "blue" text = "Enter"/>
        </div>
    )
}