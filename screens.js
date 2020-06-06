import {Navigation} from 'react-native-navigation';

export function registerScreens() {
  Navigation.registerComponent('Home', () => require('./Screens/Home').default);
  Navigation.registerComponent('Init', (sc) => require('./Screens/Init').default);
  Navigation.registerComponent('SignIn', () => require('./Screens/SignIn').default);
  Navigation.registerComponent('SignUp', () => require('./Screens/SignUp').default);
  Navigation.registerComponent('Wallet', () => require('./Screens/Wallet').default);
}