/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './src/App';
import PushNotification from 'react-native-push-notification';
import {name as appName} from './app.json';
// Configurar a biblioteca de notificações
    PushNotification.configure({
    onNotification: function(notification) {
      console.log('NOTIFICATION:', notification);
    },
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
    requestPermissions: true,
  });
AppRegistry.registerComponent(appName, () => App);
