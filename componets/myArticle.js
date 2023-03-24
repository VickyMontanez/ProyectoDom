export default{
            title:"Arctic Monkeys in Colombia: ticket office and presale",
            date:"12th June 2022",
            autor:{
                name:"Anderson Labrador",
                href:"https://canaltrece.com.co/noticias/arctic-monkeys-bogota-2022/"
            },
            paragraph:"November 17 will be the third and final opportunity to see the band, Arctic Monkeys in all their splendor in Colombia. In 2014 it was its premiere in Bogotá in a concert at the El Campín Coliseum, in 2019 they closed the Estéreo Picnic Festival with impetus and fervor and Now it will be at the Live Coliseum, which will open its doors for the first concert of Páramo Presents in this new venue for Colombia. The valuations of the prices for the entrances are:",
            local:{
                name:"Location",
                l1:"Platea 1",
                l2:"113 - 120",
                l3:"107 - 112",
                l4:"Platea 2",
                l5:"103 - 106",
                l6:"100 - 102",
                l7:"121 - 122",
            },
            Prec:{
                name:"Price",
                p1:"$369.000 COP",
                p2:"$319.000 COP",
                p3:"$279.000 COP",
                p4:"$229.000 COP",
                p5:"$249.000 COP",
                p6:"$199.000 COP",
                p7:"$139.000 COP",
            },
            Serv:{
                name:"Service",
                s1:"$66.000 COP",
                s2:"$57.000 COP",
                s3:"$50.000 COP",
                s4:"$41.000 COP",
                s5:"$44.000 COP",
                s6:"$36.000 COP",
                s7:"$25.000 COP",   
            },
            img:"./img/concert2.webp",

    showArticle2(){
        document.querySelector("#articulo2").insertAdjacentHTML("beforeend",`<h2 class="blog-post-title">${this.title}</h2>
        <p class="blog-post-meta">${this.date} by <a href="${this.autor.href}" target="_blank">${this.autor.name}</a></p>
        <p>${this.paragraph}</p>
        <table class="table">
          <thead>
            <tr>
              <th>${this.local.name}</th>
              <th>${this.Prec.name}</th>
              <th>${this.Serv.name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${this.local.l1}</td>
              <td>${this.Prec.p1}</td>
              <td>${this.Serv.s1}</td>
            </tr>
            <tr>
                <td>${this.local.l2}</td>
                <td>${this.Prec.p2}</td>
                <td>${this.Serv.s2}</td>
            </tr>
            <tr>
                <td>${this.local.l3}</td>
                <td>${this.Prec.p3}</td>
                <td>${this.Serv.s3}</td>
            </tr>
            <tr>
                <td>${this.local.l4}</td>
                <td>${this.Prec.p4}</td>
                <td>${this.Serv.s4}</td>
            </tr>
            <tr>
                <td>${this.local.l5}</td>
                <td>${this.Prec.p5}</td>
                <td>${this.Serv.s5}</td>
            </tr>
            <tr>
                <td>${this.local.l6}</td>
                <td>${this.Prec.p6}</td>
                <td>${this.Serv.s6}</td>
            </tr>
            <tr>
                <td>${this.local.l7}</td>
                <td>${this.Prec.p7}</td>
                <td>${this.Serv.s7}</td>
            </tr>
          </tbody>
          <tfoot>
          </tfoot>
        </table>
        <br>
        <img src="${this.img}" style ="max-width: 100%;"">`)
    }
}