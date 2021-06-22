import styles from './Search.module.scss';

const Search = () => {
    return (
        <div className={styles.Search}>
            <input type="text" placeholder="Search Project" className={styles.SearchInput} />
        </div>
    )
}

export default Search;