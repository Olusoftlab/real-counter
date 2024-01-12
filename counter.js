const myTextarea=document.getElementById('textarea')
const totalCounter=document.getElementById('spak')
const remCounter=document.getElementById('rem')
let hike=myTextarea.getAttribute('maxlength')



console.log(myTextarea.value.length)
console.log(totalCounter)
console.log(myTextarea)
console.log(remCounter)

myTextarea.addEventListener("keyup", ()=>{

    updateResult()
           
})

const updateResult=()=>{

        
    totalCounter.innerText=myTextarea.value.length

    const maxLength=myTextarea.getAttribute('maxlength')
    remCounter.innerText=maxLength-totalCounter.innerText


}

updateResult()