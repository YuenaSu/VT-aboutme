import React from 'react';
import './aside.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppStateType } from '../../store/rootReducer';
import { routes } from '../../common/constants/routes';
import { Switch } from '../../common/ui/Switch/Switch';
import { selectTheme } from '../../store/theme/selectors';

export const Aside = (): React.ReactElement => {
  const { firstName, lastName } = useSelector((state: AppStateType) => state.profile);
  const { darkMode } = useSelector(selectTheme);
  return (
    <aside>
      <Link to={routes.profile}>
        <div className={`main__profile ${darkMode && 'dark-background'}`} id="avatarface">
          <div className="main__avatar">
            {/* <img className="main__back" src={`https://marketplace.canva.com/EAEthkBVLfQ/1/0/1600w/canva-blush-wave-desktop-wallpaper-drvq3zaYl2E.jpg`}></img> */}
            <img className="main__face" src={`https://media.licdn.com/dms/image/C4E03AQG4K4d1gqBlOw/profile-displayphoto-shrink_800_800/0/1613184750718?e=2147483647&v=beta&t=1QYHFebuGoIKslnVIg4Xt-flP_tcE1HA82HRknOXL6k`} alt="profile-face" id="turn" />
          </div>
          <h3 className="main__name">{`${firstName} ${lastName}`}</h3>
        </div>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to={routes.main} className="main__button">
              <p>My Library</p>
            </Link>
          </li>
        </ul>
      </nav>
      <Switch />
    </aside>
  );
};
