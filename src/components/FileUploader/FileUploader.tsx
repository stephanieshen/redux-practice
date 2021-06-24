import { Formik, Field, Form } from 'formik';
import storage from '../../firebase/firebase';
import Button from '../Button/Button';
import FormField from '../FormField/FormField';
import styles from './FileUploader.module.scss';

const FileUploader = () => {

    const handleFirebaseUpload = (e) => {
        const file = e.target.files[0];
        const storageRef = storage.ref();
        const fileRef = storageRef.child(file.name);
        fileRef.put(file).then(() => {
            console.log('file uplod');
        }); 
    }


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
                            changed={e => handleFirebaseUpload(e)}
                        />
                    </div>

                    <div className={styles.ButtonWrapper}>
                        <Button type="submit" classes={['Primary']}>
                            Upload
                        </Button>
                    </div>
                </Form>
            )}
            onSubmit={async (values) => console.log(values)}
        >

        </Formik>   
    )
}

export default FileUploader;
