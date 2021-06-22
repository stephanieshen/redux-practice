import Button from "../../components/Button/Button";
import ProjectsList from "../../components/ProjectsList/ProjectsList"
import Search from "../../components/Search/Search";

import { useHistory } from "react-router-dom";

import styles from './ManageProjects.module.scss';

const ManageProjects = () => {
    const history = useHistory();

    const addProject = (): void => {
        history.push('/manage-projects/add');
    }

    return (
        <div className={styles.ManageProjects}>
            <div className={styles.Header}>
                <h3>Hello, Shen!</h3>
                <Search />
            </div>
            <div className={styles.ButtonWrapper}>
                <Button type="button" clicked={addProject} classes={['Primary']}>
                    Add New Project
                </Button>
            </div>
            <ProjectsList />
        </div>
    )
}

export default ManageProjects;