import styles from './Datepicker.module.scss';

import PropTypes from 'prop-types';

const Datepicker = (props) => {
    return (
        <input
            type="date" 
            className={styles.Datepicker} 
            onChange={props.changed} 
            value={props.value ? props.value : ''}
        />
    )
}


Datepicker.propTypes = {
    changed: PropTypes.func,
    value: PropTypes.string
}

export default Datepicker;