import * as Constants from "common/constants";
import * as SVG from "common/svg";

import Button from "components/Button";
import ContactForm from "components/ContactForm";

import { useState } from "react";
import { css } from "@emotion/react";

const STYLES_CONTAINER = css`
  max-width: 1340px;
  margin-inline: auto;
  padding: 0 1.5rem;
`;

const STYLES_SECTION = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  align-items: center;
  min-height: 100vh;
`;

const STYLES_STATUS = css`
  color: ${Constants.colors.gray};
  font-size: 1.2rem;
  line-height: 1.4rem;
  font-weight: 500;
  border: 1.3px solid ${Constants.colors.gray};
  border-radius: 0.5rem;
  padding: 0.2rem 0.8rem;
`;

const STYLES_TITLE_WRAPPER = css`
  padding: 3rem 0;
`;

const STYLES_TITLE = css`
  font-size: clamp(2rem, 1.1vw + 1.8rem, 2.8rem);
  font-weight: 700;
  line-height: clamp(2.8rem, 1.1vw + 2.6rem, 3.6rem);
`;

const STYLES_SUBTITLE = css`
  background: linear-gradient(
    180deg,
    rgba(175, 175, 175, 1) 0%,
    rgba(213, 213, 213, 1) 75%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const STYLES_BUTTONS = css`
  margin: 0 0 2rem;

  button + button {
    margin: 0 0 0 0.6rem;
  }

  p {
    color: ${Constants.colors.gray300};
    font-weight: 500;
    font-size: 1.2rem;
    margin: 1.5rem 0 0 1.6rem;
    line-height: 1.2px;

    span {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export default function Home() {
  const [isFormActive, setIsFormActive] = useState(false);

  const handleContactClick = () => {
    setIsFormActive(true);
  };

  return (
    <main css={STYLES_CONTAINER}>
      <section css={STYLES_SECTION}>
        <div>
          <span css={STYLES_STATUS}>Beta</span>

          <div css={STYLES_TITLE_WRAPPER}>
            <h3 css={STYLES_TITLE}>A new day for customer support.</h3>
            <h3 css={[STYLES_TITLE, STYLES_SUBTITLE]}>
              Share knowledge <br /> Automate common tasks <br /> Better
              understand team productivity
            </h3>
          </div>

          <div css={STYLES_BUTTONS}>
            <Button
              variant="secondary"
              text="Get started"
              iconRight={
                <SVG.ChevronRight
                  width="16px"
                  height="16px"
                  color={Constants.colors.gray300}
                />
              }
            />
            <Button text="Sign in" />
            <p>
              or, <span onClick={handleContactClick}>contact sales</span>
            </p>
          </div>

          {isFormActive && <ContactForm />}
        </div>
      </section>
    </main>
  );
}
