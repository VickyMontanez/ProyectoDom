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
            blockquote:"“We weren’t mentally ready to play stadiums up until now” – Alex Turner",
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
        },
    ],

    showArticle(){
        this.article.forEach((val,id)=>{
            document.querySelector("#articulo").insertAdjacentHTML("beforeend",`<hr>
            <h2 class="blog-post-title">${val.title}</h2>
            <p class="blog-post-meta">${val.date} by <a href="${val.autor.href}" target="_blank">${val.autor.name}</a></p>
            <p>${val.paragraph}</p>
            <hr>
            <p>${val.content}</p>
            <h2>${val.blockquote}</h2>
            <p>${val.reference}</p>
            <blockquote class="blockquote">
              <p>${val.quote}</p>
            </blockquote>
            <p>${val.additiona}</p>
            <h3>${val.title2}</h3>
            <p>${val.paragraph2}</p>
          <ul>
            <li>${val.list1}</li>
            <li>${val.list2}</li>
            <li>${val.list3} </li>
          </ul>
          <p>${val.reference2}</p>
          <ol>
            <li>${val.list6}</li>
            <li>${val.list7}</li>
            <li>${val.list}</li>
          </ol>
          <p>And this is a definiton list:</p>
          <dl>
            <dt>HyperText Markup Language (HTML)</dt>
            <dd>The language used to describe and define the content of a Web page</dd>
            <dt>Cascading Style Sheets (CSS)</dt>
            <dd>Used to describe the appearance of Web content</dd>
            <dt>JavaScript (JS)</dt>
            <dd>The programming language used to build advanced Web sites and applications</dd>
          </dl>
          <h2>Inline HTML elements</h2>
          <p>HTML defines a long list of available inline tags, a complete list of which can be found on the <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">Mozilla Developer Network</a>.</p>
          <ul>
            <li><strong>To bold text</strong>, use <code
                class="language-plaintext highlighter-rouge">&lt;strong&gt;</code>.</li>
            <li><em>To italicize text</em>, use <code class="language-plaintext highlighter-rouge">&lt;em&gt;</code>.
            </li>
            <li>Abbreviations, like <abbr title="HyperText Markup Langage">HTML</abbr> should use <code
                class="language-plaintext highlighter-rouge">&lt;abbr&gt;</code>, with an optional <code
                class="language-plaintext highlighter-rouge">title</code> attribute for the full phrase.</li>
            <li>Citations, like <cite>— Mark Otto</cite>, should use <code
                class="language-plaintext highlighter-rouge">&lt;cite&gt;</code>.</li>
            <li><del>Deleted</del> text should use <code class="language-plaintext highlighter-rouge">&lt;del&gt;</code>
              and <ins>inserted</ins> text should use <code
                class="language-plaintext highlighter-rouge">&lt;ins&gt;</code>.</li>
            <li>Superscript <sup>text</sup> uses <code class="language-plaintext highlighter-rouge">&lt;sup&gt;</code>
              and subscript <sub>text</sub> uses <code class="language-plaintext highlighter-rouge">&lt;sub&gt;</code>.
            </li>
          </ul>
          <p>Most of these elements are styled by browsers with few modifications on our part.</p>
          <!-- SUBCONTENT -->
          <h2>Heading</h2>
          <p>This is some additional paragraph placeholder content. It has been written to fill the available space and
            show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the
            demonstration flowing, so be on the lookout for this exact same string of text.</p>
          <h3>Sub-heading</h3>
          <p>This is some additional paragraph placeholder content. It has been written to fill the available space and
            show how a longer snippet of text affects the surrounding content. We'll repeat it often to keep the
            demonstration flowing, so be on the lookout for this exact same string of text.</p>
          <pre><code>Example code block</code></pre>
          <p>This is some additional paragraph placeholder content. It's a slightly shorter version of the other highly
            repetitive body text used throughout.</p>
        </article>`)
        })
    }
}