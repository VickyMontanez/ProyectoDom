export default {
    article:[
        {
            title:"Arctic Monkeys: “We know more tricks now, but we’re still rolling on that same instinct”.",
            date:"21st October 2022",
            autor:{
                name:"Sophie Williams",
                href:"https://www.nme.com/big-reads/arctic-monkeys-cover-interview-2022-the-car-3332436"
            },
            paragraph:"After a glorious, but divisive, sonic shift, the Sheffield band double down with their lush new album ‘The Car’, proof that they’re ready to follow wherever the road takes them",
            content:"Crucially, the new album presents both a more cohesive and collaborative band than the one we heard on 2018’s divisive ‘Tranquility Base Hotel & Casino’. That record riffed on consumerism and technology with a burnished depth, but traded it’s wildly successful predecessor’s tsunami of bravado, riffs and hairgel for searching lounge-pop.",
            blockquote:"“We weren’t mentally ready to play stadiums up until now”",
            reference:"By throwing themselves into new, more daring sounds, Arctic Monkeys have emerged fearless, Turner says decisively:",
            quote:" “Well, the fact we gave ourselves the name ‘Arctic Monkeys’ alludes to the extent of ambitions we had... Clearly hardly any.”",
            additiona:"‘The Car’’s daring centrepiece, ‘Body Paint’ flips the script entirely: you can practically hear Turner wink as he sings, “and if you’re thinking of me / I’m probably thinking of you”, before swirling atmospherics and O’Malley’s tumbling bass make way for a gale-force guitar solo from Cook. It’s the full-bodied sound of the Butley Priory trip, which was solely about having fun and bringing that feeling into the new record.",
            title2:"Beginnings of the band",
            paragraph2:"They built a fanbase on the basis of a few early demos shared by fans through MySpace, and before the four-piece signed with the independent Domino Records – also home to Wet Leg and Hot Chip – they’d already made a pact to never agree to their music being used in advertising. They even turned down a then-coveted offer to appear on Top Of The Pops. Weeks later, their monstrous debut album ‘Whatever People Say I Am, That's What I'm Not’ stormed to the top of the UK Singles Chart instantly, with songs like:",
            list1: "Dancing Shoes",
            list2: "I Bet You Look Good on the Dancefloor",
            list3: "Still Take You Home",
            list4 : "A Certain Romance",
            reference2:"And win awards like:",
            list6 :"NME Award for Best Album",
            list7 :"Mercury award",
            list8 : "Brit Award for Best British Album",
            title3:"Next Albums",
            paragraph3:"English rock band Arctic Monkeys have released seven studio albums, five extended plays, two video albums, 24 music videos and 23 singles. ",
            album1:"'Favourite Worst Nightmare' (2007)",
            album2:"'Humbug' (2009)",
            album3:"'Suck It And See' (2011)",
            album4:"'AM' (2013)",
            album5:"'Tranquility Base Hotel + Casino' (2018)",
            album6:"'The Car' (2022)",
            title4:"“I’m pretty happy with how ‘Tranquility Base..’ went down”",
            paragraph4: "As Turner speaks, it’s easy to picture the studio and imagine the Monkeys, once again, as teenagers in a garage: Turner the leader, Helders and O’Malley the jokers, and Cook the near-silent but cunning sage.",
            title5:"“I don’t think much has changed within the band since the start”",
            paragraph5:"Arctic Monkeys’ recent live performances have also seen them bring out rarities from their back catalogue, including a moodier rendition of ‘Humbug’ standout ‘Potion Approaching’, and ‘That’s Where You’re Wrong’, a fuzzed-out singalong from the unfairly overlooked ‘Suck It And See’ era.",
            img1:"./img/1.png",
            img2:"./img/2.webp",
            img3:"./img/3.jpeg",
            img4:"./img/4.jpg",
        },
    ],

    showWorkArOne(){
      const ws = new Worker("storage/wsMyArticleOne.js",{type:"module"});
      let id = [];
      let count= 0;
      ws.postMessage({module: "showArticle", data: this.article});
      id=["#articulo"]

      ws.addEventListener("message", (e)=>{
          let doc= new DOMParser().parseFromString(e.data,"text/html");

          document.querySelector(id[count]).append(...doc.body.children);

          (id.length-1==count)? ws.terminate(): count++})
  }
}