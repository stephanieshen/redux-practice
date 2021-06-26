import { useEffect, useState } from 'react';

import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import PropTypes from 'prop-types';

import Button from '../../../components/Button/Button';
import FormField from '../../../components/FormField/FormField';
import { Project } from '../../../models/projects.model';
import { addProject, updateProject } from '../../../store/Project/project-actions';
import TabPanel from '../../../components/TabPanel/TabPanel';
import TableUploads from '../../../components/TableUploads/TableUploads';

import styles from './ProjectInfo.module.scss';

const ProjectInfo = (props) => {
    const { location } = props;
    const dispatch = useDispatch();
    const history = useHistory();
    const [activeProject] = useState(location?.state?.project);
    const [isEditMode, setIsEditMode] = useState(false);
    const [value, setValue] = useState(0);

    const handleChange = (e, newValue) => {
      setValue(newValue);
    };

    const submit = (values: Project): void => {
        if (!isEditMode) {
            dispatch(addProject(values));
            history.goBack();
            return;
        }

        dispatch(updateProject({
            id: activeProject.id,
            ...values
        }))
    }

    useEffect(() => {
        if (activeProject) {
            setIsEditMode(true);
        }   

    }, [activeProject, location?.state?.project]);

    return (
        <div className={styles.ProjectInfo}>
            <div className={styles.PageLocation}>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link color="inherit" href="/manage-projects">
                        Manage Projects
                    </Link>
                    <Link color="inherit" href="#">
                        {isEditMode ? `Edit ${activeProject?.title}` : 'Add New Project'}
                    </Link>
                </Breadcrumbs>
            </div>

            <div className={styles.WhiteCard}>
                <div className={styles.CardHeader}>
                    <h4>{isEditMode ? 'Edit' : 'Add'} Project </h4>
                    <p>Let’s get you all setup. Please tell a bit about your project.</p>
                </div>

                <Formik
                    initialValues={{
                        title: activeProject?.title,
                        description: activeProject?.description,
                        dateStarted: activeProject?.dateStarted,
                        developers: activeProject?.developers
                    }}
                    render={({ setFieldValue, values }) => (
                        <Form>
                            <div className={styles.FormWrapper}>
                                <div className={styles.FormCol}>
                                    <Field
                                        name="title" 
                                        as={FormField} 
                                        label="Project Title" 
                                        type="text" 
                                        value={values?.title}
                                        changed={e => setFieldValue('title', e.target.value)}
                                    />
                                    <Field
                                        name="description" 
                                        as={FormField} 
                                        label="Description" 
                                        type="textarea" 
                                        value={values?.description}
                                        changed={e => setFieldValue('description', e.target.value)}
                                    />
                                    <Field
                                        name="dateStarted" 
                                        as={FormField} 
                                        label="Date Started" 
                                        type="date" 
                                        value={values?.dateStarted}
                                        changed={e => setFieldValue('dateStarted', e.target.value)}
                                    />
                                </div>

                                <div className={styles.FormCol}>
                                    <Field
                                        name="developers" 
                                        as={FormField} 
                                        label="Developers" 
                                        type="textarea" 
                                        value={values?.developers}
                                        changed={e => setFieldValue('developers', e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className={styles.ButtonWrapper}>
                                <Button type="submit" classes={['Primary']}>
                                    {isEditMode ? 'Update' : 'Next'}
                                </Button>
                            </div>
                        </Form>
                    )}
                    onSubmit={async (values) => submit(values)}
                ></Formik>
            </div>


            {isEditMode && (
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
            )}
        </div>
    )
}

ProjectInfo.propTypes = {
    location: PropTypes.object,
}


export default ProjectInfo;