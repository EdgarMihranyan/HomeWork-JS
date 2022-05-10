"use strict"
const readlineSync = require("readline-sync");
const quest = {
  1(){
    console.log(`\nHarc N 10.\n Inch ardyunq cuyc kta \`isNaN(NaN) === !isFinite(NaN) \` console - um ` + "\n");
    return 'true'
  },
  2(){
    console.log(`\nHarc N 9.\n Inch ardyunq cuyc kta \`1 + 2 + 3 + "4" \` console - um ` + "\n");
    return '64'
  },
  3(){
    console.log(`\nHarc N 8.\n Inch ardyunq cuyc kta \`parseInt('4 + 2') \` console - um ` + "\n");
    return '4'
  },
  4(){
    console.log(`\nHarc N 7.\n Inch ardyunq cuyc kta \` let a = 0
    a &&= 2 \` console - um ` + "\n");
    return '0'
  },
  5() {
    console.log(`\nHarc N 6.\n Inch ardyunq cuyc kta \` let a = 3
    a **= 2 \` console - um ` + "\n");
    return '9';
  },
  6() {
    console.log("\nHarc N 5." + "\n Qani data type uni Java Script@ ? " + "\n");
    return '8';
  },
  7() {
    console.log("\nHarc N 4." + "\n Inch ardyunq cuyc kta ` typeof (NaN) ` Consol - um " + "\n");
    return "number"
  },
  8() {
    console.log("\nHarc N 3." + "\n Java Scripti data type - neric qanisnen primitive type ? " + "\n");
    return '7';
  },
  9() {
    console.log("\nHarc N 2." + "\n Inch ardyunq cuyc kta ` null == undefined ` Consol - um " + "\n");
    return "true"
  },
  10() {
    console.log("\n\nHarc N 1." + "\n Java Script@ qani hat cikl uni ? " + "\n");
    return "5";
  },
}
class User {
  constructor(name, age, workPractice) {
    this.name = name
    this.age = age
    this.workPractice = workPractice
  }
}
const user1 = new User(readlineSync.question("Dzer anun - "), Number(readlineSync.question("Dzer tariq@ - ")), Boolean(Number(readlineSync.question(`Ashxatanqayin pordz uneq?
 Ete ayo sexmeq \` 1 
 Ete voch sexmeq \` 0 `+ "\n"))))
console.log("Bari galust UGeek company xndrum em spaseq ..."+ "\n");
let promis = new Promise((resolve, reject) => {
  let user = user1
  setTimeout(() => {
    console.log(`Dzer tvyalnern en \`
   `, user,"\n")
  }, 3000)
  setTimeout(() => {
    if (readlineSync.question(`${user.name} jan dzer tvyalner@ chisht en ?
    Ete ayo sexmeq \` 1 
    Ete voch sexmeq \` 0 `+ "\n")) {
      resolve(user)
    } else {
      reject(new Error(`Dzer tvaylner@ sxal en `+ "\n"))
    }
    console.log("Ashxatanqayin pordzi stugum ..."+ "\n");
    user.testWorkPractice = true;
  }, 7000)
})
  .then(data => {
    return new Promise((res, rej) => {
      if (data.workPractice) {
        setTimeout(() => {
          console.log(data,`\nAshxatanqayin pordz@ arka e \`
        harcazruyc@ shutov ksksvi ...`+ "\n");

          res(data)
        }, 8000)
      } else {
        setTimeout(() => {
          console.log(data);
          console.log(` Harcazruyc chi linelu aranc ashxatanqayin pordzi !`+ "\n");
        }, 5000)
        data.interviewResult = false
        rej(new Error("Ashxatanqayin pordz@ arka che "+ "\n"))
      }
    })
  })
  .then(data => {
    return new Promise((res, rej) => {
      setTimeout(() => console.log("Harcazruyc@ sksvac e"+ "\n"), 6000)
      let countQuestions = 10
      let result = 0;
      setTimeout(() => {
        while (countQuestions--) {
          result = quest[countQuestions + 1]() == readlineSync.question(`Dzer patasxane - `) ? result + 1 : result;
        }
        console.log(`${data.name} jan duq chisht eq patasxane ${result} harcin 10 ic`+ "\n");
        if (result >= 8) {
          data.interviewResult = true
          res(data)
        } else {
          data.interviewResult = false
          rej(new Error(`${data.name} jan duq cheq ancel harcazruyc@ `+ "\n"))
        }
      }, 9000)
    })
  }).then(data => {
    data.worksAt = "UGeeK Company"
    setTimeout(() => console.log(`Shnorhavorum em ${data.name} duq ancel eq harcazruyc@ ev @ndunvac eq ashxatanqi\n`,data), 3000)
  })
  .catch(err => {
    user1.worksAt = null
    console.log(user1);
    setTimeout(() => console.log(err.message + "Hajoxutyun !"), 5000)
  })




