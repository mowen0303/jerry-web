import { useState } from 'react';

export default function TotalSalaryPage() {

    const [query, setQuery] = useState('');
    const [result, setResult] = useState("Please type into a UserId");


    const e1 = {
        id: 1,
        name: "Alice",
        subordinates: null,
        salary: 1000
    }

    const e2 = {
        id: 2,
        name: "Alice",
        subordinates: e1,
        salary: 1500
    }

    const e3 = {
        id: 3,
        name: "Charlie",
        subordinates: e2,
        salary: 2000
    }

    const employeeList = [e1, e2, e3];

    //Core algorithm - recursion
    function getAllSalary(employee) {
        if (employee.subordinates) {
            return employee.salary += getAllSalary(employee.subordinates)
        } else {
            return employee.salary
        }
    }

    function handelInputChange(event) {
        const employeeId = event.target.value;
        setQuery(employeeId);
        let result = '';
        const resultEmployee = employeeList.find(employee => employee.id == employeeId)
        if (resultEmployee) {
            const totalSalary = getAllSalary(resultEmployee);
            result = `The total salary for ${resultEmployee.name} is ${totalSalary}`
        }else{
            result = "The employee does not exist"
        }
        setResult(result)
    }

    return (
        <div className="pageContainer">
            <div className="questionBox">
                <h1>Employee Hierarchy Analysis</h1>

                <section>
                    <h2>Problem Statement</h2>
                    <p>
                        You are given a list of employees in a company. Each employee has an ID, a name,
                        a list of subordinates (direct reports), and a salary. Your task is to calculate the
                        total salary of all employees who report directly or indirectly to a given manager.
                    </p>
                </section>

                <section>
                    <h2>Classes</h2>
                    <pre style={{
                        backgroundColor: '#f4f4f4',
                        padding: '15px',
                        borderRadius: '5px',
                        overflowX: 'auto',
                        fontFamily: 'Courier New, monospace',
                    }}>
                        <code>
                            {`
            class Employee {

                private int id;

                private String name;

                private List<Employee> subordinates;

                private int salary;
            
                // Constructor, getters, and setters

            }
                        `}
                        </code>
                    </pre>
                </section>

                <section>
                    <h2>Function Signature</h2>
                    <pre style={{
                        backgroundColor: '#f4f4f4',
                        padding: '15px',
                        borderRadius: '5px',
                        overflowX: 'auto',
                        fontFamily: 'Courier New, monospace',
                    }}>
                        <code>
                            {`
            public int calculateTotalSalary(List<Employee> employees, int managerId)
                        `}
                        </code>
                    </pre>
                </section>

                <section>
                    <h2>Examples</h2>
                    <h3>Example 1:</h3>
                    <pre style={{
                        backgroundColor: '#f4f4f4',
                        padding: '15px',
                        borderRadius: '5px',
                        overflowX: 'auto',
                        fontFamily: 'Courier New, monospace',
                    }}>
                        <code>
                            {`
            Employee e1 = new Employee(1, "Alice", new ArrayList<>(), 1000);

            Employee e2 = new Employee(2, "Bob", Arrays.asList(e1), 1500);

            Employee e3 = new Employee(3, "Charlie", Arrays.asList(e2), 2000);
            
            List<Employee> employees = Arrays.asList(e1, e2, e3);

            System.out.println(calculateTotalSalary(employees, 3)); // Output: 4500
                        `}
                        </code>
                    </pre>
                    <p><strong>Explanation:</strong> Employee with ID 3 has two subordinates (Employee 2 and Employee 1). The total salary is 2000 + 1500 + 1000 = 4500.</p>

                    <h3>Example 2:</h3>
                    <pre style={{
                        backgroundColor: '#f4f4f4',
                        padding: '15px',
                        borderRadius: '5px',
                        overflowX: 'auto',
                        fontFamily: 'Courier New, monospace',
                    }}>
                        <code>
                            {`
            Employee e1 = new Employee(1, "Alice", new ArrayList<>(), 1000);

            Employee e2 = new Employee(2, "Bob", Arrays.asList(e1), 1500);
            
            List<Employee> employees = Arrays.asList(e1, e2);

            System.out.println(calculateTotalSalary(employees, 2)); // Output: 2500
                        `}
                        </code>
                    </pre>
                    <p><strong>Explanation:</strong> Employee with ID 2 has one subordinate (Employee 1). The total salary is 1500 + 1000 = 2500.</p>
                </section>

                <section>
                    <h2>Constraints</h2>
                    <ul>
                        <li>The list of employees will not be null and will contain at least one employee.</li>
                        <li>All employee IDs are unique.</li>
                        <li>Each employee appears exactly once in the list.</li>
                        <li>Manager ID is guaranteed to be in the list of employees.</li>
                    </ul>
                </section>

                <section>
                    <h2>Guidelines for Implementation</h2>
                    <ul>
                        <li>The solution should leverage Java Stream API and lambda expressions effectively.</li>
                        <li>The solution should be efficient and handle the hierarchy correctly.</li>
                        <li>Proper use of functional programming concepts in Java is expected.</li>
                    </ul>
                </section>

            </div>
            <div className="answerContainer">
                <h3>Algorithm solution: Recursion </h3>
                <p>Try to input a Number:</p>
                <input
                    type='number'
                    value={query}
                    onChange={(e) => handelInputChange(e)}
                />
                <p>{result}</p>
            </div>
        </div>
    )

}