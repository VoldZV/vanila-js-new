import React from "react";


type ManType = {
    name: string
    age: number
    lessons: Array<{title: string}>
    address: {
        street: {
            title: string
        }
    }
}

let props: ManType;

beforeEach(() => {
    props = {
        name: 'Dimych',
        age: 32,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'Nezavisimosti street'
            }
        }
    }
})


test('', () => {

    // деструктурирующее присваивание
    const {name, age} = props
    // или создание переменных со своими именами n, a
    const {name: n, age: a} = props




    expect(age).toBe(32)
})