import { injectGlobal } from 'styled-components'

// REFERENCING ALL COLOR VALUES IN A PALETTE

const palette = {
      shark: '#25272C',

      // BOOTSTRAP PALETTE //
      azureRadiance: '#007bff',
      greenHaze: '#01A368',
      cinnabar: '#E34234',
      easternBlueLight: '#1E9AB0',
      outerSpace: '#2D383A',
      paleSky: '#6E7783',
      iron: '#D4D5D9',
      athensGray: '#EEF0F3',
      fbfbfc: '#fbfbfc',

      // DH PALETTE //
      tuatara: '#363534',
}

// EXPORTING A FUNCTION-BASED COLOR PALETTE

export const colors = {
      palette,
      textColor: {
            default: palette.shark,
            grey: palette.paleSky,
            links: {
                  active: palette.azureRadiance,
                  disabled: palette.paleSky,
            },
            alert: {
                  primary: '#004085',
                  secondary: '#383d41',
                  success: '#155724',
                  danger: '#721c24',
                  warn: '#856404',
                  info: '#0c5460',
                  light: '#818182',
                  dark: '#1b1e21',
            },
            button: {
                  outline: {
                        primary: palette.azureRadiance,
                        secondary: palette.paleSky,
                        success: palette.greenHaze,
                        danger: palette.cinnabar,
                        warn: '#ffc107',
                        info: palette.easternBlueLight,
                        light: palette.athensGray,
                        dark: palette.outerSpace,
                        disabled: palette.iron,                        
                  }
            },
            positive: palette.greenHaze,
            negative: palette.cinnabar,
      },

      bgColor: {
            button: {
                  primary: palette.azureRadiance,
                  secondary: palette.paleSky,
                  success: palette.greenHaze,
                  danger: palette.cinnabar,
                  warn: '#ffc107',
                  info: palette.easternBlueLight,
                  light: palette.athensGray,
                  dark: palette.outerSpace,
                  disabled: palette.iron,
            },
            alert: {
                  primary: '#cce5ff',
                  secondary: palette.athensGray,
                  success: '#d4edda',
                  danger: '#f8d7da',
                  warn: '#fff3cd',
                  info: '#d1ecf1',
                  light: '#fefefe',
                  dark: '#d6d8d9',
            },
            background: {
                  fbfbfc: palette.fbfbfc,
                  athensGray: palette.athensGray,
                  iron: palette.iron,
                  outerSpace: palette.outerSpace,
            }
      },

      borderColor: {
            alert: {
                  primary: '#b8daff',
                  secondary: palette.iron,
                  success: '#c3e6cb',
                  danger: '#f5c6cb',
                  warn: '#ffeeba',
                  info: '#bee5eb',
                  light: '#fdfdfe',
                  dark: '#c6c8ca',
            },
            button: {
                  outline: {
                        primary: palette.azureRadiance,
                        secondary: palette.paleSky,
                        success: palette.greenHaze,
                        danger: palette.cinnabar,
                        warn: '#ffc107',
                        info: palette.easternBlueLight,
                        light: palette.athensGray,
                        dark: palette.outerSpace,
                        disabled: palette.iron,
                  }
            },
            aroundWhiteOrLightestGrey: palette.iron,
      },
}

// OVERRIDING SOME DEFAULT STYLES

// tslint:disable-next-line:no-unused-expression
injectGlobal`
      html {
            font-size: 10px;
            font-family: system-ui;
            color: ${colors.textColor.default};
      }

      body {
            margin: 0;
            background-color: ${colors.bgColor.background.athensGray};
      }

      * {
            box-sizing: border-box;
      }

      p {
            margin: 0;
      }
`