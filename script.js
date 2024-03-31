document.querySelectorAll('.item').forEach(item =>{
    item.addEventListener('dragstart', dragStart)
    item.addEventListener('dragend', dragEnd)
})

document.querySelectorAll('.area').forEach(area =>{
    area.addEventListener('dragover', dragOver)
    area.addEventListener('dragleave', dragLeave)
    area.addEventListener('drop', drop)
})

document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral)
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveNeutral)
document.querySelector('.neutralArea').addEventListener('drop', dropNeutral)

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


// Functions Neutral Area

function dragOverNeutral(e) {
    e.preventDefault(); 
        e.currentTarget.classList.add('hover')
    
}

function dragLeaveNeutral(e) {
    e.currentTarget.classList.remove('hover')
}

function dropNeutral(e) {
    e.currentTarget.classList.remove('hover')
    let dragItem = document.querySelector('.item.dragging')
    e.currentTarget.appendChild(dragItem)
}