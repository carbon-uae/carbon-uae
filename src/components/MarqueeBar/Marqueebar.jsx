import { FaStar, FaDiamond } from 'react-icons/fa6';
import './Marqueebar.css';

const LOGO = '/assets/carbon-logo-white.svg';

const items = [
  { icon: 'diamond', text: 'Commercial Printing' },
  { icon: 'star', text: 'Packaging Products' },
  { icon: 'diamond', text: 'Large Format Printing' },
  { icon: 'star', text: 'Screen Printing' },
  { icon: 'star', text: 'Digital & UV Printing' },
  { icon: 'diamond', text: 'Flexible Packaging' },
  { icon: 'star', text: 'POSM' },
  { icon: 'diamond', text: 'Gift & Promotion Items' },
  { icon: 'star', text: 'Signage & Outdoor Branding' },
  { icon: 'diamond', text: 'Custom Apparel & Uniform Printing' },
];

function MarqueeLap({ suffix = '' }) {
  return (
    <>
      <span className="marquee-logo-wrap">
        <img src={LOGO} alt="Carbon Printing Press LLC" className="marquee-logo" />
      </span>

      {items.map(({ icon, text }, i) => (
        <span key={`${suffix}-${i}`} className="marquee-item">
          {icon === 'star'
            ? <FaStar className="marquee-icon" />
            : <FaDiamond className="marquee-icon" />}
          {text}
        </span>
      ))}
    </>
  );
}

function MarqueeBar() {
  return (
    <div className="marquee-bar" aria-label="Promotions ticker">
      <div className="marquee-track">
        <MarqueeLap suffix="a" />
        <MarqueeLap suffix="b" />
      </div>
    </div>
  );
}

export default MarqueeBar;
