export const numberSeperate = (number)=>{
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
} 