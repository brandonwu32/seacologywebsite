
import styles from '../info-hub/heading.css'
import Button from '../../components/button/button'
import Bubble from "../../components/bubble/bubble"

export default function Heading(props) {
    return (
        <div className='heading-wrapper'>
            <div className='header-component-wrapper'>
                <h1 id='welcome-header'>{props.text}</h1>
                {props.edit && <Button color="red" size="large" text= {props.buttonText}/>}
            </div>
            <hr className='header-divider'/>
        </div>
    );
}