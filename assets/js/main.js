//Capturar evento de submit do form
const form = document.querySelector('#form') 

//captura o evento e cancela o envio do form


//evento de captura espiaõ
form.addEventListener('submit', function(e){
    e.preventDefault()
    const peso = e.target.querySelector('#peso')
    const altura = e.target.querySelector('#altura')
    
    const pesoValor =Number(peso.value)
    const alturaValor =Number(altura.value)
 

    if (!pesoValor){
        setResultado('Peso inválido', false)
        return;
    }
    if (pesoValor >600){
        setResultado('Peso inválido', false)
            return;
    }
    if (!alturaValor){
        setResultado('Altura inválida', false)
        return;
    }
    if(alturaValor >3){
        setResultado('Altura inválida', false)
        return;
    }
 
     const imc = getImc(pesoValor,alturaValor);
     const nivelImc = getNivelImc(imc);
    
     const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    setResultado(msg, true)  ;   

});


function getNivelImc(imc){
const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1 ', 'Obesidade grau 2', 'Obesidade grau 3' ];


if (imc >=39.9){
    return nivel[5]
}

if(imc >=34.9){
    return nivel[4]
}

if(imc >=29.9){
    return nivel[3]
}

if(imc >=24.9){
    return nivel[2]
}

if(imc >=18.5){
    return nivel[1]
}
if(imc <18.5){
    return nivel[0]
}
}


function getImc(pesoValor,alturaValor){
const imc = pesoValor / alturaValor ** 2
return imc.toFixed(2)
}
 

// fucntion cria paragrafos e retorna paragrafos 
function criaP(){
const p = document.createElement('p')
return p;
}

// aparece o resultado e executa a função criaP()
function setResultado (msg, isValid){
const resultado = document.querySelector('#resultado')
resultado.innerHTML = ''; 

const p = criaP();
if (isValid) {p.classList.add('paragrafo-resultado')}
else{p.classList.add('bad')}
p.innerHTML=msg
resultado.appendChild(p)

}

