(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{gKLJ:function(t,l,s){"use strict";s.r(l);var i=s("ofXK"),e=s("fXoL"),n=s("jhN1"),a=s("tk/3");let r=(()=>{class t{constructor(t){this.http=t,this.featuredPlaylistsUrl="https://portal.organicfruitapps.com/programming-guides/v2/us_en-us/featured-playlists.json"}getFeaturedPlaylists(){return this.http.get(this.featuredPlaylistsUrl)}}return t.\u0275fac=function(l){return new(l||t)(e.Kb(a.a))},t.\u0275prov=e.Bb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),p=(()=>{class t{}return t.\u0275fac=function(l){return new(l||t)},t.\u0275cmp=e.zb({type:t,selectors:[["app-playlist"]],inputs:{playlist:"playlist"},decls:10,vars:8,consts:[[1,"playlist","container"],[1,"playlist__row","row"],[1,"playlist__left","col-5"],["target","\u201d_blank\u201d",3,"href","title"],[1,"playlist__image",3,"src","alt"],[1,"playlist__right","col-7"],["target","\u201d_blank\u201d",1,"playlist__link",3,"href","title"],[1,"playlist__extra"]],template:function(t,l){1&t&&(e.Ib(0,"div",0),e.Ib(1,"div",1),e.Ib(2,"div",2),e.Ib(3,"a",3),e.Gb(4,"img",4),e.Hb(),e.Hb(),e.Ib(5,"div",5),e.Ib(6,"a",6),e.Vb(7),e.Hb(),e.Ib(8,"span",7),e.Vb(9),e.Hb(),e.Hb(),e.Hb(),e.Hb()),2&t&&(e.wb(3),e.Qb("href",null==l.playlist?null:l.playlist.url,e.Sb)("title",null==l.playlist?null:l.playlist.name),e.wb(1),e.Qb("src",null==l.playlist?null:l.playlist.artwork,e.Sb)("alt",null==l.playlist?null:l.playlist.name),e.wb(2),e.Qb("href",null==l.playlist?null:l.playlist.url,e.Sb)("title",null==l.playlist?null:l.playlist.name),e.wb(1),e.Xb("",null==l.playlist?null:l.playlist.name," "),e.wb(2),e.Wb(null==l.playlist?null:l.playlist.curator_name))},styles:[".playlist__row[_ngcontent-%COMP%]{padding-bottom:10px}.playlist__left[_ngcontent-%COMP%]{padding:0}.playlist__image[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:6px}.playlist__link[_ngcontent-%COMP%]{display:block}.playlist__extra[_ngcontent-%COMP%]{color:#8e8e93;font-size:13px;font-weight:400}"]}),t})();function o(t,l){if(1&t&&(e.Ib(0,"div",4),e.Gb(1,"app-playlist",5),e.Hb()),2&t){const t=l.$implicit;e.wb(1),e.Qb("playlist",t)}}let c=(()=>{class t{constructor(t,l,s){this.titleService=t,this.playlistsService=l,this.changeDetectorRef=s}ngOnInit(){this.playlistsSubscription=this.playlistsService.getFeaturedPlaylists().subscribe(t=>{const l=t.featuredPlaylists;this.setTitle(l.name),this.playlists=l.content,this.changeDetectorRef.detectChanges()})}ngOnDestroy(){this.playlistsSubscription&&this.playlistsSubscription.unsubscribe()}setTitle(t){this.title=t,this.titleService.setTitle(t)}}return t.\u0275fac=function(l){return new(l||t)(e.Fb(n.b),e.Fb(r),e.Fb(e.h))},t.\u0275cmp=e.zb({type:t,selectors:[["app-playlists"]],decls:5,vars:2,consts:[[1,"featured-playlists","container"],[1,"featured-playlists__title"],[1,"featured-playlists__row","row"],["class","col-12 col-sm-6 col-lg-4 playlists-view__wrapper",4,"ngFor","ngForOf"],[1,"col-12","col-sm-6","col-lg-4","playlists-view__wrapper"],[3,"playlist"]],template:function(t,l){1&t&&(e.Ib(0,"div",0),e.Ib(1,"h1",1),e.Vb(2),e.Hb(),e.Ib(3,"div",2),e.Ub(4,o,2,1,"div",3),e.Hb(),e.Hb()),2&t&&(e.wb(2),e.Wb(l.title),e.wb(2),e.Qb("ngForOf",l.playlists))},directives:[i.h,p],styles:[".featured-playlists[_ngcontent-%COMP%]{max-width:1280px}.featured-playlists__title[_ngcontent-%COMP%]{font-size:24px;font-weight:600;color:#000;border-bottom:1px solid #8e8e93;padding:15px 0;margin:0}.featured-playlists__row[_ngcontent-%COMP%]{padding-top:20px}.featured-playlists__wrapper[_ngcontent-%COMP%]{padding:10px}"]}),t})();var b=s("tyNb");let u=(()=>{class t{}return t.\u0275mod=e.Db({type:t}),t.\u0275inj=e.Cb({factory:function(l){return new(l||t)},providers:[],imports:[[i.b,a.b]]}),t})(),y=(()=>{class t{}return t.\u0275mod=e.Db({type:t}),t.\u0275inj=e.Cb({factory:function(l){return new(l||t)},imports:[[i.b]]}),t})();s.d(l,"PlaylistsViewModule",(function(){return d}));let d=(()=>{class t{}return t.\u0275mod=e.Db({type:t}),t.\u0275inj=e.Cb({factory:function(l){return new(l||t)},imports:[[i.b,u,y,b.a.forChild([{path:"",component:c}])]]}),t})()}}]);