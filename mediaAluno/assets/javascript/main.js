function calcularMedia(){   

    let input1 = window.document.querySelector(".nota1");
    let input2 = window.document.querySelector(".nota2");
    let input3 = window.document.querySelector(".nota3");
    let input4 = window.document.querySelector(".nota4");


    let nota1 = Number(input1.value);
    let nota2 = Number(input2.value);
    let nota3 = Number(input3.value);
    let nota4 = Number(input4.value);

    let media = (nota1 + nota2+ nota3 + nota4) / 4;

    if(media >= 6)
    {
        alert("Parabéns, você mandou bem demais!!");
    }
    else{
        alert("Hmm, terá que se esforçar um pouco mais :(")
    }

    
} 


