import * as Constants from "common/constants";

import Button from "components/Button";

import { css } from "@emotion/react";

const STYLES_FORM = css`
  max-width: 35rem;
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

const ContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const { message, email } = e.currentTarget;
    // TODO(daniel): Do input validation here
  };

  return (
    <form css={STYLES_FORM} onSubmit={handleSubmit}>
      <textarea
        css={[STYLES_INPUT_BASE, STYLES_TEXTAREA]}
        placeholder="Tell us a bit about what you're working on..."
        rows={4}
        name="message"
      />
      <div css={STYLES_INPUT_WRAPPER}>
        <input
          css={[STYLES_INPUT_BASE]}
          type="email"
          name="email"
          placeholder="Email address"
        />
        <Button type="submit" text="Submit" />
      </div>
    </form>
  );
};

export default ContactForm;
