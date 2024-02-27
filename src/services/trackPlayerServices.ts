import TrackPlayer, { Event } from '@5stones/react-native-track-player';

export const trackPlayerServices = async function() {
  TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());

  TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());

  TrackPlayer.addEventListener(Event.RemoteStop, () => TrackPlayer.stop());

  TrackPlayer.addEventListener(Event.PlaybackActiveTrackChanged, () => {});

  TrackPlayer.addEventListener(Event.PlaybackState, (state) => {
    console.log('Event.PlaybackState', state);
  });

  TrackPlayer.addEventListener(
    Event.RemoteJumpForward,
    async ({interval}: {interval: number}) => {
      const position = await TrackPlayer.getPosition();
      await TrackPlayer.seekTo(position + interval);
    },
  );

  TrackPlayer.addEventListener(
    Event.RemoteJumpBackward,
    async ({interval}: {interval: number}) => {
      const position = await TrackPlayer.getPosition();
      await TrackPlayer.seekTo(position - interval);
    },
  );
};