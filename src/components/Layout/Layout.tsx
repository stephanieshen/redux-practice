import Sidebar from '../Sidebar/Sidebar';

const Layout = (props) => {
    return (
        <div>
            <Sidebar />
            <main>{props.children}</main>
        </div>
    )
}

export default Layout;