import * as Constants from "common/constants";
import * as SVG from "common/svg";

import Button from "components/Button";
import ContactForm from "components/ContactForm";
import Hash from "components/Hash";

import { useState } from "react";
import { css, keyframes } from "@emotion/react";

const STYLES_CONTAINER = css`
  padding: 6rem 1.5rem 2rem;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 1fr;
  align-items: center;
  min-height: 100vh;
  overflow-x: hidden;

  @media screen and (min-width: ${Constants.breakpoints.tablet}) {
    grid-template-columns: 3.8rem 1fr;
    grid-gap: 0 1.5rem;
    padding: 1.5rem;
  }
`;

const KEYFRAMES_HIDE_BUTTONS = keyframes`
  from { 
    opacity: 1;
    transform: translateY(0);
  }

  to {
    opacity: 0;
    transform: translateY(2rem);
  }
`;

const KEYFRAMES_SHOW_FORM = keyframes`
  from { 
    opacity: 0;
    transform: translateY(4rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
    z-index: 100;
  }
`;

const STYLES_SECTION = css`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  max-width: 1340px;
  margin-inline: auto;

  @media screen and (min-width: ${Constants.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 2fr);
  }

  [data-form-active="true"] {
    animation: ${KEYFRAMES_HIDE_BUTTONS} 0.8s cubic-bezier(0.23, 1, 0.32, 1.08)
      both;
  }

  [data-show-form="true"] {
    animation: ${KEYFRAMES_SHOW_FORM} 0.8s cubic-bezier(0.23, 1, 0.32, 1.08)
      both;
  }
`;

const KEYFRAMES_STATUS = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const STYLES_STATUS = css`
  color: ${Constants.colors.gray};
  font-size: 1.2rem;
  line-height: 1.4rem;
  font-weight: 500;
  border: 1.3px solid ${Constants.colors.gray};
  border-radius: 0.5rem;
  padding: 0.2rem 0.8rem;
  animation: ${KEYFRAMES_STATUS} 1s ease both 0.8s;
`;

const KEYFRAMES_TITLE = keyframes`
  from {
    opacity: 0;
    transform: scale(0.9);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const STYLES_TITLE_WRAPPER = css`
  padding: 3rem 0;
  animation: ${KEYFRAMES_TITLE} 0.8s ease;
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

const KEYFRAMES_BUTTON = keyframes`
  from {
    opacity: 0;
    transform: translateY(1rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const STYLES_BUTTONS = css`
  margin: 0 0 2rem;
  animation: ${KEYFRAMES_BUTTON} 0.8s linear 0.5s both;

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

const KEYFRAMES_CHEVRON = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(6px);
  }
`;

const KEYFRAMES_ARROW = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
    transform: translateX(4px);
  }
`;

const STYLES_GET_STARTED = css`
  [data-name="arrow-right"] {
    opacity: 0;
  }

  :hover {
    [data-name="chevron-right"] {
      animation: ${KEYFRAMES_CHEVRON} 0.3s ease both;
    }

    [data-name="arrow-right"] {
      animation: ${KEYFRAMES_ARROW} 0.3s ease both 0.05s;
    }
  }
`;

const STYLES_ILLUSTRATION_WRAPPER = css``;

const STYLES_USES_TITLE = css`
  font-size: 1.4rem;
  line-height: 1.8rem;
  font-weight: 600;
  color: ${Constants.colors.black100};
`;

const STYLES_USES = css`
  margin: 11rem 0 0;
  padding: 3rem 0;
  border-top: 1px solid ${Constants.colors.gray400};
`;

const STYLES_USE_WRAPPER = css`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin: 2.4rem 0 0;
`;

const KEYFRAMES_USES = keyframes`
  from {
    transform: translateX(10rem);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const STYLES_USE = ({ index }) => css`
  background: ${Constants.colors.gray500};
  border-radius: 10rem;
  padding: 0.5rem 1.2rem;
  display: flex;
  align-items: center;
  font-size: clamp(1.1rem, 0.4vw + 1rem, 1.4rem);
  line-height: 1.8rem;
  font-weight: 600;
  color: ${Constants.colors.black200};
  animation: ${KEYFRAMES_USES} 0.6s ease ${index * 0.25}s both;

  svg + span {
    margin-left: 0.8rem;
    display: inline-block;
  }

  svg {
    width: clamp(1.6rem, 0.5vw + 1.5rem, 2rem);
    height: clamp(1.6rem, 0.5vw + 1.5rem, 2rem);
  }

  svg.bag {
    width: clamp(1.2rem, 0.5vw + 1.1rem, 1.6rem);
    height: clamp(1.4rem, 0.5vw + 1.3rem, 1.8rem);
  }
`;

const STYLES_FOOTER = css`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0 3rem;
  padding-bottom: 2rem;

  @media screen and (min-width: ${Constants.breakpoints.tablet}) {
    grid-column: 2 / -1;
  }

  a {
    text-decoration: none;
  }

  a,
  span {
    font-size: clamp(1.1rem, 0.4vw + 1rem, 1.4rem);
    line-height: 1.5rem;
    font-weight: 500;
    color: ${Constants.colors.gray600};
    margin-top: 1rem;
  }
`;

const USES = [
  {
    text: "Search across internal tools",
    icon: <SVG.Sailboat />,
  },
  {
    text: "Intelligent suggestions",
    icon: <SVG.Stars />,
  },
  {
    text: "Share text snippets and responses",
    icon: <SVG.Snippet />,
  },
  {
    text: "Codify knowledge with processes",
    icon: <SVG.Puzzle />,
  },
  {
    text: "Connect your knowledge base",
    icon: <SVG.Library />,
  },
  {
    text: "Easily visualize and understand data",
    icon: <SVG.Kind />,
  },
  {
    text: "E-commerce actions",
    icon: <SVG.Bag className="bag" />,
  },
  {
    text: "Works with the tools you already use",
    icon: <SVG.Inbox />,
  },
  {
    text: "Turn multi-step operations into a single click",
    icon: <SVG.Hare />,
  },
  {
    text: "+ Lots more, coming soon.",
    icon: null,
  },
];

export default function Home() {
  const [isFormActive, setIsFormActive] = useState(false);

  const handleContactClick = () => {
    setIsFormActive(true);
  };

  return (
    <main css={STYLES_CONTAINER}>
      <Hash />

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

          <div style={{ position: "relative" }}>
            <div css={STYLES_BUTTONS} data-form-active={isFormActive}>
              <Button
                variant="secondary"
                text="Get started"
                STYLES={STYLES_GET_STARTED}
                iconRight={[
                  <SVG.ArrowRight
                    key="arrow-right"
                    name="arrow-right"
                    width="16px"
                    height="16px"
                  />,
                  <SVG.ChevronRight
                    key="chevron-right"
                    name="chevron-right"
                    width="16px"
                    height="16px"
                  />,
                ]}
              />
              <Button text="Sign in" />
              <p>
                or, <span onClick={handleContactClick}>contact sales</span>
              </p>
            </div>

            <ContactForm isFormActive={isFormActive} />
          </div>
          <div css={STYLES_USES}>
            <p css={STYLES_USES_TITLE}>
              Save time, reduce costs and increase both customer <em>and</em>{" "}
              agent happiness.
            </p>
            <div css={STYLES_USE_WRAPPER}>
              {USES.map(({ icon, text }, index) => (
                <div
                  key={`uses-${++index}`}
                  css={STYLES_USE({ index: ++index })}
                >
                  {icon}
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* (NOTE:daniel) Illustration goes */}
        <div css={STYLES_ILLUSTRATION_WRAPPER}></div>
      </section>

      <footer css={STYLES_FOOTER}>
        <span>&copy;Aide</span>
        <a href="#">Privacy & Terms</a>
        <a href="#">Twitter</a>
        <a href="#">Contact us</a>
      </footer>
    </main>
  );
}
