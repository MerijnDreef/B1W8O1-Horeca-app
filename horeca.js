//frisdrank:&euro;1,20  bier:2,00  wijn:3,00  bitterballen8: 4,00 bitterballen16: 7,00 
var totalprijs = 0;    
var bitter = 0;

while(bestel != "stop"){
    var bestel = prompt("Goededag, welkom bij cafe-lekkernij! Uw keuze bij ons qua dranken zijn: frisdrank 1,20 euro, bier 2,00 euro en wijn 3,00 euro of snack")
    if(bestel == "stop"){
        kosten = totalprijs
        document.write("Dankuwel voor uw aankoop uw totaal prijs is "+"&euro;"+kosten.toFixed(2))
        break;
    }
            if(bestel != "stop"){
                if(bestel != "snack"){
                    var aantal = prompt("hoeveel "+ bestel +" wilt u?")
                        if(bestel == "fris"){
                            totalprijs += drinken(bestel,aantal,1.2);
                        }
                            else if(bestel == "bier"){
                                totalprijs += drinken(bestel,aantal,2);
                            }
                                else if(bestel == "wijn"){
                                    totalprijs += drinken(bestel,aantal,3);
                                }
            }
                if(bestel == "snack"){
                    var soort = prompt("hoeveel bitterballen wilt u in een schaal?")
                        if(soort == "8"){
                            bitter = 4;
                        }
                            else if(soort == "16"){
                                bitter = 7;
                            }        
                                else if(soort != "8" || soort != "16"){
                                    alert("U kunt alleen een keuze maken tussen 8 en 16. De snacks zijn niet toegevoegd aan de bestelling.")
                                }
                                    if(soort == "8" || soort == "16"){
                                        var aantal = prompt("hoeveel schalen van "+soort+" wilt u?")
                                        var berekening = bitter * aantal;
                                        totalprijs = totalprijs + berekening
                                        document.write("U heeft een schaal van "+soort+" bitterballen met het aantal "+aantal+" en de kosten zijn "+"&euro;"+berekening.toFixed(2)+"<br>")
                                    }
                            }
            }
    else if(bestel != "fris"){
        alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.");
    }
}
function drinken(naam,getal,nummer) {
    var berekening = getal * nummer
    document.write("U heeft "+naam+" bestelt met het aantal "+getal+" en de kosten zijn "+"&euro;"+berekening.toFixed(2)+"<br>")
    return berekening;
}

