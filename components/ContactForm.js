import * as Constants from "common/constants";

import Button from "components/Button";

import { useState } from "react";
import { css, keyframes } from "@emotion/react";

const KEYFRAMES_SHOW_FORM = keyframes`
  from { 
    opacity: 0;
    transform: translateY(4rem);
    z-index: -1;
  }

  to {
    opacity: 1;
    transform: translateY(0);
    z-index: 100;
  }
`;

const KEYFRAMES_SHAKE_FORM = keyframes`
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`;

const STYLES_WRAPPER = ({ isSubmitTriggered }) => css`
  ${!isSubmitTriggered &&
  css`
    [data-show-form="true"] {
      animation: ${KEYFRAMES_SHOW_FORM} 0.8s cubic-bezier(0.23, 1, 0.32, 1.08)
        both;
    }
  `};

  [data-form-invalid="true"] {
    animation: ${KEYFRAMES_SHAKE_FORM} 0.8s cubic-bezier(0.23, 1, 0.32, 1.08)
      both;
  }
`;

const STYLES_FORM = ({ isFormActive, isSubmited }) => css`
  max-width: 35rem;
  opacity: 1;
  transform: translateY(0);
  position: absolute;
  top: 0;
  z-index: ${isFormActive && !isSubmited ? 100 : -1};
`;

const STYLES_INPUT_BASE = css`
  border: 1.5px solid ${Constants.colors.gray};
  border-radius: 10rem;
  font-family: Inter;
  font-size: 1.4rem;
  line-height: 1.7rem;
  padding: 1.2rem 1.2rem;
  resize: none;
  width: 100%;
  color: ${Constants.colors.black};

  :focus {
    outline: none;
    border: 1.5px solid ${Constants.colors.black100};
  }
`;

const STYLES_TEXTAREA = css`
  border-radius: 1.5rem;
`;

const STYLES_INPUT_WRAPPER = css`
  display: flex;
  align-items: center;
  margin-top: 2rem;

  input {
    margin-right: 2rem;
  }
`;

const STYLES_CONFIRMATION = ({ isSubmited }) => css`
  font-size: 1.6rem;
  line-height: 1.8rem;
  position: absolute;
  top: 0;
  opacity: 0;

  ${isSubmited &&
  css`
    animation: ${KEYFRAMES_SHOW_FORM} 0.8s cubic-bezier(0.23, 1, 0.32, 1.08)
      both;
  `};
`;

const ContactForm = ({ isFormActive }) => {
  const [hasError, setHasError] = useState(false);
  const [isSubmitTriggered, setIsSubmitTriggered] = useState(false);
  const [isSubmited, setIsSubmited] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitTriggered(true);

    const allValid = e.currentTarget.checkValidity();
    setHasError(!allValid);

    if (!allValid) {
      return;
    }

    const { message, email } = e.currentTarget;
    /* (TODO:daniel) handle form submission here */
    setIsSubmited(true);
  };

  return (
    <div css={STYLES_WRAPPER({ isSubmitTriggered })}>
      <p css={STYLES_CONFIRMATION({ isSubmited })}>
        Thank you for contacting Aide sales!
      </p>

      <form
        css={STYLES_FORM({ isFormActive, isSubmited })}
        onSubmit={handleSubmit}
        data-show-form={isFormActive}
        data-form-invalid={hasError}
        onAnimationEnd={() => setHasError(false)}
        noValidate
      >
        <textarea
          css={[STYLES_INPUT_BASE, STYLES_TEXTAREA]}
          placeholder="Tell us a bit about what you're working on..."
          rows={3}
          name="message"
          required
        />
        <div css={STYLES_INPUT_WRAPPER}>
          <input
            css={[STYLES_INPUT_BASE]}
            type="email"
            name="email"
            placeholder="Email address"
            required
          />
          <Button type="submit" text="Submit" />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
