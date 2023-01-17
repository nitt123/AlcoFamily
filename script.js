var searchCss = document.querySelector('.mobilecontainer');

var isSearchShown = true;


var searchLink = document.getElementById('searchimg');
searchLink.onclick = function() {
    isSearchShown = !isSearchShown;
    if(!isSearchShown)
    {
        searchCss.style.setProperty('display', 'inline-block');
    }
    else
    {
        searchCss.style.setProperty('display', 'none');
    }
};


var katalogCss = document.querySelector('.mobilekatalog');

var isKatalogShown = true;


var katalogLink = document.getElementById('menuimg');
katalogLink.onclick = function() {
    isKatalogShown = !isKatalogShown;
    if(!isKatalogShown)
    {
        katalogCss.style.setProperty('display', 'inline-block');
    }
    else
    {
        katalogCss.style.setProperty('display', 'none');
    }
};

window.onresize = function() {
    if(window.innerWidth>767)
    {
        isSearchShown = true;
        searchCss.style.setProperty('display', 'none');


        isKatalogShown = true;
        katalogCss.style.setProperty('display', 'none');
    }
};