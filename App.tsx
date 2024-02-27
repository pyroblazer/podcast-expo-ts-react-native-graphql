import 'react-native-gesture-handler';
import React from 'react';
import { UtilityThemeProvider } from 'react-native-design-utility';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/react-hooks';

import { theme } from './src/constants/theme';
import MainStackNavigator from './src/navigators/MainStackNavigator';
import { client } from './src/graphql/client';

import trackPlayerServices, { trackPlayerService } from './src/services/trackPlayerServices';
import TrackPlayer from '@5stones/react-native-track-player';

const track = {
  id: '1',
  url:
    'https://media.transistor.fm/39765eda/0e219b35.mp3',
  title: '141: Jason Fried - Running the Tailwind Business on Basecamp',
  artist: 'Full Stack Radio',
};

const App = () => {
  React.useEffect(() => {
    (async () => {
      await TrackPlayer.setupPlayer().then(() => {
        console.log('player is setup');
      });

      TrackPlayer.registerPlaybackService(() =>
        trackPlayerService
      );

      await TrackPlayer.add([track]);

      await TrackPlayer.play();

      setTimeout(() => {
        TrackPlayer.stop();
      }, 2000);
    })();
  }, []);

  return (
    <UtilityThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <MainStackNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </UtilityThemeProvider>
  );
};

export default App;
