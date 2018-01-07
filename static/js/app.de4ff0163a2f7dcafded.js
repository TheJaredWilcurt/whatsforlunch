webpackJsonp([1],{10:function(t,o,n){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=n(11),a=n(14);s.a.config.productionTip=!1,new s.a({el:"#app",template:"<App/>",components:{App:a.a}})},14:function(t,o,n){"use strict";function s(t){n(15)}var a=n(17),i=n(41),e=n(4),r=s,c=e(a.a,i.a,!1,r,null,null);o.a=c.exports},15:function(t,o){},17:function(t,o,n){"use strict";var s=n(18);o.a={name:"app",components:{Food:s.a}}},18:function(t,o,n){"use strict";function s(t){n(19)}var a=n(20),i=n(40),e=n(4),r=s,c=e(a.a,i.a,!1,r,null,null);o.a=c.exports},19:function(t,o){},20:function(t,o,n){"use strict";var s=n(21),a=n.n(s);o.a={name:"food",data:function(){return{randFoods:[],locations:[],selectedLocation:"",amount:5,cap:0,foods:[]}},methods:{randFood:function(){return Math.round(Math.random()*this.foods.length)},addRandom:function(){var t=this.randFood(),o=this.foods[t];this.randFoods.push(o)},removeNonLocations:function(){if(this.selectedLocation){for(var t=[],o=0;o<this.randFoods.length;o++)this.randFoods[o].location===this.selectedLocation&&t.push(this.randFoods[o]);this.randFoods=t}},removeDupes:function(){for(var t={},o=0;o<this.randFoods.length;o++)this.randFoods[o]&&this.randFoods[o].name&&(t[this.randFoods[o].name]=this.randFoods[o]);this.randFoods=[];for(var n in t)this.randFoods.push(t[n])},clampAmount:function(t){return t>this.cap?t=this.cap:t<1&&(t=1),t},setCapValue:function(){this.cap=this.foods.length,this.selectedLocation&&(this.cap=this.foods.filter(function(t){return t.location===this.selectedLocation}.bind(this)).length),this.amount=this.clampAmount(this.amount)},fillOutList:function(t){var o=t.target.value;if(this.randFoods.length>o)this.randFoods=this.randFoods.slice(0,o);else for(this.setCapValue();this.randFoods.length<this.amount;)this.addRandom(),this.removeDupes(),this.removeNonLocations()},buildList:function(){for(this.randFoods=[],this.setCapValue();this.randFoods.length<this.amount;)this.addRandom(),this.removeDupes(),this.removeNonLocations()},buildListOfLocations:function(){this.locations=["Show All"];for(var t={},o=0;o<this.foods.length;o++){t[this.foods[o].location]=1}for(var n in t)this.locations.push(n)},updateSelectedLocation:function(t){var o=t.target.value;"Show All"===o&&(o=""),this.selectedLocation=o,this.setCapValue(),this.buildList()},getFoodData:function(){var t=this;a.a.get("../../static/data/foods.json").then(function(o){t.foods=o.data,t.buildListOfLocations(),t.buildList()})}},mounted:function(){this.getFoodData()}}},40:function(t,o,n){"use strict";var s=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",[t._m(0,!1,!1),t._v(" "),n("select",{on:{change:t.updateSelectedLocation}},t._l(t.locations,function(o){return n("option",[t._v(t._s(o))])})),t._v("\n  All locations relative to Monument Circle.\n  "),n("ol",t._l(t.randFoods,function(o){return n("li",[n("a",{attrs:{href:"https://www.google.com/maps/place/Indianapolis,+IN+46204+"+o.name.replace(/ /g,"+"),target:"_blank"}},[t._v(t._s(o.name))]),t._v(" "),n("span",{staticClass:"location"},[t._v(t._s(o.location))])])})),t._v(" "),n("button",{staticClass:"button-ter",on:{click:t.buildList}},[t._v("These all suck")]),t._v("\n  Showing "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],attrs:{type:"number",min:"1",max:t.cap},domProps:{value:t.amount},on:{change:t.fillOutList,input:function(o){o.target.composing||(t.amount=o.target.value)}}}),t._v(" out of "+t._s(t.cap)+"\n")])},a=[function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("h1",[t._v("\n    What's for Lunch"),n("img",{staticClass:"logo",attrs:{src:"static/img/icons/android-chrome-512x512.png",alt:"A chef's knife"}})])}],i={render:s,staticRenderFns:a};o.a=i},41:function(t,o,n){"use strict";var s=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{attrs:{id:"app"}},[n("food")],1)},a=[],i={render:s,staticRenderFns:a};o.a=i}},[10]);
//# sourceMappingURL=app.de4ff0163a2f7dcafded.js.map