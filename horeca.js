//frisdrank:&euro;1,20  bier:&euro;2,00  wijn:&euro;3,00
var total = 0;

while(bestel != "stop"){
    var bestel = prompt("Goededag, welkom bij cafe-lekkernij! Uw keuze bij ons qua dranken zijn: Frisdrank 1,20 euro, bier 2,00 euro en wijn 3,00 euro")
    var totalpricefris = 0;
    var totalpricebier = 0;
    var totalpricewijn = 0;
    var totalpricebitterbal = 0;   
        if(bestel != "stop"){ 
               var aantal = prompt("hoeveel "+ bestel +" wilt u?")
         
            if(bestel == "Frisdrank"){
                kosten = (aantal * 1,20)
                totalpricefris = totalpricefris + total;
                document.write("U heeft "+aantal+" frisdrank bestelt en het kost "+"&euro;"+kosten+"<br>")
            }
            else if(bestel == "bier"){
                kosten = (aantal * 1,20)
                totalpricebier = totalpricebier + total;
            }
            else if(bestel == "wijn"){
                kosten = (aantal * 1,20)
                totalpricewijn = totalpricewijn + total;
            }
            else if(bestel == "stop"){
            
            }          
        }
        total = totalpricefris + totalpricebier + totalpricewijn + totalpricebitterbal
            document.write("Bedankt voor uw bestelling, uw totaal kosten zijn"+"&euro;"+total)
}
