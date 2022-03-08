import './index.scss';

import clsx from 'clsx';
import {IToggleThemeProps} from 'components/themeToggle/index.d';
import React from 'react';
const ThemeToggle = ({theme, setTheme}: IToggleThemeProps) => {
  return (
    <div onClick={setTheme} className={clsx('toggle-theme')}>
      <img
        src={
          theme === 'dark'
            ? 'https://img.icons8.com/color/96/000000/night.png'
            : 'https://img.icons8.com/color/96/000000/morning.png'
        }
        alt="Toggle"
        height={50}
        width={50}
      />
    </div>
  );
};

export default ThemeToggle;
