---
title: Distributed Tracing in unserem Ökosystem
date: 2021-01-19T17:38:49.246Z
description: Das Corrently Ökosystem deckt die gesamte Wertschöpfungskette der
  Stromwirtschaft ab. Neben der Blockchain-Komponenten sind es sogenannte
  Micro-Services, welche im Hintergrund für die richtigen Abläufe, Governance
  und Datenverarbeitung sorgen. Mit Hilfe von Jaegertracing zeigen wir in diesem
  Beitrag, was innerhalb von 60 Sekunden an einem Dienstag Abend an interner
  Kommunikation stattfindet.
image: img/hunter-1503082_640.jpg
---


[Jaegertracing](https://www.jaegertracing.io/) ist ein OpenSource System, welches es erlaubt eine Microservice Umgebung zu überwachen und besonders die interne Kommunikation, d.h. die Aufrufe und den Austausch zwischen den Services zu beobachten. 

Im Corrently Ökosystem existieren aktuell 86 Microservices, die unterschiedlichste Aufgaben durchführen. Das Jahr 2020 hatte bei uns das [Molecular Framework](https://moleculer.services/) gebracht, welches auf den einzelnen physikalischen Servern dafür sorgt, dass die Dienste im Haus ausgeführt werden und nicht zum Beispiel in der AWS Lambda Cloud. Eine Prämisse, die wir als Energieversorger für sehr wichtig erachten, da wir so weniger Abhängigkeiten beim Datenschutz und IT-Sicherheit zu Drittanbietern haben.

![](img/jaeger_ui.png "60 Sekunden Trace mit Jaeger UI")

Zunächst fällt auf, dass 14 der 86 Services aufgerufen wurden, dies ist gut, zeigt aber auch, dass die Welt bei uns sehr viele Abhängigkeiten hat.  Grob kann man die funktionalen Einheiten in 3 Cluster unterteilen, die sich so oder ähnlich bei nahezu jedem Versorger finden lassen. 

### Bank, Cori, Co2 - Unser Blockchain Komponenten

Bei diesen Diensten geht es vor allem um digitales Eigentum (Digital Assets) und dessen Nachweisführung. Der Service Bank schirmt hierbei im Corrently Ökosystem die Blockchain uns ihre Ökonomie von der restlichen Prozesswelt ab und ist über verschiedene Knoten verteilt aufgesetzt. Aktuell "laufen" ca. 5 Instanzen des "Bank" Services auf verschiedenen Knoten.

CORI steht hier übrigens für Corrently-Invest-Token, das ist die Verwaltung unseres Portfolios an Erzeugung und der Broker für den Tausch von GrünstromBonus in Anlagenteile.

## MPO, Discovergy, Metering, WMSB - Bewirtschaftung von Netzanschlüssen

Letztendlich macht ein Energieversorger nichts anderes, als die Bewirtschaftung von Netzanschlüssen durchzuführen. MPO steht für Meter Point Operator, wMSB für wettbewerblichen Messstellenbetrieb. Unterprozesse, die wir über die Marktkommunikation bespielen, lediglich bei unserem Partner Discovergy nutzen wir einen direkten [API Zugang](https://api.discovergy.com/docs/), weshalb es hier einen eigenen Microservice als Schnittstelle gibt. Wie man allerdings erkennen kann, ist dies nur ein Bruchteil der Datenlieferungen von den Zählern, welche für den letzten Cluster an Services herangezogen wird.

##  Tarif, Dispatch, GSI, Strommix - Der GrünstromIndex

Der [GrünstromIndex](https://www.gruenstromindex.de/) (GSI) ist Teil unserer Corrently DNA. Damit dieser funktioniert und auch die tatsächliche Verteilung von Strom (Dispatch) steuern kann, benötigt er Daten. Dieses Cluster daher den Bereich, in dem wir wirtschaftlich das meiste Potenzial erschließen.