import { TaskObjectType } from "../interfaces/date.inteface"

export const getItemLocalStorage = (key: string) => {
    return localStorage.getItem(key)
}

export const setItemLocalStorage = (key: string, value: string) => {
    localStorage.setItem(key, value)
    return false
}

export const getDataFromLS = (key: string) => {
 return JSON.parse(localStorage.getItem(key) || '[]') as Array<TaskObjectType>
}

export const setDataFromLS = (key: string, list: Array<TaskObjectType> ) => {
    localStorage.setItem(key, JSON.stringify(list))
    return false;
}