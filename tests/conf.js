exports.config = {
    specs: ['spec.js'],
    chromeDriver: '/usr/bin/chromedriver',
    capabilities: {
      'browserName': 'chrome',
      'chromeOptions': {
        'args': ['no-sandbox', 'headless', 'disable-gpu']
      }
    }
}
