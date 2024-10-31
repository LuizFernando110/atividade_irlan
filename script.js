botao = document.querySelector('button');
input = document.querySelector('input');
div = document.querySelector('#lista-de-produtos');
lista = document.querySelector('ol');
aviso = document.querySelector('label');

function adicionar() {
    if (input.value.length < 1) {
        aviso.innerText = 'Por favor, digite um item';
        return;
    }
    let item = document.createElement('li');
    item.innerText = input.value;
    lista.appendChild(item);
    input.value = '';
};

botao.addEventListener('click', () => {
    adicionar();
});

input.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        adicionar();
    }   
});