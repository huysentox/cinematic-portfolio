export default function HeroSection({ className }: { className?: string }) {
  return (
    <section id="home" className={className}>
      <div className="container-inner scrollable-content" style={{ maxWidth: 'none' }}>
        <div className="intro-content">
            <div className="intro-left">
                <h1 className="about-me-title-expanded">ABOUT ME</h1>
                
                <div className="about-me-desc-expanded">
                    <p>Tôi là sinh viên Thương mại điện tử tại VLSC với hơn 3 năm kinh nghiệm thực tế trong lĩnh vực kinh doanh, tuyển dụng, quản lý đội nhóm và phát triển nhân sự.</p>
                    <p style={{ marginTop: '10px' }}>Hành trình từ một nhân viên kinh doanh đến vị trí quản lý đã giúp tôi hiểu cách làm việc với con người, giải quyết vấn đề và tạo ra giá trị thông qua kinh doanh và công nghệ.</p>
                    <p style={{ marginTop: '10px' }}>Hiện tại, tôi tập trung phát triển trong lĩnh vực Thương mại điện tử, sáng tạo nội dung bằng AI và đổi mới số, đồng thời không ngừng nâng cao năng lực thực tế cho tương lai.</p>
                </div>

                <div className="goal-box-expanded">
                    <div className="goal-title-expanded" style={{ 
                        fontFamily: '"Montserrat", sans-serif',
                        fontWeight: 800,
                        fontSize: '1.8rem',
                        marginBottom: '8px', 
                        letterSpacing: '1px',
                        background: 'linear-gradient(90deg, #00E5FF, #FF8C00)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        display: 'inline-block'
                    }}>TRAJECTORY</div>
                    <div className="goal-text" style={{ color: '#F5F5F5', fontSize: '0.95rem', lineHeight: '1.6' }}>Mục tiêu của tôi là phát triển chuyên môn trong lĩnh vực Thương mại điện tử, Digital Marketing và sáng tạo nội dung bằng AI, đồng thời tạo ra những giá trị có thể đo lường được cho doanh nghiệp.</div>
                </div>
            </div>
            <div className="intro-right">
                <img 
                    src="https://i.postimg.cc/76YR3BcN/LEP03579.jpg" 
                    alt="Portrait" 
                    className="portrait-frame"
                />
            </div>
        </div>
      </div>
    </section>
  );
}
