import Home from './Home';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/index';

function App() {
  return (
    <Provider store={ store }>
      <PersistGate loading={ null } persistor={ persistor  }>
        <Home/>
      </PersistGate>      
    </Provider>
  );
}

export default App;
