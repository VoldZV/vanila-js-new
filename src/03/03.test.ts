import {StudentType} from "../02/02";
import {addSkill, isStudentTown, makeStudentActive} from "./03";

let student: StudentType

beforeEach(()=> {
    student = {
        id: 1,
        name: 'Vasay',
        age: 30,
        isActive: false,
        address: {
            streetTitle: 'Shirokaya',
            city: {
                title: 'Moscow',
                countryTitle: 'Russia'
            }
        },
        technologies: [
            {
                id: 1,
                title: 'HTML & CSS'
            },
            {
                id: 2,
                title: 'JAVASCRIPT'
            },
            {
                id: 3,
                title: 'REACT'
            },

            {
                id: 4,
                title: 'REDUX'
            }
        ]
    }
})

test('new skill should be added new Student', () => {
    expect(student.technologies.length).toBe(4)
    addSkill(student,'JS')
    expect(student.technologies.length).toBe(5)
    expect(student.technologies[4].title).toBe('JS')
    expect(student.technologies[4].id).toBeDefined()

})

test('Student should be active', () => {
    expect(student.isActive).toBe(false)

    makeStudentActive(student)

    expect(student.isActive).toBe(true)
})

test('Does Student live in city', () => {
    expect(student.address.city.title).toBeDefined()
    let result = isStudentTown(student, 'New York')
    expect(isStudentTown(student, 'Moscow')).toBe(true)
    expect(result).toBe(false)

})
