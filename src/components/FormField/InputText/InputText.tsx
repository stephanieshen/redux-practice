import PropTypes from 'prop-types';

const InputText = (props) => {
    return (
        <input
         type="text" 
         placeholder={props.placeholder}
        />
    )
}

InputText.propTypes = {
    placeholder: PropTypes.string
}



export default InputText;