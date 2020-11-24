const {promisify} = require('util')
const fs = require('fs-extra');

const readDirLV = promisify(fs.readdir)
const readFileLV = promisify(fs.readFile)

const path = require('path');

getUsers().then(arr => writeUsers(arr))

async function getUsers () {
    const array = [];

    const classRoomPath = path.join(process.cwd(), 'classroom')
    const folders = await readDirLV(classRoomPath)

    for await (let folder of folders) {
        const files = await readDirLV(path.join(classRoomPath, folder))

        for await (let file of files) {
           
            array.push(`${file}`)
        }

    }

    return array;
}


async function writeUsers(array) {
    for(let i=0;i<array.length;i++) {

        let filePath = path.join('classroom', '1800', `${array[i]}`);
        let fileMove = path.join('classroom', '2000', `${array[i]}`);

        fs.move(filePath, fileMove, function (err) {
            if (err)  {
                return  fs.move(fileMove, filePath, function (err) {
                    if (err) throw err
                    console.log('err done!');
                });
            }
            console.log('done!');
        })
    }
}



