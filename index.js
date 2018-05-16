// Constants
const BG_COLOR = '#000000';
const FG_COLOR = '#cbcfd4';

// Colors
const L_RED = '#ff5b53';
const MAGENTA = '#ff0080';
const L_MAGENTA = '#ff69b4';
const D_YELLOW = '#f1ae13';
const L_GREEN = '#61e078';
const L_CYAN = '#00e7c0';
const D_CYAN = '#287161';
const L_PURPLE = '#ae81ff';
const WHITE = '#ffffff';
const L_GRAY = '#ababab';
const D_GRAY = '#3f3f3f';

// Mapped Colors
const COLORS = {
  black: BG_COLOR,
  red: MAGENTA,
  green: L_GREEN,
  yellow: L_GRAY,
  blue: L_PURPLE,
  magenta: D_GRAY,
  cyan: L_CYAN,
  white: WHITE,
  lightBlack: D_GRAY,
  lightRed: L_MAGENTA,
  lightGreen: L_GREEN,
  lightYellow: D_YELLOW,
  lightBlue: L_RED,
  lightMagenta: L_MAGENTA,
  lightCyan: L_CYAN,
  colorCubes: L_GRAY,
  grayscale: FG_COLOR
};

// Additional Constants
const CURSOR_COLOR = L_CYAN;
const BORDER_COLOR = BG_COLOR;

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    ForegroundColor: FG_COLOR,
    BackgroundColor: BG_COLOR,
    borderColor: BORDER_COLOR,
    cursorColor: CURSOR_COLOR,
    colors: COLORS,
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
        background: ${BG_COLOR} !important;
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
  });
};
