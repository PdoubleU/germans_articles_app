const font = {
  xs: '.6rem',
  sm: '.8rem',
  md: '1.2rem',
  lg: '1.8rem',
};

const margins = {
  xs: '.2rem',
  sm: '.4rem',
  md: '.8rem',
  lg: '1.1rem',
};

const visibility = {
  none: 'hidden',
  visible: 'visible',
};

export const lightTheme = {
  visibility: {
    none: visibility.none,
    visible: visibility.visible,
  },
  body: '#FFF',
  text: '#363537',
  wordCardText: '#FAFAFA',
  toggleBorder: '#FFF',
  background: '#363537',
  wordCardBackground: '#363537',
  backgroundHover: '#363537',
  textHover: '#FFF',
  fontSize: {
    xs: font.xs,
    sm: font.sm,
    md: font.md,
    lg: font.lg,
  },
  margin: {
    xs: margins.xs,
    sm: margins.sm,
    md: margins.md,
    lg: margins.lg,
  },
};

export const darkTheme = {
  visibility: {
    none: visibility.none,
    visible: visibility.visible,
  },
  body: '#363537',
  text: '#FAFAFA',
  wordCardText: '#363537',
  toggleBorder: '#6B8096',
  background: '#999',
  wordCardBackground: '#FFF',
  backgroundHover: '#FAFAFA',
  textHover: '#363537',
  fontSize: {
    xs: font.xs,
    sm: font.sm,
    md: font.md,
    lg: font.lg,
  },
  margin: {
    xs: margins.xs,
    sm: margins.sm,
    md: margins.md,
    lg: margins.lg,
  },
};
