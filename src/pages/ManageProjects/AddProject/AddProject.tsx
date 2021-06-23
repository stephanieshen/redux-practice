import Button from '../../../components/Button/Button';
import FormField from '../../../components/FormField/FormField';
import { Formik, Field, Form } from 'formik';
import styles from './AddProject.module.scss';
import { Project } from '../../../models/projects.model';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { addProject } from '../../../store/Project/project-actions';

const AddProject = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const submit = (values: Project): void => {
        dispatch(addProject(values));
        history.goBack();
    }

    return (
        <div className={styles.AddProject}>
            <p className={styles.PageLocation}>
                Manage Projects &#x3e; Add New Project
            </p>

            <div className={styles.AddProjectCard}>
                <div className={styles.CardHeader}>
                    <h4>Add Project</h4>
                    <p>Let’s get you all setup. Please tell a bit about your project.</p>
                </div>

                
                <Formik
                    initialValues={{
                        title: '',
                        description: '',
                        dateStarted: '',
                        developers: ''
                    }}
                    render={({ setFieldValue }) => (
                        <Form>
                            <div className={styles.FormWrapper}>
                                <div className={styles.FormCol}>
                                    <Field
                                        name="title" 
                                        as={FormField} 
                                        label="Project Title" 
                                        type="text"
                                        changed={e => setFieldValue('title', e.target.value)}
                                    />
                                    <Field
                                        name="description" 
                                        as={FormField} 
                                        label="Description" 
                                        type="textarea" 
                                        changed={e => setFieldValue('description', e.target.value)}
                                    />
                                    <Field
                                        name="dateStarted" 
                                        as={FormField} 
                                        label="Date Started" 
                                        type="date" 
                                        changed={e => setFieldValue('dateStarted', e.target.value)}
                                    />
                                </div>

                                <div className={styles.FormCol}>
                                    <Field
                                        name="developers" 
                                        as={FormField} 
                                        label="Developers" 
                                        type="textarea" 
                                        changed={e => setFieldValue('developers', e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className={styles.ButtonWrapper}>
                                <Button type="submit" classes={['Primary']}>
                                    Next
                                </Button>
                            </div>
                        </Form>
                    )}
                    onSubmit={async (values) => submit(values)}
                ></Formik>
                
            </div>
        </div>
    )
}

export default AddProject;