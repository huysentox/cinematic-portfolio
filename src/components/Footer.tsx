import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onBackToTop: () => void;
}

export default function Footer({ onBackToTop }: FooterProps) {
  return (
    <footer className="bg-[#FFFFFF] border-t border-gray-50 py-12 px-8 relative z-10" id="footer-section">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Footer text */}
        <p className="text-xs sm:text-sm text-[#6F6F6F] tracking-wide text-center md:text-left select-none leading-relaxed">
          © 2026 Tran Quoc Huy. Building people, systems and digital experiences.
        </p>

        {/* Back to top click trigger */}
        <button
          onClick={onBackToTop}
          className="group flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-black hover:text-[#6F6F6F] transition-colors focus:outline-none cursor-pointer"
          id="btn-back-to-top"
          aria-label="Back to top"
        >
          <span>Back to top</span>
          <div className="p-1.5 bg-gray-50 rounded-full group-hover:bg-black group-hover:text-white transition-colors">
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </div>
        </button>

      </div>
    </footer>
  );
}
