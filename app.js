document.addEventListener('keydown',(e) => {
  if (e.keyCode == 13) {
      addTodo()
    }
})

const addTodo = () => {
    
    let input = document.getElementById('input');
    let dataBox = document.getElementById('databox');
  
     if (input.value == '') {
      alert("Please Enter Todos")
    }
    else if (input.value.length >= 50) {
        alert('Please Enter Short Todos')
    }

    else {
      dataBox.innerHTML += `
      <div class="todos-parent  d-flex align-items-center justify-content-between mb-1">
        <div class="data px-2">
            <h4 >${input.value}</h4>
        </div>
        <div class="dynamic-btn">
            <button  onclick="editBtn(this)" style="margin-right: -4px !important;" class="btn btn-info"><i class="fa-solid fa-pen"></i></button>
            <button onclick="delBtn(this)" class="btn btn-danger"><i class="fa-solid fa-minus"></i></button>
        </div>
      </div> 
        `
        input.value = ''
    }

}

const delBtn = (e) => {
   e.parentNode.parentNode.remove()
}

const editBtn = (e) => {
    let textBox = e.parentNode.parentNode.children[0].children[0]
    textBox.innerHTML = `
    <input id="editInp" type="text" class="form-control" placeholder="Edit Todo" aria-label="Recipient's username" aria-describedby="button-addon2">`
    let editInp = document.getElementById('editInp');

    document.addEventListener('keydown',(e) => {
      if (e.keyCode == 13) {
        if (editInp.value.length >= 50) {
          alert('Please Edit and Add short Todos')
        }
        else{
          textBox.innerHTML =  editInp.value 
        }
        }
    })
    //  console.log( e.parentNode.parentNode.children[0].children[0].innerHTML)
}