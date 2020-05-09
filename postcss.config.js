
module.exports = {
    plugins: [
      require('postcss-import')({
        plugins: [
          require('stylelint'),
        ]
      }),
      require('postcss-apply'),
      require('postcss-custom-selectors'),
      require('postcss-custom-media')({
        preserve: false,
      }),
    //   require('postcss-font-magician')({
    //     variants: {
    //       'Lato':{
    //         '300': [],
    //         '400': [],
    //       }
    //     }
    //   }),
      require('postcss-preset-env')({
        preserve: false,
        stage: 1,
      }),
      require('css-mqpacker'),
      require("cssnano")
    ]
  }