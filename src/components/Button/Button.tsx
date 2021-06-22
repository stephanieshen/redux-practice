import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button type={props.type} onClick={props.handleClick}>
            {props.children}
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    children: PropTypes.string,
    handleClick: PropTypes.func
}

export default Button;