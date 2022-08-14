import {createGreetingMessages, ManType} from "./05_01";



let people: Array<ManType> = []

beforeEach(()=>{
    people = [
        {name: 'Andrew Ivanov', age: 33},
        {name: 'Alexander Petrov', age: 24},
        {name: 'Dmitriy Sidorov', age: 18},
    ]
})

test(('should get array of greeting messages'),() => {
    const message = createGreetingMessages(people)

    expect(message.length).toBe(3)
    expect(message[0]).toBe('Hello Andrew')
    expect(message[1]).toBe('Hello Alexander')
    expect(message[2]).toBe('Hello Dmitriy')

})