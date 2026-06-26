import React, { useState, useEffect } from 'react';
import './WeddingInvitation.css';

// SVG Decorative Components
const EucalyptusBranchLeft = () => (
  <svg viewBox="0 0 100 120" className="leaf-decor-left" style={{ height: 'auto' }}>
    {/* Stem */}
    <path d="M10,110 C25,85 45,50 65,10" fill="none" stroke="#4a4f30" strokeWidth="1.5" opacity="0.5" />
    {/* Leaves */}
    <path d="M20,95 C12,82 5,87 8,98 C11,109 23,105 20,95 Z" fill="#9da389" opacity="0.8" />
    <path d="M35,75 C25,62 18,68 22,78 C26,88 38,82 35,75 Z" fill="#4a4f30" opacity="0.7" />
    <path d="M48,55 C38,42 32,48 35,58 C38,68 50,62 48,55 Z" fill="#9da389" opacity="0.85" />
    <path d="M60,35 C52,22 45,28 48,38 C51,48 62,42 60,35 Z" fill="#9da389" opacity="0.7" />
    <path d="M65,15 C58,5 52,10 55,18 C58,26 68,22 65,15 Z" fill="#4a4f30" opacity="0.6" />
  </svg>
);

const EucalyptusBranchRight = () => (
  <svg viewBox="0 0 100 120" className="leaf-decor-right" style={{ height: 'auto' }}>
    {/* Stem */}
    <path d="M10,110 C25,85 45,50 65,10" fill="none" stroke="#4a4f30" strokeWidth="1.5" opacity="0.5" />
    {/* Leaves */}
    <path d="M20,95 C12,82 5,87 8,98 C11,109 23,105 20,95 Z" fill="#4a4f30" opacity="0.75" />
    <path d="M35,75 C25,62 18,68 22,78 C26,88 38,82 35,75 Z" fill="#9da389" opacity="0.8" />
    <path d="M48,55 C38,42 32,48 35,58 C38,68 50,62 48,55 Z" fill="#4a4f30" opacity="0.65" />
    <path d="M60,35 C52,22 45,28 48,38 C51,48 62,42 60,35 Z" fill="#9da389" opacity="0.85" />
    <path d="M65,15 C58,5 52,10 55,18 C58,26 68,22 65,15 Z" fill="#9da389" opacity="0.6" />
  </svg>
);

const SmallLeafDivider = () => (
  <svg viewBox="0 0 100 40" className="small-leaf-divider">
    <path d="M10,20 C35,20 65,20 90,20" fill="none" stroke="#4a4f30" strokeWidth="1" opacity="0.4" />
    <path d="M50,20 C42,10 32,15 35,20 C32,25 42,30 50,20 Z" fill="#9da389" opacity="0.8" />
    <path d="M50,20 C58,10 68,15 65,20 C68,25 58,30 50,20 Z" fill="#4a4f30" opacity="0.7" />
  </svg>
);

const TornPaperEdgeTop = () => (
  <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="torn-edge torn-edge-top">
    <path d="M0,0 L0,60 L15,45 L32,70 L48,50 L64,75 L80,55 L96,65 L112,42 L128,80 L144,58 L160,68 L176,48 L192,75 L208,52 L224,70 L240,42 L256,78 L272,48 L288,62 L304,42 L320,80 L336,52 L352,68 L368,48 L384,75 L400,52 L416,68 L432,48 L448,78 L464,52 L480,62 L496,42 L512,80 L528,52 L544,68 L560,48 L576,75 L592,52 L608,68 L624,48 L640,78 L656,52 L672,62 L688,42 L704,80 L720,52 L736,68 L752,48 L768,75 L784,52 L800,68 L816,48 L832,78 L848,52 L864,62 L880,42 L896,80 L912,52 L928,68 L944,48 L960,75 L976,52 L992,68 L1008,48 L1024,78 L1040,52 L1056,62 L1072,42 L1088,80 L1104,52 L1120,68 L1136,48 L1152,75 L1168,52 L1184,68 L1200,42 L1200,0 Z" />
  </svg>
);

// Location icon SVG
const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

// Card / Ticket icon SVG
const TicketIconCard = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" className="section-icon">
    <path d="M21 4H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 14H3V6h10v12zm8 0h-6V6h6v12zm-3-9h-2v2h2V9zm0 4h-2v2h2v-2z" />
  </svg>
);

// Dress code hanger SVG
const HangerIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" className="section-icon">
    <path d="M12 2c.83 0 1.5.67 1.5 1.5 0 .58-.33 1.09-.81 1.34L19 11.2V13h-.1l-1.9-1.9-5 5-5-5L5.1 13H5v-1.8l6.31-6.36c-.48-.25-.81-.76-.81-1.34C10.5 2.67 11.17 2 12 2zm7.6 15c.77 0 1.4.63 1.4 1.4 0 .77-.63 1.4-1.4 1.4H4.4C3.63 19.8 3 19.17 3 18.4c0-.77.63-1.4 1.4-1.4h15.2z" />
  </svg>
);

// Copy Clipboard SVG
const CopyIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
  </svg>
);

const WhatsappIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.17 8.17 0 012.41 5.83c0 4.54-3.7 8.23-8.24 8.23-1.46 0-2.9-.39-4.16-1.13l-.3-.18-3.09.81.83-3.01-.2-.31a8.188 8.188 0 01-1.26-4.38c.01-4.54 3.7-8.23 8.24-8.23zm-3.61 3.41c-.2 0-.33.07-.46.22-.13.15-.51.5-.51 1.22s.53 1.42.6 1.52c.07.1 1.04 1.59 2.53 2.24.35.15.63.25.85.32.36.11.68.1.94.06.29-.04.9-.37 1.03-.72.13-.35.13-.66.09-.72-.04-.06-.14-.1-.3-.18-.16-.08-.94-.47-1.09-.52-.15-.05-.26-.08-.37.09-.11.17-.43.54-.53.65-.1.11-.2.13-.36.05-.16-.08-.68-.25-1.29-.8-0.48-.43-.8-0.95-.9-1.11-.1-.17-.01-.26.07-.34.08-.08.17-.2.25-.3.08-.1.11-.17.17-.29.06-.12.03-.22-.01-.3-.04-.08-.37-.9-.51-1.24-.14-.34-.28-.29-.37-.3z" />
  </svg>
);

const TicketIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32" className="section-icon">
    <path d="M22 10V6c0-1.11-.9-2-2-2H4c-1.1 0-1.99.89-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-9 7.5h-2v-2h2v2zm0-4.5h-2v-2h2v2zm0-4.5h-2v-2h2v2z" />
  </svg>
);

// Faint background watercolor corner decor
const CornerEucalyptusLeft = () => (
  <svg viewBox="0 0 120 120" className="corner-decor top-left">
    <path d="M-10,-10 C20,30 45,55 55,85" fill="none" stroke="#4a4f30" strokeWidth="1.2" opacity="0.15" />
    <path d="M10,15 C2,5 -5,12 -2,20 C1,28 12,22 10,15 Z" fill="#9da389" opacity="0.2" />
    <path d="M22,35 C12,25 5,32 8,40 C11,48 22,42 22,35 Z" fill="#4a4f30" opacity="0.15" />
    <path d="M32,55 C22,45 15,52 18,60 C21,68 32,62 32,55 Z" fill="#9da389" opacity="0.2" />
    <path d="M40,75 C30,65 23,72 26,80 C29,88 40,82 40,75 Z" fill="#4a4f30" opacity="0.12" />
  </svg>
);

const CornerEucalyptusRight = () => (
  <svg viewBox="0 0 120 120" className="corner-decor bottom-right">
    <path d="M130,130 C100,90 80,60 70,35" fill="none" stroke="#4a4f30" strokeWidth="1.2" opacity="0.15" />
    <path d="M110,105 C118,115 125,108 122,100 C119,92 108,98 110,105 Z" fill="#9da389" opacity="0.2" />
    <path d="M98,85 C108,95 115,88 112,80 C109,72 98,78 98,85 Z" fill="#4a4f30" opacity="0.15" />
    <path d="M88,65 C98,75 105,68 102,60 C99,52 88,58 88,65 Z" fill="#9da389" opacity="0.2" />
    <path d="M80,45 C90,55 97,48 94,40 C91,32 80,38 80,45 Z" fill="#4a4f30" opacity="0.12" />
  </svg>
);

const targetDate = new Date("2026-10-10T17:00:00");

const calculateTimeLeft = () => {
  const now = new Date();
  const difference = targetDate - now;

  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }
  return timeLeft;
};

// Robust parsing of guest passes from path or query string
const getNumPasses = () => {
  if (typeof window === 'undefined') return 1;
  
  // 1. Try URL path (e.g. localhost:3001/2)
  const path = window.location.pathname.replace(/^\/+/, '');
  let passes = parseInt(path, 10);

  // 2. Try URL query parameters (e.g. localhost:3001/?p=2 or ?pases=2)
  if (isNaN(passes)) {
    const searchParams = new URLSearchParams(window.location.search);
    const p = searchParams.get('p') || searchParams.get('pases') || searchParams.get('personas');
    passes = parseInt(p, 10);
  }

  // Fallback constraints: default to 1, max 10. If > 10, default to 1.
  if (isNaN(passes) || passes < 1 || passes > 10) {
    return 1;
  }
  return passes;
};

export default function WeddingInvitation() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [copied, setCopied] = useState(false);
  const [numPasses] = useState(() => getNumPasses());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Custom share or confirmation trigger via WhatsApp
  const handleConfirmRSVP = () => {
    const phoneNumber = "5493863412345"; // Couple's WhatsApp number
    const placesText = numPasses === 1 ? "1 lugar" : `${numPasses} lugares`;
    const message = encodeURIComponent(
      `¡Hola Eunice y Franco! Con mucho amor confirmo mi asistencia (${placesText}) para su hermosa boda el próximo Sábado 10 de Octubre de 2026. ¡Nos vemos pronto!`
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  // Copy Alias Handler
  const handleCopyAlias = () => {
    navigator.clipboard.writeText("EUNICERUIZ98");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="invitation-container animate-fade-in">

      {/* 1. Header Section (Cabecera) */}
      <header className="header-section snap-section" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.55)), url(/manos.png)' }}>
        <div className="header-content-wrapper">
          <p className="motivational-phrase animate-fade-in delay-1">
            "Encontramos el amor y decidimos quedarnos en él para siempre"
          </p>

          <div className="monogram-container animate-fade-in delay-2">
            <span className="monogram-letter">E</span>
            <div className="monogram-divider"></div>
            <span className="monogram-letter">F</span>
          </div>

          <h2 className="serif-title nuestra-boda-title animate-fade-in delay-2">
            Nuestra Boda
          </h2>
        </div>

        {/* Flecha indicadora de scroll intermitente */}
        <div className="scroll-indicator">
          <svg viewBox="0 0 24 24" className="scroll-arrow" fill="currentColor">
            <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
          </svg>
        </div>
      </header>

      {/* 2. Presentación de los Novios */}
      <section className="presentation-section snap-section">
        <CornerEucalyptusLeft />
        <CornerEucalyptusRight />
        <p className="parents-text">
          Con nuestro amor y la bendición de Dios
        </p>

        <p className="invite-text">
          tenemos el honor de invitarte a nuestra boda
        </p>

        <div className="couple-names-wrapper">
          <EucalyptusBranchLeft />
          <h1 className="script-text couple-names">
            Eunice
            <div className="couple-connector">&</div>
            Franco
          </h1>
          <EucalyptusBranchRight />
        </div>

        {/* Elegant Date Highlight */}
        <div className="date-highlight-container">
          <div className="date-side-text">Sábado</div>
          <div className="date-center-wrapper">
            <span className="date-month">Octubre</span>
            <span className="date-day">10</span>
          </div>
          <div className="date-side-text year">2026</div>
        </div>

        {/* Delicate Countdown Timer inside a Card */}
        <div className="countdown-card">
          <span className="countdown-card-title">FALTAN</span>
          <div className="countdown-container">
            <div className="countdown-item">
              <span className="countdown-number">{timeLeft.days}</span>
              <span className="countdown-label">Días</span>
            </div>
            <div className="countdown-divider">:</div>
            <div className="countdown-item">
              <span className="countdown-number">{String(timeLeft.hours).padStart(2, '0')}</span>
              <span className="countdown-label">Horas</span>
            </div>
            <div className="countdown-divider">:</div>
            <div className="countdown-item">
              <span className="countdown-number">{String(timeLeft.minutes).padStart(2, '0')}</span>
              <span className="countdown-label">Min.</span>
            </div>
            <div className="countdown-divider">:</div>
            <div className="countdown-item">
              <span className="countdown-number">{String(timeLeft.seconds).padStart(2, '0')}</span>
              <span className="countdown-label">Seg.</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Fiesta - Ubicación */}
      <section className="location-section-snap snap-section">
        <CornerEucalyptusLeft />
        <CornerEucalyptusRight />
        <div className="location-card">
          <span className="location-time">RECEPCIÓN</span>
          <h3 className="serif-title location-title">Salón Habibi</h3>
          <h4 className="location-subtitle">Villa Quinteros</h4>
          <p className="location-address">
            Tucumán, Argentina
          </p>
          <a
            href="https://maps.google.com/?q=Salon+Habibi+Villa+Quinteros"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            <PinIcon /> Ver Ubicación
          </a>
        </div>
      </section>

      {/* 5. Pases Reservados (Dinámicos por URL) */}
      <section className="passes-section-snap snap-section">
        <CornerEucalyptusLeft />
        <CornerEucalyptusRight />
        <div className="passes-card">
          <TicketIcon />
          <h3 className="serif-title passes-title">Pases</h3>
          <p className="passes-subtitle">Tenemos reservados</p>
          <div className="passes-count-container">
            <span className="passes-label">Para ti</span>
            <div className="passes-number">{numPasses}</div>
            <span className="passes-label">{numPasses === 1 ? "lugar" : "lugares"}</span>
          </div>
          <p className="passes-footnote">
            Por favor, confirma tu asistencia considerando esta cantidad de lugares.
          </p>
        </div>
      </section>

      {/* 6. Tarjetas y Transferencia */}
      <section className="tarjetas-section-snap snap-section">
        <CornerEucalyptusLeft />
        <CornerEucalyptusRight />
        <div className="tarjeta-card">
          <TicketIconCard />
          <h3 className="serif-title tarjeta-title">Tarjetas</h3>
          <p className="tarjeta-text">
            Su presencia hará que este día sea inolvidable. Para confirmar su lugar, les solicitamos realizar la compra de la tarjeta de ingreso. Recomendamos adquirirla con anticipación para asegurar el precio actual.
          </p>

          <div className="tarjeta-details">
            <div className="tarjeta-price-box">
              <span className="price-label">VALOR DE LA TARJETA</span>
              <span className="price-number">$40.000</span>
            </div>

            <div className="tarjeta-transfer-box">
              <span className="transfer-label">ALIAS DE TRANSFERENCIA</span>
              <span className="transfer-alias">EUNICERUIZ98</span>
              <button className="copy-button" onClick={handleCopyAlias}>
                <CopyIcon /> {copied ? "¡Copiado!" : "Copiar Alias"}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Dress Code */}
      <section className="dress-code-section-snap snap-section">
        <CornerEucalyptusLeft />
        <CornerEucalyptusRight />
        <div className="dress-code-card">
          <HangerIcon />
          <h3 className="serif-title dress-code-title">Dress Code</h3>
          <span className="dress-code-highlight">ELEGANTE</span>
          <div className="dress-code-details">
            <p className="dress-code-row">
              <strong>Damas:</strong> evitar tonos de blanco o beige
            </p>
            <p className="dress-code-row">
              <strong>Caballeros:</strong> Traje
            </p>
          </div>
        </div>
      </section>

      {/* 8. Confirmación de Asistencia */}
      <section className="rsvp-section snap-section">
        <CornerEucalyptusLeft />
        <CornerEucalyptusRight />
        <div className="rsvp-icon">
          <WhatsappIcon />
        </div>
        <h3 className="serif-title rsvp-title">Confirmación</h3>
        <p className="rsvp-description">
          Agradecemos que confirmes tu asistencia antes del 10 de Septiembre de 2026
        </p>
        <button className="primary-button" onClick={handleConfirmRSVP}>
          Enviar Mensaje
        </button>
      </section>

      {/* 9. Aclaración y Cierre */}
      <section className="closing-section snap-section">
        <CornerEucalyptusLeft />
        <CornerEucalyptusRight />
        <div className="adults-only-box">
          <p className="adults-only-text">
            Adoramos a sus hijos, pero creemos que necesitan una noche libre.
          </p>
          <span className="adults-only-highlight">SÓLO ADULTOS, POR FAVOR</span>
          <SmallLeafDivider />
        </div>

        <p className="thanks-phrase">
          Esperamos contar con su presencia
        </p>
      </section>

      {/* 10. Segunda Fotografía + Footer */}
      <section className="photo-wrapper snap-section">
        <TornPaperEdgeTop />
        <img
          src="/novios_carreta.png"
          alt="Eunice & Franco beso en la carreta"
          className="wedding-photo"
        />

        <footer className="invitation-footer">
          <p className="footer-copyright">Copyright &copy; 2026 Euni & Franco</p>
          <p className="footer-dev">
            Desarrollado por <a href="http://www.cubocode.com.ar" target="_blank" rel="noopener noreferrer" className="dev-link">Cubo</a>
          </p>
        </footer>
      </section>

    </div>
  );
}
