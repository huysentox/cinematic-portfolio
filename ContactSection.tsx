import React from 'react';

export default function ContactSection({ className }: { className?: string }) {
  const styles = `
    .contact-fullscreen-section {
      width: 100%;
      min-height: 100vh;
      background: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      /* Remove position relative to avoid breaking original .section class in App.tsx */
    }

    .contact-card {
      position: relative;
      z-index: 10;
      background: rgba(255, 255, 255, 0.15);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 24px;
      padding: 50px 70px;
      text-align: center;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
    }

    .contact-card h2 {
      text-transform: uppercase;
      background: linear-gradient(90deg, #00E5FF, #FF8C00);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      font-family: sans-serif;
      text-align: center;
      margin-bottom: 30px;
      font-weight: 600;
      font-size: 2rem;
      letter-spacing: 1px;
      margin-top: 0;
      border: none;
      padding-left: 0;
    }

    .social-links {
      display: flex;
      justify-content: center;
      gap: 40px;
    }

    .social-links a {
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
      cursor: pointer;
    }

    .social-links a svg {
      fill: #FFFFFF;
      transition: all 0.3s ease;
    }

    /* Hover effects */
    .social-links a.fb:hover {
      transform: scale(1.2);
    }
    .social-links a.fb:hover svg {
      fill: #1877F2;
    }

    .social-links a.gm:hover {
      transform: scale(1.2);
    }
    .social-links a.gm:hover svg {
      fill: #EA4335;
    }

    .social-links a.ig:hover {
      transform: scale(1.2);
    }
    .social-links a.ig:hover svg {
      fill: #E1306C;
    }

    @media (max-width: 600px) {
      .contact-card {
        padding: 40px 30px;
        width: 90%;
      }
      .social-links {
        gap: 30px;
      }
    }
  `;

  return (
    <section id="contact" className={`${className || ''} contact-fullscreen-section`}>
      <style>{styles}</style>
      
      <div className="contact-card">
        <h2>KẾT NỐI VỚI TÔI</h2>
        
        <div className="social-links">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/tran.quoc.huy.258689"
            target="_blank"
            rel="noopener noreferrer"
            className="fb"
            aria-label="Facebook"
          >
            <svg width="48" height="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
            </svg>
          </a>

          {/* Gmail */}
          <a
            href="mailto:Lihuyvui40@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="gm"
            aria-label="Gmail"
          >
            <svg width="48" height="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
