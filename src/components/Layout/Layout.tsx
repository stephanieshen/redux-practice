import Sidebar from '../Sidebar/Sidebar';

import { Redirect, Route, Switch } from 'react-router-dom';

import ManageProjects from '../../pages/ManageProjects/ManageProjects';

import styles from './Layout.module.scss';
import ProjectInfo from '../../pages/ManageProjects/ProjectInfo/ProjectInfo';

const Layout = (props) => {
    return (
        <div className={styles.Layout}>
            <Sidebar />
            <main className={styles.Main}>
                {props.children}
                
                <Switch>
                    <Route key="manage-project" path="/manage-projects" component={ManageProjects} exact />
                    <Route key="add-project" path="/manage-projects/add" component={ProjectInfo} exact />
                    <Route key="edit-project" path="/manage-projects/edit" component={ProjectInfo} exact />
                    <Redirect from="/" to="/manage-projects" />
                </Switch>
            </main>
        </div>
    )
}

export default Layout;