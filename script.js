
const formulario = document.getElementById('formulario');
const nomeInput = [];
const numeroInput = [];
const msnContador = document.getElementById('cont');

const containerError = document.getElementById('container-error');
const errorInfor = document.getElementById('error-infor');

let linhas = '';

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionalInfor();
    popularTabela();
    contarContatos();

    setTimeout(removerDiv, 10000);
});

function adicionalInfor() {
    const inputNome = document.getElementById('nome');
    const inputNumero = document.getElementById('numero');

    if(nomeInput.includes(inputNome.value)) {

        containerError.classList.add('recolherError');
        errorInfor.textContent = ` O nome: ${inputNome.value} já existe na tabela`;

    }else if(numeroInput.includes(inputNumero.value)) {

        containerError.classList.add('recolherError');
        errorInfor.textContent = `O número ${inputNumero.value} já existe na tabela`;
        
    }else{

        nomeInput.push(inputNome.value);
        numeroInput.push(inputNumero.value);

        let linha = '<tr>';
        linha += '<td>' + inputNome.value + '</td>';
        linha += '<td>' + inputNumero.value + '</td>';
        linha += '</tr>';

        linhas += linha;
    };

    inputNome.value = '';
    inputNumero.value = '';
};

function popularTabela() {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = linhas;
};

function contarContatos() {
    for(let i = 0; i < numeroInput.length; i++) {
        msnContador.innerHTML = numeroInput.length
    }
};

containerError.addEventListener('click', function(e) {
    e.containerError.classList.remove('recolherError');
})

function removerDiv() {
    if(containerError.classList.contains('recolherError')) {
        containerError.classList.remove('recolherError');
    }
}
