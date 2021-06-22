import styles from './Datepicker.module.scss';

import PropTypes from 'prop-types';

const Datepicker = (props) => {
    return (
        <input
            type="date" 
            className={styles.Datepicker} 
            onChange={props.changed} 
        />
    )
}


Datepicker.propTypes = {
    changed: PropTypes.func
}

export default Datepicker;