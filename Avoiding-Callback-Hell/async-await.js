const fs = require('fs-extra');

// Approach four (The Best)
// async-await based approach
const func1 = async function () {
    await fs.ensureDir('newfolder1');
    console.log('Folder 1 was created.');
    await fs.ensureDir('newfolder1/newfolder2');
    console.log('Folder 2 was created.');
    await fs.ensureDir('newfolder1/newfolder2/newfolder3');
    console.log('Folder 3 was created.');
};

const func2 = async function () {
    try {
        await func1();
        console.log('Folders were created.');
        // Do some action that depend on these folders here next
    } catch (err) {
        console.error(err);
    }
};


func2();