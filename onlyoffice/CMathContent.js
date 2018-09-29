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

    it('click: Create Document ( a.document, 36, 33, 0 )', async function(){
        await driver.sleep(300).wait('a.document', 30000)
               .sleep(300).mouseMove(36, 33).click(0);
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

    it('click: div:nth-child(1) > span:nth-child(5) > div.split > button[type="button"].dropdown-toggle > span.img-commonctrl, 5, 2, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(1) > span:nth-child(5) > div.split > button[type="button"].dropdown-toggle > span.img-commonctrl', 30000)
               .sleep(300).mouseMove(5, 2).click(0);
    });

    it('click: Brackets ( //a[text()="Brackets"], 79, 18, 0 )', async function(){
        await driver.sleep(300).wait('//a[text()="Brackets"]', 30000)
               .sleep(300).mouseMove(79, 18).click(0);
    });

    it('click: div:nth-child(16) > div.item-equation > div, 48, 55, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(16) > div.item-equation > div', 30000)
               .sleep(300).mouseMove(48, 55).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 771, 107, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(771, 107).click(0);
    });

    it('sendKeys: 1', async function(){
        await driver.sendKeys('1');
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 784, 100, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(784, 100).click(0);
    });

    it('sendKeys: 2', async function(){
        await driver.sendKeys('2');
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 798, 108, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(798, 108).click(0);
    });

    it('sendKeys: 3', async function(){
        await driver.sendKeys('3');
    });

    it('mouseDown: div:nth-child(3) > canvas:nth-child(2), 773, 105, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(773, 105).mouseDown(0);
    });

    it('mouseUp: div.hbox, 832, 131, 0', async function(){
        await driver.sleep(300).wait('div.hbox', 30000)
               .sleep(300).mouseMove(832, 131).mouseMove(832, 131).mouseUp(0);
    });

    it('mouseDown: canvas:nth-child(3), 0, 10, 2', async function(){
        await driver.sleep(300).wait('canvas:nth-child(3)', 30000)
               .sleep(300).mouseMove(0, 10).mouseDown(2);
    });

    it('mouseUp: div.hbox, 832, 131, 2', async function(){
        await driver.sleep(300).wait('div.hbox', 30000)
               .sleep(300).mouseMove(832, 131).mouseMove(832, 131).mouseUp(2);
    });

    it('click: Insert argument befo... ( li:nth-child(12) > a[type="menuitem"], 44, 8, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(12) > a[type="menuitem"]', 30000)
               .sleep(300).mouseMove(44, 8).click(0);
    });

    it('click: canvas:nth-child(3), 1, 8, 2', async function(){
        await driver.sleep(300).wait('canvas:nth-child(3)', 30000)
               .sleep(300).mouseMove(1, 8).click(2);
    });

    it('click: Delete argument ( li:nth-child(14) > a[type="menuitem"], 24, 9, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(14) > a[type="menuitem"]', 30000)
               .sleep(300).mouseMove(24, 9).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 790, 156, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(790, 156).click(0);
    });

    it('dblClick: div:nth-child(3) > canvas:nth-child(2), 788, 156, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(788, 156).click(0).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 767, 106, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(767, 106).click(0);
    });

    it('mouseDown: div:nth-child(3) > canvas:nth-child(2), 767, 106, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(767, 106).mouseDown(0);
    });

    it('mouseUp: div:nth-child(3) > canvas:nth-child(2), 825, 116, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(825, 116).mouseMove(825, 116).mouseUp(0);
    });

    it('sendKeys: {BACK_SPACE}', async function(){
        await driver.sendKeys('{BACK_SPACE}');
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

    it('sendKeys: {BACK_SPACE}', async function(){
        await driver.sendKeys('{BACK_SPACE}');
    });

    it('click: #id_viewer_overlay, 562, 107, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(562, 107).click(0);
    });

    it('sendKeys: 123', async function(){
        await driver.sendKeys('123');
    });

    it('click: #id-toolbar-btn-insertequation span.caret, 2, 3, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-insertequation span.caret', 30000)
               .sleep(300).mouseMove(2, 3).click(0);
    });

    it('click: Brackets ( //a[text()="Brackets"], 76, 15, 0 )', async function(){
        await driver.sleep(300).wait('//a[text()="Brackets"]', 30000)
               .sleep(300).mouseMove(76, 15).click(0);
    });

    it('click: div:nth-child(15) > div.item-equation > div, 55, 38, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(15) > div.item-equation > div', 30000)
               .sleep(300).mouseMove(55, 38).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 593, 101, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(593, 101).click(0);
    });

    it('click: div:nth-child(1) > span:nth-child(5) > div.split > button[type="button"].dropdown-toggle, 8, 11, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(1) > span:nth-child(5) > div.split > button[type="button"].dropdown-toggle', 30000)
               .sleep(300).mouseMove(8, 11).click(0);
    });

    it('click: Functions ( //a[text()="Functions"], 66, 5, 0 )', async function(){
        await driver.sleep(300).wait('//a[text()="Functions"]', 30000)
               .sleep(300).mouseMove(66, 5).click(0);
    });

    it('click: div:nth-child(1) > div.item-equation > div, 33, 40, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(1) > div.item-equation > div', 30000)
               .sleep(300).mouseMove(33, 40).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 575, 100, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(575, 100).click(0);
    });

    it('sendKeys: 30', async function(){
        await driver.sendKeys('30');
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 514, 105, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(514, 105).click(0);
    });

    it('sendKeys: 1', async function(){
        await driver.sendKeys('1');
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 528, 105, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(528, 105).click(0);
    });

    it('sendKeys: 2', async function(){
        await driver.sendKeys('2');
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 625, 105, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(625, 105).click(0);
    });

    it('switchWindow: 0', async function(){
        await driver.sleep(500).switchWindow(0);
    });

    it('scrollTo: 0, 212', async function(){
        await driver.scrollTo(0, 212);
    });

    it('click: new (83).docx ( tr:nth-child(1) > td:nth-child(1) > a.text > span, 6, 4, 0 )', async function(){
        await driver.sleep(300).wait('tr:nth-child(1) > td:nth-child(1) > a.text > span', 30000)
               .sleep(300).mouseMove(6, 4).click(0);
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

    it('click: span.btn-menu-file, 6, 13, 0', async function(){
        await driver.sleep(300).wait('span.btn-menu-file', 30000)
               .sleep(300).mouseMove(6, 13).click(0);
    });

    it('click: span.docx, 57, 60, 0', async function(){
        await driver.sleep(300).wait('span.docx', 30000)
               .sleep(300).mouseMove(57, 60).click(0);
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
