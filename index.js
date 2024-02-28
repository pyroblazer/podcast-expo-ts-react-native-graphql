import registerRootComponent from 'expo/build/launch/registerRootComponent';
import TrackPlayer from '@5stones/react-native-track-player';
import { trackPlayerServices } from './src/services/trackPlayerServices';

import App from './App';

registerRootComponent(App);
TrackPlayer.registerPlaybackService(() =>
  trackPlayerServices
);