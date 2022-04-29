import SearchIcon from '@mui/icons-material/Search'

export default function Search() {
  const styles = {
    Container: { padding: '15px 40px' },
    searchInput: {
      background: 'transparent',
      outline: 'none',
      border: 'none',
      width: '100%',
      fontSize: '1.2rem',
    },
    SearchInputContainer: {
      padding: '10px',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      boxShadow: '0px 1px 1px rgba(0,0,0,0.5)',
      borderRadius: '5px',
    },
  }

  return (
    <div style={styles.Container}>
      <form action="">
        <div style={styles.SearchInputContainer}>
          <SearchIcon />
          <input
            type="text"
            style={styles.searchInput}
            placeholder="search project"
          />
        </div>
      </form>
    </div>
  )
}
