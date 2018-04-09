exports.config = {
    specs: ['spec.js'],
    capabilities: {
      'browserName': 'chrome',
      'chromeOptions': {
        'args': ['no-sandbox', 'headless', 'disable-gpu']
      }
    }
}
