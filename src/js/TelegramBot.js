const Telegraf = require('telegraf');
var HttpsProxyAgent = require('https-proxy-agent');

// Create a bot that uses 'polling' to fetch new updates
// const token = '890442724:AAE-FczXQHwTBi6BDgf6J06Avsg6YZ9azrg';
// const httpsAgent = new HttpsProxyAgent({
//   host: '109.237.109.128',
//   port: '45785',
//   username: 'Selmerenokden',
//   password: 'Y5h0MiO',
// });

class Telegram {
  constructor(chat_id) {
    this.chat_id = chat_id;
    this.token = '890442724:AAE-FczXQHwTBi6BDgf6J06Avsg6YZ9azrg';
    this.bot = new Telegraf(this.token, {
      telegram: {
        agent: new HttpsProxyAgent('http://Selmerenokden:Y5h0MiO@109.237.109.128:45785')
        // apiRoot: 'https://api.telegram.org',
      }
    })
  }

  sendMessage(message) {
    this.bot.telegram.sendMessage(this.chat_id, message);
  }
};


export default Telegram
