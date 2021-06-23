import Card from "../Card/Card"

import styles from './ProjectsList.module.scss';

import PropTypes from 'prop-types';

const ProjectsList = (props) => {
    return (
        <div className={styles.ProjectsList}>
            {props.projects.map((project, index) => (
                <Card key={index} project={project} />
            ))}
        </div>
    )
}

ProjectsList.propTypes = {
    projects: PropTypes.any.isRequired
}

export default ProjectsList;