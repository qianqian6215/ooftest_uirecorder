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

    it('click: Create Document ( a.document, 27, 60, 0 )', async function(){
        await driver.sleep(300).wait('a.document', 30000)
               .sleep(300).mouseMove(27, 60).click(0);
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

    it('sendKeys: 12345678{LEFT}{LEFT}{LEFT}{LEFT}{BACK_SPACE}{ENTER}', async function(){
        await driver.sendKeys('12345678{LEFT}{LEFT}{LEFT}{LEFT}{BACK_SPACE}{ENTER}');
    });

    it('click: #id_viewer_overlay, 473, 101, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(473, 101).click(0);
    });

    it('click: #id-toolbar-btn-markers span.btn-icon, 11, 11, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-markers span.btn-icon', 30000)
               .sleep(300).mouseMove(11, 11).click(0);
    });

    it('click: #id-toolbar-btn-numbering span.btn-icon, 9, 11, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-numbering span.btn-icon', 30000)
               .sleep(300).mouseMove(9, 11).click(0);
    });

    it('click: #id-toolbar-btn-multilevels span.btn-icon, 10, 13, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-multilevels span.btn-icon', 30000)
               .sleep(300).mouseMove(10, 13).click(0);
    });

    it('click: #id-toolbar-btn-multilevels span.btn-icon, 10, 13, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-multilevels span.btn-icon', 30000)
               .sleep(300).mouseMove(10, 13).click(0);
    });

    it('mouseMove: #id-toolbar-btn-multilevels span.btn-icon, 13, 10', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-multilevels span.btn-icon', 30000)
               .sleep(300).mouseMove(13, 10);
    });

    it('click: #id-toolbar-btn-multilevels span.btn-icon, 13, 10, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-multilevels span.btn-icon', 30000)
               .sleep(300).mouseMove(13, 10).click(0);
    });

    it('mouseMove: div:nth-child(2) > div.item-markerlist, 13, 18', async function(){
        await driver.sleep(300).wait('div:nth-child(2) > div.item-markerlist', 30000)
               .sleep(300).mouseMove(13, 18);
    });

    it('click: div:nth-child(2) > div.item-markerlist, 13, 18, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(2) > div.item-markerlist', 30000)
               .sleep(300).mouseMove(13, 18).click(0);
    });

    it('click: span.btn-decoffset, 9, 19, 0', async function(){
        await driver.sleep(300).wait('span.btn-decoffset', 30000)
               .sleep(300).mouseMove(9, 19).click(0);
    });

    it('click: span.btn-incoffset, 4, 14, 0', async function(){
        await driver.sleep(300).wait('span.btn-incoffset', 30000)
               .sleep(300).mouseMove(4, 14).click(0);
    });

    it('click: span.btn-decoffset, 6, 9, 0', async function(){
        await driver.sleep(300).wait('span.btn-decoffset', 30000)
               .sleep(300).mouseMove(6, 9).click(0);
    });

    it('mouseMove: div:nth-child(8) > div:nth-child(1) > span:nth-child(6) > div.btn-group > button[type="button"].btn-toolbar, 26, 5', async function(){
        await driver.sleep(300).wait('div:nth-child(8) > div:nth-child(1) > span:nth-child(6) > div.btn-group > button[type="button"].btn-toolbar', 30000)
               .sleep(300).mouseMove(26, 5);
    });

    it('click: div:nth-child(8) > div:nth-child(1) > span:nth-child(6) > div.btn-group > button[type="button"].btn-toolbar > span.img-commonctrl, 5, 0, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(8) > div:nth-child(1) > span:nth-child(6) > div.btn-group > button[type="button"].btn-toolbar > span.img-commonctrl', 30000)
               .sleep(300).mouseMove(5, 0).click(0);
    });

    it('mouseMove: 2.0 ( //a[text()="2.0"], 21, 7 )', async function(){
        await driver.sleep(300).wait('//a[text()="2.0"]', 30000)
               .sleep(300).mouseMove(21, 7);
    });

    it('click: 2.0 ( //a[text()="2.0"], 21, 9, 0 )', async function(){
        await driver.sleep(300).wait('//a[text()="2.0"]', 30000)
               .sleep(300).mouseMove(21, 9).click(0);
    });

    it('click: #id_viewer_overlay, 549, 104, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(549, 104).click(0);
    });

    it('click: #asc-gen535 span, 4, 3, 0', async function(){
        await driver.sleep(300).wait('#asc-gen535 span', 30000)
               .sleep(300).mouseMove(4, 3).click(0);
    });

    it('click: Exactly ( //a[text()="Exactly"], 51, 9, 0 )', async function(){
        await driver.sleep(300).wait('//a[text()="Exactly"]', 30000)
               .sleep(300).mouseMove(51, 9).click(0);
    });

    it('dblClick: #paragraph-spin-line-height button.spinner-up > i.img-commonctrl, 5, 8, 0', async function(){
        await driver.sleep(300).wait('#paragraph-spin-line-height button.spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(5, 8).click(0).click(0);
    });

    it('dblClick: #paragraph-spin-line-height button.spinner-up > i.img-commonctrl, 5, 8, 0', async function(){
        await driver.sleep(300).wait('#paragraph-spin-line-height button.spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(5, 8).click(0).click(0);
    });

    it('dblClick: #paragraph-spin-line-height button.spinner-up > i.img-commonctrl, 5, 8, 0', async function(){
        await driver.sleep(300).wait('#paragraph-spin-line-height button.spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(5, 8).click(0).click(0);
    });

    it('dblClick: #paragraph-spin-line-height button.spinner-up > i.img-commonctrl, 5, 8, 0', async function(){
        await driver.sleep(300).wait('#paragraph-spin-line-height button.spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(5, 8).click(0).click(0);
    });

    it('dblClick: #paragraph-spin-spacing-before button.spinner-up > i.img-commonctrl, 9, 3, 0', async function(){
        await driver.sleep(300).wait('#paragraph-spin-spacing-before button.spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(9, 3).click(0).click(0);
    });

    it('dblClick: #paragraph-spin-spacing-before button.spinner-up > i.img-commonctrl, 9, 3, 0', async function(){
        await driver.sleep(300).wait('#paragraph-spin-spacing-before button.spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(9, 3).click(0).click(0);
    });

    it('dblClick: #paragraph-spin-spacing-before button.spinner-up > i.img-commonctrl, 9, 3, 0', async function(){
        await driver.sleep(300).wait('#paragraph-spin-spacing-before button.spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(9, 3).click(0).click(0);
    });

    it('dblClick: #paragraph-spin-spacing-before button.spinner-up > i.img-commonctrl, 9, 3, 0', async function(){
        await driver.sleep(300).wait('#paragraph-spin-spacing-before button.spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(9, 3).click(0).click(0);
    });

    it('dblClick: #paragraph-spin-spacing-after button.spinner-down > i.img-commonctrl, 6, 2, 0', async function(){
        await driver.sleep(300).wait('#paragraph-spin-spacing-after button.spinner-down > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(6, 2).click(0).click(0);
    });

    it('dblClick: #paragraph-spin-spacing-after button.spinner-down > i.img-commonctrl, 6, 2, 0', async function(){
        await driver.sleep(300).wait('#paragraph-spin-spacing-after button.spinner-down > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(6, 2).click(0).click(0);
    });

    it('dblClick: #paragraph-spin-spacing-after button.spinner-down > i.img-commonctrl, 6, 2, 0', async function(){
        await driver.sleep(300).wait('#paragraph-spin-spacing-after button.spinner-down > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(6, 2).click(0).click(0);
    });

    it('dblClick: #paragraph-spin-spacing-after button.spinner-down > i.img-commonctrl, 6, 2, 0', async function(){
        await driver.sleep(300).wait('#paragraph-spin-spacing-after button.spinner-down > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(6, 2).click(0).click(0);
    });

    it('dblClick: #paragraph-spin-spacing-after button.spinner-down > i.img-commonctrl, 6, 2, 0', async function(){
        await driver.sleep(300).wait('#paragraph-spin-spacing-after button.spinner-down > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(6, 2).click(0).click(0);
    });

    it('click: input.img-commonctrl, 8, 8, 0', async function(){
        await driver.sleep(300).wait('input.img-commonctrl', 30000)
               .sleep(300).mouseMove(8, 8).click(0);
    });

    it('click: input.img-commonctrl, 9, 7, 0', async function(){
        await driver.sleep(300).wait('input.img-commonctrl', 30000)
               .sleep(300).mouseMove(9, 7).click(0);
    });

    it('mouseDown: #id_viewer_overlay, 518, 145, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(518, 145).mouseDown(0);
    });

    it('mouseUp: #id_viewer_overlay, 472, 117, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(472, 117).mouseMove(472, 117).mouseUp(0);
    });

    it('click: input.img-commonctrl, 3, 11, 0', async function(){
        await driver.sleep(300).wait('input.img-commonctrl', 30000)
               .sleep(300).mouseMove(3, 11).click(0);
    });

    it('click: input.img-commonctrl, 4, 11, 0', async function(){
        await driver.sleep(300).wait('input.img-commonctrl', 30000)
               .sleep(300).mouseMove(4, 11).click(0);
    });

    it('click: #id_viewer_overlay, 604, 131, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(604, 131).click(0);
    });

    it('click: input.img-commonctrl, 8, 8, 0', async function(){
        await driver.sleep(300).wait('input.img-commonctrl', 30000)
               .sleep(300).mouseMove(8, 8).click(0);
    });

    it('click: Show advanced settin... ( #paragraph-advanced-link, 11, 7, 0 )', async function(){
        await driver.sleep(300).wait('#paragraph-advanced-link', 30000)
               .sleep(300).mouseMove(11, 7).click(0);
    });

    it('click: Borders & Fill ( #window-view6873 button:nth-child(2) > span, 63, 11, 0 )', async function(){
        await driver.sleep(300).wait('#window-view6873 button:nth-child(2) > span', 30000)
               .sleep(300).mouseMove(63, 11).click(0);
    });

    it('click: #asc-gen6934 span, 17, 19, 0', async function(){
        await driver.sleep(300).wait('#asc-gen6934 span', 30000)
               .sleep(300).mouseMove(17, 19).click(0);
    });

    it('mouseUp: #window-view6873, 227, 381, 0', async function(){
        await driver.sleep(300).wait('#window-view6873', 30000)
               .sleep(300).mouseMove(227, 381).mouseMove(227, 381).mouseUp(0);
    });

    it('click: #window-view6873, 227, 381, 0', async function(){
        await driver.sleep(300).wait('#window-view6873', 30000)
               .sleep(300).mouseMove(227, 381).click(0);
    });

    it('click: OK ( //button[text()="OK"], 45, 14, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(45, 14).click(0);
    });

    it('click: Show advanced settin... ( #paragraph-advanced-link, 21, 7, 0 )', async function(){
        await driver.sleep(300).wait('#paragraph-advanced-link', 30000)
               .sleep(300).mouseMove(21, 7).click(0);
    });

    it('click: #asc-gen7038 span, 12, 20, 0', async function(){
        await driver.sleep(300).wait('#asc-gen7038 span', 30000)
               .sleep(300).mouseMove(12, 20).click(0);
    });

    it('mouseMove: span.btn-adv-paragraph-top, 16, 23', async function(){
        await driver.sleep(300).wait('span.btn-adv-paragraph-top', 30000)
               .sleep(300).mouseMove(16, 23);
    });

    it('click: OK ( //button[text()="OK"], 57, 13, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(57, 13).click(0);
    });

    it('click: Show advanced settin... ( label.link, 48, 6, 0 )', async function(){
        await driver.sleep(300).wait('label.link', 30000)
               .sleep(300).mouseMove(48, 6).click(0);
    });

    it('click: Cancel ( //button[text()="Cancel"], 48, 15, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="Cancel"]', 30000)
               .sleep(300).mouseMove(48, 15).click(0);
    });

    it('mouseMove: Show advanced settin... ( #paragraph-advanced-link, 51, 13 )', async function(){
        await driver.sleep(300).wait('#paragraph-advanced-link', 30000)
               .sleep(300).mouseMove(51, 13);
    });

    it('click: Show advanced settin... ( #paragraph-advanced-link, 50, 6, 0 )', async function(){
        await driver.sleep(300).wait('#paragraph-advanced-link', 30000)
               .sleep(300).mouseMove(50, 6).click(0);
    });

    it('click: #asc-gen7240 span, 20, 20, 0', async function(){
        await driver.sleep(300).wait('#asc-gen7240 span', 30000)
               .sleep(300).mouseMove(20, 20).click(0);
    });

    it('mouseMove: span.btn-adv-paragraph-top, 7, 14', async function(){
        await driver.sleep(300).wait('span.btn-adv-paragraph-top', 30000)
               .sleep(300).mouseMove(7, 14);
    });

    it('click: span.btn-adv-paragraph-top, 6, 26, 0', async function(){
        await driver.sleep(300).wait('span.btn-adv-paragraph-top', 30000)
               .sleep(300).mouseMove(6, 26).click(0);
    });

    it('click: span.btn-adv-paragraph-top, 18, 22, 0', async function(){
        await driver.sleep(300).wait('span.btn-adv-paragraph-top', 30000)
               .sleep(300).mouseMove(18, 22).click(0);
    });

    it('click: OK ( //button[text()="OK"], 42, 11, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(42, 11).click(0);
    });

    it('click: Show advanced settin... ( label.link, 76, 5, 0 )', async function(){
        await driver.sleep(300).wait('label.link', 30000)
               .sleep(300).mouseMove(76, 5).click(0);
    });

    it('click: div.tool, 10, 8, 0', async function(){
        await driver.sleep(300).wait('div.tool', 30000)
               .sleep(300).mouseMove(10, 8).click(0);
    });

    it('click: Show advanced settin... ( #paragraph-advanced-link, 32, 6, 0 )', async function(){
        await driver.sleep(300).wait('#paragraph-advanced-link', 30000)
               .sleep(300).mouseMove(32, 6).click(0);
    });

    it('click: span.btn-adv-paragraph-inner-hor, 17, 19, 0', async function(){
        await driver.sleep(300).wait('span.btn-adv-paragraph-inner-hor', 30000)
               .sleep(300).mouseMove(17, 19).click(0);
    });

    it('click: OK ( //button[text()="OK"], 36, 15, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(36, 15).click(0);
    });

    it('click: Show advanced settin... ( #paragraph-advanced-link, 115, 9, 0 )', async function(){
        await driver.sleep(300).wait('#paragraph-advanced-link', 30000)
               .sleep(300).mouseMove(115, 9).click(0);
    });

    it('click: span.btn-adv-paragraph-bottom, 9, 12, 0', async function(){
        await driver.sleep(300).wait('span.btn-adv-paragraph-bottom', 30000)
               .sleep(300).mouseMove(9, 12).click(0);
    });

    it('click: OK ( //button[text()="OK"], 67, 11, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(67, 11).click(0);
    });

    it('click: Show advanced settin... ( #paragraph-advanced-link, 47, 7, 0 )', async function(){
        await driver.sleep(300).wait('#paragraph-advanced-link', 30000)
               .sleep(300).mouseMove(47, 7).click(0);
    });

    it('click: span.btn-adv-paragraph-outer, 24, 18, 0', async function(){
        await driver.sleep(300).wait('span.btn-adv-paragraph-outer', 30000)
               .sleep(300).mouseMove(24, 18).click(0);
    });

    it('click: OK ( //button[text()="OK"], 64, 5, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(64, 5).click(0);
    });

    it('click: Show advanced settin... ( #paragraph-advanced-link, 53, 6, 0 )', async function(){
        await driver.sleep(300).wait('#paragraph-advanced-link', 30000)
               .sleep(300).mouseMove(53, 6).click(0);
    });

    it('click: #asc-gen7746 span, 11, 21, 0', async function(){
        await driver.sleep(300).wait('#asc-gen7746 span', 30000)
               .sleep(300).mouseMove(11, 21).click(0);
    });

    it('click: span.btn-adv-paragraph-left, 19, 18, 0', async function(){
        await driver.sleep(300).wait('span.btn-adv-paragraph-left', 30000)
               .sleep(300).mouseMove(19, 18).click(0);
    });

    it('click: OK ( //button[text()="OK"], 27, 11, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(27, 11).click(0);
    });

    it('click: Show advanced settin... ( #paragraph-advanced-link, 61, 4, 0 )', async function(){
        await driver.sleep(300).wait('#paragraph-advanced-link', 30000)
               .sleep(300).mouseMove(61, 4).click(0);
    });

    it('click: span.btn-adv-paragraph-all, 24, 24, 0', async function(){
        await driver.sleep(300).wait('span.btn-adv-paragraph-all', 30000)
               .sleep(300).mouseMove(24, 24).click(0);
    });

    it('click: OK ( //button[text()="OK"], 20, 7, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(20, 7).click(0);
    });

    it('click: Show advanced settin... ( #paragraph-advanced-link, 24, 11, 0 )', async function(){
        await driver.sleep(300).wait('#paragraph-advanced-link', 30000)
               .sleep(300).mouseMove(24, 11).click(0);
    });

    it('click: span.btn-adv-paragraph-right, 16, 10, 0', async function(){
        await driver.sleep(300).wait('span.btn-adv-paragraph-right', 30000)
               .sleep(300).mouseMove(16, 10).click(0);
    });

    it('click: OK ( //button[text()="OK"], 62, 11, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(62, 11).click(0);
    });

    it('click: Show advanced settin... ( #paragraph-advanced-link, 47, 8, 0 )', async function(){
        await driver.sleep(300).wait('#paragraph-advanced-link', 30000)
               .sleep(300).mouseMove(47, 8).click(0);
    });

    it('click: #asc-gen8050 span, 21, 17, 0', async function(){
        await driver.sleep(300).wait('#asc-gen8050 span', 30000)
               .sleep(300).mouseMove(21, 17).click(0);
    });

    it('click: OK ( //button[text()="OK"], 66, 5, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(66, 5).click(0);
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

    it('click: Show advanced settin... ( #paragraph-advanced-link, 39, 5, 0 )', async function(){
        await driver.sleep(300).wait('#paragraph-advanced-link', 30000)
               .sleep(300).mouseMove(39, 5).click(0);
    });

    it('click: #asc-gen8150 span, 18, 10, 0', async function(){
        await driver.sleep(300).wait('#asc-gen8150 span', 30000)
               .sleep(300).mouseMove(18, 10).click(0);
    });

    it('click: #asc-gen8116 div.form-control, 71, 10, 0', async function(){
        await driver.sleep(300).wait('#asc-gen8116 div.form-control', 30000)
               .sleep(300).mouseMove(71, 10).click(0);
    });

    it('click: 3 pt ( #asc-gen8128 a, 45, 19, 0 )', async function(){
        await driver.sleep(300).wait('#asc-gen8128 a', 30000)
               .sleep(300).mouseMove(45, 19).click(0);
    });

    it('click: #asc-gen8141 span, 11, 10, 0', async function(){
        await driver.sleep(300).wait('#asc-gen8141 span', 30000)
               .sleep(300).mouseMove(11, 10).click(0);
    });

    it('click: #paragraphadv-border-color-menu a.color-F7CAAC > em > span, 5, 7, 0', async function(){
        await driver.sleep(300).wait('#paragraphadv-border-color-menu a.color-F7CAAC > em > span', 30000)
               .sleep(300).mouseMove(5, 7).click(0);
    });

    it('mouseMove: #asc-gen8116 div.form-control, 62, 7', async function(){
        await driver.sleep(300).wait('#asc-gen8116 div.form-control', 30000)
               .sleep(300).mouseMove(62, 7);
    });

    it('click: #asc-gen8116 span, 4, 4, 0', async function(){
        await driver.sleep(300).wait('#asc-gen8116 span', 30000)
               .sleep(300).mouseMove(4, 4).click(0);
    });

    it('mouseMove: 1.5 pt ( li:nth-child(4) > a[type="menuitem"], 53, 10 )', async function(){
        await driver.sleep(300).wait('li:nth-child(4) > a[type="menuitem"]', 30000)
               .sleep(300).mouseMove(53, 10);
    });

    it('click: 1.5 pt ( li:nth-child(4) > a[type="menuitem"], 53, 10, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(4) > a[type="menuitem"]', 30000)
               .sleep(300).mouseMove(53, 10).click(0);
    });

    it('click: OK ( //button[text()="OK"], 54, 7, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(54, 7).click(0);
    });

    it('click: Show advanced settin... ( label.link, 54, 11, 0 )', async function(){
        await driver.sleep(300).wait('label.link', 30000)
               .sleep(300).mouseMove(54, 11).click(0);
    });

    it('click: div:nth-child(3) > div:nth-child(2) > div.btn-group > button[type="button"].dropdown-toggle > span, 16, 17, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > div:nth-child(2) > div.btn-group > button[type="button"].dropdown-toggle > span', 30000)
               .sleep(300).mouseMove(16, 17).click(0);
    });

    it('click: a.color-C45911 > em > span, 8, 8, 0', async function(){
        await driver.sleep(300).wait('a.color-C45911 > em > span', 30000)
               .sleep(300).mouseMove(8, 8).click(0);
    });

    it('click: span.btn-adv-paragraph-inner-hor, 13, 23, 0', async function(){
        await driver.sleep(300).wait('span.btn-adv-paragraph-inner-hor', 30000)
               .sleep(300).mouseMove(13, 23).click(0);
    });

    it('click: span.btn-adv-paragraph-top, 12, 20, 0', async function(){
        await driver.sleep(300).wait('span.btn-adv-paragraph-top', 30000)
               .sleep(300).mouseMove(12, 20).click(0);
    });

    it('click: span.btn-adv-paragraph-all, 20, 14, 0', async function(){
        await driver.sleep(300).wait('span.btn-adv-paragraph-all', 30000)
               .sleep(300).mouseMove(20, 14).click(0);
    });

    it('click: div.form-control, 44, 7, 0', async function(){
        await driver.sleep(300).wait('div.form-control', 30000)
               .sleep(300).mouseMove(44, 7).click(0);
    });

    it('click: 2.25 pt ( li:nth-child(5) > a[type="menuitem"] > span:nth-child(1), 15, 13, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(5) > a[type="menuitem"] > span:nth-child(1)', 30000)
               .sleep(300).mouseMove(15, 13).click(0);
    });

    it('click: OK ( //button[text()="OK"], 20, 10, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(20, 10).click(0);
    });

    it('click: input.img-commonctrl, 10, 8, 0', async function(){
        await driver.sleep(300).wait('input.img-commonctrl', 30000)
               .sleep(300).mouseMove(10, 8).click(0);
    });

    it('click: input.img-commonctrl, 10, 8, 0', async function(){
        await driver.sleep(300).wait('input.img-commonctrl', 30000)
               .sleep(300).mouseMove(10, 8).click(0);
    });

    it('switchWindow: 0', async function(){
        await driver.sleep(500).switchWindow(0);
    });

    it('scrollTo: 0, 106', async function(){
        await driver.scrollTo(0, 106);
    });

    it('mouseMove: new (28).docx ( tr:nth-child(1) > td:nth-child(1) > a.text > span, 10, 5 )', async function(){
        await driver.sleep(300).wait('tr:nth-child(1) > td:nth-child(1) > a.text > span', 30000)
               .sleep(300).mouseMove(10, 5);
    });

    it('click: new (28).docx ( tr:nth-child(1) > td:nth-child(1) > a.text > span, 10, 5, 0 )', async function(){
        await driver.sleep(300).wait('tr:nth-child(1) > td:nth-child(1) > a.text > span', 30000)
               .sleep(300).mouseMove(10, 5).click(0);
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

    it('click: span.btn-bold, 11, 13, 0', async function(){
        await driver.sleep(300).wait('span.btn-bold', 30000)
               .sleep(300).mouseMove(11, 13).click(0);
    });

    it('sendKeys: 0', async function(){
        await driver.sendKeys('0');
    });

    it('mouseDown: div:nth-child(3) > canvas:nth-child(2), 501, 115, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(501, 115).mouseDown(0);
    });

    it('mouseUp: div:nth-child(3) > canvas:nth-child(2), 539, 112, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(539, 112).mouseMove(539, 112).mouseUp(0);
    });

    it('click: span.btn-bold, 12, 12, 0', async function(){
        await driver.sleep(300).wait('span.btn-bold', 30000)
               .sleep(300).mouseMove(12, 12).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 581, 126, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(581, 126).click(0);
    });

    it('switchWindow: 1', async function(){
        await driver.sleep(500).switchWindow(1);
    });

    it('sleep: 1000', async function(){
        await driver.sleep(1000);
    });

    it('switchFrame: iframe[name="frameEditor"]', async function(){
        await driver.switchFrame(null)
               .wait('iframe[name="frameEditor"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: span.btn-menu-file, 6, 8, 0', async function(){
        await driver.sleep(300).wait('span.btn-menu-file', 30000)
               .sleep(300).mouseMove(6, 8).click(0);
    });

    it('click: span.docx, 49, 88, 0', async function(){
        await driver.sleep(300).wait('span.docx', 30000)
               .sleep(300).mouseMove(49, 88).click(0);
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
