import styles from './Textarea.module.scss';

import PropTypes from 'prop-types';

const Textarea = (props) => {
    return (
        <textarea
            className={styles.TextArea} 
            rows={8} 
            onChange={props.changed} 
        />
    )
}

Textarea.propTypes = {
    changed: PropTypes.func
}

export default Textarea;