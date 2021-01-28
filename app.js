

let pronoum = ['A', 'The'];
let subject = ['little', 'big', 'lil', 'bigger'];
let noum = ['tutifruti', 'peep', 'caneli', 'bmo']
let dat = ['.com', '.org', '.inc', '.es', '.uwu'];



function result() {
    pronoum = pronoum[Math.floor(Math.random() * pronoum.length)];
    subject = subject[Math.floor(Math.random() * subject.length)];
    noum = noum[Math.floor(Math.random() * noum.length)];
    dat = dat[Math.floor(Math.random() * dat.length)];


    return pronoum + subject + noum + dat;

}
console.log(result());

