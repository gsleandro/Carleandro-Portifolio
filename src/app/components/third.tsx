"use client"; // this is a client component 👈🏽
import Github from "./github";

function Tirth() {
  
  var isTrue:boolean = true;

  return (
    <div className="third">
      <h1>Projetos</h1>
      <br /> 
      <Github />
      <div style={{width : '100%' , display : 'flex' , justifyContent : 'center'}}>
      <button id="Mais" onClick={ScrollChanges}>Mais</button>
      </div>
    </div>
  );

  function ScrollChanges(){
    const botao:any = document.getElementById("Mais")
    const altura : any = document.getElementById("Mais2")
    if(isTrue === true){
      altura.style.height = "auto";
      botao.innerText = "Diminuir";
      isTrue = false;
    }else{
      altura.style.height = "300px";
      botao.innerText = "Mais";
      isTrue = true;
    }
  }
}

export default Tirth;
