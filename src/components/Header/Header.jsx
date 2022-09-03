import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.module.css'

function Header() {
    return (
        <header className={style.App_header}>
                <Link className={style.nav_link} to='/'>Home</Link>
                <Link className={style.nav_link} to='/users'>Users</Link>
                <Link className={style.nav_link} to='/questions'>Questions</Link>
        </header>
    );
}

export default Header;