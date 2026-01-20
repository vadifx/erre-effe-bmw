"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function Hero() {
  const videoRefMobile = useRef<HTMLVideoElement>(null);
  const videoRefDesktop = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Video Mobile
    const videoMobile = videoRefMobile.current;
    if (videoMobile) {
      const videoSrcMobile = "https://bmw.scene7.com/is/content/BMW/f70_ice_stage_mob_sl-AVS.m3u8";

      if (Hls.isSupported()) {
        const hlsMobile = new Hls();
        hlsMobile.loadSource(videoSrcMobile);
        hlsMobile.attachMedia(videoMobile);
        
        hlsMobile.on(Hls.Events.MANIFEST_PARSED, () => {
          videoMobile.play().catch((error) => {
            console.log("Autoplay prevented:", error);
          });
        });

        // Cleanup per video mobile
        return () => {
          hlsMobile.destroy();
        };
      } else if (videoMobile.canPlayType("application/vnd.apple.mpegurl")) {
        videoMobile.src = videoSrcMobile;
        videoMobile.play().catch((error) => {
          console.log("Autoplay prevented:", error);
        });
      }
    }

    // Video Desktop
    const videoDesktop = videoRefDesktop.current;
    if (videoDesktop) {
      const videoSrcDesktop = "https://bmw.scene7.com/is/content/BMW/f70_ice_stage_dsk_sl-AVS.m3u8";

      if (Hls.isSupported()) {
        const hlsDesktop = new Hls();
        hlsDesktop.loadSource(videoSrcDesktop);
        hlsDesktop.attachMedia(videoDesktop);
        
        hlsDesktop.on(Hls.Events.MANIFEST_PARSED, () => {
          videoDesktop.play().catch((error) => {
            console.log("Autoplay prevented:", error);
          });
        });

        // Cleanup per video desktop
        return () => {
          hlsDesktop.destroy();
        };
      } else if (videoDesktop.canPlayType("application/vnd.apple.mpegurl")) {
        videoDesktop.src = videoSrcDesktop;
        videoDesktop.play().catch((error) => {
          console.log("Autoplay prevented:", error);
        });
      }
    }
  }, []);

  return (
    <div className="w-full relative">
      {/* Video Mobile - visibile solo sotto MD */}
      <video
        ref={videoRefMobile}
        className="w-full h-auto md:hidden"
        playsInline
        muted
        loop
        autoPlay
      />
      
      {/* Video Desktop - visibile solo da MD in su */}
      <video
        ref={videoRefDesktop}
        className="hidden md:block w-full h-auto md:max-h-[600px] md:object-cover"
        playsInline
        muted
        loop
        autoPlay
      />
      {/* Overlay gradient per migliorare visibilità header - Mobile */}
      <div 
        className="md:hidden absolute top-0 left-0 right-0 h-[150px] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), transparent)'
        }}
      />
      {/* Overlay gradient più scuro al breakpoint MD */}
      <div 
        className="hidden md:block absolute top-0 left-0 right-0 h-[200px] pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), transparent)'
        }}
      />
      
      {/* Overlay gradient in basso con partenza netta */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[150px] pointer-events-none"
        style={{
          background: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 10%, transparent 100%)'
        }}
      />
    </div>
  );
}
