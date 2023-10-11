const { default: axios } = require("axios");

console.log("1");

// * CALLBACK
// const callbackFunc = (num, callback) => {
//   setTimeout(() => {
//     callback(num);
//   }, 2000);
// };

// const processCallback = (result) => {
//   console.log(result);
// };

// callbackFunc(2, processCallback);

// * PROMİSE

const promiseFunc = (num) => {
  return new Promise((resolve, reject) => {
    let statu = true;
    setTimeout(() => {
      if (statu) resolve(num);
      reject(new Error("Hatalı işlem !.."));
    }, 2000);
  });
};

const promiseFunc2 = (num) => {
  return new Promise((resolve, reject) => {
    let statu = true;
    setTimeout(() => {
      if (statu) resolve(num);
      reject(new Error("Hatalı işlem !.."));
    }, 6000);
  });
};

promiseFunc(2)
  .then((pr) => console.log(pr))
  .catch((err) => console.log(err));
promiseFunc2(2.5)
  .then((pr) => console.log(pr))
  .catch((err) => console.log(err));

Promise.all([promiseFunc(2), promiseFunc2(2.5)])
  .then((pr) => {
    console.log(pr[0]);
    console.log(pr[1]);
  })
  .catch((err) => console.log(err));
//allSEttled : Durum değişikliklerini de gösterir.
Promise.allSettled([promiseFunc(2), promiseFunc2(2.5)])
  .then((pr) => {
    console.log(pr[0]);
    console.log(pr[1]);
  })
  .catch((err) => console.log(err));
//race : hangi işlem daha kısa sürede gerçekleşiyorsa onu döner. (array dönmez)
Promise.race([promiseFunc(6), promiseFunc2(2.5)])
  .then((pr) => {
    console.log(pr);
  })
  .catch((err) => console.log(err));
//any : race ile aynı işlem
Promise.any([promiseFunc(6), promiseFunc2(2.5)])
  .then((pr) => {
    console.log(pr);
  })
  .catch((err) => console.log(err));

console.log("1");
// ASYNC AWAİT
// APİ : https://restcountries.com/v3.1/all

// const asyncFunc = async () => {
//   const fetchData = await axios.get("https://restcountries.com/v3.1/all");
//   console.log(fetchData);
// };

// asyncFunc();

console.log("3");
