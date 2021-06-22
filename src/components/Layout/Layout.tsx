import Sidebar from '../Sidebar/Sidebar';

import { Redirect, Route, Switch } from 'react-router-dom';

import ManageProjects from '../../pages/ManageProjects/ManageProjects';

import styles from './Layout.module.scss';
import AddProject from '../../pages/ManageProjects/AddProject/AddProject';

const Layout = (props) => {
    return (
        <div className={styles.Layout}>
            <Sidebar />
            <main className={styles.Main}>
                {props.children}
                
                <Switch>
                    <Route path="/manage-projects" component={ManageProjects} exact />
                    <Route path="/manage-projects/add" component={AddProject} exact />
                    <Redirect from="/" to="/manage-projects" />
                </Switch>
            </main>
        </div>
    )
}

export default Layout;