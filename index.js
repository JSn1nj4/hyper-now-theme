// Constants
const backgroundColor = '#000000';
const foregroundColor = '#cbcfd4';

// Colors
const L_RED = '#ff5b53';
const MAGENTA = '#ff0080';
const L_MAGENTA = '#ff69b4';
const D_YELLOW = '#f1ae13';
const L_GREEN = '#61e078';
const L_CYAN = '#77c8f2';
const L_PURPLE = '#ae81ff';
const WHITE = '#ffffff';
const L_GRAY = '#ababab';
const D_GRAY = '#3f3f3f';

// Mapped Colors
const colors = {
  black: backgroundColor,
  red: MAGENTA,
  green: L_GREEN,
  yellow: D_YELLOW,
  blue: L_PURPLE,
  magenta: D_GRAY,
  cyan: L_GRAY,
  white: WHITE,
  lightBlack: D_GRAY,
  lightRed: L_MAGENTA,
  lightGreen: L_GREEN,
  lightYellow: D_YELLOW,
  lightBlue: L_RED,
  lightMagenta: L_MAGENTA,
  lightCyan: L_CYAN,
  colorCubes: L_GRAY,
  grayscale: foregroundColor
};

// Additional Constants
const CURSOR_COLOR = L_CYAN;
const borderColor = backgroundColor;

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    foregroundColor,
    backgroundColor,
    borderColor,
    cursorColor,
    colors,
    css: `
      ${config.css || ''}
      .cursor-node {
        background-color: ${L_MAGENTA} !important;
        border-color: ${L_MAGENTA} !important;
      }
      .hyper_main {
        border: none !important;
      }
      .header_header {
        background: ${backgroundColor} !important;
      }
      .splitpane_divider {
        background-color: rgba(130, 128, 184, 0.5) !important;
      }
      .tab_tab {
        border: 0;
      }
      .tab_textActive {
        border-bottom: 2px solid ${D_YELLOW};
      }
    `
  })
}
