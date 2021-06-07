import s from "./headerNavi.module.scss";
import Home from './home/home';
import Messege from './messege/messege';
import Music from './music/music';
import Notification from './notification/notification';
import Photo from './photo/photo';
import Profile from './profile/profile';
import Settings from './settings/settings';
import Video from './video/video';


const HeaderNavi = () => {
  return <div className={s.headerNavi}>
    <Home />
    <Messege />
    <Music />
    <Video />
    <Photo />
    <Profile />
    <Settings />
    <Notification />
  </div>;
};

export default HeaderNavi;
