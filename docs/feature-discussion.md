live - https://sharepad.io/live/xAGykrD

Development points :::: 0. boilerplate - bootsite ->> deploy to cloudfare

1. Build Time
   -> conversion
   -> Mrakdown -> HTML
   -> Images -> extract info
   -> Excel -> JSON (resources util)
   -> meta creation
   -> vue modules bundling
   -> ResourceReader
2. Generic
   -> ResourceRender
3. Default Theme
4. Vue Modules
   -> Framework
    - Page
    - Article
    - ArticleList
    - extendable features ( slots )

Discussion 3 :::: 17/08/2023

static/capign/iphone-launch.md
resource-meta.json
[
{ file : "iphone-launch.en_US.v2.md", html : "iphone-launch.md.html", tags: { lang : "en_US", version : "v2" } }
]
bootsite.json
{
title : "Al Mulla Exchange",
theme : "indigo",
tags : {
lang : { values : [], }
},
seo : []
}

bootsite > Page
-> clone -> bootsite_amx -> page-amx, campaign <-- www.almx.com/[page-amx|campaign] www/html/amx
-> clone -> bootsite_amx2 -> news <-- www.almx.com/[news] www/html/amx
-> clone -> bootsite_amib -> page-amib, artcile <-- www.amib.com/[page-amib|artcile] => www/html/amx

/bs/[page|article|news|*]/iphone-launch-scheme.jpg.html?lang=en_US

read delimeter = '.' 1st element is name and last is extension and middle elements are tags
iphone-launch-scheme.en_US.C_KWT.jpg
iphone-launch-scheme.ar_KWT.jpg

page/:slug
component ==> MyPage ()
Page> $router.slug
            -> Resource($router.slug)
-> MyPageLayout

MyPage==>  
 <page>
<template #body v-slot={src} >
<>
</template>
</page>

[
lang : { values : [ "en_US","ar_KWT"], default : "en_US" },
tenant : ["C_KWT","C_OMN"]
]

PageMenu {
filter : { lang : "en_US"}
}

PageItem {
lang : "enUs"
}

lang=en_US & tenant=C_KWT

URL https://www.amx.com/bs/campaign/:slug ==> MyPage

FOLDER cdn-content/campaign/my_cpanign.jpg

MODULE
<MyCampaign src="campaign/my_cpanign.html"/>

    campaign/:slug
        companent ==> MyCampaign ()
        MyCampaign> src.url (- /bs)
            -> Resource( src.url)
            -> MyCampaignLayout
    */:slug
        companent ==> Page ()
        Page> src.url (- /bs)
            -> Resource( src.url)
            -> PageLayout

Discussion 2 ::::

resouces/abc/prcing_sheet.csv
resouces/abc/prcing_sheet.csv.json

MyPricingModule > MyArticle  
 MyData = Resource("prcing_sheet.csv").json();
MyHTML = Resource("prcing_sheet.md").html();
MyImgSrc = Resource("/my_cover.jpeg").path(); //==> "/static/content/my_cover.jpeg"

Article ==>
if typof src.type == "csv"
print src.table()
else if typof src.type == "markdown"
print src.html()
else if typof src.type == "html"
print src.html()

MyCampaign ==>

  <Article :src="article1.md|article1.html|article1.json">
    <template #body { src }>
        
    </template> 
  </Article>

Discussion 1 ::::

Articles ->

routing

/blog/:markedon_file_name => Blog
/news/:markedon_file_name => News

ARTCLE_DIR = "/path/to/markedown/file/" default:/dist/www-amib/content/[blog|post|news|artcle|story|campaign]

www-demo/layout
==> how to use articles ==> article/blog/img/

www-amib/layout
/router
/navbar

https://www.amib.com/blog/how-to.html
https://cdn.amib.com/content/dist/www-amib/blog/how-to.md

//BLOG.VUE
<template>

  <Article
  	:file="/blog/how-to-write"
  >	
      <template #title={title}>
      	<h4>{{title}}</hr>
      </template>
      <template #file>
        
      </template>
  </Article>
</template>  
<style></style>

//NEWS.VUE
<template>

  <Article
  	:file="/blog/how-to-write"
  >	
  </Article>
</template>  
<style></style>
