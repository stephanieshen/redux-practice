import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button
         type={props.type} 
         onClick={props.clicked} 
         className={`${styles.Button} ${styles[props.classes.join(' ')]}`}
        >
            {props.children}
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    children: PropTypes.string,
    clicked: PropTypes.func,
    classes: PropTypes.array
}

export default Button;