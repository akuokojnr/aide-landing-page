import * as Constants from "common/constants";
import * as SVG from "common/svg";

import Button from "components/Button";
import ContactForm from "components/ContactForm";

import { useState } from "react";
import { css } from "@emotion/react";

const STYLES_CONTAINER = css`
  max-width: 1340px;
  margin-inline: auto;
  padding: 1.5rem;
  display: grid;
  grid-template-rows: 1fr auto;
  align-items: center;
  min-height: 100vh;
`;

const STYLES_SECTION = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  align-items: center;
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

const STYLES_USE = css`
  background: ${Constants.colors.gray500};
  border-radius: 10rem;
  padding: 0.5rem 1.2rem;
  display: flex;
  align-items: center;
  font-size: clamp(1.1rem, 0.4vw + 1rem, 1.4rem);
  line-height: 1.8rem;
  font-weight: 600;
  color: ${Constants.colors.black200};

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
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0 3rem;
  padding-bottom: 2rem;

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

          <div css={STYLES_USES}>
            <p css={STYLES_USES_TITLE}>
              Save time, reduce costs and increase both customer <em>and</em>{" "}
              agent happiness.
            </p>
            <div css={STYLES_USE_WRAPPER}>
              {USES.map(({ icon, text }, index) => (
                <div key={`uses-${++index}`} css={STYLES_USE}>
                  {icon}
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* (NOTE:daniel) Illustration goes */}
        <div></div>
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
