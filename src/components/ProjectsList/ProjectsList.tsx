import Card from "../Card/Card"

import styles from './ProjectsList.module.scss';

const ProjectsList = () => {
    const projects = [1, 2, 3, 4, 5];
    return (
        <div className={styles.ProjectsList}>
            {projects.map((project, index) => (
                <Card key={index} />
            ))}
        </div>
    )
}

export default ProjectsList;