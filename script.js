//alert("אתר זה נוצר למחשב החוויה בטלפון תהיה שונה");


function loadcss(filename){
        var fileref= document.createElement("link");
        fileref.setAttribute("rel", "stylesheet");
        fileref.setAttribute("type", "text/css");
        fileref.setAttribute("href", filename);
    
    if (typeof fileref!="undefined"){
        document.getElementsByTagName("head")[0].appendChild(fileref);
    }
}

loadcss("deepSea.css")