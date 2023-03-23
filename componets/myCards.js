export default{
    post:[
        {
            article:"Albums",
            title:"AM",
            year:"2013",
            paragraph:"AM is the stunning fifth album from Sheffield's finest.",
            Image:"./img/card1.jpg",
            btn:{
                name :"Buy",
                href: "https://www.amazon.com/AM-Arctic-Monkeys/dp/B00DKY4LBW",
            }
        },
        
        {
            article:"Albums",
            title:"The Car",
            year:"2022",
            paragraph:"Another solid album from one of the greatest modern bands",
            Image:"./img/card2.jpg",
            btn:{
                name :"Buy",
                href: "https://www.amazon.com/Car-Arctic-Monkeys/dp/B0BBH73H1X",
            }
        },

        {
            article:"Albums",
            title:"Favourite Worst Nightmare",
            year:"2009",
            paragraph:"Arctic Monkeys have exceeded expectations with this record.",
            Image:"./img/card3.webp",
            btn:{
                name :"Buy",
                href: "https://www.amazon.com/-/en/Arctic-Monkeys/dp/B000PMFUP8",
            }
        },

        {
            article:"Albums",
            title:"Tranquility Base Hotel & Casino",
            year:"2018",
            paragraph:"A brilliant work that finds new musical terrain.",
            Image:"./img/card4.jpg",
            btn:{
                name :"Buy",
                href: "https://www.amazon.com/-/en/Arctic-Monkeys/dp/B07CDZ6F9H",
            }
        }
    ],

    showCard(){
        this.post.forEach((val,id)=>{
            document.querySelector("#card").insertAdjacentHTML("beforeend",`<div class="col-md-6">
            <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div class="col p-4 d-flex flex-column position-static">
                <strong class="d-inline-block mb-2 text-primary">${val.article}</strong>
                <h3 class="mb-0">${val.title}</h3>
                <div class="mb-1 text-muted">${val.year}</div>
                <p class="card-text mb-auto">${val.paragraph}</p>
                <a href="${val.btn.href}" target="_blank" class="stretched-link">${val.btn.name}</a>
              </div>
              <div class="col-auto d-none d-lg-block">
                <img src="${val.Image}" class="responsiveImg">
              </div>
            </div>
          </div>`)
        })
    }

}
