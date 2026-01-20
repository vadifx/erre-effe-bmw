import Image from "next/image";

export default function VideoSection() {
  return (
    <div className="w-full mt-[50px]">
      <div className="w-full relative overflow-hidden md:h-[750px]">
        <Image
          src="https://bmw.scene7.com/is/image/BMW/F70_FiaF_3000x3000_new-1?wid=2560&hei=2560"
          alt="BMW Serie 1 M Sport Design"
          width={320}
          height={480}
          className="w-full h-full object-cover md:hidden"
          style={{ objectPosition: 'left' }}
          unoptimized
        />
        <Image
          src="https://bmw.scene7.com/is/image/BMW/F70_FiaF_3000x3000_new-1?wid=2560&hei=2560"
          alt="BMW Serie 1 M Sport Design"
          width={2560}
          height={2560}
          className="w-full h-full object-cover hidden md:block"
          style={{ objectPosition: 'left' }}
          unoptimized
        />
        
        {/* Overlay gradient per migliorare visibilità header */}
        <div 
          className="absolute top-0 left-0 right-0 h-[150px] pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.4), transparent)'
          }}
        />
        
        {/* Overlay gradient in basso con partenza netta - nascosto da XL */}
        <div 
          className="xl:hidden absolute bottom-0 left-0 right-0 h-[150px] pointer-events-none"
          style={{
            background: 'linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 10%, transparent 100%)'
          }}
        />
        
        {/* Overlay gradient da destra a sinistra - solo XL */}
        <div 
          className="hidden xl:block absolute top-0 bottom-0 right-0 w-[60%] pointer-events-none"
          style={{
            background: 'linear-gradient(to left, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0.6) 60%, transparent 100%)'
          }}
        />
        
        {/* Contenuto sovrapposto - solo XL */}
        <div className="hidden xl:flex absolute top-0 right-0 h-full w-[50%] items-center justify-end pr-[80px]">
          <div className="max-w-[600px]">
            <p 
              className="text-white mb-2"
              style={{
                fontSize: '14px',
                fontFamily: 'var(--font-bmw-regular), Arial, Helvetica, sans-serif',
                fontWeight: 400
              }}
            >
              LA BMW SERIE 1
            </p>
            
            <h2 
              className="text-white mb-3"
              style={{
                fontSize: '28px',
                fontFamily: 'var(--font-bmw-thin), Arial, Helvetica, sans-serif',
                fontWeight: 700
              }}
            >
              M SPORT DESIGN.
            </h2>
            
            <p 
              className="text-white mb-4"
              style={{
                fontSize: '15px',
                fontFamily: 'var(--font-bmw-regular), Arial, Helvetica, sans-serif',
                fontWeight: 400,
                lineHeight: '1.6'
              }}
            >
              All'insegna della libertà: la BMW Serie 1 M Sport Design è disponibile a partire da 35.750,00 €.
            </p>
            
            <p 
              className="text-white mb-6"
              style={{
                fontSize: '16px',
                fontFamily: 'var(--font-bmw-regular), Arial, Helvetica, sans-serif',
                fontWeight: 400,
                lineHeight: '1.6'
              }}
            >
              Scopri il suo imponente design! Dagli impressionanti paraurti M Sport ai cerchi sportivi in lega leggera da 18" Midnight Grey: tutto è un'affermazione di stile su strada.
            </p>
            
            <button 
              className="w-auto px-10 py-4 text-white rounded-lg"
              style={{
                backgroundColor: '#1c69d4',
                fontSize: '14px',
                fontFamily: 'var(--font-bmw-regular), Arial, Helvetica, sans-serif',
                fontWeight: 400
              }}
            >
              Configurazione & prezzi
            </button>
          </div>
        </div>
      </div>
      
      {/* Container nero con contenuto - nascosto da XL */}
      <div className="xl:hidden w-full bg-black px-[32px] py-8 mt-[-100px] md:mt-[-150px]">
        <p 
          className="text-white mb-2 z-10 relative"
          style={{
            fontSize: '14px',
            fontFamily: 'var(--font-bmw-regular), Arial, Helvetica, sans-serif',
            fontWeight: 400
          }}
        >
          LA BMW SERIE 1
        </p>
        
        <h2 
          className="text-white mb-6 md:mb-3 z-10 relative"
          style={{
            fontSize: '28px',
            fontFamily: 'var(--font-bmw-thin), Arial, Helvetica, sans-serif',
            fontWeight: 700
          }}
        >
          M SPORT DESIGN.
        </h2>
        
        <p 
          className="text-white mb-4 md:max-w-[660px] z-10 relative"
          style={{
            fontSize: '15px',
            fontFamily: 'var(--font-bmw-regular), Arial, Helvetica, sans-serif',
            fontWeight: 400,
            lineHeight: '1.6'
          }}
        >
          All'insegna della libertà: la BMW Serie 1 M Sport Design è disponibile a partire da 35.750,00 €.
        </p>
        
        <p 
          className="text-white mb-6 md:max-w-[650px]"
          style={{
            fontSize: '16px',
            fontFamily: 'var(--font-bmw-regular), Arial, Helvetica, sans-serif',
            fontWeight: 400,
            lineHeight: '1.6'
          }}
        >
          Scopri il suo imponente design! Dagli impressionanti paraurti M Sport ai cerchi sportivi in lega leggera da 18" Midnight Grey: tutto è un'affermazione di stile su strada.
        </p>
        
        <button 
          className="w-full md:w-auto md:px-10 py-4 text-white rounded-lg"
          style={{
            backgroundColor: '#1c69d4',
            fontSize: '14px',
            fontFamily: 'var(--font-bmw-regular), Arial, Helvetica, sans-serif',
            fontWeight: 400
          }}
        >
          Configurazione & prezzi
        </button>
      </div>
    </div>
  );
}
