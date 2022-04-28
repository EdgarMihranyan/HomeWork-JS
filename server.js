"use strict"
class User {
    #name
    #age
    #phone
    #company
    constructor(name, age, phone, company) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.company = company;
    }
    get name() {
        return this.#name;
    }
    set name(str) {
        if (str[0] === str[0].toLowerCase()) {
            console.log(" Error: Имя человека нужно писать с заглавной буквы !");
            return false;
        }
        for (let i = 0; i < str.length; i++) {
            if (!(str[i].toUpperCase() >= "A" && str[i].toUpperCase() <= "Z")) {
                console.log(" Error: Имя человека должон содержать только буквы !");
                return false;
            }
        }
        this.#name = str;
    }
    get age() {
        return this.#age;
    }
    set age(num) {
        if (!(num >= 0)) {
            console.log(" Error: Возраст человека не может быть отрицательным или не числом !");
            return false;
        }
        this.#age = num;
    }
    get phone() {
        return this.#phone;
    }
    set phone(number) {
        let num = String(number);
        if (!(num.length < 14 && num.length > 7)) {
            console.log(` Error: Длина номера телефона не совпадает !`);
            return false;
        }
        if (num.slice(0, 2) == "94" && num.length == 8) {
            this.#phone = "+374" + num.slice(-8)
            return;
        }
        if (num.slice(0, 3) == "094" && num.length == 9) {
            this.#phone = "+374" + num.slice(-8)
            return;
        }
        if (num.slice(0, 6) == "+37494" && num.length == 12) {
            this.#phone = "+374" + num.slice(-8)
            return;
        }
        if (num.slice(0, 7) == "0037494" && num.length == 13) {
            this.#phone = "+374" + num.slice(-8)
            return;
        }
        console.log(` Error: Ошибка при вводе номера телефона !`);
        return false;
    }
    get company() {
        return this.#company;
    }
    set company(comp) {
        if (!(comp[0] >= "A" && comp[0] <= "Z")) {
            console.log(" Error: Имя компании должно начинать с заглавной буквой !");
            return false;
        }
        this.#company = comp;
    }
}
let user = new User("Edgar", 24, "0946696", "UGeeK")
console.log(user.phone);
