interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const menuItems = [
    { label: 'HOME', id: 'introduce' },
    { label: 'ABOUT', id: 'home' },
    { label: 'Experience', id: 'experience' },
    { label: 'Project', id: 'project' },
    { label: 'Skills', id: 'skills' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="top-nav">
      {menuItems.map(item => (
        <div
          key={item.id}
          className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
          onClick={() => onNavigate(item.id)}
        >
          {item.label}
        </div>
      ))}
    </nav>
  );
}

