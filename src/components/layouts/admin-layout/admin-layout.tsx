import React from 'react';
import AdminLayoutHeader from './admin-layout-header/admin-layout-header';
import AdminLayoutMenu from './admin-layout-menu/admin-layout-menu';

import './admin-layout.scss';

interface Props {
    children: any;
}

const AdminLayout: React.FC<Props> = (props) => {
    return (
        <div className="admin-layout">
            <div className="container admin-layout-container">
                <AdminLayoutHeader />
                <AdminLayoutMenu />
            </div>
            <div className="container">{props.children}</div>
        </div>
    );
};

export default AdminLayout;
