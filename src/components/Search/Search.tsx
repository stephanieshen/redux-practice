import styles from './Search.module.scss';

const Search = () => {
    return (
        <div className={styles.search}>
            <input type="text" placeholder="Search Project" className={styles.searchInput} />
        </div>
    )
}

export default Search;