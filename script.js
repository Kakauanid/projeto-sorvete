/*        const imagens = [
            "imagens/morango.png",
            "imagens/chocolate.png",
            "imagens/pistache.png"
        ];

        let index = 0
        const header = document.getElementById ('header');
        
        function trocarImagem() {
            header.style.backgroundImage = `url('${imagens[index]}')`;
            index = (index + 1) % imagens.length;
        }
        trocarImagem();
        setInterval(trocarImagem, 3000);
    */
        const itens = document.querySelectorAll(".item");
        const main = document.querySelector("main");

      // Adiciona eventos a cada item da galeria
        itens.forEach((item, index) => {
          item.addEventListener("mouseover", () => {
    // Altera o background de acordo com o item         

            switch (index) {
              case 0:
                main.style.backgroundImage = "linear-gradient(to bottom, #ef3a5d , transparent)";
                break;
              case 1:
                main.style.backgroundImage = "linear-gradient(to bottom, #6f402c, transparent)";
                break;
              case 2:
                main.style.backgroundImage = "linear-gradient(to bottom, #96993a, transparent)";
                break;
            }
          });
      
          item.addEventListener("mouseout", () => {
            // Volta pro padrão (usando as variáveis CSS)
            main.style.backgroundImage = "linear-gradient(to bottom, var(--cor6), transparent)";
          });
        });