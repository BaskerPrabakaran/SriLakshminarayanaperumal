window.jQuery || document.write("<script src=\"js/lib/jquery-3.7.1.js\"><script>")

$(function(){
    
    loadpagecontent();

    $("li").click(function(){
        $("li.timeline-year-active").removeClass("timeline-year-active");
        $(this).addClass("timeline-year-active");
        $("div.timeline-details-active").removeClass("timeline-details-active");
        $("div."+$(this).attr("id")).addClass("timeline-details-active");
    });

    $("#menuicon").click(function(){
        if($("#navlinks").hasClass("nav-links-open"))
        {
            $("#navlinks").removeClass("nav-links-open");
        }
        else
        {
            $("#navlinks").addClass("nav-links-open");
        }
    });
    
    $("#language-en").click(function(){
        changeLanguage("lang-en");
    });
    $("#language-tm").click(function(){
        changeLanguage("lang-tm");
    });
});

async function loadpagecontent()
{
    var lang = localStorage.getItem("language");
    if(lang == null) lang = "lang-tm";

    setLanguagePreference(lang);
    const langData = await fetchLanguageData(lang);
    updateContent(langData);
}

async function changeLanguage(lang) {
    await setLanguagePreference(lang);
    location.reload();
}

function setLanguagePreference(lang) {
    localStorage.setItem("language", lang);
}

async function fetchLanguageData(lang) {
    const response = await fetch(`./data/${lang}.json`);
    return response.json();
}

function updateContent(langData) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.innerHTML = langData[key];
    });
}