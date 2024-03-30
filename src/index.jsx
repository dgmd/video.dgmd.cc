import React from 'react';
import {
  Video
} from './Video.jsx';
import {
  createRoot
} from 'react-dom/client';

const container = document.getElementById( 'app' );
const root = createRoot( container );
root.render(
  <Video
    autoplay={true}
    url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    onReadyToPlay={() => console.log( 'Ready to play!' )}
    onTimeUpdate={( currentTime ) => console.log( 'Current time:', currentTime )}
  />
);