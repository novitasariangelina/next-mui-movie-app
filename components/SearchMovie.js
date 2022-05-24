import React from 'react'
import MovieCard from './MovieCard'

const SearchMovie = (props) => {
  return (
    <Container maxWidth="xl" sx={{ position: 'relative', ml: 3 }}>
      <Typography
        color='secondary'
        variant='h4'
        fontWeight="reguler"
        sx={{ mt: 1, mb: 1 }}>
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
  )
}

export default SearchMovie