//frisdrank:&euro;1,20  bier:2,00  wijn:3,00  bitterballen8: 4,00 bitterballen16: 7,00 
var totalprijs = 0;    
var bitter = 0;

while(bestel != "stop"){
    var bestel = prompt("Goededag, welkom bij cafe-lekkernij! Uw keuze bij ons qua dranken zijn: frisdrank 1,20 euro, bier 2,00 euro en wijn 3,00 euro")
    if(bestel != "stop"){
        var aantal = prompt("hoeveel "+ bestel +" wilt u?")
        if(bestel == "fris"|| bestel == "frisdrank"){
           totalprijs += drinken(bestel,aantal,1.2);
        }
        else if(bestel == "bier" || bestel == "pils"){
           totalprijs += drinken(bestel,aantal,2);
        }
        else if(bestel == "wijn"){
           totalprijs += drinken(bestel,aantal,3);
        }
    }
    else if(bestel == "stop"){
        kosten = totalprijs
        document.write("Dankuwel voor uw aankoop uw totaal prijs is "+"&euro;"+kosten)
    }
    else if(bestel == "snack"){
        var soort = prompt("hoeveel bitterballen wilt u in een schaal?")
        if(soort == "8"){
            bitter = 4;
        }
        else if(soort == "16"){
            bitter = 7;
        }
        else{
            alert("ongeldig graag opnieuw proberen")
        }
        
    }
}
function drinken(naam,getal,nummer) {
    var berekening = getal * nummer
    document.write("U heeft "+naam+" bestelt met het aantal "+getal+" en de kosten zijn "+"&euro;"+berekening+"<br>")
    return berekening;
}

