const path = require('path');

const rootDir = require('../utils/path');

exports.getContact = (req, res) => {
    res.sendFile(path.join(rootDir, 'public', 'contact.html'));
}

exports.postContact = (req, res) => {
    res.sendFile(path.join(rootDir, 'public', 'success.html'));
}