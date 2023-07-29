import React, { useRef } from 'react';
import img from "../../assests/icons/check-1.png"

const YouTubePlayer = ({ videoId }) => {
  const playerRef = useRef(null);

  const onPlayerReady = event => {
    event.target.playVideo();
  };

  const onPlayButtonClick = () => {
    if (window.YT && window.YT.Player) {
      const player = new window.YT.Player(playerRef.current, {
        videoId: videoId,
        events: {
          onReady: onPlayerReady,
        },
      });
    }
  };

  return (
    <div>
      <div onClick={onPlayButtonClick}>
        <img
          src={img}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div ref={playerRef}></div>
    </div>
  );
};

export default YouTubePlayer;
