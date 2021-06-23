import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const Button = (props) => {
    const classes = props.classes
        .reduce((acc, classname) => {
            acc = acc + ' ' + styles[classname];
            return acc; 
        }, '');

    return (
        <button
         type={props.type} 
         onClick={props.clicked} 
         className={`${styles.Button} ${classes}`}
        >
            {props.children}
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    children: PropTypes.node,
    clicked: PropTypes.func,
    classes: PropTypes.array
}

export default Button;