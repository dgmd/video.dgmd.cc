import React, {
  useCallback,
  useRef
} from 'react';

export const Video = ({ 
  url,
  autoplay,
  onReadyToPlay,
  onTimeUpdate
}) => {

  const videoRef = useRef(null);

  const handleReadyToPlay = useCallback( () => {
    if (onReadyToPlay) {
      onReadyToPlay();
    }
    if (autoplay && videoRef.current) {
      videoRef.current.play();
    }
  }, [
    autoplay,
    onReadyToPlay
  ] );

  const handleTimeUpdate = useCallback( () => {
    if (onTimeUpdate && videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      onTimeUpdate(currentTime);
    }
  }, [
    onTimeUpdate
  ] );

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%'
      }}
    >
      <video
        ref={videoRef}
        style={{
          maxWidth: '100%',
          maxHeight: '100%'
        }}
        onLoadedData={handleReadyToPlay}
        onTimeUpdate={handleTimeUpdate}
      >
        <source
          src={url}
          type={lookupVideoType(url)}
        />
      </video>
    </div>
  );
};

const lookupVideoType = (url) => {
  const ext = url.split('.').pop();
  switch (ext) {
    case 'mp4': {
      return 'video/mp4';
    }
    case 'webm': {
      return 'video/webm';
    }
    case 'ogg': {
      return 'video/ogg';
    }
    default: {
      return 'video/mp4';
    }
  }
};


