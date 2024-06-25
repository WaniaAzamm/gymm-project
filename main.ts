#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blueBright("\n\n------------ WELCOME TO OUR GYM --------------"));
console.log(chalk.yellowBright("\n\n!! KINDLY SELECT YOUR EXERCISE AND ALSO SELECT YOUR TRAINERS TIMING TO START YOUR GYM JOURNEY HERE !!"));
const personName = await inquirer.prompt({
    name: "personname",
    type: "input",
    message: chalk.magentaBright("Please, Enter your name!!")
});
const genderSelect = await inquirer.prompt({
    name: "gender",
    type: "list",
    message: chalk.magentaBright("Please, Select your Gender!"),
    choices: ["Female", "Male"]
});
console.log(chalk.blueBright(`\n\nyou are ${genderSelect.gender}, so we will provide you ${genderSelect.gender} Trainer. `));
const choiceObj = await inquirer.prompt({
    name: "choice",
    type: "list",
    message: chalk.magentaBright("What do you want??"),
    choices: ["Weight loss", "Weight Gain"]
 });
let exercise : string;
if (choiceObj.choice === "Weight loss") {
    const exerciseObj1 = await inquirer.prompt({
        name: "exercise1",
        type: "list",
        message: chalk.magentaBright("Please Select your Exercise!!"),
        choices: ["Pushups", "Squat jump", "Lifting weights", "Pilates"]
    });
    exercise = exerciseObj1.exercise1;
}
else if (choiceObj.choice == "Weight Gain") {
    const exerciseObj2 = await inquirer.prompt({
        name: "exercise2",
        type: "list",
        message: chalk.magentaBright("Please Select your Exercise!!"),
        choices: ["Lunges", "Bench press", "Overhead press", "Crunch"]
    });
    exercise = exerciseObj2.exercise2;
}
console.log(chalk.blueBright(`\n\n${personName.personname}, you'v Successfully Select your Exercise now select your Trainer!\n\n`));
let trainer : string;
if (genderSelect.gender == "Female") {
    const chooseTrainer1 = await inquirer.prompt({
        name: "femaletrainer",
        type: "list",
        message: chalk.magentaBright("Please, Select your Trainer!"),
        choices: ["Trainer Alisha", "Trainer Rida", "Trainer Mahnoor", "Trainer Areeba", "Trainer Alishba"]
    });
    trainer = chooseTrainer1.femaletrainer;
}
else if (genderSelect.gender == "Male") {
    const chooseTrainer2 = await inquirer.prompt({
        name: "maletrainer",
        type: "list",
        message: chalk.magentaBright("Please, Select your Trainer!"),
        choices: ["Trainer Hassan", "Trainer Fahad", "Trainer Zain", "Trainer Ali", "Trainer Sheraz"]
    });
    trainer = chooseTrainer2.maletrainer;
}
const trainersTime = await inquirer.prompt({
    name: "timings",
    type: "list",
    message: chalk.magentaBright("Select your Timing!"),
    choices: ["MORNING : 8 TO 10", "AFTERNOON : 2 TO 4", "EVENING : 5 TO 7", "NIGHT : 10 TO 12"]
});
function showStatus() {
    console.log(chalk.yellow("\n\n------- Your ID Card ------"));
    console.log(chalk.magentaBright(`\n\nNAME: ${personName.personname}`));
    console.log(chalk.magentaBright(`GENDER: ${genderSelect.gender}`));
    console.log(chalk.magentaBright(`GOAL: ${choiceObj.choice}`));
    console.log(chalk.magentaBright(`EXERCISE: ${exercise}`));
    console.log(chalk.magentaBright(`TRAINER: ${trainer}`));
    console.log(chalk.magentaBright(`TIMING: ${trainersTime.timings}\n\n`));
}
showStatus();

