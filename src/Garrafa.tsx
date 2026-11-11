import { useState } from "react";

export default function Garrafa() {
  function geraCor(): string {
    const cores: string[] = ["vermelho", "azul", "verde"];
    const indiceAleatorio = Math.floor(Math.random() * cores.length);
    const corAleatoria = cores[indiceAleatorio];
    return corAleatoria;
  }
  const [cor, setCor] = useState<string[]>([geraCor(), geraCor(), geraCor()]);
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <>
      <div
        className={"garrafa " + (selected ? "selecionado" : "naoselecionado")}
        onClick={() => setSelected(!selected)}
      >
        <div className={"cor " + cor[0]}></div>
        <div className={"cor " + cor[1]}></div>
        <div className={"cor " + cor[2]}></div>
      </div>
    </>
  );
}
