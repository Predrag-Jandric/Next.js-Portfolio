"use client";

// next.js imports
import React from "react";
import Image from "next/image";

// animation imports
import { motion } from "framer-motion";
import { generalVariants } from "../animations";

// data for map method
const footerMap = [
  {
    linkUrl: "https://www.linkedin.com/in/predrag-jandric/",
    footerImageUrl: "/assets/all-social-icons/linkedIn.png",
  },
  {
    linkUrl: "https://github.com/Predrag-Jandric",
    footerImageUrl: "/assets/all-social-icons/github-footer.png",
  },
  {
    linkUrl: "https://www.youtube.com/@predragjandric/videos",
    footerImageUrl: "/assets/all-social-icons/youtube.png",
  },
];

function Footer() {
  return (
    <footer className="footer">
      <motion.section
        variants={generalVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="footer__wrapper"
      >
        <form
          className="footer__item footer__item__one"
          id="myform"
          action="https://formsubmit.co/predrag.jandric.bg@gmail.com"
          method="POST"
        >
          <h3 className="footer__title">Message Me</h3>

          {/* form input fields */}
          <input type="text" name="name" placeholder="Your name" required />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <textarea
            placeholder="Message"
            rows="5"
            cols="60"
            name="description"
            required
          ></textarea>

          {/* hidden form fields */}
          <input type="hidden" name="_subject" value="Portfolio message!" />
          <button className="btn__global footer__btn" type="submit">
            <span>Send</span>
          </button>
          <noscript>
            <input type="submit" value="Submit form!" />
          </noscript>

          {/* captcha disable and thank you page */}
          <input
            type="hidden"
            name="_next"
            value="https://www.predrag-jandric.com/thankYou.html"
          />
          <input type="hidden" name="_captcha" value="false" />
        </form>

        {/* footer call to action */}
        <article className="footer__item footer__item__two">
          <h3 className="footer__title">Get in Touch</h3>
          <p>
            Your feedback and insights are highly appreciated. If you&apos;d
            like to connect with me or explore more of my work, you can find me
            on LinkedIn, GitHub, and my YouTube channel. Thank you for visiting!
          </p>
          <p>
            My Email is:{" "}
            <a
              className="link__properties__global"
              href="mailto: predrag.jandric.bg@gmail.com"
            >
              predrag.jandric.bg@gmail.com
            </a>
          </p>

          <div className="footer__social icons__global">
            {/* mapping over "footerMap" to create link imgs */}
            {footerMap.map((item, index) => (
              <a
                key={index}
                href={item.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={item.footerImageUrl}
                  alt="image missing"
                  width={45}
                  height={45}
                />
              </a>
            ))}
          </div>
        </article>
      </motion.section>

      <a className="footer__toTop" href="#">
        To Top
      </a>
    </footer>
  );
}

export default Footer;
