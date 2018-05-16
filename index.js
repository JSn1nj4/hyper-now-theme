// Constants
const backgroundColor = '#000000';
const foregroundColor = '#cbcfd4';

// Colors


// Mapped Colors
const colors = {
  black: backgroundColor,
  red: '#ff69b4',
  green: '#61e078',
  yellow: '#f1ae13',
  blue: '#ae81ff',
  magenta: '#3f3f3f',
  cyan: '#ababab',
  white: '#ffffff',
  lightBlack: '#3f3f3f',
  lightRed: '#ababab',
  lightGreen: '#61e078',
  lightYellow: '#77c8f2',
  lightBlue: '#ff5b53',
  lightMagenta: '#ff69b4',
  lightCyan: '#f1ae13',
  colorCubes: '#ababab',
  grayscale: foregroundColor
};

// Additional Constants
const cursorColor = '#77c8f2';
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
        background-color: ${'#ff69b4'} !important;
        border-color: ${'#ff69b4'} !important;
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
        border-bottom: 2px solid ${'#f1ae13'};
      }
    `
  })
}
