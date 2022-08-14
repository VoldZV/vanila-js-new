import {CityType} from "../02/02_02";
import {
    createGreetingMessages,
    createGreetingMessToHousePeople,
    createStreetTitlesList,
    createStreetTitlesListHouses
} from "./05_01";
import exp from "constants";

let city1: CityType

beforeEach(() => {
    city1 = {
        title: 'New York',
        houses: [
            {
                buildedAt: 2000,
                repaired: false,
                address: {
                    number: 51,
                    street: {
                        title: 'Uzkaya'
                    }
                }
            },
            {
                buildedAt: 2060,
                repaired: false,
                address: {
                    number: 51,
                    street: {
                        title: 'Shirokaya'
                    }
                }
            }
        ],
        governmentBuildings: [

            {
                type: 'Hospital',
                budget: 200000,
                staffCount: 200,
                address: {
                    number: 10,
                    street: {
                        title: 'Several street'
                    }
                }
            },

            {
                type: 'Fire station',
                budget: 500000,
                staffCount: 100,
                address: {
                    number: 10,
                    street: {
                        title: 'South Street'
                    }
                }
            },
        ],
        citizensNumber: 1000000
    }
})

test('list of street titles of goverment buildings', ()=>{

    const streetTitleList = createStreetTitlesList(city1.governmentBuildings)

    expect(streetTitleList.length).toBe(2)
    expect(streetTitleList[0]).toBe('Several street')
    expect(streetTitleList[1]).toBe('South Street')

})

test('list of street titles of houses', ()=>{

    const streetTitleList = createStreetTitlesListHouses(city1.houses)

    expect(streetTitleList.length).toBe(2)
    expect(streetTitleList[0]).toBe('Uzkaya')
    expect(streetTitleList[1]).toBe('Shirokaya')

})

test(('create greeting message for street'),() => {

    const message = createGreetingMessToHousePeople(city1.houses)

    expect(message.length).toBe(2)
    expect(message[0]).toBe(`Hello guy's from Uzkaya street`)
    expect(message[1]).toBe(`Hello guy's from Shirokaya street`)


})