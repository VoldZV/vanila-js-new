import {CourseType} from "./04";



test('should take prices < 160', ()=>{
    const courses: Array<CourseType> =  [
        {title: 'CSS', price: 120},
        {title: 'JS', price: 200},
        {title: 'React', price: 150}
    ]
    const predicate = (course: CourseType)  => course.price < 160
    const chipCourse = courses.filter(predicate)

    expect(chipCourse[0].title).toBe('CSS')
    expect(chipCourse[1].title).toBe('React')
})

test('get only completed tasks', ()=>{
    const tasks =  [
        {id: 1, title: 'Milk', isDone: false},
        {id: 2, title: 'Bread', isDone: false},
        {id: 3, title: 'Apple', isDone: true},
        {id: 4, title: 'Oil', isDone: true},
        {id: 5, title: 'Cream', isDone: false},
    ]

    const completedTasks = tasks.filter(task => task.isDone)

    expect(completedTasks.length).toBe(2)
    expect(completedTasks[0].id).toBe(3)
    expect(completedTasks[1].id).toBe(4)


})

test('get only unCompleted tasks', ()=>{
    const tasks =  [
        {id: 1, title: 'Milk', isDone: false},
        {id: 2, title: 'Bread', isDone: false},
        {id: 3, title: 'Apple', isDone: true},
        {id: 4, title: 'Oil', isDone: true},
        {id: 5, title: 'Cream', isDone: false},
    ]

    const unCompletedTasks = tasks.filter(task => !task.isDone)
    expect(unCompletedTasks.length).toBe(3)
    expect(unCompletedTasks[0].id).toBe(1)
    expect(unCompletedTasks[1].id).toBe(2)
    expect(unCompletedTasks[2].id).toBe(5)

})