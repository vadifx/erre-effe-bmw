"use client";

import Image from "next/image";
import { Menu, X, MapPin, ChevronRight, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Header Fixed che appare allo scroll */}
      <div 
        className={`fixed top-0 left-0 right-0 h-[50px] bg-[#f2f2f2] w-full z-40 transition-all duration-300 ${
          isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="max-w-[1300px] 2xl:max-w-[1650px] mx-auto px-[24px] md:px-[32px] h-full flex items-center justify-between">
          <button 
            className="flex items-center gap-2"
            style={{
              fontFamily: 'var(--font-bmw-regular), Arial, Helvetica, sans-serif',
              fontWeight: 400,
              fontSize: '14px',
              color: '#262626'
            }}
          >
            Design
            <ChevronDown className="w-4 h-4" style={{ color: '#262626' }} />
          </button>
          
          <button 
            className="px-6 py-2 text-white rounded"
            style={{
              backgroundColor: '#1c69d4',
              fontFamily: 'var(--font-bmw-regular), Arial, Helvetica, sans-serif',
              fontWeight: 400,
              fontSize: '14px'
            }}
          >
            Configuratore
          </button>
        </div>
      </div>

      {/* Header principale fixed sopra Hero */}
      <div className="fixed top-0 left-0 right-0 h-[70px] bg-transparent w-full z-30">
        <div className="max-w-[1300px] 2xl:max-w-[1650px] mx-auto px-[24px] md:px-[32px] h-full flex items-center justify-between">
        <Image
          src="/img/logo.svg"
          alt="Logo"
          width={0}
          height={55}
          className="h-[20px] w-auto"
          priority
        />
          <button onClick={toggleMenu} aria-label="Toggle menu">
            <Menu className="w-6 h-6 cursor-pointer" style={{ color: '#f2f2f2' }} />
          </button>
        </div>
      </div>

      {/* Menu Overlay Full Screen */}
      <div
        className={`fixed inset-0 bg-[#f2f2f2] z-50 transition-transform duration-500 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-[70px] w-full max-w-[1300px] 2xl:max-w-[1650px] mx-auto px-5 md:px-[30px] flex items-center justify-between border-b" style={{ borderColor: 'rgba(102, 102, 102, 0.3)' }}>
          <Image
            src="/img/logo-black.svg"
            alt="Logo"
            width={0}
            height={55}
            className="h-[20px] w-auto"
            priority
          />
          <div className="flex items-center gap-4">
            <MapPin className="w-5 h-5 flex-shrink-0" style={{ color: '#666666' }} strokeWidth={2} />
            <button onClick={closeMenu} aria-label="Close menu">
              <X className="w-6 h-6 cursor-pointer flex-shrink-0" style={{ color: '#666666' }} strokeWidth={2} />
            </button>
          </div>
        </div>
        
        {/* Contenuto del menu */}
        <div className="w-full max-w-[1300px] 2xl:max-w-[1650px] mx-auto px-[45px] py-[48px]">
          <nav className="flex flex-col">
            <div className="border-b py-6" style={{ borderColor: 'rgba(102, 102, 102, 0.3)' }}>
              <h3 
                className="text-[17px]" 
                style={{ 
                  color: '#1c69d4',
                  fontFamily: 'var(--font-bmw-regular), Arial, Helvetica, sans-serif',
                  fontWeight: 400
                }}
              >
                Home
              </h3>
            </div>
            
            <div className="border-b py-6 flex items-center justify-between" style={{ borderColor: 'rgba(102, 102, 102, 0.3)' }}>
              <h3 
                className="text-[17px]" 
                style={{ 
                  color: '#666666',
                  fontFamily: 'var(--font-bmw-regular), Arial, Helvetica, sans-serif',
                  fontWeight: 400
                }}
              >
                Gruppo
              </h3>
              <ChevronRight className="w-5 h-5 flex-shrink-0" style={{ color: '#666666' }} strokeWidth={2} />
            </div>
            
            <div className="border-b py-6 flex items-center justify-between" style={{ borderColor: 'rgba(102, 102, 102, 0.3)' }}>
              <h3 
                className="text-[17px]" 
                style={{ 
                  color: '#666666',
                  fontFamily: 'var(--font-bmw-regular), Arial, Helvetica, sans-serif',
                  fontWeight: 400
                }}
              >
                Auto nuove
              </h3>
              <ChevronRight className="w-5 h-5 flex-shrink-0" style={{ color: '#666666' }} strokeWidth={2} />
            </div>
            
            <div className="border-b py-6 flex items-center justify-between" style={{ borderColor: 'rgba(102, 102, 102, 0.3)' }}>
              <h3 
                className="text-[17px]" 
                style={{ 
                  color: '#666666',
                  fontFamily: 'var(--font-bmw-regular), Arial, Helvetica, sans-serif',
                  fontWeight: 400
                }}
              >
                Auto usate
              </h3>
              <ChevronRight className="w-5 h-5 flex-shrink-0" style={{ color: '#666666' }} strokeWidth={2} />
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
  