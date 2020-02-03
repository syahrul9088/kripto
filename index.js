const fetch = require('node-fetch');
var randomize = require('randomatic')
const { URLSearchParams } = require('url');
const readlineSync = require('readline-sync');

const functionRegist = (nomor, otp, reff) => new Promise((resolve, reject) => {
    const params = new URLSearchParams;
    params.append('mobile_phone', nomor);
    params.append('varcode', otp)
    params.append('password', 'Japro908@');
    params.append('repassword', 'Japro908@');
    params.append('code', reff);
    params.append('chain_network', 'main_network');
    params.append('os', 'web');
    params.append('os_ver', '1.0.0');
    params.append('soft_ver', '1.0.0');
    params.append('language', 'zh_cn');

fetch('https://www.cryptonclub.com/api/register/register', { 
    method: 'POST', 
    body: params,
    headers: {
        'Host': 'www.cryptonclub.com',
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'X-Requested-With': 'XMLHttpRequest',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Origin': 'https://www.cryptonclub.com',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'en-US,en;q=0.9',
    }
})
    .then(res => res.json())
    .then(result => {
        resolve(result);
    })
    .catch(err => reject(err))
});

(async () => {
    const reff = readlineSync.question('[?] Kode reff: ')
    const jumlah = readlineSync.question('[?] Jumlah reff: ')
    for (var i = 0; i < jumlah; i++) {
    try {
      const rand = randomize('0', 6)
      const otp = randomize('0', 6)
      const nomor = `8310${rand}`
      const regist = await functionRegist(nomor, otp, reff)
      if (regist.code == 200) {
        console.log('[+] Berhasil')
      } else {
        console.log(regist)
      }
    } catch (e) {
        console.log(e)
  }
}
})()