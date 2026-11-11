export default function Garrafa() {
  function geraCor(): string {
    const cores: string[] = ["vermelho", "azul", "verde"];
    const indiceAleatorio = Math.floor(Math.random() * cores.length);
    const corAleatoria = cores[indiceAleatorio];
    return corAleatoria;
  }

  return (
    <>
      <div className="garrafa">
        <div className="cor">{geraCor()}</div>
        <div className="cor">{geraCor()}</div>
        <div className="cor">{geraCor()}</div>
      </div>
    </>
  );
}
