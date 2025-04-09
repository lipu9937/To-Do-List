const inputBox= document.getElementById('input-box')
const listCointainer= document.querySelector('.list-container')



function addTask(){
    if(inputBox.value===''){
        alert("You must write something")
    }else{
        let li= document.createElement("li")
        li.innerHTML= inputBox.value
        listCointainer.appendChild(li)
        let span= document.createElement('span')
        span.innerHTML= 'X'
        li.appendChild(span)
    }
    inputBox.value= ''
    saveData()
}

listCointainer.addEventListener('click', (e)=>{
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked")
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove()
    }
}, false)

function saveData() {
    localStorage.setItem("data", listCointainer.innerHTML)
}

function showTask(){
    listCointainer.innerHTML= localStorage.getItem("data")
}
showTask()