---
title: Eine Quittung für den Ladevorgang bitte?
date: 2021-06-06T12:11:15.783Z
description: Wer jemand anderem Strom gegen Geld liefert, der benötigt hierfür
  nicht nur eine eichrechtskonforme Messung der gelieferten Energiemenge,
  sondern auch ein paar Pflichtangaben auf dem Beleg (Quittung). Mit einem
  kostenlosen Online Service von Corrently kann man nun in wenigen Sekunden eine
  Quittung  ausstellen und dem Zahlenden zukommen lassen.
image: img/calculator-453792_640.jpg
---
## [Strom-Quittung erstellen](https://corrently.de/service/quittung.html)

![Beispielquittung für einen Ladevorgang](img/beispiel_quittung_output.png "Beispielquittung für einen Ladevorgang")

Jede Quittung erhält automatisch eine eindeutige Belegnummer in Form einer Signatur in der Corrently-Blockchain. Diese garantiert, dass die Werte nicht nachträglich verändert werden können. Der QR-Code beinhaltet den direkten Link in Form eines Zertifikates, der auch einen späteren Abruf zulässt. 

## OpenAPI - Nutzung in eigene Anwendungen

Der Online-Service auf unserer Seite basiert auf den [OpenAPI Endpunkt "tariffcomponents"](https://corrently.io/#operation/tariffcomponents), wodurch er selbstverständlich auch in anderen Diensten/Apps genutzt werden kann. Benötigt wird lediglich die zu quittierende Energiemenge und die Zeitdauer des Vorgangs. Informationen, die zum Beispiel Wallboxen über ihre jeweiligen Schnittstellen zur Verfügung stellen.