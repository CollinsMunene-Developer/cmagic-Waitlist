import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { contentlogo, stars } from "../assets/icons/moreicons/moreicons";
import { groupimg } from "../assets/images/Background/background";
import "../css/cloudmagic.webflow.css";
import "../css/normalize.css";
import "../css/webflow.css";

const SuccessPage = () => {
  return (
    <div className="body">
      <nav className="nav">
        <Link href="/" className="brand-nav w-inline-block">
          <Image
            src={contentlogo}
            alt=""
            className="brand-image"
            width={665}
            height={50}
            sizes="(max-width: 479px) 42vw, (max-width: 991px) 16vw, 10vw"
          />
        </Link>
      </nav>
      <div className="success-hero">
        <div className="success-wrapper">
          <Image
            src={stars}
            alt=""
            className="star-ratings"
            width={100}
            height={30}
          />
          <div className="success-p-wrapper">
            <p className="body-paragraph success">
              Thank you for joining the waitlist. We'll keep you posted on
              development. <br />
              <br />
              Visit our canny page to request and vote for your favorite
              features.
            </p>
          </div>
          <div className="button-wrapper">
            <Link href="https://canny.io/" className="tab-next success w-button">
              Visit Canny
            </Link>
            <Link href="/" className="tab-next success w-button">
              Back Home
            </Link>
          </div>
          <div className="user">
            <Image
              src={groupimg}
              alt=""
              className="user-image"
              width={50}
              height={50}
            />
            <div className="user-details">
              <div className="user-name">James Connor</div>
              <div className="user-role">Product Designer, Cloudmagic</div>
            </div>
          </div>
        </div>
      </div>
      <Script
        src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=66f296cbd1b2dcd094e9034a"
        strategy="afterInteractive"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossOrigin="anonymous"
      />
    </div>
  );
};

export default SuccessPage;
