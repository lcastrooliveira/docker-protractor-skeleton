exports.config = {
    seleniumAddress: 'http://selenium:4444/wd/hub',
    specs: ['spec.js'],
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
          args: [
            "--headless",
            "--disable-gpu"
          ],
        }
    }
}
