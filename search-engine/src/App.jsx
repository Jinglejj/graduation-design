import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Search from "./components/Search";
import Box from '@material-ui/core/Box';
import AnimeTest from './components/AnimeTest'
import AudioSketch from "./components/AudioSketch";
export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <Box 
          height="72vh"
          display="flex"
          justifyContent="center"
          alignItems="center"
          p={1}>
          <AnimeTest/>
          <Search />
          <AudioSketch/>
        </Box>
      </Container>
    </React.Fragment>
  );
}