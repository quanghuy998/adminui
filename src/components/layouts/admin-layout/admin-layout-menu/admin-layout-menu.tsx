import './admin-layout-menu.scss';

const AdminLayoutMenu = () => {
    return (
        <ul className="admin-layout-menu">
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/users">Users</a>
            </li>
            <li>Roles</li>
        </ul>
    );
};

export default AdminLayoutMenu;
