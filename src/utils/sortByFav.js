const sortByFav = (arr) => arr.sort((a, b)=> a.id-b.id).sort(a => a.isFavourite ? -1 : 1)
export default sortByFav