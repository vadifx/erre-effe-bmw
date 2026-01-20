"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const videoSrc = "https://bmw.scene7.com/is/content/BMW/f70_ice_stage_dsk_sl-AVS.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch((error) => {
          console.log("Autoplay prevented:", error);
        });
      });

      return () => {
        hls.destroy();
      };
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      // Supporto nativo HLS (Safari)
      video.src = videoSrc;
      video.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <div className="w-full relative">
      <video
        ref={videoRef}
        className="w-full h-auto md:max-h-[600px] md:object-cover"
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
