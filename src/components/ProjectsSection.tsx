import React, { useState, useEffect } from 'react';

export default function ProjectsSection({ className }: { className?: string }) {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  // Stop all playing videos when modal closes
  const stopVideos = () => {
    const videos = document.querySelectorAll('video');
    videos.forEach((vid) => {
      vid.pause();
    });
  };

  const closeModal = () => {
    stopVideos();
    setActiveModal(null);
  };

  // Prevent scroll when modal is open
  useEffect(() => {
    if (activeModal !== null) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('hide-nav');
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('hide-nav');
    }
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('hide-nav');
    };
  }, [activeModal]);

  const hitaImgSrc = "https://i.postimg.cc/YSFsk73H/717402539-1001731069494562-6190698115938010020-n.jpg";
  const hitaThumbSrc = "/src/assets/images/regenerated_image_1781564213686.png"; 
  const hitaVideoSrc = "https://player.vimeo.com/external/435674703.sd.mp4?s=7fdf1ebafec077c5c0883d3ff8d277be9537ff55&profile_id=165&oauth2_token_id=57447761";
  const aiVideoIds = [
    "1201588003",
    "1201842891",
    "1201843568",
    "1201844159",
    "1201844478",
    "1201846487"
  ];

  // Styles injected for Liquid Box UI
  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Nunito:wght@400;700&display=swap');

    .projects-container {
      width: 100%;
      max-width: 1100px;
      margin: 0 auto;
      padding: 60px 20px;
      font-family: 'Nunito', sans-serif;
    }

    .section-title {
      font-family: 'Montserrat', sans-serif;
      font-weight: 800;
      font-size: 2.2rem;
      text-align: center;
      margin-bottom: 50px;
      background: linear-gradient(90deg, #00E5FF, #FF8C00);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      letter-spacing: 2px;
    }

    /* Khung Liquid Box (Glassmorphism) */
    .liquid-box {
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 20px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
      transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .liquid-box:hover {
      transform: translateY(-5px);
      background: rgba(255, 255, 255, 0.05); /* Sáng nhẹ lên */
      box-shadow: 0 15px 35px rgba(0,0,0,0.3);
    }

    /* Tiêu đề Box */
    .title-box {
      padding: 30px 40px;
      text-align: center;
      margin: 0 auto 30px auto;
      width: fit-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .trophy-icon {
      width: 45px;
      height: 45px;
      fill: url(#orange-gradient);
      margin-bottom: 15px;
    }

    .gradient-orange-yellow {
      font-family: 'Montserrat', sans-serif;
      font-size: 1.8rem;
      font-weight: 800;
      background: linear-gradient(90deg, #FF8C00, #FFD700);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 0 0 8px 0;
    }

    .gradient-cyan {
      font-family: 'Montserrat', sans-serif;
      font-size: 1.8rem;
      font-weight: 800;
      background: linear-gradient(90deg, #00E5FF, #007BFF);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 0 0 8px 0;
    }

    .subtitle-text {
      color: #94a3b8;
      font-weight: 400;
      font-size: 0.95rem;
      letter-spacing: 1px;
      text-transform: uppercase;
      margin: 0;
    }

    /* Lưới 2 cột Media HITA */
    .grid-2-col {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
      margin-bottom: 50px;
    }

    .media-box {
      aspect-ratio: 16 / 9;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .media-thumbnail {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
    }

    .media-box:hover .media-thumbnail {
      transform: scale(1.05);
    }

    .media-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity 0.3s ease;
      backdrop-filter: blur(2px);
    }

    .media-box:hover .media-overlay {
      opacity: 1;
    }

    .icon-glass {
      width: 60px;
      height: 60px;
      color: rgba(255, 255, 255, 0.9);
      filter: drop-shadow(0 4px 6px rgba(0,0,0,0.4));
    }

    /* Gallery Box */
    .gallery-box {
      padding: 40px 20px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .mini-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
      width: 100%;
      max-width: 1000px;
      margin-bottom: 25px;
      pointer-events: none;
    }

    .mini-grid .mini-item {
      aspect-ratio: 16 / 9;
      border-radius: 8px;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .mini-item iframe {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .gallery-text {
      font-size: 1rem;
      font-weight: 700;
      color: #fff;
      background: rgba(255, 255, 255, 0.1);
      padding: 10px 24px;
      border-radius: 30px;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    /* Modals */
    .glass-modal {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0, 0, 0, 0.9);
      backdrop-filter: blur(5px);
      z-index: 99999;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
      padding: 20px;
    }

    .glass-modal.active {
      opacity: 1;
      pointer-events: auto;
    }

    .modal-close {
      position: absolute;
      top: 20px;
      right: 30px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: white;
      font-size: 24px;
      width: 44px;
      height: 44px;
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      z-index: 10;
    }

    .modal-close:hover {
      background: rgba(255, 0, 0, 0.6);
      border-color: rgba(255, 0, 0, 0.8);
    }

    .modal-content-img {
      max-width: 90vw;
      max-height: 90vh;
      object-fit: contain;
      border-radius: 12px;
      box-shadow: 0 20px 50px rgba(0,0,0,0.5);
    }

    .modal-content-video {
      width: 90vw;
      max-width: 1000px;
      border-radius: 12px;
      outline: none;
      box-shadow: 0 20px 50px rgba(0,0,0,0.5);
      background: #000;
    }

    .modal-content-gallery {
      width: 90vw;
      max-width: 1100px;
      max-height: 85vh;
      overflow-y: auto;
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      padding: 30px;
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
    }

    @media (max-width: 768px) {
      .grid-2-col { grid-template-columns: 1fr; gap: 20px; }
      .mini-grid { grid-template-columns: 1fr 1fr; }
      .gallery-grid { grid-template-columns: 1fr; gap: 20px; }
      .modal-content-gallery { padding: 20px; }
    }

    body.hide-nav .top-nav {
      display: none !important;
    }
  `;

  return (
    <section id="project" className={className} style={{ position: 'relative', zIndex: 1 }}>
      <style>{styles}</style>

      {/* SVG Gradient definitions */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <linearGradient id="orange-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop stopColor="#FF8C00" offset="0%" />
          <stop stopColor="#FFD700" offset="100%" />
        </linearGradient>
      </svg>

      <div className="projects-container scrollable-content">
        {/* 1. HEADER */}
        <h2 className="section-title">PROJECTS & CREATIVE WORKS</h2>

        {/* 2. ROW 1: KHUNG TIÊU ĐỀ HITA */}
        <div className="liquid-box title-box">
          {/* Trophy SVG Icon */}
          <svg className="trophy-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          <h3 className="gradient-orange-yellow">TOP VIDEO LAN TỎA GIÁO DỤC</h3>
          <p className="subtitle-text">GIẢI THƯỞNG HITA APP</p>
        </div>

        {/* 3. ROW 2: MEDIA HITA */}
        <div className="grid-2-col">
          {/* Khung Trái (Ảnh) */}
          <div className="liquid-box media-box" onClick={() => setActiveModal(1)}>
            <img src={hitaImgSrc} className="media-thumbnail" alt="HITA Thumbnail" referrerPolicy="no-referrer" />
            <div className="media-overlay">
              {/* Magnifier Icon */}
              <svg className="icon-glass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 10h.01" />
              </svg>
            </div>
          </div>

          {/* Khung Phải (Video) */}
          <div className="liquid-box media-box" onClick={() => setActiveModal(2)} style={{ background: 'rgba(0,0,0,0.3)' }}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_play_button_icon_%282013%E2%80%932017%29.svg" 
              className="media-thumbnail" 
              style={{ objectFit: 'contain', width: '30%', filter: 'drop-shadow(0 5px 15px rgba(0,0,0,0.4))' }} 
              alt="Play Video Thumb" />
            <div className="media-overlay">
              {/* Play Icon (Hover Effect) */}
              <svg className="icon-glass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* 4. ROW 3: KHUNG TIÊU ĐỀ AI WORKS */}
        <div className="liquid-box title-box">
          <h3 className="gradient-cyan">SELECTED AI WORKS</h3>
          <p className="subtitle-text">VIDEO SẢN XUẤT BẰNG AI</p>
        </div>

        {/* 5. ROW 4: THƯ MỤC AI GALLERY */}
        <div className="liquid-box gallery-box" onClick={() => setActiveModal(3)}>
          <div className="mini-grid">
            {aiVideoIds.map((id, i) => (
               <div key={i} className="mini-item">
                 <iframe src={`https://player.vimeo.com/video/${id}?title=0&byline=0&portrait=0`} style={{ border: 'none' }} />
               </div>
            ))}
          </div>
          <div className="gallery-text">Bấm vào để mở thư viện Video AI</div>
        </div>
      </div>

      {/* MODALS */}
      {/* Modal 1: Image HITA */}
      <div className={`glass-modal ${activeModal === 1 ? 'active' : ''}`} onClick={closeModal}>
        <button className="modal-close" onClick={closeModal}>&times;</button>
        <img 
          src={hitaImgSrc} 
          className="modal-content-img" 
          alt="HITA Large Detail" 
          onClick={(e) => e.stopPropagation()} 
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Modal 2: Video HITA */}
      <div className={`glass-modal ${activeModal === 2 ? 'active' : ''}`} onClick={closeModal}>
        <button className="modal-close" onClick={closeModal}>&times;</button>
        {activeModal === 2 && (
          <iframe 
            src="https://player.vimeo.com/video/1201591524?autoplay=1"
            className="modal-content-video" 
            style={{ aspectRatio: '16/9', border: 'none' }}
            allow="autoplay; fullscreen"
            allowFullScreen
            title="HITA Video Detail"
          />
        )}
      </div>

      {/* Modal 3: AI Video Gallery */}
      <div className={`glass-modal ${activeModal === 3 ? 'active' : ''}`} onClick={closeModal}>
        <button className="modal-close" onClick={closeModal}>&times;</button>
        <div className="modal-content-gallery" onClick={(e) => e.stopPropagation()}>
          <h3 className="gradient-cyan" style={{ textAlign: 'center', marginBottom: '30px' }}>THƯ VIỆN VIDEO AI</h3>
          <div className="gallery-grid">
            {activeModal === 3 && aiVideoIds.map((id, i) => (
               <iframe 
                 key={i} 
                 src={`https://player.vimeo.com/video/${id}?autoplay=0&title=0&byline=0&portrait=0`}
                 className="modal-content-video" 
                 style={{ width: '100%', maxWidth: '100%', borderRadius: '8px', border: 'none', aspectRatio: '16/9' }}
                 allow="autoplay; fullscreen"
                 allowFullScreen
                 title={`AI Video ${i + 1}`}
               />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}


