import Layout from '../components/Layout'
import axios from 'axios';
import { server } from '../config';
import PopularMovie from '../components/PopularMovie';
import Box from '@mui/material/Box';
import withUnprotected from '../hoc/withUnprotected';

const Home = ({ movies }) => {
  return (
      <div>
        <Box
          sx={{
            mx: 'auto',
            width: '100%'
          }}
        >
          <PopularMovie movies={movies.results} />
        </Box>
      </div>
  )
}

export default Home

export async function getStaticProps() {
  const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const movies = res.data;
  // console.log(movies);

  return {
    props: { movies }
  }
}
