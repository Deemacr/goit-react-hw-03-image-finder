(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{29:function(t,n,e){t.exports=e(73)},72:function(t,n,e){},73:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),o=e(23),i=e.n(o),c=e(11),l=e(5),u=e(6),p=e(8),s=e(7),d=e(2),h=e(3);function g(){var t=Object(d.a)(["\n\tdisplay: inline-block;\n\twidth: 100%;\n\tfont: inherit;\n\tfont-size: 20px;\n\tborder: none;\n\toutline: none;\n\tpadding-left: 4px;\n\tpadding-right: 4px;\n\n\t&::placeholder {\n\t\tfont: inherit;\n\t\tfont-size: 18px;\n\t}\n"]);return g=function(){return t},t}function f(){var t=Object(d.a)(["\n\tposition: absolute;\n\twidth: 1px;\n\theight: 1px;\n\tpadding: 0;\n\toverflow: hidden;\n\tclip: rect(0, 0, 0, 0);\n\twhite-space: nowrap;\n\tclip-path: inset(50%);\n\tborder: 0;\n"]);return f=function(){return t},t}function m(){var t=Object(d.a)(['\n\tdisplay: inline-block;\n\twidth: 48px;\n\theight: 48px;\n\tborder: 0;\n\tbackground-image: url("https://image.flaticon.com/icons/svg/149/149852.svg");\n\tbackground-size: 40%;\n\tbackground-repeat: no-repeat;\n\tbackground-position: center;\n\topacity: 0.6;\n\ttransition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\tcursor: pointer;\n\toutline: none;\n\n\t&:hover {\n\t\topacity: 1;\n\t}\n']);return m=function(){return t},t}function b(){var t=Object(d.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\twidth: 100%;\n\tmax-width: 600px;\n\tbackground-color: #fff;\n\tborder-radius: 3px;\n\toverflow: hidden;\n"]);return b=function(){return t},t}function x(){var t=Object(d.a)(["\n\ttop: 0;\n\tleft: 0;\n\tposition: sticky;\n\tz-index: 1100;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tmin-height: 64px;\n\tpadding-right: 24px;\n\tpadding-left: 24px;\n\tpadding-top: 12px;\n\tpadding-bottom: 12px;\n\tcolor: #fff;\n\tbackground-color: #3f51b5;\n\tbox-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n\t\t0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]);return x=function(){return t},t}var v=h.a.header(x()),y=h.a.form(b()),w=h.a.button(m()),O=h.a.span(f()),k=h.a.input(g()),j=function(t){Object(p.a)(e,t);var n=Object(s.a)(e);function e(){var t;Object(l.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))).state={inputValue:""},t.handleChange=function(n){t.setState({inputValue:n.target.value})},t.handleSubmit=function(n){n.preventDefault(),t.props.onSubmit(t.state.inputValue),t.setState({inputValue:""})},t}return Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement(v,null,r.a.createElement(y,{onSubmit:this.handleSubmit},r.a.createElement(w,{type:"submit"},r.a.createElement(O,null,"Search")),r.a.createElement(k,{type:"text",value:this.state.inputValue,onChange:this.handleChange,placeholder:"Search images and photos"})))}}]),e}(a.Component),E=e(27),C=e.n(E),S=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return C.a.get("https://pixabay.com/api/?key=18847688-8d11b7eecf2ca80c5f8524db0&q=".concat(t,"&image_type=photo&per_page=12&page=").concat(n)).then((function(t){return t.data.hits}))};function M(){var t=Object(d.a)(["\n\twidth: 100%;\n\theight: 260px;\n\tobject-fit: cover;\n\ttransition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\t&:hover {\n\t\ttransform: scale(1.03);\n\t\tcursor: zoom-in;\n\t}\n"]);return M=function(){return t},t}function I(){var t=Object(d.a)(["\n\tborder-radius: 2px;\n\tbox-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n\t\t0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]);return I=function(){return t},t}var L=h.a.li(I()),U=h.a.img(M()),z=function(t){var n=t.imageUrl,e=t.id,a=t.onClick;return r.a.createElement(L,null,r.a.createElement(U,{id:e,src:n,alt:"Is not available",onClick:a}))};function D(){var t=Object(d.a)(["\n\tdisplay: grid;\n\tmax-width: calc(100vw - 48px);\n\tgrid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n\tgrid-gap: 16px;\n\tmargin-top: 0;\n\tmargin-bottom: 0;\n\tpadding: 0;\n\tlist-style: none;\n\tmargin-left: auto;\n\tmargin-right: auto;\n"]);return D=function(){return t},t}var A=h.a.ul(D()),F=function(t){Object(p.a)(e,t);var n=Object(s.a)(e);function e(){var t;Object(l.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))).handleClick=function(n){t.props.onClose(n)},t}return Object(u.a)(e,[{key:"render",value:function(){var t=this,n=this.props.pictures;return r.a.createElement(A,null,n.map((function(n){var e=n.id,a=n.webformatURL,o=n.largeImageURL;return r.a.createElement(z,{key:e,id:e,imageUrl:a,onClick:function(){return t.handleClick(o)}})})))}}]),e}(a.Component);function Q(){var t=Object(d.a)(["\n\tpadding: 8px 16px;\n\tborder-radius: 2px;\n\tbackground-color: #3f51b5;\n\ttransition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\ttext-align: center;\n\tdisplay: inline-block;\n\tcolor: #fff;\n\tborder: 0;\n\ttext-decoration: none;\n\tcursor: pointer;\n\tfont-family: inherit;\n\tfont-size: 18px;\n\tline-height: 24px;\n\tfont-style: normal;\n\tfont-weight: 500;\n\tmin-width: 180px;\n\tbox-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n\t\t0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n\t&:hover,\n\t&:focus {\n\t\tbackground-color: #303f9f;\n\t}\n"]);return Q=function(){return t},t}var V=h.a.button(Q()),B=function(t){Object(p.a)(e,t);var n=Object(s.a)(e);function e(){return Object(l.a)(this,e),n.apply(this,arguments)}return Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement(V,{type:"button",onClick:this.props.onClick},"Load More")}}]),e}(a.Component),K=e(28),N=e.n(K),P=function(t){Object(p.a)(e,t);var n=Object(s.a)(e);function e(){return Object(l.a)(this,e),n.apply(this,arguments)}return Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement(N.a,{type:"Bars",color:"#00BFFF",height:100,width:100,style:{margin:"auto"}})}}]),e}(a.Component);function R(){var t=Object(d.a)(["\n\tmax-width: calc(100vw - 48px);\n\tmax-height: calc(100vh - 24px);\n"]);return R=function(){return t},t}function J(){var t=Object(d.a)(["\n\tposition: fixed;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100vw;\n\theight: 100vh;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tbackground-color: rgba(0, 0, 0, 0.8);\n\tz-index: 1200;\n"]);return J=function(){return t},t}var _=h.a.div(J()),q=h.a.div(R()),H=function(t){Object(p.a)(e,t);var n=Object(s.a)(e);function e(){var t;Object(l.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))).handelModalEscapeKey=function(n){"Escape"===n.code&&t.props.onClose()},t.closeModalOnOverlayClick=function(){t.props.onClose()},t}return Object(u.a)(e,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handelModalEscapeKey),window.addEventListener("click",this.handleCloseClickOverlay)}},{key:"componentDidUpdate",value:function(){window.removeEventListener("keydown",this.handelModalEscapeKey),window.removeEventListener("click",this.handleCloseClickOverlay)}},{key:"render",value:function(){var t=this.props.largeImageUrl;return r.a.createElement(_,{className:"Overlay",onClick:this.closeModalOnOverlayClick},r.a.createElement(q,{className:"Modal"},r.a.createElement("img",{src:t,alt:"Not Available"})))}}]),e}(a.Component);function T(){var t=Object(d.a)(["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr;\n\tgrid-gap: 16px;\n\tpadding-bottom: 24px;\n"]);return T=function(){return t},t}var W=h.a.div(T()),G=function(t){Object(p.a)(e,t);var n=Object(s.a)(e);function e(){var t;Object(l.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))).state={pictures:[],id:"",isLoading:!1,largeImageUrl:"",showModal:!1,page:1,searchQuery:"",error:!1},t.fetchPictures=function(){var n=t.state,e=n.searchQuery,a=n.page;t.setState({isLoading:!0}),S(e,a).then((function(n){return t.setState((function(t){return{pictures:[].concat(Object(c.a)(t.pictures),Object(c.a)(n)),page:t.page+1}}))})).catch((function(n){return t.setState({error:!0})})).finally((function(){return t.setState({isLoading:!1})}))},t.handleSearchFormSubmit=function(n){t.setState({searchQuery:n,page:1,pictures:[]})},t.toggleModalImg=function(n){t.setState({largeImageUrl:n}),t.setState({showModal:!t.state.showModal})},t.handleModalImg=function(){},t}return Object(u.a)(e,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(t,n){console.log("Rerendered: ",Date.now()),n.searchQuery!==this.state.searchQuery&&this.fetchPictures(),this.state.page>2&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var t=this.state,n=t.pictures,e=t.isLoading,a=t.error,o=t.showModal,i=t.largeImageUrl;return r.a.createElement(W,null,a&&r.a.createElement("p",null,"Whoops, something went wrong"),r.a.createElement(j,{onSubmit:this.handleSearchFormSubmit}),n.length>0&&r.a.createElement(F,{pictures:n,toggleImg:this.toggleModalImg,onClose:this.toggleModalImg}),o&&r.a.createElement(H,{onClose:this.toggleModalImg,largeImageUrl:i}),n.length>0&&!e&&r.a.createElement(B,{type:"button",onClick:this.fetchPictures}),e&&r.a.createElement(P,null))}}]),e}(a.Component);e(72);i.a.render(r.a.createElement(G,null),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.591fdd37.chunk.js.map