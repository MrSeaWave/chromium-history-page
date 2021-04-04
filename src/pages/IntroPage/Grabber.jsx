import { GRABBER_BODY } from '@/constants';
import React from 'react';

import { useHover, useMousePosition, usePosition } from './utils';

const { useState, useEffect } = React;

// Preload images
Object.keys(GRABBER_BODY).forEach((key) => {
  // eslint-disable-next-line no-undef
  const img = new Image();
  img.src = GRABBER_BODY[key];
});

// 抢夺区域 (The hover trigger zone)
export const GrabZone = ({ cursorGrabbed, gameOver, onCursorGrabbed }) => {
  const [outerRef, outerHovered] = useHover();
  const [innerRef, innerHovered] = useHover();
  const [isExtended, setExtendedArm] = useState(false);

  let state = 'waiting';
  if (outerHovered) {
    state = 'stalking';
  }
  if (innerHovered) {
    state = 'grabbing';
  }
  if (cursorGrabbed) {
    state = 'grabbed';
  }
  if (gameOver) {
    state = 'shaka';
  }

  // If state is grabbing for a long time, they're being clever!
  useEffect(() => {
    let timer;
    if (state === 'grabbing') {
      timer = setTimeout(() => {
        // Not so clever now, are they?
        setExtendedArm(true);
        timer = null;
      }, 2000);
    }
    return () => {
      setExtendedArm(false);
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [state]);

  return (
    <div className='grab-zone' ref={outerRef}>
      <div className='grab-zone__debug'>
        <strong>Debug info:</strong>
        <p>Current state: {state}</p>
        <p>Extended arm: {isExtended ? 'Yes' : 'No'}</p>
      </div>
      <div className='grab-zone__danger' ref={innerRef}>
        <Grabber
          state={state}
          gameOver={gameOver}
          extended={isExtended}
          onCursorGrabbed={onCursorGrabbed}
        />
      </div>
    </div>
  );
};

// 抢夺者
const Grabber = ({ state, gameOver, extended, onCursorGrabbed }) => {
  const mousePos = useMousePosition();
  const [ref, position] = usePosition();
  const hasCursor = false;

  // Calculate rotation of armWrapper
  const x = position.left + position.width * 0.5;
  const y = position.top + position.height * 0.5;
  const angle = gameOver
    ? 0
    : Math.atan2(mousePos.x - x, -(mousePos.y - y)) * (180 / Math.PI);

  // Ensure value is within acceptable range (-75 to 75)
  const rotation = Math.min(Math.max(parseInt(angle), -79), 79);

  const grabberClass = `grabber grabber--${state} ${
    extended && 'grabber--extended'
  }`;
  const wrapperStyle = { transform: `rotate(${rotation}deg)` };

  const handImageSrc = GRABBER_BODY[state];

  return (
    <div className={grabberClass}>
      <div className='grabber__body'></div>
      <img className='grabber__face' src={GRABBER_BODY.head} />
      <div className='grabber__arm-wrapper' ref={ref} style={wrapperStyle}>
        <div className='grabber__arm'>
          <img
            className='grabber__hand'
            src={handImageSrc}
            onMouseEnter={onCursorGrabbed}
          />
        </div>
      </div>
    </div>
  );
};
