import styles from './Sidebar.module.scss';

import profileImage from '../../assets/images/profile.jpg';
import { faCog, faProjectDiagram, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.profileSection}>
                <div
                 className={styles.profileImage} 
                 style={{ backgroundImage: `url(${profileImage})` }} 
                />
                <h5>Stephanie Shen Sabado</h5>
            </div>

            <div>
                <div className={`${styles.sidebarItem} ${styles.sidebarItemActive}`}>
                    <FontAwesomeIcon
                     icon={faProjectDiagram} 
                     className={`${styles.sidebarIcon} ${styles.sidebarIconActive}`} 
                    />
                    <label>Manage Projects</label>
                </div>

                <div className={styles.sidebarItem}>
                    <FontAwesomeIcon
                     icon={faUserFriends} 
                     className={styles.sidebarIcon} 
                    />
                    <label>Manage User</label>
                </div>

                <div className={styles.sidebarItem}>
                    <FontAwesomeIcon
                     icon={faCog} 
                     className={styles.sidebarIcon} 
                    />
                    <label>Settings</label>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;