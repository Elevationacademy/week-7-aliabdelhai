/* Write your code below */

const Matrix = require("./Matrix");

class EmployeeMatrix extends Matrix{


    loadData(salaryData) {
        this.matrix = salaryData.map(sd => {return [sd._id, sd.name, sd.department, sd.salary]})
    }

    getEmployees(department) {
        const names = []
        for(let person of data) {
            if(person.department == department) {
                names.push(person.name);
            }
        }
        return names;
    }

    getTotalSalary(department) {
        let salary = 0;
        for(let person of data) {
            if(person.department == department) {
                salary += person.salary;
            }
        }
        return salary;
    }

    findRichest() { 
        let maxSalary = 0;
        let richestPerson = ''
        for(let person of data) {
            if(person.salary > maxSalary) {
                maxSalary = person.salary;
                richestPerson = person.name;
            }
        }
        return richestPerson;
    }
}


let data = [
    { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
    { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
    { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
    { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
    { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
    { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 }
]

let m = new EmployeeMatrix()

m.loadData(data)
m.print()
//prints

// e10021  Gillian Finance 2000
// e10725  Tibor   Design  1200
// e10041  Anisha  Finance 2300
// e10411  Jakub   Design  1600
// e11995  Mar     Design  1300
// e10732  Nisha   Design  1200


console.log(m.getEmployees("Finance")) //prints [ 'Gillian', 'Anisha' ]
console.log(m.getEmployees("Design")) //prints [ 'Tibor', 'Jakub', 'Mar', 'Nisha' ]
console.log(m.getTotalSalary("Finance")) //prints 4300
console.log(m.getTotalSalary("Design")) //prints 5300
console.log(m.findRichest()) //prints Anisha
/* Do not remove the exports below */
module.exports = EmployeeMatrix
