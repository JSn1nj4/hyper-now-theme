// Constants
const backgroundColor = '#04090f';
const foregroundColor = '#cbcfd4';

// Colors


// Mapped Colors
const colors = {
  black: backgroundColor,
  red: '#de4f55',
  green: '#38dec9',
  yellow: '#f0c981',
  blue: '#81629e',
  magenta: '#dbbfe3',
  cyan: '#81629e',
  white: '#f2f2f2',
  lightBlack: '#596a86',
  lightRed: '#de4f55',
  lightGreen: '#38dec9',
  lightYellow: '#f0c981',
  lightBlue: '#81629e',
  lightMagenta: '#dbbfe3',
  lightCyan: '#81629e',
  colorCubes: '#fff',
  grayscale: foregroundColor
};

// Additional Constants
const cursorColor = '#f0c981';
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
        background-color: ${'#dbbfe3'} !important;
        border-color: ${'#dbbfe3'} !important;
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
        border-bottom: 2px solid ${'#81629e'};
      }
    `
  })
}
