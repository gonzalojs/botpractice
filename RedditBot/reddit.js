const puppeteer = require('puppeteer')

const SUBREDDIT_URL = (reddit) => `https://old.reddit.com/r/${reddit}`

const self = {
  browser: null,
  pages: null,

  initialize: async (reddit) => {
    self.browser = await puppeteer.launch({
      headless: false
    })
    self.page = await self.browser.newPage()

    //Go to the subreddit
    await self.page.goto(SUBREDDIT_URL(reddit), { waitUntil: 'networkidle0' })
  }
}


module.exports = self