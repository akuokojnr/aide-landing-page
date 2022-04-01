import * as Constants from "common/constants";

import { css } from "@emotion/react";

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

const STYLES_SECONDARY = css`
  border: 1px solid ${Constants.colors.gray100};
  background: linear-gradient(180deg, #fafafa 0%, #e8ecef 100%);
`;

const Button = ({ type, variant = "primary", text, iconRight }) => (
  <button
    type={type}
    css={[
      STYLES_BUTTON,
      variant === "secondary" ? STYLES_SECONDARY : STYLES_PRIMARY,
    ]}
  >
    <span>{text}</span>
    {iconRight}
  </button>
);

export default Button;
