const loopThroughArray= function(array){
    for(let item of array){
        console.log(item)
    }
}
const capitalizeArray = function(array){
    let newArray=[]
    for(let item of array){
        newArray.push(item.toUpperCase())
    }
    console.log(newArray)
}

function handleBooks(fun){
    let books =['Eloquent JavaScript','JavaScript: The Good Parts','Learn JavaScript Visually','You don\'t know js','JavaScript: The Definitive Guide']
    fun(books)
}

handleBooks(loopThroughArray)
handleBooks(capitalizeArray)