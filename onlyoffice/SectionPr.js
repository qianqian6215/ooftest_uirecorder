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

    it('url: http://172.16.3.100:3000/', async function(){
        await driver.url(_(`http://172.16.3.100:3000/`));
    });

    it('waitBody: ', async function(){
        await driver.sleep(500).wait('body', 30000).html().then(function(code){
            isPageError(code).should.be.false;
        });
    });

    it('click: Create Document ( a.document, 42, 35, 0 )', async function(){
        await driver.sleep(300).wait('a.document', 30000)
               .sleep(300).mouseMove(42, 35).click(0);
    });

    it('switchWindow: 1', async function(){
        await driver.sleep(500).switchWindow(1);
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

    it('click: #id_viewer_overlay, 543, 92, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(543, 92).click(0);
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

    it('sendKeys: A123', async function(){
        await driver.sendKeys('A123');
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

    it('mouseMove: #id-toolbar-btn-pagebreak button.dropdown-toggle, 6, 3', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-pagebreak button.dropdown-toggle', 30000)
               .sleep(300).mouseMove(6, 3);
    });

    it('click: #id-toolbar-btn-pagebreak button.dropdown-toggle, 6, 3, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-pagebreak button.dropdown-toggle', 30000)
               .sleep(300).mouseMove(6, 3).click(0);
    });

    it('click: Insert Section Break ( li.dropdown-submenu > a[type="menuitem"]:nth-child(1), 46, 13, 0 )', async function(){
        await driver.sleep(300).wait('li.dropdown-submenu > a[type="menuitem"]:nth-child(1)', 30000)
               .sleep(300).mouseMove(46, 13).click(0);
    });

    it('click: Continuous Page ( li > ul.dropdown-menu > li:nth-child(2) > a[type="menuitem"], 43, 14, 0 )', async function(){
        await driver.sleep(300).wait('li > ul.dropdown-menu > li:nth-child(2) > a[type="menuitem"]', 30000)
               .sleep(300).mouseMove(43, 14).click(0);
    });

    it('sendKeys: 456', async function(){
        await driver.sendKeys('456');
    });

    it('sendKeys: {ENTER}', async function(){
        await driver.sendKeys('{ENTER}');
    });

    it('mouseMove: div:nth-child(10) > div:nth-child(1) > span:nth-child(1) > div.split > button[type="button"].dropdown-toggle, 6, 5', async function(){
        await driver.sleep(300).wait('div:nth-child(10) > div:nth-child(1) > span:nth-child(1) > div.split > button[type="button"].dropdown-toggle', 30000)
               .sleep(300).mouseMove(6, 5);
    });

    it('click: div:nth-child(10) > div:nth-child(1) > span:nth-child(1) > div.split > button[type="button"].dropdown-toggle, 6, 5, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(10) > div:nth-child(1) > span:nth-child(1) > div.split > button[type="button"].dropdown-toggle', 30000)
               .sleep(300).mouseMove(6, 5).click(0);
    });

    it('click: Insert Section Break ( li.dropdown-submenu > a[type="menuitem"]:nth-child(1), 39, 14, 0 )', async function(){
        await driver.sleep(300).wait('li.dropdown-submenu > a[type="menuitem"]:nth-child(1)', 30000)
               .sleep(300).mouseMove(39, 14).click(0);
    });

    it('click: Next Page ( li > ul.dropdown-menu > li:nth-child(1) > a[type="menuitem"], 25, 11, 0 )', async function(){
        await driver.sleep(300).wait('li > ul.dropdown-menu > li:nth-child(1) > a[type="menuitem"]', 30000)
               .sleep(300).mouseMove(25, 11).click(0);
    });

    it('mouseDown: div:nth-child(2) > canvas:nth-child(2), 3, 196, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(2) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(3, 196).mouseDown(0);
    });

    it('mouseUp: div:nth-child(2) > canvas:nth-child(2), 4, 421, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(2) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(4, 421).mouseMove(4, 421).mouseUp(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 505, 92, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(505, 92).click(0);
    });

    it('dblClick: div:nth-child(3) > canvas:nth-child(2), 505, 92, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(505, 92).click(0).click(0);
    });

    it('sendKeys: B123', async function(){
        await driver.sendKeys('B123');
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

    it('mouseMove: div:nth-child(10) > div:nth-child(1) > span:nth-child(1) > div.split > button[type="button"].dropdown-toggle, 3, 6', async function(){
        await driver.sleep(300).wait('div:nth-child(10) > div:nth-child(1) > span:nth-child(1) > div.split > button[type="button"].dropdown-toggle', 30000)
               .sleep(300).mouseMove(3, 6);
    });

    it('click: div:nth-child(10) > div:nth-child(1) > span:nth-child(1) > div.split > button[type="button"].dropdown-toggle, 3, 6, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(10) > div:nth-child(1) > span:nth-child(1) > div.split > button[type="button"].dropdown-toggle', 30000)
               .sleep(300).mouseMove(3, 6).click(0);
    });

    it('click: Insert Section Break ( li.dropdown-submenu > a[type="menuitem"]:nth-child(1), 42, 6, 0 )', async function(){
        await driver.sleep(300).wait('li.dropdown-submenu > a[type="menuitem"]:nth-child(1)', 30000)
               .sleep(300).mouseMove(42, 6).click(0);
    });

    it('click: Next Page ( li > ul.dropdown-menu > li:nth-child(1) > a[type="menuitem"], 38, 8, 0 )', async function(){
        await driver.sleep(300).wait('li > ul.dropdown-menu > li:nth-child(1) > a[type="menuitem"]', 30000)
               .sleep(300).mouseMove(38, 8).click(0);
    });

    it('mouseDown: div:nth-child(2) > canvas:nth-child(2), 8, 410, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(2) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(8, 410).mouseDown(0);
    });

    it('mouseUp: div:nth-child(2) > canvas:nth-child(2), 0, 562, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(2) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(0, 562).mouseMove(0, 562).mouseUp(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 506, 86, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(506, 86).click(0);
    });

    it('sendKeys: C123', async function(){
        await driver.sendKeys('C123');
    });

    it('mouseDown: #id_vertical_scroll canvas, 5, 680, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(5, 680).mouseDown(0);
    });

    it('mouseUp: #editor_sdk, 1503, 84, 0', async function(){
        await driver.sleep(300).wait('#editor_sdk', 30000)
               .sleep(300).mouseMove(1503, 84).mouseMove(1503, 84).mouseUp(0);
    });

    it('click: #id_viewer_overlay, 513, 109, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(513, 109).click(0);
    });

    it('dblClick: #id_viewer_overlay, 623, 39, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(623, 39).click(0).click(0);
    });

    it('sendKeys: commonheader', async function(){
        await driver.sendKeys('commonheader');
    });

    it('dblClick: #id_viewer_overlay, 767, 154, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(767, 154).click(0).click(0);
    });

    it('dblClick: #id_viewer_overlay, 767, 154, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(767, 154).click(0).click(0);
    });

    it('dblClick: #id_viewer_overlay, 587, 44, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(587, 44).click(0).click(0);
    });

    it('click: #id-right-menu-header span, 16, 11, 0', async function(){
        await driver.sleep(300).wait('#id-right-menu-header span', 30000)
               .sleep(300).mouseMove(16, 11).click(0);
    });

    it('click: div[id="headerfooter-check-diff-first"] > label.checkbox-indeterminate > input[type="button"].img-commonctrl, 6, 11, 0', async function(){
        await driver.sleep(300).wait('div[id="headerfooter-check-diff-first"] > label.checkbox-indeterminate > input[type="button"].img-commonctrl', 30000)
               .sleep(300).mouseMove(6, 11).click(0);
    });

    it('sendKeys: header1', async function(){
        await driver.sendKeys('header1');
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

    it('mouseDown: #id_vertical_scroll canvas, 11, 25, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(11, 25).mouseDown(0);
    });

    it('mouseUp: #editor_sdk, 1538, 26, 0', async function(){
        await driver.sleep(300).wait('#editor_sdk', 30000)
               .sleep(300).mouseMove(1538, 26).mouseMove(1538, 26).mouseUp(0);
    });

    it('click: div[id="headerfooter-check-diff-odd"] > label.checkbox-indeterminate > input[type="button"].img-commonctrl, 7, 8, 0', async function(){
        await driver.sleep(300).wait('div[id="headerfooter-check-diff-odd"] > label.checkbox-indeterminate > input[type="button"].img-commonctrl', 30000)
               .sleep(300).mouseMove(7, 8).click(0);
    });

    it('mouseDown: #id_vertical_scroll canvas, 9, 30, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(9, 30).mouseDown(0);
    });

    it('mouseUp: #editor_sdk, 1528, 246, 0', async function(){
        await driver.sleep(300).wait('#editor_sdk', 30000)
               .sleep(300).mouseMove(1528, 246).mouseMove(1528, 246).mouseUp(0);
    });

    it('click: #id_viewer_overlay, 475, 252, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(475, 252).click(0);
    });

    it('sendKeys: header1{BACK_SPACE}2', async function(){
        await driver.sendKeys('header1{BACK_SPACE}2');
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

    it('click: #headerfooter-spin-position button.spinner-up > i.img-commonctrl, 9, 10, 0', async function(){
        await driver.sleep(300).wait('#headerfooter-spin-position button.spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(9, 10).click(0);
    });

    it('dblClick: #headerfooter-spin-position button.spinner-up > i.img-commonctrl, 9, 10, 0', async function(){
        await driver.sleep(300).wait('#headerfooter-spin-position button.spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(9, 10).click(0).click(0);
    });

    it('dblClick: #headerfooter-spin-position button.spinner-up > i.img-commonctrl, 9, 10, 0', async function(){
        await driver.sleep(300).wait('#headerfooter-spin-position button.spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(9, 10).click(0).click(0);
    });

    it('dblClick: #headerfooter-spin-position button.spinner-up > i.img-commonctrl, 9, 10, 0', async function(){
        await driver.sleep(300).wait('#headerfooter-spin-position button.spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(9, 10).click(0).click(0);
    });

    it('dblClick: #headerfooter-spin-position button.spinner-up > i.img-commonctrl, 9, 10, 0', async function(){
        await driver.sleep(300).wait('#headerfooter-spin-position button.spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(9, 10).click(0).click(0);
    });

    it('dblClick: #headerfooter-spin-position button.spinner-up > i.img-commonctrl, 9, 10, 0', async function(){
        await driver.sleep(300).wait('#headerfooter-spin-position button.spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(9, 10).click(0).click(0);
    });

    it('click: #headerfooter-spin-position button.spinner-up > i.img-commonctrl, 9, 10, 0', async function(){
        await driver.sleep(300).wait('#headerfooter-spin-position button.spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(9, 10).click(0);
    });

    it('dblClick: #id_viewer_overlay, 741, 398, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(741, 398).click(0).click(0);
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

    it('dblClick: #id_viewer_overlay, 586, 255, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(586, 255).click(0).click(0);
    });

    it('click: #id_viewer_overlay, 514, 127, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(514, 127).click(0);
    });

    it('sendKeys: footer1', async function(){
        await driver.sendKeys('footer1');
    });

    it('click: #id-right-menu-header span, 8, 9, 0', async function(){
        await driver.sleep(300).wait('#id-right-menu-header span', 30000)
               .sleep(300).mouseMove(8, 9).click(0);
    });

    it('dblClick: #headerfooter-spin-position button.spinner-up > i.img-commonctrl, 6, 9, 0', async function(){
        await driver.sleep(300).wait('#headerfooter-spin-position button.spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(6, 9).click(0).click(0);
    });

    it('dblClick: #headerfooter-spin-position button.spinner-up > i.img-commonctrl, 6, 9, 0', async function(){
        await driver.sleep(300).wait('#headerfooter-spin-position button.spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(6, 9).click(0).click(0);
    });

    it('click: #headerfooter-spin-position button.spinner-up > i.img-commonctrl, 6, 9, 0', async function(){
        await driver.sleep(300).wait('#headerfooter-spin-position button.spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(6, 9).click(0);
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

    it('click: #headerfooter-spin-position button.spinner-up > i.img-commonctrl, 5, 9, 0', async function(){
        await driver.sleep(300).wait('#headerfooter-spin-position button.spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(5, 9).click(0);
    });

    it('dblClick: #headerfooter-spin-position button.spinner-up > i.img-commonctrl, 5, 9, 0', async function(){
        await driver.sleep(300).wait('#headerfooter-spin-position button.spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(5, 9).click(0).click(0);
    });

    it('dblClick: #headerfooter-spin-position button.spinner-up > i.img-commonctrl, 5, 9, 0', async function(){
        await driver.sleep(300).wait('#headerfooter-spin-position button.spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(5, 9).click(0).click(0);
    });

    it('dblClick: #headerfooter-spin-position button.spinner-up > i.img-commonctrl, 5, 9, 0', async function(){
        await driver.sleep(300).wait('#headerfooter-spin-position button.spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(5, 9).click(0).click(0);
    });

    it('click: #headerfooter-spin-position button.spinner-up > i.img-commonctrl, 5, 9, 0', async function(){
        await driver.sleep(300).wait('#headerfooter-spin-position button.spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(5, 9).click(0);
    });

    it('dblClick: #id_viewer_overlay, 705, 314, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(705, 314).click(0).click(0);
    });

    it('sendKeys: 666', async function(){
        await driver.sendKeys('666');
    });

    it('click: #id_viewer_overlay, 704, 314, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(704, 314).click(0);
    });

    it('mouseMove: #id-toolbar-btn-pagemargins button, 25, 5', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-pagemargins button', 30000)
               .sleep(300).mouseMove(25, 5);
    });

    it('click: #id-toolbar-btn-pagemargins button, 25, 5, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-pagemargins button', 30000)
               .sleep(300).mouseMove(25, 5).click(0);
    });

    it('mouseMove: #id-toolbar-btn-pageorient span.caret, 1, 3', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-pageorient span.caret', 30000)
               .sleep(300).mouseMove(1, 3);
    });

    it('click: div:nth-child(12) > div:nth-child(1) > span:nth-child(1) > div.btn-group > button[type="button"].btn-toolbar > span.img-commonctrl, 4, 2, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(12) > div:nth-child(1) > span:nth-child(1) > div.btn-group > button[type="button"].btn-toolbar > span.img-commonctrl', 30000)
               .sleep(300).mouseMove(4, 2).click(0);
    });

    it('click: Landscape ( li:nth-child(2) > a[type="menuitem"].checkable, 30, 10, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(2) > a[type="menuitem"].checkable', 30000)
               .sleep(300).mouseMove(30, 10).click(0);
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

    it('click: #id_viewer_overlay, 416, 322, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(416, 322).click(0);
    });

    it('mouseDown: #id_vertical_scroll canvas, 7, 269, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(7, 269).mouseDown(0);
    });

    it('mouseUp: #editor_sdk, 1533, 523, 0', async function(){
        await driver.sleep(300).wait('#editor_sdk', 30000)
               .sleep(300).mouseMove(1533, 523).mouseMove(1533, 523).mouseUp(0);
    });

    it('click: #id_viewer_overlay, 524, 108, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(524, 108).click(0);
    });

    it('sendKeys: 777', async function(){
        await driver.sendKeys('777');
    });

    it('click: div:nth-child(12) > div:nth-child(2) > span:nth-child(2) > div.btn-group > button[type="button"].btn-toolbar > span.img-commonctrl, 5, 2, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(12) > div:nth-child(2) > span:nth-child(2) > div.btn-group > button[type="button"].btn-toolbar > span.img-commonctrl', 30000)
               .sleep(300).mouseMove(5, 2).click(0);
    });

    it('click: Three ( li:nth-child(3) > a[type="menuitem"].checkable, 33, 9, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(3) > a[type="menuitem"].checkable', 30000)
               .sleep(300).mouseMove(33, 9).click(0);
    });

    it('click: div:nth-child(12) > div:nth-child(2) > span:nth-child(2) > div.btn-group > button[type="button"].btn-toolbar > span.img-commonctrl, 5, 3, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(12) > div:nth-child(2) > span:nth-child(2) > div.btn-group > button[type="button"].btn-toolbar > span.img-commonctrl', 30000)
               .sleep(300).mouseMove(5, 3).click(0);
    });

    it('click: Custom Columns ( li:nth-child(7) > a[type="menuitem"], 35, 8, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(7) > a[type="menuitem"]', 30000)
               .sleep(300).mouseMove(35, 8).click(0);
    });

    it('click: div > div > label.checkbox-indeterminate > input[type="button"].img-commonctrl, 5, 10, 0', async function(){
        await driver.sleep(300).wait('div > div > label.checkbox-indeterminate > input[type="button"].img-commonctrl', 30000)
               .sleep(300).mouseMove(5, 10).click(0);
    });

    it('click: Ok ( //button[text()="Ok"], 30, 7, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="Ok"]', 30000)
               .sleep(300).mouseMove(30, 7).click(0);
    });

    it('click: div:nth-child(10) > div:nth-child(1) > span:nth-child(1) > div.split > button[type="button"].dropdown-toggle, 6, 15, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(10) > div:nth-child(1) > span:nth-child(1) > div.split > button[type="button"].dropdown-toggle', 30000)
               .sleep(300).mouseMove(6, 15).click(0);
    });

    it('click: Insert Column Break ( li:nth-child(2) > a[type="menuitem"], 35, 18, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(2) > a[type="menuitem"]', 30000)
               .sleep(300).mouseMove(35, 18).click(0);
    });

    it('sendKeys: secondc1', async function(){
        await driver.sendKeys('secondc1');
    });

    it('click: div:nth-child(10) > div:nth-child(1) > span:nth-child(1) > div.split > button[type="button"].dropdown-toggle, 5, 15, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(10) > div:nth-child(1) > span:nth-child(1) > div.split > button[type="button"].dropdown-toggle', 30000)
               .sleep(300).mouseMove(5, 15).click(0);
    });

    it('click: Insert Section Break ( li.dropdown-submenu > a[type="menuitem"]:nth-child(1), 35, 11, 0 )', async function(){
        await driver.sleep(300).wait('li.dropdown-submenu > a[type="menuitem"]:nth-child(1)', 30000)
               .sleep(300).mouseMove(35, 11).click(0);
    });

    it('click: Insert Column Break ( li:nth-child(2) > a[type="menuitem"], 34, 17, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(2) > a[type="menuitem"]', 30000)
               .sleep(300).mouseMove(34, 17).click(0);
    });

    it('sendKeys: thirdc1', async function(){
        await driver.sendKeys('thirdc1');
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

    it('mouseDown: #id_vertical_scroll canvas, 9, 620, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(9, 620).mouseDown(0);
    });

    it('mouseUp: #viewport-hbox-layout, 1613, 91, 0', async function(){
        await driver.sleep(300).wait('#viewport-hbox-layout', 30000)
               .sleep(300).mouseMove(1613, 91).mouseMove(1613, 91).mouseUp(0);
    });

    it('mouseDown: #id_viewer_overlay, 510, 141, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(510, 141).mouseDown(0);
    });

    it('mouseUp: #id_main_view, 510, 141, 0', async function(){
        await driver.sleep(300).wait('#id_main_view', 30000)
               .sleep(300).mouseMove(510, 141).mouseMove(510, 141).mouseUp(0);
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

    it('click: #id_vertical_scroll canvas, 11, 8, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(11, 8).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 10, 8, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(10, 8).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 10, 8, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(10, 8).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 10, 8, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(10, 8).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 10, 8, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(10, 8).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 10, 8, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(10, 8).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 10, 8, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(10, 8).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 10, 8, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(10, 8).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 10, 8, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(10, 8).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 10, 8, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(10, 8).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 10, 8, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(10, 8).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 10, 8, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(10, 8).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 10, 8, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(10, 8).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 10, 8, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(10, 8).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 10, 8, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(10, 8).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 10, 8, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(10, 8).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 10, 8, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(10, 8).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 10, 8, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(10, 8).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 10, 8, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(10, 8).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 10, 8, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(10, 8).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 10, 8, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(10, 8).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 10, 8, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(10, 8).click(0).click(0);
    });

    it('click: #id_vertical_scroll canvas, 10, 8, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(10, 8).click(0);
    });

    it('click: #id_viewer_overlay, 499, 178, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(499, 178).click(0);
    });

    it('sendKeys: {ENTER}789', async function(){
        await driver.sendKeys('{ENTER}789');
    });

    it('dblClick: #id_vertical_scroll canvas, 4, 816, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(4, 816).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 4, 816, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(4, 816).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 4, 816, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(4, 816).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 4, 816, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(4, 816).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 4, 816, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(4, 816).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 4, 816, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(4, 816).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 6, 8, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(6, 8).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 5, 7, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(5, 7).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 5, 7, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(5, 7).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 5, 7, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(5, 7).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 5, 7, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(5, 7).click(0).click(0);
    });

    it('click: #id_vertical_scroll canvas, 5, 6, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(5, 6).click(0);
    });

    it('click: #id_viewer_overlay, 484, 122, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(484, 122).click(0);
    });

    it('click: #id-toolbar-btn-notes span.caret, 5, 0, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-notes span.caret', 30000)
               .sleep(300).mouseMove(5, 0).click(0);
    });

    it('click: Insert Footnote ( #asc-gen3955, 37, 6, 0 )', async function(){
        await driver.sleep(300).wait('#asc-gen3955', 30000)
               .sleep(300).mouseMove(37, 6).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 9, 820, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(9, 820).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 9, 820, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(9, 820).click(0).click(0);
    });

    it('click: #id_vertical_scroll canvas, 9, 820, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(9, 820).click(0);
    });

    it('sendKeys: for89', async function(){
        await driver.sendKeys('for89');
    });

    it('dblClick: #id_vertical_scroll canvas, 4, 11, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(4, 11).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 5, 10, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(5, 10).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 5, 10, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(5, 10).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 5, 9, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(5, 9).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 4, 8, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(4, 8).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 4, 8, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(4, 8).click(0).click(0);
    });

    it('click: #id_vertical_scroll canvas, 4, 8, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(4, 8).click(0);
    });

    it('click: #id_viewer_overlay, 493, 171, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(493, 171).click(0);
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

    it('dblClick: #id_vertical_scroll canvas, 10, 817, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(10, 817).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 10, 817, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(10, 817).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 10, 817, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(10, 817).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 10, 817, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(10, 817).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 9, 817, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(9, 817).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 6, 9, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(6, 9).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 6, 8, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(6, 8).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 6, 8, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(6, 8).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 6, 8, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(6, 8).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 6, 8, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(6, 8).click(0).click(0);
    });

    it('click: div:nth-child(10) > div:nth-child(2) > span:nth-child(5) > div.split > button[type="button"].dropdown-toggle > span.img-commonctrl, 5, 0, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(10) > div:nth-child(2) > span:nth-child(5) > div.split > button[type="button"].dropdown-toggle > span.img-commonctrl', 30000)
               .sleep(300).mouseMove(5, 0).click(0);
    });

    it('click: Notes Settings ( li:nth-child(6) > a[type="menuitem"], 33, 10, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(6) > a[type="menuitem"]', 30000)
               .sleep(300).mouseMove(33, 10).click(0);
    });

    it('click: td.padding-large > div:nth-child(2) > span.input-group-nr > input[type="text"].form-control, 58, 14, 0', async function(){
        await driver.sleep(300).wait('td.padding-large > div:nth-child(2) > span.input-group-nr > input[type="text"].form-control', 30000)
               .sleep(300).mouseMove(58, 14).click(0);
    });

    it('click: Below text ( li:nth-child(2) > a[type="menuitem"], 52, 9, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(2) > a[type="menuitem"]', 30000)
               .sleep(300).mouseMove(52, 9).click(0);
    });

    it('click: Insert ( //button[text()="Insert"], 56, 8, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="Insert"]', 30000)
               .sleep(300).mouseMove(56, 8).click(0);
    });

    it('click: div:nth-child(10) > div:nth-child(2) > span:nth-child(5) > div.split > button[type="button"].dropdown-toggle, 4, 5, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(10) > div:nth-child(2) > span:nth-child(5) > div.split > button[type="button"].dropdown-toggle', 30000)
               .sleep(300).mouseMove(4, 5).click(0);
    });

    it('click: Notes Settings ( li:nth-child(6) > a[type="menuitem"], 39, 16, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(6) > a[type="menuitem"]', 30000)
               .sleep(300).mouseMove(39, 16).click(0);
    });

    it('click: div > div:nth-child(2) > span.input-group-nr > input[type="text"].form-control, 42, 11, 0', async function(){
        await driver.sleep(300).wait('div > div:nth-child(2) > span.input-group-nr > input[type="text"].form-control', 30000)
               .sleep(300).mouseMove(42, 11).click(0);
    });

    it('click: a, b, c,... ( li:nth-child(2) > a[type="menuitem"], 39, 19, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(2) > a[type="menuitem"]', 30000)
               .sleep(300).mouseMove(39, 19).click(0);
    });

    it('click: Insert ( //button[text()="Insert"], 39, 11, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="Insert"]', 30000)
               .sleep(300).mouseMove(39, 11).click(0);
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

    it('click: #id_viewer_overlay, 535, 145, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(535, 145).click(0);
    });

    it('switchWindow: 0', async function(){
        await driver.sleep(500).switchWindow(0);
    });

    it('scrollTo: 0, 224', async function(){
        await driver.scrollTo(0, 224);
    });

    it('click: new (64).docx ( tr:nth-child(1) > td:nth-child(1) > a.text > span, 29, 0, 0 )', async function(){
        await driver.sleep(300).wait('tr:nth-child(1) > td:nth-child(1) > a.text > span', 30000)
               .sleep(300).mouseMove(29, 0).click(0);
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

    it('dblClick: #id_vertical_scroll canvas, 7, 820, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(7, 820).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 7, 820, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(7, 820).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 7, 820, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(7, 820).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 7, 820, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(7, 820).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 7, 820, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(7, 820).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 6, 819, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(6, 819).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 6, 819, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(6, 819).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 6, 819, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(6, 819).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 6, 819, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(6, 819).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 6, 819, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(6, 819).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 6, 819, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(6, 819).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 6, 819, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(6, 819).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 4, 817, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(4, 817).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 4, 817, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(4, 817).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 4, 817, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(4, 817).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 4, 817, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(4, 817).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 4, 817, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(4, 817).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 4, 817, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(4, 817).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 4, 817, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(4, 817).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 4, 817, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(4, 817).click(0).click(0);
    });

    it('dblClick: #id_vertical_scroll canvas, 4, 817, 0', async function(){
        await driver.sleep(300).wait('#id_vertical_scroll canvas', 30000)
               .sleep(300).mouseMove(4, 817).click(0).click(0);
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

    it('click: #left-btn-file span, 16, 10, 0', async function(){
        await driver.sleep(300).wait('#left-btn-file span', 30000)
               .sleep(300).mouseMove(16, 10).click(0);
    });

    it('click: #panel-saveas span.docx, 39, 70, 0', async function(){
        await driver.sleep(300).wait('#panel-saveas span.docx', 30000)
               .sleep(300).mouseMove(39, 70).click(0);
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
