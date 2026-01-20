import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function EmotionalPhrase() {
  return (
    <div className="w-full px-[24px] md:px-[32px]">
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-[1300px] 2xl:max-w-[1650px] mx-auto">
        {/* Immagine */}
        <div className="w-full md:w-1/2 2xl:w-[60%]">
          {/* Mobile */}
          <div className="w-full md:hidden" style={{ aspectRatio: '270/180' }}>
            <Image
              src="https://bmw.scene7.com/is/image/BMW/f70-fast-start-2026-fiaf?wid=2048&hei=2560"
              alt="BMW Fast Start"
              width={270}
              height={180}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
          {/* Desktop - Container verticale */}
          <div className="hidden md:block w-full h-[500px] 2xl:h-[650px] relative overflow-hidden">
            <Image
              src="https://bmw.scene7.com/is/image/BMW/f70-fast-start-2026-fiaf?wid=2048&hei=2560"
              alt="BMW Fast Start"
              width={2048}
              height={2560}
              className="w-full h-full object-cover"
              style={{ objectPosition: 'left center' }}
              unoptimized
            />
          </div>
        </div>
        
        {/* Contenuto testo */}
        <div className="w-full md:w-1/2 2xl:w-[40%] flex flex-col justify-center">
          <h1 
            className="mt-6 md:mt-0"
            style={{
              fontSize: '23px',
              fontFamily: 'var(--font-bmw-regular), Arial, Helvetica, sans-serif',
              fontWeight: 400
            }}
          >
            Il viaggio con la tua prima<br />BMW inizia qui – Serie 1.
          </h1>
          
          <p 
            className="mt-6"
            style={{
              fontSize: '16px',
              fontFamily: 'var(--font-bmw-thin), Arial, Helvetica, sans-serif',
              fontWeight: 100
            }}
          >
            La tua BMW Serie 1 ti aspetta. Clicca, seleziona, guida. BMW Serie 1 è l'espressione perfetta del tuo stile di vita: compatta, sempre connessa e ricca di carattere.
          </p>
          
          <p 
            className="mt-4"
            style={{
              fontSize: '16px',
              fontFamily: 'var(--font-bmw-thin), Arial, Helvetica, sans-serif',
              fontWeight: 100
            }}
          >
            Con il suo design audace, il Curved Display, la griglia a doppio rene illuminata e funzioni intelligenti, è progettata per accompagnarti in ogni tua avventura quotidiana. Ora anche con con il pacchetto M Sport in omaggio.
          </p>
          
          <a 
            href="#"
            className="mt-6 inline-flex items-center gap-2"
            style={{
              fontSize: '14px',
              fontFamily: 'var(--font-bmw-regular), Arial, Helvetica, sans-serif',
              fontWeight: 400
            }}
          >
            Ricevi un'offerta personalizzata
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
