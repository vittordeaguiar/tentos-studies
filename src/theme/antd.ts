import type { ThemeConfig } from "antd";
import { theme } from "antd";

const { defaultAlgorithm } = theme;

const palette = {
  canvas: "#FAFAFA",
  surface: "#FFFFFF",
  surfaceMuted: "#F5F5F5",
  border: "#EAEAEA",
  borderMuted: "#F0F0F0",
  text: "#404040",
  textMuted: "#737373",
  heading: "#171717",
  primary: "#000000",
  success: "#10B981",
  warning: "#F59E0B",
  danger: "#EF4444",
};

export const appTheme: ThemeConfig = {
  algorithm: [defaultAlgorithm],
  cssVar: {
    prefix: "tentos",
  },
  token: {
    colorPrimary: palette.primary,
    colorInfo: palette.primary,
    colorLink: palette.primary,
    colorSuccess: palette.success,
    colorWarning: palette.warning,
    colorError: palette.danger,
    colorTextBase: palette.text,
    colorText: palette.text,
    colorTextSecondary: palette.textMuted,
    colorTextHeading: palette.heading,
    colorBgBase: palette.surface,
    colorBgContainer: palette.surface,
    colorBgElevated: palette.surface,
    colorBgLayout: palette.canvas,
    colorFillSecondary: palette.surfaceMuted,
    colorFillTertiary: "#FAFAFA",
    colorBorder: palette.border,
    colorBorderSecondary: palette.borderMuted,
    colorSplit: palette.borderMuted,
    borderRadius: 8,
    borderRadiusLG: 12,
    controlHeight: 40,
    controlOutlineWidth: 2,
    fontFamily:
      '"Inter", "Avenir Next", "Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    fontFamilyCode: '"SFMono-Regular", Consolas, "Liberation Mono", monospace',
    boxShadowSecondary: "0 10px 25px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(0, 0, 0, 0.02)",
  },
  components: {
    Layout: {
      bodyBg: palette.canvas,
      headerBg: "rgba(250, 250, 250, 0.85)",
      siderBg: palette.canvas,
      footerBg: "transparent",
      headerHeight: 64,
      headerPadding: "0 24px",
      footerPadding: "24px",
      triggerBg: palette.heading,
      triggerColor: "#ffffff",
    },
    Typography: {
      titleMarginTop: 0,
      titleMarginBottom: "0.35em",
    },
    Button: {
      primaryShadow: "0 2px 4px rgba(0, 0, 0, 0.08)",
    },
    Card: {
      boxShadowTertiary: "0 1px 3px rgba(0, 0, 0, 0.04)",
    },
    Menu: {
      itemSelectedBg: "rgba(0, 0, 0, 0.04)", // very gentle gray
      itemSelectedColor: palette.heading,
      itemHoverBg: "rgba(0, 0, 0, 0.02)",
      itemHoverColor: palette.heading,
      itemColor: palette.textMuted,
    },
  },
};
