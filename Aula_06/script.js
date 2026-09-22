
        const campo1 = document.getElementById("campo1");
        const campo2 = document.getElementById("campo2");
        const Resultado = document.getElementsByTagName("h1")[0];


        function somadedoisvalores(){
            var soma = Number(campo1.value) + Number(campo2.value);
            // alert("A SOMA DOS DOIS VALORES É : " + soma);
            Resultado.innerHTML = "Resultado: " + soma;
        }