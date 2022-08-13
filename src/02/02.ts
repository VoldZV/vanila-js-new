
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologieType>
}

type AddressType = {
    streetTitle: string
    city: LocalCityType
}

type LocalCityType = {
    title: string
    countryTitle: string
}

type TechnologieType = {
    id: number
    title: string
}

const student: StudentType = {
    id: 1,
    name: 'Vasay',
    age: 30,
    isActive: true,
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