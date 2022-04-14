exports.config = {
    tests: './*_test.js',
    output: './output',
    helpers: {
        Playwright: {
            url: ' https://regression1x.unqork.io/#/display/5f7f2d59836274022f4c52a4',
            show: true,
            browser: 'firefox'
        }
    },
    include: {
        I: './steps_file.js'
    },
    bootstrap: null,
    mocha: {},
    name: 'codeceptJS'
}