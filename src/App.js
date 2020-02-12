import React  from 'react';
import { Provider } from 'react-redux';
import { store, history } from './redux/store';
import Routes from './router';
import 'antd/dist/antd.css';

const App = () => {
    return (
      <Provider store={store}>
        <Routes history={history} />
      </Provider>
    );
}

export default App;
