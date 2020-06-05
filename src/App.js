import React from 'react';
import './App.css';
import { Container, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import EmailSelector from './components/EmailSelector';



let customTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#ffffff'
    },
    secondary: {
      main: '#FBEE1F' 
    }
  }
  
})

customTheme = responsiveFontSizes(customTheme);

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <div className="App">
        <header className="App-header">
          <div className="App-padding">
            {/* // TODO Create Splashscreen  */}
            <Container>
              <Typography variant="h1">
                <strong>
                  NO JUSTICE. NO PEACE.
                </strong>
              </Typography>
              <hr />
              <Typography variant="h1">
                <strong>
                  BLACK LIVES MATTER
                </strong>
              </Typography>
            </Container>
            <EmailSelector />
            {/* <ParseMessage /> */}
          </div>
        </header>
      </div>
    </ThemeProvider>
  );
}


export default App;
