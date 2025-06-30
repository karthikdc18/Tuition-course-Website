import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsApp = () => {
  const phoneNumber = '917348929927'; 

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-lg z-50 font-medium"
      title="Chat on WhatsApp"
    >
      <FaWhatsapp size={20} />
      WhatsApp
    </a>
  );
};

export default WhatsApp;
