import { Link, Outlet } from 'react-router-dom';
import logo from '../components/img/logo.svg';

const Layout = ({ text }) => {
    return (
      <>
        <header>
            <div className='logo'><Link to='/'><img src={logo}></img></Link></div>
            <div className='mainMenu'>
                    <Link to='/about'>{text.menuAbout}</Link>
                    <Link to='/Companies'>{text.menuCompanies}</Link>
                    <Link to='/Contacts'>{text.menuContacts}</Link>
            </div>
        </header>
        <main>
        <Outlet />
        </main>
      </>
    )
}

export {Layout}