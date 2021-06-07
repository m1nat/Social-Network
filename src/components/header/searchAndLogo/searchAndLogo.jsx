import s from './searchAndLogo.module.scss';
import Logo from './logo/logo';
import Search from './search/search'

const SearchAndLogo = () => {
    return(
        <div className={s.searchAndLogo}>
            <Logo />
            <Search /> 
        </div>
    )
}

export default SearchAndLogo;