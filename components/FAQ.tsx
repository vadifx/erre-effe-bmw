"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Dove si trova la concessionaria Erre Effe?",
      answer: "Erre Effe è presente con diverse sedi in tutta Italia. Contattaci per trovare la sede più vicina a te e scoprire i nostri servizi dedicati."
    },
    {
      question: "Quali servizi offre Erre Effe?",
      answer: "Erre Effe offre vendita di auto nuove e usate BMW, assistenza post-vendita, manutenzione certificata, finanziamenti personalizzati e configurazione su misura del tuo veicolo."
    },
    {
      question: "Posso prenotare un test drive con Erre Effe?",
      answer: "Certamente! Puoi prenotare un test drive gratuito direttamente online o contattando una delle nostre sedi. I nostri esperti saranno lieti di farti provare la BMW dei tuoi sogni."
    }
  ];

  return (
    <div className="w-full bg-[#f2f2f2] px-[24px] md:px-[32px] xl:px-0 py-12">
      <div className="flex flex-col xl:max-w-[1300px] xl:mx-auto">
        {/* Titolo */}
        <h2 
          className="mb-8 text-center md:text-left xl:text-center"
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
            DOMANDE<br />
            FREQUENTI SU<br />
            ERRE EFFE.
          </span>
          <span className="hidden md:inline 2xl:hidden">
            DOMANDE FREQUENTI<br />
            SU ERRE EFFE.
          </span>
          <span className="hidden 2xl:inline">
            DOMANDE FREQUENTI SU ERRE EFFE.
          </span>
        </h2>

        {/* FAQ Items */}
        <div className="flex flex-col xl:w-[900px] xl:mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border-b py-6"
              style={{ borderColor: 'rgba(102, 102, 102, 0.3)' }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <span
                  style={{
                    fontSize: '20px',
                    color: '#262626',
                    fontFamily: 'var(--font-bmw-thin), Arial, Helvetica, sans-serif',
                    fontWeight: 100
                  }}
                >
                  {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  style={{ color: '#262626' }}
                  strokeWidth={2}
                />
              </button>
              
              {openIndex === index && (
                <div 
                  className="mt-4"
                  style={{
                    fontSize: '14px',
                    color: '#262626',
                    fontFamily: 'var(--font-bmw-thin), Arial, Helvetica, sans-serif',
                    fontWeight: 100,
                    lineHeight: '1.6'
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
