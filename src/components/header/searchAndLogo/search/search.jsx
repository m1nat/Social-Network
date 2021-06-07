import s from './search.module.scss';

const Search = () => {
    return(
        <div className={s.search}>
            <form className={s.search_form}>
                <input type='text' placeholder='Search...' className={s.inp_search} />
                <button className={s.btn_search}></button>
            </form>
        </div>
    )
}

export default Search;