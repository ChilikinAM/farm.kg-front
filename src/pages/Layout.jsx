import { Link, Outlet } from 'react-router-dom';
import logo from '../components/img/logo.svg';
import { useState, useEffect } from 'react';

const Layout = () => {
  const [text, setText] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ChilikinAM/farm.kg-front/main/src/components/data/main_en.json')
      .then(res => res.json())
      .then(data => setText(data))
  }, []);

    return (
      <>
        <header>
            <div className='logo'><Link to='/'><img src={logo}></img></Link></div>
            <div className='mainMenu'>
                    <Link to='/about'>About us</Link>
                    <Link to='/Companies'>Companies</Link>
                    <Link to='/Contacts'>Contacts</Link>
            </div>
        </header>
        <main>
        <Outlet />
        </main>
      </>
    )
}

export {Layout}