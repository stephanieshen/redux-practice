import { Formik, Field, Form } from 'formik';
import PropTypes from 'prop-types';

import Button from '../Button/Button';
import FormField from '../FormField/FormField';
import styles from './FileUploader.module.scss';

const FileUploader = (props) => {

    return (
        <Formik
            initialValues={{
                filename: '',
                file: ''
            }}
            render={({ setFieldValue }) => (
                <Form>
                    <div className={styles.FormWrapper}>
                        <div className={styles.Header}>
                            <h4>File Upload</h4>
                        </div>

                        <Field
                            name="filename" 
                            as={FormField} 
                            label="Filename" 
                            type="text"
                            changed={e => setFieldValue('filename', e.target.value)}
                        />
                        <Field
                            name="file" 
                            as={FormField} 
                            label="" 
                            type="file" 
                            changed={e => setFieldValue('file', e.target.files[0])}
                        />
                    </div>

                    <div className={styles.ButtonWrapper}>
                        <Button type="submit" classes={['Primary']}>
                            Upload
                        </Button>
                    </div>
                </Form>
            )}
            onSubmit={async (values) => props.upload(values)}
        >
        </Formik>   
    )
}

FileUploader.propTypes = {
    upload: PropTypes.func.isRequired
}

export default FileUploader;
