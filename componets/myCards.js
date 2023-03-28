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
        },

        {
            article:"Albums",
            title:"Whatever People Say I Am, That's What I'm Not",
            year:"2006",
            paragraph:"The debut Arctic Monkeys album.",
            Image:"./img/card5.jpg",
            btn:{
                name :"Buy",
                href: "https://www.amazon.com/Whatever-People-Say-Thats-What/dp/B000E116BM",
            }
        },

        {
            article:"Albums",
            title:"Suck It & See",
            year:"2011",
            paragraph:"Fourth studio album from the British indie rock band.",
            Image:"./img/card6.jpg",
            btn:{
                name :"Buy",
                href: "https://www.amazon.com/-/es/Artic-Monkeys/dp/B004SGYJFE",
            }
        },
    ],


    showWorkC(){
        const ws = new Worker("storage/wsMyCards.js",{type:"module"});
        let id = [];
        let count= 0;
        ws.postMessage({module: "showCard", data: this.post});
        id=["#card"]
        ws.addEventListener("message", (e)=>{
            let doc= new DOMParser().parseFromString(e.data,"text/html");

            document.querySelector(id[count]).append(...doc.body.children);

            (id.length-1==count)? ws.terminate(): count++})
    }
}


