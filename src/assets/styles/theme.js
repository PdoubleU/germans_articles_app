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

const colors = {
  body: '#FFF',
  bodyDark: '#363537',
  text: '#363537',
  textDark: '#FAFAFA',
  background: '#6B8096',
  toggleBorder: '#FFF',
};

const size = {
  auto: 'auto',
  max: '100%',
  none: '0',
};

export const lightTheme = {
  visibility: {
    none: visibility.none,
    visible: visibility.visible,
  },
  width: {
    auto: size.auto,
    none: size.none,
  },
  height: {
    auto: size.auto,
    none: size.none,
  },
  body: colors.body,
  text: colors.text,
  wordCardText: colors.textDark,
  toggleBorder: colors.body,
  background: colors.bodyDark,
  wordCardBackground: colors.bodyDark,
  backgroundHover: colors.textDark,
  textHover: colors.body,
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
  width: {
    auto: size.auto,
    none: size.none,
  },
  height: {
    auto: size.auto,
    none: size.none,
  },
  body: colors.bodyDark,
  text: colors.textDark,
  wordCardText: colors.text,
  toggleBorder: colors.toggleBorder,
  background: colors.background,
  wordCardBackground: colors.body,
  backgroundHover: colors.textDark,
  textHover: colors.text,
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
