import { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { cloneDeep } from 'lodash';
import uuid from 'react-uuid';

import Button from '../../../components/Button/Button';
import FormField from '../../../components/FormField/FormField';
import { Project } from '../../../models/projects.model';
import { addProject, updateProject } from '../../../store/Project/project-actions';
import TabPanel from '../../../components/TabPanel/TabPanel';
import TableUploads from '../../../components/TableUploads/TableUploads';

import styles from './ProjectInfo.module.scss';
import storage from '../../../firebase/firebase';

const ProjectInfo = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [value, setValue] = useState(0);
    const activeProject = useSelector(
        (state: RootStateOrAny) => state.projects.activeProject
    );
    const [isEditMode] = useState(Boolean(activeProject));

    const handleChange = (e, newValue) => {
      setValue(newValue);
    };

    const submit = async (values: Project): Promise<any> => {
        if (!isEditMode) {
            if (values.logo) {
                values.logo = await uploadLogo(values.logo);
            }

            await dispatch(addProject(values));
            history.push('/manage-projects/edit');
            return;
        }

        const project = cloneDeep(activeProject);
        await dispatch(updateProject({
            ...project,
            ...values
        }));
        history.push('/manage-projects');
    }

    const uploadLogo = async (logo): Promise<any> => {
        const storageRef = storage.ref();
        const fileRef = storageRef.child(`${uuid()}-${logo.filename}`);
        const uploadTask = await fileRef.put(logo);
        return await uploadTask.ref.getDownloadURL();
    }

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
                        developers: activeProject?.developers,
                        logo: activeProject?.logo
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

                                    {activeProject?.logo && (
                                        <div className={styles.LogoWrapper}>
                                            <img 
                                                src={activeProject.logo}
                                                className={styles.Logo}
                                            />
                                        </div>
                                    )}

                                    {!activeProject?.logo && (
                                        <Field
                                            name="logo" 
                                            as={FormField} 
                                            label="Logo" 
                                            type="file"
                                            value={values?.logo}
                                            changed={e => setFieldValue('logo', e.target.files[0])}
                                        />
                                    )}
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
                                <Tab label="Manuals" id="simple-tab-1" aria-controls="simple-tabpanel-1" />
                            </Tabs>
                        </AppBar>
                        <TabPanel value={value} index={0}>
                            <TableUploads
                                project={cloneDeep(activeProject)} 
                                propertyName="brds"
                            />
                        </TabPanel>

                        <TabPanel value={value} index={1}>
                            <TableUploads 
                                project={cloneDeep(activeProject)} 
                                propertyName="manuals"
                            />
                        </TabPanel>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProjectInfo;