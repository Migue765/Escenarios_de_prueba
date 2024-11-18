const { After, Before } = require('@cucumber/cucumber');
const { WebClient } = require('kraken-node');
const PROPERTIES = require('../../../properties.json')

Before(async function () {
  this.deviceClient = new WebClient('edge', {}, this.userId);
  this.driver = await this.deviceClient.startKrakenForUserId(this.userId);
  await this.driver.url(PROPERTIES.URL);
  await this.driver.pause(1000)
  var url = await this.driver.getUrl()
  if (url.includes('setup')) {
    await this.driver.$('#blog-title').setValue(PROPERTIES.TITLE);
    await this.driver.$('#name').setValue(PROPERTIES.NAME);
    await this.driver.$('#email').setValue(PROPERTIES.EMAIL);
    await this.driver.$('#password').setValue(PROPERTIES.PASSWORD);
    await this.driver.$('[type="submit"]').click();
    await this.driver.$('[name="users"]').setValue(PROPERTIES.EMAIL2);
    await this.driver.url(PROPERTIES.URL);
    await this.driver.pause(30000)
    await this.driver.$('[type="submit"]').click();
    await this.driver.pause(1000)
    url = await this.driver.getUrl()
    if (url.includes("dashboard")) {
      console.log("funciona :3")
    } else {
      throw new Error("Error: No se redirigió al dashboard después del setup.");
    }
  } else {
    console.log("iniciar sesión")
    await this.driver.$('[name="identification"]').setValue(PROPERTIES.EMAIL);
    await this.driver.$('[name="password"]').setValue(PROPERTIES.PASSWORD);
    await this.driver.$('[type="submit"]').click();
    await this.driver.pause(1000)
    url = await this.driver.getUrl()
    if (url.includes("dashboard")) {
      console.log("funciona :3")
    } else {
      throw new Error("Error: No se redirigió al dashboard después del login.");
    }
  }
})

After(async function () {
  await this.deviceClient.stopKrakenForUserId(this.userId);
});
