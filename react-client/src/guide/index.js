
const agik = ['edwin', 'ochieng'];
const agik1 = {edu:'edwin', ochi:'ochieng'};
let  edwin = ['edu'];
edwin = [...agik, ...edwin];
console.log(edwin);

const rest = (...arg) => {
    console.log(arg);
}

rest('agik edwin',4,'morning',{agik:{agik:'agik'}})

const numbers = [1,2,3,4,5];
[a] = agik;
const {ochi1} = agik1;
console.log(ochi1);
console.log(a);

const mult = [1,2,3,4,5,6,7]

mult.map(p => {
    console.log(p * 2);
})