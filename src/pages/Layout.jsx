import { Link, Outlet } from 'react-router-dom';
import logo from '../components/img/logo.svg';

const Layout = () => {
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