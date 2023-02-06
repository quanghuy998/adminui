import React from 'react';
import './button.scss';

interface IProps {
    children: any;
}

const Button: React.FC<IProps> = (props) => {
    return <div className="btn">{props.children}</div>;
};

export default Button;
