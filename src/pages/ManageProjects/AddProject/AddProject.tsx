import FormField from '../../../components/FormField/FormField';
import styles from './AddProject.module.scss';

const AddProject = () => {
    return (
        <div className={styles.addProject}>
            <h4>Add Project</h4>
            <p>Let’s get you all setup. Please tell a bit about your project.</p>

            <div>
                <div>
                    <FormField type="text" label="Project Title" />
                    <FormField type="textarea" label="Description" />
                    <FormField type="date" label="Date Started" />
                </div>

                <div>
                    <FormField type="textarea" label="Developers" />
                </div>
            </div>
        </div>
    )
}

export default AddProject;