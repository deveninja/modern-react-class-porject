
const helper = {
  // Formula to know the season based on latitude and month
  // Returns a string Summer || Winter
  getSeason: (lat, month) => {
    if(month > 2 && month < 9){
      return lat > 40 ? 'summer' : 'winter'
    } else {
      return lat > 40 ? 'winter' : 'summer'
    }
  }
}

export default helper