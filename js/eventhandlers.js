/**
 * show/hide div
 */
const toggleBtn = document.querySelector('#toggleBtn');
const divList = document.querySelector('.listHolder');

//event listener
toggleBtn.addEventListener('click', () => {
    if (divList.style.display === 'none') {
        divList.style.display = 'block';
        toggleBtn.innerHTML = 'Hide List';
    } else {
        divList.style.display = 'none';
        toggleBtn.innerHTML = 'Show List';
    }

});

//add items
const addInput = document.querySelector('#addInput');
const addBtn = document.querySelector('#addBtn');

//function
function addList() {
    if (addInput.value === '') {
        alert('List item cannot be empty');
    } else {
        const ul = divList.querySelector('ul');
        const li = document.createElement('li');
        li.innerHTML = addInput.value;
        addInput.value = '';
        ul.appendChild(li);
    }

}
//event listener
addBtn.addEventListener('click', () => {
    addList();
});
// Enter key
addInput.addEventListener('keyup', (event) => {
    if (event.which === 13) {
        addList();
    }


});