"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { contentlogo, azure, amazonicon } from "./assets/icons/moreicons/moreicons";
import {playbutton} from "./assets/icons/icons"
import "./css/cloudmagic.webflow.css"
import "./css/normalize.css"
import "./css/webflow.css"



export default function Home() {
  const router = useRouter();



  const handleJoinWaitlist = () => {
    router.push("/join-waitlist");
  };

  return (
    <div className="body">
      <nav className="nav">
        <Link href="/" className="brand-nav w-inline-block">
          <Image
            src={contentlogo}
            alt=""
            className="brand-image"
            width={665}
            height={30}
          />
        </Link>
      </nav>
      <div className="hero-top">
        <div className="container">
          <div className="header-wrapper">
            <h1 className="heading">
              Fast, Hyperscale
              <br />
              Container Infrastructure <br />
              <span className="blue">in Minutes</span>
            </h1>
            <div className="hero-p-wrapper">
              <p className="body-paragraph">
                We&apos;re testing Cloudmagic, a service that helps you deploy
                cutting-edge container infrastructure for your Microservices –
                in minutes. <br />
                <br />
                Sign up for early access.
              </p>
            </div>
            <div className="hero-button-wrapper">
              <Link href="/join-waitlist" className="button w-button">
              Join Waitlist

              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bg-wrapper"></div>
        <div className="container auto">
          <div className="video-wrapper">
            <a href="#" className="w-inline-block w-lightbox" >
              <Image
                src={playbutton}
                alt=""
                className="play-image"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="client">
        <div className="container">
          <div className="client-wrapper">
            <div className="text-block">Deploy to your favorite cloud</div>
            <div className="w-layout-grid client-image-grid">
              <div
                id="w-node-_782e7c2e-0d6a-f1db-6204-e5cb059b2a64-94e90351"
                className="image-wrap"
              >
                <Image
                  src={azure}
                  alt=""
                  className="client-image"
                  width={200}
                  height={100}
                />
              </div>
              <div
                id="w-node-_43a2f9a2-cbd3-1de7-dab9-493cade4a36c-94e90351"
                className="image-wrap"
              >
                <Image
                  src={amazonicon}
                  alt=""
                  className="client-image"
                  width={200}
                  height={100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <div className="container-2">
          <div className="footer-lower">
            <div className="footer-logo-wrap">
              <Image
                src={contentlogo}
                alt=""
                className="footer-image"
                width={665}
                height={30}
              />
              <p className="body-paragraph-2 normal white">
                We&apos;re testing Cloudmagic, a service that helps you deploy
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
                    className="navigation-link w-inline-block"
                  >
                    <div>Terms</div>
                  </Link>
                  <Link
                    href="/privacy-policy"
                    className="navigation-link w-inline-block"
                  >
                    <div>Privacy</div>
                    <div className="footer-tag">New</div>
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
                    href="mailto:help@cloudmagic.dev"
                    className="navigation-link w-inline-block"
                  >
                    <div>help@cloudmagic.dev</div>
                  </a>
                  <div className="navigation-link w-inline-block">
                    <div>
                      Nairobi, Kenya
                      <br />
                      Ikigai, Westlands
                    </div>
                  </div>
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
      </footer>
    </div>
  );
}
