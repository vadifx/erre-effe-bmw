"use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function Details() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const videoSrc = "https://bmw.scene7.com/is/content/BMW/f70_ice_exterior_black-roof_shfv-AVS.m3u8";

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
    <div className="w-full">
      <div className="flex flex-col xl:flex-row xl:px-[32px] xl:gap-12 xl:max-w-[1300px] 2xl:max-w-[1650px] xl:mx-auto">
        {/* Video Section */}
        <div className="w-full xl:w-1/2 2xl:w-[60%] relative px-[24px] lg:px-[32px] xl:px-0 md:max-h-[600px] xl:max-h-[500px] 2xl:max-h-[650px] md:overflow-hidden">
          <video
            ref={videoRef}
            className="w-full h-auto md:h-full md:object-cover"
            playsInline
            muted
            loop
            autoPlay
          />
        </div>
        
        {/* Testo Section */}
        <div className="w-full xl:w-1/2 2xl:w-[40%] bg-[#f2f2f2] px-[24px] md:px-[32px] xl:px-0 py-12 xl:flex xl:flex-col xl:justify-center">
          <div className="flex flex-col">
            <h2 
              className="mb-6"
              style={{
                fontSize: '28px',
                color: '#262626',
                fontFamily: 'var(--font-bmw-regular), Arial, Helvetica, sans-serif',
                fontWeight: 400,
                textTransform: 'uppercase',
                lineHeight: '1.2'
              }}
            >
              <span className="md:hidden">
                ATTENZIONE<br />
                AI DETTAGLI
              </span>
              <span className="hidden md:inline">
                ATTENZIONE AI DETTAGLI
              </span>
            </h2>
            
            <p 
              className="lg:max-w-[70%] xl:max-w-none"
              style={{
                fontSize: '16px',
                color: '#262626',
                fontFamily: 'var(--font-bmw-thin), Arial, Helvetica, sans-serif',
                fontWeight: 100,
                lineHeight: '1.6'
              }}
            >
              In Erre Effe ci prendiamo cura di ogni singolo dettaglio della tua BMW. Dalla scelta del colore alle finiture, ogni elemento è studiato per offrirti un'esperienza di guida unica e personalizzata, riflettendo il tuo stile e la tua personalità.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
