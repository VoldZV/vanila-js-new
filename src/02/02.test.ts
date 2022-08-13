import {CityType, GovernmentBuildingsType} from "./02_02";

// ТЕСТЫ НАПИСАНЫ В ФРЕЙМВОРКЕ JEST
// beforeEach задает объект для теста
/*Структура теста
test('HEADER', callback)
callback = () => {
    expect(проверяемое значение заданного выше объекта).toBe(значение которое должно быть)
}

Чтобы пропустить тест надо написать test.skip(.....)
*/


// test driving-development - разработка через тестирование (пишешь тесты, потом код
// тест падает, исправляешь ошибки и так далее)


let city: CityType

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {
                buildedAt: 2000,
                repaired: true,
                address: {
                    number: 51,
                    street: {
                        title: 'Uzkaya'
                    }
                }
            },
            {
                buildedAt: 2060,
                repaired: true,
                address: {
                    number: 51,
                    street: {
                        title: 'Shirokaya'
                    }
                }
            }
        ],
        governmentBuildings: [

            {type: 'Hospital',
            budget: 200000,
                staffCount: 200,
                address: {
                number: 10,
                    street: {
                    title:'Several street'
                    }
                }
            },

            {type: 'Fire station',
            budget: 500000,
                staffCount: 100,
                address: {
                number: 10,
                    street: {
                    title:'South Street'
                    }
                }
            },
        ],
        citizensNumber: 1000000
    }
})

test('city should contain 2 houses', () => {
    expect(city.houses.length).toBe(2)

    expect(city.houses[0].buildedAt).toBe(2000)
    expect(city.houses[0].repaired).toBe(true)
    expect(city.houses[0].address.number).toBe(51)
    expect(city.houses[0].address.street.title).toBe('Uzkaya')

    expect(city.houses[1].buildedAt).toBe(2060)
})

test('city should contains hospital and fire station', () => {
    expect(city.governmentBuildings.length).toBe(2)

    expect(city.governmentBuildings[0].type).toBe('Hospital')
    expect(city.governmentBuildings[0].budget).toBe(200000)
    expect(city.governmentBuildings[0].staffCount).toBe(200)
    expect(city.governmentBuildings[0].address.street.title).toBe('Several street')

    expect(city.governmentBuildings[1].type).toBe('Fire station')
    expect(city.governmentBuildings[1].budget).toBe(500000)
    expect(city.governmentBuildings[1].staffCount).toBe(100)
    expect(city.governmentBuildings[1].address.street.title).toBe('South Street')

})