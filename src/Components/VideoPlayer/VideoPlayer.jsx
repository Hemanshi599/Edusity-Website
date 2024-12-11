import React, { useRef } from 'react';
import './VideoPlayer.css';
import video from '../../assets/college-video - Copy.mp4'; // Corrected the path

const VideoPlayer = ({playState, setPlayState}) => {

    // video is hide when we click in empty space
    const player = useRef(null);

    const closePlayer = (e) => {
          if(e.target === player.current){
            setPlayState(false);
          }
    }

  return (
    <div className={`video-player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  );
}

export default VideoPlayer;