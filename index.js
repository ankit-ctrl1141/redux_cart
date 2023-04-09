/**
 * @format
 */

import {AppRegistry} from 'react-native';

import { Provider } from 'react-redux';
import { store } from './components/redux/store';

import AppNew from './AppNew';

import {name as appName} from './app.json';


const ReduxWrapper = () => (
    <Provider store={ store }>
          <AppNew/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => ReduxWrapper);
