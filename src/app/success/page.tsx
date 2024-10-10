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
    window.open("https://cloudmagic.canny.io/cmag", "_blank");
  };
  return (
    <div className="body">
      <nav className="nav">
        <Link href="/" className="brand-nav">
          <Image
            src={contentlogo}
            alt=""
            className="brand-image"
            width={161}
            height={35}
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
            style={{width:"7.25em", height:"1.2em"}}
          />
          <div className="success-p-wrapper">
            <p className="body-paragraph success">
            Thank you for joining the waitlist.We’ll keep you posted on
            development. <br /><br />Visit our canny page to request and vote
            for your favorite features. 
            </p>
          </div>
          <div className="button-wrap">
          <div className="button-wrapper">
            <a className="tab-next success " onClick={goToCannywebsite}>
              Visit Canny
            </a>

          </div>
          <div className="button-wrapper">
          <Link href="/" className="tab-next success">
            Back Home
            </Link>
          </div>
          </div>
          <div className="user">
            <Image
              src={groupimg}
              alt=""
              className="user-image"
              style={{width:"4.38em", height:"4.38em"}}
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
