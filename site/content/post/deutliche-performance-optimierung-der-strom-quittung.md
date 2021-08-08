---
title: Deutliche Performance  Optimierung der Strom-Quittung
date: 2021-08-08T10:50:04.067Z
description: Bislang wurde ein externer Dienst zum Erstellen der QR-Codes
  genutzt, welche zum Beispiel das direkte Zahlen des Beleges per Kreditkarte
  ermöglichen. Im Release von diesem Wochenende wird nun vollständig auf eigene
  Dienste gesetzt.
image: img/strom-quittung.png
---
Nicht nur aus Gründen des Datenschutzes ist die Nutzung eines externen Dienstes (hier QR-Server) immer schwierig. Gerade die Performance leitet, worunter der Nutzerkomfort leidet.

Im aktuellen Release des Online-Dienstes [Strom-Quittung](https://strom-quittung.de/)  wird nun auf interne Dienste gesetzt, welche direkt im Corrently Ökosystem implementiert wurden. Dauerte die Erstellung einer neuen Quittung bislang etwas mehr als 5 Sekunden, so wird der vollständige Signatur- und Generierungsprozess nun in unter 2 Sekunden abgeschlossen.