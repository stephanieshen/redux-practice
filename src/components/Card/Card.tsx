import styles from './Card.module.scss';

import dummyLogo from '../../assets/images/dummy-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const Card = () => {
    return (
        <div className={styles.Card}>
            <FontAwesomeIcon
             icon={faEllipsisV} 
             className={styles.EllipsisH} 
            />

            <img src={dummyLogo} alt="dummyLogo" className={styles.Logo} />
            <div className={styles.TextWrapper}>
                <label className={styles.ProjectName}>
                    Project Name
                </label>
                <span className={styles.LastUpdate}>
                    Updated last: Jun 20 2021
                </span>
            </div>
        </div>
    )
}

export default Card;