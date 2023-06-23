import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomeScreen } from '../pages';
import { MantineProvider } from '@mantine/core';

const App = () => {
  return (
    <MantineProvider withNormalizeCSS withGlobalStyles>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  );
};

export default App;
