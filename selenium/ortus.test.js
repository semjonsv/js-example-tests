const { Builder, By, Key } = require('selenium-webdriver');
require('jest');
require('dotenv').config();

jest.setTimeout(30000);
const mainUrl = 'https://id2.rtu.lv/openam/UI/Login';
const password = process.env.RTU_PASS;
let driver;

describe('Login test', () => {
  beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
  })

  afterAll(async () => driver.quit())

  it('initialize page', async () => {
    await driver.get(mainUrl);
  })

  it('Login fail', async () => {
    await driver.findElement(By.name('IDToken1')).sendKeys('Semjons.Voronovs');
    await driver.findElement(By.name('IDToken2')).sendKeys('123', Key.RETURN);
    const find = await driver.findElement(By.css('.AlrtMsgTxt p a')).getText();
    expect(find).toEqual('Atgriezties uz pieteikšanās lapu');
  })

  it('Login success', async () => {
    await driver.findElement(By.css('.AlrtMsgTxt p a')).click();
    await driver.findElement(By.name('IDToken1')).sendKeys('Semjons.Voronovs');
    await driver.findElement(By.name('IDToken2')).sendKeys(password, Key.RETURN);
    const find = await driver.findElement(By.css('.user-name a')).getText();

    expect(find).toEqual('Semjons Voronovs');
  })
})
