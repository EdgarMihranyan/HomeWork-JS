'use strict'
function User(name, age, city, street, company) {
    if (!new.target) {
        return new User(name, age, city, street, company)
    }
    Object.defineProperties(this, {
        _name: { value: checkName(name), writable: true },
        _age: { value: checkAge(age), writable: true },
        _address: { value: {} },
        _company: { value: checkCompany(company), writable: true }
    })
    Object.defineProperties(this._address, {
        _city: { value: checkAddress(city), writable: true },
        _street: { value: checkAddress(street), writable: true }
    })
    let thisObj = this;
    Object.defineProperties(this._address, {
        city: {
            get: function () {
                return thisObj._address._city;
            },
            set: (city) => this._address._city = checkAddress(city) ? city : this._address._city,
            enumerable: true,
            configurable: true
        },
        street: {
            get: function () {
                return thisObj._address._street;
            },
            set: (street) => this._address._street = checkAddress(street) ? street : this._address._street,
            enumerable: true,
            configurable: true
        },
    })
    Object.defineProperties(this, {
        name: {
            get: function () {
                return this._name;
            },
            set: (name) => this._name = checkName(name) ? name : this._name,
            enumerable: true,
            configurable: true
        },
        age: {
            get: function () {
                return this._age;
            },
            set: (age) => this._age = checkAge(age) ? age : this._age,
            enumerable: true,
            configurable: true
        },
        address: {
            get: () => this._address,
            enumerable: true
        },
        company: {
            get: function () {
                return this._company;
            },
            set: (company) => this._company = checkCompany(company) ? company : this._company,
            enumerable: true,
            configurable: true
        },
        fullAddress: {
            get: () => `${this._address._city} ${this._address._street}`,
            set: (newAddress) => {
                if (checkAddress(newAddress)) {
                    let item = newAddress.split(" ");
                    this._address._city = item[0];
                    this._address._street = item[1];
                };
            },
            enumerable: true,
        }
    })
    Object.defineProperties(this, {
        showAge: {
            value: () => console.log(this.age),
            configurable: true,
            writable: true
        },
        showName: {
            value: () => console.log(this.name),
            configurable: true,
            writable: true
        },
        showCompany: {
            value: () => console.log(this.company),
            configurable: true,
            writable: true
        },
        showAddress: {
            value: () => console.log(`${thisObj._address.city}  ${thisObj._address.street}`),
            configurable: true,
            writable: true
        }
    })
}
function checkName(name) {
    if (name.length < 2) {     // erkarutyun@
        console.log('<<   Error: Name must contain at least two letters!   >>>');
        return;
    }
    for (let i = 1; i < name.length; i++) { // menak araji tar@ petqa lini mecatar
        if (name[i] !== name[i].toLowerCase()) {
            console.log("<<<   Error: Name must not contain personal capital letters!   >>>");
            return;
        }
    }
    if (name[0] === name[0].toLowerCase()) { // araji tar@ mecatar
        console.log('<<<   Error: The name must start with a capital letter!   >>>');
        return;
    }
    for (let i = 0; i < name.length; i++) { // anun@ petq e parunaki menak tar
        let word = name[i].toLowerCase();
        if (!(word >= "a" && word <= "z")) {
            console.log("<<<   Error: The name must contain only letters!   >>>");
            return;
        }
    }
    return name;
}
function checkAge(number) {
    if (!(typeof number === "number")) {
        console.log("<<<   Error: NaN!   >>>");
        return;
    }
    if (number <= 0) {
        console.log("<<<   Error: Numbers must be positive!   >>>");
        return;
    }
    return number;
}
function checkAddress(address) {
    if (address.length < 4) {          //  hascei anvan erkarutyun@
        console.log('<<<   Error: Name must contain at least four letters!   >>>');
        return;
    }
    for (let i = 1; i < address.length; i++) { // talisa hnaravorutyun erku ev aveli anunneri u mecatar petqa lini menak anuni araji tar@
        if (address[i] === " " && address[i + 1] === address[i + 1].toUpperCase()) {
            i++
            continue;
        }
        if (address[i] !== address[i].toLowerCase()) {
            console.log("<<<   Error: Name must not contain personal capital letters!   >>>");
            return;
        }
    }
    if (address[0] === address[0].toLowerCase()) { // anun@ petqa sksvi mecatarov
        console.log('<<<   Error: The name must start with a capital letter!   >>>');
        return;
    }
    for (let i = 0; i < address.length; i++) { // anun@ petqa lini menak tar
        let word = address[i].toLowerCase();
        let letter = word >= "a" && word <= "z";
        if (word === " " && address[i + 1] === address[i + 1].toUpperCase() || address[i - 1] === " " && letter) {
            continue;
        }
        if (!letter) {
            console.log("<<<   Error: The name must contain only letters!   >>>");
            return;
        }
    }
    return address;
}
function checkCompany(company) {
    if (company[0] === company[0].toLowerCase()) {
        console.log(`<<<   Error: When entering company name!   >>>`);
        return;
    }
    return company;
}
let user = new User("Edgar", 24, "Yerevan", "Axbyur Serob", "UGeek")
user.name = "Erik"
user.age = "456"
user.address.city = "Tashkent"
user.address.street = "Hjhafhkjas"
user.company = "Logistic Company"
user.showName();
user.showAge();
user.showAddress();
user.showCompany();
console.log(user.fullAddress); 
function copyObj(copy, obj) {
    for (let key in obj) {
        if (typeof (obj[key]) == "object") {
            copy[key] = copyObj({}, obj[key])
        } else {
            Object.defineProperty(copy,key,Object.getOwnPropertyDescriptor(obj,key));
        }
    }
    return copy;
}
let objCopy = copyObj({},user)
console.log(Object.getOwnPropertyDescriptors(objCopy));