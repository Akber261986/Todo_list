#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let todos:string[] = [];
let condition = true
while  (condition) {
let addTask = await inquirer.prompt([
    {
        name: "todo",
        type:"list",
        message:chalk.blue("Which Task do you want to perform?"),
        choices: ['Add Task', 'Delete Task', 'View list', 'Finish']
    }
])
if (addTask.todo === 'Add Task'){
let adding = await inquirer.prompt(
    {
        name: "add",
        type: "input",
        message: chalk.yellow ("\nPlease Enter The Item you Want to Add.\n")
    }
)
if (adding.add != ""){

    todos.push(adding.add);
    console.log(chalk.greenBright(`\n"${adding.add}" Added Successfully.\n`));
    console.log(todos);
}
else{
    console.log(chalk.redBright(`\nYou did not Add anything Please Add an Item or a Value.\n`));
    
}
}
else if (addTask.todo === 'Delete Task'){
    if (todos.length>0){

        let deleteTask = await inquirer.prompt(
            {
                name: "delt",
                type:"list",
                message:chalk.yellow("\nWhich Item do you want to delete?\n"),
                choices: todos 
        })
        
        let delItem = deleteTask.delt
            
            let indexNumber = todos.indexOf(delItem);
            todos.splice(indexNumber,1)
            console.log(chalk.greenBright(`\n"${delItem}" Successfully Deleted from list\n`));
            console.log(`Your remaining items are: ${todos}\n`);    
        
    }
    else{
        console.log(chalk.redBright(`\nThe list is Empity Please Add some Items.\n`));
        
    }
    }
    else if (addTask.todo === 'View list'){
        if (todos.length>0){

            console.log(`\n${todos}\n`);
        }
        else {
            console.log(chalk.redBright(`\nThe list is Empity Please Add some Items.\n`));
            
        }
    }
else {
    condition = false
}
}

function listItem (...items:string[]){
    console.log(chalk.bgBlue(`\nYour final list : ${items}\n`));
    
}
listItem(chalk.bgYellow(chalk.black(`\n${todos}`)))
