import s from "./header.module.scss";
import SearchAndLogo from './searchAndLogo/searchAndLogo';
import HeaderNavi from './headerNavi/headerNavi';
import Personality from './personality/personality'

const Header = () => {
  return <div className={s.header}>
      <SearchAndLogo />
      <HeaderNavi />
      <Personality />
  </div>;
};

export default Header;
