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

    it('click: Create Document ( a.document, 38, 39, 0 )', async function(){
        await driver.sleep(300).wait('a.document', 30000)
               .sleep(300).mouseMove(38, 39).click(0);
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

    it('click: #id-toolbar-btn-bold span, 12, 10, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-bold span', 30000)
               .sleep(300).mouseMove(12, 10).click(0);
    });

    it('click: #id-toolbar-btn-italic span, 12, 4, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-italic span', 30000)
               .sleep(300).mouseMove(12, 4).click(0);
    });

    it('click: #id-toolbar-btn-underline span, 10, 16, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-underline span', 30000)
               .sleep(300).mouseMove(10, 16).click(0);
    });

    it('click: #id-toolbar-btn-strikeout span, 8, 13, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-strikeout span', 30000)
               .sleep(300).mouseMove(8, 13).click(0);
    });

    it('click: #id-toolbar-btn-superscript span, 6, 10, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-superscript span', 30000)
               .sleep(300).mouseMove(6, 10).click(0);
    });

    it('click: #id-toolbar-btn-superscript span, 6, 10, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-superscript span', 30000)
               .sleep(300).mouseMove(6, 10).click(0);
    });

    it('click: #id-toolbar-btn-subscript span, 10, 12, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-subscript span', 30000)
               .sleep(300).mouseMove(10, 12).click(0);
    });

    it('click: #id-toolbar-btn-subscript span, 10, 12, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-subscript span', 30000)
               .sleep(300).mouseMove(10, 12).click(0);
    });

    it('sendKeys: 123', async function(){
        await driver.sendKeys('123');
    });

    it('mouseDown: #id_viewer_overlay, 477, 111, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(477, 111).mouseDown(0);
    });

    it('mouseUp: #id_viewer_overlay, 501, 106, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(501, 106).mouseMove(501, 106).mouseUp(0);
    });

    it('click: #asc-gen236 span, 4, 3, 0', async function(){
        await driver.sleep(300).wait('#asc-gen236 span', 30000)
               .sleep(300).mouseMove(4, 3).click(0);
    });

    it('click: 16 ( //a[text()="16"], 27, 25, 0 )', async function(){
        await driver.sleep(300).wait('//a[text()="16"]', 30000)
               .sleep(300).mouseMove(27, 25).click(0);
    });

    it('click: #id_viewer_overlay, 554, 112, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(554, 112).click(0);
    });

    it('sendKeys: 456', async function(){
        await driver.sendKeys('456');
    });

    it('mouseDown: #id_viewer_overlay, 478, 106, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(478, 106).mouseDown(0);
    });

    it('mouseUp: #id_viewer_overlay, 553, 98, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(553, 98).mouseMove(553, 98).mouseUp(0);
    });

    it('click: #id-toolbar-btn-highlight span.caret, 6, 0, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-highlight span.caret', 30000)
               .sleep(300).mouseMove(6, 0).click(0);
    });

    it('click: #id-toolbar-menu-highlight span:nth-child(1), 14, 11, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-menu-highlight span:nth-child(1)', 30000)
               .sleep(300).mouseMove(14, 11).click(0);
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

    it('mouseMove: #id-toolbar-btn-fontcolor button.dropdown-toggle, 2, 5', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-fontcolor button.dropdown-toggle', 30000)
               .sleep(300).mouseMove(2, 5);
    });

    it('click: #id-toolbar-btn-fontcolor button.dropdown-toggle, 2, 5, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-fontcolor button.dropdown-toggle', 30000)
               .sleep(300).mouseMove(2, 5).click(0);
    });

    it('click: a.color-5B9BD5 > em > span, 9, 10, 0', async function(){
        await driver.sleep(300).wait('a.color-5B9BD5 > em > span', 30000)
               .sleep(300).mouseMove(9, 10).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 576, 114, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(576, 114).click(0);
    });

    it('keyDown: SHIFT', async function(){
        await driver.keyDown('SHIFT');
    });

    it('sendKeys: {LEFT}{LEFT}{LEFT}{LEFT}{LEFT}{LEFT}', async function(){
        await driver.sendKeys('{LEFT}{LEFT}{LEFT}{LEFT}{LEFT}{LEFT}');
    });

    it('keyUp: SHIFT', async function(){
        await driver.keyUp('SHIFT');
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 576, 114, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(576, 114).click(0);
    });

    it('mouseDown: div:nth-child(3) > canvas:nth-child(2), 479, 102, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(479, 102).mouseDown(0);
    });

    it('mouseUp: div:nth-child(3) > canvas:nth-child(2), 552, 103, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(552, 103).mouseMove(552, 103).mouseUp(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 552, 103, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(552, 103).click(0);
    });

    it('sendKeys: 123456{ENTER}', async function(){
        await driver.sendKeys('123456{ENTER}');
    });

    it('click: span.btn-bold, 5, 11, 0', async function(){
        await driver.sleep(300).wait('span.btn-bold', 30000)
               .sleep(300).mouseMove(5, 11).click(0);
    });

    it('click: span.btn-italic, 2, 3, 0', async function(){
        await driver.sleep(300).wait('span.btn-italic', 30000)
               .sleep(300).mouseMove(2, 3).click(0);
    });

    it('click: span.btn-underline, 6, 6, 0', async function(){
        await driver.sleep(300).wait('span.btn-underline', 30000)
               .sleep(300).mouseMove(6, 6).click(0);
    });

    it('click: span.btn-strikeout, 8, 10, 0', async function(){
        await driver.sleep(300).wait('span.btn-strikeout', 30000)
               .sleep(300).mouseMove(8, 10).click(0);
    });

    it('click: span:nth-child(7) > div.split > button[type="button"].dropdown-toggle, 5, 2, 0', async function(){
        await driver.sleep(300).wait('span:nth-child(7) > div.split > button[type="button"].dropdown-toggle', 30000)
               .sleep(300).mouseMove(5, 2).click(0);
    });

    it('click: span:nth-child(13), 10, 5, 0', async function(){
        await driver.sleep(300).wait('span:nth-child(13)', 30000)
               .sleep(300).mouseMove(10, 5).click(0);
    });

    it('sendKeys: abc', async function(){
        await driver.sendKeys('abc');
    });

    it('mouseDown: div:nth-child(3) > canvas:nth-child(2), 480, 149, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(480, 149).mouseDown(0);
    });

    it('mouseUp: div:nth-child(3) > canvas:nth-child(2), 512, 155, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(512, 155).mouseMove(512, 155).mouseUp(0);
    });

    it('click: Show advanced settin... ( label.link, 57, 5, 0 )', async function(){
        await driver.sleep(300).wait('label.link', 30000)
               .sleep(300).mouseMove(57, 5).click(0);
    });

    it('click: Font ( div.menu-panel > button:nth-child(3), 52, 21, 0 )', async function(){
        await driver.sleep(300).wait('div.menu-panel > button:nth-child(3)', 30000)
               .sleep(300).mouseMove(52, 21).click(0);
    });

    it('click: tr:nth-child(2) > td:nth-child(1) > div > label.checkbox-indeterminate > input[type="button"].img-commonctrl, 10, 7, 0', async function(){
        await driver.sleep(300).wait('tr:nth-child(2) > td:nth-child(1) > div > label.checkbox-indeterminate > input[type="button"].img-commonctrl', 30000)
               .sleep(300).mouseMove(10, 7).click(0);
    });

    it('click: OK ( //button[text()="OK"], 39, 13, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(39, 13).click(0);
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

    it('click: Show advanced settin... ( label.link, 70, 9, 0 )', async function(){
        await driver.sleep(300).wait('label.link', 30000)
               .sleep(300).mouseMove(70, 9).click(0);
    });

    it('click: tr:nth-child(3) > td:nth-child(1) > div > label.checkbox-indeterminate > input[type="button"].img-commonctrl, 12, 8, 0', async function(){
        await driver.sleep(300).wait('tr:nth-child(3) > td:nth-child(1) > div > label.checkbox-indeterminate > input[type="button"].img-commonctrl', 30000)
               .sleep(300).mouseMove(12, 8).click(0);
    });

    it('click: OK ( //button[text()="OK"], 37, 6, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(37, 6).click(0);
    });

    it('click: Show advanced settin... ( label.link, 26, 8, 0 )', async function(){
        await driver.sleep(300).wait('label.link', 30000)
               .sleep(300).mouseMove(26, 8).click(0);
    });

    it('click: tr:nth-child(4) > td:nth-child(1) > div > label.checkbox-indeterminate > input[type="button"].img-commonctrl, 2, 8, 0', async function(){
        await driver.sleep(300).wait('tr:nth-child(4) > td:nth-child(1) > div > label.checkbox-indeterminate > input[type="button"].img-commonctrl', 30000)
               .sleep(300).mouseMove(2, 8).click(0);
    });

    it('click: OK ( //button[text()="OK"], 40, 11, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(40, 11).click(0);
    });

    it('click: Show advanced settin... ( label.link, 46, 6, 0 )', async function(){
        await driver.sleep(300).wait('label.link', 30000)
               .sleep(300).mouseMove(46, 6).click(0);
    });

    it('click: td.padding-small > div > label.checkbox-indeterminate > input[type="button"].checked, 9, 8, 0', async function(){
        await driver.sleep(300).wait('td.padding-small > div > label.checkbox-indeterminate > input[type="button"].checked', 30000)
               .sleep(300).mouseMove(9, 8).click(0);
    });

    it('click: input.checked, 8, 6, 0', async function(){
        await driver.sleep(300).wait('input.checked', 30000)
               .sleep(300).mouseMove(8, 6).click(0);
    });

    it('click: tr:nth-child(2) > td:nth-child(2) > div > label.checkbox-indeterminate > input[type="button"].img-commonctrl, 5, 4, 0', async function(){
        await driver.sleep(300).wait('tr:nth-child(2) > td:nth-child(2) > div > label.checkbox-indeterminate > input[type="button"].img-commonctrl', 30000)
               .sleep(300).mouseMove(5, 4).click(0);
    });

    it('click: OK ( //button[text()="OK"], 40, 11, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(40, 11).click(0);
    });

    it('click: Show advanced settin... ( label.link, 67, 4, 0 )', async function(){
        await driver.sleep(300).wait('label.link', 30000)
               .sleep(300).mouseMove(67, 4).click(0);
    });

    it('click: tr:nth-child(3) > td:nth-child(2) > div > label.checkbox-indeterminate > input[type="button"].img-commonctrl, 8, 7, 0', async function(){
        await driver.sleep(300).wait('tr:nth-child(3) > td:nth-child(2) > div > label.checkbox-indeterminate > input[type="button"].img-commonctrl', 30000)
               .sleep(300).mouseMove(8, 7).click(0);
    });

    it('click: OK ( //button[text()="OK"], 60, 9, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(60, 9).click(0);
    });

    it('click: Show advanced settin... ( label.link, 55, 12, 0 )', async function(){
        await driver.sleep(300).wait('label.link', 30000)
               .sleep(300).mouseMove(55, 12).click(0);
    });

    it('click: tr:nth-child(4) > td:nth-child(2) > div > label.checkbox-indeterminate > input[type="button"].img-commonctrl, 6, 12, 0', async function(){
        await driver.sleep(300).wait('tr:nth-child(4) > td:nth-child(2) > div > label.checkbox-indeterminate > input[type="button"].img-commonctrl', 30000)
               .sleep(300).mouseMove(6, 12).click(0);
    });

    it('click: OK ( //button[text()="OK"], 39, 13, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(39, 13).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 539, 150, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(539, 150).click(0);
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

    it('sendKeys: Helloworld', async function(){
        await driver.sendKeys('Helloworld');
    });

    it('mouseDown: #id_viewer_overlay, 506, 153, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(506, 153).mouseDown(0);
    });

    it('mouseUp: #id_viewer_overlay, 613, 158, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(613, 158).mouseMove(613, 158).mouseUp(0);
    });

    it('click: Show advanced settin... ( label.link, 19, 5, 0 )', async function(){
        await driver.sleep(300).wait('label.link', 30000)
               .sleep(300).mouseMove(19, 5).click(0);
    });

    it('click: tr:nth-child(3) > td:nth-child(2) > div > label.checkbox-indeterminate > input[type="button"].img-commonctrl, 8, 9, 0', async function(){
        await driver.sleep(300).wait('tr:nth-child(3) > td:nth-child(2) > div > label.checkbox-indeterminate > input[type="button"].img-commonctrl', 30000)
               .sleep(300).mouseMove(8, 9).click(0);
    });

    it('click: OK ( //button[text()="OK"], 58, 5, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(58, 5).click(0);
    });


    it('click: Show advanced settin... ( label.link, 11, 9, 0 )', async function(){
        await driver.sleep(300).wait('label.link', 30000)
               .sleep(300).mouseMove(11, 9).click(0);
    });

    it('click: input.checked, 7, 9, 0', async function(){
        await driver.sleep(300).wait('input.checked', 30000)
               .sleep(300).mouseMove(7, 9).click(0);
    });

    it('click: OK ( //button[text()="OK"], 44, 8, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(44, 8).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 624, 150, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(624, 150).click(0);
    });

    it('mouseMove: span:nth-child(4) > div.split > button[type="button"].dropdown-toggle, 6, 5', async function(){
        await driver.sleep(300).wait('span:nth-child(4) > div.split > button[type="button"].dropdown-toggle', 30000)
               .sleep(300).mouseMove(6, 5);
    });

    it('click: span:nth-child(4) > div.split > button[type="button"].dropdown-toggle > span.img-commonctrl, 4, 0, 0', async function(){
        await driver.sleep(300).wait('span:nth-child(4) > div.split > button[type="button"].dropdown-toggle > span.img-commonctrl', 30000)
               .sleep(300).mouseMove(4, 0).click(0);
    });

    it('click: Insert Text Art ( li.dropdown-submenu > a[type="menuitem"]:nth-child(1), 36, 10, 0 )', async function(){
        await driver.sleep(300).wait('li.dropdown-submenu > a[type="menuitem"]:nth-child(1)', 30000)
               .sleep(300).mouseMove(36, 10).click(0);
    });

    it('click: div:nth-child(1) > div.item-art > img, 34, 22, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(1) > div.item-art > img', 30000)
               .sleep(300).mouseMove(34, 22).click(0);
    });

    it('click: span:nth-child(8) > div.split > button[type="button"].dropdown-toggle > span.img-commonctrl, 5, 4, 0', async function(){
        await driver.sleep(300).wait('span:nth-child(8) > div.split > button[type="button"].dropdown-toggle > span.img-commonctrl', 30000)
               .sleep(300).mouseMove(5, 4).click(0);
    });

    it('click: a.color-C45911 > em > span, 8, 6, 0', async function(){
        await driver.sleep(300).wait('a.color-C45911 > em > span', 30000)
               .sleep(300).mouseMove(8, 6).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 905, 202, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(905, 202).click(0);
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

    it('click: #id_viewer_overlay, 741, 188, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(741, 188).click(0);
    });

    it('mouseDown: #id_viewer_overlay, 679, 139, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(679, 139).mouseDown(0);
    });

    it('mouseUp: #id_viewer_overlay, 848, 141, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(848, 141).mouseMove(848, 141).mouseUp(0);
    });

    it('click: #id_viewer_overlay, 863, 239, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(863, 239).click(0);
    });

    it('switchWindow: 0', async function(){
        await driver.sleep(500).switchWindow(0);
    });

    it('scrollTo: 0, 159', async function(){
        await driver.scrollTo(0, 159);
    });

    it('scrollTo: 0, 212', async function(){
        await driver.scrollTo(0, 212);
    });

    it('click: new (74).docx ( tr:nth-child(1) > td:nth-child(1) > a.text > span, 60, 9, 0 )', async function(){
        await driver.sleep(300).wait('tr:nth-child(1) > td:nth-child(1) > a.text > span', 30000)
               .sleep(300).mouseMove(60, 9).click(0);
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

    it('click: #left-btn-file span, 16, 17, 0', async function(){
        await driver.sleep(300).wait('#left-btn-file span', 30000)
               .sleep(300).mouseMove(16, 17).click(0);
    });

    it('click: #panel-saveas span.docx, 62, 92, 0', async function(){
        await driver.sleep(300).wait('#panel-saveas span.docx', 30000)
               .sleep(300).mouseMove(62, 92).click(0);
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
