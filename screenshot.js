import * as puppeteer from 'puppeteer'

(async () => {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox'
    ]
  })
  browser.close()
})()
