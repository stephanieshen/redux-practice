import styles from './Card.module.scss';

import dummyLogo from '../../assets/images/dummy-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Card = (props) => {
    return (
        <div className={styles.Card}>
            <FontAwesomeIcon
             icon={faEllipsisV} 
             className={styles.EllipsisH} 
            />

            <img src={dummyLogo} alt="dummyLogo" className={styles.Logo} />
            <div className={styles.TextWrapper}>
                <label className={styles.ProjectName}>
                    {props.project.title}
                </label>
                <span className={styles.LastUpdate}>
                    Updated last: Jun 20 2021
                </span>
            </div>
        </div>
    )
}

Card.propTypes = {
    project: PropTypes.object
}


export default Card;