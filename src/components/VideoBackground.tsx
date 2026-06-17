import React, { useRef, useEffect } from 'react';

export default function VideoBackground() {
  const refA = useRef<HTMLVideoElement>(null);
  const refB = useRef<HTMLVideoElement>(null);
  
  const activeVideoIdx = useRef<number>(0);
  const isSwapping = useRef<boolean>(false);
  const frameRef = useRef<number>(0);

  const videoUrl = "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260329_050842_be71947f-f16e-4a14-810c-06e83d23ddb5.mp4";

  useEffect(() => {
    const vidA = refA.current;
    const vidB = refB.current;

    if (!vidA || !vidB) return;

    // Initial setup
    vidA.style.opacity = '1';
    vidA.style.zIndex = '1';
    vidB.style.opacity = '0';
    vidB.style.zIndex = '2';

    // Start video A immediately, pause B
    Promise.all([vidA.play(), vidB.play()]).then(() => {
      vidB.pause();
      vidB.currentTime = 0;
    }).catch(e => console.log("AutoPlay prevented: ", e));

    const checkTime = () => {
      const vidActive = activeVideoIdx.current === 0 ? vidA : vidB;
      const vidStandby = activeVideoIdx.current === 0 ? vidB : vidA;

      if (vidActive.duration && (vidActive.duration - vidActive.currentTime <= 0.3) && !isSwapping.current) {
        isSwapping.current = true;
        
        vidStandby.style.zIndex = '2';
        vidActive.style.zIndex = '1';
        
        vidStandby.currentTime = 0;
        vidStandby.play().catch(e => console.log("Play failed: ", e));
        
        vidStandby.style.opacity = '1';

        setTimeout(() => {
          vidActive.pause();
          vidActive.currentTime = 0;
          vidActive.style.opacity = '0';
          activeVideoIdx.current = activeVideoIdx.current === 0 ? 1 : 0;
          isSwapping.current = false;
        }, 300);
      }

      frameRef.current = requestAnimationFrame(checkTime);
    };

    frameRef.current = requestAnimationFrame(checkTime);

    return () => {
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-[-1] bg-black pointer-events-none select-none left-1/2 -translate-x-1/2 w-[115vw] h-[115vh]"
      id="video-background-container"
    >
      <video
        ref={refA}
        src={videoUrl}
        muted
        playsInline={true}
        loop={true}
        disablePictureInPicture
        autoPlay
        className="absolute top-0 left-0 w-full h-full object-cover object-top"
        style={{ backgroundColor: 'black', transition: 'opacity 0.3s linear' }}
      />
      <video
        ref={refB}
        src={videoUrl}
        muted
        playsInline={true}
        loop={true}
        disablePictureInPicture
        autoPlay
        className="absolute top-0 left-0 w-full h-full object-cover object-top"
        style={{ backgroundColor: 'black', transition: 'opacity 0.3s linear' }}
      />
    </div>
  );
}
