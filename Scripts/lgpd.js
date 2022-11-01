let lgpdHtml = `
    <div class="lgpd">
    <div class="lgdp--left">
        Nós usamos cookies e outras tecnologias semelhantes para melhorar a sua experiência. Ao continuar navegando, você concorda com este monitoramento. Leia mais na nossa <br/>
        <a id="pp" href="/Pages/PoliticaDePrivacidade.html">Política de Privacidade</a>.

    </div>
    <div class="lgpd--right">
        <button class="lgpdBt">OK</button>
    </div>
    </div>
    <link rel="stylesheet" href="/Styles/lgpd.css">
`;

let lsContent = localStorage.getItem('lgpd');
if(!lsContent){
    document.body.innerHTML += lgpdHtml;

    let lgpdArea = document.querySelector('.lgpd');
    let lgpdButton = document.querySelector('.lgpdBt');

    lgpdButton.addEventListener('click', ()=>{
        lgpdArea.remove();
        localStorage.setItem('lgpd', 'Associação-Psicanalítica-Topológica');
    });

}

 