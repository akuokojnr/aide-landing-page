import * as Constants from "common/constants";

import { css, keyframes } from "@emotion/react";

const STYLES_BUTTON = css`
  border: none;
  border-radius: 10rem;
  cursor: pointer;
  padding: 0.8rem 2rem;
  font-family: Inter;
  font-size: 1.4rem;
  line-height: 1.7rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  user-select: none;
`;

const STYLES_PRIMARY = css`
  border: 1px solid ${Constants.colors.gray200};
  background: transparent;
  color: ${Constants.colors.gray300};
`;

const KEYFRAMES_SECONDARY_BUTTON = keyframes`
  0% {
		background-position: 0% 50%;
	}

	50% {
		background-position: 100% 50%;
	}

	100% {
		background-position: 0% 50%;
	}
`;

const STYLES_SECONDARY = css`
  border: 1px solid transparent;
  background: linear-gradient(45deg, #f83a3a 10%, #f13dd4 50%, #7000ff 90%);
  background-size: 400% 400%;
  animation: ${KEYFRAMES_SECONDARY_BUTTON} 12s ease infinite;
  color: ${Constants.colors.white};

  svg path {
    fill: ${Constants.colors.white};
  }
`;

const STYLES_ICONS = css`
  position: relative;
  display: inline-block;
  width: 1.6rem;
  height: 1.6rem;

  svg {
    position: absolute;
    right: 0;
  }
`;

const Button = ({ type, variant = "primary", text, iconRight, STYLES }) => (
  <button
    type={type}
    css={[
      STYLES_BUTTON,
      variant === "secondary" ? STYLES_SECONDARY : STYLES_PRIMARY,
      STYLES,
    ]}
  >
    <span>{text}</span>

    {/* (NOTE: daniel) Rendering multiple icons instead of one will require custom styling via the STYLES prop */}
    {Array.isArray(iconRight) ? (
      <span css={STYLES_ICONS}>{iconRight}</span>
    ) : (
      iconRight
    )}
  </button>
);

export default Button;
