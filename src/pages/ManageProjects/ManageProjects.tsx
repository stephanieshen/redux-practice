import Button from "../../components/Button/Button";
import ProjectsList from "../../components/ProjectsList/ProjectsList"
import Search from "../../components/Search/Search";

import { useHistory } from "react-router-dom";

import styles from './ManageProjects.module.scss';
import { useEffect } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { getProjects } from "../../store/Project/project-actions";

const ManageProjects = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const projects = useSelector((state: RootStateOrAny) => state.project.projects);

    const addProject = (): void => {
        history.push('/manage-projects/add');
    }

    useEffect(() => {
        dispatch(getProjects());
    }, [dispatch]);

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
            <ProjectsList projects={projects} />
        </div>
    )
}

export default ManageProjects;