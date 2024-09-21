"use strict";(self.webpackChunkcloud_article=self.webpackChunkcloud_article||[]).push([[524],{2798:(t,e,a)=>{a.d(e,{l:()=>i});const i={category:{"/":{path:"/category/",map:{History:{path:"/category/history/",indexes:[0,1]},CategoryA:{path:"/category/categorya/",indexes:[2,3,4,5,6,7,8,9,10,11,12,13]},CategoryB:{path:"/category/categoryb/",indexes:[2,3,4,5,6,7,8,10,11,12]},CategoryC:{path:"/category/categoryc/",indexes:[14,15]}}}},tag:{"/":{path:"/tag/",map:{WWI:{path:"/tag/wwi/",indexes:[1]},WWII:{path:"/tag/wwii/",indexes:[0]},"tag A":{path:"/tag/tag-a/",indexes:[5,6,7,8,9,13]},"tag B":{path:"/tag/tag-b/",indexes:[5,6,7,8,9,13]},"tag C":{path:"/tag/tag-c/",indexes:[2,3,4,10,11,12]},"tag D":{path:"/tag/tag-d/",indexes:[2,3,4,10,11,12]},"tag E":{path:"/tag/tag-e/",indexes:[14,15]}}}}}},8589:(t,e,a)=>{a.d(e,{M:()=>i});const i=["/posts/archive2.html","/posts/archive1.html","/posts/article9.html","/posts/article8.html","/posts/article7.html","/posts/article6.html","/posts/article5.html","/posts/article4.html","/posts/article3.html","/posts/article2.html","/posts/article12.html","/posts/article11.html","/posts/article10.html","/posts/article1.html","/posts/sticky2.html","/posts/sticky.html"]},594:(t,e,a)=>{a.d(e,{U:()=>i});const i={article:{"/":{path:"/article/",indexes:[14,15,10,11,12,2,3,4,5,6,7,8,9,13]}},timeline:{"/":{path:"/timeline/",indexes:[10,11,12,2,3,4,5,6,7,8,9,13,15,14,0,1]}}}},8381:(t,e,a)=>{a.d(e,{B:()=>J});var i={};a.r(i),a.d(i,{default:()=>p});var n={};a.r(n),a.d(n,{default:()=>j});var r=a(6358),l=a(355),o=a(457),g=a(3349),s=a(5436),c=a(1599),h=a(6385);const p={setup(){(0,h._)()}};var d=a(5496),m=a(443),y=a(8278),u=a(641),b=a(953),A=a(1787),C=a(4937),H=a(33);const k={class:"article-wrapper"},T={key:0},_=["onClick"],x={class:"title"},v={class:"article-info"},w={key:0,class:"author"},L={key:1,class:"date"},B={key:2,class:"category"},W={key:3,class:"tag"},E=["innerHTML"],X={__name:"ArticleList",props:{items:{type:Array,required:!0},isTimeline:Boolean},setup:t=>(e,a)=>((0,u.uX)(),(0,u.CE)("div",k,[t.items.length?(0,u.Q3)("",!0):((0,u.uX)(),(0,u.CE)("div",T,"Nothing in here.")),((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)(t.items,(({info:i,path:n})=>((0,u.uX)(),(0,u.CE)("article",{key:n,class:"article",onClick:t=>e.$router.push(n)},[(0,u.Lk)("header",x,(0,H.v_)((t.isTimeline?`${new Date(i.date).toLocaleDateString()}: `:"")+i.title),1),a[0]||(a[0]=(0,u.Lk)("hr",null,null,-1)),(0,u.Lk)("div",v,[i.author?((0,u.uX)(),(0,u.CE)("span",w,"Author: "+(0,H.v_)(i.author),1)):(0,u.Q3)("",!0),i.date&&!t.isTimeline?((0,u.uX)(),(0,u.CE)("span",L,"Date: "+(0,H.v_)(new Date(i.date).toLocaleDateString()),1)):(0,u.Q3)("",!0),i.category?((0,u.uX)(),(0,u.CE)("span",B,"Category: "+(0,H.v_)(i.category.join(", ")),1)):(0,u.Q3)("",!0),i.tag?((0,u.uX)(),(0,u.CE)("span",W,"Tag: "+(0,H.v_)(i.tag.join(", ")),1)):(0,u.Q3)("",!0)]),i.excerpt?((0,u.uX)(),(0,u.CE)("div",{key:0,class:"excerpt",innerHTML:i.excerpt},null,8,E)):(0,u.Q3)("",!0)],8,_)))),128))]))},Z={class:"page"},I={__name:"Article",setup(t){const e=(0,A.Om)("article");return(t,a)=>((0,u.uX)(),(0,u.Wv)(C.A,null,{page:(0,u.k6)((()=>[(0,u.Lk)("main",Z,[(0,u.bF)(X,{items:(0,b.R1)(e).items},null,8,["items"])])])),_:1}))}},S={class:"page"},D={class:"category-wrapper"},f={class:"category-num"},F={__name:"Category",setup(t){const e=(0,y.lq)(),a=(0,A.es)("category");return(t,i)=>((0,u.uX)(),(0,u.Wv)(C.A,null,{page:(0,u.k6)((()=>[(0,u.Lk)("main",S,[(0,u.Lk)("div",D,[((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)((0,b.R1)(a).map,(({items:t,path:a},i)=>((0,u.uX)(),(0,u.Wv)((0,b.R1)(y.Wt),{key:i,to:a,active:(0,b.R1)(e).path===a,class:"category"},{default:(0,u.k6)((()=>[(0,u.eW)((0,H.v_)(i)+" ",1),(0,u.Lk)("span",f,(0,H.v_)(t.length),1)])),_:2},1032,["to","active"])))),128))]),(0,u.bF)(X,{items:(0,b.R1)(a).currentItems??[]},null,8,["items"])])])),_:1}))}},R={class:"page"},O={class:"tag-wrapper"},M={class:"tag-num"},N={__name:"Tag",setup(t){const e=(0,y.lq)(),a=(0,A.es)("tag");return(t,i)=>((0,u.uX)(),(0,u.Wv)(C.A,null,{page:(0,u.k6)((()=>[(0,u.Lk)("main",R,[(0,u.Lk)("div",O,[((0,u.uX)(!0),(0,u.CE)(u.FK,null,(0,u.pI)((0,b.R1)(a).map,(({items:t,path:a},i)=>((0,u.uX)(),(0,u.Wv)((0,b.R1)(y.Wt),{key:i,to:a,active:(0,b.R1)(e).path===a,class:"tag"},{default:(0,u.k6)((()=>[(0,u.eW)((0,H.v_)(i)+" ",1),(0,u.Lk)("span",M,(0,H.v_)(t.length),1)])),_:2},1032,["to","active"])))),128))]),(0,u.bF)(X,{items:(0,b.R1)(a).currentItems??[]},null,8,["items"])])])),_:1}))}},Q={class:"page"},U={__name:"Timeline",setup(t){const e=(0,A.Om)("timeline");return(t,a)=>((0,u.uX)(),(0,u.Wv)(C.A,null,{page:(0,u.k6)((()=>[(0,u.Lk)("main",Q,[a[0]||(a[0]=(0,u.Lk)("h1",{class:"timeline-title"},"Timeline",-1)),(0,u.bF)(X,{items:(0,b.R1)(e).items,"is-timeline":""},null,8,["items"])])])),_:1}))}},j=(0,y.re)({layouts:{Article:I,Category:F,Tag:N,Timeline:U}}),J=[r,l,o,g,s,c,i,d,m,n].map((t=>t.default)).filter(Boolean)},6159:(t,e,a)=>{a.d(e,{J:()=>n,c:()=>i});const i=JSON.parse("{}"),n=Object.fromEntries([["/get-started.html",{loader:()=>a.e(642).then(a.bind(a,3376)),meta:{title:"Get Started"}}],["/",{loader:()=>a.e(470).then(a.bind(a,1901)),meta:{title:"Home"}}],["/posts/archive1.html",{loader:()=>a.e(277).then(a.bind(a,7205)),meta:{_blog:{title:"Archive Article1",author:"",date:"1998-01-01T00:00:00.000Z",category:["History"],tag:["WWI"],excerpt:"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},title:"Archive Article1"}}],["/posts/archive2.html",{loader:()=>a.e(408).then(a.bind(a,5053)),meta:{_blog:{title:"Archive Article2",author:"",date:"1998-01-02T00:00:00.000Z",category:["History"],tag:["WWII"],excerpt:"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},title:"Archive Article2"}}],["/posts/article1.html",{loader:()=>a.e(993).then(a.bind(a,2642)),meta:{_blog:{title:"Article 1",author:"",date:"2022-01-01T00:00:00.000Z",category:["CategoryA"],tag:["tag A","tag B"],excerpt:"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},title:"Article 1"}}],["/posts/article10.html",{loader:()=>a.e(33).then(a.bind(a,4319)),meta:{_blog:{title:"Article 10",author:"",date:"2022-01-10T00:00:00.000Z",category:["CategoryA","CategoryB"],tag:["tag C","tag D"],excerpt:"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},title:"Article 10"}}],["/posts/article11.html",{loader:()=>a.e(602).then(a.bind(a,9895)),meta:{_blog:{title:"Article 11",author:"",date:"2022-01-11T00:00:00.000Z",category:["CategoryA","CategoryB"],tag:["tag C","tag D"],excerpt:"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},title:"Article 11"}}],["/posts/article12.html",{loader:()=>a.e(107).then(a.bind(a,3159)),meta:{_blog:{title:"Article 12",author:"",date:"2022-01-12T00:00:00.000Z",category:["CategoryA","CategoryB"],tag:["tag C","tag D"],excerpt:"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},title:"Article 12"}}],["/posts/article2.html",{loader:()=>a.e(124).then(a.bind(a,9932)),meta:{_blog:{title:"Article 2",author:"",date:"2022-01-02T00:00:00.000Z",category:["CategoryA"],tag:["tag A","tag B"],excerpt:"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},title:"Article 2"}}],["/posts/article3.html",{loader:()=>a.e(339).then(a.bind(a,9403)),meta:{_blog:{title:"Article 3",author:"",date:"2022-01-03T00:00:00.000Z",category:["CategoryA","CategoryB"],tag:["tag A","tag B"],excerpt:"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},title:"Article 3"}}],["/posts/article4.html",{loader:()=>a.e(518).then(a.bind(a,5782)),meta:{_blog:{title:"Article 4",author:"",date:"2022-01-04T00:00:00.000Z",category:["CategoryA","CategoryB"],tag:["tag A","tag B"],excerpt:"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},title:"Article 4"}}],["/posts/article5.html",{loader:()=>a.e(469).then(a.bind(a,8654)),meta:{_blog:{title:"Article 5",author:"",date:"2022-01-05T00:00:00.000Z",category:["CategoryA","CategoryB"],tag:["tag A","tag B"],excerpt:"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},title:"Article 5"}}],["/posts/article6.html",{loader:()=>a.e(104).then(a.bind(a,7482)),meta:{_blog:{title:"Article 6",author:"",date:"2022-01-06T00:00:00.000Z",category:["CategoryA","CategoryB"],tag:["tag A","tag B"],excerpt:"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},title:"Article 6"}}],["/posts/article7.html",{loader:()=>a.e(615).then(a.bind(a,7395)),meta:{_blog:{title:"Article 7",author:"",date:"2022-01-07T00:00:00.000Z",category:["CategoryA","CategoryB"],tag:["tag C","tag D"],excerpt:"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},title:"Article 7"}}],["/posts/article8.html",{loader:()=>a.e(314).then(a.bind(a,4782)),meta:{_blog:{title:"Article 8",author:"",date:"2022-01-08T00:00:00.000Z",category:["CategoryA","CategoryB"],tag:["tag C","tag D"],excerpt:"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},title:"Article 8"}}],["/posts/article9.html",{loader:()=>a.e(945).then(a.bind(a,1743)),meta:{_blog:{title:"Article 9",author:"",date:"2022-01-09T00:00:00.000Z",category:["CategoryA","CategoryB"],tag:["tag C","tag D"],excerpt:"\n<h2>Heading 2</h2>\n<p>Here is the content.</p>\n<h3>Heading 3</h3>\n<p>Here is the content.</p>\n"},title:"Article 9"}}],["/posts/sticky.html",{loader:()=>a.e(847).then(a.bind(a,8702)),meta:{_blog:{title:"Sticky Article",author:"",date:"2021-01-01T00:00:00.000Z",category:["CategoryC"],tag:["tag E"],excerpt:"<p>A sticky article demo.</p>"},title:"Sticky Article"}}],["/posts/sticky2.html",{loader:()=>a.e(673).then(a.bind(a,9104)),meta:{_blog:{title:"Sticky Article with Higher Priority",author:"",date:"2020-01-01T00:00:00.000Z",category:["CategoryC"],tag:["tag E"],excerpt:"\n<p>Excerpt information which is added manually.</p>\n"},title:"Sticky Article with Higher Priority"}}],["/404.html",{loader:()=>a.e(490).then(a.bind(a,3030)),meta:{title:""}}],["/category/",{loader:()=>a.e(583).then(a.bind(a,1805)),meta:{title:"Categories"}}],["/category/history/",{loader:()=>a.e(572).then(a.bind(a,959)),meta:{title:"Category History"}}],["/category/categorya/",{loader:()=>a.e(159).then(a.bind(a,2525)),meta:{title:"Category CategoryA"}}],["/category/categoryb/",{loader:()=>a.e(414).then(a.bind(a,5710)),meta:{title:"Category CategoryB"}}],["/category/categoryc/",{loader:()=>a.e(989).then(a.bind(a,9002)),meta:{title:"Category CategoryC"}}],["/tag/",{loader:()=>a.e(797).then(a.bind(a,5276)),meta:{title:"Tags"}}],["/tag/wwi/",{loader:()=>a.e(279).then(a.bind(a,1702)),meta:{title:"Tag WWI"}}],["/tag/wwii/",{loader:()=>a.e(14).then(a.bind(a,8374)),meta:{title:"Tag WWII"}}],["/tag/tag-a/",{loader:()=>a.e(448).then(a.bind(a,5329)),meta:{title:"Tag tag A"}}],["/tag/tag-b/",{loader:()=>a.e(965).then(a.bind(a,5434)),meta:{title:"Tag tag B"}}],["/tag/tag-c/",{loader:()=>a.e(38).then(a.bind(a,2415)),meta:{title:"Tag tag C"}}],["/tag/tag-d/",{loader:()=>a.e(483).then(a.bind(a,4077)),meta:{title:"Tag tag D"}}],["/tag/tag-e/",{loader:()=>a.e(364).then(a.bind(a,8285)),meta:{title:"Tag tag E"}}],["/article/",{loader:()=>a.e(511).then(a.bind(a,2456)),meta:{title:"Articles"}}],["/timeline/",{loader:()=>a.e(464).then(a.bind(a,6288)),meta:{title:"Timeline"}}]])},9354:(t,e,a)=>{a.d(e,{U:()=>i});const i=JSON.parse('{"base":"/","lang":"en-US","title":"VuePress","description":"My first VuePress Site","head":[],"locales":{}}')},8120:(t,e,a)=>{a.d(e,{K:()=>i});const i=JSON.parse('{"logo":"https://vuejs.press/images/hero.png","navbar":["/",{"text":"Article","link":"/article/"},{"text":"Category","link":"/category/"},{"text":"Tag","link":"/tag/"},{"text":"Timeline","link":"/timeline/"}],"locales":{"/":{"selectLanguageName":"English"}},"colorMode":"auto","colorModeSwitch":true,"repo":null,"selectLanguageText":"Languages","selectLanguageAriaLabel":"Select language","sidebar":"heading","sidebarDepth":2,"editLink":true,"editLinkText":"Edit this page","lastUpdated":true,"lastUpdatedText":"Last Updated","contributors":true,"contributorsText":"Contributors","notFound":["There\'s nothing here.","How did we get here?","That\'s a Four-Oh-Four.","Looks like we\'ve got some broken links."],"backToHome":"Take me home","openInNewWindow":"open in new window","toggleColorMode":"toggle color mode","toggleSidebar":"toggle sidebar"}')}},t=>{t.O(0,[106,492],(()=>t(t.s=8731))),t.O()}]);