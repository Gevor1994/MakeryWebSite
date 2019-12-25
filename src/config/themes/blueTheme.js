const theme = {};

theme.name = 'blue';

theme.palette = {
  bgColor: [
    '#FFFFFF', // 0: Header tab color
    '#FFC72C', // 1: Main  color 
  ],

  topBar: [
    '#ffffff', // 0: Main text color
    '#ffd700', // 1: Orange text
    '#4d4d4d', // 2: Switch label color
    '#051a32', // 3: Profile select bg
  ],

  text: [
    '#000000', // 0: Footer
    '#434242', // 1: middle text style
    '#2C2C2C', // 2: Font color
    '#272727', // 3: Other text color
    '#656565', // 4: Footer text color
  ],

  border: [
    '#bbbcbc', // 0: grey border
  ],
};

theme.fontSizes = {
  star: '20px',
  dragIcon: '16px',
  arrow: '8px',
  xs: '14px',
  sm: '16px',
  md: '18px',
  xm: '24px',
  lg: '28px',
  xl: '110px',
};

theme.fonts = {
  primary: 'Roboto,Helvetica, Arial, Roboto, Liberation, DejaVu, Meera, Monaco',
};

theme.classes = {
  topbarDropdownMenu: 'topbar-dropdown-menu-default'
};

export default theme;
