(window.webpackJsonpDato=window.webpackJsonpDato||[]).push([[15],{2301:function(e,t,n){"use strict";n.d(t,"b",(function(){return v}));var o=n(1),r=n.n(o),i=n(0),l=n.n(i),a=n(5),u=n(65),s=n(24);function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b,m,y,v=["format","bold","italic","strikethrough","ordered_list","unordered_list","quote","table","link","image","show_source","undo","redo","align_left","align_center","align_right","align_justify","outdent","indent","fullscreen"],g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,p(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),n=t,(o=[{key:"render",value:function(){var e=this,t=this.props.namePrefix,n=v.map((function(t){return{value:t,label:e.t("wysiwygEditor.toolbar.".concat(t))}}));return l.a.createElement(s.default,{name:"".concat(t,".toolbar"),intlLabel:"wysiwygEditor.toolbar",intlHint:"wysiwygEditor.toolbar.hint",multiple:!0,options:n,component:u.default})}}])&&f(n.prototype,o),r&&f(n,r),t}(a.a);b=g,m="propTypes",y={namePrefix:r.a.string.isRequired},m in b?Object.defineProperty(b,m,{value:y,enumerable:!0,configurable:!0,writable:!0}):b[m]=y,t.a={Component:g,initialValues:{toolbar:["format","bold","italic","strikethrough","ordered_list","unordered_list","quote","table","link","image","show_source","fullscreen"]}}},3102:function(e,t,n){"use strict";n.r(t),function(e){var o=n(5),r=n(1),i=n.n(r),l=n(0),a=n.n(l),u=n(56),s=n(305),c=n(22),f=n(2301),d=n(2695),p=n.n(d),h=n(3073),b=n(492),m=n.n(b),y=n(15),v=n.n(y),g=n(45),_=n.n(g);function w(e){return(w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function O(e){return(O=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function E(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function k(e,t){return(k=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}e.tinymce=p.a,n(2697),n(2699),n(2701),n(2703),n(2705),n(2707),n(2709),n(2711),e.tinyMCE.baseURL="/assets/tinymce";var j,C,P,B=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=O(t).call(this,e))||"object"!==w(r)&&"function"!=typeof r?E(o):r).state={isModalOpen:!1,fullScreen:!1},n.innerValue=e.value,n.cuid=m()(),n.handleEditorSetup=n.handleEditorSetup.bind(E(n)),n.handleBlur=n.handleBlur.bind(E(n)),n.handleChange=n.handleChange.bind(E(n)),n}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&k(e,t)}(t,e),n=t,(o=[{key:"componentDidMount",value:function(){this.isComponentMounted=!0}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this.props.value;this.editor&&e.value!==t&&this.editor.getContent()!==e.value&&(this.editor.setContent(e.value||""),this.innerValue=e.value)}},{key:"shouldComponentUpdate",value:function(e,t){return!v()(_()(e,["onBlur"]),_()(this.props,["onBlur"]))||!v()(t,this.state)}},{key:"componentWillUnmount",value:function(){this.isComponentUnmounting=!0}},{key:"handleEditorSetup",value:function(e){var t=this;this.editor=e,e.ui.registry.addButton("customimage",{icon:"image",onAction:function(){t.setState({isModalOpen:!0})}}),e.ui.registry.addButton("fullscreenEditor",{icon:"fullscreen",onAction:function(){t.state.fullScreen?(t.setState({fullScreen:!1}),e.bodyElement.classList.remove("tw-fullscreen-inline")):(t.setState({fullScreen:!0}),e.bodyElement.classList.add("tw-fullscreen-inline")),e.focus()}})}},{key:"handleSelectFromGallery",value:function(e){var t=this;e.forEach((function(e){var n="<img ";e.alt&&(n+='alt="'.concat(e.alt||"",'" ')),e.title&&(n+='title="'.concat(e.title||"",'" ')),n+='src="'.concat(Object(c.a)(e),'" />'),t.editor.insertContent(n)})),this.setState({isModalOpen:!1})}},{key:"handleClose",value:function(){this.setState({isModalOpen:!1})}},{key:"handleChange",value:function(e){this.innerValue=e}},{key:"handleBlur",value:function(){var e=this.props,t=e.onBlur,n=e.value;if(t&&!this.isComponentUnmounting&&this.innerValue!==n)return t(this.innerValue)}},{key:"render",value:function(){var e=this.state,t=e.isModalOpen,n=e.fullScreen,o=this.props,r=o.toolbar,i=o.disabled,l=o.value,c={format:"formatselect",ordered_list:"numlist",unordered_list:"bullist",quote:"blockquote",image:"customimage",show_source:"code",align_left:"alignleft",align_center:"aligncenter",align_right:"alignright",align_justify:"alignjustify",fullscreen:"fullscreenEditor"},f=r.map((function(e){return c[e]||e})).join(" ");return a.a.createElement("div",{className:"HtmlInput ".concat(n?"fullScreen":"")},a.a.createElement("div",{className:"HtmlInput__toolbar",id:this.cuid}),t&&a.a.createElement(u.c,{title:"Select from Media gallery",onClose:this.handleClose.bind(this)},a.a.createElement(s.a,{onSelect:this.handleSelectFromGallery.bind(this),embedded:!0,multiple:!0})),a.a.createElement(h.a,{disabled:i,init:{setup:this.handleEditorSetup,menubar:!1,indent:!1,statusbar:!1,inline:!0,autoresize_bottom_margin:10,plugins:"lists link code autoresize paste table fullscreen",toolbar:f,fixed_toolbar_container:"#".concat(this.cuid),style_formats:[{title:"Headers",items:[{title:"Header 2",format:"h1"},{title:"Header 2",format:"h2"},{title:"Header 3",format:"h3"},{title:"Header 4",format:"h4"},{title:"Header 5",format:"h5"},{title:"Header 6",format:"h6"}]},{title:"Blocks",items:[{title:"Paragraph",format:"p"},{title:"Blockquote",format:"blockquote"},{title:"Div",format:"div"},{title:"Pre",format:"pre"}]}],relative_urls:!1,convert_urls:!1,remove_script_host:!1,verify_html:!1},value:l,onEditorChange:this.handleChange,onBlur:this.handleBlur}))}}])&&S(n.prototype,o),r&&S(n,r),t}(o.a);j=B,C="propTypes",P={value:i.a.string,onBlur:i.a.func,disabled:i.a.bool,toolbar:i.a.array},C in j?Object.defineProperty(j,C,{value:P,enumerable:!0,configurable:!0,writable:!0}):j[C]=P,B.defaultPropTypes={toolbar:f.b},t.default=B}.call(this,n(70))}}]);
//# sourceMappingURL=html.bundle.js.map