import styles from './InputText.module.scss';

import PropTypes from 'prop-types';

const InputText = (props) => {
    return (
        <input
         type="text" 
         placeholder={props.placeholder}
         className={styles.InputText}
         onChange={props.changed}
        />
    )
}

InputText.propTypes = {
    placeholder: PropTypes.string,
    changed: PropTypes.func
}



export default InputText;