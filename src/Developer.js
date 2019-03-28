export class Developer {
    constructor(name) {
        this.name = name;
    }

    info(){
        //console.log('Work!')
        prompt("Сообщение из файла Developer.js");
    }
}
let dev = new Developer("Vasya");
dev.info();

