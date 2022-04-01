import * as Constants from "common/constants";

import { css } from "@emotion/react";

const STYLES_HASH = css`
  grid-row: 1 / -1;
  width: 3.4rem;
  font-family: "Azeret Mono";
  font-size: 0.8rem;
  line-height: 0.8rem;
  font-weight: 400;
  max-height: calc(100vh - 3rem);
  overflow: hidden;
  display: none;
  color: ${Constants.colors.gray400};
  user-select: none;

  @media screen and (min-width: ${Constants.breakpoints.tablet}) {
    display: block;
  }
`;

const Hash = () => (
  <p css={STYLES_HASH}>
    OXXOOOOX OXXXOXOX OXXOOXXX OXXOXXOX OXXOOXOX OXXOXXXO OXXXOXOO OXXOXOOX
    OXXOXXXO OXXOOXXX OOXOOOOO OXXOXOOO OXXXOXOX OXXOXXOX OXXOOOOX OXXOXXXO
    OOXOOOOO OXXXOXXX OXXOXXXX OXXXOOXO OXXOXOXX OOXOOOOO OXXXOXXX OXXOXOOX
    OXXXOXOO OXXOXOOO OOXOOOOO OXXOXXOX OXXOOOOX OXXOOOXX OXXOXOOO OXXOXOOX
    OXXOXXXO OXXOOXOX OOXOOOOO OXXOXOOX OXXOXXXO OXXXOXOO OXXOOXOX OXXOXXOO
    OXXOXXOO OXXOXOOX OXXOOXXX OXXOOXOX OXXOXXXO OXXOOOXX OXXOOXOX OOXOXXXO
    OOXOOOOO OXXOXOXO OXXOXXXX OXXOXOOX OXXOXXXO OOXOOOOO OXXXOXOX OXXXOOXX
    OOXOOOOO OXXXOXOO OXXOXXXX OOXOOOOO OXXOOOXO OXXXOXOX OXXOXOOX OXXOXXOO
    OXXOOXOO OOXOOOOO OXXOOOOX OXXOXXXO OXXOOXOO OOXOOOOO OXXXOOXO OXXOOXOX
    OXXXOOXX OXXOOXOX OXXOOOOX OXXXOOXO OXXOOOXX OXXOXOOO OOXOOOOO OXXXOXXX
    OXXOXOOX OXXXOXOO OXXOXOOO OOXOOOOO OXXXOXOO OXXOXOOO OXXOXXXX OXXXOXOX
    OXXOOXXX OXXOXOOO OXXXOXOO OXXOOXXO OXXXOXOX OXXOXXOO OOXOOOOO OXXOOOXX
    OXXOXXXX OXXOXXOO OXXOXXOO OXXOOXOX OXXOOOOX OXXOOXXX OXXXOXOX OXXOOXOX
    OXXXOOXX OOXOOOOO OXXOOOXX OXXOOOOX OXXXOOXO OXXOOXOX OXXOOXOX OXXXOOXO
    OXXXOOXX OXOOOOOO OXXOOOOX OXXOXOOX OXXOOXOO OXXOOXOX OOXOXXXO OXXOOOOX
    OXXXOOOO OXXXOOOO
  </p>
);

export default Hash;