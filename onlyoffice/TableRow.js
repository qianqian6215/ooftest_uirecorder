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

    it('click: Create Document ( a.document, 57, 76, 0 )', async function(){
        await driver.sleep(300).wait('a.document', 30000)
               .sleep(300).mouseMove(57, 76).click(0);
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

    it('mouseMove: #id-toolbar-btn-inserttable button, 26, 10', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-inserttable button', 30000)
               .sleep(300).mouseMove(26, 10);
    });

    it('click: #id-toolbar-btn-inserttable button, 26, 10, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-btn-inserttable button', 30000)
               .sleep(300).mouseMove(26, 10).click(0);
    });

    it('click: #id-toolbar-menu-tablepicker div.dimension-picker-mousecatcher, 60, 25, 0', async function(){
        await driver.sleep(300).wait('#id-toolbar-menu-tablepicker div.dimension-picker-mousecatcher', 30000)
               .sleep(300).mouseMove(60, 25).click(0);
    });

    it('sendKeys: 1', async function(){
        await driver.sendKeys('1');
    });

    it('click: #id_viewer_overlay, 668, 130, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(668, 130).click(0);
    });

    it('click: #id_viewer_overlay, 673, 138, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(673, 138).click(0);
    });

    it('sendKeys: 2', async function(){
        await driver.sendKeys('2');
    });

    it('click: #id_viewer_overlay, 818, 133, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(818, 133).click(0);
    });

    it('sendKeys: 3', async function(){
        await driver.sendKeys('3');
    });

    it('click: #id_viewer_overlay, 972, 141, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(972, 141).click(0);
    });

    it('sendKeys: 4', async function(){
        await driver.sendKeys('4');
    });

    it('click: #id_viewer_overlay, 470, 139, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(470, 139).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 496, 135, 2', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(496, 135).click(2);
    });

    it('click: Copy ( //a[text()="Copy"], 21, 17, 0 )', async function(){
        await driver.sleep(300).wait('//a[text()="Copy"]', 30000)
               .sleep(300).mouseMove(21, 17).click(0);
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

    it('click: #id_viewer_overlay, 509, 157, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(509, 157).click(0);
    });

    it('click: #id_viewer_overlay, 488, 149, 2', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(488, 149).click(2);
    });

    it('mouseDown: Paste ( #asc-gen4412, 41, 13, 0 )', async function(){
        await driver.sleep(300).wait('#asc-gen4412', 30000)
               .sleep(300).mouseMove(41, 13).mouseDown(0);
    });

    it('mouseUp: #editor_sdk, 465, 247, 0', async function(){
        await driver.sleep(300).wait('#editor_sdk', 30000)
               .sleep(300).mouseMove(465, 247).mouseMove(465, 247).mouseUp(0);
    });

    it('click: #id_viewer_overlay, 446, 221, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(446, 221).click(0);
    });

    it('click: #id_viewer_overlay, 483, 154, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(483, 154).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 488, 152, 2', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(488, 152).click(2);
    });

    it('click: Paste ( //a[text()="Paste"], 28, 15, 0 )', async function(){
        await driver.sleep(300).wait('//a[text()="Paste"]', 30000)
               .sleep(300).mouseMove(28, 15).click(0);
    });

    it('click: div:nth-child(3) > label.checkbox-indeterminate > input[type="button"].img-commonctrl, 5, 4, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > label.checkbox-indeterminate > input[type="button"].img-commonctrl', 30000)
               .sleep(300).mouseMove(5, 4).click(0);
    });

    it('click: OK ( //button[text()="OK"], 30, 9, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(30, 9).click(0);
    });

    it('mouseDown: div:nth-child(1) > canvas:nth-child(2), 8, 164, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(1) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(8, 164).mouseDown(0);
    });

    it('mouseUp: div:nth-child(1) > canvas:nth-child(2), 1, 195, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(1) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(1, 195).mouseMove(1, 195).mouseUp(0);
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

    it('click: #id_viewer_overlay, 478, 179, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(478, 179).click(0);
    });

    it('click: #id_viewer_overlay, 475, 187, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(475, 187).click(0);
    });

    it('click: #id_viewer_overlay, 530, 166, 2', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(530, 166).click(2);
    });

    it('click: #id_viewer_overlay, 466, 290, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(466, 290).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 477, 185, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(477, 185).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 503, 161, 2', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(503, 161).click(2);
    });

    it('click: Insert ( //a[text()="Insert"], 73, 17, 0 )', async function(){
        await driver.sleep(300).wait('//a[text()="Insert"]', 30000)
               .sleep(300).mouseMove(73, 17).click(0);
    });

    it('click: Column Left ( li:nth-child(1) > a[type="menuitem"], 48, 12, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(1) > a[type="menuitem"]', 30000)
               .sleep(300).mouseMove(48, 12).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 535, 175, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(535, 175).click(0);
    });

    it('mouseDown: canvas:nth-child(3), 0, 7, 0', async function(){
        await driver.sleep(300).wait('canvas:nth-child(3)', 30000)
               .sleep(300).mouseMove(0, 7).mouseDown(0);
    });

    it('mouseUp: div.hbox, 535, 179, 0', async function(){
        await driver.sleep(300).wait('div.hbox', 30000)
               .sleep(300).mouseMove(535, 179).mouseMove(535, 179).mouseUp(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 486, 153, 2', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(486, 153).click(2);
    });

    it('click: Delete ( //a[text()="Delete"], 54, 15, 0 )', async function(){
        await driver.sleep(300).wait('//a[text()="Delete"]', 30000)
               .sleep(300).mouseMove(54, 15).click(0);
    });

    it('click: Column ( //a[text()="Column"], 18, 8, 0 )', async function(){
        await driver.sleep(300).wait('//a[text()="Column"]', 30000)
               .sleep(300).mouseMove(18, 8).click(0);
    });

    it('click: #id_viewer_overlay, 476, 184, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(476, 184).click(0);
    });

    it('click: #id_viewer_overlay, 463, 119, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(463, 119).click(0);
    });

    it('click: #id-right-menu-table, 17, 4, 0', async function(){
        await driver.sleep(300).wait('#id-right-menu-table', 30000)
               .sleep(300).mouseMove(17, 4).click(0);
    });

    it('click: Show advanced settin... ( #table-advanced-link, 88, 7, 0 )', async function(){
        await driver.sleep(300).wait('#table-advanced-link', 30000)
               .sleep(300).mouseMove(88, 7).click(0);
    });

    it('click: div[id="tableadv-checkbox-spacing"] > label.checkbox-indeterminate > input[type="button"].img-commonctrl, 9, 4, 0', async function(){
        await driver.sleep(300).wait('div[id="tableadv-checkbox-spacing"] > label.checkbox-indeterminate > input[type="button"].img-commonctrl', 30000)
               .sleep(300).mouseMove(9, 4).click(0);
    });

    it('dblClick: #tableadv-number-spacing button.spinner-up > i.img-commonctrl, 14, 6, 0', async function(){
        await driver.sleep(300).wait('#tableadv-number-spacing button.spinner-up > i.img-commonctrl', 30000)
               .sleep(300).mouseMove(14, 6).click(0).click(0);
    });

    it('click: OK ( //button[text()="OK"], 61, 6, 0 )', async function(){
        await driver.sleep(300).wait('//button[text()="OK"]', 30000)
               .sleep(300).mouseMove(61, 6).click(0);
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

    it('click: #id_viewer_overlay, 691, 346, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(691, 346).click(0);
    });

    it('switchWindow: 0', async function(){
        await driver.sleep(500).switchWindow(0);
    });

    it('scrollTo: 0, 159', async function(){
        await driver.scrollTo(0, 159);
    });

    it('click: new (38).docx ( tr:nth-child(1) > td:nth-child(1) > a.text > span, 17, 6, 0 )', async function(){
        await driver.sleep(300).wait('tr:nth-child(1) > td:nth-child(1) > a.text > span', 30000)
               .sleep(300).mouseMove(17, 6).click(0);
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

    it('click: #left-btn-file span, 16, 12, 0', async function(){
        await driver.sleep(300).wait('#left-btn-file span', 30000)
               .sleep(300).mouseMove(16, 12).click(0);
    });

    it('click: #panel-saveas span.docx, 59, 54, 0', async function(){
        await driver.sleep(300).wait('#panel-saveas span.docx', 30000)
               .sleep(300).mouseMove(59, 54).click(0);
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
