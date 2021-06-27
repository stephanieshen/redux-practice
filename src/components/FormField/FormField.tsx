import InputText from "./InputText/InputText";
import Textarea from "./Textarea/Textarea";
import PropTypes from 'prop-types';
import Datepicker from "./Datepicker/Datepicker";

import styles from './FormField.module.scss';
import InputFile from "./InputFile/InputFile";

const FormField = (props) => {

    const field = (type: string): any => {
        switch (type) {
            case 'text':
                return (
                    <InputText
                        placeholder={props.label} 
                        changed={props.changed} 
                        value={props.value}
                    />
                );
            case 'textarea':
                return (
                    <Textarea
                        changed={props.changed} 
                        value={props.value}
                    />
                );
            case 'date':
                return (
                    <Datepicker
                        changed={props.changed} 
                        value={props.value}
                    />
                )
            case 'file':
                return (
                    <InputFile
                        changed={props.changed}
                        value={props.value}
                    />
                )
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
    type: PropTypes.string.isRequired,
    changed: PropTypes.func,
    value: PropTypes.string
}


export default FormField;