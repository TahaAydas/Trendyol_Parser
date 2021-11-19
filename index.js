const request = require("request-promise");
const cheerio = require("cheerio");
const value = "saat";
const defaultSite = "https://www.trendyol.com";
request(
  "https://www.trendyol.com/sr?q=saat&qt=saat&st=saat&os=1&pi=1",
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html);
      $(".p-card-wrppr").each((i, data) => {
        const item = $(data).text();

        const linkText = $(data).find("a").attr("href");
        let check = item.search("İNDİRİM");
        let objectToString = JSON.stringify(defaultSite + linkText);

        if (check != -1) {
          console.log(objectToString);
        }
      });
    }
  }
);
