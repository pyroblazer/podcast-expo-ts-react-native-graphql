import registerRootComponent from 'expo/build/launch/registerRootComponent';
import TrackPlayer from '@5stones/react-native-track-player';

import App from './App';

registerRootComponent(App);
TrackPlayer.registerPlaybackService(() =>
  require('./src/services/trackPlayerServices'),
);