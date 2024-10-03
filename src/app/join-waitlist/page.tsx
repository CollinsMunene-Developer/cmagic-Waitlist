"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { contentlogo } from "../assets/icons/moreicons/moreicons";
import {
  featuredicon1,
  featuredicon2,
  featuredicon3,
} from "../assets/icons/featuredicons/featuredicons";
import { background7 } from "../assets/images/Background/background";
import { mailimg } from "../assets/icons/icons";
import "../css/cloudmagic.webflow.css";
import "../css/normalize.css";
// import "../css/webflow.css";

const FormPage = () => {
  const router = useRouter();

  const [currentTab, setCurrentTab] = useState("Tab 1");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    country: "",
    companySize: "",
    role: "",
    usage: "",
  });

  useEffect(() => {
    // Initialize custom dropdowns and other client-side scripts here
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log(formData);
    // You might want to send this data to an API endpoint
    // If all fields are filled, submit the form
    if (Object.values(formData).every((field) => field !== "")) {
      try {
        //implementing api call to handle registration
        await fetch(
          "https://dev-cm-waitlist-api.kindwave-7b744f2c.northeurope.azurecontainerapps.io/api/Waitlist",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              //for using api-keys
              "x-api-key": "0e6e466522ec4540b13df26a762d71d3",
            },
            body: JSON.stringify(formData),
          }
        );
        // Redirect to a success page
        router.push("/success");
      } catch (error) {
        console.error("Error submitting form:", error);
        alert(
          "An error occurred while submitting the form. Please try again later."
        );
      }
      console.log("Form submitted:", formData);
    } else {
      alert(
        "You cannot join the waitlist until you have completed the form. Please ensure that you have completed all fields."
      );
    }
  };

  const nextTab = () => {
    if (currentTab === "Tab 1") setCurrentTab("Tab 2");
    if (currentTab === "Tab 2") setCurrentTab("Tab 3");
  };

  const previousTab = () => {
    if (currentTab === "Tab 3") setCurrentTab("Tab 2");
    if (currentTab === "Tab 2") setCurrentTab("Tab 1");
  };

  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo (Congo-Brazzaville)",
    "Costa Rica",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini (fmr. Swaziland)",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar (formerly Burma)",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Korea",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Korea",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  return (
    <div className="body">
      <div className="nav form-page">
        <Link href="/" className="brand-nav w-inline-block">
          <Image
            src={contentlogo}
            alt=""
            width={200}
            height={30}
            className="brand-image"
            loading="lazy"
            sizes="(max-width: 479px) 42vw, (max-width: 991px) 16vw, 10vw"
          />
        </Link>
      </div>
      <div className="tab-form-wrapper">
        <div className="form-block w-form">
          <form onSubmit={handleSubmit} className="form">
            <div className="tabs w-tabs">
              <div className="tabs-menu w-tab-menu">
                <a
                  onClick={() => setCurrentTab("Tab 1")}
                  className={`tab-form w-inline-block w-tab-link ${
                    currentTab === "Tab 1" ? "w--current" : ""
                  }`}
                >
                  <div className="tab-details">
                    <div className="tab-image-progress">
                      <Image
                        src={featuredicon3}
                        alt=""
                        width={24}
                        height={24}
                        className="tab-image"
                      />
                      <div className="progress-line hide"></div>
                    </div>
                    <div className="tab-details-text">
                      <div className="tab-header"> Your details</div>
                      <p className="body-paragraph small grey">
                        Provide your name and email
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  onClick={() => setCurrentTab("Tab 2")}
                  className={`tab-form w-inline-block w-tab-link ${
                    currentTab === "Tab 2" ? "w--current" : ""
                  }`}
                >
                  <div className="tab-details">
                    <div className="tab-image-progress">
                      <Image
                        src={featuredicon2}
                        alt=""
                        width={24}
                        height={24}
                        className="tab-image"
                      />
                      <div className="progress-line hide"></div>
                    </div>
                    <div className="tab-details-text">
                      <div className="tab-header">Company & Country</div>
                      <p className="body-paragraph small grey">
                        Provide additional details
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  onClick={() => setCurrentTab("Tab 3")}
                  className={`tab-form w-inline-block w-tab-link ${
                    currentTab === "Tab 3" ? "w--current" : ""
                  }`}
                >
                  <div className="tab-details">
                    <div className="tab-image-progress">
                      <Image
                        src={featuredicon1}
                        alt=""
                        width={24}
                        height={24}
                        className="tab-image"
                      />
                    </div>
                    <div className="tab-details-text">
                      <div className="tab-header">Role & Usage</div>
                      <p className="body-paragraph small grey">
                        Provide role and usage details
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="tabs-content w-tab-content">
                {currentTab === "Tab 1" && (
                  <div className="tab-pane-tab-1 w-tab-pane w--tab-active">
                    <div className="tab-content-wrapper">
                      <div className="form-container">
                        <div className="form-header-wrapper">
                          <div className="form-header">
                            <h2 className="heading-2">Your details</h2>
                            <p className="body-paragraph medium grey">
                              Please provide your name and email.
                            </p>
                          </div>
                        </div>
                        <div className="form-fields">
                          <div className="field-text">First name</div>
                          <div className="ff-wrapper">
                            <input
                              className="field-label w-input"
                              name="firstName"
                              placeholder="Enter your first name"
                              type="text"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="form-fields">
                          <div className="field-text">Last Name</div>
                          <div className="ff-wrapper">
                            <input
                              className="field-label w-input"
                              name="lastName"
                              placeholder="Enter your last name"
                              type="text"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="form-fields">
                          <div className="field-text">Email</div>
                          <div className="ff-wrapper">
                            <input
                              className="field-label w-input"
                              name="email"
                              placeholder="Enter your email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                        <a onClick={nextTab} className="tab-next w-button">
                          Next
                        </a>
                      </div>
                      <div className="image-form">
                        <Image
                          src={background7}
                          alt=""
                          width={3072}
                          height={2000}
                          className="form-image"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {currentTab === "Tab 2" && (
                  <div className=" w-tab-pane">
                    <div className="tab-content-wrapper">
                      <div className="form-container">
                        <div className="form-header-wrapper">
                          <div className="form-header">
                            <h2 className="heading-2">Company & Country</h2>
                            <p className="body-paragraph medium grey">
                              Please provide your company and country.
                            </p>
                          </div>
                        </div>
                        <div className="form-fields">
                          <div className="field-text">Company Name</div>
                          <div className="ff-wrapper">
                            <input
                              className="field-label w-input"
                              name="companyName"
                              placeholder="Enter your company name"
                              type="text"
                              value={formData.companyName}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="form-fields">
                          <div className="field-text">Country</div>
                          <div className="ff-wrapper field">
                            <select
                              id="Select-Country"
                              name="country"
                              value={formData.country}
                              onChange={handleInputChange}
                              required
                              className="fs-select_list-1"
                            >
                              <option value="">Select Country</option>
                              {countries.map((country, index) => (
                                <option key={index} value={country}>
                                  {country}
                                </option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div className="form-fields">
                          <div className="field-text">Company size</div>
                          <div className="ff-wrapper field">
                            <select
                              id="Company-size-2"
                              name="companySize"
                              value={formData.companySize}
                              onChange={handleInputChange}
                              required
                              className="field-label w-select"
                            >
                              <option value="">Select company size...</option>
                              <option value="0 -50">0 -50</option>
                              <option value="50 - 100">50 - 100</option>
                              <option value="100 - 200">100 - 200</option>
                              <option value="200 -500">200 -500</option>
                              <option value="500 +">500 +</option>
                            </select>
                          </div>
                        </div>
                        <div className="button-wrap">
                          <a
                            onClick={previousTab}
                            className="tab-previous w-button"
                          >
                            Back
                          </a>
                          <a onClick={nextTab} className="tab-next w-button">
                            Next
                          </a>
                        </div>
                      </div>
                      <div className="image-form">
                        <Image
                          src={background7}
                          alt=""
                          width={3072}
                          height={2000}
                          className="form-image"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {currentTab === "Tab 3" && (
                  <div className="tab-pane-tab-3 w-tab-pane">
                    <div className="tab-content-wrapper">
                      <div className="form-container">
                        <div className="form-header-wrapper">
                          <div className="form-header">
                            <h2 className="heading-2">Role & Usage</h2>
                            <p className="body-paragraph medium grey">
                              Please provide your role and usage details.
                            </p>
                          </div>
                        </div>
                        <div className="form-fields">
                          <div className="field-text">Role</div>
                          <div className="ff-wrapper field">
                            <select
                              id="Role-2"
                              name="role"
                              value={formData.role}
                              onChange={handleInputChange}
                              required
                              className="field-label w-select"
                            >
                              <option value="">Select your role</option>
                              <option value="Cloud Architect">
                                Cloud Architect
                              </option>
                              <option value="Cloud Engineer / Systems Engineers">
                                Cloud Engineer / Systems Engineers
                              </option>
                              <option value="DevOps Engineer">
                                DevOps Engineer
                              </option>
                              <option value="Software Developer">
                                Software Developer
                              </option>
                              <option value="Executive">Executive</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-fields">
                          <div className="field-text">Usage</div>
                          <div className="ff-wrapper field">
                            <select
                              id="Usage-2"
                              name="usage"
                              value={formData.usage}
                              onChange={handleInputChange}
                              required
                              className="field-label w-select"
                            >
                              <option value="">
                                How do you plan to use Cloudmagic?
                              </option>
                              <option value="Work">Work</option>
                              <option value="Personal">Personal</option>
                              <option value="Both">Both</option>
                            </select>
                          </div>
                        </div>
                        <div className="button-wrap">
                          <a
                            onClick={previousTab}
                            className="tab-previous w-button"
                          >
                            Back
                          </a>
                          <button
                            type="submit"
                            className="submit-button w-button"
                          >
                            Join waitlist!
                          </button>
                        </div>
                      </div>
                      <div className="image-form">
                        <Image
                          src={background7}
                          alt=""
                          width={3072}
                          height={2000}
                          className="form-image"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
      <footer className="footer-form-page">
        <div className="cc-right">© 2024 Shipht, Inc</div>
        <Link
          href="mailto:help@cloudmagic.dev"
          className="link-block w-inline-block"
        >
          <Image
            src={mailimg}
            alt=""
            width={24}
            height={24}
            className="email"
          />
          <div>help@cloudmagic.dev</div>
        </Link>
      </footer>
    </div>
  );
};

export default FormPage;
