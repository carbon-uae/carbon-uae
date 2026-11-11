import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppFloat.css';

const WhatsAppFloat = () => (
  <a
    className="whatsapp-float"
    href="https://wa.me/971563766467"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Chat with us on WhatsApp"
  >
    <FaWhatsapp aria-hidden="true" />
  </a>
);

export default WhatsAppFloat;
