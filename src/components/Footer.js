import React from "react";

import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

import { styled } from "@mui/material/styles";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer">
        <div className="footer-container">
          <div className="left">
            <div className="my-loc">
              <FaHome
                size={20}
                style={{
                  color: "white",
                  marginRight: "2rem",
                }}
              />
              <div>
                <p>Bangkok, Thailand</p>
              </div>
            </div>
            <div className="phone">
              <FaPhone
                size={20}
                style={{
                  color: "#fff",
                  marginRight: "2rem",
                }}
              />
              <p>+66 96-760-9099</p>
            </div>
            <div className="e-mail">
              <FaMailBulk
                size={20}
                style={{
                  color: "white",
                  marginRight: "2rem",
                }}
              />
              <p>michaelhunterbkk@gmail.com</p>
            </div>
          </div>

          <div className="right">
            <h4>About Me</h4>
            <p>
              My name is Michael Hunter and I'm an easy going person currently
              living abroad. I'm always happy to chat code, code and meet new
              people.
            </p>
            <div className="social">
              <a
                href="https://www.linkedin.com/in/michael-h-hunter/"
                className="linkedIn"
              >
                <FaLinkedin
                  size={30}
                  style={{
                    color: "#0e76a8",
                    marginRight: "1rem",
                  }}
                />
              </a>
              <a
                href="https://www.github.com/michaelhunter555"
                className="github"
              >
                <FaGithub
                  size={30}
                  style={{
                    color: "white",
                    marginRight: "1rem",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled("div")`
  .footer {
    width: 100%;
    padding: 6rem 0;
    background-color: rgba(19, 19, 19, 0.8);
  }

  .footer-container {
    max-width: 1140px;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
  }

  .left {
    height: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  .my-loc {
    display: flex;
    margin-bottom: 0.8rem;

    p {
      line-height: 30px;
      color: white;
    }
  }

  .phone {
    display: flex;
    margin-bottom: 0.8rem;

    p {
      line-height: 30px;
      color: white;
    }
  }
  .e-mail {
    display: flex;
    margin-bottom: 0.8rem;

    p {
      line-height: 30px;
      color: white;
    }
  }

  .right {
    height: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }

  .social {
    margin-top: 0.5rem;
  }

  h4 {
    font-size: 1.2rem;
    padding-bottom: 0.7rem;
    color: white;
  }

  p {
    font-size: 1.2rem;
    color: white;
  }

  @media screen and (max-width: 640px) {
    .footer-container {
      grid-template-columns: 1fr;
    }
  }
`;

export default Footer;
