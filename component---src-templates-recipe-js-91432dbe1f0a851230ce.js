(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{e4VM:function(e,t,n){n("sC2a"),e.exports={convertToSlug:function(e){return e.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"")}}},eYZ9:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return d}));var a=n("q1tI"),l=n.n(a),r=n("Wbzz"),c=n("9eSz"),i=n.n(c),s=n("O8qb"),o=n("At4Z"),u=n("e4VM"),m=n("sjrs"),d="2068117607";t.default=function(e){var t=e.data,n=e.pageContext,a=t.recipesJson,c=n.ingredients;return l.a.createElement(s.a,null,l.a.createElement(o.a,{title:a.title},l.a.createElement("div",{style:{height:"200px"}},l.a.createElement(i.a,{fluid:a.image.childImageSharp.fluid,alt:a.title,style:{maxHeight:"100%"},imgStyle:{objectFit:"contain",height:"16em"}})),l.a.createElement("h4",null,"Effect: ",a.effect),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.description}}),l.a.createElement("div",{class:"w-100"},l.a.createElement("h2",null,"Ingredients"),l.a.createElement(m.a,null,c&&c.map((function(e){return l.a.createElement(r.Link,{to:"/ingredients/"+Object(u.convertToSlug)(e.title)},l.a.createElement(m.a.Item,{action:!0},l.a.createElement("div",{class:"d-flex w-100 justify-content-between"},l.a.createElement("h5",{class:"mb-1"},e.title)),l.a.createElement("div",{class:"d-flex w-100 justify-content-between"},l.a.createElement("p",null,"Rarity: ",e.rarity))))}))))))}}}]);
//# sourceMappingURL=component---src-templates-recipe-js-91432dbe1f0a851230ce.js.map