class Human {
    constructor(name, age, dateOfBirth) {
        this.name = name || `Anonimus`;
        this.age = age || 18;
        this.dateOfBirth = dateOfBirth || '1 Января';
        this.info = `name: ${name}, age: ${age}, date of birth: ${dateOfBirth}`;
    };
    displayInfo() {
        console.log(info);
    };
};

class Employee extends Human {
    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth);
        this.salary = salary || 100000;
        this.department = department || `world domination`;
        this.info = this.info + ` salary: ${salary}, depatment: ${department}`;
    };
};

class Manager extends Employee {
    constructor(name, age, dateOfBirth, salary, department, team) {
        super(name, age, dateOfBirth, salary, department);
        if (team) {            
            this.team = team;
        } else {
            this.team = {};
        };
    };

    adDeveloper(dev) {
        this.team[dev.name] = dev;
        dev.setManager(this); // разраб узнает о переходе в команду
    }

    removeDeveloper(dev){
        if (this.team[dev.name]){
            this.team[dev.name] = null; // оставляю запись  о том, что разраб тут когда-то работал но удаляю ссылку на объект
            //delete this.team[dev.name]; // Способ удаления целиком. Если разраб так сильно накосячил, что и вспоминать о нем не хочется.
        };
    };
};
class Developer extends Employee {
    constructor(name, age, dateOfBirth, salary, department) {
        super(name, age, dateOfBirth, salary, department);        
    }

    setManager(man){
       if (this.manager){
           this.manager.removeDeveloper(this); //сначала увольняемся от старого менеджера
       };
        this.manager = man;        
    }

    getManager(){
        if (this.manager){
            return this.manager;
        };
        console.log(`Я волк-одиночка`);
        return null;
    }
}

let man = new Manager("Vasya", 1, 25, 50000, 'frontend');
let superman = new Manager("Vova", 1, 25, 1000000, 'frontend');
let dev = new Developer("Petya", 1, 25, 50000, 'frontend');

console.log(man.info);
dev.getManager();  // Петя пока без команды
man.adDeveloper(dev);   // определили к менеджеру
console.log(man.team);  //  Петя принят в команду
superman.adDeveloper(dev);  // Петя идет на повышение
console.log(man.team);  // Осталась запись что Петр тут работал
console.log(superman.team); // А сам он в новой команде
console.log(superman.team["Petya"].info) // До Пети можно достучаться через руководство.