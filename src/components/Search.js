import { Box, IconButton } from '@mui/material/';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
const Search = ({ icon }) => (
  <Box sx={{
    display: 'flex',
  }}>
    <Box placeholder="Search" className='search' component='input' sx={{
      height: "40px",
      flexGrow: "1",
      display: "flex",
      maxWidth: "500px",
      minWidth: "100px",
      pl: "1em",
      border: 'none',
      borderRadius: '10px 0 0 10px',
      bgcolor: 'red.navsearchbg',
      color: 'white.main',
      justifySelf: 'end',
      '::placeholder': {
        color: 'white.main',
        fontSize: '1.2rem',
      },
      ':focus': {
        outline: 'none',
        border: 'none',
        bgcolor: 'red.navsearchbg',
      }
    }} />
    <Box placeholder="Search" className='search' component='div' sx={{
      height: "40px",
      flexGrow: "1",
      display: "flex",
      pl: "1em",
      border: 'none',
      borderRadius: '0px 10px 10px 0px',
      bgcolor: 'red.navsearchbg',
      justifySelf: 'end',
    }}>
      <IconButton aria-label="search">
        <SearchRoundedIcon color='white' />
      </IconButton>
    </Box>

  </Box>
)

export default Search