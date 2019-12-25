import { reducer as formReducer } from 'redux-form';
import App from './app/reducer';
import Header from './header/reducer';


export default {
  App,
  Header,
  form: formReducer,
};
