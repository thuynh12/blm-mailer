import React from 'react';
import './App.css';
import { Container, Typography } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import EmailSelector from './components/EmailSelector';

function Mailing() {
  const space = "%20";
  const linebreak = "%0D";

  let plainText = "Dear"

  let message = "Hello,%20my%20name%20is%20[insert%20name].%20I%20am%20a%20resident%20of%20[city,%20state]%20and%20I%20am%20emailing%20today%20to%20demand%20accountability%20for%20the%20murder%20of%20[insert%20name].%0D%0DSincerely,%0D[insert%20name]%0D";
  // window.location.href = "mailto:test@example.com?subject=Test%20Email&body=" + message;
}

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
            {/* {Mailing()}  */}
          </div>
        </header>
      </div>
    </ThemeProvider>
  );
}


export default App;
