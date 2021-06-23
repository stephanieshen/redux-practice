import Layout from './components/Layout/Layout';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const App = () => {

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      secondary: {
        main: '#48A09B',
      }
    },
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Layout></Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
