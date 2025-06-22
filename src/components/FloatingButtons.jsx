const FloatingButtons = () => {
  return (
    <>
      {/* WhatsApp Button */}
      <a 
        href="https://api.whatsapp.com/send?phone=+966562444411" 
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="sign">
          <i className="fab fa-whatsapp"></i>
        </div>
        <div className="text">واتساب</div>
      </a>

      {/* Phone Button */}
      <a 
        href="tel:+966562444411" 
        className="phone_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="sign">
          <i className="fa-solid fa-phone-volume"></i>
        </div>
        <div className="text">إتصال مباشر</div>
      </a>
    </>
  );
};

export default FloatingButtons;

