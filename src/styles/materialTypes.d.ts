import * as createPalette from '@material-ui/core/styles/createPalette';
declare module '@material-ui/core/styles/createPalette' {
    interface PaletteOptions {    
        frequent?: {
          black: string,
          darkGrey: string,
          white: string,
          eggshell: string
        },
        tertiary?: {
          main: string
        }
        switchable?: any
    }
    interface Palette {
      frequent?: any,
      switchable?: any
    }
}