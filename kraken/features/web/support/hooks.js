const { After, Before } = require('@cucumber/cucumber');
const { WebClient } = require('kraken-node');

Before(async function() {
  this.deviceClient = new WebClient('edge', {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
  //insrtar login code
})

After(async function() {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});
