import InputText from "./InputText/InputText";
import Textarea from "./Textarea/Textarea";
import PropTypes from 'prop-types';
import Datepicker from "./Datepicker/Datepicker";

import styles from './FormField.module.scss';

const FormField = (props) => {

    const field = (type: string): any => {
        switch (type) {
            case 'text':
                return <InputText placeholder={props.label} />;
            case 'textarea':
                return <Textarea />;
            case 'date':
                return <Datepicker />
        }
    }

    return (
        <div>
            <label className={styles.Label}>{props.label}</label>
            <div className={styles.FieldWrapper}>
                {field(props.type)}
            </div>
        </div>
    )
}

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}


export default FormField;