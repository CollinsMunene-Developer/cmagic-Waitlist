 "use client"
import Image from "next/image";
import Link from "next/link";
import { contentlogo, stars } from "../assets/icons/moreicons/moreicons";
import { groupimg } from "../assets/images/Background/background";
import "../css/cloudmagic.webflow.css";
import "../css/normalize.css";
import "../css/webflow.css";

const SuccessPage = () => {
  const goToCannywebsite = () => {
    window.open("https://cloudmagic.canny.io/", "_blank");
  };
  return (
    <div className="body">
      <nav className="nav">
        <Link href="/" className="brand-nav">
          <Image
            src={contentlogo}
            alt=""
            className="brand-image"
            width={665}
            height={40}
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
            width={120}
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
            <a className="tab-next success" onClick={goToCannywebsite}>
              Visit Canny
            </a>
            <Link href="/" className="tab-next success">
              Back Home
            </Link>
          </div>
          <div className="user">
            <Image
              src={groupimg}
              alt=""
              className="user-image"
              width={80.08}
              height={80}
            />
            <div className="user-details">
              <div className="user-name">James Connor</div>
              <div className="user-role">Product Designer, Cloudmagic</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SuccessPage;
