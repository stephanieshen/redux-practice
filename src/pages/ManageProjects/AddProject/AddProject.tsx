import Button from '../../../components/Button/Button';
import FormField from '../../../components/FormField/FormField';
import { Formik, Field, Form } from 'formik';
import styles from './AddProject.module.scss';
import { Project } from '../../../models/projects.model';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { addProject } from '../../../store/Project/project-actions';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useState } from 'react';
import TabPanel from '../../../components/TabPanel/TabPanel';
import TableUploads from '../../../components/TableUploads/TableUploads';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';


const AddProject = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [value, setValue] = useState(0);

    const handleChange = (e, newValue) => {
      setValue(newValue);
    };

    const submit = (values: Project): void => {
        dispatch(addProject(values));
        history.goBack();
    }

    return (
        <div className={styles.AddProject}>
            <div className={styles.PageLocation}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/manage-projects">
                        Manage Projects
                    </Link>
                    <Link color="inherit" href="#">
                        Add New Project
                    </Link>
                </Breadcrumbs>
            </div>

            <div className={styles.WhiteCard}>
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


            <div className={styles.WhiteCard}>
                <div className={styles.CardHeader}>
                    <h4>Documents</h4>
                    <p>Upload all the necessary documents here!</p>
                </div>

                <div className={styles.TabsWrapper}>
                    <AppBar position="static" elevation={0}>
                        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                            <Tab label="BRD" id="simple-tab-0" aria-controls="simple-tabpanel-0" />
                            <Tab label="Test Cases" id="simple-tab-1" aria-controls="simple-tabpanel-1" />
                            <Tab label="Manuals" id="simple-tab-2" aria-controls="simple-tabpanel-2" />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                        <TableUploads />
                    </TabPanel>

                    <TabPanel value={value} index={1}>
                        Item 2
                    </TabPanel>

                    <TabPanel value={value} index={2}>
                        <TableUploads />
                    </TabPanel>
                </div>
            </div>
        </div>
    )
}

export default AddProject;