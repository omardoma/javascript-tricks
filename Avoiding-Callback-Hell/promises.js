/* 
We used fs-extra instead of fs because every called function returns a promise
that can be used in chaining to avoid callback hell, thus this approach is only
valid for functions that returns promises when called.
 */
const fs = require('fs-extra');

// Approach two
// Chained Promises approach
const func1 = function () {
    return fs.ensureDir('newfolder1').then(function () {
        console.log('Folder1 was created.');
        return fs.ensureDir('newfolder1/newfolder2');
    }).then(function () {
        console.log('Folder2 was created.');
        return fs.ensureDir('newfolder1/newfolder2/newfolder3');
    }).then(function () {
        console.log('Folder3 was created.');
        return Promise.resolve('Folders were created.');
    }).catch(function (err) {
        console.error(err);
    });
};

const func2 = function () {
    func1().then(function (msg) {
        console.log(msg);
        // Do some action that depend on these folders here next
    });
};


func2();