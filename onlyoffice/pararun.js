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

    //http://47.104.165.141
    //http://172.16.3.100
    it('url: http://172.16.3.100:3000/', async function(){
        await driver.url(_(`http://172.16.3.100:3000/`));
    });

    it('waitBody: ', async function(){
         //30000
        await driver.sleep(500).wait('body', 30000).html().then(function(code){
            isPageError(code).should.be.false;
        });
    });

    it('click: Create Document ( a.document, 35, 59, 0 )', async function(){
        //30000
        await driver.sleep(300).wait('a.document', 30000)
               .sleep(300).mouseMove(35, 59).click(0);
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

    it('click: #id_viewer_overlay, 536, 102, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(536, 102).click(0);
    });

    it('sendKeys: 123456', async function(){
        await driver.sendKeys('123456');
    });

    it('click: #id-toolbar-btn-insertequation span.caret, 6, 4, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-insertequation span.caret', 30000)
               .sleep(300).mouseMove(6, 4).click(0);
    });

    it('click: #id_viewer_overlay, 564, 112, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(564, 112).click(0);
    });

    it('mouseMove: #id-toolbar-btn-insertequation button.dropdown-toggle, 4, 15', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-insertequation button.dropdown-toggle', 30000)
               .sleep(300).mouseMove(4, 15);
    });

    it('click: #id-toolbar-btn-insertequation button.dropdown-toggle, 4, 15, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-insertequation button.dropdown-toggle', 30000)
               .sleep(300).mouseMove(4, 15).click(0);
    });

    it('mouseMove: Radicals ( //a[text()="Radicals"], 88, 11 )', async function(){
        await driver.sleep(300).wait('//a[text()="Radicals"]', 30000)
               .sleep(300).mouseMove(88, 11);
    });

    it('click: Radicals ( //a[text()="Radicals"], 112, 18, 0 )', async function(){
        await driver.sleep(300).wait('//a[text()="Radicals"]', 30000)
               .sleep(300).mouseMove(112, 18).click(0);
    });

    it('click: div:nth-child(2) > div.item-equation > div, 53, 26, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(2) > div.item-equation > div', 30000)
               .sleep(300).mouseMove(53, 26).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 541, 106, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(541, 106).click(0);
    });

    it('sendKeys: 1', async function(){
        await driver.sendKeys('1');
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 528, 98, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(528, 98).click(0);
    });

    it('sendKeys: 2', async function(){
        await driver.sendKeys('2');
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 629, 116, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(629, 116).click(0);
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

    it('click: #id_viewer_overlay, 503, 110, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(503, 110).click(0);
    });

    it('click: #id_viewer_overlay, 513, 106, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(513, 106).click(0);
    });

    it('click: #id_viewer_overlay, 499, 106, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(499, 106).click(0);
    });

    it('sendKeys: {ENTER}', async function(){
        await driver.sendKeys('{ENTER}');
    });

    it('click: #id_viewer_overlay, 478, 99, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(478, 99).click(0);
    });

    it('mouseDown: #id_viewer_overlay, 478, 99, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(478, 99).mouseDown(0);
    });

    it('mouseUp: #id_viewer_overlay, 502, 97, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(502, 97).mouseMove(502, 97).mouseUp(0);
    });

    it('click: #id-toolbar-btn-bold span, 14, 9, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-bold span', 30000)
               .sleep(300).mouseMove(14, 9).click(0);
    });

    it('click: #id-toolbar-btn-italic span, 12, 11, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-italic span', 30000)
               .sleep(300).mouseMove(12, 11).click(0);
    });

    it('click: #id-toolbar-btn-underline span, 11, 11, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-underline span', 30000)
               .sleep(300).mouseMove(11, 11).click(0);
    });

    it('click: #id-toolbar-btn-strikeout span, 2, 10, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-strikeout span', 30000)
               .sleep(300).mouseMove(2, 10).click(0);
    });

    it('click: #id-toolbar-btn-superscript span, 2, 12, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-superscript span', 30000)
               .sleep(300).mouseMove(2, 12).click(0);
    });

    it('click: #id-toolbar-btn-subscript span, 10, 8, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-subscript span', 30000)
               .sleep(300).mouseMove(10, 8).click(0);
    });

    it('mouseMove: #id-toolbar-btn-highlight button.dropdown-toggle, 4, 3', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-highlight button.dropdown-toggle', 30000)
               .sleep(300).mouseMove(4, 3);
    });

    it('click: #id-toolbar-btn-highlight button.dropdown-toggle, 4, 3, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-highlight button.dropdown-toggle', 30000)
               .sleep(300).mouseMove(4, 3).click(0);
    });

    it('click: #id-toolbar-menu-highlight span:nth-child(5), 16, 15, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-menu-highlight span:nth-child(5)', 30000)
               .sleep(300).mouseMove(16, 15).click(0);
    });

    it('mouseMove: #id-toolbar-btn-fontcolor button.dropdown-toggle, 5, 5', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-fontcolor button.dropdown-toggle', 30000)
               .sleep(300).mouseMove(5, 5);
    });

    it('click: #id-toolbar-btn-fontcolor button.dropdown-toggle, 5, 5, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-fontcolor button.dropdown-toggle', 30000)
               .sleep(300).mouseMove(5, 5).click(0);
    });

    it('click: #id-toolbar-menu-fontcolor a.color-ADAAAA > em > span, 5, 2, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-menu-fontcolor a.color-ADAAAA > em > span', 30000)
               .sleep(300).mouseMove(5, 2).click(0);
    });

    it('mouseMove: #id-toolbar-btn-paracolor button.dropdown-toggle, 5, 5', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-paracolor button.dropdown-toggle', 30000)
               .sleep(300).mouseMove(5, 5);
    });

    it('click: #id-toolbar-btn-paracolor button.dropdown-toggle, 5, 5, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-paracolor button.dropdown-toggle', 30000)
               .sleep(300).mouseMove(5, 5).click(0);
    });

    it('click: #id-toolbar-menu-paracolor a.color-F7CAAC > em > span, 3, 5, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-menu-paracolor a.color-F7CAAC > em > span', 30000)
               .sleep(300).mouseMove(3, 5).click(0);
    });

    it('click: #id_viewer_overlay, 579, 112, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(579, 112).click(0);
    });

    it('mouseMove: #id-toolbar-btn-inserttext button.dropdown-toggle, 8, 5', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-inserttext button.dropdown-toggle', 30000)
               .sleep(300).mouseMove(8, 5);
    });

    it('click: #id-toolbar-btn-inserttext button.dropdown-toggle, 8, 5, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-inserttext button.dropdown-toggle', 30000)
               .sleep(300).mouseMove(8, 5).click(0);
    });

    it('mouseMove: Insert Text Art ( li.dropdown-submenu > a[type="menuitem"]:nth-child(1), 26, 6 )', async function(){
        await driver.sleep(300).wait('li.dropdown-submenu > a[type="menuitem"]:nth-child(1)', 30000)
               .sleep(300).mouseMove(26, 6);
    });

    it('click: div:nth-child(2) > div.item-art > img, 7, 28, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(2) > div.item-art > img', 30000)
               .sleep(300).mouseMove(7, 28).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 808, 127, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(808, 127).click(0);
    });

    it('mouseDown: div:nth-child(3) > canvas:nth-child(2), 808, 127, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(808, 127).mouseDown(0);
    });

    it('mouseUp: div:nth-child(3) > canvas:nth-child(2), 500, 121, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(500, 121).mouseMove(500, 121).mouseUp(0);
    });

    it('sendKeys: HERE', async function(){
        await driver.sendKeys('HERE');
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 493, 122, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(493, 122).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 856, 156, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(856, 156).click(0);
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

    it('click: #id_viewer_overlay, 600, 135, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(600, 135).click(0);
    });

    it('mouseDown: #id_viewer_overlay, 498, 96, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(498, 96).mouseDown(0);
    });

    it('mouseUp: #id_viewer_overlay, 623, 103, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(623, 103).mouseMove(623, 103).mouseUp(0);
    });

    it('click: #id_viewer_overlay, 901, 129, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(901, 129).click(0);
    });

    it('click: #left-btn-file span, 6, 3, 0', async function(){
        await driver.sleep(300).wait('#left-btn-file span', 30000)
               .sleep(300).mouseMove(6, 3).click(0);
    });

    it('click: #panel-saveas span.docx, 63, 100, 0', async function(){
        await driver.sleep(300).wait('#panel-saveas span.docx', 30000)
               .sleep(300).mouseMove(63, 100).click(0);
    });

    it('click: #id_viewer_overlay, 895, 149, 2', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(895, 149).click(2);
    });

    it('click: #id_viewer_overlay, 1327, 180, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(1327, 180).click(0);
    });

    it('click: #id_viewer_overlay, 1372, 69, 2', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(1372, 69).click(2);
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

    it('click: #id_viewer_overlay, 1422, 508, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(1422, 508).click(0);
    });

    it('click: #id_viewer_overlay, 1345, 177, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(1345, 177).click(0);
    });

    it('switchWindow: 0', async function(){
        await driver.sleep(500).switchWindow(0);
    });

    it('scrollTo: 0, 212', async function(){
        await driver.scrollTo(0, 212);
    });

    it('scrollTo: 0, 265', async function(){
        await driver.scrollTo(0, 265);
    });

    it('scrollTo: 0, 318', async function(){
        await driver.scrollTo(0, 318);
    });


    it('mouseMove: new (19).docx ( tr:nth-child(1) > td:nth-child(1) > a.text > span, 35, 6 )', async function(){
        await driver.sleep(300).wait('tr:nth-child(1) > td:nth-child(1) > a.text > span', 30000)
               .sleep(300).mouseMove(35, 6);
    });

    it('click: new (19).docx ( tr:nth-child(1) > td:nth-child(1) > a.text > span, 35, 6, 0 )', async function(){
        await driver.sleep(300).wait('tr:nth-child(1) > td:nth-child(1) > a.text > span', 30000)
               .sleep(300).mouseMove(35, 6).click(0);
    });

    it('switchWindow: 2', async function(){
        await driver.sleep(500).switchWindow(2);
    });

    it('waitBody: ', async function(){
        await driver.sleep(500).wait('body', 30000).html().then(function(code){
            isPageError(code).should.be.false;
        });
    });

    it('sleep: 2000', async function(){
        await driver.sleep(2000);
    });

    it('switchFrame: iframe[name="frameEditor"]', async function(){
        await driver.switchFrame(null)
               .wait('iframe[name="frameEditor"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: #id_viewer_overlay, 774, 108, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(774, 108).click(0);
    });

    it('switchWindow: 2', async function(){
        await driver.sleep(500).switchWindow(2);
    });

    it('switchFrame: iframe[name="frameEditor"]', async function(){
        await driver.switchFrame(null)
               .wait('iframe[name="frameEditor"]', 30000).then(function(element){
                   return this.switchFrame(element).wait('body');
               });
    });

    it('click: #id_viewer_overlay, 831, 129, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(831, 129).click(0);
    });

    it('click: #id_viewer_overlay, 607, 106, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(607, 106).click(0);
    });

    it('click: #id_viewer_overlay, 551, 134, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(551, 134).click(0);
    });

    it('click: #asc-gen316 span.btn-icon, 11, 8, 0', async function(){
        await driver.sleep(300).wait('#asc-gen316 span.btn-icon', 30000)
               .sleep(300).mouseMove(11, 8).click(0);
    });

    it('click: #id_viewer_overlay, 530, 105, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(530, 105).click(0);
    });

    it('sendKeys: 6789', async function(){
        await driver.sendKeys('6789');
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

    it('click: #id_viewer_overlay, 521, 109, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(521, 109).click(0);
    });

    it('switchFrame: null', async function(){
        await driver.switchFrame(null);
    });

    it('sleep: 1000', async function(){
        await driver.sleep(1000);
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
