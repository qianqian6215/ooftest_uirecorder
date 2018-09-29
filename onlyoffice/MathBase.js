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

    it('click: Create Document ( a.document, 36, 50, 0 )', async function(){
        await driver.sleep(300).wait('a.document', 30000)
               .sleep(300).mouseMove(36, 50).click(0);
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

    it('sendKeys: 123', async function(){
        await driver.sendKeys('123');
    });

    it('mouseMove: span:nth-child(4) > div.split > button[type="button"].dropdown-toggle, 3, 4', async function(){
        await driver.sleep(300).wait('span:nth-child(4) > div.split > button[type="button"].dropdown-toggle', 30000)
               .sleep(300).mouseMove(3, 4);
    });

    it('click: span:nth-child(4) > div.split > button[type="button"].dropdown-toggle, 3, 4, 0', async function(){
        await driver.sleep(300).wait('span:nth-child(4) > div.split > button[type="button"].dropdown-toggle', 30000)
               .sleep(300).mouseMove(3, 4).click(0);
    });

    it('click: div.toolbar, 739, 6, 0', async function(){
        await driver.sleep(300).wait('div.toolbar', 30000)
               .sleep(300).mouseMove(739, 6).click(0);
    });

    it('click: div:nth-child(1) > span:nth-child(5) > div.split > button[type="button"].dropdown-toggle, 3, 6, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(1) > span:nth-child(5) > div.split > button[type="button"].dropdown-toggle', 30000)
               .sleep(300).mouseMove(3, 6).click(0);
    });

    it('click: Fractions ( //a[text()="Fractions"], 28, 15, 0 )', async function(){
        await driver.sleep(300).wait('//a[text()="Fractions"]', 30000)
               .sleep(300).mouseMove(28, 15).click(0);
    });

    it('click: Brackets ( //a[text()="Brackets"], 57, 6, 0 )', async function(){
        await driver.sleep(300).wait('//a[text()="Brackets"]', 30000)
               .sleep(300).mouseMove(57, 6).click(0);
    });

    it('click: div:nth-child(16) > div.item-equation > div, 5, 33, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(16) > div.item-equation > div', 30000)
               .sleep(300).mouseMove(5, 33).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 509, 99, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(509, 99).click(0);
    });

    it('sendKeys: 1', async function(){
        await driver.sendKeys('1');
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 524, 104, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(524, 104).click(0);
    });

    it('sendKeys: 2', async function(){
        await driver.sendKeys('2');
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 535, 99, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(535, 99).click(0);
    });

    it('sendKeys: 3', async function(){
        await driver.sendKeys('3');
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 650, 120, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(650, 120).click(0);
    });

    it('mouseDown: div:nth-child(3) > canvas:nth-child(2), 470, 102, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(470, 102).mouseDown(0);
    });

    it('mouseUp: div:nth-child(3) > canvas:nth-child(2), 539, 97, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(539, 97).mouseMove(539, 97).mouseUp(0);
    });

    it('click: span.btn-bold, 12, 14, 0', async function(){
        await driver.sleep(300).wait('span.btn-bold', 30000)
               .sleep(300).mouseMove(12, 14).click(0);
    });

    it('click: span.btn-italic, 4, 11, 0', async function(){
        await driver.sleep(300).wait('span.btn-italic', 30000)
               .sleep(300).mouseMove(4, 11).click(0);
    });

    it('click: span.btn-underline, 3, 11, 0', async function(){
        await driver.sleep(300).wait('span.btn-underline', 30000)
               .sleep(300).mouseMove(3, 11).click(0);
    });

    it('click: span.btn-strikeout, 0, 19, 0', async function(){
        await driver.sleep(300).wait('span.btn-strikeout', 30000)
               .sleep(300).mouseMove(0, 19).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 556, 107, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(556, 107).click(0);
    });

    it('mouseDown: div:nth-child(3) > canvas:nth-child(2), 499, 102, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(499, 102).mouseDown(0);
    });

    it('mouseUp: div:nth-child(3) > canvas:nth-child(2), 529, 96, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(529, 96).mouseMove(529, 96).mouseUp(0);
    });

    it('mouseDown: div:nth-child(3) > canvas:nth-child(2), 486, 103, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(486, 103).mouseDown(0);
    });

    it('mouseUp: div.hbox, 545, 129, 0', async function(){
        await driver.sleep(300).wait('div.hbox', 30000)
               .sleep(300).mouseMove(545, 129).mouseMove(545, 129).mouseUp(0);
    });

    it('mouseDown: div:nth-child(3) > canvas:nth-child(2), 475, 102, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(475, 102).mouseDown(0);
    });

    it('mouseUp: div:nth-child(3) > canvas:nth-child(2), 542, 96, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(542, 96).mouseMove(542, 96).mouseUp(0);
    });

    it('click: span:nth-child(8) > div.split > button[type="button"].dropdown-toggle, 8, 9, 0', async function(){
        await driver.sleep(300).wait('span:nth-child(8) > div.split > button[type="button"].dropdown-toggle', 30000)
               .sleep(300).mouseMove(8, 9).click(0);
    });

    it('click: a.color-2E77B5 > em > span, 3, 8, 0', async function(){
        await driver.sleep(300).wait('a.color-2E77B5 > em > span', 30000)
               .sleep(300).mouseMove(3, 8).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 600, 106, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(600, 106).click(0);
    });

    it('mouseDown: div:nth-child(3) > canvas:nth-child(2), 467, 102, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(467, 102).mouseDown(0);
    });

    it('mouseUp: div:nth-child(3) > canvas:nth-child(2), 584, 100, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(584, 100).mouseMove(584, 100).mouseUp(0);
    });

    it('click: Show advanced settin... ( label.link, 52, 9, 0 )', async function(){
        await driver.sleep(300).wait('label.link', 30000)
               .sleep(300).mouseMove(52, 9).click(0);
    });

    it('click: Font ( div.menu-panel > button:nth-child(3), 76, 6, 0 )', async function(){
        await driver.sleep(300).wait('div.menu-panel > button:nth-child(3)', 30000)
               .sleep(300).mouseMove(76, 6).click(0);
    });

    it('click: tr:nth-child(3) > td:nth-child(1) > div > label.checkbox-indeterminate > input[type="button"].img-commonctrl, 7, 8, 0', async function(){
        await driver.sleep(300).wait('tr:nth-child(3) > td:nth-child(1) > div > label.checkbox-indeterminate > input[type="button"].img-commonctrl', 30000)
               .sleep(300).mouseMove(7, 8).click(0);
    });

    it('click: OK ( //button[text()="OK"], 35, 7, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(35, 7).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 510, 101, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(510, 101).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 510, 101, 2', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(510, 101).click(2);
    });

    it('click: Insert argument befo... ( li:nth-child(12) > a[type="menuitem"], 42, 4, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(12) > a[type="menuitem"]', 30000)
               .sleep(300).mouseMove(42, 4).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 511, 103, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(511, 103).click(0);
    });

    it('sendKeys: 0', async function(){
        await driver.sendKeys('0');
    });

    it('mouseDown: div:nth-child(3) > canvas:nth-child(2), 526, 106, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(526, 106).mouseDown(0);
    });

    it('mouseUp: div.hbox, 585, 132, 0', async function(){
        await driver.sleep(300).wait('div.hbox', 30000)
               .sleep(300).mouseMove(585, 132).mouseMove(585, 132).mouseUp(0);
    });

    it('click: canvas:nth-child(3), 0, 11, 2', async function(){
        await driver.sleep(300).wait('canvas:nth-child(3)', 30000)
               .sleep(300).mouseMove(0, 11).click(2);
    });

    it('click: Delete argument ( li:nth-child(14) > a[type="menuitem"], 51, 6, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(14) > a[type="menuitem"]', 30000)
               .sleep(300).mouseMove(51, 6).click(0);
    });

    it('click: span.btn-ic-review, 12, 8, 0', async function(){
        await driver.sleep(300).wait('span.btn-ic-review', 30000)
               .sleep(300).mouseMove(12, 8).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 515, 104, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(515, 104).click(0);
    });

    it('sendKeys: 23', async function(){
        await driver.sendKeys('23');
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 566, 106, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(566, 106).click(0);
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

    it('click: #id_viewer_overlay, 523, 105, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(523, 105).click(0);
    });

    it('switchWindow: 0', async function(){
        await driver.sleep(500).switchWindow(0);
    });

    it('scrollTo: 0, 106', async function(){
        await driver.scrollTo(0, 106);
    });

    it('click: new (80).docx ( tr:nth-child(1) > td:nth-child(1) > a.text > span, 42, 6, 0 )', async function(){
        await driver.sleep(300).wait('tr:nth-child(1) > td:nth-child(1) > a.text > span', 30000)
               .sleep(300).mouseMove(42, 6).click(0);
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

    it('mouseDown: #id_viewer_overlay, 522, 104, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(522, 104).mouseDown(0);
    });

    it('mouseUp: #id_main_view, 522, 104, 0', async function(){
        await driver.sleep(300).wait('#id_main_view', 30000)
               .sleep(300).mouseMove(522, 104).mouseMove(522, 104).mouseUp(0);
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

    it('click: #left-btn-file, 7, 21, 0', async function(){
        await driver.sleep(300).wait('#left-btn-file', 30000)
               .sleep(300).mouseMove(7, 21).click(0);
    });

    it('click: #panel-saveas span.docx, 30, 80, 0', async function(){
        await driver.sleep(300).wait('#panel-saveas span.docx', 30000)
               .sleep(300).mouseMove(30, 80).click(0);
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
