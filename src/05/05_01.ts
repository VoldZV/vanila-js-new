import {GovernmentBuildingsType, HousesType} from "../02/02_02";

export type ManType = {
    name: string
    age: number
}



const people: Array<ManType> = [
    {name: 'Andrew Ivanov', age: 33},
    {name: 'Alexander Petrov', age: 24},
    {name: 'Dmitriy Sidorov', age: 18},
]


const dimychTransformator = (man: ManType) => ({
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    })


const devs = [
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Andrew', lastName: 'Ivanov'
    },
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Alexander', lastName: 'Petrov'
    },
    {
        stack: ['css', 'html', 'js', 'tdd', 'react'],
        firstName: 'Dmitriy', lastName: 'Sidorov'
    },

]

const devs1 = people.map(dimychTransformator)

export const createGreetingMessages = (people: Array<ManType>) => {
    return people.map(man=> `Hello ${man.name.split(' ')[0]}`)
}

export const createStreetTitlesList = (lisOfGovBuild: Array<GovernmentBuildingsType>) => {
    return lisOfGovBuild.map(build => build.address.street.title)
}

export const createStreetTitlesListHouses = (lisOfGovBuild: Array<HousesType>) => {
    return lisOfGovBuild.map(build => build.address.street.title)
}

export const createGreetingMessToHousePeople = (houses: Array<HousesType>) => {
    return houses.map(house => `Hello guy's from ${house.address.street.title} street`)
}