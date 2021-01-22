---
title: Geräte zur grünsten Stunde des Tages schalten, war noch nie so einfach...
date: 2021-01-20T01:00:49.723Z
description: Natürlich kann man den GrünstromIndex nutzen und selbst mit einigen
  Programmzeilen den Code basteln, damit die helfenden Hausgeräte via SmartHome
  zur günstigsten Stunde des Tages betrieben werden. Die Praxis hat allerdings
  gezeigt, dass es noch einfacher gehen muss. Aus den Rückmeldungen unserer API
  Nutzer haben wir daher eine Schnittstelle geschaffen, die extrem einfach
  gestrickt ist und daher in jeder modernen Heimsteuerung verwendet werden kann.
image: img/hourglass-1938677_640.jpg
---
[BestHour](https://corrently.io/#operation/gsiBesthour) nennt sich der API Endpunkt, welcher nichts anders macht als zu sagen, ob ein Gerät jetzt (im Moment) eingeschaltet (true) oder ausgeschaltet (false) sein sollte. Dies kann man direkt im Browser testen. Für den Ort Wiesloch (Postleitzahl 69168) erhält man die Antwort unter folgender URL:

<http://api.corrently.io/v2.0/gsi/bestHour?zip=69168>

Werden ansonsten keine weiteren Parameter angegeben, so wird automatisch in den kommenden 24 Stunden die beste Stunde gesucht und geschaut, ob diese die aktuelle Stunde ist. Für viele Anwendungsfälle ist dies jedoch nicht ausreichend, daher kann mit dem Parameter *timeframe* angegeben werden, wie lange man in die Zukunft schauen möchte. Soll zum Beispiel nach der Stunde mit dem meisten regionalen Ökostrom nur innerhalb der kommenden 12 Stunden gesucht werden, dann sieht der Aufruf für Heidelberg (Postleitzahl 69115) wie folgt aus:

<http://api.corrently.io/v2.0/gsi/bestHour?zip=69115&timeframe=12>

Die Nutzung dieser API ist selbstverständlich kostenlos, es wird jedoch ein Fair-Use vorausgesetzt, was so viel bedeutet, dass es wenig Sinn ergibt, jede Sekunde einen Schalter zu prüfen, wenn die Werte sich nur einmal pro Stunde ändern können. 

Wenn etwas mehr Beispiel-Code für verschiedene Systeme gewünscht ist, dann einfach einen Kommentar schreiben zu diesem Post.