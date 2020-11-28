const {promisify} = require('util')
const fs = require('fs-extra');
const path = require('path');

const readDirLV = promisify(fs.readdir)
const readFileLV = promisify(fs.readFile)
// const writeDirMV = promisify(fs.mkdir)
// const writeFileMV = promisify(fs.writeFile)

const users = [
    {name: 'Oleh', age: '20', gender: 'man'},
    {name: 'Olya', age: '30', gender: 'woman'},
    {name: 'Igor', age: '15', gender: 'man'},
    {name: 'Ira', age: '27', gender: 'woman'},
    {name: 'Ostap', age: '28', gender: 'man'},
    {name: 'Oksana', age: '17', gender: 'woman'},
]

//age + films = folder
const practice = path.join(process.cwd());
const manPath = path.join(practice, 'man');
const manUnderPath = path.join(practice, 'manUnder');
const womanPath = path.join(practice, 'woman');
const womanUnderPath = path.join(practice, 'womanUnder');

allPack();


function Create() {
    const foldersArray = [practice, manPath, manUnderPath, womanPath, womanUnderPath];
    foldersArray.forEach(folder => {
        fs.mkdirp(`${folder}`);
    })
}

function Fill() {
    users.forEach(user => {
        const jsonUser = JSON.stringify(user);
        if (user.age >= 18 && user.gender === 'man'){
            fs.writeFile(path.join(manPath, user.name), jsonUser)
        }
        if (user.age < 18 && user.gender === 'man'){
            fs.writeFile(path.join(manUnderPath, user.name),jsonUser)
        }
        if (user.age >= 18 && user.gender === 'woman'){
            fs.writeFile(path.join(womanPath, user.name), jsonUser)
        }
        if (user.age < 18 && user.gender === 'woman'){
            fs.writeFile(path.join(womanUnderPath, user.name), jsonUser)
        }
    })
}

async function GetUsers() {
    const array = [];
    const folders = await readDirLV(practice)

    for await (const folder of folders) {
        if(folder !== 'app.js') {
            const folderPath = path.join(practice, folder)
            const files = await readDirLV(folderPath)

            for await (const file of files) {
                const filePath = path.join(folderPath, file)
                const infoFile = await readFileLV(filePath)
                array.push(infoFile.toString())
            }
        }
    }

    return array;
}

async function allPack() {
    Create();
    Fill()
    const array = await GetUsers()
    console.log(array);
}

