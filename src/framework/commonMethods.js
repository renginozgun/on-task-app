export const setToLocalStorage = (_name, _data) => {
    localStorage.setItem(_name, _data);
}

export const getFromLocalStorage = (_name) => {
    return localStorage.getItem(_name);
}

export const deleteFromLocalStorage= (_name, _data) => {
    localStorage.setItem(_name,_data);
}