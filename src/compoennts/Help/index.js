import "./Help.css"

function Help() {
  return (
    <div className="container bg title">
      <p>Espaço reservado para adicionar alguns links uteis / comandos</p>
      <hr></hr>
      <p>Git Hub</p>
      <h4>Subindo projeto para o git pela PEIMEIRA VEZ</h4>
      <ol className="text">
        <li>Va até a pasta do seu projeto</li>
        <li>Execute o comando: git init</li>
        <li>Execute o comando: git add .  (ele irá pegar todos os conteudos dentro da pasta) </li>
        <li>Execute o comando: git commit -m "titulo do commit" </li>
        <li>Execute o comando: git branch -M master (seta o nome da branch) </li>
        <li>Caso a ORIGIN nao esteja setada execute o comando: git remote add origin https://..... </li>
        <li>Execute o comando: git push -u origin master</li>
      </ol>
      <h4>Atualizando projeto do git</h4>
      <ol className="text">
        <li>Vá até a pasta do seu projeto</li>
        <li>Execute o comando: git init </li>
        <li>Execute o comando: git add . </li>
        <li>Execute o comando: git commit -m "titulo do commit" </li>
        <li>Execute o comando: git commit branch -M master </li>
        <li>Execute o comando: git push -u origin master </li>
      </ol>
    </div>
  );
}

export default Help;
