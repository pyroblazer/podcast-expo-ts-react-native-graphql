import TrackPlayer, { Event } from '@5stones/react-native-track-player';

export const trackPlayerService = async function() {
  TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());

  TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());

  TrackPlayer.addEventListener(Event.RemoteStop, () => TrackPlayer.stop());

  TrackPlayer.addEventListener(Event.PlaybackActiveTrackChanged, () => {});

  TrackPlayer.addEventListener(Event.PlaybackState, (state) => {
    console.log('Event.PlaybackState', state);
  });
}