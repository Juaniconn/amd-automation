(this["webpackJsonpamd-automation"]=this["webpackJsonpamd-automation"]||[]).push([[0],{121:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(9),i=a.n(o),c=a(11),l=a(59),m=a(83),s=a(6),d=a(152),u=a(166),p=a(154),g=a(156),b=a(157),h=a(168),f=a(68),E=a.n(f),y=[{id:1,name:"Home",link:"/"},{id:2,name:"About",link:"/about"},{id:3,name:"Service",link:"/services"},{id:4,name:"Projects",link:"/projects"},{id:5,name:"Contact",link:"/contact"}],v=Object(d.a)((function(e){var t,a;return{header:{backgroundColor:"white"},headerWrapper:Object(s.a)({},e.breakpoints.down("sm"),{justifyContent:"center"}),nav:Object(s.a)({},e.breakpoints.down("sm"),{display:"none"}),navList:Object(s.a)({display:"flex",padding:"0",margin:"0"},e.breakpoints.down("sm"),{flexDirection:"column"}),navListItem:Object(s.a)({padding:"2rem 1rem",display:"block",fontSize:"0.8rem",cursor:"pointer",color:"#222","&:hover":{textDecoration:"none",backgroundColor:"#fab700",color:"white"}},e.breakpoints.down("sm"),{color:"white",textAlign:"center"}),hamburgerButton:(a={display:"none",alignItems:"center"},Object(s.a)(a,e.breakpoints.down("sm"),{display:"flex"}),Object(s.a)(a,"& .MuiDrawer-paperAnchorLeft",(t={width:"10rem"},Object(s.a)(t,e.breakpoints.down("sm"),{display:"flex",justifyContent:"center"}),Object(s.a)(t,"backgroundColor","#222"),t)),a)}})),k=Object(c.g)((function(e){var t=v(),a=n.a.useState({left:!1}),r=Object(m.a)(a,2),o=r[0],i=r[1],c=function(t,a,r){return function(n){("keydown"!==n.type||"Tab"!==n.key&&"Shift"!==n.key)&&(i(Object(l.a)(Object(l.a)({},o),{},Object(s.a)({},t,a))),e.history.push(r))}};return n.a.createElement(u.a,{className:t.header,position:"sticky",top:0,left:0,right:0,zIndex:1e3},n.a.createElement(p.a,{fixed:!0},n.a.createElement(u.a,{className:t.headerWrapper,display:"flex",justifyContent:"space-between",alignItems:"center"},n.a.createElement("img",{onClick:function(){return e.history.push("/")},style:{cursor:"pointer"},src:"https://raw.githubusercontent.com/ElJuanii00/AMD_Autoamtion/master/images_originals/amd_logo_transparent.png",width:"140rem",alt:""}),n.a.createElement("nav",{className:t.nav},n.a.createElement("ul",{className:t.navList},y.map((function(a){return n.a.createElement("li",{key:a.id,style:{listStyle:"none"}},n.a.createElement(g.a,{onClick:function(){return e.history.push(a.link)},className:t.navListItem},a.name))})))),n.a.createElement(b.a,{className:t.hamburgerButton,style:{position:"absolute",right:"0",color:"#222"},onClick:c("left",!0)},n.a.createElement(E.a,null)),n.a.createElement(h.a,{className:t.hamburgerButton,anchor:"left",open:o.left,onClose:c("left",!1)},n.a.createElement("ul",{className:t.navList},y.map((function(e){return n.a.createElement("li",{key:e.id,style:{listStyle:"none"}},n.a.createElement(g.a,{onClick:c("left",!1,e.link),className:t.navListItem},e.name))})))))))})),I=a(170),x=a(123),w=Object(d.a)((function(e){return{breadcrumbs:{padding:"5rem 0",backgroundImage:"url('https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",backgroundPosition:"center center",backgroundSize:"cover",position:"relative","&::before":{position:"absolute",content:"''",top:"0",left:"0",right:"0",bottom:"0",backgroundColor:"rgba(0,0,0,0.5)"}},breadcrumbsWrapper:Object(s.a)({position:"relative",color:"white"},e.breakpoints.down("sm"),{justifyContent:"center"})}})),j=Object(c.g)((function(e){var t=w();return n.a.createElement(u.a,{className:t.breadcrumbs},n.a.createElement(p.a,{fixed:!0},n.a.createElement(I.a,{className:t.breadcrumbsWrapper,"aria-label":"breadcrumb"},n.a.createElement(g.a,{color:"inherit",href:"",onClick:function(){return e.history.push("/home")}},"Home"),n.a.createElement(x.a,{style:{textTransform:"capitalize"},color:"inherit"},e.path))))})),N=Object(d.a)((function(e){var t;return{hero:{backgroundImage:"url('https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",backgroundPosition:"center center",backgroundSize:"cover",position:"relative","&::before":{position:"absolute",content:"''",top:"0",left:"0",right:"0",bottom:"0",backgroundColor:"rgba(0,0,0,0.5)"}},heroItem:{margin:"0.5rem 0",color:"white"},heroItemButton:(t={margin:"0.5rem 0",backgroundColor:"#fab700",color:"white"},Object(s.a)(t,e.breakpoints.down("xs"),{width:"100%"}),Object(s.a)(t,"&:hover",{backgroundColor:"#C08000"}),t)}})),C=function(){var e=N();return n.a.createElement(u.a,{className:e.hero},n.a.createElement(p.a,{fixed:!0},n.a.createElement(u.a,{height:"calc(100vh - 5rem)",display:"flex",flexDirection:"column",justifyContent:"center",textAlign:"center",maxWidth:"60rem",margin:"0 auto",position:"relative"},n.a.createElement(x.a,{className:e.heroItem,variant:"subtitle1"},"Don't look further, here is the key"),n.a.createElement(x.a,{className:e.heroItem,variant:"h2"},"We're industrial solution"),n.a.createElement(x.a,{className:e.heroItem,variant:"body1"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. sed do eiusmod tempor incididunt"),n.a.createElement("div",null,n.a.createElement(b.a,{className:e.heroItemButton,variant:"text"},"Get started")))))},B=a(162),O=a(159),W=a(160),S=a(161),T=[{id:1,title:"Maintenance",description:"inappropriate behavior is often laughed off as \u201cboys will be boys,\u201d women face higher conduct standards especially in the workplace. That\u2019s why.",icon:n.a.createElement(O.a,null)},{id:2,title:"Residental Service",description:"inappropriate behavior is often laughed off as \u201cboys will be boys,\u201d women face higher conduct standards especially in the workplace. That\u2019s why.",icon:n.a.createElement(W.a,null)},{id:3,title:"Commercial Service",description:"inappropriate behavior is often laughed off as \u201cboys will be boys,\u201d women face higher conduct standards especially in the workplace. That\u2019s why.",icon:n.a.createElement(S.a,null)}],A=Object(d.a)((function(e){return{values:{padding:"5rem 0",backgroundColor:"white"},valuesItem:{color:"#222222"}}})),M=function(){var e=A();return n.a.createElement(u.a,{className:e.values},n.a.createElement(p.a,{fixed:!0},n.a.createElement(B.a,{container:!0,spacing:3},T.map((function(t){return n.a.createElement(B.a,{key:t.id,item:!0,xs:12,md:4},n.a.createElement(u.a,{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},t.icon,n.a.createElement(x.a,{className:e.valuesItem,variant:"h6"},t.title),n.a.createElement(x.a,{className:e.valuesItem,variant:"body1"},t.description)))})))))},D=Object(d.a)((function(e){var t;return{video:{padding:"5rem 0",backgroundColor:"#f9f9ff"},videoWrapper:Object(s.a)({},e.breakpoints.down("xs"),{textAlign:"center"}),videoItem:{margin:"0.5rem 0",color:"#222222"},videoItemButton:(t={margin:"0.5rem 0",color:"white",backgroundColor:"#fab700"},Object(s.a)(t,e.breakpoints.down("xs"),{width:"100%"}),Object(s.a)(t,"&:hover",{backgroundColor:"#C08000"}),t),videoItemSubtitle:{margin:"0.5rem 0",color:"#fab700"},videoItemBody:{margin:"0.5rem 0",color:"#777",fontWeight:"lighter"},videoItemYouTube:{height:"0",overflow:"hidden",paddingBottom:"56.25%",position:"relative","& iframe, & object, & embed":{height:"100%",left:"0",position:"absolute",top:"0",width:"100%"}}}})),L=function(){var e=D();return n.a.createElement(u.a,{className:e.video},n.a.createElement(p.a,{fixed:!0},n.a.createElement(B.a,{container:!0,spacing:3},n.a.createElement(B.a,{item:!0,sm:12,md:6,className:e.videoWrapper},n.a.createElement(x.a,{className:e.videoItemSubtitle,variant:"subtitle1"},"Brand new app to blow your mind"),n.a.createElement(x.a,{className:e.videoItem,variant:"h3"},"We\u2019ve made a life that will change you"),n.a.createElement(x.a,{className:e.videoItem,variant:"subtitle2"},"We are here to listen from you deliver exellence"),n.a.createElement(x.a,{className:e.videoItemBody,variant:"body1"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."),n.a.createElement("div",null,n.a.createElement(b.a,{className:e.videoItemButton,variant:"text"},"Get started"))),n.a.createElement(B.a,{item:!0,sm:12,md:6,style:{width:"100%"}},n.a.createElement(u.a,{className:e.videoItemYouTube},n.a.createElement("iframe",{title:"1",src:"https://www.youtube.com/embed/kFdvebfJvMo",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))))))},F=Object(d.a)((function(e){return{sector:{padding:"5rem 0",backgroundColor:"white"},sectorWrapper:Object(s.a)({},e.breakpoints.down("xs"),{textAlign:"center"}),sectorItem:{margin:"0.5rem 0",color:"#222222"},sectorItemSubtitle:{margin:"0.5rem 0",color:"#777"},sectorItemBody:{margin:"0.5rem 0",color:"#777",fontWeight:"lighter"},sectorItemImage:Object(s.a)({width:"100%",height:"15rem",objectFit:"cover"},e.breakpoints.down("xs"),{height:"12rem"})}})),P=function(){var e=F();return n.a.createElement(u.a,{className:e.sector},n.a.createElement(p.a,{fixed:!0},n.a.createElement(u.a,{display:"flex",flexDirection:"column",alignItems:"center",margin:"0 0 2.5rem",className:e.sectorWrapper},n.a.createElement(x.a,{className:e.sectorItem,variant:"h3"},"Our Capturing Market Sectors"),n.a.createElement(x.a,{className:e.sectorItemSubtitle,variant:"subtitle1"},"Who are in extremely love with eco friendly system.")),n.a.createElement(B.a,{container:!0,spacing:3},n.a.createElement(B.a,{item:!0,sm:12,md:4,className:e.sectorWrapper},n.a.createElement("img",{src:"https://images.pexels.com/photos/3815585/pexels-photo-3815585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",className:e.sectorItemImage,alt:""}),n.a.createElement(x.a,{className:e.sectorItem,variant:"h5"},"Automotive Engineering"),n.a.createElement(x.a,{className:e.sectorItemBody,variant:"body1"},"inappropriate behavior is often laughed off as \u201cboys will be boys,\u201d women face higher conduct women face higher conduct.")),n.a.createElement(B.a,{item:!0,sm:12,md:4,className:e.sectorWrapper},n.a.createElement("img",{src:"https://images.pexels.com/photos/3734606/pexels-photo-3734606.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",className:e.sectorItemImage,alt:""}),n.a.createElement(x.a,{className:e.sectorItem,variant:"h5"},"Construction & Engineering"),n.a.createElement(x.a,{className:e.sectorItemBody,variant:"body1"},"inappropriate behavior is often laughed off as \u201cboys will be boys,\u201d women face higher conduct women face higher conduct.")),n.a.createElement(B.a,{item:!0,sm:12,md:4,className:e.sectorWrapper},n.a.createElement("img",{src:"https://images.pexels.com/photos/3734609/pexels-photo-3734609.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",className:e.sectorItemImage,alt:""}),n.a.createElement(x.a,{className:e.sectorItem,variant:"h5"},"Industrial Engineering"),n.a.createElement(x.a,{className:e.sectorItemBody,variant:"body1"},"inappropriate behavior is often laughed off as \u201cboys will be boys,\u201d women face higher conduct women face higher conduct.")))))},q=[{id:1,title:"Projects Completed",description:"5K+"},{id:2,title:"Happy Clients",description:"959"}],z=Object(d.a)((function(e){return{statistics:{padding:"5rem 0",backgroundImage:"url('https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",backgroundPosition:"center center",backgroundSize:"cover",position:"relative","&::before":{position:"absolute",content:"''",top:"0",left:"0",right:"0",bottom:"0",backgroundColor:"rgba(0,0,0,0.5)"}},statisticsWrapper:{position:"relative"},statisticsItemWrapper:{width:"7.5rem",height:"7.5rem",border:"2px solid #fab700",borderRadius:"50%"},statisticsItemBody:{textAlign:"center",color:"white",backgroundColor:"#fab700",borderRadius:"50%",lineHeight:"5rem",width:"5rem"},statisticsItem:{textAlign:"center",color:"white"}}})),H=function(){var e=z();return n.a.createElement(u.a,{className:e.statistics},n.a.createElement(p.a,{fixed:!0},n.a.createElement(B.a,{container:!0,spacing:3},q.map((function(t){return n.a.createElement(B.a,{key:t.id,className:e.statisticsWrapper,item:!0,xs:12,sm:6},n.a.createElement(u.a,{marginBottom:"1rem",display:"flex",justifyContent:"center",alignItems:"center"},n.a.createElement(u.a,{className:e.statisticsItemWrapper,display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"},n.a.createElement(x.a,{className:e.statisticsItemBody,variant:"body1"},t.description))),n.a.createElement(x.a,{className:e.statisticsItem,variant:"h6"},t.title))})))))},U=[{id:1,url:"https://images.pexels.com/photos/2451568/pexels-photo-2451568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",gridColumn:!0},{id:2,url:"https://images.pexels.com/photos/3183198/pexels-photo-3183198.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",gridColumn:!1},{id:3,url:"https://images.pexels.com/photos/3774042/pexels-photo-3774042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",gridColumn:!1},{id:4,url:"https://images.pexels.com/photos/3182822/pexels-photo-3182822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",gridColumn:!0}],R=Object(d.a)((function(e){var t;return{projects:{padding:"5rem 0",backgroundColor:"white"},projectsWrapper:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(18rem, 1fr))",gap:"2rem"},projectsItemImage:(t={width:"100%",height:"20rem",objectFit:"cover",margin:"0",position:"relative",cursor:"pointer"},Object(s.a)(t,e.breakpoints.down("sm"),{height:"12rem"}),Object(s.a)(t,"&::before",{position:"absolute",content:"''",top:"0",left:"0",right:"0",bottom:"0",backgroundColor:"rgba(0,0,0,0.2)",transition:"450ms all",zIndex:"1"}),Object(s.a)(t,"&:hover:before",{backgroundColor:"rgba(255,255,255,0.2)"}),t),projectsItemImageA:Object(s.a)({gridColumn:"span 2"},e.breakpoints.down("sm"),{gridColumn:"span 1"}),projectsItemTitle:{margin:"0.5rem 0",color:"#222222"},projectsItemSubTitle:{margin:"0.5rem 0",color:"#777"}}})),J=function(){var e=R();return n.a.createElement(u.a,{className:e.projects},n.a.createElement(p.a,{fixed:!0},n.a.createElement(u.a,{display:"flex",flexDirection:"column",alignItems:"center",margin:"0 0 2.5rem",textAlign:"center"},n.a.createElement(x.a,{className:e.projectsItemTitle,variant:"h3"},"Latest Finished Projects"),n.a.createElement(x.a,{className:e.projectsItemSubtitle,variant:"subtitle1"},"Who are in extremely love with eco friendly system.")),n.a.createElement(u.a,{className:e.projectsWrapper},U.map((function(t){return n.a.createElement("figure",{key:t.id,className:"".concat(e.projectsItemImage," ").concat(t.gridColumn?e.projectsItemImageA:null)},n.a.createElement("img",{width:"100%",height:"100%",style:{objectFit:"cover"},src:t.url,alt:""}))})))))},K=a(169),_=[{id:1,name:"Fannie Rowe",description:"Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.",raiting:5},{id:2,name:"Fannie Rowe",description:"Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.",raiting:3},{id:3,name:"Fannie Rowe",description:"Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.",raiting:4}],G=Object(d.a)((function(e){return{feedback:{padding:"5rem 0"},feedbackBackground:{padding:"5rem 0",backgroundImage:"url('https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",backgroundPosition:"center center",backgroundSize:"cover",position:"relative","&::before":{position:"absolute",content:"''",top:"0",left:"0",right:"0",bottom:"0",backgroundColor:"rgba(0,0,0,0.5)"}},feedbackItemTitle:{margin:"0.5rem 0",color:"white"},feedbackItemSubtitle:{margin:"0.5rem 0",color:"white"},feedbackItemBody:{margin:"0.5rem 0",color:"white",fontWeight:"lighter"},feedbackBackgroundItemTitle:{margin:"0.5rem 0",color:"#222"},feedbackBackgroundItemSubtitle:{margin:"0.5rem 0",color:"#222"},feedbackBackgroundItemBody:{margin:"0.5rem 0",color:"#777",fontWeight:"lighter"},feedbackWrapper:Object(s.a)({position:"relative"},e.breakpoints.down("xs"),{textAlign:"center"})}})),Q=function(e){var t=G();return n.a.createElement(u.a,{className:e.feedbackBackground?t.feedbackBackground:t.feedback},n.a.createElement(p.a,{fixed:!0},n.a.createElement(u.a,{className:t.feedbackWrapper,display:"flex",flexDirection:"column",alignItems:"center",margin:"0 0 2.5rem",textAlign:"center"},n.a.createElement(x.a,{className:e.feedbackBackground?t.feedbackItemTitle:t.feedbackBackgroundItemTitle,variant:"h3"},"Enjoy our Client\u2019s Feedback"),n.a.createElement(x.a,{className:e.feedbackBackground?t.feedbackItemSubtitle:t.feedbackBackgroundItemSubtitle,variant:"subtitle1"},"Who are in extremely love with eco friendly system.")),n.a.createElement(B.a,{container:!0,className:t.feedbackWrapper,spacing:3},_.map((function(a){return n.a.createElement(B.a,{item:!0,key:a.id,xs:12,md:4},n.a.createElement(x.a,{className:e.feedbackBackground?t.feedbackItemSubtitle:t.feedbackBackgroundItemSubtitle,component:"legend"},a.name),n.a.createElement(K.a,{name:"read-only",value:a.raiting,readOnly:!0}),n.a.createElement(x.a,{className:e.feedbackBackground?t.feedbackItemBody:t.feedbackBackgroundItemBody,variant:"body1"},a.description))})))))},Y=a(70),V=a.n(Y),X=a(71),Z=a.n(X),$=a(54),ee=a.n($),te=[{id:1,avatar:n.a.createElement(ee.a,null),author:"Mark Wiens",datePublished:"13th Dec",totalLikes:"15",totalComments:"04",blogTitle:"Portable fashion for young women",blogDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea.",url:"https://images.pexels.com/photos/135020/pexels-photo-135020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},{id:2,avatar:n.a.createElement(ee.a,null),author:"Mark Wiens",datePublished:"13th Dec",totalLikes:"15",totalComments:"04",blogTitle:"Portable fashion for young women",blogDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea.",url:"https://images.pexels.com/photos/3787300/pexels-photo-3787300.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},{id:3,avatar:n.a.createElement(ee.a,null),author:"Mark Wiens",datePublished:"13th Dec",totalLikes:"15",totalComments:"04",blogTitle:"Portable fashion for young women",blogDescription:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip exea.",url:"https://images.pexels.com/photos/3815573/pexels-photo-3815573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"}],ae=Object(d.a)((function(e){var t;return{blog:{padding:"5rem 0",backgroundColor:"white"},blogWrapper:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(18rem, 1fr))",gap:"2rem"},blogItem:{},blogItemTitle:{margin:"0.5rem 0",color:"#222222"},blogItemSubtitle:{margin:"0.5rem 0",color:"#777"},blogItemBody:{margin:"0.5rem 0",color:"#777",fontWeight:"lighter"},blogItemFigure:(t={width:"100%",height:"20rem"},Object(s.a)(t,e.breakpoints.down("sm"),{height:"15rem"}),Object(s.a)(t,"margin","0"),t),blogItemContentWrapper:Object(s.a)({},e.breakpoints.down("xs"),{textAlign:"center"})}})),re=function(){var e=ae();return n.a.createElement(u.a,{className:e.blog},n.a.createElement(p.a,{fixed:!0},n.a.createElement(u.a,{display:"flex",flexDirection:"column",alignItems:"center",margin:"0 0 2.5rem",textAlign:"center"},n.a.createElement(x.a,{className:e.blogItemTitle,variant:"h3"},"Latest Posts From Our Blog"),n.a.createElement(x.a,{className:e.blogItemSubtitle,variant:"subtitle1"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")),n.a.createElement(u.a,{className:e.blogWrapper},te.map((function(t){return n.a.createElement(u.a,{key:t.id},n.a.createElement("figure",{className:e.blogItemFigure},n.a.createElement("img",{width:"100%",height:"100%",style:{objectFit:"cover"},src:t.url,alt:""})),n.a.createElement(u.a,{display:"flex",justifyContent:"space-between",alignItems:"center",height:"3rem"},n.a.createElement(u.a,{display:"flex",alignItems:"center"},t.avatar,n.a.createElement(x.a,{variant:"subtitle1",style:{marginLeft:"0.15rem"}},t.author)),n.a.createElement(u.a,{display:"flex",alignItems:"center"},n.a.createElement(x.a,{variant:"caption"},t.datePublished),n.a.createElement(x.a,{variant:"caption",style:{display:"flex",alignItems:"center",marginLeft:"0.3rem"}},n.a.createElement(V.a,{fontSize:"small",style:{marginRight:"0.15rem"}}),t.totalLikes),n.a.createElement(x.a,{variant:"caption",style:{display:"flex",alignItems:"center",marginLeft:"0.3rem"}},n.a.createElement(Z.a,{fontSize:"small",style:{marginRight:"0.15rem"}}),t.totalComments))),n.a.createElement(u.a,{className:e.blogItemContentWrapper},n.a.createElement(x.a,{className:e.blogItemTitle,variant:"h6"},t.blogTitle),n.a.createElement(x.a,{className:e.blogItemBody,variant:"body1"},t.blogDescription)))})))))},ne=a(165),oe=a(163),ie=a(72),ce=a(73),le=a(84),me=a(82),se=a(46),de=function(e){Object(le.a)(a,e);var t=Object(me.a)(a);function a(){var e;Object(ie.a)(this,a);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{}},e.onMarkerClick=function(t,a,r){return e.setState({selectedPlace:t,activeMarker:a,showingInfoWindow:!0})},e.onClose=function(t){e.state.showingInfoWindow&&e.setState({showingInfoWindow:!1,activeMarker:null})},e}return Object(ce.a)(a,[{key:"render",value:function(){return n.a.createElement(se.Map,{google:this.props.google,zoom:18,style:{position:"absolute"},initialCenter:{lat:31.733415,lng:-106.449396}},n.a.createElement(se.Marker,{onClick:this.onMarkerClick,name:"AMD Automation"}),n.a.createElement(se.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow,onClose:this.onClose},n.a.createElement("div",null,n.a.createElement("h4",null,this.state.selectedPlace.name))))}}]),a}(r.Component),ue=Object(se.GoogleApiWrapper)((function(e){return{apiKey:e.apiKey}}))(de),pe=a(75),ge=a.n(pe),be=a(76),he=a.n(be),fe=a(74),Ee=a.n(fe),ye=a(77),ve=a.n(ye),ke=Object(d.a)((function(e){var t;return{contact:{padding:"5rem 0"},contactItemTitle:{margin:"0.5rem 0",color:"#222"},contactItemSubtitle:{margin:"0.5rem 0",color:"#222"},contactItemBody:{margin:"0.5rem 0",color:"#777",fontWeight:"lighter"},contactWrapper:Object(s.a)({position:"relative"},e.breakpoints.down("xs"),{textAlign:"center"}),contactInfoItem:Object(s.a)({},e.breakpoints.down("xs"),{margin:"0 0 0rem"}),contactInfoItemButton:(t={margin:"0.5rem 0 0.5rem auto",color:"white",outline:"none",cursor:"pointer !important",border:"none",padding:"0.2rem 1rem",backgroundColor:"#fab700"},Object(s.a)(t,e.breakpoints.down("sm"),{width:"100%"}),Object(s.a)(t,"&:after",{border:"none !important"}),Object(s.a)(t,"&:before",{border:"none"}),Object(s.a)(t,"&:hover",{backgroundColor:"#C08000"}),Object(s.a)(t,"&:hover:not(.Mui-disabled):before",{border:"none"}),t),contactInfoItemTextfield:{"& .MuiFormLabel-root.Mui-focused":{color:"#fab700"}},contactMap:Object(s.a)({position:"relative",width:"100%",height:"30rem"},e.breakpoints.down("sm"),{height:"20rem"})}})),Ie=function(){var e=ke();return n.a.createElement(u.a,{className:e.contact},n.a.createElement(p.a,{fixed:!0},n.a.createElement(u.a,{className:e.contactWrapper,display:"flex",flexDirection:"column",alignItems:"center",margin:"0 0 2.5rem",textAlign:"center"},n.a.createElement(x.a,{className:e.contactItemTitle,variant:"h3"},"Contact Us"),n.a.createElement(x.a,{className:e.contactItemSubtitle,variant:"subtitle1"},"Follow the next steps to reach out our services")),n.a.createElement(u.a,{className:e.contactMap,margin:"0 0 2.5rem"},n.a.createElement(ue,{apiKey:"AIzaSyBQqDkM4HSDN1SQhDo4CqAUo3Sw2h5VXPk"})),n.a.createElement(B.a,{container:!0,spacing:3},n.a.createElement(B.a,{item:!0,xs:12,md:4,className:e.contactInfoItem},n.a.createElement(B.a,{item:!0,container:!0,xs:12,spacing:1},n.a.createElement(B.a,{item:!0,container:!0},n.a.createElement(B.a,{item:!0,xs:2},n.a.createElement(u.a,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},n.a.createElement(Ee.a,{style:{fontSize:"2.5rem",color:"#fab700"}}))),n.a.createElement(B.a,{item:!0,xs:10},n.a.createElement(u.a,{display:"flex",flexDirection:"column"},n.a.createElement(x.a,{variant:"subtitle1"},"Ciudad Ju\xe1rez, Chihuahua, M\xe9xico"),n.a.createElement(x.a,{variant:"body2"},"Julian Carrillo 4015")))),n.a.createElement(B.a,{item:!0,container:!0},n.a.createElement(B.a,{item:!0,xs:2},n.a.createElement(u.a,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},n.a.createElement(ge.a,{style:{fontSize:"2.5rem",color:"#fab700"}}))),n.a.createElement(B.a,{item:!0,xs:10},n.a.createElement(u.a,{display:"flex",flexDirection:"column"},n.a.createElement(x.a,{variant:"subtitle1"},"00 (880) 9865 562"),n.a.createElement(x.a,{variant:"body2"},"Mon to Fri 9am to 6 pm")))),n.a.createElement(B.a,{item:!0,container:!0},n.a.createElement(B.a,{item:!0,xs:2},n.a.createElement(u.a,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},n.a.createElement(he.a,{style:{fontSize:"2.5rem",color:"#fab700"}}))),n.a.createElement(B.a,{item:!0,xs:10},n.a.createElement(u.a,{display:"flex",flexDirection:"column"},n.a.createElement(x.a,{variant:"subtitle1"},"00 (880) 9865 562"),n.a.createElement(x.a,{variant:"body2"},"Mon to Fri 9am to 6 pm")))),n.a.createElement(B.a,{item:!0,container:!0},n.a.createElement(B.a,{item:!0,xs:2},n.a.createElement(u.a,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},n.a.createElement(ve.a,{style:{fontSize:"2.5rem",color:"#fab700"}}))),n.a.createElement(B.a,{item:!0,xs:10},n.a.createElement(u.a,{display:"flex",flexDirection:"column"},n.a.createElement(x.a,{variant:"subtitle1"},"support@codethemes.com"),n.a.createElement(x.a,{variant:"body2"},"Send us your query anytime!")))))),n.a.createElement(B.a,{item:!0,xs:12,md:8},n.a.createElement("form",{action:"/",method:"post"},n.a.createElement(B.a,{container:!0,spacing:3},n.a.createElement(B.a,{item:!0,xs:12,md:6,className:e.contactInfoItem},n.a.createElement(ne.a,{className:e.contactInfoItemTextfield,style:{width:"100%",marginBottom:"1.5rem"},label:"Enter your name",variant:"outlined"}),n.a.createElement(ne.a,{className:e.contactInfoItemTextfield,style:{width:"100%",marginBottom:"1.5rem"},label:"Enter your address",variant:"outlined"}),n.a.createElement(ne.a,{className:e.contactInfoItemTextfield,style:{width:"100%"},label:"Enter your subject",variant:"outlined"})),n.a.createElement(B.a,{item:!0,xs:12,md:6},n.a.createElement(oe.a,{style:{width:"100%",padding:"1.5rem"},rowsMin:10,placeholder:"Message"}),n.a.createElement(u.a,{display:"flex",justifyContent:"flex-end"},n.a.createElement(b.a,{className:e.contactInfoItemButton,type:"submit"},"Enviar")))))))))},xe=function(e){var t=[{id:1,item:n.a.createElement(C,null),index:e.hero?e.hero:null},{id:2,item:n.a.createElement(M,null),index:e.services?e.services:null},{id:3,item:n.a.createElement(L,null),index:e.video?e.video:null},{id:4,item:n.a.createElement(P,null),index:e.sectors?e.sectors:null},{id:5,item:n.a.createElement(H,null),index:e.statistics?e.statistics:null},{id:6,item:n.a.createElement(J,null),index:e.projects?e.projects:null},{id:7,item:n.a.createElement(Q,{feedbackBackground:e.feedbackBackground}),index:e.feedback?e.feedback:null},{id:8,item:n.a.createElement(re,null),index:e.blog?e.blog:null},{id:9,item:n.a.createElement(Ie,null),index:e.contact?e.contact:null}];return t.sort((function(e,t){var a=e.index,r=t.index;return a>r?1:a<r?-1:0})),n.a.createElement(n.a.Fragment,null,t.map((function(e){return n.a.createElement(n.a.Fragment,{key:e.id},null===e.index?null:e.item)})))},we=a(79),je=a.n(we),Ne=a(81),Ce=a.n(Ne),Be=a(78),Oe=a.n(Be),We=a(80),Se=a.n(We),Te=Object(d.a)((function(e){return{footer:{padding:"5rem 0",backgroundImage:"url('https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",backgroundPosition:"center center",backgroundSize:"cover",position:"relative","&::before":{position:"absolute",content:"''",top:"0",left:"0",right:"0",bottom:"0",backgroundColor:"rgba(0,0,0,0.8)"}},footerItemTextfield:{padding:"0.75rem 1rem",outline:"none",border:"none"},footerItemButton:{height:"auto",outline:"none",fontSize:".75rem",borderRadius:"0",border:"none",backgroundColor:"#fab700",color:"white","&:hover":{backgroundColor:"#C08000"}},footerItemTitle:{margin:"0.5rem 0",color:"white"},footerItemBody:{margin:"0.5rem 0",color:"white",fontWeight:"lighter"},footerWrapper:Object(s.a)({position:"relative",margin:"0 auto"},e.breakpoints.down("xs"),{textAlign:"center"}),footerItemSocialItem:{color:"white","&:hover":{color:"#fab700"}},footerItemSocialWrapper:{width:"10rem"}}})),Ae=function(){var e=Te();return n.a.createElement(u.a,{className:e.footer},n.a.createElement(p.a,{fixed:!0},n.a.createElement(B.a,{container:!0,spacing:3},n.a.createElement(B.a,{item:!0,sm:12,md:4,className:e.footerWrapper},n.a.createElement(x.a,{className:e.footerItemTitle,variant:"h6"},"About Us"),n.a.createElement(x.a,{className:e.footerItemBody,variant:"body1"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua."),n.a.createElement(x.a,{className:e.footerItemBody,variant:"body2"},"Copyright \xa92020 All rights reserved")),n.a.createElement(B.a,{item:!0,sm:12,md:4,className:e.footerWrapper},n.a.createElement(x.a,{className:e.footerItemTitle,variant:"h6"},"Newsletter"),n.a.createElement(x.a,{className:e.footerItemBody,variant:"body1"},"Stay update with our latset news"),n.a.createElement("form",{action:"/",method:"post",style:{display:"flex"}},n.a.createElement("input",{className:e.footerItemTextfield,type:"email-address",placeholder:"Enter Email",required:!0}),n.a.createElement(b.a,{className:e.footerItemButton,variant:"contained",type:"submit"},"Enviar"))),n.a.createElement(B.a,{item:!0,sm:12,md:4,className:e.footerWrapper},n.a.createElement(x.a,{className:e.footerItemTitle,variant:"h6"},"Follow Us"),n.a.createElement(x.a,{className:e.footerItemBody,variant:"body1"},"Let us be social"),n.a.createElement(u.a,{display:"flex",justifyContent:"space-between",className:e.footerItemSocialWrapper},n.a.createElement(g.a,{className:e.footerItemSocialItem,href:"https://twitter.com"},n.a.createElement(Oe.a,null)),n.a.createElement(g.a,{className:e.footerItemSocialItem,href:"https://youtube.com"},n.a.createElement(je.a,null)),n.a.createElement(g.a,{className:e.footerItemSocialItem,href:"https://facebook.com"},n.a.createElement(Se.a,null)),n.a.createElement(g.a,{className:e.footerItemSocialItem,href:"https://instagram.com"},n.a.createElement(Ce.a,null)))))))},Me=[{id:1,item:function(){return n.a.createElement(xe,{hero:1,services:2,video:3,sectors:4,statistics:5,projects:6,feedback:7,feedbackBackground:!0,blog:8})},path:void 0},{id:2,item:function(){return n.a.createElement(xe,{services:1,video:2,sectors:3,statistics:4,feedback:5,feedbackBackground:!1})},path:"about"},{id:3,item:function(){return n.a.createElement(xe,{sectors:1,services:2,feedback:3,feedbackBackground:!1})},path:"services"},{id:4,item:function(){return n.a.createElement(xe,{projects:1,services:2,feedback:3,feedbackBackground:!1})},path:"projects"},{id:5,item:function(){return n.a.createElement(xe,{contact:1})},path:"contact"}],De=function(){var e=Object(c.f)().id;return n.a.createElement(n.a.Fragment,null,n.a.createElement(k,null),void 0!==e?n.a.createElement(j,{path:e}):null,Me.map((function(t){return n.a.createElement(n.a.Fragment,{key:t.id},e===t.path?t.item():null)})),n.a.createElement(Ae,null))},Le=function(){return n.a.createElement(c.c,null,n.a.createElement(c.a,{exact:!0,path:"/",component:De}),n.a.createElement(c.a,{path:"/:id",component:De}))},Fe=a(34),Pe=a(164);i.a.render(n.a.createElement(Fe.a,null,n.a.createElement(Pe.a,null),n.a.createElement(Le,null)),document.getElementById("root"))},96:function(e,t,a){e.exports=a(121)}},[[96,1,2]]]);
//# sourceMappingURL=main.56d953c1.chunk.js.map