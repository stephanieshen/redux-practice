import PropTypes from 'prop-types';

const InputFile = (props) => {
    return (
        <input
         type="file" 
         onChange={props.changed}
        />
    )
}

InputFile.propTypes = {
    changed: PropTypes.func
}

export default InputFile;