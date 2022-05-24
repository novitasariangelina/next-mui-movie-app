import axios from "axios";
import { server } from "../../../config";
import Image from "next/image";
import Meta from "../../../components/Meta";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";


const Movie = ({ movie }) => {
  console.log("movie[id]: "+ movie.title);
  return (
    <div>
      <Meta title={movie.title} />
      <Container maxWidth="xl" sx={{ position: 'relative' }}>
        <div>
          <Box
            sx={{
              height: '600px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              '&::after': {
                position: 'absolute',
                content: '""',
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                background: 'rgba(0,0,0,0.4)',
                backgroundImage: `linear-gradient(
                    to bottom,
                    rgba(0,0,0,0.6) 0,
                    rgba(0,0,0,0) 60%,
                    rgba(0,0,0,0.8) 100%,
                  )`
              }
            }}
          >
            <Image src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} objectFit="cover" layout="fill" width={800} height={400} />
            <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 500 }}>
              <Grid maxWidth="450px">
              <Typography
                variant="h4"
                fontWeight="bold"
                color="common.white"
              >
                {movie.title}
              </Typography>
              <Typography
                variant="h7"
                fontWeight="light"
                color="common.white">
                <span>{movie.release_date.substring(0, 4)}</span> • Genres: <span>{movie.genres.map(genre => genre.name).join(', ')}</span>
              </Typography>
              <Typography
                variant="h7"
                fontWeight="light"
                color="common.white">
              </Typography>
              <Typography
                variant="h6"
                fontWeight="reguler"
                color="common.white">
                {movie.overview}
              </Typography>
              </Grid>
            </Container>
          </Box>
        </div>
      </Container>
    </div>
  )
};

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await axios(`${server}/${id}?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const movie = res.data;
  console.log(movie);

  return {
    props: { movie }
  }
}

export async function getStaticPaths(params) {
  const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const movies = res.data.results;
  console.log(movies);

  const ids = movies.map(movie => movie.id);
  const paths = ids.map(id => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false
  }
}

export default Movie;