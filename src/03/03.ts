import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingsType, HousesType} from "../02/02_02";


export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push( {
        id: new Date().getTime(),
        title: skill
    })
}

export const makeStudentActive = (student: StudentType) => {
    student.isActive = true
}

export const isStudentTown = (student: StudentType, town: string) => {
    return student.address.city.title === town
}

export const changeBudget = (city: CityType, building: string, budgetValue: number) => {
    let findBuild =  city.governmentBuildings.find((build)=> build.type === building)
    if(findBuild)  return findBuild.budget += budgetValue
}

export const repairHouse = (house: HousesType) => {
    house.repaired = true
}

export const decreasedStaff = (build: GovernmentBuildingsType, staffCountInc: number)=>{
    build.staffCount -= staffCountInc
}

export const increasedStaff = (build: GovernmentBuildingsType, staffCountDecr: number)=>{
    build.staffCount += staffCountDecr
}