import React from 'react';

export default function SkillsSection({ className }: { className?: string }) {
  const styles = `
    .premium-skills-section {
        width: 100%;
        max-width: 1100px;
        margin: 0 auto;
        padding: 60px 20px;
        font-family: 'Nunito', sans-serif;
    }

    /* Tiêu đề có vạch ngang nổi bật */
    .skills-header {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 20px;
        margin-bottom: 50px;
    }

    .accent-line {
        width: 4px;
        height: 35px;
        background: #00E5FF;
        border-radius: 10px;
        box-shadow: 0 0 15px rgba(0, 229, 255, 0.6);
    }

    .glow-title {
        font-family: 'Montserrat', sans-serif !important;
        font-weight: 800;
        font-size: 2.8rem;
        background: linear-gradient(90deg, #00E5FF, #FF8C00);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        letter-spacing: 3px;
        margin: 0;
        text-transform: uppercase;
        display: inline-block;
    }

    /* Bố cục lưới */
    .skills-bento-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
    }
    .box-full {
        grid-column: span 2;
    }

    /* --- THẺ KÍNH MỜ (PRO GLASS CARD) --- */
    .pro-glass-card {
        background: rgba(15, 20, 35, 0.55); /* Tối hơn, sâu hơn */
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-radius: 20px;
        padding: 35px;
        border: 1px solid rgba(255, 255, 255, 0.05); /* Viền cực mỏng mặc định */
        box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.02), 0 10px 30px rgba(0,0,0,0.3);
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }

    /* Hiệu ứng viền sáng đổi màu theo từng thẻ khi Hover */
    .orange-accent:hover { border-color: rgba(255, 140, 0, 0.5); box-shadow: 0 15px 40px rgba(255, 140, 0, 0.15); transform: translateY(-5px); }
    .cyan-accent:hover { border-color: rgba(0, 229, 255, 0.5); box-shadow: 0 15px 40px rgba(0, 229, 255, 0.15); transform: translateY(-5px); }
    .purple-accent:hover { border-color: rgba(168, 85, 247, 0.5); box-shadow: 0 15px 40px rgba(168, 85, 247, 0.15); transform: translateY(-5px); }

    /* Nhóm Icon + Tiêu đề bên trong thẻ */
    .card-title-group {
        display: flex;
        align-items: center;
        gap: 18px;
        margin-bottom: 25px;
    }

    .icon-box {
        width: 45px;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 12px;
    }

    .icon-box svg {
        width: 24px; height: 24px;
    }

    .orange-accent .icon-box { background: rgba(255, 140, 0, 0.1); color: #FF8C00; border: 1px solid rgba(255, 140, 0, 0.3); }
    .cyan-accent .icon-box { background: rgba(0, 229, 255, 0.1); color: #00E5FF; border: 1px solid rgba(0, 229, 255, 0.3); }
    .purple-accent .icon-box { background: rgba(168, 85, 247, 0.1); color: #A855F7; border: 1px solid rgba(168, 85, 247, 0.3); }

    .card-title-group h3 {
        font-family: 'Montserrat', sans-serif;
        font-size: 1.4rem;
        font-weight: 700;
        color: #fff;
        margin: 0;
    }

    /* Danh sách Bullet */
    .pro-list {
        list-style: none; padding: 0; margin: 0;
        display: flex; flex-direction: column; gap: 15px;
    }
    .pro-list li {
        color: #cbd5e1; font-size: 1.05rem;
        display: flex; align-items: center; gap: 12px;
    }
    .dot {
        width: 6px; height: 6px; border-radius: 50%;
    }
    .orange-accent .dot { background: #FF8C00; box-shadow: 0 0 10px #FF8C00; }
    .cyan-accent .dot { background: #00E5FF; box-shadow: 0 0 10px #00E5FF; }

    /* --- CÁC THẺ CÔNG CỤ AI --- */
    .tools-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
        gap: 20px;
        padding: 20px 0;
        margin-top: 10px;
    }

    .tool-app-logo {
        position: relative;
        width: 60px;
        height: 60px;
        border-radius: 16px;
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.08);
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.02);
    }

    .tool-app-logo:hover {
        transform: translateY(-8px) scale(1.1);
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.3);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1);
        z-index: 10;
    }

    .tool-app-img {
        width: 32px;
        height: 32px;
        object-fit: contain;
        overflow: hidden;
        border-radius: 6px;
        filter: drop-shadow(0 2px 4px rgba(0,0,0,0.2));
        transition: all 0.3s ease;
    }
    
    .tool-app-logo:hover .tool-app-img {
        transform: scale(1.15);
    }

    .tool-app-tooltip {
        position: absolute;
        bottom: -40px;
        left: 50%;
        transform: translateX(-50%) translateY(10px);
        background: rgba(15, 15, 15, 0.9);
        color: #fff;
        padding: 6px 12px;
        border-radius: 6px;
        font-size: 13px;
        font-weight: 600;
        white-space: nowrap;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(8px);
        z-index: 20;
        pointer-events: none;
    }

    .tool-app-logo:hover .tool-app-tooltip {
        opacity: 1;
        visibility: visible;
        transform: translateX(-50%) translateY(0);
    }

    /* Responsive cho Màn hình nhỏ */
    @media (max-width: 850px) {
        .skills-bento-grid { grid-template-columns: 1fr; }
        .box-full { grid-column: span 1; }
        .skills-header { flex-direction: column; gap: 10px; }
        .accent-line { width: 40px; height: 4px; }
    }
  `;

            const tools = [
        { name: 'ChatGPT', url: 'https://www.google.com/s2/favicons?sz=64&domain=chatgpt.com' },
        { name: 'Claude AI', url: 'https://www.google.com/s2/favicons?sz=64&domain=claude.ai' },
        { name: 'Gemini', url: 'https://www.google.com/s2/favicons?sz=64&domain=gemini.google.com' },
        { name: 'Grok', url: 'https://www.google.com/s2/favicons?sz=64&domain=grok.com' },
        { name: 'DeepSeek', url: 'https://www.google.com/s2/favicons?sz=64&domain=deepseek.com' },
        { name: 'Kling AI', url: 'https://www.google.com/s2/favicons?sz=64&domain=klingai.com' },
        { name: 'Seedance', url: 'https://i.postimg.cc/qvyz8QVw/bytedance-logo-png-seeklogo-471468.png' },
        { name: 'Veo 3', url: 'https://www.google.com/s2/favicons?sz=128&domain=deepmind.google' },
        { name: 'Capcut', url: 'https://www.google.com/s2/favicons?sz=128&domain=capcut.com' },
        { name: 'Canva Pro', url: 'https://www.google.com/s2/favicons?sz=128&domain=canva.com' },
        { name: 'Picsart', url: 'https://www.google.com/s2/favicons?sz=128&domain=picsart.com' },
        { name: 'Wink', url: 'https://i.postimg.cc/VNzLX8Fs/images.png' },
        { name: 'ElevenLabs', url: 'https://www.google.com/s2/favicons?sz=128&domain=elevenlabs.io' },
        { name: 'WHISK', url: 'https://www.google.com/s2/favicons?sz=128&domain=whisk.com' },
        { name: 'Github', url: 'https://www.google.com/s2/favicons?sz=128&domain=github.com' },
        { name: 'Minimax', url: 'https://www.google.com/s2/favicons?sz=128&domain=minimaxi.com' },
        { name: 'PowerPoint', url: 'https://www.google.com/s2/favicons?sz=128&domain=office.com' },
        { name: 'Google Workspace', url: 'https://www.google.com/s2/favicons?sz=64&domain=google.com' }
    ];

  return (
    <section id="skills" className={className}>
      <style>{styles}</style>
      <div className="container-inner scrollable-content" style={{ paddingBottom: '60px' }}>
        <div className="premium-skills-section">
          <div className="skills-header">
              <div className="accent-line"></div>
              <h2 className="glow-title">SKILLS SYSTEM</h2>
          </div>

          <div className="skills-bento-grid">
              
              <div className="pro-glass-card orange-accent">
                  <div className="card-title-group">
                      <div className="icon-box">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                      </div>
                      <h3>Quản lý & Giao tiếp</h3>
                  </div>
                  <ul className="pro-list">
                      <li><span className="dot"></span>Tuyển dụng & Phỏng vấn</li>
                      <li><span className="dot"></span>Đào tạo nhân sự & Quản lý đội nhóm</li>
                      <li><span className="dot"></span>Kỹ năng Thuyết trình</li>
                      <li><span className="dot"></span>MC & Hoạt náo chương trình</li>
                  </ul>
              </div>

              <div className="pro-glass-card cyan-accent">
                  <div className="card-title-group">
                      <div className="icon-box">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
                      </div>
                      <h3>Nội dung & E-commerce</h3>
                  </div>
                  <ul className="pro-list">
                      <li><span className="dot"></span>E-commerce Workflow</li>
                      <li><span className="dot"></span>Viết kịch bản Video & Storytelling</li>
                      <li><span className="dot"></span>Dựng video chuyên nghiệp</li>
                      <li><span className="dot"></span>Prompt Engineering</li>
                  </ul>
              </div>

              <div className="pro-glass-card purple-accent box-full">
                  <div className="card-title-group">
                      <div className="icon-box">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21 16-1.5 1.5M16 21l1.5-1.5M3 21l6-6M3 3l6 6"></path><path d="M21 16c-2.3 0-4.3-1.6-5-3.8l-.5-1.7a2 2 0 0 0-1.9-1.4l-1.7-.5c-2.2-.7-3.8-2.7-3.8-5 0-2.3 1.6-4.3 3.8-5l1.7-.5A2 2 0 0 0 15.5 1l.5-1.7C16.7 1.6 18.7 0 21 0"></path></svg>
                      </div>
                      <h3>Hệ sinh thái AI & Tool Software</h3>
                  </div>
                  
                  <div className="tools-grid">
                      {tools.map((tool, idx) => (
                           <div key={idx} className="tool-app-logo">
                                <img src={tool.url} alt={tool.name} className="tool-app-img" />
                                <div className="tool-app-tooltip">{tool.name}</div>
                           </div>
                      ))}
                  </div>
              </div>

          </div>
        </div>
      </div>
    </section>
  );
}
