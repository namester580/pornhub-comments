/**
 * Created by CoBLiN on 2016/08/19.
 */
//var $ = require('jquery');
//var io = require('socket.io')(http);
var request = require('request');

var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: false });
var fs = require('fs');
fs.writeFile('comments.txt','');
var $ = require('jquery');


var twitterAPI = require('node-twitter-api');
var twitter = new twitterAPI({
    consumerKey:'XCpRzaLuTErxamplekeyPR',
    consumerSecret: 'lv6sU4cE3Q9ddg48',
    callback: 'http://placeholder.com'
});










var rn = function(){
    var nightmare = Nightmare({ show: false });
    console.log('rning');
nightmare
    .goto('http://pornhub.com/random')
   // .exis
   // .wait('.commentMessage')
    .wait('#cmtWrapper  h2  span')
    .wait(function(){
        var cmtwrap = document.querySelector('#cmtWrapper  h2  span');
        if(cmtwrap.innerText=='(0)'||!cmtwrap) {
            window.location.href='http://www.pornhub.com/random';
      //      location.reload();
        }else{
         return true;
        }
    })
    .wait('.commentMessage')
    .evaluate(function () {




     //   var divsnick = document.querySelectorAll('.commentBlock .usernameWrap .usernameLink '), j;



    //  console.log(document.querySelector('.commentMessage').text());
var cml = document.querySelectorAll('.commentMessage').length;
//console.log( document.querySelector('.commentMessage').length);
      var  rndm = Math.round(Math.random()*(cml-2));
       var cmnt =document.querySelectorAll('.commentMessage')[rndm].innerText;
      cmnt =  cmnt.trim().slice(0,cmnt.length-10).trim();
            return cmnt + '       -' + document.querySelectorAll('.commentBlock .usernameWrap .usernameLink ')[rndm].innerText;

        })
    .end()
    .then(function (result) {
        console.log(result);


        twitter.statuses("update", {
                status: result
            },
          ' hdhdhsv ',
            'dhdj',
            function (error, data, response) {
                if (error) {
                    // something went wrong
                } else {
                    // data contains the data sent by twitter
                }
            }
        );



//return true;


    })
    .catch(function (error) {
      //  window.location.href='http://www.pornhub.com/random';
/*

        //  console.log(document.querySelector('.commentMessage').text());
        var cml = document.querySelectorAll('.commentMessage').length;
//console.log( document.querySelector('.commentMessage').length);
        var  rndm = Math.round(Math.random()*cml-2);

        var cmnt =document.querySelectorAll('.commentMessage')[rndm].innerText;
        cmnt =  cmnt.slice(0,cmnt.length-10).trim();
        return cmnt + '-' + document.querySelectorAll('.commentBlock .usernameWrap .usernameLink ')[rndm].innerText;

*/
return rn;






      //  console.error('Search failed:', error);
    });



  //  console.log('end of rn');
}
rn();

//setInterval(rn,30*60*1000)
