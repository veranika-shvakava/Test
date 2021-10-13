import {App, rl} from "./App.mjs";
import axios from "axios";

App.registerCommand('now', () => {
    let date = new Date();
    console.log(date);
});
App.registerCommand('new', () => console.log('New!'));
App.registerCommand('weather', async () => {
    rl.question(`Введите город: `, async (city) => {
        let weather = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=824c03983a4ab609bcaf66239059dfbf`);
        console.log(Math.round(weather.data.main.temp - 273), 'градусов');
        App.listenToCommand();
    });
});
App.start();

/* const commands = [
    {
        name: 'first',
        callback: () => {
            console.log('Hello world!');
        },
    },
    {
        name: 'second',
        callback: () => {
            console.log('Hello second world!');
        },
    },
];

let arr = commands.map(({ name }) => name);

console.log(arr); */

// console.log(['first', 'second']);

// console.log(Object.entries(commands));
// console.log(commands[0].name);