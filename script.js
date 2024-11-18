document.getElementById('imcForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const sexo = document.getElementById('sexo').value;
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
    const imc = (peso / (altura * altura)).toFixed(2);
    let condicao;
    let pesoIdeal;
    
    if (sexo === 'feminino') {
        if (imc < 19.1) {
            condicao = "Abaixo do peso";
            pesoIdeal = (19.1 * altura * altura).toFixed(2);
        } else if (imc >= 19.1 && imc <= 25.8) {
            condicao = "No peso normal";
            pesoIdeal = "N/A";
        } else if (imc > 25.8 && imc <= 27.3) {
            condicao = "Marginalmente acima do peso";
            pesoIdeal = (25.8 * altura * altura).toFixed(2);
        } else if (imc > 27.3 && imc <= 32.3) {
            condicao = "Acima do peso ideal";
            pesoIdeal = (27.3 * altura * altura).toFixed(2);
        } else {
            condicao = "Obeso";
            pesoIdeal = (32.3 * altura * altura).toFixed(2);
        }
    } else {
        if (imc < 20.7) {
            condicao = "Abaixo do peso";
            pesoIdeal = (20.7 * altura * altura).toFixed(2);
        } else if (imc >= 20.7 && imc <= 26.4) {
            condicao = "No peso normal";
            pesoIdeal = "N/A";
        } else if (imc > 26.4 && imc <= 27.8) {
            condicao = "Marginalmente acima do peso";
            pesoIdeal = (26.4 * altura * altura).toFixed(2);
        } else if (imc > 27.8 && imc <= 31.1) {
            condicao = "Acima do peso ideal";
            pesoIdeal = (27.8 * altura * altura).toFixed(2);
        } else {
            condicao = "Obeso";
            pesoIdeal = (31.1 * altura * altura).toFixed(2);
        }
    }

    const resultado = `
        Nome: ${nome}
        Sexo: ${sexo}
        Peso: ${peso} kg
        Altura: ${altura} m
        IMC: ${imc}
        Condição: ${condicao}
        Peso Ideal: ${pesoIdeal === "N/A" ? "Manter peso atual" : pesoIdeal + " kg"}
    `;
    
    document.getElementById('resultado').innerText = resultado;
});

document.getElementById('contatoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const contatoNome = document.getElementById('contatoNome').value;
    const contatoEmail = document.getElementById('contatoEmail').value;
    const mensagem = document.getElementById('mensagem').value;

    alert(`Mensagem enviada!\nNome: ${contatoNome}\nE-mail: ${contatoEmail}\nMensagem: ${mensagem}`);

    // Limpa os campos após envio
    document.getElementById('contatoForm').reset();
});

