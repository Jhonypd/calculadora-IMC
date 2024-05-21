/** @format */

// import Header from './components/Header';
// import CalculatorIMC from './components/IMC';
// import Form from './components/Form/Form'
// import Login from './components/Login/LoginControl'
// import { Heading1, Loader } from './components/Styles/styles'
// import Stack from '@mui/material/Stack'
// import Button from '@mui/material/Button'
import React, { useEffect, useState } from "react";
import { Box, Container, ThemeProvider } from "@mui/system";
import { themeOne, themeTwo } from "./theme";

function App() {
  const [count, setCount] = useState(11);
  const [countTwo, setCountTwo] = useState(23);

  useEffect(() => {
    let interval;
    if (count <= 80 && countTwo <= 200) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 5);
        setCountTwo((prevCountTwo) => prevCountTwo + 11);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [count, countTwo]);

  return (
    <React.Fragment>
      <Container
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          gap: "10px",
          marginTop: "2rem",
        }}
        maxWidth="sm">
        <ThemeProvider theme={themeOne}>
          <Box
            sx={{
              bgcolor: "background.paper",
              boxShadow: 1,
              borderRadius: 3,
              p: 2,
              minWidth: 250,
            }}>
            <Box
              sx={{
                color: "text.secondary",
              }}>
              compartilhamentos
            </Box>
            <Box
              sx={{
                color: "text.primary",
                fontSize: 32,
                fontWeight: "bold",
              }}>
              {count} k
            </Box>
            <Box
              sx={{
                color: "success.dark",
                display: "inline",
                fontWeight: "bold",
                mx: 0.5,
                fontSize: 14,
              }}>
              +15%
            </Box>
            <Box sx={{ color: "text.secondary", display: "inline", fontSize: 14 }}>
              vs. last week
            </Box>
          </Box>
        </ThemeProvider>

        <ThemeProvider theme={themeTwo}>
          <Box
            sx={{
              bgcolor: "background.paper",
              boxShadow: 1,
              borderRadius: 3,
              p: 2,
              minWidth: 250,
            }}>
            <Box
              sx={{
                color: "text.secondary",
              }}>
              Visualizações
            </Box>
            <Box
              sx={{
                color: "text.primary",
                fontSize: 32,
                fontWeight: "bold",
              }}>
              {countTwo} k
            </Box>
            <Box
              sx={{
                color: "success.dark",
                display: "inline",
                fontWeight: "bold",
                mx: 0.5,
                fontSize: 14,
              }}>
              +23%
            </Box>
            <Box sx={{ color: "text.secondary", display: "inline", fontSize: 14 }}>
              vs. last week
            </Box>
          </Box>
        </ThemeProvider>
      </Container>

      {/* <Header title="Título do APP" />
      <CalculatorIMC /> */}

      {/* <Form title="props" />
      
      <Heading1>
        Styled Component
        <span>Subtitle</span>
      </Heading1>
      
      <Loader />
      
      <Login name={'Marcelo'} />
      
      <Stack spacing={2} direction="row">
        <Button variant="text">Call to Action Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack> */}
    </React.Fragment>
  );
}

export default App;
