function Produto(imagem,nome,precoAntigo,precoNovo,descricao,avaliacao,linkSite)
{
    this.imagem=imagem
    this.nome=nome
    this.precoAntigo=precoAntigo
    this.precoNovo=precoNovo
    this.descricao=descricao
    this.avaliacao=avaliacao
    this.linkSite=linkSite
}

let produto1 = new Produto("/Imagens/chigago_br.png","AirJordan1","R$5,000","4,200","Primeiro Tenis da Franquia AIR JORDAN, iconico pela historia e polemicas sobre cores.","4.3","https://www.nike.com.br/?msclkid=bc1ac8bbcb8e14fd3fe4ae810ad81703")
let produto2 = new Produto("/Imagens/ez_branco.png","Yeezy Branco","R$7,000","6,400","Tenis mais bem sucedido da historia dos 'Yezzy'","4.1","https://www.adidas.com.br/" )
let produto3 = new Produto("/imagens_travis/travis.png","Travis X Nike","10,800","10,000","Tenis mais sucessido do colab TRAVIS X NIKE","4.7","https://www.nike.com.br/?msclkid=bc1ac8bbcb8e14fd3fe4ae810ad81703")


function criarCard(card)
{
    const main=document.getElementById('card')
    const art1=document.createElement('article')
    
    //imagem
    const art5=document.createElement('article')
    main.appendChild(art5)
    const imagem=document.createElement('img')
    imagem.src = card.imagem
    art5.appendChild(imagem)


    //Nome
    main.appendChild(art1)
    const nome=document.createElement('p')
    nome.innerHTML=card.nome 
    art1.appendChild(nome)
    //precoAntigo
    const art2=document.createElement('article')
    art2.classList.add('precos')//flexbox
    main.appendChild(art2)
    const precoAntigo=document.createElement('p')
    precoAntigo.innerHTML=card.precoAntigo 
    art2.appendChild(precoAntigo)
    precoAntigo.classList.add('precoAntigo')
    
    //precoNovo
    const precoNovo=document.createElement('p')
    precoNovo.innerHTML=card.precoNovo
    art2.appendChild(precoNovo)

    //Descricao
    const art3=document.createElement('article')
    main.appendChild(art3)
    const descricao=document.createElement('p')
    descricao.innerHTML=card.descricao
    art3.appendChild(descricao)

//avaliacao
    const art4=document.createElement('article')
    main.appendChild(art4)
    const avaliacao=document.createElement('p')
    avaliacao.innerHTML=card.avaliacao
    art4.appendChild(avaliacao)

    //linkSite
    const art6=document.createElement('article')
    main.appendChild(art6)
    const linkSite=document.createElement('a')
    linkSite.innerHTML = 'LINK'
    linkSite.href = card.linkSite
    art6.appendChild(linkSite)
    
}

const arrayListaPdt = [produto1,produto2,produto3]


for (var i = 0; i < arrayListaPdt.length ; i++) {
    criarCard(arrayListaPdt[i])
  }



  


    




