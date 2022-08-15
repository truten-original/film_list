<<<<<<< HEAD
const fromStorage = (key) => JSON.parse(localStorage.getItem(key))

export default fromStorage
=======
export function fromStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
>>>>>>> 3842619e8147a4389b18b1302d7bf3e7d4612e66
