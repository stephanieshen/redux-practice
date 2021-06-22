import styles from './InputText.module.scss';

import PropTypes from 'prop-types';

const InputText = (props) => {
    return (
        <input
         type="text" 
         placeholder={props.placeholder}
         className={styles.InputText}
        />
    )
}

InputText.propTypes = {
    placeholder: PropTypes.string
}



export default InputText;