import React from 'react'

function Footer() {
  return (
    <footer className="footer" id="contactAnchor">
    <div className="footer__wrapper revealSectionJS">
        <form className="footer__item footer__item__one" id="myform" action="https://formsubmit.co/predrag.jandric.bg@gmail.com" method="POST">
            <h3 className="footer__title">Message Me</h3>
            <input type="text" name="name" placeholder="Your name" required />
            <input type="email" name="email" placeholder="Email Address" required />
            <textarea placeholder="Message" rows="5" cols="60" name="description" required></textarea>
            <input type="hidden" name="_subject" value="Portfolio message!" />
            <button className="btn__global footer__btn" type="submit"><span>Send</span></button>
            <noscript>
                <input type="submit" value="Submit form!" />
            </noscript>
            {/* captcha disable and thank you page */}
            <input type="hidden" name="_next" value="https://www.predrag-jandric.com/thankYou.html" />
            <input type="hidden" name="_captcha" value="false" />
        </form>

        <article className="footer__item footer__item__two">
            <h3 className="footer__title">Get in Touch</h3>
            <p>I would love to hear your feedback and opinion on it. If you want to connect with me or check out more of my work you can find me on LinkedIn, GitHub and my Youtube channel. Thank you for visiting!</p>
            <p>My Email is: <a id="link__properties__global" href="mailto: predrag.jandric.bg@gmail.com">predrag.jandric.bg@gmail.com</a></p>

            <article className="footer__social icons__global">
                <a href="https://www.linkedin.com/in/predrag-jandric/" target="_blank"><img src="assets/img/all-social-icons/linkedIn.png" alt="image missing" /></a>
                <a href="https://github.com/Predrag-Jandric" target="_blank"><img src="assets/img/all-social-icons/github-footer.png" alt="image missing" /></a>
                <a href="https://www.youtube.com/@predragjandric/videos" target="_blank"><img src="assets/img/all-social-icons/youtube.png" alt="image missing" /></a>
            </article>
        </article>
    </div>

    <div className="footer__copyright">
        <p className="footer__copyright__p">&copy; Copyright Predrag Jandric. All Rights Reserved</p>
        <a className="footer__copyright__a" href="#">To Top</a>
    </div>
</footer>

  )
}

export default Footer
