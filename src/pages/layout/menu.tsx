import weatherIcon from 'assets/icons/weather-icon.png';
import clsx from 'clsx';
import useDetectScreen from 'hook/useDetectScreen';
import {IMenuListValues, IMenuProps} from 'pages/layout/index.d';
import React from 'react';
import {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

const Menu = ({toggle, setToggle}: IMenuProps) => {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const location = useLocation();
  const [itemActive, setItemActive] = useState(location.pathname);
  const isDesktopScreen = useDetectScreen();

  const menuList: IMenuListValues[] = [
    {
      title: 'Home',
      path: '/',
      imgSrc: 'https://img.icons8.com/doodle/480/000000/home--v1.png',
    },
    {
      title: 'Wheather',
      path: '/weather',
      imgSrc: weatherIcon,
    },

    {
      title: 'Food',
      path: '/food',
      imgSrc: 'https://img.icons8.com/doodle/96/000000/hamburger.png',
    },
    {
      title: 'Games',
      path: '/game',
      imgSrc: 'https://img.icons8.com/doodle/80/000000/controller--v1.png',
    },
    {
      title: 'Social Media',
      path: '/social-media',
      imgSrc: 'https://img.icons8.com/doodle/96/000000/facebook-messenger.png',
    },
    {
      title: 'Sport',
      path: '/sport',
      imgSrc: 'https://img.icons8.com/doodle/96/000000/basketball--v1.png',
    },
    {
      title: 'Travel',
      path: '/travel',
      imgSrc: 'https://img.icons8.com/doodle/96/000000/beach-umbrella.png',
    },
    {
      title: 'Shopping',
      path: '/shopping',
      imgSrc: 'https://img.icons8.com/doodle/96/000000/shopping-cart--v1.png',
    },
  ];
  const handleClickMenu = (path: string) => {
    if (!isDesktopScreen) {
      setToggle(false);
    }
    if (path === pathname) return;
    setItemActive(path);
    navigate(path);
  };

  return (
    <>
      <div className="logo">
        <img
          src="https://img.icons8.com/doodle/480/000000/webtoon-logo.png"
          alt="Logo"
          height={50}
          width={50}
          className="logo-img"
        />

        <p className="logo-name">Webtoon</p>
        <img
          src="https://img.icons8.com/doodle/96/000000/close-pane.png"
          height={20}
          width={20}
          alt="Collapse"
          className="collapse"
          onClick={() => setToggle(!toggle)}
        />
      </div>
      <div className="menu">
        {menuList.map((item: IMenuListValues, index: number) => {
          return (
            <div
              className={clsx(
                'menu-item',
                itemActive === item.path && 'active-item',
              )}
              onClick={() => handleClickMenu(item.path)}
              key={index}
            >
              <img
                className="menu-item-img"
                src={item.imgSrc}
                alt={item.title}
                height={35}
                width={35}
              />
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
