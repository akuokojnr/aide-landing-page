import * as Constants from "common/constants";

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
  line-height: 3.6rem;
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

export default function Home() {
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
        </div>
      </section>
    </main>
  );
}
