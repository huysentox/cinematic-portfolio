export default function IntroduceSection({ className }: { className?: string }) {
  return (
    <section id="introduce" className={className}>
      <div className="container-inner" style={{ height: '100%', display: 'flex', alignItems: 'center', maxWidth: '1300px' }}>
          <div className="hero-layout">
              <div className="text-outline">
                  <div data-text="TRAN">TRAN</div>
                  <div data-text="QUOC">QUOC</div>
                  <div data-text="HUY">HUY</div>
              </div>

              <div className="scene-3d">
                  <div className="phone-frame">
                      <div className="mac-dots">
                          <span></span><span></span><span></span>
                      </div>
                      
                      <img src="https://i.postimg.cc/k50q1VR6/IMG-0323.jpg" alt="Avatar" className="media-placeholder" />
                  </div>
              </div>

              <div className="text-solid">
                  <div>THƯƠNG</div>
                  <div>MẠI</div>
                  <div>ĐIỆN TỬ</div>
              </div>
          </div>
      </div>
    </section>
  );
}
