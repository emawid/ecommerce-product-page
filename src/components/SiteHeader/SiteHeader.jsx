import menuIconUrl from '../../assets/icon-menu.svg';
import cartIcon from '../../assets/icon-cart.svg';
import avatar from '../../assets/image-avatar.png';
import logo from '../../assets/logo.svg';
import './SiteHeader.css';

const navItems = [
  { href: '#', label: 'Collections' },
  { href: '#', label: 'Men' },
  { href: '#', label: 'Women' },
  { href: '#', label: 'About' },
  { href: '#', label: 'Contact' },
];

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__left-group">
          <div className="site-header__left">
            <button type="button" className="site-header__menu-button">
              <img
                className="site-header__menu-button-icon"
                src={menuIconUrl}
                width={16}
                height={15}
                alt=""
                aria-hidden="true"
              />
            </button>
            <a
              href="/"
              className="site-header__logo"
              aria-label="Sneakers home">
              <img
                className="site-header__logo-icon"
                src={logo}
                alt="Company logo"
                width={137.5}
                height={20}
              />
            </a>
          </div>

          {/* conditioally render className for nav open/closed */}
          <nav className="site-header__nav text-preset-4" aria-label="Primary">
            <ul className="site-header__nav-lst">
              {navItems.map((item) => (
                <li className="site-header__nav-item" key={item.href}>
                  <a href={item.href} className="site-header__nav-link">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="site-header__right">
          <button
            className="site-header__cart-button"
            type="button"
            aria-label="Open cart">
            <img
              className="site-header__cart-icon"
              src={cartIcon}
              width={21.8}
              height={20}
              alt=""
              aria-hidden="true"
            />
            {/* Optional badge, render when cart >0 */}
            <span className="site-header__cart-badge" aria-hidden="true">
              0
            </span>
          </button>
          <a href="#" className="site-header__avatar-link">
            <img
              className="site-header__avatar"
              width={24}
              height={24}
              src={avatar}
              alt="Your account"
            />
          </a>
        </div>
      </div>
      {/* optional overlay */}
    </header>
  );
}
