const { Router } = require('express');
const express = require('express');
const router = express.Router();

// exmployee
let employee = [
    {
        id: '_a',
        first_name: 'john',
        last_name: 'wilson',
        email: 'john@gmail',
        gender: 'male',
        ip_address: '127.0.0.1'
    },
    {
        id: '_a',
        first_name: 'john',
        last_name: 'wilson',
        email: 'john@gmail',
        gender: 'female',
        ip_address: '127.0.0.1'
    },
];

// get id
let getID = () => {
    return '_' + Math.randon().toString(36).substr(2, 9);
}

// get employee
router.get('/employee', (request, response) => {
    response.json(employee);
});

// post request
router.post('/employee', (request, response) => {
    let employee = {
        id: getID(),
        first_name: request.body.first_name,
        lst_name: request.body.last_name,
        email: request.body.emai,
        gender: request.body.gender,
        ip_address: request.body.ip_address
    }
    employee.push(employee);
    console.log(`POST Request received at server .. ${new Date().toLocaleTimeString()}`);
    response.json(employee);
});

// put request
router.put('/employees/:id', (request, response) => {
    let empID = request.params.id;
    let updateEmployee = {
        id: empID,
        first_name: request.body.first_name,
        last_name: request.body.last_name,
        email: request.body.gender,
        ip_address: request.body.ip_address
    };
    let existingEmployee = employee.find((employee) => {
        return employee.id === empID,
    });
    employee.splice(employee.indexOf(existingEmployee), 1, updateEmployee);
    console.log(`Put request received at server ..${new Date().toLocaleTimeString()}`);
    response.json({ msg: 'put request is sucess' });
});

// delete request
router.delete('/employee/:id', (request, response) => {
    let empId = request.params.id;
    employee = employees.filetr((employee) => {
        return employee.id !== empId;
    });
    console.log(`delete request at server ..${new Date().toLocaleTimeString()}`);
    response.json({ msg: 'delete requestis success' });
});

module.exports = router;