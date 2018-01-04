const fs = require('fs-extra');

// Approach One (The one we want to avoid)
// Regular callbacks approach
const func1 = function (callback) {
    fs.ensureDir('newfolder1', function (err) {
        if (err) {
            return callback(err);
        }
        console.log('Folder 1 was created.');
        fs.ensureDir('newfolder1/newfolder2', function (err) {
            if (err) {
                return callback(err);
            }
            console.log('Folder 2 was created.');
            fs.ensureDir('newfolder1/newfolder2/newfolder3', function (err) {
                if (err) {
                    return callback(err);
                }
                console.log('Folder 3 was created.');
                callback();
            });
        });
    });
};

const func2 = function () {
    func1(function (err) {
        if (err) {
            return console.error(err);
        }
        console.log('Folders were created.');
        // Do some action that depend on these folders here nex
    });
};

const callback = function (err) {
    console.log('cdsjcdsjncs');
}

func2();