const fs = require('fs');
const path = require('path');
const chai = require("chai");
const should = chai.should();
const JWebDriver = require('jwebdriver');
chai.use(JWebDriver.chaiSupportChainPromise);
const resemble = require('resemblejs-node');
resemble.outputSettings({
    errorType: 'flatDifferenceIntensity'
});

const rootPath = getRootPath();

module.exports = function(){

    let driver, testVars;

    before(function(){
        let self = this;
        driver = self.driver;
        testVars = self.testVars;
    });

    it('url: http://172.16.3.100:3000', async function(){
        await driver.url(_(`http://172.16.3.100:3000`));
    });

    it('waitBody: ', async function(){
        await driver.sleep(500).wait('body', 30000).html().then(function(code){
            isPageError(code).should.be.false;
        });
    });

    it('click: Create Document ( a.document, 61, 63, 0 )', async function(){
        await driver.sleep(300).wait('a.document', 30000)
               .sleep(300).mouseMove(61, 63).click(0);
    });

    it('switchWindow: 1', async function(){
        await driver.sleep(500).switchWindow(1);
    });

    it('waitBody: ', async function(){
        await driver.sleep(500).wait('body', 30000).html().then(function(code){
            isPageError(code).should.be.false;
        });
    });

    it('switchWindow: 0', async function(){
        await driver.sleep(500).switchWindow(0);
    });

    it('waitBody: ', async function(){
        await driver.sleep(500).wait('body', 30000).html().then(function(code){
            isPageError(code).should.be.false;
        });
    });

    it('switchWindow: 1', async function(){
        await driver.sleep(500).switchWindow(1);
    });

    it('switchFrame: iframe[name="frameEditor"]', async function(){
        await driver.switchFrame(null)
               .wait('iframe[name="frameEditor"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('mouseMove: #id-toolbar-btn-inserttable button, 21, 6', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-inserttable button', 30000)
               .sleep(300).mouseMove(21, 6);
    });

    it('click: #id-toolbar-btn-inserttable button, 21, 6, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-inserttable button', 30000)
               .sleep(300).mouseMove(21, 6).click(0);
    });

    it('click: #id-toolbar-menu-tablepicker div.dimension-picker-mousecatcher, 66, 24, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-menu-tablepicker div.dimension-picker-mousecatcher', 30000)
               .sleep(300).mouseMove(66, 24).click(0);
    });

    it('sendKeys: 1', async function(){
        await driver.sendKeys('1');
    });

    it('click: #id_viewer_overlay, 652, 135, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(652, 135).click(0);
    });

    it('sendKeys: 2', async function(){
        await driver.sendKeys('2');
    });

    it('click: #id_viewer_overlay, 805, 134, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(805, 134).click(0);
    });

    it('sendKeys: 3', async function(){
        await driver.sendKeys('3');
    });

    it('click: #id_viewer_overlay, 1016, 134, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(1016, 134).click(0);
    });

    it('sendKeys: 4', async function(){
        await driver.sendKeys('4');
    });

    it('click: #id_viewer_overlay, 558, 160, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(558, 160).click(0);
    });

    it('sendKeys: 5', async function(){
        await driver.sendKeys('5');
    });

    it('click: #id_viewer_overlay, 680, 160, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(680, 160).click(0);
    });

    it('sendKeys: 6', async function(){
        await driver.sendKeys('6');
    });

    it('click: #id_viewer_overlay, 814, 155, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(814, 155).click(0);
    });

    it('sendKeys: 7', async function(){
        await driver.sendKeys('7');
    });

    it('click: #id_viewer_overlay, 963, 146, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(963, 146).click(0);
    });

    it('click: #id_viewer_overlay, 965, 153, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(965, 153).click(0);
    });

    it('sendKeys: 8', async function(){
        await driver.sendKeys('8');
    });

   

    it('switchWindow: 1', async function(){
        await driver.sleep(500).switchWindow(1);
    });

    it('switchFrame: iframe[name="frameEditor"]', async function(){
        await driver.switchFrame(null)
               .wait('iframe[name="frameEditor"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('mouseMove: div:nth-child(2) > div.style > img, 22, 30', async function(){
        await driver.sleep(300).wait('div:nth-child(2) > div.style > img', 30000)
               .sleep(300).mouseMove(22, 30);
    });

    it('click: div:nth-child(2) > div.style > img, 22, 30, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(2) > div.style > img', 30000)
               .sleep(300).mouseMove(22, 30).click(0);
    });

    it('click: tr:nth-child(2) > td:nth-child(1) > div > label.checkbox-indeterminate > input[type="button"].checked, 8, 10, 0', async function(){
        await driver.sleep(300).wait('tr:nth-child(2) > td:nth-child(1) > div > label.checkbox-indeterminate > input[type="button"].checked', 30000)
               .sleep(300).mouseMove(8, 10).click(0);
    });

    it('click: tr:nth-child(3) > td:nth-child(1) > div > label.checkbox-indeterminate > input[type="button"].img-commonctrl, 9, 7, 0', async function(){
        await driver.sleep(300).wait('tr:nth-child(3) > td:nth-child(1) > div > label.checkbox-indeterminate > input[type="button"].img-commonctrl', 30000)
               .sleep(300).mouseMove(9, 7).click(0);
    });

    it('click: tr:nth-child(4) > td:nth-child(1) > div > label.checkbox-indeterminate > input[type="button"].checked, 8, 8, 0', async function(){
        await driver.sleep(300).wait('tr:nth-child(4) > td:nth-child(1) > div > label.checkbox-indeterminate > input[type="button"].checked', 30000)
               .sleep(300).mouseMove(8, 8).click(0);
    });

    it('click: td:nth-child(1) > div > label.checkbox-indeterminate > input[type="button"].checked, 8, 8, 0', async function(){
        await driver.sleep(300).wait('td:nth-child(1) > div > label.checkbox-indeterminate > input[type="button"].checked', 30000)
               .sleep(300).mouseMove(8, 8).click(0);
    });

    it('click: input.checked, 13, 9, 0', async function(){
        await driver.sleep(300).wait('input.checked', 30000)
               .sleep(300).mouseMove(13, 9).click(0);
    });

    it('click: tr:nth-child(3) > td:nth-child(2) > div > label.checkbox-indeterminate > input[type="button"].img-commonctrl, 12, 8, 0', async function(){
        await driver.sleep(300).wait('tr:nth-child(3) > td:nth-child(2) > div > label.checkbox-indeterminate > input[type="button"].img-commonctrl', 30000)
               .sleep(300).mouseMove(12, 8).click(0);
    });

    it('click: tr:nth-child(4) > td:nth-child(2) > div > label.checkbox-indeterminate > input[type="button"].img-commonctrl, 10, 7, 0', async function(){
        await driver.sleep(300).wait('tr:nth-child(4) > td:nth-child(2) > div > label.checkbox-indeterminate > input[type="button"].img-commonctrl', 30000)
               .sleep(300).mouseMove(10, 7).click(0);
    });

    it('click: tr:nth-child(3) > td:nth-child(2) > div > label.checkbox-indeterminate > input[type="button"].checked, 8, 9, 0', async function(){
        await driver.sleep(300).wait('tr:nth-child(3) > td:nth-child(2) > div > label.checkbox-indeterminate > input[type="button"].checked', 30000)
               .sleep(300).mouseMove(8, 9).click(0);
    });

    it('click: Show advanced settin... ( label.link, 80, 12, 0 )', async function(){
        await driver.sleep(300).wait('label.link', 30000)
               .sleep(300).mouseMove(80, 12).click(0);
    });

    it('click: Cancel ( //button[text()="Cancel"], 60, 16, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="Cancel"]', 30000)
               .sleep(300).mouseMove(60, 16).click(0);
    });

    it('click: Show advanced settin... ( #table-advanced-link, 19, 9, 0 )', async function(){
        await driver.sleep(300).wait('#table-advanced-link', 30000)
               .sleep(300).mouseMove(19, 9).click(0);
    });

    it('click: div[id="tableadv-checkbox-width"] > label.checkbox-indeterminate > input[type="button"].img-commonctrl, 9, 11, 0', async function(){
        await driver.sleep(300).wait('div[id="tableadv-checkbox-width"] > label.checkbox-indeterminate > input[type="button"].img-commonctrl', 30000)
               .sleep(300).mouseMove(9, 11).click(0);
    });

    it('dblClick: #tableadv-number-width button.spinner-up > i.img-commonctrl, 13, 4, 0', async function(){
        await driver.sleep(300).wait('#tableadv-number-width button.spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(13, 4).click(0).click(0);
    });

    it('dblClick: #tableadv-number-width button.spinner-up > i.img-commonctrl, 13, 4, 0', async function(){
        await driver.sleep(300).wait('#tableadv-number-width button.spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(13, 4).click(0).click(0);
    });

    it('dblClick: #tableadv-number-width button.spinner-up > i.img-commonctrl, 13, 4, 0', async function(){
        await driver.sleep(300).wait('#tableadv-number-width button.spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(13, 4).click(0).click(0);
    });

    it('dblClick: #tableadv-number-width button.spinner-up > i.img-commonctrl, 12, 3, 0', async function(){
        await driver.sleep(300).wait('#tableadv-number-width button.spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(12, 3).click(0).click(0);
    });

    it('click: OK ( //button[text()="OK"], 42, 3, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(42, 3).click(0);
    });

    it('switchWindow: 1', async function(){
        await driver.sleep(500).switchWindow(1);
    });

    it('switchFrame: iframe[name="frameEditor"]', async function(){
        await driver.switchFrame(null)
               .wait('iframe[name="frameEditor"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });


    it('switchWindow: 1', async function(){
        await driver.sleep(500).switchWindow(1);
    });

    it('switchFrame: iframe[name="frameEditor"]', async function(){
        await driver.switchFrame(null)
               .wait('iframe[name="frameEditor"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: #id_viewer_overlay, 521, 146, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(521, 146).click(0);
    });

    it('sendKeys: sdhsdahjsadgsdgsdgds', async function(){
        await driver.sendKeys('sdhsdahjsadgsdgsdgds');
    });

    it('click: #id_viewer_overlay, 686, 145, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(686, 145).click(0);
    });

    it('sendKeys: sdhsdhsdfsddsdh', async function(){
        await driver.sendKeys('sdhsdhsdfsddsdh');
    });

    it('click: #id_viewer_overlay, 819, 148, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(819, 148).click(0);
    });

    it('sendKeys: shsgsdgdsgdss', async function(){
        await driver.sendKeys('shsgsdgdsgdss');
    });

    it('click: #id_viewer_overlay, 948, 144, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(948, 144).click(0);
    });

    it('sendKeys: ddddsasdgd', async function(){
        await driver.sendKeys('ddddsasdgd');
    });

    it('dblClick: #id_viewer_overlay, 961, 140, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(961, 140).click(0).click(0);
    });

    it('sendKeys: sdhsdgdsgsdg', async function(){
        await driver.sendKeys('sdhsdgdsgsdg');
    });

    it('click: #id_viewer_overlay, 955, 161, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(955, 161).click(0);
    });

    it('sendKeys: sdhds', async function(){
        await driver.sendKeys('sdhds');
    });

    it('click: #id_viewer_overlay, 458, 124, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(458, 124).click(0);
    });

    it('click: #id_viewer_overlay, 458, 124, 2', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(458, 124).click(2);
    });

    it('click: #id_viewer_overlay, 679, 311, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(679, 311).click(0);
    });

    it('dblClick: div:nth-child(3) > canvas:nth-child(2), 459, 118, 2', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(459, 118).click(0).click(0);
    });


    it('switchWindow: 1', async function(){
        await driver.sleep(500).switchWindow(1);
    });

    it('switchFrame: iframe[name="frameEditor"]', async function(){
        await driver.switchFrame(null)
               .wait('iframe[name="frameEditor"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('sendKeys: shsgsdgdsgdss', async function(){
        await driver.sendKeys('shsgsdgdsgdss');
    });

    it('click: #id_viewer_overlay, 948, 144, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(948, 144).click(0);
    });

    it('sendKeys: ddddsasdgd', async function(){
        await driver.sendKeys('ddddsasdgd');
    });

    it('dblClick: #id_viewer_overlay, 961, 140, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(961, 140).click(0).click(0);
    });


    it('sendKeys: sdhds', async function(){
        await driver.sendKeys('sdhds');
    });

    it('dblClick: #id_viewer_overlay, 459, 118, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(459, 118).click(0).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 493, 169, 2', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(493, 169).click(2);
    });

    it('click: Copy ( //a[text()="Copy"], 44, 7, 0 )', async function(){
        await driver.sleep(300).wait('//a[text()="Copy"]', 30000)
               .sleep(300).mouseMove(44, 7).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 470, 234, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(470, 234).click(0);
    });

    it('sendKeys: {ENTER}new{ENTER}{ENTER}', async function(){
        await driver.sendKeys('{ENTER}new{ENTER}{ENTER}');
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 505, 283, 2', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(505, 283).click(2);
    });

    it('click: Paste ( //a[text()="Paste"], 68, 18, 0 )', async function(){
        await driver.sleep(300).wait('//a[text()="Paste"]', 30000)
               .sleep(300).mouseMove(68, 18).click(0);
    });

    it('click: div:nth-child(3) > label.checkbox-indeterminate > input[type="button"].img-commonctrl, 6, 8, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > label.checkbox-indeterminate > input[type="button"].img-commonctrl', 30000)
               .sleep(300).mouseMove(6, 8).click(0);
    });

    it('click: input.checked, 5, 11, 0', async function(){
        await driver.sleep(300).wait('input.checked', 30000)
               .sleep(300).mouseMove(5, 11).click(0);
    });

    it('click: OK ( //button[text()="OK"], 20, 6, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(20, 6).click(0);
    });

    it('switchWindow: 1', async function(){
        await driver.sleep(500).switchWindow(1);
    });

    it('switchFrame: iframe[name="frameEditor"]', async function(){
        await driver.switchFrame(null)
               .wait('iframe[name="frameEditor"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: #id_viewer_overlay, 854, 375, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(854, 375).click(0);
    });

    it('click: #id_viewer_overlay, 458, 249, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(458, 249).click(0);
    });

    it('click: Show advanced settin... ( #paragraph-advanced-link, 79, 2, 0 )', async function(){
        await driver.sleep(300).wait('#paragraph-advanced-link', 30000)
               .sleep(300).mouseMove(79, 2).click(0);
    });

    it('click: Cancel ( //button[text()="Cancel"], 64, 8, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="Cancel"]', 30000)
               .sleep(300).mouseMove(64, 8).click(0);
    });

    it('click: #id-right-menu-table, 35, 28, 0', async function(){
        await driver.sleep(300).wait('#id-right-menu-table', 30000)
               .sleep(300).mouseMove(35, 28).click(0);
    });

    it('click: Show advanced settin... ( #table-advanced-link, 82, 12, 0 )', async function(){
        await driver.sleep(300).wait('#table-advanced-link', 30000)
               .sleep(300).mouseMove(82, 12).click(0);
    });

   
    it('switchWindow: 1', async function(){
        await driver.sleep(500).switchWindow(1);
    });

    it('switchFrame: iframe[name="frameEditor"]', async function(){
        await driver.switchFrame(null)
               .wait('iframe[name="frameEditor"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('dblClick: #id_viewer_overlay, 961, 140, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(961, 140).click(0).click(0);
    });

    it('sendKeys: sdhds', async function(){
        await driver.sendKeys('sdhds');
    });

    it('dblClick: #id_viewer_overlay, 459, 118, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(459, 118).click(0).click(0);
    });

    it('click: #id_viewer_overlay, 493, 169, 2', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(493, 169).click(2);
    });

    

    it('switchWindow: 1', async function(){
        await driver.sleep(500).switchWindow(1);
    });

    it('switchFrame: iframe[name="frameEditor"]', async function(){
        await driver.switchFrame(null)
               .wait('iframe[name="frameEditor"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: #id_viewer_overlay, 493, 169, 2', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(493, 169).click(2);
    });

  

    it('switchWindow: 1', async function(){
        await driver.sleep(500).switchWindow(1);
    });

    it('switchFrame: iframe[name="frameEditor"]', async function(){
        await driver.switchFrame(null)
               .wait('iframe[name="frameEditor"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: td.padding-large > div > label.checkbox-indeterminate > input[type="button"].checked, 5, 10, 0', async function(){
        await driver.sleep(300).wait('td.padding-large > div > label.checkbox-indeterminate > input[type="button"].checked', 30000)
               .sleep(300).mouseMove(5, 10).click(0);
    });

    it('click: OK ( //button[text()="OK"], 27, 13, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(27, 13).click(0);
    });

    it('click: Show advanced settin... ( #table-advanced-link, 99, 10, 0 )', async function(){
        await driver.sleep(300).wait('#table-advanced-link', 30000)
               .sleep(300).mouseMove(99, 10).click(0);
    });

    it('click: td.padding-large > div > label.checkbox-indeterminate > input[type="button"].img-commonctrl, 8, 11, 0', async function(){
        await driver.sleep(300).wait('td.padding-large > div > label.checkbox-indeterminate > input[type="button"].img-commonctrl', 30000)
               .sleep(300).mouseMove(8, 11).click(0);
    });

    it('click: OK ( //button[text()="OK"], 45, 9, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(45, 9).click(0);
    });

    it('click: Show advanced settin... ( #table-advanced-link, 66, 8, 0 )', async function(){
        await driver.sleep(300).wait('#table-advanced-link', 30000)
               .sleep(300).mouseMove(66, 8).click(0);
    });


    it('switchWindow: 1', async function(){
        await driver.sleep(500).switchWindow(1);
    });

    it('switchFrame: iframe[name="frameEditor"]', async function(){
        await driver.switchFrame(null)
               .wait('iframe[name="frameEditor"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: td.padding-large > div > label.checkbox-indeterminate > input[type="button"].checked, 9, 4, 0', async function(){
        await driver.sleep(300).wait('td.padding-large > div > label.checkbox-indeterminate > input[type="button"].checked', 30000)
               .sleep(300).mouseMove(9, 4).click(0);
    });

    it('click: OK ( //button[text()="OK"], 31, 16, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(31, 16).click(0);
    });


    it('switchWindow: 1', async function(){
        await driver.sleep(500).switchWindow(1);
    });

    it('switchFrame: iframe[name="frameEditor"]', async function(){
        await driver.switchFrame(null)
               .wait('iframe[name="frameEditor"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: #id_viewer_overlay, 547, 326, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(547, 326).click(0);
    });

    it('click: #id_viewer_overlay, 510, 279, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(510, 279).click(0);
    });

    it('click: #id_viewer_overlay, 510, 279, 2', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(510, 279).click(2);
    });

    it('click: #id_viewer_overlay, 503, 281, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(503, 281).click(0);
    });

    it('dblClick: div:nth-child(3) > canvas:nth-child(2), 530, 287, 2', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(530, 287).click(0).click(0);
    });

   

    it('switchWindow: 1', async function(){
        await driver.sleep(500).switchWindow(1);
    });

    it('switchFrame: iframe[name="frameEditor"]', async function(){
        await driver.switchFrame(null)
               .wait('iframe[name="frameEditor"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: #id_viewer_overlay, 896, 768, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(896, 768).click(0);
    });

    it('click: #id_viewer_overlay, 479, 279, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(479, 279).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 506, 290, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(506, 290).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 510, 282, 2', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(510, 282).click(2);
    });

    it('click: Select ( //a[text()="Select"], 41, 5, 0 )', async function(){
        await driver.sleep(300).wait('//a[text()="Select"]', 30000)
               .sleep(300).mouseMove(41, 5).click(0);
    });

    it('click: Row ( //a[text()="Row"], 34, 18, 0 )', async function(){
        await driver.sleep(300).wait('//a[text()="Row"]', 30000)
               .sleep(300).mouseMove(34, 18).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 501, 277, 2', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(501, 277).click(2);
    });

    it('click: Delete ( //a[text()="Delete"], 58, 5, 0 )', async function(){
        await driver.sleep(300).wait('//a[text()="Delete"]', 30000)
               .sleep(300).mouseMove(58, 5).click(0);
    });

    it('click: Row ( //a[text()="Row"], 75, 16, 0 )', async function(){
        await driver.sleep(300).wait('//a[text()="Row"]', 30000)
               .sleep(300).mouseMove(75, 16).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 474, 278, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(474, 278).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 493, 268, 2', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(493, 268).click(2);
    });

    it('click: Split Cell... ( li:nth-child(13) > a[type="menuitem"], 53, 5, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(13) > a[type="menuitem"]', 30000)
               .sleep(300).mouseMove(53, 5).click(0);
    });

    it('click: OK ( //button[text()="OK"], 44, 15, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(44, 15).click(0);
    });

    it('switchWindow: 1', async function(){
        await driver.sleep(500).switchWindow(1);
    });

    it('switchFrame: iframe[name="frameEditor"]', async function(){
        await driver.switchFrame(null)
               .wait('iframe[name="frameEditor"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: #id_viewer_overlay, 460, 246, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(460, 246).click(0);
    });

    it('click: Show advanced settin... ( #paragraph-advanced-link, 74, 9, 0 )', async function(){
        await driver.sleep(300).wait('#paragraph-advanced-link', 30000)
               .sleep(300).mouseMove(74, 9).click(0);
    });

    it('click: Cancel ( //button[text()="Cancel"], 61, 6, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="Cancel"]', 30000)
               .sleep(300).mouseMove(61, 6).click(0);
    });

    it('click: #id-right-menu-table, 31, 17, 0', async function(){
        await driver.sleep(300).wait('#id-right-menu-table', 30000)
               .sleep(300).mouseMove(31, 17).click(0);
    });

    it('click: Show advanced settin... ( #table-advanced-link, 89, 10, 0 )', async function(){
        await driver.sleep(300).wait('#table-advanced-link', 30000)
               .sleep(300).mouseMove(89, 10).click(0);
    });

    it('click: Alternative Text ( div.menu-panel > button:nth-child(6) > span, 66, 12, 0 )', async function(){
        await driver.sleep(300).wait('div.menu-panel > button:nth-child(6) > span', 30000)
               .sleep(300).mouseMove(66, 12).click(0);
    });

    it('click: div.input-field > input[type="text"].form-control, 35, 11, 0', async function(){
        await driver.sleep(300).wait('div.input-field > input[type="text"].form-control', 30000)
               .sleep(300).mouseMove(35, 11).click(0);
    });

  

    it('switchWindow: 1', async function(){
        await driver.sleep(500).switchWindow(1);
    });

    it('switchFrame: iframe[name="frameEditor"]', async function(){
        await driver.switchFrame(null)
               .wait('iframe[name="frameEditor"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: div.input-field > input[type="text"].form-control, 23, 14, 0', async function(){
        await driver.sleep(300).wait('div.input-field > input[type="text"].form-control', 30000)
               .sleep(300).mouseMove(23, 14).click(0);
    });

    it('sendKeys: aaa{ENTER}', async function(){
        await driver.sendKeys('aaa{ENTER}');
    });

    it('click: Show advanced settin... ( #table-advanced-link, 23, 7, 0 )', async function(){
        await driver.sleep(300).wait('#table-advanced-link', 30000)
               .sleep(300).mouseMove(23, 7).click(0);
    });

    it('click: textarea.form-control, 59, 42, 0', async function(){
        await driver.sleep(300).wait('textarea.form-control', 30000)
               .sleep(300).mouseMove(59, 42).click(0);
    });

    it('click: textarea.form-control, 59, 42, 0', async function(){
        await driver.sleep(300).wait('textarea.form-control', 30000)
               .sleep(300).mouseMove(59, 42).click(0);
    });

    it('sendKeys: sggsd', async function(){
        await driver.sendKeys('sggsd');
    });

    it('click: textarea.form-control, 60, 41, 0', async function(){
        await driver.sleep(300).wait('textarea.form-control', 30000)
               .sleep(300).mouseMove(60, 41).click(0);
    });

    it('click: OK ( //button[text()="OK"], 39, 6, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(39, 6).click(0);
    });

    it('click: Show advanced settin... ( label.link, 19, 6, 0 )', async function(){
        await driver.sleep(300).wait('label.link', 30000)
               .sleep(300).mouseMove(19, 6).click(0);
    });

    it('click: Text Wrapping ( div.menu-panel > button:nth-child(5), 119, 9, 0 )', async function(){
        await driver.sleep(300).wait('div.menu-panel > button:nth-child(5)', 30000)
               .sleep(300).mouseMove(119, 9).click(0);
    });

    it('click: span.btn-table-align-center, 23, 18, 0', async function(){
        await driver.sleep(300).wait('span.btn-table-align-center', 30000)
               .sleep(300).mouseMove(23, 18).click(0);
    });

    it('click: OK ( //button[text()="OK"], 33, 8, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(33, 8).click(0);
    });

    it('click: Show advanced settin... ( label.link, 69, 4, 0 )', async function(){
        await driver.sleep(300).wait('label.link', 30000)
               .sleep(300).mouseMove(69, 4).click(0);
    });

    it('click: div:nth-child(3) > button[type="button"].huge > span.btn-wrap-parallel, 19, 16, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > button[type="button"].huge > span.btn-wrap-parallel', 30000)
               .sleep(300).mouseMove(19, 16).click(0);
    });

    it('dblClick: tr:nth-child(2) > td:nth-child(2) > div.spinner > div.spinner-buttons > button[type="button"].spinner-up > i.img-commonctrl, 6, 9, 0', async function(){
        await driver.sleep(300).wait('tr:nth-child(2) > td:nth-child(2) > div.spinner > div.spinner-buttons > button[type="button"].spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(6, 9).click(0).click(0);
    });

    it('dblClick: tr:nth-child(2) > td:nth-child(2) > div.spinner > div.spinner-buttons > button[type="button"].spinner-up > i.img-commonctrl, 6, 9, 0', async function(){
        await driver.sleep(300).wait('tr:nth-child(2) > td:nth-child(2) > div.spinner > div.spinner-buttons > button[type="button"].spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(6, 9).click(0).click(0);
    });

    it('click: tr:nth-child(2) > td:nth-child(2) > div.spinner > div.spinner-buttons > button[type="button"].spinner-up > i.img-commonctrl, 6, 9, 0', async function(){
        await driver.sleep(300).wait('tr:nth-child(2) > td:nth-child(2) > div.spinner > div.spinner-buttons > button[type="button"].spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(6, 9).click(0);
    });

    it('click: OK ( //button[text()="OK"], 50, 9, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(50, 9).click(0);
    });

    it('switchWindow: 1', async function(){
        await driver.sleep(500).switchWindow(1);
    });

    it('switchFrame: iframe[name="frameEditor"]', async function(){
        await driver.switchFrame(null)
               .wait('iframe[name="frameEditor"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

   

    it('switchWindow: 1', async function(){
        await driver.sleep(500).switchWindow(1);
    });

    it('switchFrame: iframe[name="frameEditor"]', async function(){
        await driver.switchFrame(null)
               .wait('iframe[name="frameEditor"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: #id_viewer_overlay, 570, 373, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(570, 373).click(0);
    });

    it('click: #id_viewer_overlay, 471, 307, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(471, 307).click(0);
    });

    it('click: #id_viewer_overlay, 461, 244, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(461, 244).click(0);
    });

    it('click: Show advanced settin... ( #paragraph-advanced-link, 33, 10, 0 )', async function(){
        await driver.sleep(300).wait('#paragraph-advanced-link', 30000)
               .sleep(300).mouseMove(33, 10).click(0);
    });

    it('click: Cancel ( //button[text()="Cancel"], 5, 20, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="Cancel"]', 30000)
               .sleep(300).mouseMove(5, 20).click(0);
    });

    it('click: #id-right-menu-table, 28, 25, 0', async function(){
        await driver.sleep(300).wait('#id-right-menu-table', 30000)
               .sleep(300).mouseMove(28, 25).click(0);
    });

    it('click: Show advanced settin... ( #table-advanced-link, 64, 8, 0 )', async function(){
        await driver.sleep(300).wait('#table-advanced-link', 30000)
               .sleep(300).mouseMove(64, 8).click(0);
    });

    it('click: Alternative Text ( div.menu-panel > button:nth-child(6) > span, 68, 9, 0 )', async function(){
        await driver.sleep(300).wait('div.menu-panel > button:nth-child(6) > span', 30000)
               .sleep(300).mouseMove(68, 9).click(0);
    });

    it('click: div.input-field > input[type="text"].form-control, 57, 6, 0', async function(){
        await driver.sleep(300).wait('div.input-field > input[type="text"].form-control', 30000)
               .sleep(300).mouseMove(57, 6).click(0);
    });

    it('sendKeys: aaaa', async function(){
        await driver.sendKeys('aaaa');
    });

    it('click: OK ( //button[text()="OK"], 35, 17, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(35, 17).click(0);
    });

    it('click: Show advanced settin... ( label.link, 41, 8, 0 )', async function(){
        await driver.sleep(300).wait('label.link', 30000)
               .sleep(300).mouseMove(41, 8).click(0);
    });

    it('click: OK ( //button[text()="OK"], 28, 14, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(28, 14).click(0);
    });

    it('switchWindow: 0', async function(){
        await driver.sleep(500).switchWindow(0);
    });

    it('scrollTo: 0, 159', async function(){
        await driver.scrollTo(0, 159);
    });

    it('click: new (71).docx ( tr:nth-child(1) > td:nth-child(1) > a.text > span, 29, 4, 0 )', async function(){
        await driver.sleep(300).wait('tr:nth-child(1) > td:nth-child(1) > a.text > span', 30000)
               .sleep(300).mouseMove(29, 4).click(0);
    });

    it('switchWindow: 2', async function(){
        await driver.sleep(500).switchWindow(2);
    });

    it('waitBody: ', async function(){
        await driver.sleep(500).wait('body', 30000).html().then(function(code){
            isPageError(code).should.be.false;
        });
    });

    it('switchWindow: 1', async function(){
        await driver.sleep(500).switchWindow(1);
    });

    it('switchFrame: iframe[name="frameEditor"]', async function(){
        await driver.switchFrame(null)
               .wait('iframe[name="frameEditor"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 573, 293, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(573, 293).click(0);
    });

    it('switchWindow: 1', async function(){
        await driver.sleep(500).switchWindow(1);
    });

    it('switchFrame: iframe[name="frameEditor"]', async function(){
        await driver.switchFrame(null)
               .wait('iframe[name="frameEditor"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: #left-btn-file span, 12, 13, 0', async function(){
        await driver.sleep(300).wait('#left-btn-file span', 30000)
               .sleep(300).mouseMove(12, 13).click(0);
    });

    it('click: #panel-saveas span.docx, 30, 67, 0', async function(){
        await driver.sleep(300).wait('#panel-saveas span.docx', 30000)
               .sleep(300).mouseMove(30, 67).click(0);
    });

    function _(str){
        if(typeof str === 'string'){
            return str.replace(/\{\{(.+?)\}\}/g, function(all, key){
                return testVars[key] || '';
            });
        }
        else{
            return str;
        }
    }

};

if(module.parent && /mocha\.js/.test(module.parent.id)){
    runThisSpec();
}

function runThisSpec(){
    // read config
    let webdriver = process.env['webdriver'] || '';
    let proxy = process.env['wdproxy'] || '';
    let config = require(rootPath + '/config.json');
    let webdriverConfig = Object.assign({},config.webdriver);
    let host = webdriverConfig.host;
    let port = webdriverConfig.port || 4444;
    let match = webdriver.match(/([^\:]+)(?:\:(\d+))?/);
    if(match){
        host = match[1] || host;
        port = match[2] || port;
    }
    let testVars = config.vars;
    let browsers = webdriverConfig.browsers;
    browsers = browsers.replace(/^\s+|\s+$/g, '');
    delete webdriverConfig.host;
    delete webdriverConfig.port;
    delete webdriverConfig.browsers;

    // read hosts
    let hostsPath = rootPath + '/hosts';
    let hosts = '';
    if(fs.existsSync(hostsPath)){
        hosts = fs.readFileSync(hostsPath).toString();
    }
    let specName = path.relative(rootPath, __filename).replace(/\\/g,'/').replace(/\.js$/,'');

    browsers.split(/\s*,\s*/).forEach(function(browserName){
        let caseName = specName + ' : ' + browserName;

        let browserInfo = browserName.split(' ');
        browserName = browserInfo[0];
        let browserVersion = browserInfo[1];

        describe(caseName, function(){

            this.timeout(600000);
            this.slow(1000);

            let driver;
            before(function(){
                let self = this;
                let driver = new JWebDriver({
                    'host': host,
                    'port': port
                });
                let sessionConfig = Object.assign({}, webdriverConfig, {
                    'browserName': browserName,
                    'version': browserVersion,
                    'ie.ensureCleanSession': true,
                    'chromeOptions': {
                        'args': ['--enable-automation']
                    }
                });
                if(proxy){
                    sessionConfig.proxy = {
                        'proxyType': 'manual',
                        'httpProxy': proxy,
                        'sslProxy': proxy
                    }
                }
                else if(hosts){
                    sessionConfig.hosts = hosts;
                }
                self.driver = driver.session(sessionConfig).maximize().config({
                    pageloadTimeout: 30000, // page onload timeout
                    scriptTimeout: 5000, // sync script timeout
                    asyncScriptTimeout: 10000 // async script timeout
                });
                self.testVars = testVars;
                let casePath = path.dirname(caseName);
                self.screenshotPath = rootPath + '/screenshots/' + casePath;
                self.diffbasePath = rootPath + '/diffbase/' + casePath;
                self.caseName = caseName.replace(/.*\//g, '').replace(/\s*[:\.\:\-\s]\s*/g, '_');
                mkdirs(self.screenshotPath);
                mkdirs(self.diffbasePath);
                self.stepId = 0;
                return self.driver;
            });

            module.exports();

            beforeEach(function(){
                let self = this;
                self.stepId ++;
                if(self.skipAll){
                    self.skip();
                }
            });

            afterEach(async function(){
                let self = this;
                let currentTest = self.currentTest;
                let title = currentTest.title;
                if(currentTest.state === 'failed' && /^(url|waitBody|switchWindow|switchFrame):/.test(title)){
                    self.skipAll = true;
                }
                if(!/^(closeWindow):/.test(title)){
                    let filepath = self.screenshotPath + '/' + self.caseName + '_' + self.stepId;
                    let driver = self.driver;
                    try{
                        // catch error when get alert msg
                        await driver.getScreenshot(filepath + '.png');
                        let url = await driver.url();
                        let html = await driver.source();
                        html = '<!--url: '+url+' -->\n' + html;
                        fs.writeFileSync(filepath + '.html', html);
                        let cookies = await driver.cookies();
                        fs.writeFileSync(filepath + '.cookie', JSON.stringify(cookies));
                    }
                    catch(e){}
                }
            });

            after(function(){
                return this.driver.close();
            });

        });
    });
}

function getRootPath(){
    let rootPath = path.resolve(__dirname);
    while(rootPath){
        if(fs.existsSync(rootPath + '/config.json')){
            break;
        }
        rootPath = rootPath.substring(0, rootPath.lastIndexOf(path.sep));
    }
    return rootPath;
}

function mkdirs(dirname){
    if(fs.existsSync(dirname)){
        return true;
    }else{
        if(mkdirs(path.dirname(dirname))){
            fs.mkdirSync(dirname);
            return true;
        }
    }
}

function callSpec(name){
    try{
        require(rootPath + '/' + name)();
    }
    catch(e){
        console.log(e)
        process.exit(1);
    }
}

function isPageError(code){
    return code == '' || / jscontent="errorCode" jstcache="\d+"|diagnoseConnectionAndRefresh|dnserror_unavailable_header|id="reportCertificateErrorRetry"|400 Bad Request|403 Forbidden|404 Not Found|500 Internal Server Error|502 Bad Gateway|503 Service Temporarily Unavailable|504 Gateway Time-out/i.test(code);
}

function catchError(error){

}
