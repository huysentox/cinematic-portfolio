import { useState, useEffect } from 'react';

const experiences = [
  {
    id: 0,
    company: "VIETNAM CORPORATION [ 2023 - 2026 ]",
    position: "MANAGER",
    title: "MANAGER | TEAM LEADER | HR",
    bullets: [
      "Quản lý và điều hành đội nhóm nhiều thành viên, chịu trách nhiệm về kết quả hoạt động và hiệu suất nhóm.",
      "Xây dựng quy trình tuyển dụng, sàng lọc hồ sơ và trực tiếp phỏng vấn ứng viên.",
      "Thiết kế tài liệu, tổ chức đào tạo và hướng dẫn nhân sự mới trong môi trường thực tế.",
      "Đảm nhiệm vai trò MC, điều phối và tổ chức sự kiện nội bộ từ 20-40 người."
    ],
    images: ["https://i.postimg.cc/WbNJj4Xz/IMG-6416.jpg"]
  },
  {
    id: 1,
    company: "FREELANCER [ 2026 - PRESENT ]",
    position: "AI VIDEO CREATOR & EDITING",
    title: "AI VIDEO CREATOR & EDITING",
    bullets: [
      "Chuyển đổi ý tưởng thành video hoàn chỉnh bằng quy trình sản xuất ứng dụng AI.",
      "Xây dựng kịch bản và nội dung phục vụ giáo dục, truyền thông và marketing.",
      "Tối ưu quy trình sản xuất nội dung bằng các công cụ AI đa phương tiện."
    ],
    images: ["https://i.postimg.cc/ZRj4LJ3P/IMG-1706066817071-1706068011991-Original.jpg"]
  },
  {
    id: 2,
    company: "ROOMII & EVOHOME [ 2026 - PRESENT ]",
    position: "PROPERTY RENTAL CONSULTANT",
    title: "PROPERTY RENTAL CONSULTANT",
    bullets: [
      "Tìm kiếm và phát triển khách hàng tiềm năng thông qua các nền tảng mạng xã hội.",
      "Tư vấn giải pháp lưu trú phù hợp dựa trên nhu cầu và ngân sách của khách hàng.",
      "Hỗ trợ khách hàng trong quá trình tham quan, đánh giá và lựa chọn sản phẩm.",
      "Thực hiện đàm phán, chốt giao dịch và hỗ trợ hoàn thiện thủ tục hợp đồng."
    ],
    images: [
      "https://i.postimg.cc/j2Z2CzZw/78EAEC7E-8FF3-4918-8B62-05565D6B4317.jpg",
      "https://i.postimg.cc/25h5np2Q/1eb53fe95c8c7bbf3860a3ed47adb2c7-2987773148937241603.jpg"
    ]
  }
];

export default function ExperienceSection({ className }: { className?: string }) {
  const [activeTab, setActiveTab] = useState(0);

  // Define CSS inside the component for easy copy-pasting
  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Inter:wght@400&display=swap');

    .exp-container {
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
    }
    
    .exp-layout {
      display: flex;
      gap: 30px;
      align-items: stretch;
      margin-top: 30px;
    }
    
    /* LEFT COLUMN - TABS */
    .exp-tabs {
      width: 35%;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    
    .exp-tab {
      background: rgba(0, 0, 0, 0.4);
      border: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 8px;
      padding: 24px 20px;
      cursor: pointer;
      transition: all 0.3s ease;
      border-left: 4px solid transparent;
    }
    
    .exp-tab:hover, .exp-tab.active {
      border-color: #00E5FF;
      box-shadow: 0 0 15px rgba(0, 229, 255, 0.3);
      border-left: 4px solid #00E5FF;
      background: rgba(0, 229, 255, 0.05);
    }
    
    .exp-tab-company {
      font-size: 0.75rem;
      text-transform: uppercase;
      color: #94a3b8; /* Muted blue/gray */
      letter-spacing: 2px;
      margin-bottom: 8px;
      font-family: 'Inter', sans-serif;
      transition: color 0.3s ease;
    }
    
    .exp-tab-position {
      font-size: 1.25rem;
      font-weight: bold;
      color: #cbd5e1;
      font-family: 'Montserrat', sans-serif;
      transition: color 0.3s ease;
    }
    
    .exp-tab.active .exp-tab-position {
      color: #ffffff; /* Sáng trắng khi active */
    }
    
    /* RIGHT COLUMN - CONTENT PANEL */
    .exp-content-panel {
      width: 65%;
      background-color: #0B1120;
      border-radius: 12px;
      border: 1px solid rgba(255, 255, 255, 0.05);
      padding: 40px;
      min-height: 480px;
      position: relative;
    }
    
    .exp-content-item {
      display: none;
      opacity: 0;
    }
    
    .exp-content-item.active {
      display: flex;
      gap: 40px;
      animation: fadeIn 0.6s ease forwards;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(15px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .exp-text-section {
      flex: 1;
    }
    
    .exp-content-title {
      font-family: 'Montserrat', sans-serif;
      font-size: 2rem;
      text-transform: uppercase;
      color: #ffffff;
      font-weight: 800;
      margin-bottom: 12px;
      line-height: 1.2;
    }
    
    .exp-divider {
      width: 60px;
      height: 4px;
      background-color: #00E5FF;
      margin-bottom: 30px;
      border-radius: 2px;
    }
    
    .exp-bullets {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .exp-bullets li {
      position: relative;
      padding-left: 24px;
      margin-bottom: 16px;
      color: #cbd5e1;
      font-family: 'Inter', sans-serif;
      font-weight: 400;
      line-height: 1.8;
      font-size: 0.95rem;
    }
    
    .exp-bullets li::before {
      content: "•";
      color: #00E5FF;
      position: absolute;
      left: 0;
      top: -2px; /* Căn chỉnh dấu chấm với chữ */
      font-size: 1.5rem;
    }
    
    .exp-image-section {
      width: 260px;
      flex-shrink: 0;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    
    .exp-image-wrapper {
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 100%;
    }
    
    .exp-image-wrapper.single {
      height: auto;
    }
    
    .exp-image-wrapper.double {
      flex-direction: column;
      background: transparent;
      border: none;
      gap: 20px;
    }
    
    .exp-image-inner {
      height: auto;
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 8px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 100%;
    }
    
    .exp-image-wrapper img, .exp-image-inner img {
      width: 100%;
      height: auto;
      display: block;
      object-fit: contain;
    }
    
    .exp-image-placeholder {
      color: #64748b;
      font-size: 0.8rem;
      text-align: center;
      padding: 10px;
      font-family: 'Inter', sans-serif;
    }
    
    .hidden-img {
      display: none !important;
    }

    /* Responsive cho màn hình nhỏ */
    @media (max-width: 950px) {
      .exp-layout {
        flex-direction: column;
      }
      .exp-tabs {
        width: 100%;
      }
      .exp-content-panel {
        width: 100%;
        padding: 25px;
      }
      .exp-content-item.active {
        flex-direction: column;
      }
      .exp-image-section {
        width: 100%;
        flex-direction: row;
        height: auto;
        gap: 15px;
      }
      .exp-image-wrapper.single {
        width: 100%;
        max-width: 320px;
        height: auto;
        margin: 0 auto;
      }
      .exp-image-wrapper.double {
        flex-direction: row;
        width: 100%;
        max-width: 600px;
        height: auto;
        margin: 0 auto;
        gap: 15px;
      }
      .exp-image-inner {
        height: auto;
        flex: 1;
      }
    }
  `;

  return (
    <section id="experience" className={className}>
      <style>{styles}</style>
      
      <div className="container-inner scrollable-content exp-container" style={{ maxWidth: '1200px' }}>
        <h2 style={{ 
          fontFamily: '"Montserrat", sans-serif', 
          fontWeight: 800, 
          fontSize: '2.5rem', 
          marginBottom: '20px',
          background: 'linear-gradient(90deg, #00E5FF, #FF8C00)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'inline-block'
        }}>
          EXPERIENCE
        </h2>
        
        <div className="exp-layout">
          {/* CỘT TRÁI */}
          <div className="exp-tabs">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className={`exp-tab ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <div className="exp-tab-company">{exp.company}</div>
                <div className="exp-tab-position">{exp.position}</div>
              </div>
            ))}
          </div>

          {/* CỘT PHẢI */}
          <div className="exp-content-panel">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id} 
                className={`exp-content-item ${activeTab === index ? 'active' : ''}`}
              >
                <div className="exp-text-section">
                  <h3 className="exp-content-title">{exp.title}</h3>
                  <div className="exp-divider"></div>
                  <ul className="exp-bullets">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="exp-image-section">
                  {exp.images.length === 1 ? (
                    <div className="exp-image-wrapper single">
                       <img 
                          src={exp.images[0].startsWith('http') ? exp.images[0] : `/${exp.images[0]}`} 
                          alt={exp.title} 
                          referrerPolicy="no-referrer"
                          onError={(e) => {
                             e.currentTarget.classList.add('hidden-img');
                             e.currentTarget.nextElementSibling?.classList.remove('hidden-img');
                          }} 
                       />
                       <div className="exp-image-placeholder hidden-img">
                          [Image Placeholder]<br/><br/>{exp.images[0]}
                       </div>
                    </div>
                  ) : (
                    <div className="exp-image-wrapper double">
                      {exp.images.map((img, i) => (
                        <div key={i} className="exp-image-inner">
                           <img 
                              src={img.startsWith('http') ? img : `/${img}`} 
                              alt={`${exp.title} ${i}`} 
                              referrerPolicy="no-referrer"
                              onError={(e) => {
                                 e.currentTarget.classList.add('hidden-img');
                                 e.currentTarget.nextElementSibling?.classList.remove('hidden-img');
                              }} 
                           />
                           <div className="exp-image-placeholder hidden-img">
                              [Image Placeholder]<br/><br/>{img}
                           </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

