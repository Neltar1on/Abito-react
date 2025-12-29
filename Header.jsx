import { Link } from 'react-router-dom';
import './Header.css';
export const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header-box'>
          <Link to={'/'} className='header-logo' href='#!'>
            <img src='/images/box 1.svg' alt='logo' />
            <span>Abito</span>
          </Link>
          <div className='header-controls'>
            <button className='btn btn-outline'>Вход и регистрация</button>
            <button className='btn btn-primary'>Подать объявление</button>
          </div>
          <div className='header-burger'>
            <img src='./images/burger.svg' alt='burger' />
          </div>
        </div>
      </div>
    </header>
  );
};
