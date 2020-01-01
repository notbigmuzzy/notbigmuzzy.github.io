





/*! Sortable 1.2.0 - MIT | git://github.com/rubaxa/Sortable.git */
!function(a){"use strict";"function"==typeof define&&define.amd?define(a):"undefined"!=typeof module&&"undefined"!=typeof module.exports?module.exports=a():"undefined"!=typeof Package?Sortable=a():window.Sortable=a()}(function(){"use strict";function a(a,b){this.el=a,this.options=b=q({},b),a[H]=this;var d={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(a.nodeName)?"li":">*",ghostClass:"sortable-ghost",ignore:"a, img",filter:null,animation:0,setData:function(a,b){a.setData("Text",b.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0};for(var e in d)!(e in b)&&(b[e]=d[e]);var g=b.group;g&&"object"==typeof g||(g=b.group={name:g}),["pull","put"].forEach(function(a){a in g||(g[a]=!0)}),b.groups=" "+g.name+(g.put.join?" "+g.put.join(" "):"")+" ";for(var h in this)"_"===h.charAt(0)&&(this[h]=c(this,this[h]));f(a,"mousedown",this._onTapStart),f(a,"touchstart",this._onTapStart),f(a,"dragover",this),f(a,"dragenter",this),Q.push(this._onDragOver),b.store&&this.sort(b.store.get(this))}function b(a){t&&t.state!==a&&(i(t,"display",a?"none":""),!a&&t.state&&u.insertBefore(t,r),t.state=a)}function c(a,b){var c=P.call(arguments,2);return b.bind?b.bind.apply(b,[a].concat(c)):function(){return b.apply(a,c.concat(P.call(arguments)))}}function d(a,b,c){if(a){c=c||J,b=b.split(".");var d=b.shift().toUpperCase(),e=new RegExp("\\s("+b.join("|")+")\\s","g");do if(">*"===d&&a.parentNode===c||(""===d||a.nodeName.toUpperCase()==d)&&(!b.length||((" "+a.className+" ").match(e)||[]).length==b.length))return a;while(a!==c&&(a=a.parentNode))}return null}function e(a){a.dataTransfer.dropEffect="move",a.preventDefault()}function f(a,b,c){a.addEventListener(b,c,!1)}function g(a,b,c){a.removeEventListener(b,c,!1)}function h(a,b,c){if(a)if(a.classList)a.classList[c?"add":"remove"](b);else{var d=(" "+a.className+" ").replace(G," ").replace(" "+b+" "," ");a.className=(d+(c?" "+b:"")).replace(G," ")}}function i(a,b,c){var d=a&&a.style;if(d){if(void 0===c)return J.defaultView&&J.defaultView.getComputedStyle?c=J.defaultView.getComputedStyle(a,""):a.currentStyle&&(c=a.currentStyle),void 0===b?c:c[b];b in d||(b="-webkit-"+b),d[b]=c+("string"==typeof c?"":"px")}}function j(a,b,c){if(a){var d=a.getElementsByTagName(b),e=0,f=d.length;if(c)for(;f>e;e++)c(d[e],e);return d}return[]}function k(a){a.draggable=!1}function l(){M=!1}function m(a,b){var c=a.lastElementChild,d=c.getBoundingClientRect();return b.clientY-(d.top+d.height)>5&&c}function n(a){for(var b=a.tagName+a.className+a.src+a.href+a.textContent,c=b.length,d=0;c--;)d+=b.charCodeAt(c);return d.toString(36)}function o(a){for(var b=0;a&&(a=a.previousElementSibling);)"TEMPLATE"!==a.nodeName.toUpperCase()&&b++;return b}function p(a,b){var c,d;return function(){void 0===c&&(c=arguments,d=this,setTimeout(function(){1===c.length?a.call(d,c[0]):a.apply(d,c),c=void 0},b))}}function q(a,b){if(a&&b)for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}var r,s,t,u,v,w,x,y,z,A,B,C,D,E,F={},G=/\s+/g,H="Sortable"+(new Date).getTime(),I=window,J=I.document,K=I.parseInt,L=!!("draggable"in J.createElement("div")),M=!1,N=function(a,b,c,d,e,f,g){var h=J.createEvent("Event"),i=(a||b[H]).options,j="on"+c.charAt(0).toUpperCase()+c.substr(1);h.initEvent(c,!0,!0),h.item=d||b,h.from=e||b,h.clone=t,h.oldIndex=f,h.newIndex=g,i[j]&&i[j].call(a,h),b.dispatchEvent(h)},O=Math.abs,P=[].slice,Q=[],R=p(function(a,b,c){if(c&&b.scroll){var d,e,f,g,h=b.scrollSensitivity,i=b.scrollSpeed,j=a.clientX,k=a.clientY,l=window.innerWidth,m=window.innerHeight;if(x!==c&&(w=b.scroll,x=c,w===!0)){w=c;do if(w.offsetWidth<w.scrollWidth||w.offsetHeight<w.scrollHeight)break;while(w=w.parentNode)}w&&(d=w,e=w.getBoundingClientRect(),f=(O(e.right-j)<=h)-(O(e.left-j)<=h),g=(O(e.bottom-k)<=h)-(O(e.top-k)<=h)),f||g||(f=(h>=l-j)-(h>=j),g=(h>=m-k)-(h>=k),(f||g)&&(d=I)),(F.vx!==f||F.vy!==g||F.el!==d)&&(F.el=d,F.vx=f,F.vy=g,clearInterval(F.pid),d&&(F.pid=setInterval(function(){d===I?I.scrollTo(I.pageXOffset+f*i,I.pageYOffset+g*i):(g&&(d.scrollTop+=g*i),f&&(d.scrollLeft+=f*i))},24)))}},30);return a.prototype={constructor:a,_onTapStart:function(a){var b=this,c=this.el,e=this.options,f=a.type,g=a.touches&&a.touches[0],h=(g||a).target,i=h,j=e.filter;if(!("mousedown"===f&&0!==a.button||e.disabled)&&(h=d(h,e.draggable,c))){if(A=o(h),"function"==typeof j){if(j.call(this,a,h,this))return N(b,i,"filter",h,c,A),void a.preventDefault()}else if(j&&(j=j.split(",").some(function(a){return a=d(i,a.trim(),c),a?(N(b,a,"filter",h,c,A),!0):void 0})))return void a.preventDefault();(!e.handle||d(i,e.handle,c))&&this._prepareDragStart(a,g,h)}},_prepareDragStart:function(a,b,c){var d,e=this,g=e.el,h=e.options,i=g.ownerDocument;c&&!r&&c.parentNode===g&&(D=a,u=g,r=c,v=r.nextSibling,C=h.group,d=function(){e._disableDelayedDrag(),r.draggable=!0,h.ignore.split(",").forEach(function(a){j(r,a.trim(),k)}),e._triggerDragStart(b)},f(i,"mouseup",e._onDrop),f(i,"touchend",e._onDrop),f(i,"touchcancel",e._onDrop),h.delay?(f(i,"mousemove",e._disableDelayedDrag),f(i,"touchmove",e._disableDelayedDrag),e._dragStartTimer=setTimeout(d,h.delay)):d())},_disableDelayedDrag:function(){var a=this.el.ownerDocument;clearTimeout(this._dragStartTimer),g(a,"mousemove",this._disableDelayedDrag),g(a,"touchmove",this._disableDelayedDrag)},_triggerDragStart:function(a){a?(D={target:r,clientX:a.clientX,clientY:a.clientY},this._onDragStart(D,"touch")):L?(f(r,"dragend",this),f(u,"dragstart",this._onDragStart)):this._onDragStart(D,!0);try{J.selection?J.selection.empty():window.getSelection().removeAllRanges()}catch(b){}},_dragStarted:function(){u&&r&&(h(r,this.options.ghostClass,!0),a.active=this,N(this,u,"start",r,u,A))},_emulateDragOver:function(){if(E){i(s,"display","none");var a=J.elementFromPoint(E.clientX,E.clientY),b=a,c=" "+this.options.group.name,d=Q.length;if(b)do{if(b[H]&&b[H].options.groups.indexOf(c)>-1){for(;d--;)Q[d]({clientX:E.clientX,clientY:E.clientY,target:a,rootEl:b});break}a=b}while(b=b.parentNode);i(s,"display","")}},_onTouchMove:function(a){if(D){var b=a.touches?a.touches[0]:a,c=b.clientX-D.clientX,d=b.clientY-D.clientY,e=a.touches?"translate3d("+c+"px,"+d+"px,0)":"translate("+c+"px,"+d+"px)";E=b,i(s,"webkitTransform",e),i(s,"mozTransform",e),i(s,"msTransform",e),i(s,"transform",e),a.preventDefault()}},_onDragStart:function(a,b){var c=a.dataTransfer,d=this.options;if(this._offUpEvents(),"clone"==C.pull&&(t=r.cloneNode(!0),i(t,"display","none"),u.insertBefore(t,r)),b){var e,g=r.getBoundingClientRect(),h=i(r);s=r.cloneNode(!0),i(s,"top",g.top-K(h.marginTop,10)),i(s,"left",g.left-K(h.marginLeft,10)),i(s,"width",g.width),i(s,"height",g.height),i(s,"opacity","0.8"),i(s,"position","fixed"),i(s,"zIndex","100000"),u.appendChild(s),e=s.getBoundingClientRect(),i(s,"width",2*g.width-e.width),i(s,"height",2*g.height-e.height),"touch"===b?(f(J,"touchmove",this._onTouchMove),f(J,"touchend",this._onDrop),f(J,"touchcancel",this._onDrop)):(f(J,"mousemove",this._onTouchMove),f(J,"mouseup",this._onDrop)),this._loopId=setInterval(this._emulateDragOver,150)}else c&&(c.effectAllowed="move",d.setData&&d.setData.call(this,c,r)),f(J,"drop",this);setTimeout(this._dragStarted,0)},_onDragOver:function(a){var c,e,f,g=this.el,h=this.options,j=h.group,k=j.put,n=C===j,o=h.sort;if(void 0!==a.preventDefault&&(a.preventDefault(),!h.dragoverBubble&&a.stopPropagation()),C&&!h.disabled&&(n?o||(f=!u.contains(r)):C.pull&&k&&(C.name===j.name||k.indexOf&&~k.indexOf(C.name)))&&(void 0===a.rootEl||a.rootEl===this.el)){if(R(a,h,this.el),M)return;if(c=d(a.target,h.draggable,g),e=r.getBoundingClientRect(),f)return b(!0),void(t||v?u.insertBefore(r,t||v):o||u.appendChild(r));if(0===g.children.length||g.children[0]===s||g===a.target&&(c=m(g,a))){if(c){if(c.animated)return;q=c.getBoundingClientRect()}b(n),g.appendChild(r),this._animate(e,r),c&&this._animate(q,c)}else if(c&&!c.animated&&c!==r&&void 0!==c.parentNode[H]){y!==c&&(y=c,z=i(c));var p,q=c.getBoundingClientRect(),w=q.right-q.left,x=q.bottom-q.top,A=/left|right|inline/.test(z.cssFloat+z.display),B=c.offsetWidth>r.offsetWidth,D=c.offsetHeight>r.offsetHeight,E=(A?(a.clientX-q.left)/w:(a.clientY-q.top)/x)>.5,F=c.nextElementSibling;M=!0,setTimeout(l,30),b(n),p=A?c.previousElementSibling===r&&!B||E&&B:F!==r&&!D||E&&D,p&&!F?g.appendChild(r):c.parentNode.insertBefore(r,p?F:c),this._animate(e,r),this._animate(q,c)}}},_animate:function(a,b){var c=this.options.animation;if(c){var d=b.getBoundingClientRect();i(b,"transition","none"),i(b,"transform","translate3d("+(a.left-d.left)+"px,"+(a.top-d.top)+"px,0)"),b.offsetWidth,i(b,"transition","all "+c+"ms"),i(b,"transform","translate3d(0,0,0)"),clearTimeout(b.animated),b.animated=setTimeout(function(){i(b,"transition",""),i(b,"transform",""),b.animated=!1},c)}},_offUpEvents:function(){var a=this.el.ownerDocument;g(J,"touchmove",this._onTouchMove),g(a,"mouseup",this._onDrop),g(a,"touchend",this._onDrop),g(a,"touchcancel",this._onDrop)},_onDrop:function(b){var c=this.el,d=this.options;clearInterval(this._loopId),clearInterval(F.pid),clearTimeout(this.dragStartTimer),g(J,"drop",this),g(J,"mousemove",this._onTouchMove),g(c,"dragstart",this._onDragStart),this._offUpEvents(),b&&(b.preventDefault(),!d.dropBubble&&b.stopPropagation(),s&&s.parentNode.removeChild(s),r&&(g(r,"dragend",this),k(r),h(r,this.options.ghostClass,!1),u!==r.parentNode?(B=o(r),N(null,r.parentNode,"sort",r,u,A,B),N(this,u,"sort",r,u,A,B),N(null,r.parentNode,"add",r,u,A,B),N(this,u,"remove",r,u,A,B)):(t&&t.parentNode.removeChild(t),r.nextSibling!==v&&(B=o(r),N(this,u,"update",r,u,A,B),N(this,u,"sort",r,u,A,B))),a.active&&N(this,u,"end",r,u,A,B)),u=r=s=v=t=w=x=D=E=y=z=C=a.active=null,this.save())},handleEvent:function(a){var b=a.type;"dragover"===b||"dragenter"===b?r&&(this._onDragOver(a),e(a)):("drop"===b||"dragend"===b)&&this._onDrop(a)},toArray:function(){for(var a,b=[],c=this.el.children,e=0,f=c.length,g=this.options;f>e;e++)a=c[e],d(a,g.draggable,this.el)&&b.push(a.getAttribute(g.dataIdAttr)||n(a));return b},sort:function(a){var b={},c=this.el;this.toArray().forEach(function(a,e){var f=c.children[e];d(f,this.options.draggable,c)&&(b[a]=f)},this),a.forEach(function(a){b[a]&&(c.removeChild(b[a]),c.appendChild(b[a]))})},save:function(){var a=this.options.store;a&&a.set(this)},closest:function(a,b){return d(a,b||this.options.draggable,this.el)},option:function(a,b){var c=this.options;return void 0===b?c[a]:void(c[a]=b)},destroy:function(){var a=this.el;a[H]=null,g(a,"mousedown",this._onTapStart),g(a,"touchstart",this._onTapStart),g(a,"dragover",this),g(a,"dragenter",this),Array.prototype.forEach.call(a.querySelectorAll("[draggable]"),function(a){a.removeAttribute("draggable")}),Q.splice(Q.indexOf(this._onDragOver),1),this._onDrop(),this.el=a=null}},a.utils={on:f,off:g,css:i,find:j,bind:c,is:function(a,b){return!!d(a,b,a)},extend:q,throttle:p,closest:d,toggleClass:h,index:o},a.version="1.2.0",a.create=function(b,c){return new a(b,c)},a});












// [yourls-api](http://neocotic.com/yourls-api) 1.0.0
// (c) 2011 Alasdair Mercer
// Freely distributable under the MIT license.
// For all details and documentation:
// http://neocotic.com/yourls-api
(function(a){function g(a,d,g){var h=+(new Date),i=document.createElement("script");while(typeof e.__jsonp_callbacks[h]!=="undefined"){h+=Math.random()}e.__jsonp_callbacks[h]=function(){delete e.__jsonp_callbacks[h];d.apply(g,arguments)};a="?format=jsonp&callback="+encodeURIComponent("yourls.__jsonp_callbacks["+h+"]")+"&"+a;a+="&"+f(c);i.setAttribute("src",b+a);document.getElementsByTagName("head")[0].appendChild(i)}function f(a){var b,c="";for(b in a){if(a.hasOwnProperty(b)){if(typeof a[b]!=="undefined"){c+=b+"="+a[b]+"&"}}}return c.replace(/&$/,"")}var b="",c={},d=a.yourls;var e={};e.__jsonp_callbacks={};e.VERSION="1.0.0";e.connect=function(a,d){b=a;c={};if(d){if(d.signature){c.signature=d.signature}else{c.password=d.password;c.username=d.username}}return this};e.shorten=function(a,b,c,d){var e={action:"shorturl",url:a};if(typeof b==="function"){c=b}else{e.keyword=b}g(f(e),c,d);return this};e.stats=function(a,b,c,d){var e={action:"stats"},h=typeof a;switch(h){case"number":e.limit=a;c=b;break;case"function":c=a;break;default:e.filter=a;if(typeof b==="function"){c=b}else{e.limit=b}}g(f(e),c,d);return this};e.url=function(a){if(!(this instanceof e.url))return new e.url(a);this.url=a};e.url.prototype.expand=function(a,b){g(f({action:"expand",shorturl:this.url}),a,b);return this};e.url.prototype.stats=function(a,b){g(f({action:"url-stats",shorturl:this.url}),a,b);return this};e.noConflict=function(){a.yourls=d;return this};if(typeof define==="function"&&define.amd){define("yourls",function(){return e})}else{a.yourls=e}})(this)











// FUNCTIONS
function _longPressDown(e, t) {
    function n() {
        clearTimeout(lptimer), i.removeEventListener("touchend", n), i.removeEventListener("touchmove", n)
    }
    e.stopPropagation();
    var i = t || this;
    i.addEventListener("touchend", n), i.addEventListener("touchmove", n), lptimer = setTimeout(function() {
        e.preventDefault(), n(), showContextMenu(e, i)
    }, 1e3)
}

function createSortables() {
    plSortable = Sortable.create(playlistsDOM, {
        animation: 50,
        draggable: ".container",
        ghostClass: "ghost",
        onUpdate: function(e) {
            playlists.dragSort(e.oldIndex, e.newIndex), refreshPlaylists(), saveStoredPlaylists()
        }
    }), Sortable.create(playlistDOM, {
        animation: 50,
        draggable: ".container",
        ghostClass: "ghost",
        onUpdate: function(e) {
            selectedList.items.dragSort(e.oldIndex, e.newIndex), refresh(), saveStoredPlaylists()
        }
    }), Sortable.create(queueDOM, {
        animation: 50,
        draggable: ".container",
        ghostClass: "ghost",
        onUpdate: function(e) {
            queue.items.dragSort(e.oldIndex, e.newIndex), queue.update()
        }
    })
}

function dropItem(e) {
    console.log(e.dataTransfer.getData("el")), e.preventDefault(), console.log(e.target)
}

function onItemDrag(e, t) {
    e.dataTransfer.setData("el", t)
}

function onLoaded() {
    fillStorageIfEmpty(), loadStoredPlaylists(), selectedList = playlists[0], -1 !== window.location.href.indexOf("#") && parseURI(window.location.href), player.isMuted() && (document.getElementById("volumeIcon").classList.remove("icon-volume-up"), document.getElementById("volumeIcon").classList.add("icon-volume-off")), document.getElementById("volumefg").style.width = player.getVolume() + "%", setupListeners()
}

function getContainer(e, t) {
    for (; e.parentNode !== t;) e = e.parentNode;
    return e.className.match(/container|result/i) ? e : null
}

function setupDelegate(e, t, n, i, s) {
    e.addEventListener(t, function(e) {
        var t = getContainer(e.target, this);
        t && (s ? n(e, i ? t : t.getAttribute("index")) : n(i ? t : t.getAttribute("index")))
    })
}

function setupListeners() {
    document.getElementById("nextButton").addEventListener("click", getNext), document.getElementById("prevButton").addEventListener("click", getPrev), document.getElementById("playIcon").addEventListener("click", togglePause), document.getElementById("volumeIcon").addEventListener("click", muteToggle), document.getElementById("clearSearchButton").addEventListener("click", clearSearch), document.getElementById("addPlaylistButton").addEventListener("click", addPlaylist), document.getElementById("queueButton").addEventListener("click", toggleQueue), document.getElementById("shuffleButton").addEventListener("click", toggleShuffle), document.getElementById("settingsButton").addEventListener("click", showSettings), document.getElementById("img-wrap").addEventListener("click", showOverlayPlayer), setupDelegate(playlistDOM, "click", selectItem), setupDelegate(playlistsDOM, "click", selectPlaylist), setupDelegate(resultsDOM, "click", addResultAndCloseSearch, !0), setupDelegate(queueDOM, "click", skipQueueTo), setupDelegate(playlistsDOM, "dblclick", editPlaylist), document.body.addEventListener("contextmenu", showContextMenu), document.getElementById("playlists-wrap").addEventListener("contextmenu", showContextMenu), setupDelegate(playlistDOM, "contextmenu", showContextMenu, !0, !0), setupDelegate(playlistsDOM, "contextmenu", showContextMenu, !0, !0), setupDelegate(resultsDOM, "contextmenu", showContextMenu, !0, !0), setupDelegate(queueDOM, "contextmenu", showContextMenu, !0, !0), document.getElementById("listHandle").addEventListener("mousedown", function(e) {
        var t = document.getElementById("playlists-wrap"),
            n = e.clientX,
            i = t.offsetWidth,
            s = !0,
            l = function(e) {
                s && (t.style.width = i + e.clientX - n + "px")
            };
        t.parentNode.addEventListener("mousemove", l), t.parentNode.addEventListener("mouseup", function a() {
            s = !1, t.parentNode.removeEventListener("mousemove", l), t.parentNode.removeEventListener("mouseup", a)
        }, !1)
    }, !1), isMobile() && (document.body.addEventListener("touchstart", _longPressDown), document.getElementById("playlists-wrap").addEventListener("touchstart", _longPressDown), setupDelegate(playlistDOM, "touchstart", _longPressDown, !0, !0), setupDelegate(playlistsDOM, "touchstart", _longPressDown, !0, !0), setupDelegate(resultsDOM, "touchstart", _longPressDown, !0, !0), setupDelegate(queueDOM, "touchstart", _longPressDown, !0, !0)), document.getElementById("volume-slider").addEventListener("click", function(e) {
        var t = (e.pageX - this.offsetLeft) / this.offsetWidth * (65 / 60) * 100;
        player.setVolume(t), document.getElementById("volumefg").style.width = t + "%"
    }, !1), document.getElementById("posBar").addEventListener("click", function(e) {
        if (activeItem && 1 === player.getPlayerState() || 2 === player.getPlayerState() || 3 === player.getPlayerState()) {
            var t = (e.pageX - this.offsetLeft) / this.offsetWidth;
            player.seekTo(activeItem.timesecs * t), document.getElementById("posfg").style.width = 100 * t + "%"
        }
    }, !1), document.getElementById("searchbox").addEventListener("input", function() {
        setTimeout(function() {
            search()
        }, 400)
    }, !1), document.addEventListener("keydown", function(e) {
        switch (e.keyCode) {
            case 32:
                if ("INPUT" !== document.activeElement.nodeName) return togglePause(), e.preventDefault(), !1;
                break;
            case 39:
                "INPUT" !== document.activeElement.nodeName && getNext();
                break;
            case 37:
                "INPUT" !== document.activeElement.nodeName && getPrev();
                break;
            case 38:
                return setVol(20), !1;
            case 40:
                return setVol(-20), !1;
            case 81:
                e.ctrlKey && document.getElementById("searchbox").focus();
                break;
            case 90:
                e.ctrlKey && addPlaylist();
                break;
            case 49:
                "INPUT" !== document.activeElement.nodeName && playlists.length > 0 && selectPlaylist(0);
                break;
            case 50:
                "INPUT" !== document.activeElement.nodeName && playlists.length > 1 && selectPlaylist(1);
                break;
            case 51:
                "INPUT" !== document.activeElement.nodeName && playlists.length > 2 && selectPlaylist(2);
                break;
            case 52:
                "INPUT" !== document.activeElement.nodeName && playlists.length > 3 && selectPlaylist(3);
                break;
            case 53:
                "INPUT" !== document.activeElement.nodeName && playlists.length > 4 && selectPlaylist(4);
                break;
            case 54:
                "INPUT" !== document.activeElement.nodeName && playlists.length > 5 && selectPlaylist(5);
                break;
            case 55:
                "INPUT" !== document.activeElement.nodeName && playlists.length > 6 && selectPlaylist(6);
                break;
            case 56:
                "INPUT" !== document.activeElement.nodeName && playlists.length > 7 && selectPlaylist(7);
                break;
            case 57:
                "INPUT" !== document.activeElement.nodeName && playlists.length > 8 && selectPlaylist(8)
        }
    })
}

function parseURI(e) {
    var t = /playeri\.net\/?#.+=/;
    if (e.match(t)) {
        e = e.slice(e.indexOf("#") + 1);
        var n = e.slice(0, e.indexOf("=")),
            i = e.slice(e.indexOf("=") + 1).split(",");
        playlists.push(new Playlist(decodeURIComponent(n) + " (Shared)")), fetchItems(i, playlists.last()), window.location.hash = ""
    }
}

function parseDuration(e, t) {
    e = e.slice(e.indexOf("PT") + 2);
    var n = e.substr(0, e.indexOf("H"));
    e = e.slice(e.indexOf("H") + 1);
    var i = e.substr(0, e.indexOf("M"));
    e = e.slice(e.indexOf("M") + 1);
    var s = e.substr(0, e.indexOf("S"));
    e = "", t.timesecs = 0, n && (e += n + ":", t.timesecs += 3600 * parseInt(n)), i ? (e += i + ":", t.timesecs += 60 * parseInt(i)) : e += "0:", s ? (e += s.length > 1 ? s : "0" + s, t.timesecs += parseInt(s)) : e += "00", t.duration = e
}

function secondsToTime(e) {
    e += 1;
    var t = e % 60,
        n = Math.floor(e / 60),
        i = null;
    return n > 59 && (i = Math.floor(n / 60), n %= 60), (i ? i + ":" : "") + n + ":" + (10 > t ? "0" : "") + t
}

function matchYoutubeUrl(e) {
    var t = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    return e.match(t) ? RegExp.$1 : !1
}

function onPlayerReady() {
    onLoaded()
}

function onPlayerStateChange(e) {
    switch (e.data) {
        case YT.PlayerState.ENDED:
            getNext();
            break;
        case YT.PlayerState.PLAYING:
            document.getElementById("playIcon").classList.remove("icon-play"), document.getElementById("playIcon").classList.add("icon-pause"), HighQuality ? player.setPlaybackQuality(player.getAvailableQualityLevels()[0]) : player.setPlaybackQuality("suggestedQuality"), errorCounter = 0;
            break;
        case YT.PlayerState.PAUSED:
            document.getElementById("playIcon").classList.remove("icon-pause"), document.getElementById("playIcon").classList.add("icon-play")
    }
}

function onError() {
    activeItem.setError(), errorCounter++, getNext()
}

function onYouTubeIframeAPIReady() {
    player = new YT.Player("player", {
        height: "100%",
        width: "100%",
        playerVars: {
            autohide: "1",
            controls: "1",
            iv_load_policy: "3"
        },
        events: {
            onStateChange: onPlayerStateChange,
            onReady: onPlayerReady,
            onError: onError
        }
    })
}

function showPlayer() {
    document.getElementById("current-wrap").style.marginBottom = "0", playerVisible = !0
}

function hidePlayer() {
    document.getElementById("current-wrap").style.marginBottom = "-48px", playerVisible = !1
}

function muteToggle() {
    var e = document.getElementById("volumeIcon");
    player.isMuted() ? (player.unMute(), e.classList.add("icon-volume-up"), e.classList.remove("icon-volume-off")) : (player.mute(), e.classList.remove("icon-volume-up"), e.classList.add("icon-volume-off"))
}

function clearSearch() {
    document.getElementById("searchbox").value = "", resultsDOM.clear(), document.getElementById("results-wrap").style.height = "0", tokenList = "", document.getElementById("clearSearchButton").classList.add("hidden")
}

function search(e) {
    if (e || (e = "", tokenList = []), matchYoutubeUrl(document.getElementById("searchbox").value)) {
        var t = new XMLHttpRequest;
        t.onreadystatechange = function() {
            if (document.getElementById("searchbox").value = "", 4 === this.readyState) {
                var e = JSON.parse(t.responseText);
                toPlaylist(e.items[0].id, e.items[0].snippet.title, e.items[0].contentDetails.duration, selectedList)
            }
        }, t.open("GET", "https://www.googleapis.com/youtube/v3/videos?key=" + APIkey + "&part=snippet,contentDetails&fields=items(id,snippet(title),contentDetails(duration))&id=" + matchYoutubeUrl(document.getElementById("searchbox").value), !0), t.send()
    } else if (document.getElementById("searchbox").value) {
        document.getElementById("clearSearchButton").classList.remove("hidden");
        var n = document.getElementById("searchbox").value.toLowerCase();
        n = n.replace(/' '/g, "%20");
        var i = new XMLHttpRequest;
        i.onreadystatechange = function() {
            if (4 === this.readyState && document.getElementById("searchbox").value) {
                var t = JSON.parse(i.responseText);
                nextToken = t.nextPageToken, document.getElementById("results-wrap").style.height = "100%", e || (resultsDOM.clear(), document.getElementById("results-wrap").scrollTop = 0);
                for (var n = [], s = [], l = 0; 25 > l && l < t.pageInfo.totalResults; l++) null !== t.items[l] && (n[l] = document.createElement("div"), n[l].className = l % 2 === 0 ? "result" : "result lighter", createResultTemplate(n[l], t.items[l]), n[l].getAttribute("data-pid") && s.push(n[l]), resultsDOM.appendChild(n[l]));
                getPlaylistItemsCount(s), document.getElementById("results-wrap").addEventListener("scroll", _scrollEvent, !0)
            }
        }, i.open("GET", "https://www.googleapis.com/youtube/v3/search?key=" + APIkey + "&part=snippet&fields=nextPageToken,pageInfo(totalResults),items(id(videoId,playlistId),snippet(title,thumbnails(default)))&maxResults=25&type=video,playlist&q=" + n + "&pageToken=" + e, !0), i.send()
    } else document.getElementById("results-wrap").style.height = "0", document.getElementById("clearSearchButton").classList.add("hidden"), tokenList = ""
}

function createResultTemplate(e, t) {
    e.innerHTML = '<span class="title">' + t.snippet.title + "</span>", t.id.videoId ? (e.innerHTML += '<span class="inforight result-item">Item</span>', e.setAttribute("data-vid", t.id.videoId)) : (e.innerHTML += '<span class="inforight result-pl">Playlist</span>', e.setAttribute("data-pid", t.id.playlistId)), e.innerHTML += '<span class="thumbnail"><img src="' + t.snippet.thumbnails["default"].url + '" height="40"/></span>', e.setAttribute("data-title", t.snippet.title), e.setAttribute("_context", "result")
}

function getPlaylistItemsCount(e) {
    var t = new XMLHttpRequest;
    t.onreadystatechange = function() {
        if (4 === this.readyState)
            for (var n = JSON.parse(t.responseText), i = 0; i < e.length; i++) e[i].children[1].textContent += " (" + n.items[i].contentDetails.itemCount + ")"
    };
    for (var n = "https://www.googleapis.com/youtube/v3/playlists?key=" + APIkey + "&part=contentDetails&fields=items(id,contentDetails)&id=", i = 0; i < e.length; i++) n += (i > 0 ? "," : "") + e[i].getAttribute("data-pid");
    t.open("GET", n, !0), t.send()
}

function addResultAndCloseSearch(e) {
    console.log(e), e.getAttribute("data-pid") && playlists.push(new Playlist("Playlist " + (playlists.length + 1))), addResult(e, playlists.last()), clearSearch(), selectPlaylist(playlists.length - 1)
}

function addResult(e, t) {
    t = t || selectedList, t && -1 !== playlists.indexOf(t) || (addPlaylist(), t = selectedList), t.setSpinner(!0), e.getAttribute("data-vid") ? toPlaylist(e.getAttribute("data-vid"), e.getAttribute("data-title"), !1, t) : e.getAttribute("data-pid") && (arrangePlaylist(e.getAttribute("data-pid"), t), t.renamed || (t.title = e.getAttribute("data-title"), t.Container.children[0].innerHTML = e.getAttribute("data-title"), t.renamed = !0)), e.children[0].innerHTML += '<span class = "svgicon active2 icon-check"></span>', refresh()
}

function fetchItems(e, t, n) {
    if (t) {
        var i = new XMLHttpRequest;
        i.onreadystatechange = function() {
            if (4 === this.readyState) {
                for (var s = JSON.parse(i.responseText), l = 0; l < s.items.length; l++) toPlaylist(s.items[l].id, s.items[l].snippet.title, s.items[l].contentDetails.duration, t);
                e.length > 0 ? fetchItems(e, t, n) : (t.setSpinner(!1), n && saveStoredPlaylists(), refresh())
            }
        };
        var s = "https://www.googleapis.com/youtube/v3/videos?key=" + APIkey + "&part=snippet,contentDetails&fields=items(id,snippet(title),contentDetails(duration))&id=" + e.splice(0, 50).join();
        i.open("GET", s, !0), i.send(), t.setSpinner(!0)
    }
}

function arrangePlaylist(e, t, n, i) {
    var s = new XMLHttpRequest;
    i = i || [], s.onreadystatechange = function() {
        if (4 === this.readyState) {
            for (var n = JSON.parse(s.responseText), l = 0; l < n.items.length; l++) n.items[l].snippet.title && "Private video" !== n.items[l].snippet.title && i.push(n.items[l].snippet.resourceId.videoId);
            n.nextPageToken ? arrangePlaylist(e, t, n.nextPageToken, i) : fetchItems(i, t, !0)
        }
    }, n = n || "", s.open("GET", "https://www.googleapis.com/youtube/v3/playlistItems?key=" + APIkey + "&part=snippet&maxResults=50&playlistId=" + e + "&fields=nextPageToken,items/snippet(title,resourceId/videoId)&pageToken=" + n, !0), s.send()
}

function getListOf(e) {
    for (var t = 0; t < playlists.length; t++)
        if (-1 !== playlists[t].items.indexOf(e)) return playlists[t];
    return null
}

function playVideo(e) {
    e && (activeItem && activeItem.Container.classList.remove("active"), activeItem = e, activeItem.Container.classList.add("active"), player.loadVideoById(activeItem.videoId), document.getElementById("current-title").textContent = activeItem.title, document.getElementById("current-duration").textContent = "0:00/" + activeItem.duration, getItemThumb(activeItem), document.title = activeItem.title, activeList && -1 === activeList.items.indexOf(activeItem) && (activeList = getListOf(activeItem) || activeList), playerVisible || showPlayer(), isPlaying = !0, intervalId && clearInterval(intervalId), intervalId = setInterval(function() {
        activeItem && (document.getElementById("posfg").style.width = 100 * player.getCurrentTime() / activeItem.timesecs + "%", document.getElementById("current-duration").textContent = secondsToTime(parseInt(player.getCurrentTime())) + "/" + activeItem.duration)
    }, 1e3))
}

function togglePause() {
    2 !== player.getPlayerState() ? player.pauseVideo() : -1 !== player.getPlayerState() && player.playVideo(), isPlaying || (showPlayer(), playVideo(activeList.items[0]))
}

function getNext() {
    queue.hasItems() ? playVideo(queue.popItem()) : activeItem && activeList && activeList.items.length > 0 && errorCounter < activeList.items.length ? playVideo(activeList.getNext(activeItem)) : stopPlaying()
}

function getPrev() {
    activeItem && activeList && activeList.items.length > 0 ? playVideo(activeList.getPrevious(activeItem)) : stopPlaying()
}

function stopPlaying() {
    document.title = "Playeri.net - Play music and videos from YouTube", player.stopVideo(), player.clearVideo(), hidePlayer(), isPlaying = !1
}

function setVol(e) {
    var t = player.getVolume() + e;
    t > 100 ? t = 100 : 0 > t && (t = 0), player.setVolume(t), document.getElementById("volumefg").style.width = "" + t + "%"
}

function toggleShuffle() {
    var e = document.getElementById("shuffleButton");
    e.classList.toggle("alt"), ShuffleOn = !ShuffleOn, ShuffleOn && activeList.createShuffle()
}

function Item(e, t, n, i) {
    this.title = t, this.duration = "", this.videoId = e, this.Container = document.createElement("li"), this.Container.className = "container", this.Container.setAttribute("_context", "item"), this.Container.setAttribute("index", i), this.timesecs = "", parseDuration(n, this), this.Container.innerHTML = '<span class="title">' + this.title + '</span><span class="inforight">' + this.duration + "</span>", Item.prototype.setError || (Item.prototype.setError = function() {
        this.Container.classList.add("error")
    })
}

function _onItemContext(e) {
    showContextMenu(e, getContainer(e.target))
}

function selectItem(e) {
    var t = selectedList.items[e];
    t && activeItem !== t && (activeList !== selectedList && (activeList = selectedList), playVideo(t))
}

function removeItem(e, t) {
    t = t || selectedList, t.removeItem(e)
}

function fetchItem(e, t) {
    var n = new XMLHttpRequest;
    n.onreadystatechange = function() {
        if (4 == this.readyState) {
            var i = JSON.parse(n.responseText);
            null != i.items[0] && (t.addItem(e, i.items[0].snippet.title, i.items[0].contentDetails.duration), saveStoredPlaylists(), t.setSpinner(!1), refreshPlaylists())
        }
    }, n.open("GET", "https://www.googleapis.com/youtube/v3/videos?key=" + APIkey + "&part=snippet,contentDetails&fields=items(contentDetails(duration),snippet(title))&id=" + e, !0), n.send()
}

function toPlaylist(e, t, n, i) {
    e && (t && n ? (i.addItem(e, t, n), i.setSpinner(!1)) : fetchItem(e, i))
}

function refresh() {
    if (playlistDOM.clear(), refreshPlaylists(), QueueVisible) queue.update();
    else if (selectedList) {
        selectedList.refreshItems();
        for (var e = 0; e < selectedList.items.length; e++) playlistDOM.appendChild(selectedList.items[e].Container)
    }
}

function Playlist(e) {
    this.title = e, this.index = playlists.length, this.items = [], this.renamed = !1, this.Container = document.createElement("li"), this.Container.className = "container", this.shuffleList = [], this.loading = !1, this.Container.setAttribute("index", this.index), this.Container.setAttribute("_context", "playlist"), this.Container.setAttribute("title", "Double click to rename"), this.titleDOM = document.createElement("span"), this.titleDOM.className = "title", this.titleDOM.textContent = e, this.renameDOM = document.createElement("span"), this.renameDOM.className = "title hidden", this.renameDOM.innerHTML = '<input class="playlist-rename textbox" type="text">', this.countDOM = document.createElement("span"), this.countDOM.className = "inforight", this.countDOM.textContent = "0", this.Container.appendChild(this.titleDOM), this.Container.appendChild(this.renameDOM), this.Container.appendChild(this.countDOM), Playlist.prototype.createShuffle || (Playlist.prototype.createShuffle = function() {
        if (this.shuffleList = [], this.items.length > 1) {
            for (var e = 0; e < this.items.length; e++) this.shuffleList[e] = e;
            for (var t = this.shuffleList.length - 1; t > 0; t--) {
                var n = Math.floor(Math.random() * t),
                    i = this.shuffleList[n];
                this.shuffleList[n] = this.shuffleList[t], this.shuffleList[t] = i
            }
        }
    }), Playlist.prototype.getNext || (Playlist.prototype.getNext = function(e) {
        var t = this.items.indexOf(e);
        return -1 !== t ? (t++, !ShuffleOn || this.items.length < 3 ? t < this.items.length ? this.items[t] : this.items[0] : (this.shuffleList.length !== this.items.length && this.createShuffle(), t < this.items.length ? this.items[this.shuffleList[t]] : this.items[this.shuffleList[0]])) : void 0
    }), Playlist.prototype.getPrevious || (Playlist.prototype.getPrevious = function(e) {
        var t = this.items.indexOf(e);
        return -1 !== t ? (t--, !ShuffleOn || this.items.length < 3 ? t > -1 ? this.items[t] : this.items.last() : t > 0 ? this.items[this.shuffleList[t]] : this.items[this.shuffleList.last()]) : void 0
    }), Playlist.prototype.refreshItems || (Playlist.prototype.refreshItems = function() {
        for (var e = 0; e < this.items.length; e++) this.items[e].Container.setAttribute("index", e)
    }), Playlist.prototype.setSpinner || (Playlist.prototype.setSpinner = function(e) {
        this.countDOM.className = e ? "inforight spinner icon-spin3" : "inforight"
    }), Playlist.prototype.addItem || (Playlist.prototype.addItem = function(e, t, n) {
        var i = this.items.length;
        this.items.push(new Item(e, t, n)), this.items.last().Container.setAttribute("index", i), this.countDOM.textContent = this.items.length, this === selectedList && playlistDOM.appendChild(this.items.last().Container)
    }), Playlist.prototype.removeItem || (Playlist.prototype.removeItem = function(e) {
        var t = this.items[e];
        t && (t.Container.removeAttribute("onclick"), t === activeItem && getNext(), this === selectedList && playlistDOM.removeChild(t.Container), this.items.splice(e, 1), this.countDOM.textContent = this.items.length, this.refreshItems(), saveStoredPlaylists())
    }), 0 === this.index && (this.Container.classList.add("activePl"), activeList = this), playlistsDOM.appendChild(this.Container)
}

function refreshPlaylists() {
    for (var e = 0; e < playlists.length; e++) playlists[e].Container.setAttribute("index", e)
}

function editPlaylist(e) {
    var t = playlists[e];
    if (t && editedPlaylist !== t) {
        isMobile() || plSortable.option("disabled", !0), editedPlaylist = t, t.Container.classList.add("editing");
        var n = t.Container.children[0];
        localStorage.removeItem("playlist_" + n.getAttribute("title")), n.classList.add("hidden");
        var i = t.Container.children[1];
        i.classList.remove("hidden"), i = i.children[0], i.value = n.textContent, i.select(), i.focus(), i.addEventListener("blur", _renameDone), i.addEventListener("keyup", _renameDone)
    }
}

function selectPlaylist(e) {
    var t = playlists[e];
    t && (QueueVisible || selectedList !== t) && (QueueVisible && toggleQueue(), selectedList && selectedList.Container.classList.remove("activePl"), selectedList = t, selectedList.Container.classList.add("activePl"), refresh())
}

function removePlaylist(e) {
    var t = playlists[e];
    if (t) {
        t.Container.removeAttribute("onclick"), t.Container.removeAttribute("ondblclick"), t !== activeList || queue.hasItems() || (activeList = null, stopPlaying()), t === selectedList && (selectedList = null, t.items = []), t.Container.parentNode.removeChild(t.Container), playlists.removeObj(t);
        for (var n = e; n < playlists.length; n++) playlists[n].index--;
        refresh(), saveStoredPlaylists()
    }
}

function fillStorageIfEmpty() {
    localStorage.getItem("playlist_names") || (localStorage.setItem("playlist_Playlist 1", JSON.stringify([])), localStorage.setItem("playlist_names", JSON.stringify(["Playlist 1"])))
}

function saveStoredPlaylists() {
    localStorage.clear();
    for (var e = [], t = new Date, n = t.getTime(), i = 0; i < playlists.length; i++) {
        e.push(playlists[i].title + "|" + (n + i));
        for (var s = [], l = 0; l < playlists[i].items.length; l++) s.push(playlists[i].items[l].videoId);
        localStorage.setItem("playlist_" + playlists[i].title + "|" + (n + i), JSON.stringify(s))
    }
    localStorage.setItem("playlist_names", JSON.stringify(e))
}

function loadStoredPlaylists() {
    for (var e = JSON.parse(localStorage.getItem("playlist_names")), t = 0; t < e.length; t++) {
        var n = localStorage.getItem("playlist_" + e[t]);
        playlists.push(new Playlist(e[t].split("|")[0]));
        var i = JSON.parse(n);
        fetchItems(i, playlists[t])
    }
    playlists[0] || addPlaylist()
}

function addPlaylist() {
    playlists.push(new Playlist("Playlist " + (playlists.length + 1))), selectPlaylist(playlists.length - 1)
}

function createClickGuard() {
    var e = document.createElement("div");
    document.body.appendChild(e), e.id = "clickGuard", e.className = "screen", e.style.zIndex = "99", e.addEventListener("click", function(e) {
        hideContextMenu(), e.stopPropagation(), e.preventDefault()
    }), e.addEventListener("contextmenu", function(e) {
        hideContextMenu(), e.stopPropagation(), e.preventDefault()
    })
}

function showContextMenu(e, t) {
    hideContextMenu(), e.preventDefault(), e.stopPropagation();
    var n = t || this;
    e = e || window.event, createClickGuard();
    var i = getPosition(e);
    n.classList.add("hover-on"), contextMenu = document.createElement("table"), contextMenu.className = "dark-ui contextmenu", contextMenu.addEventListener("click", hideContextMenu);
    var s = n.getAttribute("index");
    switch (n.getAttribute("_context")) {
        case "playlist-add":
            contextMenu.innerHTML = '<tr class="menuitem" onclick="addPlaylist()"><td class="svgicon menuicon icon-plus"></td><td>New Playlist</td></tr>';
            break;
        case "playlist":
            contextMenu.innerHTML = '<tr class="menuitem" onclick="selectPlaylist(' + s + ')"><td class="svgicon menuicon icon-eye"></td><td>Show</td></tr><tr class="menuitem" onclick="editPlaylist(' + s + ')"><td class="svgicon menuicon icon-pencil"></td><td>Edit</td></tr><tr class="menuitem" onclick="share(' + s + ')"><td class="svgicon menuicon icon-link"></td><td>Share</td></tr><tr class="menuitem" onclick="removePlaylist(' + s + ')"><td class="svgicon menuicon icon-cancel"></td><td>Remove</td></tr>';
            break;
        case "item":
            contextMenu.innerHTML = '<tr class="menuitem" onclick="addToQueue(' + s + ')"><td class="svgicon menuicon icon-list-add"></td><td class="menuEntry">Queue</td></tr><tr class="menuitem" onclick="selectItem(' + s + ')"><td class="svgicon menuicon icon-play"></td><td class="menuEntry">Play</td></tr><tr class="menuitem" onclick="showItemUrl(' + s + ')"><td class="svgicon menuicon icon-link"></td><td class="menuEntry">Get Link</td></tr><tr class="menuitem" onclick="removeItem(' + s + ')"><td class="svgicon menuicon icon-cancel"></td><td class="menuEntry">Remove</td></tr>';
            break;
        case "result":
            contextMenu.innerHTML = (selectedList ? '<tr class="menuitem"><td class="svgicon menuicon icon-plus"></td><td>Add to ' + selectedList.title + "</td></tr>" : '<tr style="display:none;"><td></td><td></td></tr>') + '<tr class="menuitem"><td class="svgicon menuicon icon-level-down"></td><td>To new playlist</td></tr>';
            var l = contextMenu.children[0].children[0];
            l.addEventListener("click", function() {
                addResult(n, null)
            });
            var a = contextMenu.children[0].children[1];
            a.addEventListener("click", function() {
                playlists.push(new Playlist("Playlist " + (playlists.length + 1))), addResult(n, playlists.last())
            });
            break;
        case "queue":
            contextMenu.innerHTML = '<tr class="menuitem" onclick="skipQueueTo(' + s + ')"><td class="svgicon menuicon icon-level-down"></td><td>Skip to this</td></tr><tr class="menuitem" onclick="removeQueueItem(' + s + ')"><td  class="svgicon menuicon icon-cancel"></td><td>Remove</td></tr>';
            break;
        case "about":
            contextMenu.innerHTML = '<tr class="menuitem" onclick="showAbout()"><td class="svgicon menuicon icon-help"></td><td>About</td></tr>';
            break;
        default:
            return void hideContextMenu()
    }
    document.body.appendChild(contextMenu), contextMenu.style.top = i.y + "px", contextMenu.style.left = i.x + "px", fitContextMenu(i), contextMenu.style.opacity = 1
}

function hideContextMenu() {
    contextMenu && (contextMenu.parentNode.removeChild(contextMenu), contextMenu = null, [].forEach.call(document.querySelectorAll(".hover-on"), function(e) {
        e.classList.remove("hover-on")
    }));
    var e = document.getElementById("clickGuard");
    e && e.parentNode.removeChild(e)
}

function fitContextMenu(e) {
    contextMenu && (e.x + contextMenu.offsetWidth > window.innerWidth && (contextMenu.style.left = e.x - (e.x + contextMenu.offsetWidth - window.innerWidth) + "px"), e.y + contextMenu.offsetHeight > window.innerHeight && (contextMenu.style.top = e.y - (e.y + contextMenu.offsetHeight - window.innerHeight) + "px"))
}

function getPosition(e) {
    var t = 0,
        n = 0;
    return e.pageX || e.pageY ? (t = e.pageX, n = e.pageY) : (e.clientX || e.clientY) && (t = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, n = e.clientY + document.body.scrollTop + document.documentElement.scrollTop), {
        x: t,
        y: n
    }
}

function isMobile() {
    return (_mobile = null) && (_mobile = navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)), _mobile
}

function Queue() {
    this.Container = queueDOM, this.items = [], Queue.prototype.hasItems || (Queue.prototype.hasItems = function() {
        return this.items.length > 0
    }), Queue.prototype.pushItem || (Queue.prototype.pushItem = function(e) {
        this.items.push(e), e.Container.classList.toggle("queued"), this.update()
    }), Queue.prototype.popItem || (Queue.prototype.popItem = function() {
        var e = this.items.shift();
        return e.Container.classList.toggle("queued"), this.update(), e
    }), Queue.prototype.removeItemAt || (Queue.prototype.removeItemAt = function(e) {
        var t = this.items.splice(e, 1)[0];
        t.Container.classList.toggle("queued"), this.update()
    }), Queue.prototype.update || (Queue.prototype.update = function() {
        if (this.hasItems()) {
            document.getElementById("queueButton").classList.add("alt"), this.Container.clear();
            for (var e = 0; e < this.items.length; e++) {
                var t = document.createElement("li");
                t.className = "container", t.innerHTML = this.items[e].Container.innerHTML, t.setAttribute("index", e), t.setAttribute("_context", "queue"), this.Container.appendChild(t)
            }
        } else document.getElementById("queueButton").classList.remove("alt"), this.Container.innerHTML = '<div class="empty-queue"><span>Empty Queue</span></div>'
    }), Queue.prototype.show || (Queue.prototype.show = function() {
        this.update()
    }), Queue.prototype.close || (Queue.prototype.close = function() {})
}

function addToQueue(e) {
    var t = selectedList.items[e];
    t && queue.pushItem(t), isPlaying || getNext()
}

function removeQueueItem(e) {
    queue.removeItemAt(e)
}

function skipQueueTo(e) {
    var t = queue.items[e];
    if (t) {
        for (var n = 0; e > n; n++) queue.popItem();
        playVideo(queue.popItem())
    }
}

function toggleQueue() {
    QueueVisible = !QueueVisible;
    var e = document.getElementById("queueButton");
    e.classList.toggle("queueactive"), QueueVisible ? (document.getElementById("PlaylistContainer").style.left = "-100%", queue.update()) : (document.getElementById("PlaylistContainer").style.left = "0", refresh())
}

function showQueue() {
    queue.show()
}

function share(e) {
    var t = playlists[e];
    if (!t) return !1;
    var n = document.createElement("div"),
        i = document.createElement("input");
    i.className = "selectable textbox", n.appendChild(i);
    for (var s = !1, l = window.location.host + "#" + t.title + "=", a = 0; a < t.items.length; a++)
        if (l += (a > 0 ? "," : "") + t.items[a].videoId, l.length > 6910) {
            s = !0;
            break
        }
    t.items.length > 0 ? short.shorten(encodeURIComponent(l), function(e) {
        i.value = e.shorturl, i.focus(), i.select()
    }) : i.value = "Empty list :(", showDim();
    var o = document.createElement("span");
    o.className = "panel dark-ui smaller", o.addEventListener("click", function(e) {
        e.stopPropagation()
    }), o.addEventListener("contextmenu", function(e) {
        e.stopPropagation()
    }), dimmer.appendChild(o), o.innerHTML = "<h2>Share playlist</h2><p>" + t.title + "</p>", o.appendChild(n), s && (o.innerHTML += '<p class="smaller">Some items were left out (list too long)</p>'), i.focus(), i.select()
}

function showItemUrl(e) {
    showDim();
    var t = document.createElement("span");
    dimmer.appendChild(t), t.className = "panel dark-ui smaller", t.innerHTML = "<h2>Link to video </h2><p>" + selectedList.items[e].title + "</p", t.addEventListener("click", function(e) {
        e.stopPropagation()
    }), t.addEventListener("contextmenu", function(e) {
        e.stopPropagation()
    });
    var n = document.createElement("input");
    t.appendChild(n), n.className = "selectable textbox", n.value = "https://youtu.be/" + selectedList.items[e].videoId, n.focus(), n.select()
}

function showAbout() {
    showDim();
    var e = document.createElement("span");
    e.className = "panel dark-ui smaller", e.innerHTML = '<h2>Playeri.net</h2><p>&copy; Antti Lamminsalo 2014 - 2015</p><p>antti.lamminsalo@playeri.net</p></br><h2>Special thanks</h2><p><a href="https://fortawesome.github.io/Font-Awesome/">Font Awesome</a></p><p><a href="http://www.entypo.com/">Entypo</a></p><p><a href="https://modernpictograms.com/">Modern Pictograms</a></p><p><a href="http://fontello.com">Fontello</a></p>', e.addEventListener("click", function(e) {
        e.stopPropagation()
    }), e.addEventListener("contextmenu", function(e) {
        e.stopPropagation()
    }), dimmer.appendChild(e)
}

function showDim() {
    dimmer && (clearTimeout(dimtimer), document.body.removeChild(dimmer)), dimmer = document.createElement("div"), dimmer.id = "screendim", dimmer.className = "centerX centerY", dimmer.addEventListener("click", hideOverlayPlayer), dimmer.addEventListener("contextmenu", hideOverlayPlayer, !0), dimmer.style.zIndex = 200, document.body.appendChild(dimmer), dimmer.style.opacity = 0, window.getComputedStyle(dimmer).opacity, dimmer.style.opacity = 1
}

function showOverlayPlayer() {
    showDim();
    var e = document.getElementById("player-wrap");
    e.style.height = "80%", e.style.width = "80%", e.style.zIndex = 300
}

function hideOverlayPlayer(e) {
    var t = document.getElementById("player-wrap");
    t.style.height = "0", t.style.width = "0", t.style.zIndex = -1, unDim(), e.stopPropagation(), e.preventDefault()
}

function unDim() {
    dimmer && (dimmer.style.opacity = 0, dimtimer = setTimeout(function() {
        dimmer && (document.body.removeChild(dimmer), dimmer = null)
    }, 400), hideContextMenu())
}

function getItemThumb(e) {
    var t = new XMLHttpRequest;
    t.onreadystatechange = function() {
        if (4 === this.readyState) {
            var e = JSON.parse(t.responseText);
            document.getElementById("current-img").setAttribute("src", e.items[0].snippet.thumbnails["default"].url)
        }
    };
    var n = "https://www.googleapis.com/youtube/v3/videos?key=" + APIkey + "&part=snippet&fields=items(snippet(thumbnails(default)))&id=" + e.videoId;
    t.open("GET", n, !0), t.send()
}

function showSettings() {
    showDim(), settings || (settings = document.createElement("span"), settings.className = "panel dark-ui", settings.innerHTML = '<h2>Settings</h2><table><tr><td class="smaller">Highest quality</td><td id="qualityButton" class="switch"><a></a></td></tr><tr><td class="smaller">Switch theme</td><td id="themeButton" class="switch"><a></a></td></tr></table>', settings.addEventListener("click", function(e) {
        e.stopPropagation()
    }), settings.addEventListener("contextmenu", function(e) {
        e.stopPropagation();
    }), settings.getElementsByClassName("switch")[0].addEventListener("click", toggleQuality), settings.getElementsByClassName("switch")[1].addEventListener("click", toggleTheme)), dimmer.appendChild(settings)
}

function toggleQuality() {
    HighQuality = !HighQuality, this.children[0].classList.toggle("activeknob"), this.children[0].style.left = HighQuality ? this.offsetWidth - 4 - this.children[0].offsetWidth + "px" : this.children[0].style.left = "0", isPlaying && player.setPlaybackQuality(HighQuality ? player.getAvailableQualityLevels()[0] : "default")
}

function toggleTheme() {
    OldTheme = !OldTheme, this.children[0].classList.toggle("activeknob"), this.children[0].style.left = OldTheme ? this.offsetWidth - 4 - this.children[0].offsetWidth + "px" : this.children[0].style.left = "0", document.getElementById("css_theme").href = OldTheme ? "css/dark.min.css" : "css/modernflat.min.css"
}
var APIkey = "AIzaSyAvUkwnZgyRixQ6oM86DzvHBTU4nKop9uQ",
    playlistDOM = document.getElementById("playlist"),
    playlistsDOM = document.getElementById("playlists"),
    resultsDOM = document.getElementById("searchList"),
    queueDOM = document.getElementById("queuelist");
window.onload = function() {
    if (isMobile()) {
        var e = document.getElementById("playlists-wrap");
        e.style.width = "20%", document.getElementById("addPlaylistButton").style.visibility = "visible"
    } else createSortables()
};
var lptimer, plSortable, player, playerVisible = !1,
    HighQuality = !1,
    isPlaying = !1,
    tokenList = "",
    nextToken = "",
    _scrollEvent = function() {
        this.scrollTop + this.offsetHeight > this.scrollHeight - 4 && nextToken && (-1 === tokenList.indexOf(nextToken) && (tokenList += nextToken + "|", search(nextToken)), document.getElementById("results-wrap").removeEventListener("scroll", _scrollEvent))
    },
    intervalId = null,
    errorCounter = 0,
    ShuffleOn = !1,
    activeItem = null,
    playlists = [],
    activeList = null,
    selectedList = null;
Node.prototype.clear = function() {
    for (; this.firstChild;) this.removeChild(this.firstChild)
};
var editedPlaylist, _renameDone = function(e) {
    if (!e || 13 === e.keyCode || "blur" === e.type) {
        this.removeEventListener("blur", _renameDone), this.removeEventListener("keyup", _renameDone), editedPlaylist.Container.classList.remove("editing");
        var t = editedPlaylist.titleDOM,
            n = editedPlaylist.renameDOM;
        t.classList.remove("hidden"), n.classList.add("hidden"), n = n.children[0], n.value && (t.textContent = n.value, editedPlaylist.title = n.value, editedPlaylist.renamed = !0, saveStoredPlaylists(), editedPlaylist = null), isMobile() || plSortable.option("disabled", !1)
    }
};
Array.prototype.last = function() {
    return this[this.length - 1]
}, Array.prototype.dragSort = function(e, t) {
    var n = this.splice(e, 1)[0];
    this.splice(t, 0, n)
}, Array.prototype.removeObj = function(e) {
    var t = this.indexOf(e);
    return -1 === t ? !1 : (this.splice(t, 1), !0)
};
var contextMenu = null,
    _mobile = null,
    queue = new Queue,
    QueueVisible = !1,
    short = yourls.connect("http://playeri.net/public_api.php"),
    dimmer = null,
    dimtimer, settings = null,
    OldTheme = !1;