(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{62:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},70:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a(0),r=a.n(n),i=a(32),c=a.n(i),o=a(10),l=a(3),d=a(19),u=a.n(d),m=a(33),j=a(13),b=a(14),p=a(16),h=a(15),v=a(34),O=a.n(v),g=a(1),x=a.n(g);a(62);function _(e){var t=e.id,a=e.year,n=e.title,r=e.summary,i=e.poster,c=e.genres,l=e.background;return Object(s.jsx)("div",{className:"movie",children:Object(s.jsxs)(o.b,{to:{pathname:"/movie/".concat(t),state:{id:t,year:a,title:n,summary:r,poster:i,genres:c,background:l}},children:[Object(s.jsx)("img",{src:i,alt:n,title:n}),Object(s.jsxs)("div",{className:"movie__data",children:[Object(s.jsx)("h3",{className:"movie__title",children:n}),Object(s.jsx)("h5",{className:"movie__year",children:a}),Object(s.jsx)("ul",{className:"movie__genres",children:c.map((function(e,t){return Object(s.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(s.jsxs)("p",{className:"movie__summary",children:[r.slice(0,200),"..."]})]})]})})}_.propType={id:x.a.number.isRequired,year:x.a.number.isRequired,title:x.a.string.isRequired,summary:x.a.string.isRequired,poster:x.a.string.isRequired,genres:x.a.arrayOf(x.a.string).isRequired,background:x.a.string.isRequired};var y=_,f=(a(65),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(j.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(u.a.mark((function t(){var a,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,s=a.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(b.a)(a,[{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return Object(s.jsx)("section",{className:"container",children:t?Object(s.jsx)("div",{className:"loader",children:Object(s.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(s.jsx)("div",{className:"movies",children:a.map((function(e){return Object(s.jsx)(y,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres,background:e.background_image},e.id)}))})})}},{key:"componentDidMount",value:function(){this.getMovies()}}]),a}(r.a.Component)),N=(a(66),function(e){Object(p.a)(a,e);var t=Object(h.a)(a);function a(){return Object(j.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return console.log(e),e.state?Object(s.jsxs)("section",{children:[Object(s.jsx)("img",{className:"detail__background",src:e.state.background,alt:"background"}),Object(s.jsxs)("div",{className:"detail__container",children:[Object(s.jsx)("img",{className:"detail__poster",src:e.state.poster}),Object(s.jsx)("h3",{className:"detail__title",children:e.state.title}),Object(s.jsx)("h5",{className:"detail__year",children:e.state.year}),Object(s.jsx)("ul",{className:"detail__genres",children:e.state.genres.map((function(e,t){return Object(s.jsx)("li",{className:"detail__genre",children:e},t)}))}),Object(s.jsx)("p",{className:"detail__summary",children:e.state.summary})]})]}):null}}]),a}(r.a.Component)),k=(a(67),a(37)),q=a(36);var R=function(){return Object(s.jsx)("div",{className:"navibar",children:Object(s.jsx)(o.b,{to:"/",children:Object(s.jsx)(q.a,{icon:k.a})})})};var w=function(){return Object(s.jsxs)(o.a,{children:[Object(s.jsx)(R,{}),Object(s.jsx)(l.a,{path:"/",exact:!0,component:f}),Object(s.jsx)(l.a,{path:"/movie/:id",component:N})]})};c.a.render(Object(s.jsx)(w,{}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.1dd4919d.chunk.js.map