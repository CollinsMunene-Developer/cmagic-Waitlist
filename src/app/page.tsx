"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  azure,
  amazonicon,
  googleimg,
  contentlogo,
} from "./assets/icons/moreicons/moreicons";
import { playbutton } from "./assets/icons/icons";
import "./css/cloudmagic.webflow.css";
import "./css/normalize.css";
import "./css/webflow.css";

// Spinner component
const Spinner = () => (
  <div className="spinner">
    <div className="spinner-inner"></div>
  </div>
);

export default function Home() {
  const router = useRouter();
  const [showVideo, setShowVideo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const videoDetails = {
    url: "https://youtube.com/watch?v=OcV4RI1UWM0",
    thumbnailUrl: "https://i.ytimg.com/vi/OcV4RI1UWM0/hqdefault.jpg",
    src: "https://www.youtube.com/embed/OcV4RI1UWM0?feature=oembed",
  };

  const handlePlayClick = () => {
    setIsLoading(true);
    // Simulate loading time
    setTimeout(() => {
      setShowVideo(true);
      setIsLoading(false);
    }, 2000);
  };

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
            className="play-imagecmagic logo"
            width={161}
            height={35}
          />
        </Link>
      </nav>
      <div className="hero-top">
        <div className="container">
          <div className="header-wrapper">
            <h1 className="heading">
              <span className="elastic">Elastic</span> <br />
              <span className="continfra-text">
                Container <strong>Infrastructure</strong> <br />
              </span>
              <span className="blue">in Minutes</span>
            </h1>
            <div className="hero-p-wrapper">
              <p className="body-paragraph">
                We're testing CLOUDMAGIC, a service that lets you deploy{" "}
                <em>autoscale container infrastructure</em> to your favorite
                cloud – in minutes. <br />
                <br />
                <span className="sign-up-text">
                  Sign up for early access.
                </span>
              </p>
            </div>
            <div className="hero-button-wrapper">
              <a
                className="button"
                onClick={handleJoinWaitlist}
                style={{ color: "#fff" }}
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="bg-wrapper"></div>
        <div className="container auto">
          <div className="video-wrapper">
            {showVideo ? (
              <iframe
                style={{width:"100%", height:"100%"}}
                src={videoDetails.src}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : isLoading ? (
              <Spinner />
            ) : (
              <a href="#" className="w-inline-block w-lightbox" onClick={handlePlayClick}>
                <Image
                  src={playbutton}
                  alt=""
                  loading="lazy"
                  className="play-image"
                />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="client">
        <div className="container">
          <div className="client-wrapper">
            <div className="text-block">Planned support for</div>
            <div className="w-layout-grid client-image-grid">
              {[
                { src: azure, alt: "Azure Logo" },
                { src: amazonicon, alt: "Amazon Logo" },
                { src: googleimg, alt: "Google Logo" },
              ].map((client, index) => (
                <div key={index} className="image-wrap">
                  <Image
                    src={client.src}
                    alt={client.alt}
                    className="client-image"
                    width={84}
                    height={84}
                  />
                </div>
              ))}
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
                className="play-imagecmagic logo"
                width={161}
                height={35}
              />
              <p className="body-paragraph-2 normal white">
                CLOUDMAGIC lets you deploy autoscale container infrastructure to
                your favorite cloud – in minutes.
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
                  </Link>
                  <Link
                    href="/cookie-policy"
                    className="navigation-link w-inline-block"
                  >
                    <div>Cookies</div>
                  </Link>
                </div>
              </div>
              <div
                id="w-node-_6133e129-69fc-2ce6-1b85-5cc610993ee1-10993ebe"
                className="navigation-block center"
              >
                <div className="text-block-2">Social Media</div>
                <div className="navigation">
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