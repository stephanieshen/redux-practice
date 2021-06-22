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
        <div className={styles.manageProjects}>
            <div className={styles.header}>
                <h3>Hello, Shen!</h3>
                <Search />
            </div>
            <Button type="button" handleClick={addProject}>
                Add New Project
            </Button>
            <ProjectsList />
        </div>
    )
}

export default ManageProjects;