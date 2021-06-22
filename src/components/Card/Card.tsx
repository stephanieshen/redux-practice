import styles from './Card.module.scss';

import dummyLogo from '../../assets/images/dummy-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const Card = () => {
    return (
        <div className={styles.card}>
            <FontAwesomeIcon
             icon={faEllipsisV} 
             className={styles.ellipsisH} 
            />

            <img src={dummyLogo} alt="dummyLogo" className={styles.logo} />
            <div className={styles.textWrapper}>
                <label className={styles.projectName}>
                    Project Name
                </label>
                <span className={styles.lastUpdate}>
                    Updated last: Jun 20 2021
                </span>
            </div>
        </div>
    )
}

export default Card;