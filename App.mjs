/*
Необходимо написать класс App, который будет содержать в себе всю логику работы с чат ботом, а именно:

1. Метод registerCommand, который добавляет в внутренний массив commands объект с полями: name (имя команды) и callback (функция обработчик. Например, в предыдущем шаге функция greeting может быть обработчиком команды привет). Не возвращает ничего.
2. Метод showCommands, который возвращает (не пишет в консоль!) сообщение: "Привет, я чат-бот! Список моих команд: {команды_через_запятую}"
3. Метод start, который при своем запуске регистрирует хотя бы одну команду, далее пишет в консоль результат выполнения App.showCommands и выполняет метод listenToCommand. О ней далее:
4. Метод  listenToCommand выполняет код:
readline.question(`Введите команду: `, (commandName) => {
Ищем команду в App.commands. Если тако команды нет, пишем: "Такой команды нет, попробуйте еще раз" и опять вызываем метод listenToCommand });
5. Добавить программу Выйти, которая выключает все приложение со словами: "Увидимся!"
6. Создавай классы в отдельных файлах
7. index.js должен быть вида:
App.start(); И больше ничего
*/
import readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class App {
    static commands = [
        {
            name: 'show',
            callback: () => {
                console.log('Commands:', this.commands.map(({ name }) => name).join(' '));
            },
        },
        {
            name: 'exit',
            callback: () => {
                console.log('Good bye!');
            },
        },
    ];

    static registerCommand(name, callback) {
        this.commands.push({ name, callback });
    }

    static showCommands() {
        const message = 'Привет, я чат-бот! Список моих команд: ';
        return message + this.commands.map(({ name }) => name).join(', ');
    }

    static start() {
        let result = this.showCommands();
        console.log(result);
        this.listenToCommand();
    }

    static listenToCommand() {
        rl.question(`Введите команду: `, async (commandName) => {
            let command = this.commands.find(command => command.name === commandName);

            if (command) {
                await command.callback();

                if (command.name === 'exit') {
                    return rl.close();
                }
            } else {
                console.log('Такой команды нет, попробуйте еще раз');
            }
            this.listenToCommand();
        });
    }
}

export {App, rl};

/* let commandName = 3;

console.log('?', [1, 2, 3, 4, 5].find(elem => elem == commandName)); */

/*

function sum(a, b) {
    return a + b;
}

console.log(sum(1, 4));

let result = sum(1, 4);

console.log(sum(result, 4)); */


/* class Person {
    constructor() {
        let name = 'Ivan';
        this.name = name;
    }

    static fullName = 'Ivan';

    static sayHi() {
        console.log('Hi', this.fullName);
    }
} */

// let ivan = new Person();
// ivan.sayHi();
// Person.sayHi();