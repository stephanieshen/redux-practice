import { useState } from 'react';
import styles from './Card.module.scss';

import dummyLogo from '../../assets/images/dummy-logo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';

const Card = (props) => {
    const { project, edit, remove } = props;
    const [anchorEl, setAnchorEl] = useState(null);

    const openMenu = (e): void => {
        setAnchorEl(e.currentTarget);
    }

    const closeMenu = (): void => {
        setAnchorEl(null);
    };

    const onEditProject = (): void => {
        edit(project);
        closeMenu();
    }

    const onDeleteProject = (): void => {
        remove(project);
        closeMenu();
    }

    return (
        <>
            <div className={styles.Card}>
                <FontAwesomeIcon
                    icon={faEllipsisV} 
                    className={styles.EllipsisH}
                    aria-controls="simple-menu" 
                    aria-haspopup="true" 
                    onClick={openMenu} 
                />

                <img src={dummyLogo} alt="dummyLogo" className={styles.Logo} />
                <div className={styles.TextWrapper}>
                    <label className={styles.ProjectName}>
                        {project.title}
                    </label>
                    <span className={styles.LastUpdate}>
                        Updated last: Jun 20 2021
                    </span>
                </div>
            </div>

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={closeMenu}
            >
                <MenuItem onClick={onEditProject}>
                    <FontAwesomeIcon icon={faPencilAlt} /> 
                    <span className={styles.CardMenuLabel}>Edit</span>
                </MenuItem>
                <MenuItem onClick={onDeleteProject}>
                    <FontAwesomeIcon icon={faTrash} /> 
                    <span className={styles.CardMenuLabel}>Delete</span>
                </MenuItem>
            </Menu>
        </>
    )
}

Card.propTypes = {
    project: PropTypes.object,
    edit: PropTypes.func,
    remove: PropTypes.func
}


export default Card;