import React from "react";
import Image from "next/image";
import Link from "next/link";
import { contentlogo } from "../assets/icons/moreicons/moreicons";
import "../css/cloudmagic.webflow.css";
import "../css/normalize.css";
import "../css/webflow.css";

const TermsAndConditionsPage = () => {
  return (
    <div className="body">
      <div className="nav">
        <Link href="index.html" className="brand-nav w-inline-block">
          <Image
            src={contentlogo}
            loading="lazy"
            sizes="(max-width: 479px) 42vw, (max-width: 991px) 15vw, 10vw"
            alt=""
            className="brand-image"
            width={665}
            height={50}
          />
        </Link>
      </div>
      <div className="hero-top legal">
        <div className="container">
          <div className="header-wrapper">
            <div className="legal-header">Current as of 20 Jan 2024</div>
            <h1 className="heading legal">Terms and conditions</h1>
            <div className="hero-p-wrapper">
              <p className="body-paragraph legal">
                By accessing our website, you are agreeing to be bound by these
                terms of service, all applicable laws and regulations, and agree
                that you are responsible for compliance with any applicable
                local laws.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="legal-rich-text">
        <div className="container legal">
          <div className="rich-text-block w-richtext">
            <h1>1. Introduction</h1>
            <p>
              Welcome to cloudmagic-waitlist (&quot;we,&quot; &quot;our,&quot;
              or &quot;us&quot;). We are committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you visit our website [insert
              website URL] and any other media form, media channel, mobile
              website, or mobile application related or connected thereto
            </p>
            <p>
              By accessing or using our Site, you agree to this Privacy Policy.
              If you do not agree with the terms of this Privacy Policy, please
              do not access the Site.
            </p>
            <h2>2. Information We Collect</h2>
            <p>
              We may collect personal information that you voluntarily provide
              to us, including but not limited to:
            </p>
            <ul role="list">
              <li>
                <strong>Personal Identification Information:</strong> Name,
                email address, phone number, and other contact details.
              </li>
              <li>
                <strong>Payment Information:</strong> Credit card numbers,
                billing address, and other payment-related information.
              </li>
              <li>
                <strong>Usage Data:</strong> Information about how you use our
                website, such as your IP address, browser type, and access
                times.
              </li>
            </ul>
            <h2>3. How We Use Your Information</h2>
            <p>
              We may use the information we collect from you for various
              purposes, including:
            </p>
            <ul role="list">
              <li>To provide, operate, and maintain our website.</li>
              <li>To improve, personalize, and expand our website.</li>
              <li>To process transactions and manage your orders.</li>
              <li>
                To communicate with you, including for customer service,
                updates, and promotional purposes.
              </li>
              <li>
                To monitor and analyze usage and trends to improve your
                experience with the Site.
              </li>
              <li>
                To detect, prevent, and address technical issues or fraudulent
                activity.
              </li>
            </ul>
            <h2>4. Sharing Your Information</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal
              information to outside parties except in the following situations:
            </p>
            <ul role="list">
              <li>
                <strong>Service Providers:</strong> We may share your
                information with third-party vendors who assist us in operating
                our website, conducting our business, or servicing you.
              </li>
              <li>
                <strong>Legal Compliance:</strong> We may disclose your
                information when required by law or to respond to legal
                processes.
              </li>
              <li>
                <strong>Business Transfers:</strong> If we are involved in a
                merger, acquisition, or asset sale, your information may be
                transferred as part of that business transaction.
              </li>
            </ul>
            <h2>5. Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures
              to protect your personal information. While we strive to protect
              your personal information, no security system is impenetrable, and
              we cannot guarantee the security of our systems.
            </p>
            <h2>6. Third-Party Websites</h2>
            <p>
              Our Site may contain links to third-party websites. We are not
              responsible for the privacy practices or content of these
              websites. We encourage you to read the privacy policies of any
              third-party websites you visit.
            </p>
            <h2>7. Your Privacy Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding
              your personal information, including the right to access, correct,
              delete, or restrict the processing of your data. To exercise any
              of these rights, please contact us using the information below.
            </p>
            <h2>8. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track the
              activity on our Site and store certain information. You can
              instruct your browser to refuse all cookies or to indicate when a
              cookie is being sent.
            </p>
            <h2>9. Childrens Privacy</h2>
            <p>
              Our Site is not intended for use by children under the age of 13,
              and we do not knowingly collect personal information from children
              under 13. If we become aware that we have collected personal
              information from children under the age of 13 without verification
              of parental consent, we will take steps to remove that information
              from our servers.
            </p>
            <h2>10. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. Any changes
              will be posted on this page with an updated effective date. You
              are advised to review this Privacy Policy periodically for any
              changes.
            </p>
            <p>
              <strong>11. Contact Us</strong>
            </p>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <ul role="list">
              <li>
                <strong>Email:</strong> [Your Email Address]
              </li>
              <li>
                <strong>Phone:</strong> [Your Phone Number]
              </li>
              <li>
                <strong>Address:</strong> [Your Address]
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="legal-cta">
        <div className="cta-wrap">
          <h2 className="heading-2 cta">
            Fast, Hyperscale Container Infrastructure in Minutes
          </h2>
          <p className="body-paragraph legal">
            We are testing Cloudmagic, a service that helps you deploy
            cutting-edge container infrastructure for your Microservices – in
            minutes. Sign up for early access.
          </p>
          <Link href="join-waitlist" className="tab-next cta ">
            Join Waitlist
          </Link>
        </div>
      </div>
      <div className="footer">
        <div className="container-2">
          <div className="footer-lower">
            <div className="footer-logo-wrap">
              <Image
                src={contentlogo}
                loading="lazy"
                sizes="(max-width: 479px) 35vw, (max-width: 991px) 16vw, 10vw"
                alt=""
                className="footer-image"
                width={161}
                height={35}
              />
              <p className="body-paragraph-2 normal white">
                We are testing Cloudmagic, a service that helps you deploy
                cutting-edge container infrastructure for your Microservices –
                in minutes.{" "}
              </p>
            </div>
            <div className="footer-navigation">
              <div className="navigation-block">
                <div className="text-block-2">Legal</div>
                <div className="navigation">
                  <Link
                    href="/terms-and-conditions"
                    className="navigation-link w-inline-block w--current"
                  >
                    <div>Terms</div>
                  </Link>
                  <Link
                    href="/privacy-policy"
                    className="navigation-link w-inline-block"
                  >
                    <div>Privacy</div>
                  </Link>
                  <Link
                    href="/cookie-policy"
                    className="navigation-link w-inline-block"
                  >
                    <div>Cookies</div>
                  </Link>
                </div>
              </div>
              <div className="navigation-block">
                <div className="text-block-2">Contact</div>
                <div className="navigation">
                  <a
                    href="mailto:njavwa@caantin.com"
                    className="navigation-link w-inline-block"
                  >
                    <div>help@cloudmagic.dev</div>
                  </a>
                  <a
                    href="mailto:njavwa@caantin.com"
                    className="navigation-link w-inline-block"
                  >
                    <div>
                      Nairobi, Kenya
                      <br />
                      Ikigai, Westlands
                    </div>
                  </a>
                </div>
              </div>
              <div
                id="w-node-_6133e129-69fc-2ce6-1b85-5cc610993ee1-10993ebe"
                className="navigation-block center"
              >
                <div className="text-block-2">Social Media</div>
                <div className="navigation">
                  <a
                    href="https://www.linkedin.com/company/shipht/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="navigation-link w-inline-block"
                  >
                    <div>Linkedin</div>
                  </a>
                  <a
                    href="https://x.com/shipht_it"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="navigation-link w-inline-block"
                  >
                    <div>X / Twitter</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright">
            <p className="body-paragraph-2 normal white">
              © 2024 Shipht, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
