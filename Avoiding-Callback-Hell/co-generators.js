const fs = require('fs-extra');
const co = require('co');

// Approach three
// Generators based approach using co module
const func1 = co.wrap(function* () {
    yield fs.ensureDir('newfolder1');
    console.log('Folder 1 was created.');
    yield fs.ensureDir('newfolder1/newfolder2');
    console.log('Folder 2 was created.');
    yield fs.ensureDir('newfolder1/newfolder2/newfolder3');
    console.log('Folder 3 was created.');
});

const func2 = co.wrap(function* () {
    try {
        yield func1();
        console.log('Folders were created.');
        // Do some action that depend on these folders here next
    } catch (err) {
        console.error(err);
    }
});


func2();