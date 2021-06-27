import { useRef, useState } from 'react';

import { faCheckCircle, faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import styles from './InputFile.module.scss';

const InputFile = (props) => {
    const fileInput = useRef<HTMLInputElement>(null);
    const [isFileAdded, setIsFileAdded] = useState(false);

    const handleClick = (): void => {
        fileInput?.current?.click();
    }

    const fileSelected = (e): void => {
        setIsFileAdded(true);
        props.changed(e);
    }

    return (
       <div className={styles.InputFile}>
            <button 
                type="button" 
                className={`${styles.UploadBtn} ${isFileAdded ? styles.Success : ''}`} 
                onClick={handleClick}
            >
                <FontAwesomeIcon
                    icon={!isFileAdded ? faUpload : faCheckCircle}
                />
                <span>
                    {!isFileAdded ? 'Upload a file' : 'File Added'}
                </span>
            </button>
            <input
                type="file" 
                onChange={e => fileSelected(e)}
                className={styles.Input}
                ref={fileInput}
            />
       </div>
    )
}

InputFile.propTypes = {
    changed: PropTypes.func
}

export default InputFile;