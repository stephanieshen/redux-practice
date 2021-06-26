import Card from "../Card/Card"

import styles from './ProjectsList.module.scss';

import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteProject } from "../../store/Project/project-actions";
import { projectActions } from "../../store/Project/project";

const ProjectsList = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const editProjectData = (project): void => {
        dispatch(projectActions.setActiveProject(project));
        history.push({
            pathname: '/manage-projects/edit',
            state: {
                project: project
            }
        });
    }

    const deleteProjectData = (project): void => {
        dispatch(deleteProject(project));
    }

    return (
        <div className={styles.ProjectsList}>
            {props.projects.map((project, index) => (
                <Card
                    key={index} 
                    project={project} 
                    edit={editProjectData}
                    remove={deleteProjectData} 
                />
            ))}
        </div>
    )
}

ProjectsList.propTypes = {
    projects: PropTypes.any.isRequired
}

export default ProjectsList;