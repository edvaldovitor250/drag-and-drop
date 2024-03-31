document.querySelectorAll('.item').forEach(item =>{
    item.addEventListener('dragstart', dragStart)
    item.addEventListener('dragend', dragEnd)
})

document.querySelectorAll('.area').forEach(area =>{
    area.addEventListener('dragover', dragOver)
    area.addEventListener('dragleave', dragLeave)
    area.addEventListener('drop', drop)
})

// Funções Item
function dragStart(e) {
    e.currentTarget.classList.add('dragging')
}

function dragEnd(e) {
    e.currentTarget.classList.remove('dragging')
}

// Funções Área
function dragOver(e) {
    e.preventDefault(); 
    if (!e.currentTarget.classList.contains('item')) {
        e.currentTarget.classList.add('hover')
    }
}

function dragLeave(e) {
    e.currentTarget.classList.remove('hover')
}

function drop(e) {
    e.currentTarget.classList.remove('hover')
    let dragItem = document.querySelector('.item.dragging')

    if (!e.currentTarget.classList.contains('item')) {
        e.currentTarget.appendChild(dragItem)
    }
}
