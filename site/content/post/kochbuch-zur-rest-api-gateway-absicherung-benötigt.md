---
title: Kochbuch zur REST API Gateway Absicherung benötigt?
date: 2021-02-07T11:12:36.966Z
description: "Es ist ein komplettes Nerd-Thema, welches nur Server-Admins
  interessieren dürfte. Bevor ich daher einen Beitrag darüber schreibe, wie wir
  unsere REST API absichern, zunächst die Frage an die Leserschaft: Wer hat
  Interesse an einer Anleitung? - Einfach Like oder Kommentar hinterlassen."
image: img/apocalypse-2273069_640.jpg
---
Die Zutaten werden sein:

* CloudFlare
* [Fail2Ban](https://www.fail2ban.org/wiki/index.php/Main_Page)
* IPTables 
* Redis Cache 
* Rate Limit des Molecular.Service Frameworks

Im Fokus ist der Schutz nicht nur vor typischen und willkürlichen DDoS Angriffen, sondern auch vor wild gewordenen Clients, die durch einen Implementierungsfehler sehr viele Requests an den Server stellen. Neben den technischen Schritten würde ich auch ein paar Tipps zum API Aufbau mit einfügen.

Letztendlich wird ein mehrstufiges Konzept beschrieben, welches hilft nicht unnötig Serverkapazitäten aufzubauen und dennoch komplexe REST-APIs öffentlich zur Verfügung zu stellen. 

Bei uns ist dies das [Stromkonto](https://www.stromkonto.net/) sowie der [GrünstromIndex](https://gruenstromindex.de/) mit einem Peak-Load von etwas über 1000 Anfragen pro Sekunde.