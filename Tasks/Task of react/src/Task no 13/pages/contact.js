function Contact() {
  return (
    <>
      <div className="contact-us">
        <div className="contact-info"></div>
        <div className="text-field"></div>
      </div>
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Have a question or a project in mind? I'd love to hear from you. Let's chat and make something amazing together.</p>

            <div className="info-item">
              <span className="icon">
                <i className="fa fa-phone"></i>
              </span>

              <span>+1205 5872 321</span>
            </div>
            <div class="info-item">
              <span className="icon">
                <i className="fa fa-envelope"></i>
              </span>
              <span>contact@sarajonesdesign.com</span>
            </div>
            <div className="info-item">
              <span className="icon">
                <i className="material-icons">location_on</i>
              </span>
              <span>1234 Design Street, Creativeville, Webland, Imaginary State, 98765</span>
            </div>
            <div className="social-icons">
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-instagram"></i></a>
              <a href="#"><i className="fa fa-dribbble"></i></a>
              <a href="#"><i className="fa fa-facebook"></i></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
