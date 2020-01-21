//--> Breakpoints
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const breakpoints: any = ['40em', '52em', '64em', '80em'];

// aliases
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

//--> Colors
const colors = {
  black: '#000e1a',
  white: '#fff',
  blue: '#007ce0',
  navy: '#004175',
  primary: '#ce1126',
  'primary/light': '#FAE9EB',
  secondary: '#303036',
  'secondary/light': '#f1f1f1',
  'secondary/mid': '#e9e9e9',
};

//--> Space
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

//--> FontSizes
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fontSizes: any = [12, 14, 16, 18, 20, 24, 32, 48, 72];

// aliases
fontSizes.S = fontSizes[0];
fontSizes.M = fontSizes[1];
fontSizes.HS = fontSizes[2];
fontSizes.HM = fontSizes[3];
fontSizes.HL = fontSizes[4];
fontSizes.HXL = fontSizes[5];

//--> LineHeight
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const lineHeights: any = [
  '16px',
  '18px',
  '20px',
  '22px',
  '24px',
  '28px',
  '46px',
  '52px',
  '76px',
];

// aliases
lineHeights.S = lineHeights[0];
lineHeights.M = lineHeights[1];
lineHeights.HS = lineHeights[2];
lineHeights.HM = lineHeights[3];
lineHeights.HL = lineHeights[4];
lineHeights.HXL = lineHeights[5];

//--> Shadows
const shadows = {
  light: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
  medium: '0px 0px 5px 0px rgba(0,0,0,0.75)',
  heavy: '0px 0px 5px 0px rgba(0,0,0,0.75)',
};

export default {
  breakpoints,
  colors,
  space,
  fontSizes,
  shadows,
  lineHeights,
};
