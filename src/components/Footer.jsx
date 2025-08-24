
const Footer = () => {
  return (
<footer className="footer">
    <p className="footer__title">Basim K M</p>
    <div className="footer__social">
        {/* <!-- LinkedIn Icon --> */}
        <a href="https://www.linkedin.com/in/basim-km-525b85232/" className="footer__icon" target="_blank">
            <i className="fab fa-linkedin"></i>
        </a>
        
        {/* <!-- Email Icon --> */}
        <a href="mailto:basimkm555@gmail.com" className="footer__icon">
            <i className="fas fa-envelope"></i>
        </a>
        
        {/* <!-- Instagram Icon --> */}
        <a href="https://www.instagram.com/basim_km?igsh=MTFiNHB2eXZoNTYzbw==" className="footer__icon" target="_blank">
            <i className="fab fa-instagram"></i>
        </a>
        
        {/* <!-- Phone Icon (Call) --> */}
        <a href="tel:+917025949398" className="footer__icon">
            <i className="fas fa-phone"></i>
        </a>
    </div>
</footer>  )
}

export default Footer