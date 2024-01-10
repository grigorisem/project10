import { TEmployee } from "./src/scripts/type"
const getNewData = async () => {
    return fetch("https://run.mocky.io/v3/a27db518-069d-45a3-8fac-938b5c2228d1")
}
const getResult =async () => {
    const response: TEmployee[] = await(await(getNewData())).json()
    return response
}
const addData = async () => {
    let users: TEmployee[] = await(await(getResult()))
    users.forEach(employee => {
        employee.sallary = parseFloat(String(employee.sallary));
        if(employee.isActive) {
            employee.sallary += (employee.sallary / 100) * 10;
        }
    })
    users.sort((a, b) => b.sallary - a.sallary)
    return users;
}
addData()
    .then (data => {
        console.log(data)
    })
    .catch(error => {
        console.log(error)
    })