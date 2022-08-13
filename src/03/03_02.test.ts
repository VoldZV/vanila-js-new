import {CityType} from "../02/02_02";
import {changeBudget, decreasedStaff, increasedStaff, repairHouse} from "./03";


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


test('budget should be change for Hospital', () => {
    let newHospitalBudget = changeBudget(city1, 'Hospital', 100000)
    expect(newHospitalBudget).toBe(300000)


    let newHospitalBudget1 = changeBudget(city1, 'Hospital', -200000)

    expect(newHospitalBudget1).toBe(100000)

})

test('House should be repaired', () => {
    repairHouse(city1.houses[0])
    repairHouse(city1.houses[1])
    expect(city1.houses[0].repaired).toBe(true)
    expect(city1.houses[1].repaired).toBeTruthy()
})

test('Staff should be decreased', () => {
    decreasedStaff(city1.governmentBuildings[0], 20)
    expect(city1.governmentBuildings[0].staffCount).toBe(180)
})

test('Staff should be increased', () => {
    increasedStaff(city1.governmentBuildings[1], 35)
    expect(city1.governmentBuildings[1].staffCount).toBe(135)
})