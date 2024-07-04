export type FontWeight = "300" | "400" | "600";
export type FontFamily =
  | "SourceSansPro_300Light"
  | "SourceSansPro_400Regular"
  | "SourceSansPro_600SemiBold";
export type ThemeColors = Record<string, string>;
export type ThemeBorderRadiuses = Record<string, number>;
export type ThemeSpacing = Record<string, number>;
export type ThemeFontSizes = Record<string, number>;
export type ThemeFontWeights = Record<string, FontWeight>;
export type ThemeFontFamilies = Record<string, FontFamily>;

// TODO: use init colors

export const COLORS = {
  primary: "#009BAC",
  brand: "#404040",
  background: "#f0f2f2",
  border: "#DDDDDD",
  white: "#FFFFFF",
  error: "#ca0638",
  errorBackground: "#feeaea",
  info: "#009BAC",
  infoBackground: "#ebf5f7",
  success: "#74B84D",
  successBackground: "#f1f8ee",
  textInverted: "#FFFFFF",
  text: "#404040",
  disabled: "#B0B0B0", //#D3D3D3 #B0B0B0
  orange: "#FFC000",
  darkOrange: "#DAA520",
} as const satisfies ThemeColors;

export const SPACING = {
  x3s: 2,
  x2s: 4,
  x1s: 6,
  xs: 8,
  s: 12,
  m: 16,
  l: 24,
  xl: 32,
  x2l: 40,
  x3l: 50,
  xxl: 80,
} as const satisfies ThemeSpacing;

export const BORDER_RADIUSES = {
  xs: 1,
  s: 2,
  m: 3,
  l: 4,
  xl: 5,
  x2l: 8,
  x3l: 10,
  full: 100,
} as const satisfies ThemeBorderRadiuses;

export const FONT_SIZES = {
  x3s: 10,
  x2s: 12,
  xs: 13,
  s: 14,
  m: 16,
  l: 18,
  xl: 20,
  x2l: 24,
  x3l: 32,
  x4l: 36,
} as const satisfies ThemeFontSizes;

export const FONT_WEIGHTS = {
  light: "300",
  normal: "400",
  bold: "600",
} as const satisfies ThemeFontWeights;

// export const FONT_FAMILIES = {
//   sourceSansProLight: 'SourceSansPro_300Light',
//   sourceSansProRegular: 'SourceSansPro_400Regular',
//   sourceSansProSemiBold: 'SourceSansPro_600SemiBold',
// } as const satisfies ThemeFontFamilies;

export const TOUCHABLE_OPACITY = 0.7;
