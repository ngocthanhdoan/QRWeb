import{B as Y,U as A,W as y,x as D,y as B,ao as J,a7 as Q,V as M,X as H,Y as V,K as Z,a8 as $,R as _,aa as ee,s as te,M as m,a0 as ie,o as d,c as p,a as I,q as l,N as G,n as g,d as v,b as K,w,k as E,ab as ne,t as x,P as oe,F as C,e as se,j as L,l as le}from"./index-CVivj9Du.js";import{a as ae,b as re,c as de}from"./index-C28CUg4u.js";import{s as ue,a as ce}from"./index-D4LaRV45.js";import{s as pe}from"./index-DIopRsYV.js";var he=function(e){var i=e.dt;return`
.p-listbox {
    background: `.concat(i("listbox.background"),`;
    color: `).concat(i("listbox.color"),`;
    border: 1px solid `).concat(i("listbox.border.color"),`;
    border-radius: `).concat(i("listbox.border.radius"),`;
    transition: background `).concat(i("listbox.transition.duration"),", color ").concat(i("listbox.transition.duration"),", border-color ").concat(i("listbox.transition.duration"),`,
            box-shadow `).concat(i("listbox.transition.duration"),", outline-color ").concat(i("listbox.transition.duration"),`;
    outline-color: transparent;
    box-shadow: `).concat(i("listbox.shadow"),`;
}

.p-listbox.p-focus {
    border-color: `).concat(i("listbox.focus.border.color"),`;
    box-shadow: `).concat(i("listbox.focus.ring.shadow"),`;
    outline: `).concat(i("listbox.focus.ring.width")," ").concat(i("listbox.focus.ring.style")," ").concat(i("listbox.focus.ring.color"),`;
    outline-offset: `).concat(i("listbox.focus.ring.offset"),`;
}

.p-listbox.p-disabled {
    opacity: 1;
    background: `).concat(i("listbox.disabled.background"),`;
    color: `).concat(i("listbox.disabled.color"),`;
}

.p-listbox.p-disabled .p-listbox-option {
    color: `).concat(i("listbox.disabled.color"),`;
}

.p-listbox.p-invalid {
    border-color: `).concat(i("listbox.invalid.border.color"),`;
}

.p-listbox-header {
    padding: `).concat(i("listbox.list.header.padding"),`;
}

.p-listbox-filter {
    width: 100%;
}

.p-listbox-list-container {
    overflow: auto;
}

.p-listbox-list {
    list-style-type: none;
    margin: 0;
    padding: `).concat(i("listbox.list.padding"),`;
    outline: 0 none;
    display: flex;
    flex-direction: column;
    gap: `).concat(i("listbox.list.gap"),`;
}

.p-listbox-option {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    padding: `).concat(i("listbox.option.padding"),`;
    border: 0 none;
    border-radius: `).concat(i("listbox.option.border.radius"),`;
    color: `).concat(i("listbox.option.color"),`;
    transition: background `).concat(i("listbox.transition.duration"),", color ").concat(i("listbox.transition.duration"),", border-color ").concat(i("listbox.transition.duration"),`,
            box-shadow `).concat(i("listbox.transition.duration"),", outline-color ").concat(i("listbox.transition.duration"),`;
}

.p-listbox-striped li:nth-child(even of .p-listbox-option) {
    background: `).concat(i("listbox.option.striped.background"),`;
}

.p-listbox .p-listbox-list .p-listbox-option.p-listbox-option-selected {
    background: `).concat(i("listbox.option.selected.background"),`;
    color: `).concat(i("listbox.option.selected.color"),`;
}

.p-listbox:not(.p-disabled) .p-listbox-option.p-listbox-option-selected.p-focus {
    background: `).concat(i("listbox.option.selected.focus.background"),`;
    color: `).concat(i("listbox.option.selected.focus.color"),`;
}

.p-listbox:not(.p-disabled) .p-listbox-option:not(.p-listbox-option-selected):not(.p-disabled).p-focus {
    background: `).concat(i("listbox.option.focus.background"),`;
    color: `).concat(i("listbox.option.focus.color"),`;
}

.p-listbox:not(.p-disabled) .p-listbox-option:not(.p-listbox-option-selected):not(.p-disabled):hover {
    background: `).concat(i("listbox.option.focus.background"),`;
    color: `).concat(i("listbox.option.focus.color"),`;
}

.p-listbox-option-check-icon {
    position: relative;
    margin-inline-start: `).concat(i("listbox.checkmark.gutter.start"),`;
    margin-inline-end: `).concat(i("listbox.checkmark.gutter.end"),`;
    color: `).concat(i("listbox.checkmark.color"),`;
}

.p-listbox-option-group {
    margin: 0;
    padding: `).concat(i("listbox.option.group.padding"),`;
    color: `).concat(i("listbox.option.group.color"),`;
    background: `).concat(i("listbox.option.group.background"),`;
    font-weight: `).concat(i("listbox.option.group.font.weight"),`;
}

.p-listbox-empty-message {
    padding: `).concat(i("listbox.empty.message.padding"),`;
}
`)},fe={root:function(e){var i=e.props;return["p-listbox p-component",{"p-listbox-striped":i.striped,"p-disabled":i.disabled,"p-invalid":i.invalid}]},header:"p-listbox-header",pcFilter:"p-listbox-filter",listContainer:"p-listbox-list-container",list:"p-listbox-list",optionGroup:"p-listbox-option-group",option:function(e){var i=e.instance,o=e.props,s=e.option,n=e.index,a=e.getItemOptions;return["p-listbox-option",{"p-listbox-option-selected":i.isSelected(s)&&o.highlightOnSelect,"p-focus":i.focusedOptionIndex===i.getOptionIndex(n,a),"p-disabled":i.isOptionDisabled(s)}]},optionCheckIcon:"p-listbox-option-check-icon",optionBlankIcon:"p-listbox-option-blank-icon",emptyMessage:"p-listbox-empty-message"},be=Y.extend({name:"listbox",theme:he,classes:fe}),ge={name:"BaseListbox",extends:te,props:{modelValue:null,options:Array,optionLabel:null,optionValue:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,listStyle:null,scrollHeight:{type:String,default:"14rem"},invalid:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},dataKey:null,multiple:{type:Boolean,default:!1},metaKeySelection:{type:Boolean,default:!1},filter:Boolean,filterPlaceholder:String,filterLocale:String,filterMatchMode:{type:String,default:"contains"},filterFields:{type:Array,default:null},virtualScrollerOptions:{type:Object,default:null},autoOptionFocus:{type:Boolean,default:!0},selectOnFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},highlightOnSelect:{type:Boolean,default:!0},checkmark:{type:Boolean,default:!1},filterMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptyFilterMessage:{type:String,default:null},emptyMessage:{type:String,default:null},filterIcon:{type:String,default:void 0},striped:{type:Boolean,default:!1},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:be,provide:function(){return{$pcListbox:this,$parentInstance:this}}};function P(t){return ye(t)||xe(t)||me(t)||Oe()}function Oe(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function me(t,e){if(t){if(typeof t=="string")return R(t,e);var i={}.toString.call(t).slice(8,-1);return i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set"?Array.from(t):i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?R(t,e):void 0}}function xe(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ye(t){if(Array.isArray(t))return R(t)}function R(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,o=Array(e);i<e;i++)o[i]=t[i];return o}var Ie={name:"Listbox",extends:ge,inheritAttrs:!1,emits:["update:modelValue","change","focus","blur","filter","item-dblclick","option-dblclick"],list:null,virtualScroller:null,optionTouched:!1,startRangeIndex:-1,searchTimeout:null,searchValue:"",data:function(){return{id:this.$attrs.id,filterValue:null,focused:!1,focusedOptionIndex:-1}},watch:{"$attrs.id":function(e){this.id=e||A()},options:function(){this.autoUpdateModel()}},mounted:function(){this.id=this.id||A(),this.autoUpdateModel()},methods:{getOptionIndex:function(e,i){return this.virtualScrollerDisabled?e:i&&i(e).index},getOptionLabel:function(e){return this.optionLabel?y(e,this.optionLabel):typeof e=="string"?e:null},getOptionValue:function(e){return this.optionValue?y(e,this.optionValue):e},getOptionRenderKey:function(e,i){return(this.dataKey?y(e,this.dataKey):this.getOptionLabel(e))+"_"+i},getPTOptions:function(e,i,o,s){return this.ptm(s,{context:{selected:this.isSelected(e),focused:this.focusedOptionIndex===this.getOptionIndex(o,i),disabled:this.isOptionDisabled(e)}})},isOptionDisabled:function(e){return this.optionDisabled?y(e,this.optionDisabled):!1},isOptionGroup:function(e){return this.optionGroupLabel&&e.optionGroup&&e.group},getOptionGroupLabel:function(e){return y(e,this.optionGroupLabel)},getOptionGroupChildren:function(e){return y(e,this.optionGroupChildren)},getAriaPosInset:function(e){var i=this;return(this.optionGroupLabel?e-this.visibleOptions.slice(0,e).filter(function(o){return i.isOptionGroup(o)}).length:e)+1},onFirstHiddenFocus:function(){D(this.list);var e=B(this.$el,':not([data-p-hidden-focusable="true"])');this.$refs.lastHiddenFocusableElement.tabIndex=J(e)?void 0:-1,this.$refs.firstHiddenFocusableElement.tabIndex=-1},onLastHiddenFocus:function(e){var i=e.relatedTarget;if(i===this.list){var o=B(this.$el,':not([data-p-hidden-focusable="true"])');D(o),this.$refs.firstHiddenFocusableElement.tabIndex=void 0}else D(this.$refs.firstHiddenFocusableElement);this.$refs.lastHiddenFocusableElement.tabIndex=-1},onFocusout:function(e){!this.$el.contains(e.relatedTarget)&&this.$refs.lastHiddenFocusableElement&&this.$refs.firstHiddenFocusableElement&&(this.$refs.lastHiddenFocusableElement.tabIndex=this.$refs.firstHiddenFocusableElement.tabIndex=void 0)},onListFocus:function(e){this.focused=!0,this.focusedOptionIndex=this.focusedOptionIndex!==-1?this.focusedOptionIndex:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex(),this.autoUpdateModel(),this.$emit("focus",e)},onListBlur:function(e){this.focused=!1,this.focusedOptionIndex=this.startRangeIndex=-1,this.searchValue="",this.$emit("blur",e)},onListKeyDown:function(e){var i=this,o=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"PageDown":this.onPageDownKey(e);break;case"PageUp":this.onPageUpKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onSpaceKey(e);break;case"Tab":break;case"ShiftLeft":case"ShiftRight":this.onShiftKey(e);break;default:if(this.multiple&&e.code==="KeyA"&&o){var s=this.visibleOptions.filter(function(n){return i.isValidOption(n)}).map(function(n){return i.getOptionValue(n)});this.updateModel(e,s),e.preventDefault();break}!o&&Q(e.key)&&(this.searchOptions(e,e.key),e.preventDefault());break}},onOptionSelect:function(e,i){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1;this.disabled||this.isOptionDisabled(i)||(this.multiple?this.onOptionSelectMultiple(e,i):this.onOptionSelectSingle(e,i),this.optionTouched=!1,o!==-1&&(this.focusedOptionIndex=o))},onOptionMouseDown:function(e,i){this.changeFocusedOptionIndex(e,i)},onOptionMouseMove:function(e,i){this.focusOnHover&&this.focused&&this.changeFocusedOptionIndex(e,i)},onOptionTouchEnd:function(){this.disabled||(this.optionTouched=!0)},onOptionDblClick:function(e,i){this.$emit("item-dblclick",{originalEvent:e,value:i}),this.$emit("option-dblclick",{originalEvent:e,value:i})},onOptionSelectSingle:function(e,i){var o=this.isSelected(i),s=!1,n=null,a=this.optionTouched?!1:this.metaKeySelection;if(a){var h=e&&(e.metaKey||e.ctrlKey);o?h&&(n=null,s=!0):(n=this.getOptionValue(i),s=!0)}else n=o?null:this.getOptionValue(i),s=!0;s&&this.updateModel(e,n)},onOptionSelectMultiple:function(e,i){var o=this.isSelected(i),s=null,n=this.optionTouched?!1:this.metaKeySelection;if(n){var a=e.metaKey||e.ctrlKey;o?s=a?this.removeOption(i):[this.getOptionValue(i)]:(s=a?this.modelValue||[]:[],s=[].concat(P(s),[this.getOptionValue(i)]))}else s=o?this.removeOption(i):[].concat(P(this.modelValue||[]),[this.getOptionValue(i)]);this.updateModel(e,s)},onOptionSelectRange:function(e){var i=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:-1,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:-1;if(o===-1&&(o=this.findNearestSelectedOptionIndex(s,!0)),s===-1&&(s=this.findNearestSelectedOptionIndex(o)),o!==-1&&s!==-1){var n=Math.min(o,s),a=Math.max(o,s),h=this.visibleOptions.slice(n,a+1).filter(function(b){return i.isValidOption(b)}).map(function(b){return i.getOptionValue(b)});this.updateModel(e,h)}},onFilterChange:function(e){this.$emit("filter",{originalEvent:e,value:e.target.value}),this.focusedOptionIndex=this.startRangeIndex=-1},onFilterBlur:function(){this.focusedOptionIndex=this.startRangeIndex=-1},onFilterKeyDown:function(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":case"ArrowRight":this.onArrowLeftKey(e,!0);break;case"Home":this.onHomeKey(e,!0);break;case"End":this.onEndKey(e,!0);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"ShiftLeft":case"ShiftRight":this.onShiftKey(e);break}},onArrowDownKey:function(e){var i=this.focusedOptionIndex!==-1?this.findNextOptionIndex(this.focusedOptionIndex):this.findFirstFocusedOptionIndex();this.multiple&&e.shiftKey&&this.onOptionSelectRange(e,this.startRangeIndex,i),this.changeFocusedOptionIndex(e,i),e.preventDefault()},onArrowUpKey:function(e){var i=this.focusedOptionIndex!==-1?this.findPrevOptionIndex(this.focusedOptionIndex):this.findLastFocusedOptionIndex();this.multiple&&e.shiftKey&&this.onOptionSelectRange(e,i,this.startRangeIndex),this.changeFocusedOptionIndex(e,i),e.preventDefault()},onArrowLeftKey:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;i&&(this.focusedOptionIndex=-1)},onHomeKey:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(i){var o=e.currentTarget;e.shiftKey?o.setSelectionRange(0,e.target.selectionStart):(o.setSelectionRange(0,0),this.focusedOptionIndex=-1)}else{var s=e.metaKey||e.ctrlKey,n=this.findFirstOptionIndex();this.multiple&&e.shiftKey&&s&&this.onOptionSelectRange(e,n,this.startRangeIndex),this.changeFocusedOptionIndex(e,n)}e.preventDefault()},onEndKey:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(i){var o=e.currentTarget;if(e.shiftKey)o.setSelectionRange(e.target.selectionStart,o.value.length);else{var s=o.value.length;o.setSelectionRange(s,s),this.focusedOptionIndex=-1}}else{var n=e.metaKey||e.ctrlKey,a=this.findLastOptionIndex();this.multiple&&e.shiftKey&&n&&this.onOptionSelectRange(e,this.startRangeIndex,a),this.changeFocusedOptionIndex(e,a)}e.preventDefault()},onPageUpKey:function(e){this.scrollInView(0),e.preventDefault()},onPageDownKey:function(e){this.scrollInView(this.visibleOptions.length-1),e.preventDefault()},onEnterKey:function(e){this.focusedOptionIndex!==-1&&(this.multiple&&e.shiftKey?this.onOptionSelectRange(e,this.focusedOptionIndex):this.onOptionSelect(e,this.visibleOptions[this.focusedOptionIndex]))},onSpaceKey:function(e){e.preventDefault(),this.onEnterKey(e)},onShiftKey:function(){this.startRangeIndex=this.focusedOptionIndex},isOptionMatched:function(e){var i;return this.isValidOption(e)&&typeof this.getOptionLabel(e)=="string"&&((i=this.getOptionLabel(e))===null||i===void 0?void 0:i.toLocaleLowerCase(this.filterLocale).startsWith(this.searchValue.toLocaleLowerCase(this.filterLocale)))},isValidOption:function(e){return M(e)&&!(this.isOptionDisabled(e)||this.isOptionGroup(e))},isValidSelectedOption:function(e){return this.isValidOption(e)&&this.isSelected(e)},isEquals:function(e,i){return H(e,i,this.equalityKey)},isSelected:function(e){var i=this,o=this.getOptionValue(e);return this.multiple?(this.modelValue||[]).some(function(s){return i.isEquals(s,o)}):this.isEquals(this.modelValue,o)},findFirstOptionIndex:function(){var e=this;return this.visibleOptions.findIndex(function(i){return e.isValidOption(i)})},findLastOptionIndex:function(){var e=this;return V(this.visibleOptions,function(i){return e.isValidOption(i)})},findNextOptionIndex:function(e){var i=this,o=e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(s){return i.isValidOption(s)}):-1;return o>-1?o+e+1:e},findPrevOptionIndex:function(e){var i=this,o=e>0?V(this.visibleOptions.slice(0,e),function(s){return i.isValidOption(s)}):-1;return o>-1?o:e},findSelectedOptionIndex:function(){var e=this;if(this.hasSelectedOption)if(this.multiple){for(var i=function(){var a=e.modelValue[s],h=e.visibleOptions.findIndex(function(b){return e.isValidSelectedOption(b)&&e.isEquals(a,e.getOptionValue(b))});if(h>-1)return{v:h}},o,s=this.modelValue.length-1;s>=0;s--)if(o=i(),o)return o.v}else return this.visibleOptions.findIndex(function(n){return e.isValidSelectedOption(n)});return-1},findFirstSelectedOptionIndex:function(){var e=this;return this.hasSelectedOption?this.visibleOptions.findIndex(function(i){return e.isValidSelectedOption(i)}):-1},findLastSelectedOptionIndex:function(){var e=this;return this.hasSelectedOption?V(this.visibleOptions,function(i){return e.isValidSelectedOption(i)}):-1},findNextSelectedOptionIndex:function(e){var i=this,o=this.hasSelectedOption&&e<this.visibleOptions.length-1?this.visibleOptions.slice(e+1).findIndex(function(s){return i.isValidSelectedOption(s)}):-1;return o>-1?o+e+1:-1},findPrevSelectedOptionIndex:function(e){var i=this,o=this.hasSelectedOption&&e>0?V(this.visibleOptions.slice(0,e),function(s){return i.isValidSelectedOption(s)}):-1;return o>-1?o:-1},findNearestSelectedOptionIndex:function(e){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=-1;return this.hasSelectedOption&&(i?(o=this.findPrevSelectedOptionIndex(e),o=o===-1?this.findNextSelectedOptionIndex(e):o):(o=this.findNextSelectedOptionIndex(e),o=o===-1?this.findPrevSelectedOptionIndex(e):o)),o>-1?o:e},findFirstFocusedOptionIndex:function(){var e=this.findFirstSelectedOptionIndex();return e<0?this.findFirstOptionIndex():e},findLastFocusedOptionIndex:function(){var e=this.findLastSelectedOptionIndex();return e<0?this.findLastOptionIndex():e},searchOptions:function(e,i){var o=this;this.searchValue=(this.searchValue||"")+i;var s=-1;M(this.searchValue)&&(this.focusedOptionIndex!==-1?(s=this.visibleOptions.slice(this.focusedOptionIndex).findIndex(function(n){return o.isOptionMatched(n)}),s=s===-1?this.visibleOptions.slice(0,this.focusedOptionIndex).findIndex(function(n){return o.isOptionMatched(n)}):s+this.focusedOptionIndex):s=this.visibleOptions.findIndex(function(n){return o.isOptionMatched(n)}),s===-1&&this.focusedOptionIndex===-1&&(s=this.findFirstFocusedOptionIndex()),s!==-1&&this.changeFocusedOptionIndex(e,s)),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){o.searchValue="",o.searchTimeout=null},500)},removeOption:function(e){var i=this;return this.modelValue.filter(function(o){return!H(o,i.getOptionValue(e),i.equalityKey)})},changeFocusedOptionIndex:function(e,i){this.focusedOptionIndex!==i&&(this.focusedOptionIndex=i,this.scrollInView(),this.selectOnFocus&&!this.multiple&&this.onOptionSelect(e,this.visibleOptions[i]))},scrollInView:function(){var e=this,i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var o=i!==-1?"".concat(e.id,"_").concat(i):e.focusedOptionId,s=Z(e.list,'li[id="'.concat(o,'"]'));s?s.scrollIntoView&&s.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"}):e.virtualScrollerDisabled||e.virtualScroller&&e.virtualScroller.scrollToIndex(i!==-1?i:e.focusedOptionIndex)})},autoUpdateModel:function(){this.selectOnFocus&&this.autoOptionFocus&&!this.hasSelectedOption&&!this.multiple&&this.focused&&(this.focusedOptionIndex=this.findFirstFocusedOptionIndex(),this.onOptionSelect(null,this.visibleOptions[this.focusedOptionIndex]))},updateModel:function(e,i){this.$emit("update:modelValue",i),this.$emit("change",{originalEvent:e,value:i})},flatOptions:function(e){var i=this;return(e||[]).reduce(function(o,s,n){o.push({optionGroup:s,group:!0,index:n});var a=i.getOptionGroupChildren(s);return a&&a.forEach(function(h){return o.push(h)}),o},[])},listRef:function(e,i){this.list=e,i&&i(e)},virtualScrollerRef:function(e){this.virtualScroller=e}},computed:{visibleOptions:function(){var e=this.optionGroupLabel?this.flatOptions(this.options):this.options||[];return this.filterValue?$.filter(e,this.searchFields,this.filterValue,this.filterMatchMode,this.filterLocale):e},hasSelectedOption:function(){return M(this.modelValue)},equalityKey:function(){return this.optionValue?null:this.dataKey},searchFields:function(){return this.filterFields||[this.optionLabel]},filterResultMessageText:function(){return M(this.visibleOptions)?this.filterMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptyFilterMessageText},filterMessageText:function(){return this.filterMessage||this.$primevue.config.locale.searchMessage||""},emptyFilterMessageText:function(){return this.emptyFilterMessage||this.$primevue.config.locale.emptySearchMessage||this.$primevue.config.locale.emptyFilterMessage||""},emptyMessageText:function(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.hasSelectedOption?this.selectionMessageText.replaceAll("{0}",this.multiple?this.modelValue.length:"1"):this.emptySelectionMessageText},focusedOptionId:function(){return this.focusedOptionIndex!==-1?"".concat(this.id,"_").concat(this.focusedOptionIndex):null},ariaSetSize:function(){var e=this;return this.visibleOptions.filter(function(i){return!e.isOptionGroup(i)}).length},virtualScrollerDisabled:function(){return!this.virtualScrollerOptions}},directives:{ripple:_},components:{InputText:pe,VirtualScroller:ae,InputIcon:ue,IconField:ce,SearchIcon:re,CheckIcon:ee,BlankIcon:de}},ve=["id"],Se=["tabindex"],Fe=["id","aria-multiselectable","aria-label","aria-labelledby","aria-activedescendant","aria-disabled"],ke=["id"],Me=["id","aria-label","aria-selected","aria-disabled","aria-setsize","aria-posinset","onClick","onMousedown","onMousemove","onDblclick","data-p-selected","data-p-focused","data-p-disabled"],Ve=["tabindex"];function Ke(t,e,i,o,s,n){var a=m("InputText"),h=m("SearchIcon"),b=m("InputIcon"),N=m("IconField"),U=m("CheckIcon"),q=m("BlankIcon"),z=m("VirtualScroller"),j=ie("ripple");return d(),p("div",l({id:s.id,class:t.cx("root"),onFocusout:e[7]||(e[7]=function(){return n.onFocusout&&n.onFocusout.apply(n,arguments)})},t.ptmi("root")),[I("span",l({ref:"firstHiddenFocusableElement",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:t.disabled?-1:t.tabindex,onFocus:e[0]||(e[0]=function(){return n.onFirstHiddenFocus&&n.onFirstHiddenFocus.apply(n,arguments)})},t.ptm("hiddenFirstFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16,Se),t.$slots.header?(d(),p("div",{key:0,class:G(t.cx("header"))},[g(t.$slots,"header",{value:t.modelValue,options:n.visibleOptions})],2)):v("",!0),t.filter?(d(),p("div",l({key:1,class:t.cx("header")},t.ptm("header")),[K(N,{unstyled:t.unstyled,pt:t.ptm("pcFilterContainer")},{default:w(function(){return[K(a,{modelValue:s.filterValue,"onUpdate:modelValue":e[1]||(e[1]=function(f){return s.filterValue=f}),type:"text",class:G(t.cx("pcFilter")),placeholder:t.filterPlaceholder,role:"searchbox",autocomplete:"off",disabled:t.disabled,unstyled:t.unstyled,"aria-owns":s.id+"_list","aria-activedescendant":n.focusedOptionId,tabindex:!t.disabled&&!s.focused?t.tabindex:-1,onInput:n.onFilterChange,onBlur:n.onFilterBlur,onKeydown:n.onFilterKeyDown,pt:t.ptm("pcFilter")},null,8,["modelValue","class","placeholder","disabled","unstyled","aria-owns","aria-activedescendant","tabindex","onInput","onBlur","onKeydown","pt"]),K(b,l({unstyled:t.unstyled},t.ptm("pcFilterIconContainer")),{default:w(function(){return[g(t.$slots,"filtericon",{},function(){return[t.filterIcon?(d(),p("span",l({key:0,class:t.filterIcon},t.ptm("filterIcon")),null,16)):(d(),E(h,ne(l({key:1},t.ptm("filterIcon"))),null,16))]})]}),_:3},16,["unstyled"])]}),_:3},8,["unstyled","pt"]),I("span",l({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenFilterResult"),{"data-p-hidden-accessible":!0}),x(n.filterResultMessageText),17)],16)):v("",!0),I("div",l({class:t.cx("listContainer"),style:[{"max-height":n.virtualScrollerDisabled?t.scrollHeight:""},t.listStyle]},t.ptm("listContainer")),[K(z,l({ref:n.virtualScrollerRef},t.virtualScrollerOptions,{items:n.visibleOptions,style:[{height:t.scrollHeight},t.listStyle],tabindex:-1,disabled:n.virtualScrollerDisabled,pt:t.ptm("virtualScroller")}),oe({content:w(function(f){var T=f.styleClass,W=f.contentRef,S=f.items,c=f.getItemOptions,X=f.contentStyle,F=f.itemSize;return[I("ul",l({ref:function(u){return n.listRef(u,W)},id:s.id+"_list",class:[t.cx("list"),T],style:X,tabindex:-1,role:"listbox","aria-multiselectable":t.multiple,"aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-activedescendant":s.focused?n.focusedOptionId:void 0,"aria-disabled":t.disabled,onFocus:e[3]||(e[3]=function(){return n.onListFocus&&n.onListFocus.apply(n,arguments)}),onBlur:e[4]||(e[4]=function(){return n.onListBlur&&n.onListBlur.apply(n,arguments)}),onKeydown:e[5]||(e[5]=function(){return n.onListKeyDown&&n.onListKeyDown.apply(n,arguments)})},t.ptm("list")),[(d(!0),p(C,null,se(S,function(r,u){return d(),p(C,{key:n.getOptionRenderKey(r,n.getOptionIndex(u,c))},[n.isOptionGroup(r)?(d(),p("li",l({key:0,id:s.id+"_"+n.getOptionIndex(u,c),style:{height:F?F+"px":void 0},class:t.cx("optionGroup"),role:"option",ref_for:!0},t.ptm("optionGroup")),[g(t.$slots,"optiongroup",{option:r.optionGroup,index:n.getOptionIndex(u,c)},function(){return[L(x(n.getOptionGroupLabel(r.optionGroup)),1)]})],16,ke)):le((d(),p("li",l({key:1,id:s.id+"_"+n.getOptionIndex(u,c),style:{height:F?F+"px":void 0},class:t.cx("option",{option:r,index:u,getItemOptions:c}),role:"option","aria-label":n.getOptionLabel(r),"aria-selected":n.isSelected(r),"aria-disabled":n.isOptionDisabled(r),"aria-setsize":n.ariaSetSize,"aria-posinset":n.getAriaPosInset(n.getOptionIndex(u,c)),onClick:function(O){return n.onOptionSelect(O,r,n.getOptionIndex(u,c))},onMousedown:function(O){return n.onOptionMouseDown(O,n.getOptionIndex(u,c))},onMousemove:function(O){return n.onOptionMouseMove(O,n.getOptionIndex(u,c))},onTouchend:e[2]||(e[2]=function(k){return n.onOptionTouchEnd()}),onDblclick:function(O){return n.onOptionDblClick(O,r)},ref_for:!0},n.getPTOptions(r,c,u,"option"),{"data-p-selected":n.isSelected(r),"data-p-focused":s.focusedOptionIndex===n.getOptionIndex(u,c),"data-p-disabled":n.isOptionDisabled(r)}),[t.checkmark?(d(),p(C,{key:0},[n.isSelected(r)?(d(),E(U,l({key:0,class:t.cx("optionCheckIcon"),ref_for:!0},t.ptm("optionCheckIcon")),null,16,["class"])):(d(),E(q,l({key:1,class:t.cx("optionBlankIcon"),ref_for:!0},t.ptm("optionBlankIcon")),null,16,["class"]))],64)):v("",!0),g(t.$slots,"option",{option:r,selected:n.isSelected(r),index:n.getOptionIndex(u,c)},function(){return[L(x(n.getOptionLabel(r)),1)]})],16,Me)),[[j]])],64)}),128)),s.filterValue&&(!S||S&&S.length===0)?(d(),p("li",l({key:0,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage")),[g(t.$slots,"emptyfilter",{},function(){return[L(x(n.emptyFilterMessageText),1)]})],16)):!t.options||t.options&&t.options.length===0?(d(),p("li",l({key:1,class:t.cx("emptyMessage"),role:"option"},t.ptm("emptyMessage")),[g(t.$slots,"empty",{},function(){return[L(x(n.emptyMessageText),1)]})],16)):v("",!0)],16,Fe)]}),_:2},[t.$slots.loader?{name:"loader",fn:w(function(f){var T=f.options;return[g(t.$slots,"loader",{options:T})]}),key:"0"}:void 0]),1040,["items","style","disabled","pt"])],16),g(t.$slots,"footer",{value:t.modelValue,options:n.visibleOptions}),!t.options||t.options&&t.options.length===0?(d(),p("span",l({key:2,role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenEmptyMessage"),{"data-p-hidden-accessible":!0}),x(n.emptyMessageText),17)):v("",!0),I("span",l({role:"status","aria-live":"polite",class:"p-hidden-accessible"},t.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),x(n.selectedMessageText),17),I("span",l({ref:"lastHiddenFocusableElement",role:"presentation","aria-hidden":"true",class:"p-hidden-accessible p-hidden-focusable",tabindex:t.disabled?-1:t.tabindex,onFocus:e[6]||(e[6]=function(){return n.onLastHiddenFocus&&n.onLastHiddenFocus.apply(n,arguments)})},t.ptm("hiddenLastFocusableEl"),{"data-p-hidden-accessible":!0,"data-p-hidden-focusable":!0}),null,16,Ve)],16,ve)}Ie.render=Ke;export{Ie as s};
