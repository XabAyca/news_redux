import React from 'react';
import { Provider } from 'react-redux';
import News from './News';
import { store } from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <h1>CONFINEWS</h1>
        <p>En ces temps de confinement, il est bon de pouvoir s'informer efficacement sur un ensemble de sources disponibles gratuitement. Grâce à Confinews, vous pourrez choisir la source que vous préférez afin d'avoir les dernières informations fiables et vérifiées.</p>
        <News/>
      </div>
    </Provider>
  );
};

export default App;