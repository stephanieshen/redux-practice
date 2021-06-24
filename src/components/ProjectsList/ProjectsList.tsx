import Card from "../Card/Card"

import styles from './ProjectsList.module.scss';

import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { deleteProject } from "../../store/Project/project-actions";

const ProjectsList = (props) => {
    const dispatch = useDispatch();

    const deleteProjectData = (project): void => {
        dispatch(deleteProject(project));
    }

    return (
        <div className={styles.ProjectsList}>
            {props.projects.map((project, index) => (
                <Card
                    key={index} 
                    project={project} 
                    delete={deleteProjectData} 
                />
            ))}
        </div>
    )
}

ProjectsList.propTypes = {
    projects: PropTypes.any.isRequired
}

export default ProjectsList;