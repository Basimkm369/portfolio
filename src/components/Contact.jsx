
const Contact = () => {
  return (
<section className="contact section" id="contact">
    <h2 className="section-title">Contact</h2>

    <div className="contact__container bd-grid">
        <div className="contact__details">
            {/* <!-- Phone with clickable tel link --> */}
            <p><i className="fas fa-phone-alt"></i> Phone: 
                <a href="tel:+917025949398">+91 7025949398</a>
            </p>
            {/* <!-- Email with clickable mailto link --> */}
            <p><i className="fas fa-envelope"></i> Email: 
                <a href="mailto:basimkm555@gmail.com">basimkm555@gmail.com</a>
            </p>
            {/* <!-- LinkedIn with clickable link --> */}
            <p><i className="fab fa-linkedin"></i> LinkedIn: 
                <a href="https://www.linkedin.com/in/basim-km-525b85232/" target="_blank">basim-km</a>
            </p>
            {/* <!-- Email Me button --> */}
            <a href="mailto:basimkm555@gmail.com" className="contact__email">Email Me</a>
        </div>
    </div>
</section>  )
}

export default Contact