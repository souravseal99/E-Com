var bcrypt = require('bcryptjs');
const users = [
    {
        name: "admin",
        email: "admin123@test.com",
        password: bcrypt.hashSync("admin@123", 8),
        isAdmin: true
    }
    {
        name: "user1",
        email: "user1@test.com",
        password: bcrypt.hashSync("user@1", 8)
    }
]

export default users;