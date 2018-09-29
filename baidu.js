var JWebDriver = require('jwebdriver');

 var driver = new JWebDriver();

 driver.session("chrome")
     .url('https://www.baidu.com/')
     .find('#kw')
     .val('mp3')
     .submit()
     .title()
     .then(function(title){
         console.log(title);
     })
     .close();
