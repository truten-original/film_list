const toStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}
export default toStorage

