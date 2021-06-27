import styles from './Sidebar.module.scss';

import profileImage from '../../assets/images/profile.jpg';
import { faCog, faProjectDiagram, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sidebar = () => {
    return (
        <div className={styles.Sidebar}>
            <div className={styles.ProfileSection}>
                <div
                 className={styles.ProfileImage} 
                 style={{ backgroundImage: `url(${profileImage})` }} 
                />
                <h5>Stephanie Shen Sabado</h5>
            </div>

            <div>
                <div className={`${styles.SidebarItem} ${styles.SidebarItemActive}`}>
                    <FontAwesomeIcon
                     icon={faProjectDiagram} 
                     className={`${styles.SidebarIcon} ${styles.SidebarIconActive}`} 
                    />
                    <label>Manage Projects</label>
                </div>

                <div className={styles.SidebarItem}>
                    <FontAwesomeIcon
                     icon={faUserFriends} 
                     className={styles.SidebarIcon} 
                    />
                    <label>Manage Users</label>
                </div>

                <div className={styles.SidebarItem}>
                    <FontAwesomeIcon
                     icon={faCog} 
                     className={styles.SidebarIcon} 
                    />
                    <label>Settings</label>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;