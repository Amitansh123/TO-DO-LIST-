const addBtn = document.getElementById('add1')
const tasks = JSON.parse(localStorage.getItem('tasks'))

// console.log(tasks)
if(tasks){
    tasks.forEach(task => addNewTask(task))
}

addBtn.addEventListener('click', () => addNewTask())

function addNewTask(text = '') {
    var task = document.createElement('div')
    task.classList.add('task')

    task.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `
    const editBtn = task.querySelector('.edit')
    const deleteBtn = task.querySelector('.delete')
    const textArea = task.querySelector('textarea')
    textArea.value=text
    

    deleteBtn.addEventListener('click', () =>{
        task.remove()
        updateLS()
    })

    editBtn.addEventListener('click', () => {
        textArea.classList.toggle('hidden')
    })
    textArea.addEventListener('input', () => {
        updateLS()
    })
    document.body.appendChild(task)
    
}

function updateLS(){
    const tasksText = document.querySelectorAll('textarea')
    const tasks = []
    tasksText.forEach(task => tasks.push(task.value))
    localStorage.setItem('tasks', JSON.stringify(tasks))
}
