---
title: Wie der Kühlschrank seinen Strom selbst zahlt...
date: 2021-07-25T12:32:49.193Z
description: ... muss man zunächst wissen, welcher Verbrauch der Kühlschrank
  hatte und daraus einen Beleg erstellen können. Der Geschäftsvorfall ist eine
  Drittbelieferung, welche vollständig automatisch ablaufen soll. Mithilfe von
  Node-RED 2.0 zeigen wir exemplarisch, wie dieser Anwendungsfall umgesetzt
  werden kann.
image: img/selbstzahler_kuehlschrank.png
---
![](img/node-red-flow-geraeteerkennung.png)

Innerhalb von Node-RED wird der Prozess aufgebaut ([Beispiel](https://flows.nodered.org/flow/e9e2efee925a061ab8dc5f8ab95204ce)), welcher letztendlich nur die Daten aus dem Event-Emitter aufbereitet und uns eine einfache Belegliste zur Verfügung stellt. Auf der Belegliste sind alle Quittungen, die erstellt worden sind abrufbar. 

Da man am besten vom Ergebnis aus denken kann, gibt es hier eine [Strom-Quittung als PDF](https://corrently.de/download/0x0a5D0a001D5b28714B769479856BB478955377Ee.pdf), die auf Basis dieses "Flows" in Node-RED erstellt wurde.

## Event-Emitter - Ereigniss Generator 

Zunächst benötigen wir eine Möglichkeit zur erkennen, wann der Kühlschrank gelaufen ist. Hierfür nutzen wir die Geräterkennung eines [GrünstromZählers](https://www.corrently.de/l/bestellung-smartmeter.html) (Smart-Meter), der zwar nicht in Echtzeit, jedoch ausreichend häufig die einzelnen Ereignisse des Gerätes liefert. 

Im nächsten Schritt werden die Daten der einzelnen Ereignisse angereicht mit den Daten, die für eine ordentliche Strom-Quittung benötigt werden. 

Der Event-Emitter kann mit jedem beliebigen System/Node ersetzt werden, welches Ereignisse generiert, die eine Dauer und eine Strommenge besitzen. Dies könnten natürlich auch Ladevorgänge des eAutos sein, oder sonst eine Verbrauchsmessung.