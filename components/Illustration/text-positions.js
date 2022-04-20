const positions = [
  // Side A
  { pos: [-2, 2, 2], letter: "r" },
  { pos: [-1, 2, 2], letter: "e" },
  { pos: [0, 2, 2], letter: "c" },
  { pos: [1, 2, 2], letter: "u" },
  { pos: [2, 2, 2], letter: "r" },

  { pos: [-2, 1, 2], letter: "r" },
  { pos: [-1, 1, 2], letter: "e" },
  { pos: [0, 1, 2], letter: "c" },
  { pos: [1, 1, 2], letter: "u" },
  { pos: [2, 1, 2], letter: "r" },

  { pos: [-2, 0, 2], letter: "r" },
  { pos: [-1, 0, 2], letter: "e" },
  { pos: [0, 0, 2], letter: "c" },
  { pos: [1, 0, 2], letter: "u" },
  { pos: [2, 0, 2], letter: "r" },

  { pos: [-2, -1, 2], letter: "r" },
  { pos: [-1, -1, 2], letter: "e" },
  { pos: [0, -1, 2], letter: "c" },
  { pos: [1, -1, 2], letter: "u" },
  { pos: [2, -1, 2], letter: "r" },

  { pos: [-2, -2, 2], letter: "r" },
  { pos: [-1, -2, 2], letter: "e" },
  { pos: [0, -2, 2], letter: "c" },
  { pos: [1, -2, 2], letter: "u" },
  { pos: [2, -2, 2], letter: "r" },

  // Side B
  { pos: [2, 2, 1], letter: "s" },
  { pos: [2, 2, 0], letter: "i" },
  { pos: [2, 2, -1], letter: "v" },
  { pos: [2, 2, -2], letter: "e" },

  { pos: [2, 1, 1], letter: "s" },
  { pos: [2, 1, 0], letter: "i" },
  { pos: [2, 1, -1], letter: "v" },
  { pos: [2, 1, -2], letter: "e" },

  { pos: [2, 0, 1], letter: "s" },
  { pos: [2, 0, 0], letter: "i" },
  { pos: [2, 0, -1], letter: "v" },
  { pos: [2, 0, -2], letter: "e" },

  { pos: [2, -1, 1], letter: "s" },
  { pos: [2, -1, 0], letter: "i" },
  { pos: [2, -1, -1], letter: "v" },
  { pos: [2, -1, -2], letter: "e" },

  { pos: [2, -2, 1], letter: "s" },
  { pos: [2, -2, 0], letter: "i" },
  { pos: [2, -2, -1], letter: "v" },
  { pos: [2, -2, -2], letter: "e" },

  // Side C
  { pos: [-2, 2, -2], letter: "r" },
  { pos: [-1, 2, -2], letter: "s" },
  { pos: [0, 2, -2], letter: "i" },
  { pos: [1, 2, -2], letter: "v" },

  { pos: [-2, 1, -2], letter: "r" },
  { pos: [-1, 1, -2], letter: "s" },
  { pos: [0, 1, -2], letter: "i" },
  { pos: [1, 1, -2], letter: "v" },

  { pos: [-2, 0, -2], letter: "r" },
  { pos: [-1, 0, -2], letter: "s" },
  { pos: [0, 0, -2], letter: "i" },
  { pos: [1, 0, -2], letter: "v" },

  { pos: [-2, -1, -2], letter: "r" },
  { pos: [-1, -1, -2], letter: "s" },
  { pos: [0, -1, -2], letter: "i" },
  { pos: [1, -1, -2], letter: "v" },

  { pos: [-2, -2, -2], letter: "r" },
  { pos: [-1, -2, -2], letter: "s" },
  { pos: [0, -2, -2], letter: "i" },
  { pos: [1, -2, -2], letter: "v" },

  //Side D
  { pos: [-2, 2, 1], letter: "e" },
  { pos: [-2, 2, 0], letter: "c" },
  { pos: [-2, 2, -1], letter: "u" },

  { pos: [-2, 1, 1], letter: "e" },
  { pos: [-2, 1, 0], letter: "c" },
  { pos: [-2, 1, -1], letter: "u" },

  { pos: [-2, 0, 1], letter: "e" },
  { pos: [-2, 0, 0], letter: "c" },
  { pos: [-2, 0, -1], letter: "u" },

  { pos: [-2, -1, 1], letter: "e" },
  { pos: [-2, -1, 0], letter: "c" },
  { pos: [-2, -1, -1], letter: "u" },

  { pos: [-2, -2, 1], letter: "e" },
  { pos: [-2, -2, 0], letter: "c" },
  { pos: [-2, -2, -1], letter: "u" },

  // top
  { pos: [-1, 2, 1], letter: "c" },
  { pos: [0, 2, 1], letter: "u" },
  { pos: [1, 2, 1], letter: "r" },

  { pos: [-1, 2, 0], letter: "u" },
  { pos: [0, 2, 0], letter: "r" },
  { pos: [1, 2, 0], letter: "s" },

  { pos: [-1, 2, -1], letter: "r" },
  { pos: [0, 2, -1], letter: "s" },
  { pos: [1, 2, -1], letter: "i" },

  // bottom
  { pos: [-1, -2, 1], letter: "c" },
  { pos: [0, -2, 1], letter: "u" },
  { pos: [1, -2, 1], letter: "r" },

  { pos: [-1, -2, 0], letter: "u" },
  { pos: [0, -2, 0], letter: "r" },
  { pos: [1, -2, 0], letter: "s" },

  { pos: [-1, -2, -1], letter: "r" },
  { pos: [0, -2, -1], letter: "s" },
  { pos: [1, -2, -1], letter: "i" },
];

export default positions;
