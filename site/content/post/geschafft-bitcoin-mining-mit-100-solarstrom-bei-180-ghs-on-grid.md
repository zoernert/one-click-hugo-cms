---
title: "Geschafft: Bitcoin Mining mit 100% Solarstrom bei 180 GHs (On-Grid)"
date: 2021-02-18T09:33:31.848Z
description: Zunächst soll noch einmal erwähnt werden, dass das sogenannte
  Mining nach Bitcoins beim aktuellen Strompreis von über 25 Cent nicht rentabel
  ist. Auch darunter stellt sich die Frage, ob der Aufwand für die Hardware
  irgendwann einmal amortisiert wird. Der Spaß ist es dennoch wert, besonders
  wenn man ein solches Vorhaben als Proof-Of-Concept sieht und im kleinen
  testet, was vielleicht auch in sehr großen Dimensionen funktionieren kann.
image: img/antminer_pv.png
---
Bei **blog.stromhaltig** ein Beitrag über das [Bitcoin Mining via Solar-Modul](https://blog.stromhaltig.de/2015/03/wenn-das-solarmodul-ploetzlich-bitcoins-druckt/) zu lesen. Darin ein kleiner Selbstversuch, wie der Strom aus einem PV-Panel via Laderegeler in einer Batterie gepuffert wird und dann im Anschluss zur Berechnung von Bitcoin Transaktion genutzt wird.

Das ganze System wurde nun etwas weiter ausgebaut als netzgeführte zuschaltbare Last. In anderen Worten ausgedrückt: Wird der Strom aus den Panels gerade nicht als elektrische Energie benötigt, so wird dies in Rechenzeit umgewandelt (=[Mining](https://bitcoin.org/de/wie-es-funktioniert)) und einer alternativen Nutzungsform zugeführt. Aus den USB-Minern ist mittlerweile ein AntMiner S1 geworden…

Zunächst soll noch einmal erwähnt werden, dass das sogenannte Mining nach Bitcoins beim aktuellen Strompreis von über 25 Cent nicht rentabel ist. Auch darunter stellt sich die Frage, ob der Aufwand für die Hardware irgendwann einmal amortisiert wird. Der Spaß ist es dennoch wert, besonders wenn man ein solches Vorhaben als Proof-Of-Concept sieht und im kleinen testet, was vielleicht auch in sehr großen Dimensionen funktionieren kann.  Als Dimension kann hier durchaus das Angebot von Primär-Regelleistung im MW Bereich gesehen werden, da die Granularität der einzelnen Systeme sehr klein ist.

Im Feldtest wird ein AntMiner S1 verwendet, der ca. 350 Watt in Betrieb benötigt und dabei auf 180 GHs kommt. Zum Hochfahren braucht das System ca. 20 Sekunden und hat dann eine konstante Verbrauchskennlinie.

Bei der hiesigen PV Anlage kommt es besonders in den Nachmittagsstunden zu einem Überschuss, der nicht im Speicher aufgenommen würde und als Alternative in das öffentliche Stromnetz eingespeist wird. Bei einem Sonnentag im Frühling hält dieser Zustand für 2 Stunden an und bringt konstant mehr als 350 Watt. Im Umkehrschluss können pro Sonnentag 180 GHs*2 = 360 GHs an an Arbeit im Bitcoin Netzwerk geleistet werden. Der daraus erzielbare *Ertrag* liegt im Pool bei etwa 0,001 BTC  bedeutet, dass man bei aktueller Schwierigkeitsstufe (erhöht sich im Netzwerk mit der Zeit) rund 300 Sonnentage benötigt, bis sich die Hardware (0,29 BTC) gerechnet hat. Die Alternative bedeutet, dass man zum Preis der Einspeisevergütung (15 Cent/KWh im hiesigen Fall) in das Netz einspeist. Verrechnet kommt man auf 720 Sonnentage, bis sich der Versuch tatsächlich rechnet und über der Einspeisevergütung einen Ertrag erwirtschaftet. Zu bedenken ist der schwankende Kurs für Bitcoins und natürlich die zunehmende Schwierigkeit des Minings. Zu Abrundung: Bei der Anlage kommen wir auf 250 Sonnentage im Jahr – macht einen „ROI“ von 3 Jahre.

## Netzdienliches Bitcoin Mining

### Haltung des Spannungsniveaus

Die isolierte Betrachtung an einer PV-Anlage bleibt Spielerei. Generell kann man sagen, dass das die Einspeisung von wetterfühligen Kraftwerken in das Stromnetz eine Herausforderung ist, die sich durch die Vernetzung verbessert – aber auch weitere Optionen ermöglicht. Wie in vielen Verteilnetzen gibt es auch hier ein Problem mit dem Spannungsniveau. Gerade in den Nachtstunden, wenn der Verbrauch generell sehr niedrig ist, kommt es zu Spitzen über 245 Volt, ein Anzeichen, dass zuviel Strom im Netz vorhanden ist. Sogenannte [RONTs](https://blog.stromhaltig.de/search/ront) (Regelbare Ortsnetztrafos) können hier zum Teil steuernd eingreifen, jedoch gibt es Grenzen. Steigt zu einem Zeitpunkt die Spannung in einem Verteilnetz, dann steigt auch die Verluststrommenge.

Gesetzt der Fall, man könnte mit dem Verteilnetzbetreiber einen Deal vereinbaren: Immer dann, wenn die Spannung über einen Grenzwert steigt, darf schaltet man den Miner hinzu. Der Strom, der vom Rechenwerk benötigt wird, ist dann gratis und muss nicht bezahlt werden. Im Gegenzug bleiben die Hardwarekosten (etwa 80€ – ohne Stromzähler) bei mir hängen. Im Jahre 2014 gab es bei mir insgesamt 1157 Stunden eine Spannung von mehr als 245 Volt – ziehen wir ein paar Stunden ab, bei denen der Verteilnetzbetreiber aktiv das Gerät schalten darf, dann kommen wir auf 1000 Stunden Betrieb und auf einen Ertrag von 0,5 BTC/Jahr. Ergibt einen ROI von 7 Monaten.