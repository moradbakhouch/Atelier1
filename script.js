function AffDiv()
{
    if(document.getElementById("a").checked == true)
    {
        document.getElementById("divVille").style.display="block";
    }
    if(document.getElementById("b").checked == true)
    {
        document.getElementById("divVille").style.display="none";
    }
}

function verifyName()
{
    var n = document.getElementById("name").value;
    var r = /^([a-zA-Z]+)(\s[a-zA-Z]+)?$/g;
    if(r.test(n)==false)
    {
        nameErreurs.style.color= "red";
        nameErreurs.style.marginLeft= "35px";
        nameErreurs.innerHTML="Le nom est obligatoire ne doit pas contenir de chiffre ou caractères spéciaux !!";
    }
    else
    {
        nameErreurs.style.marginLeft= "0px";
        nameErreurs.innerHTML="";
    }
}

function verifyPassword()
{
    var p = document.getElementById("password").value;
    var r = /^.+$/g;
    if(r.test(p)==false)
    {
        
        passwordErreurs.style.color= "red";
        passwordErreurs.style.marginLeft= "35px";
        passwordErreurs.innerHTML="Le password est obligatoire !!";
    }
    else
    {
        passwordErreurs.style.marginLeft= "0px";
        passwordErreurs.innerHTML="";
    }
}

function verifyList()
{
    if((document.getElementById("a").checked == true) && (document.getElementById("listV").getElementsByTagName("option")[0].selected == true))
    {
        listErreurs.style.color= "red";
        listErreurs.style.marginLeft= "35px";
        listErreurs.innerHTML="Tu dois sélectionner une ville !!";
    }
    else
    {
        listErreurs.style.marginLeft= "0px";
        listErreurs.innerHTML="";
    }
}