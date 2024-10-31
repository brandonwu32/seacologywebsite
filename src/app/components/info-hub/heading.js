import styles from '../info-hub/heading.css'
import Button from '../../components/button/button'
import Bubble from "../../components/bubble/bubble"

export default function Heading() {
    return (
        <>
        <div className='heading-wrapper'>
            <div className='header-component-wrapper'>
                <h1 id='welcome-header'>Welcome</h1>
                <Button color="blue" size='large' text='log in'/>
            </div>
            <hr className='header-divider'/>
        </div>
        </>
    );
}