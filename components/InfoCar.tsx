export default function InfoCar() {
  return (
    <>
      <div className="w-full bg-[#000000] h-auto px-[48px] py-5 md:-mt-[250px]">
        <div className="flex flex-col items-center text-center text-white">
          {/* THE */}
          <p 
            className="text-base mb-2 z-10 relative"
            style={{
              fontFamily: 'var(--font-bmw-regular), Arial, Helvetica, sans-serif',
              fontWeight: 400,
              letterSpacing: '0.15em'
            }}
          >
            THE
          </p>
          
          {/* Grande 1 */}
          <h1 
            className="text-[120px] md:text-[150px] leading-none mb-2 z-10 relative"
            style={{
              fontFamily: 'var(--font-bmw-regular), Arial, Helvetica, sans-serif',
              fontWeight: 100
            }}
          >
            1
          </h1>
          
          {/* BMW SERIE 1. */}
          <p 
            className="text-xl mb-4 z-10 relativeo"
            style={{
              fontFamily: 'var(--font-bmw-regular), Arial, Helvetica, sans-serif',
              fontWeight: 400
            }}
          >
            BMW SERIE 1.
          </p>
          
          {/* Paragrafo */}
          <p 
            className="text-lg mb-6 max-w-md"
            style={{
              fontFamily: 'var(--font-bmw-regular), Arial, Helvetica, sans-serif',
              fontWeight: 400
            }}
          >
            Scopri BMW Serie 1 con la promozione<br />ErreEffe di Gennaio
          </p>
          
          {/* Bottoni */}
          <div className="flex flex-col md:flex-row md:justify-center gap-4 w-full max-w-xs md:max-w-md">
            {/* Test Drive Button */}
            <button 
              className="w-full md:w-auto md:px-8 py-4 text-white transition-colors"
              style={{
                backgroundColor: '#1c69d4',
                borderRadius: '5px',
                fontSize: '14px',
                fontFamily: 'var(--font-bmw-regular), Arial, Helvetica, sans-serif',
                fontWeight: 400
              }}
            >
              Test Drive
            </button>
            
            {/* Richiedi un'offerta Button */}
            <button 
              className="w-full md:w-auto md:px-8 py-4 text-white border border-white transition-colors"
              style={{
                backgroundColor: 'transparent',
                borderRadius: '5px',
                fontSize: '14px',
                fontFamily: 'var(--font-bmw-regular), Arial, Helvetica, sans-serif',
                fontWeight: 400
              }}
            >
              Richiedi un'offerta
            </button>
          </div>
        </div>
      </div>
      
      {/* Testo informativo */}
      <div className="w-full px-[24px] md:px-[32px] py-6">
        <div className="flex flex-col text-left xl:text-center" style={{ color: '#262626' }}>
          <p 
            className="text-xs leading-relaxed"
            style={{
              fontSize: '12px',
              fontFamily: 'var(--font-bmw-thin), Arial, Helvetica, sans-serif',
              fontWeight: 100
            }}
          >
            Offerta valida fino al 31.03.2026 presso le Concessionarie BMW aderenti
          </p>
          <p 
            className="text-xs leading-relaxed mt-4"
            style={{
              fontSize: '12px',
              fontFamily: 'var(--font-bmw-thin), Arial, Helvetica, sans-serif',
              fontWeight: 100
            }}
          >
            BMW 120: Consumo di carburante, in ciclo misto WLTP in l/100 km: 5,5-5,3; emissioni CO2, in ciclo misto WLTP in g/km: 124-121
          </p>
        </div>
      </div>
    </>
  );
}
