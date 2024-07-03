const connect=require('../databasegym');

const bcrypt = require('bcrypt');
const Members = require('../model/members.model');
// Example password to hash
const plainPassword = 'password123';
connect();
// Generate hashed password
bcrypt.hash(plainPassword, 10, (err, hashedPassword) => {
    if (err) {
        console.error('Error hashing password:', err);
        return;
    }

    // Now you have the hashed password
    console.log('Hashed Password:', hashedPassword);

    // Here you can manually insert into MongoDB
    const newMember = new Members({
        firstname: 'admin',
        lastname: 'rs',
        email: 'rs@example.com',
        password: hashedPassword, // Insert hashed password
        phone: '1234567890',
        joinDate: new Date(),
        isAdmin: true
    });

    newMember.save()
        .then(() => {
            console.log('Member saved successfully');
        })
        .catch(err => {
            console.error('Failed to save member:', err);
        });
});
