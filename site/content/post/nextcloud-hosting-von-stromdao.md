---
title: Nextcloud Hosting von STROMDAO
date: 2021-01-17T22:23:15.765Z
description: Seit Beginn der Corona-Pandemie ist die Notwendigkeit für flexible
  Lösungen für verteilt arbeitende Teams konstant angestiegen. Das Nextcloud
  Hosting der STROMDAO erlaubt nicht nur den Austausch von Dokumenten, sondern
  hilft für wenige Cent pro Monat auch auf Distanz gut zusammenarbeiten. Zugang
  zum Internet reichen aus, um sicher und verlässlich im Team
  zusammenzuarbeiten.
image: img/corona-5124524_640.jpg
---
NextCloud basierte Collaboration mit Online Office Anbindung. Betrieben in einem grünen Rechenzentrum in Deutschland.

**NextCorrently bietet...** 

* Sichere Zusammenarbeit und Austausch von Dokumenten
* Anbindung von Prozessen und Workflows
* Integration zu MeetCorrently und anderen Diensten des Ökosystems
* Klimaneutrales Hosting in Deutschland
* 100 GB Speicherplatz
* Bis zu 100 Nutzer
* Telefonischer Service ohne Hotline/Technik Schnickschnack

Wer Nextcloud einfach nur einmal testen möchte, dem können wir auf unserem eignen Server einen persönlichen Zugang kostenlos einreichen. Hierzu einfach über das [Kontaktformular](https://www.stromdao.de/kontakt) eine Anfrage stellen.

*** Unser Angebot
<HTML>
<button class="btn btn-primary chkout" type="button" style="background: #fda824;margin-top: 25px;"><i class="fa fa-shopping-cart"></i> NextCorrently 100GB - 9,90€/Monat </button>
<script src="https://js.stripe.com/v3/"></script>
$(document).ready(function() {
   $('.chkout').click(function() {    
     var stripe = Stripe('pk_live_rWnhwGfKnwm2aMYyQ50SbZrl');    
     stripe.redirectToCheckout({
      items: [        
        {sku: 'prod_ImIVb0GHvfilNJ', quantity: 1}
      ],
      successUrl: 'https://corrently.de/service/stromkonto.html',
      cancelUrl: 'https://corrently.de/service/stromkonto.html',
      clientReferenceId: 'blog'
    }).then(function (result) {
    });         
});
});
</HTML>