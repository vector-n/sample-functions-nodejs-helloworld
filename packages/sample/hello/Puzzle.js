//const ethers = require('ethers');
const fs = require('fs');
var CoinKey = require('coinkey'); 
let start = "0x0000000000000000000000000000000000000000000000020000000000000000"
let end = "0x000000000000000000000000000000000000000000000003ffffffffffffffff"
let stop = "000000000000000000000000000000000000000000000003ffffffffffe3a0fd"

function num(min, max) {
         var res = Math.floor(Math.random() * (max - min)) + min;
         return res;
      }
      
      
      var Pk1 = [  '0','1','2','3','4','5','6','7','8','9','a','b', 'c','d','e','f' ]
      var Pk = ['f','e','d','c','b','a','9','8','7','6','5','4','3','2','1','0' ]
  


addy();
function addy(){
  


  for (var a = 0; a < Pk.length; a++) {
  for (var b = 0; b < Pk.length; b++) {
  for (var c = 0; c < Pk.length; c++) {
  for (var d = 0; d < Pk.length; d++) {
  for (var e = 0; e < Pk.length; e++) {
  for (var f = 0; f < Pk.length; f++) {
  for (var g = 0; g < Pk.length; g++) {
  for (var h = 0; h < Pk.length; h++) {
  for (var i = 0; i < Pk.length; i++) {
  for (var j = 0; j < Pk.length; j++) {
  for (var k = 0; k < Pk.length; k++) {
  for (var l = 0; l < Pk.length; l++) {
  for (var m = 0; m < Pk.length; m++) {
  for (var n = 0; n < Pk.length; n++) {
  for (var o = 0; o < Pk.length; o++) {
  for (var p = 0; p < Pk.length; p++) {
    
    

 const privateKey = ( "000000000000000000000000000000000000000000000003"+ Pk[a] + Pk[b] + Pk[c] + Pk[d] + Pk[e] + Pk[f] + Pk[g] + Pk[h] + Pk[i] + Pk[j] + Pk[k] + Pk[l] + Pk[m] + Pk[n] + Pk[o] + Pk[p]);



var target = "13zb1hQbWVsc2S7ZTZnP2G4undNNpdh5so" 

var privateKeyHex = privateKey 
var privateKeybuff = new Buffer.from(privateKeyHex, 'hex');
// Bitcoin Address
var key = new CoinKey(privateKeybuff);
var address = key.publicAddress 
if (target == address){
console.log(address)
console.log(privateKeyHex)
process.exit();
}else{
  console.log(`${address} ${privateKeyHex}`)
  
  fs.writeFileSync('./end1.txt', privateKeyHex, (err) => {  
            if (err) throw err; 
        })
        
}
 
}}}}}}}}}}}}}}}}}


