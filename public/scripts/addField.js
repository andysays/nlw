//Procurar o botão 
document.querySelector("#add-time")
.addEventListener('click', cloneField) //cloneField é o nome da ação quero vira uma function
//quando clicar no botão 

//execuar uma ção 
function cloneField(){
    //duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //elementos html sempre são referidos com node
   
    //pegar os campos. "quais campos?"
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo limpar
    fields.forEach(function(field) {
        //pegar o field do momento e limpar ele
        field.value =""
    })

    //colocar na página. "onde colocar?"
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
    