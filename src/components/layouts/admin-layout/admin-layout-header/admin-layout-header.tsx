import Button from '../../../button/button';
import './admin-layout-header.scss';

const AdminLayoutHeader = () => {
  return (
    <div className="admin-layout-header">
      <div>LOGO</div>
      <div className="admin-layout-header-search">
        <input placeholder="Seach ..." />
        <Button>Search</Button>
      </div>
      <ul className="admin-layout-header-tools">
        <li>Hello user!</li>
        <li>Login</li>
      </ul>
    </div>
  );
};

export default AdminLayoutHeader;
