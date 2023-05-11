//import user from '../models/user.js';

let user = [];


// get all users
export function getAllUsers(req, res) {
    res.send(user).end();
}

// get single user
export function getSingleUser(req, res) {
    const user = user.find(r => r.id === req.params.userId);
    res.send(user).end();
}

//user login
export  function login(req, res) {
    user = user.findOne({username: req.params.username });
    res.send("Login sucessfull!").end();
}

//register
export function register(req, res) {
    user.create({
        name: req.params.name,
        username: req.params.username,
        password: req.params.password,
        role: req.body.role
    })
    res.send("welcome Onboard").end();

    }


// add new user
export function addUser(req, res) {
    user.push({
        ...req.body,
        id: (user.length + 1).toString()
    });
    res.send("user added").end();
}

// update user
export function udpateUser(req, res) {
    user = user.map(r => {
        if (r.id === req.params.userId) {
            return {...r, ...req.body};
        }

        return r;
    })

    res.send("user updated successfully!").end();
}

// delete user
export function deleteUser(req, res) {
    user = user.filter(r => r.id !== req.params.userId);
    res.send("user deleted").end();
}






