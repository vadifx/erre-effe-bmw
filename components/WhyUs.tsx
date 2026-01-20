export default function WhyUs() {
  return (
    <div className="w-full bg-[#f2f2f2] px-[24px] md:px-[32px] py-12">
      <div className="flex flex-col items-center text-center">
        {/* Heading */}
        <p 
          className="mb-4 text-uppercase"
          style={{
            fontSize: '12px',
            color: '#262626',
            fontFamily: 'var(--font-bmw-thin), Arial, Helvetica, sans-serif',
            fontWeight: 100,
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}
        >
          PERCHè NOI?
        </p>
        
        {/* Titolo principale */}
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
            ERRE EFFE<br />
            NASCE CON UN<br />
            OBIETTIVO
          </span>
          <span className="hidden md:inline lg:hidden">
            ERRE EFFE NASCE<br />
            CON UN OBIETTIVO
          </span>
          <span className="hidden lg:inline">
            ERRE EFFE NASCE CON UN OBIETTIVO
          </span>
        </h2>
        
        {/* Testo descrittivo */}
        <p 
          className="max-w-md lg:max-w-[600px]"
          style={{
            fontSize: '16px',
            color: '#262626',
            fontFamily: 'var(--font-bmw-thin), Arial, Helvetica, sans-serif',
            fontWeight: 100,
            lineHeight: '1.6'
          }}
        >
          Accompagnare il cliente a esaudire il suo desiderio. seguendolo nella sua scelta cercando di guidarlo alla sua configurazione ideale. Garanzia sulla qualità e fiducia nel concessionario.
        </p>
      </div>
    </div>
  );
}
