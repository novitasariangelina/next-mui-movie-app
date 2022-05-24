import MovieCard from "./MovieCard";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const PopularMovie = ({ movies }) => {
    return (
        <Container maxWidth="xl" sx={{ position: 'relative', ml: 3 }}>
            <Typography
                color='secondary'
                variant='h4'
                fontWeight="reguler" 
                sx={{ mt: 1, mb: 1 }}>
                    What's Popular
            </Typography>

            <Grid container>
                {movies.map(movie => (
                    <>
                        <Grid item key={movie.id} md={2}>
                            <MovieCard movie={movie} key={movie.id} />
                        </Grid></>
                ))}
            </Grid>
        </Container>
    );
};

export default PopularMovie;