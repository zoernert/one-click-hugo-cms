---
title: Schnittstellen für den Energiemarkt mit re.alto
date: 2021-07-06T11:50:37.696Z
description: >
  Wenn man sich als digitalen Stromanbieter bezeichnet, muss man mit der Zeit
  gehen. Schnittstellen für den Energiemarkt sind heutzutage gefragt wie nie.
  Der Nutzen von Schnittstellen ist vielseitig: Zeit- und damit Kostenersparnis,
  Know-How-Integration oder einfach nur Wissenaquirierung über den
  Energiesektor. Corrently hat nun sein Energie-Know-How mit der Öffentlichkeit
  geteilt und mit re.alto hauseigene Schnittstellen auf dem re.alto Marktplatz
  verfügbar gemacht.
image: img/realtocorrently.png
---
Auf dem [re.alto Marktplatz](https://portal.realto.io/browse-apis) befinden sich jetzt 4 verschiedene Corrently Schnittstellen.

## Market-Data

Hast du dich schon gefragt mit welchem effektiven Arbeitspreis der Corrently Tarif bei dir berechnet wird? Mit der [Market-Data Schnittstelle](https://portal.realto.io/browse-apis/corrently-market-data/details) kannst du das jetzt bei Bedarf immer abrufen. Mit einer einfachen Abfrage, welche deine Postleitzahl sowie Start-und Endzeitpunkt der Abfrage enthält, liefert dir die Schnittstelle den netto Arbeitspreis, über den abgefragten Zeitraum, in Euro/MWh zurück.

## Dispatch

Wie sieht wohl die Ökostromverteilung bei mir aus und wo wird die Energie eigentlich konkret erzeugt? Wenn du das schon immer wissen wolltest ist die [Dispatch Schnittstelle](https://portal.realto.io/browse-apis/corrently-dispatch/details) genau das richtige für dich. In Abhängigkeit der Postleitzahl wird dir genau aufgezeigt welche Energie wo gerade erzeugt wird. Das Ergebnis lässt sich z.B. mit der [Google Maps API](https://developers.google.com/maps?hl=de) verknüpfen, um so eine Karte für die Verteilung der grünen Energie zu erstellen.

## GrünstromIndex

Der bekannte [GrünstromIndex](https://portal.realto.io/browse-apis/corrently-green-energy-data/details) befindet sich auch auf dem re.alto Marktplatz. Bis zu 36 Stunden im Voraus erhältst du für deine Postleitzahl den GrünstromIndex der Gegenwart und Zukunft. Mit einer Abfrage lässt sich so prüfen wie man die nächsten Stunden so umweltfreundlich wie möglich gestaltet. Auch eignet sich die Schnittstelle hervorragend, um sie in Energie-Projekte jeglicher Art zu integrieren.

## Best-Hour

Soll ich die Wäsche jetzt schon waschen, um einen günstigen Preis zu erhalten und dabei möglichst umweltfreundlich sein? Für diese Art von Fragen gibt es die [Best-Hour Schnittstelle](https://portal.realto.io/browse-apis/corrently-green-energy-data/details). Sie liefert einem ein einfaches Signal zurück: 1 für ja, 0 für nein. Die Abfrageparameter lassen sich selbst bestimmen. Dazu gehören wie viele Stunden das Gerät laufen soll und in welchem Zeitraum. Somit lässt sich der GrünstromIndex bestmöglich und komfortabel für die Schaltung von Verbrauchern nutzen.