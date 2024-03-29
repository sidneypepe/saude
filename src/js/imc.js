 const formulario=document.querySelector('.formulario');


formulario.addEventListener('submit', (event)=>{
    event.preventDefault()

    const peso= document.querySelector('.peso').value;
    const altura= document.querySelector('.altura').value;
    const imc=(peso / (altura * altura)).toFixed(2);
    const value = document.querySelector('.value');
    let descricao = '';

    document.querySelector('.mensagem').classList.remove('esconder')
    
    if(imc<18.5)descricao='Atenção, Você esta abaixo do peso!'
    else if(imc>18.5 && imc<24.9)descricao='Otimo, seu peso esta ideal!'
    else if(imc<25 && imc<29.9)descricao='Atenção, sobre peso!'
    else if(imc<30 && imc<34.9)descricao='Atenção, obsidade |!'
    else if(imc<35 && imc<39.9)descricao='Atenção, obsidade || !'
    else if(imc>40)descricao='Atenção, obsidade ||| !'

  

    value.textContent = imc.replace('.', ',');

    document.querySelector('.descricao').textContent = descricao;
    
   
})