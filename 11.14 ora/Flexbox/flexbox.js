const container = document.getElementById('container');

function addItem(event) {
    const item = document.createElement('div');
    item.className = 'item';
    item.innerHTML = container.children.length + 1;
    container.appendChild(item);
}

document.getElementById('add-item-btm').addEventListener('click', addItem);

function removeItems(event) {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

document.getElementById('remove-item-btm').addEventListener('click', removeItems)

function changeFlexDirectionProperty(event) {
    const value = event.currentTarget.value;
    container.style.flexDirection = value;
}

document.getElementById('flex-direction-select').addEventListener('change', changeFlexDirectionProperty);