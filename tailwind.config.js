module.exports = {
  purge: {
    enabled: true,
    content: ["*.html"]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // prefix: 'tw-',

      backgroundImage: theme => ({
        "strong-base": "url('/assets/background_strong_base.png')",
        "strong-base-2": "url('/assets/180426_115327_party 1.png')",
        "product-support": "url('/assets/Rectangle 27.jpg')"
      }),
      zIndex: {
        "-1": "-1"
      },
      gridTemplateColumns: {
        '3': '0.125fr auto 0.1fr'
      },
      gridTemplateRows: {
        '6': 'repeat(6, minmax(0 , auto))'
      },
      maxWidth: {
        "2md": "780px",
        "3md": "980px",
        "2lg": "1180px"
      },
      inset:{
        "-0.25": "-0.0625rem"
      },
      fontFamily: {
        gilroy: ["Gilroy", "sans-serif"]
      },
      lineHeight: {
        "1/16": "1px"
      },
      spacing: {
        "15": "3.75rem"
      },
      padding: {
        "2.2": "0.533rem"
      },
      letterSpacing: {
        "ultra": "0.225rem",
        "ultra-wide": "0.32rem"
      },
      fontSize: {
        "2.5xl": "1.75rem",
        "7.5xl": "5rem",
        "7.6xl": "5.625rem"
      },
      width: {
        '15': "3.6425rem",
        "9.7":"2.375rem",
        '12.2': "3.125rem",
        "15": "3.75rem",
        "22.5": "5.625rem",
        "25": "6.25rem",
        "30": "7.5rem",
        "7.4": "1.825rem",
        "7.5": "1.8475rem",
        "7.6": "1.875rem",
        "73": "18.0625rem",
        "78": "19.394rem"
      },
      height: {
        "1.7": "0.4rem",
        "7.8": "1.285rem",
        "8.3": "2.1144rem",
        "12.2": "3.125rem",
        "15": "3.75rem",
        "22.5": "5.625rem",
        "25": "6.25rem",
        "30": "7.5rem",
        "66": "16.6875rem",
        "82": "21.9rem"
      },
      colors: {
        "radio-green": "#00FF00",
        black: {
          "pich-light": "#292D37",
          light: "#191723",
          lighter: "#3D3934",
          lighest: "#4B4955",
          DEFAULT: "#000000",
          dark: "#1C1B20",
          darker: "#0E171E",
          darkest: "#161616",
          "ultra-dark": "#090B10",
          star: "#302E3E"
        },
        ash: {
          "pich-light": "#F3F3F3",
          lightest: "#F6F6F7",
          lighter: "#F6F7F9",
          light: "#C8C4BE",
          transperant: "#C4C4C4",
          medium: "#E4E8F0",
          dark: "#DDDEE1",
          darker: "#808594"
        },
        blue: {
          lightest: "#BCEFEE",
          light: "#6A88F4",
          dark: "#1512A7"
        },
        red: {
          dark: "#A81F1F"
        },
        meroon: {
          dark: "#962C25",
          light: "#9B316A"
        },
        "sea-green": {
          light: "#58B9B7",
          medium: "#36A692",
        },
        green: {
          medium: "#739B31",
          light: "#0EFA6C",
          lighter: "#05DB05",
          dark: "#12AB14"
        },
        mustard: {
          medium: "#A89A1F"
        },
        orange: {
          light: "#FFA663",
          medium: "#9B8431",
          dark: "#FC852A"
        },
        yellow: {
          light: "#FFCF24",
          lighter: "#FFECA9",
          lightest: "#FFCF240",
        },
        "pale-yellow": {
          light: "#FAFF1B",
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
