const empleados = [
    {
        id: 1,
        nombre: "Pepe"
    },
    {
        id: 2,
        nombre: "Isabel"
    },
    {
        id: 3,
        nombre: "Roberto"
    }
];
const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
];
const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find((e) => e.id == id)?.nombre;
        (empleado)
            ? resolve(empleado)
            : reject(`No se encontró usando el id ${id}`);
    });
}
const getSalario = (id) => {
    return new Promise((resolve, reject) => {
        const salario = salarios.find((e) => e.id == id)?.salario;
        (salario)
            ? resolve(salario)
            : reject(`No se encontró salario usando el id ${id}`);
    });
}
const id = process.argv[2] || 0;
let nombre;
getEmpleado(id).then(empleado => {
    nombre = empleado;
    return getSalario(id);
}).then(salario => {
    console.log("El empleado", nombre, "tiene un salario de", salario);
});










/*
getEmpleado(id).then((empleado) => {
    //console.log(resultado);
    getSalario(id).then((salario) => {
        console.log("El usuario", empleado, "tiene un salario de", salario);
    }).catch((err) => {
        console.log(err);
    });
}).catch((err) => {
    console.log(err);
});
*/