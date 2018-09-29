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

    it('click: Create Document ( a.document, 53, 73, 0 )', async function(){
        await driver.sleep(300).wait('a.document', 30000)
               .sleep(300).mouseMove(53, 73).click(0);
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

    it('click: div:nth-child(1) > span:nth-child(5) > div.split > button[type="button"].dropdown-toggle > span.img-commonctrl, 6, 1, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(1) > span:nth-child(5) > div.split > button[type="button"].dropdown-toggle > span.img-commonctrl', 30000)
               .sleep(300).mouseMove(6, 1).click(0);
    });

    it('click: Matrices ( //a[text()="Matrices"], 59, 16, 0 )', async function(){
        await driver.sleep(300).wait('//a[text()="Matrices"]', 30000)
               .sleep(300).mouseMove(59, 16).click(0);
    });

    it('click: div:nth-child(6) > div.item-equation > div, 22, 40, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(6) > div.item-equation > div', 30000)
               .sleep(300).mouseMove(22, 40).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 759, 107, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(759, 107).click(0);
    });

    it('sendKeys: 1', async function(){
        await driver.sendKeys('1');
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 788, 102, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(788, 102).click(0);
    });

    it('sendKeys: 2', async function(){
        await driver.sendKeys('2');
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 817, 102, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(817, 102).click(0);
    });

    it('sendKeys: 3', async function(){
        await driver.sendKeys('3');
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 765, 116, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(765, 116).click(0);
    });

    it('sendKeys: 4', async function(){
        await driver.sendKeys('4');
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 773, 120, 2', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(773, 120).click(2);
    });

    it('click: Insert ( //a[text()="Insert"], 42, 8, 0 )', async function(){
        await driver.sleep(300).wait('//a[text()="Insert"]', 30000)
               .sleep(300).mouseMove(42, 8).click(0);
    });

    it('click: Column Left ( li:nth-child(3) > a[type="menuitem"], 25, 13, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(3) > a[type="menuitem"]', 30000)
               .sleep(300).mouseMove(25, 13).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 781, 114, 2', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(781, 114).click(2);
    });

    it('click: Insert ( //a[text()="Insert"], 50, 15, 0 )', async function(){
        await driver.sleep(300).wait('//a[text()="Insert"]', 30000)
               .sleep(300).mouseMove(50, 15).click(0);
    });

    it('click: Row Above ( li:nth-child(1) > a[type="menuitem"], 65, 13, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(1) > a[type="menuitem"]', 30000)
               .sleep(300).mouseMove(65, 13).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 748, 116, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(748, 116).click(0);
    });

    it('sendKeys: 0', async function(){
        await driver.sendKeys('0');
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 776, 116, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(776, 116).click(0);
    });

    it('sendKeys: 0', async function(){
        await driver.sendKeys('0');
    });

    it('mouseDown: div:nth-child(3) > canvas:nth-child(2), 758, 132, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(758, 132).mouseDown(0);
    });

    it('mouseUp: div.hbox, 817, 158, 0', async function(){
        await driver.sleep(300).wait('div.hbox', 30000)
               .sleep(300).mouseMove(817, 158).mouseMove(817, 158).mouseUp(0);
    });

    it('mouseDown: canvas:nth-child(3), 1, 7, 2', async function(){
        await driver.sleep(300).wait('canvas:nth-child(3)', 30000)
               .sleep(300).mouseMove(1, 7).mouseDown(2);
    });

    it('mouseUp: div.hbox, 817, 158, 2', async function(){
        await driver.sleep(300).wait('div.hbox', 30000)
               .sleep(300).mouseMove(817, 158).mouseMove(817, 158).mouseUp(2);
    });

    it('click: Hide placeholder ( li:nth-child(12) > a[type="menuitem"], 28, 7, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(12) > a[type="menuitem"]', 30000)
               .sleep(300).mouseMove(28, 7).click(0);
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

    it('click: div:nth-child(3) > canvas:nth-child(2), 793, 100, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(793, 100).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 793, 100, 2', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(793, 100).click(2);
    });

    it('click: Matrix alignment ( li:nth-child(15) > a[type="menuitem"]:nth-child(1), 56, 9, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(15) > a[type="menuitem"]:nth-child(1)', 30000)
               .sleep(300).mouseMove(56, 9).click(0);
    });

    it('click: Top ( //a[text()="Top"], 82, 23, 0 )', async function(){
        await driver.sleep(300).wait('//a[text()="Top"]', 30000)
               .sleep(300).mouseMove(82, 23).click(0);
    });

    it('mouseDown: div:nth-child(3) > canvas:nth-child(2), 780, 122, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(780, 122).mouseDown(0);
    });

    it('mouseUp: div.hbox, 839, 148, 0', async function(){
        await driver.sleep(300).wait('div.hbox', 30000)
               .sleep(300).mouseMove(839, 148).mouseMove(839, 148).mouseUp(0);
    });


    it('click: div:nth-child(3) > canvas:nth-child(2), 809, 101, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(809, 101).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 809, 101, 2', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(809, 101).click(2);
    });

    it('click: Delete ( //a[text()="Delete"], 72, 15, 0 )', async function(){
        await driver.sleep(300).wait('//a[text()="Delete"]', 30000)
               .sleep(300).mouseMove(72, 15).click(0);
    });

    it('click: Delete Column ( li:nth-child(2) > a[type="menuitem"], 14, 8, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(2) > a[type="menuitem"]', 30000)
               .sleep(300).mouseMove(14, 8).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 804, 114, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(804, 114).click(0);
    });

    it('dblClick: div:nth-child(3) > canvas:nth-child(2), 797, 119, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(797, 119).click(0).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 797, 119, 2', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(797, 119).click(2);
    });

    it('click: Show placeholder ( li:nth-child(12) > a[type="menuitem"], 82, 11, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(12) > a[type="menuitem"]', 30000)
               .sleep(300).mouseMove(82, 11).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 878, 152, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(878, 152).click(0);
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

    it('click: #id_viewer_overlay, 809, 122, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(809, 122).click(0);
    });

    it('click: #id_viewer_overlay, 809, 122, 2', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(809, 122).click(2);
    });

    it('mouseDown: #id_viewer_overlay, 793, 124, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(793, 124).mouseDown(0);
    });

    it('mouseUp: #id_main_view, 793, 124, 0', async function(){
        await driver.sleep(300).wait('#id_main_view', 30000)
               .sleep(300).mouseMove(793, 124).mouseMove(793, 124).mouseUp(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 798, 122, 2', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(798, 122).click(2);
    });

    it('click: Delete ( //a[text()="Delete"], 49, 16, 0 )', async function(){
        await driver.sleep(300).wait('//a[text()="Delete"]', 30000)
               .sleep(300).mouseMove(49, 16).click(0);
    });

    it('click: Delete Row ( li:nth-child(1) > a[type="menuitem"], 52, 15, 0 )', async function(){
        await driver.sleep(300).wait('li:nth-child(1) > a[type="menuitem"]', 30000)
               .sleep(300).mouseMove(52, 15).click(0);
    });

    it('click: div:nth-child(3) > canvas:nth-child(2), 872, 140, 0', async function(){
        await driver.sleep(300).wait('div:nth-child(3) > canvas:nth-child(2)', 30000)
               .sleep(300).mouseMove(872, 140).click(0);
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

    it('click: #id_viewer_overlay, 521, 327, 0', async function(){
        await driver.sleep(300).wait('#id_viewer_overlay', 30000)
               .sleep(300).mouseMove(521, 327).click(0);
    });

    it('switchWindow: 0', async function(){
        await driver.sleep(500).switchWindow(0);
    });

    it('scrollTo: 0, 159', async function(){
        await driver.scrollTo(0, 159);
    });

    it('click: new (94).docx ( tr:nth-child(1) > td:nth-child(1) > a.text > span, 24, 6, 0 )', async function(){
        await driver.sleep(300).wait('tr:nth-child(1) > td:nth-child(1) > a.text > span', 30000)
               .sleep(300).mouseMove(24, 6).click(0);
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

    it('click: #left-btn-file span, 4, 15, 0', async function(){
        await driver.sleep(300).wait('#left-btn-file span', 30000)
               .sleep(300).mouseMove(4, 15).click(0);
    });

    it('click: #panel-saveas span.docx, 50, 71, 0', async function(){
        await driver.sleep(300).wait('#panel-saveas span.docx', 30000)
               .sleep(300).mouseMove(50, 71).click(0);
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
