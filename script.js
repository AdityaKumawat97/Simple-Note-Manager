// Lecture: Project - Coding Task 3

let addButton = document.getElementById('add-btn')
let addInput = document.getElementById('add-input')
let ul = document.getElementById('list')
let hideItem = document.getElementById('hide')
let searchInput = document.querySelector('#search-note input')


addButton.addEventListener('click', createNewTask)
hideItem.addEventListener('click', hideTasks)
searchInput.addEventListener('keyup', searchTasks)

// !ADDING ITEMS
function createNewTask(e) {
    e.preventDefault()
    let taskData = addInput.value
    if (taskData !== '') {
        // console.log(taskData)
        let li = document.createElement('li')
        firstpar = document.createElement('p')
        secondpar = document.createElement('p')
        firstIcon = document.createElement('i')
        secondIcon = document.createElement('i')
        input = document.createElement('input')

        firstIcon.className = 'fa fa-pencil-square-o'
        secondIcon.className = 'fa fa-times'
        input.className = 'edit-note'
        input.setAttribute('type', 'text')
        firstpar.textContent = taskData

        secondpar.appendChild(firstIcon)
        secondpar.appendChild(secondIcon)

        li.appendChild(firstpar)
        li.appendChild(secondpar)
        li.appendChild(input)
        ul.appendChild(li)
        addInput.value = ''
    }

}

ul.addEventListener('click', function (e) {
    let target = e.target
    // console.log(e.target)
    if (target.classList[1] === 'fa-pencil-square-o') {
        let parentPar = target.parentNode
        parentPar.style.display = 'none'
        let note = parentPar.previousElementSibling
        let input = parentPar.nextElementSibling
        // console.log(note,input)
        input.style.display = 'block'
        input.value = note.textContent

        input.addEventListener('keypress', function (e) {
            if (e.keyCode === 13) {
                // console.log('done')
                if (input.value !== '') {
                    note.textContent = input.value
                    parentPar.style.display = 'block'
                    input.style.display = 'none'
                } else {
                    let li = input.parentNode
                    li.parentNode.removeChild(li)
                }

            }
        })
    } else if (target.classList[1] === 'fa-times') {
        let list = target.parentNode.parentNode
        list.parentNode.removeChild(list)
    }
})



function hideTasks(e) {
    // console.log(e.target)
    let label = document.querySelector('label')
    if (hideItem.checked) {
        label.textContent = 'Unhide notes'
        ul.style.display = 'none'
    } else {
        label.textContent = 'Hide notes'
        ul.style.display = 'block'
    }
}


function searchTasks(e) {
    let searchChar = e.target.value.toUpperCase()
    // console.log(searchChar)

    let notes = ul.getElementsByTagName('li')

    Array.from(notes).forEach(function (note) {
        let parText = note.firstElementChild.textContent

        if (parText.toUpperCase().indexOf(searchChar) !== -1) {
            note.style.display = 'block'
        }else{
            note.style.display = 'none'
        }
    })

}
