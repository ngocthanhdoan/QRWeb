import{B as q,W as J,s as V,ae as I,K as E,A as F,aa as Q,R as X,M as y,a0 as Y,o as d,c as h,a as T,l as _,q as u,F as v,k as f,N as m,O as g,w as A,d as x,aw as $,j as ee,t as te,e as B,n as z,b as N}from"./index-DYV7uzLV.js";import{b as ne}from"./index-C0INWAYF.js";import{s as H}from"./index-jeK6lrpz.js";import{s as oe,a as ie}from"./index-C-l5f5Fj.js";import{s as re}from"./index-D36S2gdP.js";import{s as le}from"./index-qZORl9rs.js";import{s as ae}from"./index-Us-RDtEK.js";import{s as ce}from"./index-ZQUHG_D4.js";import{s as de}from"./index-Dygh-yya.js";var se=function(n){var e=n.dt;return`
.p-tree {
    background: `.concat(e("tree.background"),`;
    color: `).concat(e("tree.color"),`;
    padding: `).concat(e("tree.padding"),`;
}

.p-tree-root-children,
.p-tree-node-children {
    display: flex;
    list-style-type: none;
    flex-direction: column;
    margin: 0;
    gap: `).concat(e("tree.gap"),`;
}

.p-tree-root-children {
    padding: `).concat(e("tree.gap"),` 0 0 0;
}

.p-tree-node-children {
    padding: `).concat(e("tree.gap")," 0 0 ").concat(e("tree.indent"),`;
}

.p-tree-node {
    padding: 0;
    outline: 0 none;
}

.p-tree-node-content {
    border-radius: `).concat(e("tree.node.border.radius"),`;
    padding: `).concat(e("tree.node.padding"),`;
    display: flex;
    align-items: center;
    outline-color: transparent;
    color: `).concat(e("tree.node.color"),`;
    gap: `).concat(e("tree.node.gap"),`;
    transition: background `).concat(e("tree.transition.duration"),", color ").concat(e("tree.transition.duration"),", outline-color ").concat(e("tree.transition.duration"),", box-shadow ").concat(e("tree.transition.duration"),`;
}

.p-tree-node:focus-visible > .p-tree-node-content {
    box-shadow: `).concat(e("tree.node.focus.ring.shadow"),`;
    outline: `).concat(e("tree.node.focus.ring.width")," ").concat(e("tree.node.focus.ring.style")," ").concat(e("tree.node.focus.ring.color"),`;
    outline-offset: `).concat(e("tree.node.focus.ring.offset"),`;
}

.p-tree-node-content.p-tree-node-selectable:not(.p-tree-node-selected):hover {
    background: `).concat(e("tree.node.hover.background"),`;
    color: `).concat(e("tree.node.hover.color"),`;
}

.p-tree-node-content.p-tree-node-selectable:not(.p-tree-node-selected):hover .p-tree-node-icon {
    color: `).concat(e("tree.node.icon.hover.color"),`;
}

.p-tree-node-content.p-tree-node-selected {
    background: `).concat(e("tree.node.selected.background"),`;
    color: `).concat(e("tree.node.selected.color"),`;
}

.p-tree-node-content.p-tree-node-selected .p-tree-node-toggle-button {
    color: inherit;
}

.p-tree-node-toggle-button {
    cursor: pointer;
    user-select: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    flex-shrink: 0;
    width: `).concat(e("tree.node.toggle.button.size"),`;
    height: `).concat(e("tree.node.toggle.button.size"),`;
    color: `).concat(e("tree.node.toggle.button.color"),`;
    border: 0 none;
    background: transparent;
    border-radius: `).concat(e("tree.node.toggle.button.border.radius"),`;
    transition: background `).concat(e("tree.transition.duration"),", color ").concat(e("tree.transition.duration"),", border-color ").concat(e("tree.transition.duration"),", outline-color ").concat(e("tree.transition.duration"),", box-shadow ").concat(e("tree.transition.duration"),`;
    outline-color: transparent;
    padding: 0;
}

.p-tree-node-toggle-button:enabled:hover {
    background: `).concat(e("tree.node.toggle.button.hover.background"),`;
    color: `).concat(e("tree.node.toggle.button.hover.color"),`;
}

.p-tree-node-content.p-tree-node-selected .p-tree-node-toggle-button:hover {
    background: `).concat(e("tree.node.toggle.button.selected.hover.background"),`;
    color: `).concat(e("tree.node.toggle.button.selected.hover.color"),`;
}

.p-tree-root {
    overflow: auto;
}

.p-tree-node-selectable {
    cursor: pointer;
    user-select: none;
}

.p-tree-node-leaf > .p-tree-node-content .p-tree-node-toggle-button {
    visibility: hidden;
}

.p-tree-node-icon {
    color: `).concat(e("tree.node.icon.color"),`;
    transition: color `).concat(e("tree.transition.duration"),`;
}

.p-tree-node-content.p-tree-node-selected .p-tree-node-icon {
    color: `).concat(e("tree.node.icon.selected.color"),`;
}

.p-tree-filter-input {
    width: 100%;
}

.p-tree-loading {
    position: relative;
    height: 100%;
}

.p-tree-loading-icon {
    font-size: `).concat(e("tree.loading.icon.size"),`;
    width: `).concat(e("tree.loading.icon.size"),`;
    height: `).concat(e("tree.loading.icon.size"),`;
}

.p-tree .p-tree-mask {
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.p-tree-flex-scrollable {
    display: flex;
    flex: 1;
    height: 100%;
    flex-direction: column;
}

.p-tree-flex-scrollable .p-tree-root {
    flex: 1;
}
`)},ue={root:function(n){var e=n.props;return["p-tree p-component",{"p-tree-selectable":e.selectionMode!=null,"p-tree-loading":e.loading,"p-tree-flex-scrollable":e.scrollHeight==="flex"}]},mask:"p-tree-mask p-overlay-mask",loadingIcon:"p-tree-loading-icon",pcFilterInput:"p-tree-filter-input",wrapper:"p-tree-root",rootChildren:"p-tree-root-children",node:function(n){var e=n.instance;return["p-tree-node",{"p-tree-node-leaf":e.leaf}]},nodeContent:function(n){var e=n.instance;return["p-tree-node-content",e.node.styleClass,{"p-tree-node-selectable":e.selectable,"p-tree-node-selected":e.checkboxMode&&e.$parentInstance.highlightOnSelect?e.checked:e.selected}]},nodeToggleButton:"p-tree-node-toggle-button",nodeToggleIcon:"p-tree-node-toggle-icon",nodeCheckbox:"p-tree-node-checkbox",nodeIcon:"p-tree-node-icon",nodeLabel:"p-tree-node-label",nodeChildren:"p-tree-node-children"},fe=q.extend({name:"tree",theme:se,classes:ue}),he={name:"BaseTree",extends:V,props:{value:{type:null,default:null},expandedKeys:{type:null,default:null},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null},metaKeySelection:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},loadingMode:{type:String,default:"mask"},filter:{type:Boolean,default:!1},filterBy:{type:String,default:"label"},filterMode:{type:String,default:"lenient"},filterPlaceholder:{type:String,default:null},filterLocale:{type:String,default:void 0},highlightOnSelect:{type:Boolean,default:!1},scrollHeight:{type:String,default:null},level:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:fe,provide:function(){return{$pcTree:this,$parentInstance:this}}};function S(t){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},S(t)}function D(t,n){var e=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=U(t))||n){e&&(t=e);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(c){throw c},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,l=!0,s=!1;return{s:function(){e=e.call(t)},n:function(){var c=e.next();return l=c.done,c},e:function(c){s=!0,i=c},f:function(){try{l||e.return==null||e.return()}finally{if(s)throw i}}}}function j(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,o)}return e}function L(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?j(Object(e),!0).forEach(function(o){pe(t,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):j(Object(e)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))})}return t}function pe(t,n,e){return(n=ye(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function ye(t){var n=ge(t,"string");return S(n)=="symbol"?n:n+""}function ge(t,n){if(S(t)!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var o=e.call(t,n||"default");if(S(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}function k(t){return ke(t)||me(t)||U(t)||be()}function be(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function U(t,n){if(t){if(typeof t=="string")return O(t,n);var e={}.toString.call(t).slice(8,-1);return e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set"?Array.from(t):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?O(t,n):void 0}}function me(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ke(t){if(Array.isArray(t))return O(t)}function O(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,o=Array(n);e<n;e++)o[e]=t[e];return o}var W={name:"TreeNode",hostName:"Tree",extends:V,emits:["node-toggle","node-click","checkbox-change"],props:{node:{type:null,default:null},expandedKeys:{type:null,default:null},loadingMode:{type:String,default:"mask"},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null},templates:{type:null,default:null},level:{type:Number,default:null},index:null},nodeTouched:!1,toggleClicked:!1,mounted:function(){this.setAllNodesTabIndexes()},methods:{toggle:function(){this.$emit("node-toggle",this.node),this.toggleClicked=!0},label:function(n){return typeof n.label=="function"?n.label():n.label},onChildNodeToggle:function(n){this.$emit("node-toggle",n)},getPTOptions:function(n){return this.ptm(n,{context:{index:this.index,expanded:this.expanded,selected:this.selected,checked:this.checked,leaf:this.leaf}})},onClick:function(n){if(this.toggleClicked||I(n.target,'[data-pc-section="nodetogglebutton"]')||I(n.target.parentElement,'[data-pc-section="nodetogglebutton"]')){this.toggleClicked=!1;return}this.isCheckboxSelectionMode()?this.toggleCheckbox():this.$emit("node-click",{originalEvent:n,nodeTouched:this.nodeTouched,node:this.node}),this.nodeTouched=!1},onChildNodeClick:function(n){this.$emit("node-click",n)},onTouchEnd:function(){this.nodeTouched=!0},onKeyDown:function(n){if(this.isSameNode(n))switch(n.code){case"Tab":this.onTabKey(n);break;case"ArrowDown":this.onArrowDown(n);break;case"ArrowUp":this.onArrowUp(n);break;case"ArrowRight":this.onArrowRight(n);break;case"ArrowLeft":this.onArrowLeft(n);break;case"Enter":case"NumpadEnter":case"Space":this.onEnterKey(n);break}},onArrowDown:function(n){var e=n.target.getAttribute("data-pc-section")==="nodetogglebutton"?n.target.closest('[role="treeitem"]'):n.target,o=e.children[1];if(o)this.focusRowChange(e,o.children[0]);else if(e.nextElementSibling)this.focusRowChange(e,e.nextElementSibling);else{var r=this.findNextSiblingOfAncestor(e);r&&this.focusRowChange(e,r)}n.preventDefault()},onArrowUp:function(n){var e=n.target;if(e.previousElementSibling)this.focusRowChange(e,e.previousElementSibling,this.findLastVisibleDescendant(e.previousElementSibling));else{var o=this.getParentNodeElement(e);o&&this.focusRowChange(e,o)}n.preventDefault()},onArrowRight:function(n){var e=this;this.leaf||this.expanded||(n.currentTarget.tabIndex=-1,this.$emit("node-toggle",this.node),this.$nextTick(function(){e.onArrowDown(n)}))},onArrowLeft:function(n){var e=E(n.currentTarget,'[data-pc-section="nodetogglebutton"]');if(this.level===0&&!this.expanded)return!1;if(this.expanded&&!this.leaf)return e.click(),!1;var o=this.findBeforeClickableNode(n.currentTarget);o&&this.focusRowChange(n.currentTarget,o)},onEnterKey:function(n){this.setTabIndexForSelectionMode(n,this.nodeTouched),this.onClick(n),n.preventDefault()},onTabKey:function(){this.setAllNodesTabIndexes()},setAllNodesTabIndexes:function(){var n=F(this.$refs.currentNode.closest('[data-pc-section="rootchildren"]'),'[role="treeitem"]'),e=k(n).some(function(r){return r.getAttribute("aria-selected")==="true"||r.getAttribute("aria-checked")==="true"});if(k(n).forEach(function(r){r.tabIndex=-1}),e){var o=k(n).filter(function(r){return r.getAttribute("aria-selected")==="true"||r.getAttribute("aria-checked")==="true"});o[0].tabIndex=0;return}k(n)[0].tabIndex=0},setTabIndexForSelectionMode:function(n,e){if(this.selectionMode!==null){var o=k(F(this.$refs.currentNode.parentElement,'[role="treeitem"]'));n.currentTarget.tabIndex=e===!1?-1:0,o.every(function(r){return r.tabIndex===-1})&&(o[0].tabIndex=0)}},focusRowChange:function(n,e,o){n.tabIndex="-1",e.tabIndex="0",this.focusNode(o||e)},findBeforeClickableNode:function(n){var e=n.closest("ul").closest("li");if(e){var o=E(e,"button");return o&&o.style.visibility!=="hidden"?e:this.findBeforeClickableNode(n.previousElementSibling)}return null},toggleCheckbox:function(){var n=this.selectionKeys?L({},this.selectionKeys):{},e=!this.checked;this.propagateDown(this.node,e,n),this.$emit("checkbox-change",{node:this.node,check:e,selectionKeys:n})},propagateDown:function(n,e,o){if(e?o[n.key]={checked:!0,partialChecked:!1}:delete o[n.key],n.children&&n.children.length){var r=D(n.children),i;try{for(r.s();!(i=r.n()).done;){var l=i.value;this.propagateDown(l,e,o)}}catch(s){r.e(s)}finally{r.f()}}},propagateUp:function(n){var e=n.check,o=L({},n.selectionKeys),r=0,i=!1,l=D(this.node.children),s;try{for(l.s();!(s=l.n()).done;){var a=s.value;o[a.key]&&o[a.key].checked?r++:o[a.key]&&o[a.key].partialChecked&&(i=!0)}}catch(c){l.e(c)}finally{l.f()}e&&r===this.node.children.length?o[this.node.key]={checked:!0,partialChecked:!1}:(e||delete o[this.node.key],i||r>0&&r!==this.node.children.length?o[this.node.key]={checked:!1,partialChecked:!0}:delete o[this.node.key]),this.$emit("checkbox-change",{node:n.node,check:n.check,selectionKeys:o})},onChildCheckboxChange:function(n){this.$emit("checkbox-change",n)},findNextSiblingOfAncestor:function(n){var e=this.getParentNodeElement(n);return e?e.nextElementSibling?e.nextElementSibling:this.findNextSiblingOfAncestor(e):null},findLastVisibleDescendant:function(n){var e=n.children[1];if(e){var o=e.children[e.children.length-1];return this.findLastVisibleDescendant(o)}else return n},getParentNodeElement:function(n){var e=n.parentElement.parentElement;return I(e,"role")==="treeitem"?e:null},focusNode:function(n){n.focus()},isCheckboxSelectionMode:function(){return this.selectionMode==="checkbox"},isSameNode:function(n){return n.currentTarget&&(n.currentTarget.isSameNode(n.target)||n.currentTarget.isSameNode(n.target.closest('[role="treeitem"]')))}},computed:{hasChildren:function(){return this.node.children&&this.node.children.length>0},expanded:function(){return this.expandedKeys&&this.expandedKeys[this.node.key]===!0},leaf:function(){return this.node.leaf===!1?!1:!(this.node.children&&this.node.children.length)},selectable:function(){return this.node.selectable===!1?!1:this.selectionMode!=null},selected:function(){return this.selectionMode&&this.selectionKeys?this.selectionKeys[this.node.key]===!0:!1},checkboxMode:function(){return this.selectionMode==="checkbox"&&this.node.selectable!==!1},checked:function(){return this.selectionKeys?this.selectionKeys[this.node.key]&&this.selectionKeys[this.node.key].checked:!1},partialChecked:function(){return this.selectionKeys?this.selectionKeys[this.node.key]&&this.selectionKeys[this.node.key].partialChecked:!1},ariaChecked:function(){return this.selectionMode==="single"||this.selectionMode==="multiple"?this.selected:void 0},ariaSelected:function(){return this.checkboxMode?this.checked:void 0}},components:{Checkbox:de,ChevronDownIcon:le,ChevronRightIcon:ae,CheckIcon:Q,MinusIcon:ce,SpinnerIcon:H},directives:{ripple:X}},ve=["aria-label","aria-selected","aria-expanded","aria-setsize","aria-posinset","aria-level","aria-checked","tabindex"],xe=["data-p-selected","data-p-selectable"];function Se(t,n,e,o,r,i){var l=y("SpinnerIcon"),s=y("Checkbox"),a=y("TreeNode",!0),c=Y("ripple");return d(),h("li",u({ref:"currentNode",class:t.cx("node"),role:"treeitem","aria-label":i.label(e.node),"aria-selected":i.ariaSelected,"aria-expanded":i.expanded,"aria-setsize":e.node.children?e.node.children.length:0,"aria-posinset":e.index+1,"aria-level":e.level,"aria-checked":i.ariaChecked,tabindex:e.index===0?0:-1,onKeydown:n[4]||(n[4]=function(){return i.onKeyDown&&i.onKeyDown.apply(i,arguments)})},e.level===1?i.getPTOptions("node"):t.ptm("nodeChildren")),[T("div",u({class:t.cx("nodeContent"),onClick:n[2]||(n[2]=function(){return i.onClick&&i.onClick.apply(i,arguments)}),onTouchend:n[3]||(n[3]=function(){return i.onTouchEnd&&i.onTouchEnd.apply(i,arguments)}),style:e.node.style},i.getPTOptions("nodeContent"),{"data-p-selected":i.checkboxMode?i.checked:i.selected,"data-p-selectable":i.selectable}),[_((d(),h("button",u({type:"button",class:t.cx("nodeToggleButton"),onClick:n[0]||(n[0]=function(){return i.toggle&&i.toggle.apply(i,arguments)}),tabindex:"-1","aria-hidden":"true"},i.getPTOptions("nodeToggleButton")),[e.node.loading&&e.loadingMode==="icon"?(d(),h(v,{key:0},[e.templates.nodetoggleicon||e.templates.nodetogglericon?(d(),f(g(e.templates.nodetoggleicon||e.templates.nodetogglericon),{key:0,class:m(t.cx("nodeToggleIcon"))},null,8,["class"])):(d(),f(l,u({key:1,spin:"",class:t.cx("nodetogglericon")},t.ptm("nodeToggleIcon")),null,16,["class"]))],64)):(d(),h(v,{key:1},[e.templates.nodetoggleicon||e.templates.togglericon?(d(),f(g(e.templates.nodetoggleicon||e.templates.togglericon),{key:0,node:e.node,expanded:i.expanded,class:m(t.cx("nodeToggleIcon"))},null,8,["node","expanded","class"])):i.expanded?(d(),f(g(e.node.expandedIcon?"span":"ChevronDownIcon"),u({key:1,class:t.cx("nodeToggleIcon")},i.getPTOptions("nodeToggleIcon")),null,16,["class"])):(d(),f(g(e.node.collapsedIcon?"span":"ChevronRightIcon"),u({key:2,class:t.cx("nodeToggleIcon")},i.getPTOptions("nodeToggleIcon")),null,16,["class"]))],64))],16)),[[c]]),i.checkboxMode?(d(),f(s,{key:0,modelValue:i.checked,binary:!0,indeterminate:i.partialChecked,class:m(t.cx("nodeCheckbox")),tabindex:-1,unstyled:t.unstyled,pt:i.getPTOptions("nodeCheckbox"),"data-p-partialchecked":i.partialChecked},{icon:A(function(p){return[e.templates.checkboxicon?(d(),f(g(e.templates.checkboxicon),{key:0,checked:p.checked,partialChecked:i.partialChecked,class:m(p.class)},null,8,["checked","partialChecked","class"])):x("",!0)]}),_:1},8,["modelValue","indeterminate","class","unstyled","pt","data-p-partialchecked"])):x("",!0),e.templates.nodeicon?(d(),f(g(e.templates.nodeicon),u({key:1,node:e.node,class:[t.cx("nodeIcon")]},i.getPTOptions("nodeIcon")),null,16,["node","class"])):(d(),h("span",u({key:2,class:[t.cx("nodeIcon"),e.node.icon]},i.getPTOptions("nodeIcon")),null,16)),T("span",u({class:t.cx("nodeLabel")},i.getPTOptions("nodeLabel"),{onKeydown:n[1]||(n[1]=$(function(){},["stop"]))}),[e.templates[e.node.type]||e.templates.default?(d(),f(g(e.templates[e.node.type]||e.templates.default),{key:0,node:e.node,selected:i.checkboxMode?i.checked:i.selected},null,8,["node","selected"])):(d(),h(v,{key:1},[ee(te(i.label(e.node)),1)],64))],16)],16,xe),i.hasChildren&&i.expanded?(d(),h("ul",u({key:0,class:t.cx("nodeChildren"),role:"group"},t.ptm("nodeChildren")),[(d(!0),h(v,null,B(e.node.children,function(p){return d(),f(a,{key:p.key,node:p,templates:e.templates,level:e.level+1,loadingMode:e.loadingMode,expandedKeys:e.expandedKeys,onNodeToggle:i.onChildNodeToggle,onNodeClick:i.onChildNodeClick,selectionMode:e.selectionMode,selectionKeys:e.selectionKeys,onCheckboxChange:i.propagateUp,unstyled:t.unstyled,pt:t.pt},null,8,["node","templates","level","loadingMode","expandedKeys","onNodeToggle","onNodeClick","selectionMode","selectionKeys","onCheckboxChange","unstyled","pt"])}),128))],16)):x("",!0)],16,ve)}W.render=Se;function C(t){"@babel/helpers - typeof";return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},C(t)}function M(t,n){var e=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=G(t))||n){e&&(t=e);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(c){throw c},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,l=!0,s=!1;return{s:function(){e=e.call(t)},n:function(){var c=e.next();return l=c.done,c},e:function(c){s=!0,i=c},f:function(){try{l||e.return==null||e.return()}finally{if(s)throw i}}}}function Ce(t){return Ke(t)||Te(t)||G(t)||we()}function we(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(t,n){if(t){if(typeof t=="string")return P(t,n);var e={}.toString.call(t).slice(8,-1);return e==="Object"&&t.constructor&&(e=t.constructor.name),e==="Map"||e==="Set"?Array.from(t):e==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?P(t,n):void 0}}function Te(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ke(t){if(Array.isArray(t))return P(t)}function P(t,n){(n==null||n>t.length)&&(n=t.length);for(var e=0,o=Array(n);e<n;e++)o[e]=t[e];return o}function R(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),e.push.apply(e,o)}return e}function b(t){for(var n=1;n<arguments.length;n++){var e=arguments[n]!=null?arguments[n]:{};n%2?R(Object(e),!0).forEach(function(o){Ie(t,o,e[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):R(Object(e)).forEach(function(o){Object.defineProperty(t,o,Object.getOwnPropertyDescriptor(e,o))})}return t}function Ie(t,n,e){return(n=Ne(n))in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function Ne(t){var n=Me(t,"string");return C(n)=="symbol"?n:n+""}function Me(t,n){if(C(t)!="object"||!t)return t;var e=t[Symbol.toPrimitive];if(e!==void 0){var o=e.call(t,n||"default");if(C(o)!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(t)}var Ae={name:"Tree",extends:he,inheritAttrs:!1,emits:["node-expand","node-collapse","update:expandedKeys","update:selectionKeys","node-select","node-unselect","filter"],data:function(){return{d_expandedKeys:this.expandedKeys||{},filterValue:null}},watch:{expandedKeys:function(n){this.d_expandedKeys=n}},methods:{onNodeToggle:function(n){var e=n.key;this.d_expandedKeys[e]?(delete this.d_expandedKeys[e],this.$emit("node-collapse",n)):(this.d_expandedKeys[e]=!0,this.$emit("node-expand",n)),this.d_expandedKeys=b({},this.d_expandedKeys),this.$emit("update:expandedKeys",this.d_expandedKeys)},onNodeClick:function(n){if(this.selectionMode!=null&&n.node.selectable!==!1){var e=n.nodeTouched?!1:this.metaKeySelection,o=e?this.handleSelectionWithMetaKey(n):this.handleSelectionWithoutMetaKey(n);this.$emit("update:selectionKeys",o)}},onCheckboxChange:function(n){this.$emit("update:selectionKeys",n.selectionKeys),n.check?this.$emit("node-select",n.node):this.$emit("node-unselect",n.node)},handleSelectionWithMetaKey:function(n){var e=n.originalEvent,o=n.node,r=e.metaKey||e.ctrlKey,i=this.isNodeSelected(o),l;return i&&r?(this.isSingleSelectionMode()?l={}:(l=b({},this.selectionKeys),delete l[o.key]),this.$emit("node-unselect",o)):(this.isSingleSelectionMode()?l={}:this.isMultipleSelectionMode()&&(l=r?this.selectionKeys?b({},this.selectionKeys):{}:{}),l[o.key]=!0,this.$emit("node-select",o)),l},handleSelectionWithoutMetaKey:function(n){var e=n.node,o=this.isNodeSelected(e),r;return this.isSingleSelectionMode()?o?(r={},this.$emit("node-unselect",e)):(r={},r[e.key]=!0,this.$emit("node-select",e)):o?(r=b({},this.selectionKeys),delete r[e.key],this.$emit("node-unselect",e)):(r=this.selectionKeys?b({},this.selectionKeys):{},r[e.key]=!0,this.$emit("node-select",e)),r},isSingleSelectionMode:function(){return this.selectionMode==="single"},isMultipleSelectionMode:function(){return this.selectionMode==="multiple"},isNodeSelected:function(n){return this.selectionMode&&this.selectionKeys?this.selectionKeys[n.key]===!0:!1},isChecked:function(n){return this.selectionKeys?this.selectionKeys[n.key]&&this.selectionKeys[n.key].checked:!1},isNodeLeaf:function(n){return n.leaf===!1?!1:!(n.children&&n.children.length)},onFilterKeydown:function(n){(n.code==="Enter"||n.code==="NumpadEnter")&&n.preventDefault(),this.$emit("filter",{originalEvent:n,value:n.target.value})},findFilteredNodes:function(n,e){if(n){var o=!1;if(n.children){var r=Ce(n.children);n.children=[];var i=M(r),l;try{for(i.s();!(l=i.n()).done;){var s=l.value,a=b({},s);this.isFilterMatched(a,e)&&(o=!0,n.children.push(a))}}catch(c){i.e(c)}finally{i.f()}}if(o)return!0}},isFilterMatched:function(n,e){var o=e.searchFields,r=e.filterText,i=e.strict,l=!1,s=M(o),a;try{for(s.s();!(a=s.n()).done;){var c=a.value,p=String(J(n,c)).toLocaleLowerCase(this.filterLocale);p.indexOf(r)>-1&&(l=!0)}}catch(K){s.e(K)}finally{s.f()}return(!l||i&&!this.isNodeLeaf(n))&&(l=this.findFilteredNodes(n,{searchFields:o,filterText:r,strict:i})||l),l}},computed:{filteredValue:function(){var n=[],e=this.filterBy.split(","),o=this.filterValue.trim().toLocaleLowerCase(this.filterLocale),r=this.filterMode==="strict",i=M(this.value),l;try{for(i.s();!(l=i.n()).done;){var s=l.value,a=b({},s),c={searchFields:e,filterText:o,strict:r};(r&&(this.findFilteredNodes(a,c)||this.isFilterMatched(a,c))||!r&&(this.isFilterMatched(a,c)||this.findFilteredNodes(a,c)))&&n.push(a)}}catch(p){i.e(p)}finally{i.f()}return n},valueToRender:function(){return this.filterValue&&this.filterValue.trim().length>0?this.filteredValue:this.value}},components:{TreeNode:W,InputText:re,InputIcon:oe,IconField:ie,SearchIcon:ne,SpinnerIcon:H}},Oe=["aria-labelledby","aria-label"];function Pe(t,n,e,o,r,i){var l=y("SpinnerIcon"),s=y("InputText"),a=y("SearchIcon"),c=y("InputIcon"),p=y("IconField"),K=y("TreeNode");return d(),h("div",u({class:t.cx("root")},t.ptmi("root")),[t.loading&&t.loadingMode==="mask"?(d(),h("div",u({key:0,class:t.cx("mask")},t.ptm("mask")),[z(t.$slots,"loadingicon",{class:m(t.cx("loadingIcon"))},function(){return[t.loadingIcon?(d(),h("i",u({key:0,class:[t.cx("loadingIcon"),"pi-spin",t.loadingIcon]},t.ptm("loadingIcon")),null,16)):(d(),f(l,u({key:1,spin:"",class:t.cx("loadingIcon")},t.ptm("loadingIcon")),null,16,["class"]))]})],16)):x("",!0),t.filter?(d(),f(p,{key:1,unstyled:t.unstyled,pt:t.ptm("pcFilterContainer")},{default:A(function(){return[N(s,{modelValue:r.filterValue,"onUpdate:modelValue":n[0]||(n[0]=function(w){return r.filterValue=w}),autocomplete:"off",class:m(t.cx("pcFilter")),placeholder:t.filterPlaceholder,unstyled:t.unstyled,onKeydown:i.onFilterKeydown,pt:t.ptm("pcFilter")},null,8,["modelValue","class","placeholder","unstyled","onKeydown","pt"]),N(c,{unstyled:t.unstyled,pt:t.ptm("pcFilterIconContainer")},{default:A(function(){return[z(t.$slots,t.$slots.filtericon?"filtericon":"searchicon",{class:m(t.cx("filterIcon"))},function(){return[N(a,u({class:t.cx("filterIcon")},t.ptm("filterIcon")),null,16,["class"])]})]}),_:3},8,["unstyled","pt"])]}),_:3},8,["unstyled","pt"])):x("",!0),T("div",u({class:t.cx("wrapper"),style:{maxHeight:t.scrollHeight}},t.ptm("wrapper")),[T("ul",u({class:t.cx("rootChildren"),role:"tree","aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptm("rootChildren")),[(d(!0),h(v,null,B(i.valueToRender,function(w,Z){return d(),f(K,{key:w.key,node:w,templates:t.$slots,level:t.level+1,index:Z,expandedKeys:r.d_expandedKeys,onNodeToggle:i.onNodeToggle,onNodeClick:i.onNodeClick,selectionMode:t.selectionMode,selectionKeys:t.selectionKeys,onCheckboxChange:i.onCheckboxChange,loadingMode:t.loadingMode,unstyled:t.unstyled,pt:t.pt},null,8,["node","templates","level","index","expandedKeys","onNodeToggle","onNodeClick","selectionMode","selectionKeys","onCheckboxChange","loadingMode","unstyled","pt"])}),128))],16,Oe)],16)],16)}Ae.render=Pe;const He={getTreeNodesData(){return[{key:"0",label:"Documents",data:"Documents Folder",icon:"pi pi-fw pi-inbox",children:[{key:"0-0",label:"Work",data:"Work Folder",icon:"pi pi-fw pi-cog",children:[{key:"0-0-0",label:"Expenses.doc",icon:"pi pi-fw pi-file",data:"Expenses Document"},{key:"0-0-1",label:"Resume.doc",icon:"pi pi-fw pi-file",data:"Resume Document"}]},{key:"0-1",label:"Home",data:"Home Folder",icon:"pi pi-fw pi-home",children:[{key:"0-1-0",label:"Invoices.txt",icon:"pi pi-fw pi-file",data:"Invoices for this month"}]}]},{key:"1",label:"Events",data:"Events Folder",icon:"pi pi-fw pi-calendar",children:[{key:"1-0",label:"Meeting",icon:"pi pi-fw pi-calendar-plus",data:"Meeting"},{key:"1-1",label:"Product Launch",icon:"pi pi-fw pi-calendar-plus",data:"Product Launch"},{key:"1-2",label:"Report Review",icon:"pi pi-fw pi-calendar-plus",data:"Report Review"}]},{key:"2",label:"Movies",data:"Movies Folder",icon:"pi pi-fw pi-star-fill",children:[{key:"2-0",icon:"pi pi-fw pi-star-fill",label:"Al Pacino",data:"Pacino Movies",children:[{key:"2-0-0",label:"Scarface",icon:"pi pi-fw pi-video",data:"Scarface Movie"},{key:"2-0-1",label:"Serpico",icon:"pi pi-fw pi-video",data:"Serpico Movie"}]},{key:"2-1",label:"Robert De Niro",icon:"pi pi-fw pi-star-fill",data:"De Niro Movies",children:[{key:"2-1-0",label:"Goodfellas",icon:"pi pi-fw pi-video",data:"Goodfellas Movie"},{key:"2-1-1",label:"Untouchables",icon:"pi pi-fw pi-video",data:"Untouchables Movie"}]}]}]},getTreeTableNodesData(){return[{key:"0",data:{name:"Applications",size:"100kb",type:"Folder"},children:[{key:"0-0",data:{name:"Vue",size:"25kb",type:"Folder"},children:[{key:"0-0-0",data:{name:"vue.app",size:"10kb",type:"Application"}},{key:"0-0-1",data:{name:"native.app",size:"10kb",type:"Application"}},{key:"0-0-2",data:{name:"mobile.app",size:"5kb",type:"Application"}}]},{key:"0-1",data:{name:"editor.app",size:"25kb",type:"Application"}},{key:"0-2",data:{name:"settings.app",size:"50kb",type:"Application"}}]},{key:"1",data:{name:"Cloud",size:"20kb",type:"Folder"},children:[{key:"1-0",data:{name:"backup-1.zip",size:"10kb",type:"Zip"}},{key:"1-1",data:{name:"backup-2.zip",size:"10kb",type:"Zip"}}]},{key:"2",data:{name:"Desktop",size:"150kb",type:"Folder"},children:[{key:"2-0",data:{name:"note-meeting.txt",size:"50kb",type:"Text"}},{key:"2-1",data:{name:"note-todo.txt",size:"100kb",type:"Text"}}]},{key:"3",data:{name:"Documents",size:"75kb",type:"Folder"},children:[{key:"3-0",data:{name:"Work",size:"55kb",type:"Folder"},children:[{key:"3-0-0",data:{name:"Expenses.doc",size:"30kb",type:"Document"}},{key:"3-0-1",data:{name:"Resume.doc",size:"25kb",type:"Resume"}}]},{key:"3-1",data:{name:"Home",size:"20kb",type:"Folder"},children:[{key:"3-1-0",data:{name:"Invoices",size:"20kb",type:"Text"}}]}]},{key:"4",data:{name:"Downloads",size:"25kb",type:"Folder"},children:[{key:"4-0",data:{name:"Spanish",size:"10kb",type:"Folder"},children:[{key:"4-0-0",data:{name:"tutorial-a1.txt",size:"5kb",type:"Text"}},{key:"4-0-1",data:{name:"tutorial-a2.txt",size:"5kb",type:"Text"}}]},{key:"4-1",data:{name:"Travel",size:"15kb",type:"Text"},children:[{key:"4-1-0",data:{name:"Hotel.pdf",size:"10kb",type:"PDF"}},{key:"4-1-1",data:{name:"Flight.pdf",size:"5kb",type:"PDF"}}]}]},{key:"5",data:{name:"Main",size:"50kb",type:"Folder"},children:[{key:"5-0",data:{name:"bin",size:"50kb",type:"Link"}},{key:"5-1",data:{name:"etc",size:"100kb",type:"Link"}},{key:"5-2",data:{name:"var",size:"100kb",type:"Link"}}]},{key:"6",data:{name:"Other",size:"5kb",type:"Folder"},children:[{key:"6-0",data:{name:"todo.txt",size:"3kb",type:"Text"}},{key:"6-1",data:{name:"logo.png",size:"2kb",type:"Picture"}}]},{key:"7",data:{name:"Pictures",size:"150kb",type:"Folder"},children:[{key:"7-0",data:{name:"barcelona.jpg",size:"90kb",type:"Picture"}},{key:"7-1",data:{name:"primevue.png",size:"30kb",type:"Picture"}},{key:"7-2",data:{name:"prime.jpg",size:"30kb",type:"Picture"}}]},{key:"8",data:{name:"Videos",size:"1500kb",type:"Folder"},children:[{key:"8-0",data:{name:"primefaces.mkv",size:"1000kb",type:"Video"}},{key:"8-1",data:{name:"intro.avi",size:"500kb",type:"Video"}}]}]},getTreeTableNodes(){return Promise.resolve(this.getTreeTableNodesData())},getTreeNodes(){return Promise.resolve(this.getTreeNodesData())}};export{He as N,Ae as s};