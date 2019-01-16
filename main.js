
const createEmployee = (employee) => {
    return `<h2>${employee.name}</h2>
            <p>Title: ${employee.title}</p>
            <p>Branch: ${employee.branch}</p>
            <p>NickName: ${employee.nickName}</p>
            <p>Department: ${employee.department}</p>
            `
}

const writeToDOM = (component) => {
    document.querySelector("#container").innerHTML += component
}

const listEmployees = (employeeArray) => {
    employeeArray.forEach(employee => {
        const component = createEmployee(employee)
        writeToDOM(component)
    })
}

listEmployees(dunderMifflin.admin)
listEmployees(dunderMifflin.sales)
listEmployees(dunderMifflin.finance)