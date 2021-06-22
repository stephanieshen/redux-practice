import Button from '../../../components/Button/Button';
import FormField from '../../../components/FormField/FormField';
import styles from './AddProject.module.scss';

const AddProject = () => {
    return (
        <div className={styles.AddProject}>
            <p className={styles.PageLocation}>Manage Projects &#x3e; Add New Project</p>

            <div className={styles.AddProjectCard}>
                <h4>Add Project</h4>
                <p>Let’s get you all setup. Please tell a bit about your project.</p>

                <div className={styles.FormWrapper}>
                    <div className={styles.FormCol}>
                        <FormField type="text" label="Project Title" />
                        <FormField type="textarea" label="Description" />
                        <FormField type="date" label="Date Started" />
                    </div>

                    <div className={styles.FormCol}>
                        <FormField type="textarea" label="Developers" />
                    </div>
                </div>

                <div className={styles.ButtonWrapper}>
                    <Button type="button" classes={['Primary']}>
                        Next
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AddProject;