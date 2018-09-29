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

    it('click: Create Document ( a.document, 37, 57, 0 )', async function(){
        await driver.sleep(300).wait('a.document', 30000)
               .sleep(300).mouseMove(37, 57).click(0);
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

    it('click: #id-toolbar-btn-inserttable button, 27, 14, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-inserttable button', 30000)
               .sleep(300).mouseMove(27, 14).click(0);
    });

    it('click: #id-toolbar-menu-tablepicker div.dimension-picker-mousecatcher, 67, 41, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-menu-tablepicker div.dimension-picker-mousecatcher', 30000)
               .sleep(300).mouseMove(67, 41).click(0);
    });

    it('sendKeys: 1', async function(){
        await driver.sendKeys('1');
    });

    it('click: #id_viewer_overlay, 757, 133, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(757, 133).click(0);
    });

    it('sendKeys: 2', async function(){
        await driver.sendKeys('2');
    });

    it('click: #id_viewer_overlay, 882, 136, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(882, 136).click(0);
    });

    it('sendKeys: 3', async function(){
        await driver.sendKeys('3');
    });

    it('click: #id_viewer_overlay, 1054, 130, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(1054, 130).click(0);
    });

    it('click: #id_viewer_overlay, 1051, 135, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(1051, 135).click(0);
    });

    it('sendKeys: 4', async function(){
        await driver.sendKeys('4');
    });

    it('click: #id_viewer_overlay, 474, 144, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(474, 144).click(0);
    });

    it('click: #id_viewer_overlay, 634, 141, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(634, 141).click(0);
    });

    it('sendKeys: 1\n', async function(){
        await driver.sendKeys('1\n');
    });

    it('click: #id_viewer_overlay, 474, 143, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(474, 143).click(0);
    });

    it('click: #id_viewer_overlay, 488, 140, 2', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(488, 140).click(2);
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

    it('mouseUp: body, 742, 389, 0', async function(){
        await driver.sleep(300).wait('body', 30000)
               .sleep(300).mouseMove(742, 389).mouseMove(742, 389).mouseUp(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 477, 151, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(477, 151).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 497, 148, 2', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(497, 148).click(2);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 515, 146, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(515, 146).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 552, 134, 2', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(552, 134).click(2);
    });

    it('mouseMove: Select ( //a[text()="Select"], 186, 11 )', async function(){
        await driver.sleep(300).wait('//a[text()="Select"]', 30000)
               .sleep(300).mouseMove(186, 11);
    });

    it('click: Cell ( //a[text()="Cell"], 67, 6, 0 )', async function(){
        await driver.sleep(300).wait('//a[text()="Cell"]', 30000)
               .sleep(300).mouseMove(67, 6).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 580, 139, 2', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(580, 139).click(2);
    });

    it('click: Copy ( //a[text()="Copy"], 22, 11, 0 )', async function(){
        await driver.sleep(300).wait('//a[text()="Copy"]', 30000)
               .sleep(300).mouseMove(22, 11).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 794, 153, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(794, 153).click(0);
    });

    it('sendKeys: 1\n', async function(){
        await driver.sendKeys('1\n');
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 476, 159, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(476, 159).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 500, 132, 2', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(500, 132).click(2);
    });

    it('click: Split Cell... ( li:nth-child(13) > a[type="menuitem"], 70, 19, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(13) > a[type="menuitem"]', 30000)
               .sleep(300).mouseMove(70, 19).click(0);
    });

    it('mouseDown: Table SizeNumber of ... ( div.body, 118, 18, 0 )', async function(){
        await driver.sleep(300).wait('div.body', 30000)
               .sleep(300).mouseMove(118, 18).mouseDown(0);
    });

    it('mouseUp: Number of Columns ( div.body, 120, 68, 0 )', async function(){
        await driver.sleep(300).wait('div.body', 30000)
               .sleep(300).mouseMove(120, 68).mouseMove(120, 68).mouseUp(0);
    });

    it('mouseMove: OK ( //button[text()="OK"], 44, 8 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(44, 8);
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

    it('click: OK ( //button[text()="OK"], 17, 12, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(17, 12).click(0);
    });

    it('click: #id_viewer_overlay, 633, 160, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(633, 160).click(0);
    });

    it('click: #asc-gen7026 div.form-control, 69, 11, 0', async function(){
        await driver.sleep(300).wait('#asc-gen7026 div.form-control', 30000)
               .sleep(300).mouseMove(69, 11).click(0);
    });

    it('click: #asc-gen7026 span.caret, 3, 6, 0', async function(){
        await driver.sleep(300).wait('#asc-gen7026 span.caret', 30000)
               .sleep(300).mouseMove(3, 6).click(0);
    });

    it('click: #asc-gen7026 span, 3, 6, 0', async function(){
        await driver.sleep(300).wait('#asc-gen7026 span', 30000)
               .sleep(300).mouseMove(3, 6).click(0);
    });

    it('switchFrame: iframe', async function(){
        await driver.switchFrame(null)
               .wait('iframe', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: #asc-gen7026 div.form-control, 64, 14, 0', async function(){
        await driver.sleep(300).wait('#asc-gen7026 div.form-control', 30000)
               .sleep(300).mouseMove(64, 14).click(0);
    });


    it('click: div.form-control, 48, 14, 0', async function(){
        await driver.sleep(300).wait('div.form-control', 30000)
               .sleep(300).mouseMove(48, 14).click(0);
    });

    it('click: li:nth-child(4) > a[type="menuitem"] > img:nth-child(2), 10, 8, 0', async function(){
        await driver.sleep(300).wait('li:nth-child(4) > a[type="menuitem"] > img:nth-child(2)', 30000)
               .sleep(300).mouseMove(10, 8).click(0);
    });

    it('click: div:nth-child(2) > div:nth-child(2) > div.btn-group > button[type="button"].dropdown-toggle > span, 16, 9, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(2) > div:nth-child(2) > div.btn-group > button[type="button"].dropdown-toggle > span', 30000)
               .sleep(300).mouseMove(16, 9).click(0);
    });

    it('click: a.color-F4B083 > em > span, 6, 10, 0', async function(){
        await driver.sleep(300).wait('a.color-F4B083 > em > span', 30000)
               .sleep(300).mouseMove(6, 10).click(0);
    });

    it('click: span.btn-position-none, 14, 15, 0', async function(){
        await driver.sleep(300).wait('span.btn-position-none', 30000)
               .sleep(300).mouseMove(14, 15).click(0);
    });

    it('click: span.btn-position-all, 15, 10, 0', async function(){
        await driver.sleep(300).wait('span.btn-position-all', 30000)
               .sleep(300).mouseMove(15, 10).click(0);
    });

    it('click: span.btn-position-inner, 18, 14, 0', async function(){
        await driver.sleep(300).wait('span.btn-position-inner', 30000)
               .sleep(300).mouseMove(18, 14).click(0);
    });

    it('click: span.btn-position-outer, 17, 16, 0', async function(){
        await driver.sleep(300).wait('span.btn-position-outer', 30000)
               .sleep(300).mouseMove(17, 16).click(0);
    });

    it('click: span.btn-position-none, 11, 12, 0', async function(){
        await driver.sleep(300).wait('span.btn-position-none', 30000)
               .sleep(300).mouseMove(11, 12).click(0);
    });

    it('click: span.btn-position-left, 9, 13, 0', async function(){
        await driver.sleep(300).wait('span.btn-position-left', 30000)
               .sleep(300).mouseMove(9, 13).click(0);
    });

    it('click: span.btn-position-inner-vert, 4, 17, 0', async function(){
        await driver.sleep(300).wait('span.btn-position-inner-vert', 30000)
               .sleep(300).mouseMove(4, 17).click(0);
    });

    it('click: span.btn-position-right, 10, 17, 0', async function(){
        await driver.sleep(300).wait('span.btn-position-right', 30000)
               .sleep(300).mouseMove(10, 17).click(0);
    });

    it('click: span.btn-position-top, 2, 11, 0', async function(){
        await driver.sleep(300).wait('span.btn-position-top', 30000)
               .sleep(300).mouseMove(2, 11).click(0);
    });

    it('click: span.btn-position-inner-hor, 8, 12, 0', async function(){
        await driver.sleep(300).wait('span.btn-position-inner-hor', 30000)
               .sleep(300).mouseMove(8, 12).click(0);
    });

    it('click: span.btn-position-bottom, 11, 12, 0', async function(){
        await driver.sleep(300).wait('span.btn-position-bottom', 30000)
               .sleep(300).mouseMove(11, 12).click(0);
    });

    it('click: Show advanced settin... ( label.link, 71, 5, 0 )', async function(){
        await driver.sleep(300).wait('label.link', 30000)
               .sleep(300).mouseMove(71, 5).click(0);
    });

    it('click: Cell ( div.menu-panel > button:nth-child(2), 98, 26, 0 )', async function(){
        await driver.sleep(300).wait('div.menu-panel > button:nth-child(2)', 30000)
               .sleep(300).mouseMove(98, 26).click(0);
    });

    it('mouseDown: Table - Advanced Set... ( div.header, 146, 23, 0 )', async function(){
        await driver.sleep(300).wait('div.header', 30000)
               .sleep(300).mouseMove(146, 23).mouseDown(0);
    });

    it('mouseUp: Table - Advanced Set... ( body, 818, 358, 0 )', async function(){
        await driver.sleep(300).wait('body', 30000)
               .sleep(300).mouseMove(818, 358).mouseMove(818, 358).mouseUp(0);
    });

    it('click: input.indeterminate, 5, 11, 0', async function(){
        await driver.sleep(300).wait('input.indeterminate', 30000)
               .sleep(300).mouseMove(5, 11).click(0);
    });

    it('click: div.inner-content > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(1) > div > label.checkbox-indeterminate > input[type="button"].img-commonctrl, 6, 9, 0', async function(){
        await driver.sleep(300).wait('div.inner-content > table:nth-child(1) > tbody > tr:nth-child(2) > td:nth-child(1) > div > label.checkbox-indeterminate > input[type="button"].img-commonctrl', 30000)
               .sleep(300).mouseMove(6, 9).click(0);
    });

    it('dblClick: tr:nth-child(2) > td:nth-child(2) > div.spinner > div.spinner-buttons > button[type="button"].spinner-up > i.img-commonctrl, 13, 8, 0', async function(){
        await driver.sleep(300).wait('tr:nth-child(2) > td:nth-child(2) > div.spinner > div.spinner-buttons > button[type="button"].spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(13, 8).click(0).click(0);
    });

    it('dblClick: tr:nth-child(2) > td:nth-child(2) > div.spinner > div.spinner-buttons > button[type="button"].spinner-up > i.img-commonctrl, 13, 8, 0', async function(){
        await driver.sleep(300).wait('tr:nth-child(2) > td:nth-child(2) > div.spinner > div.spinner-buttons > button[type="button"].spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(13, 8).click(0).click(0);
    });

    it('dblClick: tr:nth-child(2) > td:nth-child(2) > div.spinner > div.spinner-buttons > button[type="button"].spinner-up > i.img-commonctrl, 13, 8, 0', async function(){
        await driver.sleep(300).wait('tr:nth-child(2) > td:nth-child(2) > div.spinner > div.spinner-buttons > button[type="button"].spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(13, 8).click(0).click(0);
    });

    it('dblClick: tr:nth-child(2) > td:nth-child(2) > div.spinner > div.spinner-buttons > button[type="button"].spinner-up > i.img-commonctrl, 13, 8, 0', async function(){
        await driver.sleep(300).wait('tr:nth-child(2) > td:nth-child(2) > div.spinner > div.spinner-buttons > button[type="button"].spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(13, 8).click(0).click(0);
    });

    it('dblClick: tr:nth-child(2) > td:nth-child(2) > div.spinner > div.spinner-buttons > button[type="button"].spinner-up > i.img-commonctrl, 13, 8, 0', async function(){
        await driver.sleep(300).wait('tr:nth-child(2) > td:nth-child(2) > div.spinner > div.spinner-buttons > button[type="button"].spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(13, 8).click(0).click(0);
    });

    it('dblClick: tr:nth-child(2) > td:nth-child(2) > div.spinner > div.spinner-buttons > button[type="button"].spinner-up > i.img-commonctrl, 13, 8, 0', async function(){
        await driver.sleep(300).wait('tr:nth-child(2) > td:nth-child(2) > div.spinner > div.spinner-buttons > button[type="button"].spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(13, 8).click(0).click(0);
    });

    it('dblClick: tr:nth-child(2) > td:nth-child(2) > div.spinner > div.spinner-buttons > button[type="button"].spinner-up > i.img-commonctrl, 13, 8, 0', async function(){
        await driver.sleep(300).wait('tr:nth-child(2) > td:nth-child(2) > div.spinner > div.spinner-buttons > button[type="button"].spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(13, 8).click(0).click(0);
    });

    it('dblClick: tr:nth-child(2) > td:nth-child(2) > div.spinner > div.spinner-buttons > button[type="button"].spinner-up > i.img-commonctrl, 13, 8, 0', async function(){
        await driver.sleep(300).wait('tr:nth-child(2) > td:nth-child(2) > div.spinner > div.spinner-buttons > button[type="button"].spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(13, 8).click(0).click(0);
    });

    it('dblClick: tr:nth-child(2) > td:nth-child(2) > div.spinner > div.spinner-buttons > button[type="button"].spinner-up > i.img-commonctrl, 13, 8, 0', async function(){
        await driver.sleep(300).wait('tr:nth-child(2) > td:nth-child(2) > div.spinner > div.spinner-buttons > button[type="button"].spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(13, 8).click(0).click(0);
    });

    it('click: tr:nth-child(7) > td.padding-small > div > label.checkbox-indeterminate > input[type="button"].checked, 8, 5, 0', async function(){
        await driver.sleep(300).wait('tr:nth-child(7) > td.padding-small > div > label.checkbox-indeterminate > input[type="button"].checked', 30000)
               .sleep(300).mouseMove(8, 5).click(0);
    });

    it('click: OK ( //button[text()="OK"], 43, 17, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(43, 17).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 784, 147, 2', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(784, 147).click(2);
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


    it('click: div:nth-child(3) > canvas:nth-child(2), 510, 176, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(510, 176).click(0);
    });

    it('sendKeys: 1', async function(){
        await driver.sendKeys('1');
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 664, 178, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(664, 178).click(0);
    });

    it('sendKeys: 2', async function(){
        await driver.sendKeys('2');
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 858, 175, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(858, 175).click(0);
    });

    it('sendKeys: 3', async function(){
        await driver.sendKeys('3');
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 991, 176, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(991, 176).click(0);
    });

    it('sendKeys: 4', async function(){
        await driver.sendKeys('4');
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

    it('click: #id_viewer_overlay, 474, 179, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(474, 179).click(0);
    });

    it('click: #id_viewer_overlay, 491, 172, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(491, 172).click(0);
    });

    it('click: #id_viewer_overlay, 475, 181, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(475, 181).click(0);
    });

    it('click: #id_viewer_overlay, 498, 176, 2', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(498, 176).click(2);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 500, 176, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(500, 176).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 475, 179, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(475, 179).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 490, 175, 2', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(490, 175).click(2);
    });

    it('click: Split Cell... ( li:nth-child(13) > a[type="menuitem"], 55, 5, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(13) > a[type="menuitem"]', 30000)
               .sleep(300).mouseMove(55, 5).click(0);
    });

    it('click: div.columns-val > div.spinner-buttons > button[type="button"].spinner-up > i.img-commonctrl, 3, 10, 0', async function(){
        await driver.sleep(300).wait('div.columns-val > div.spinner-buttons > button[type="button"].spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(3, 10).click(0);
    });

    it('click: div.rows-val > div.spinner-buttons > button[type="button"].spinner-up > i.img-commonctrl, 11, 10, 0', async function(){
        await driver.sleep(300).wait('div.rows-val > div.spinner-buttons > button[type="button"].spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(11, 10).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 622, 214, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(622, 214).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 622, 214, 2', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(622, 214).click(2);
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

    it('click: div.rows-val > input[type="text"].form-control, 19, 13, 0', async function(){
        await driver.sleep(300).wait('div.rows-val > input[type="text"].form-control', 30000)
               .sleep(300).mouseMove(19, 13).click(0);
    });

    it('click: OK ( //button[text()="OK"], 45, 13, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(45, 13).click(0);
    });

    it('click: #id_viewer_overlay, 621, 221, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(621, 221).click(0);
    });

    it('click: #id_viewer_overlay, 670, 187, 2', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(670, 187).click(2);
    });

    it('click: #id_viewer_overlay, 650, 201, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(650, 201).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 620, 215, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(620, 215).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 622, 220, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(622, 220).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 682, 179, 2', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(682, 179).click(2);
    });

    it('click: Cell Vertical Alignm... ( li:nth-child(15) > a[type="menuitem"]:nth-child(1), 81, 10, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(15) > a[type="menuitem"]:nth-child(1)', 30000)
               .sleep(300).mouseMove(81, 10).click(0);
    });

    it('click: Align Middle ( li:nth-child(2) > a[type="menuitem"].checkable, 36, 13, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(2) > a[type="menuitem"].checkable', 30000)
               .sleep(300).mouseMove(36, 13).click(0);
    });

    it('switchFrame: null', async function(){
        await driver.switchFrame(null);
    });

    it('sleep: 1000', async function(){
        await driver.sleep(1000);
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

    it('click: #id_viewer_overlay, 720, 449, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(720, 449).click(0);
    });

    it('switchWindow: 0', async function(){
        await driver.sleep(500).switchWindow(0);
    });

    it('scrollTo: 0, 106', async function(){
        await driver.scrollTo(0, 106);
    });

    it('click: new (27).docx ( tr:nth-child(1) > td:nth-child(1) > a.text > span, 29, 8, 0 )', async function(){
        await driver.sleep(300).wait('tr:nth-child(1) > td:nth-child(1) > a.text > span', 30000)
               .sleep(300).mouseMove(29, 8).click(0);
    });

    it('switchWindow: 2', async function(){
        await driver.sleep(500).switchWindow(2);
    });

    it('waitBody: ', async function(){
        await driver.sleep(500).wait('body', 30000).html().then(function(code){
            isPageError(code).should.be.false;
        });
    });

    it('switchFrame: iframe[name="frameEditor"]', async function(){
        await driver.switchFrame(null)
               .wait('iframe[name="frameEditor"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: #left-btn-file span, 5, 17, 0', async function(){
        await driver.sleep(300).wait('#left-btn-file span', 30000)
               .sleep(300).mouseMove(5, 17).click(0);
    });

    it('click: #panel-saveas span.docx, 75, 89, 0', async function(){
        await driver.sleep(300).wait('#panel-saveas span.docx', 30000)
               .sleep(300).mouseMove(75, 89).click(0);
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
