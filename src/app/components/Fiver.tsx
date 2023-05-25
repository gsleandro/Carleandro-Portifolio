"use client"; // this is a client component 👈🏽

function Five() {

    type Imagem ={
         src: string; 
         titulo: string; 
         descricao: string; 
    }

  const imagens : Imagem[] = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      titulo: "HTML5",
      descricao: "É uma linguagem de marcação usada para estruturar e exibir conteúdo na web. É a versão mais recente do HTML e permite adicionar recursos avançados, como áudio e vídeo, gráficos em 2D e 3D e aplicativos da web.",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      titulo: "CSS3",
      descricao: "É uma linguagem de estilo usada para estilizar conteúdo na web. Ela permite definir a aparência e o layout de páginas da web e aplicativos da web, incluindo cores, fontes, margens, bordas e muito mais.",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg",
      titulo: "Bootstrap",
      descricao: "Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web, usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo.",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-line.svg",
      titulo: "C Sharp",
      descricao: "C# é uma linguagem de programação, multiparadigma, de tipagem forte, desenvolvida pela Microsoft como parte da plataforma .NET. A sua sintaxe orientada a objetos foi baseada no C++ mas inclui muitas influências de outras linguagens de programação, como Object Pascal e, principalmente, Java",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      titulo: "Visual Studio Code",
      descricao: "O Visual Studio Code é um editor de código-fonte desenvolvido pela Microsoft para Windows, Linux e macOS. Ele inclui suporte para depuração, controle de versionamento Git incorporado, realce de sintaxe, complementação inteligente de código, snippets e refatoração de código.",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      titulo: "GitHub",
      descricao: "GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
      titulo: "Arduino",
      descricao: "Arduino é uma plataforma programável de prototipagem eletrônica de placa única e hardware livre, que permite aos usuários criar objetos eletrônicos interativos e independentes, usando o microcontrolador Atmel AVR ou ARM com suporte de entrada/saída embutido, uma linguagem de programação padrão, essencialmente C/C++..",
    },
  ];

  function atualizarTexto(imagem: Imagem) {
    const titulo = document.getElementById("titulo");
    if (titulo) {
      titulo.innerText = imagem.titulo;
    }
    const descricao = document.getElementById("descricao");
    if (descricao) {
      descricao.innerText = imagem.descricao;
    }
  }
  
  

  return (
    <div className="Five">
      <div className="skills">
        {imagens.map((imagem : any, index : any) => (
          <img
            key={index}
            src={imagem.src}
            onClick={() => atualizarTexto(imagem)}
          />
        ))}
      </div>
      <div className="textsS">
        <h1 id="titulo">Competencias</h1>
        <p id="descricao">Passe o mouse em cima dos icones para ver sobre o que se trata</p>
            </div>
        </div>
     );
}

export default Five;