function capitalizeNames(arr){
  const uppper =  arr.map((res) => res.toLowerCase())

  return uppper.map(item =>  item.replace(/^\w/, (c) => c.toUpperCase()));
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
// ["John", "Jacob", "Jingleheimer", "Schmidt"]