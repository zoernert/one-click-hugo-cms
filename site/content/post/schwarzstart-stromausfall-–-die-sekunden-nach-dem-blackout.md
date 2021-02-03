---
title: "Schwarzstart: Stromausfall – Die Sekunden nach dem Blackout"
date: 2021-02-03T10:06:48.720Z
description: Unter Schwarzstartfähigkeit versteht man zunächst die Möglichkeit
  ein Netzsegment, Verteilnetz oder sogar eine ganze Regelzone nach einem
  Stromausfall wieder mit Strom zu versorgen. Nur wenn dies sichergestellt ist,
  können längere Ausfälle vermieden werden. Eigentlich ein Thema des
  Netzbetriebs, das ansonsten kaum jemanden zu interessieren hat. Eine
  Herausforderung des Netzumbaus ist aber, dass man die Schwarzstartfähigkeit
  zwar sicherstellen muss, aber sie eigentlich nicht endgültig beweisen kann.
  Windenergie, Solarstrom und Wasserkraft dürfen bei der Machbarkeitsüberprüfung
  nicht vernachlässigt werden. Simulation hilft…
image: img/schwarzstart_simulation-300x182.jpg
---
Die Vermutung liegt nahe, dass gerade die schlechte Beweisbarkeit, ob das Stromnetz im Falle eines Kollapses/Stromausfalls wieder gestartet werden kann,  dazu führt, dass schon in naher Zukunft Ansprüche gestellt werden bestimmte Anlagen oder Einrichtungen mit Geld zu unterstützen. Mit Hilfe einer speziell für den  [Test von Smart Grids konfigurierte Simulationsumgebung](http://grid.stromhaltig.de/) können die relevanten Eigenschaften überprüft werden. Ein Schwarzstart wird bei der Smart Grid Simulation automatisch bei jedem Neustart der Simulation getestet.

## Auswirkung auf dezentrale Stromerzeugung

Bei einem Stromausfall ist kein Strom vorhanden. Dies ist sehr einleuchtend, bedeutet aber auch, dass zum Beispiel keine Netzfrequenz mehr vorhanden ist. Der Wechselrichter einer PV-Anlage kann somit auch erst Strom einspeisen, wenn er eine Netzfrequenz ermitteln kann mit der die Erzeugte Strommenge moduliert werden muss.  Diese Frequenz wird allerdings erst dann wieder vorhanden sein, wenn das Stromnetz an sich bereits wieder verfügbar ist. Um ein bestimmtes Netzsegment wieder hochfahren zu können, muss dessen vertikale Last (Summe aus Gesamtverbrauch abzüglich der Einspeisung)  bekannt sein. Die für den Start eingesetzte Erzeugungsquelle (zum Beispiel ein anderes Netzsegment) muss diese Last akzeptieren können, ohne selbst in einen Energie-Defizit zu geraten.

## Ausschluss Dominoeffekt

Wie ein Schwarzstart nicht ablaufen sollte, konnte man vor einigen Jahren [in den USA erleben](http://www.welt.de/vermischtes/article8348151/Klimaanlagen-bescheren-New-York-Stromausfall.html). Den Netzbetreibern war beim Zuschalten der einzelnen Segmente schlicht nicht klar, welche vertikale Netzlast das jeweilige Segment hatte. Bereits im Jahre 2003 wurde bei ähnlichen Bedingungen ein Dominoeffekt ausgelöst. Der Ausfall in einem Segment sorgte beim Startversuch zu einer zu starken Belastung des nächsten Segmentes usw… bis schließlich die halbe Ostküste ohne Strom war. Auch bei der SmartGrid Simulation konnte man schön beobachten, dass die (automatisierte)  Nutzung von Nachbarsegmenten eine große Gefahr von Flächenausfällen birgt. Die PV-Anlagen hatten dabei sogar eine stabilisierende Wirkung, denn in den ersten Sekundenbruchteilen sorgte die (geringe) Latenz der Wechselrichter für eine Frequenzstabilisierung. Bei der Simulation eines sonnigen Winterabends führte dies allerdings zu einem Art Stottereffekt, welcher ohne Veränderung der Parameter über mehrere Minuten aufrecht blieb, bevor das Netz wieder vollständig zusammenbrach.

Auffällig war beim Schalten einiger Segmente, dass Verhalten der Verbraucher. Soweit bekannt gab es bislang keine Untersuchung wie sich eine Sammlung von verschiedenen Verbrauchern beim Neustart verhalten. Bei den ersten Versuchen mit der Smartgrid Simulation wurde erschreckend festgestellt, dass viele Großverbraucher (Wärmepumpe, Kühlschrank,…) beim Neustart innerhalb von wenigen Sekunden die volle Netzlast ziehen. Dies bedeutet, dass die nach einem längeren Ausfall auftretende Belastung deutlich über der Belastung liegen dürfte, die zur gleichen Zeit unter normalen Bedingungen vorherrschen würde. Aktuell wird gerade untersucht, ob das sofortige Aussenden eines Lastabwurfs an die Rundsendeempfänger (Stromunterbrechung bei Wärmepumpen) rechtzeitig Wirkung zeigt, bevor die hohe Last zu einem erneuten Ausfall führt.

## Kraftwerke zum Schwarzstart

Die PV-Anlagen können den Neustart etwas stabilisieren, jedoch nicht eine initiale Frequenz und Spannung im Netz bereitstellen. Im klassischen Netzbetrieb ist die Wasserkraft für einen Schwarzstart sehr geeignet, besonders aus Pumpspeicherkraftwerken, da die Lastspitze leichter ausgleichen lässt. Auch Strom aus Windkraft könnte hilfreich sein, jedoch werden die meisten Windräder mit einem Fernzugriff betrieben. Kommt es zu einem Stromausfall, so ist auch die Fernwartung einer Anlage zunächst nicht möglich. Um ein Windkraft schwarzstartfähig zu machen, müsste es eine Form von Notstromversorgung haben und eine durch Notstrom gesicherte Telekommunikationseinrichtung.

## Gelerntes für den Netzbetrieb

Bei der Simulation der Schwarzstarfähigkeit konnten etliche Effekte erkannt werden, die entscheidenden Einfluss auf den Netzbetrieb haben könnte. Deren Sammlung uns Ausarbeitung würde den Rahmen eines Blogbeitrages deutlich sprengen. Es ist allerdings davon auszugehen, dass durch entsprechende Verfahrensanweisungen (manuell) und automatisiert auf Level 2 der SCADA Integration. Schnittstellen,  in die Simulation zukünftig implementiert werden sollten, sind somit zwischen Level 1 (Ebene RTUs/Kommunikation) und Level 2 (Business Rules) anzusiedeln. Ein wichtiger Punkt, der erst im Laufe des Aprils näher untersucht wird, ist die Phasenverschiebung. Hier hatten Vorabtests gezeigt, dass es zu extremen Schwankungen kam.

## Gelerntes für den Stromkunden

Sollte es wirklich zu einem großflächigen Stromausfall kommen, so sind Stromabnehmer gut beraten etwas beim Hochfahren des Stromnetzes beizutragen. Es ist  davon auszugehen, dass die Netzbetreiber nur wenige Informationen zur Verfügung haben, welche Energie beim Hochfahren benötigt wird. Die Steuerung/Verteilung ist dabei leider nicht so feingliedrig möglich, dass ein Zuschalten von einzelnen Teilbereichen nicht zu einer signifikanten Belastung (noch) funktionierender Nachbarn führt. Abschalten was abzuschalten geht sollte daher die höchste Priorität haben. Dabei reicht es nicht, dass die Geräte vom Netz genommen werden, die ohnehin per Stecker oder Schalter ständig geschaltet werden können. Viel wichtiger ist es Kühlschränke, Wärmepumpen und Umwälzpumpen vom Netz zu trennen (per Sicherung Ausschalten?) und so lange vom Netz zu lassen, bis die Stromversorgung wieder stabil ist.

## Netz kein Netz, sondern viele Inseln?

Wer Eigenstrom Nutzer ist, der hat bereits eine Notstromversorgung auf Zeit. Eigenstromversorgung wurde daher manchmal auch als Inselbetrieb bezeichnet. Jedes Verteilnetz für sich betrachtet kann auch eine Insel darstellen. Großflächige Ausfälle sind nur möglich, wenn der Zustand der einzelnen Inseln unklar ist. Bei einem Schwarzstart könnte man hergehen und zunächst alle Inseln getrennt betrachten und somit das Netz zunächst auflösen.  Ländliche Gebiete mit potentiellem Überschuss könnten zuerst wieder mit Strom versorgt werden. Nach erfolgreicher Stabilisierung wird dann nach das Netz wieder aufgebaut (vergl. [Versorgen irgendwann die Dörfer die Städte](https://blog.stromhaltig.de/2013/02/heidelberg-versorgen-irgendwann-die-dorfer-die-stadte-mit-strom/)). Notwendig ist hierfür allerdings eine dynamisch erzeugte Prioritätsliste. Die höchste Prioritätsliste hat dabei die Gemeinde mit dem höchsten zu erwartenden Energieüberschuss aus Basis der EE-Erträge. Ein operatives Beispiel wird in den nächsten Wochen veröffentlicht.

## Empfehlung: Flächentest

Im Januar 2013 gab es etliche Medienberichte und Veröffentlichungen zu den verschiedenen Szenarien bei einem längeren, großflächigen Stromausfall. Es ging um die Erstellung von Szenarien für den Katastrophenschutz/Bevölkerungsschutz. Eine wichtige Erfahrung aus der [Grid Simulation](http://grid.stromhaltig.de/) ist, dass man nie genug Daten und Erfahrungswerte haben kann. Ohne größere Einschränkungen könnten diese Daten systematische gesammelt werden. Jedes Unternehmen/Haushalt, der mit einem intelligenten Stromzähler ausgestattet ist, wird verpflichtet einmalig – zu einem von ihm definierten Zeitpunkt den eigenen Stromverbrauch für wenige Minuten zu trennen. Dieser Zeitpunkt ist vorab mit dem Netzbetreiber abzustimmen, damit Werte für verschiedene Tages und Jahreszeiten erhoben werden können. Der Netzbetreiber wird die Zählerdaten für die Trennung aggregieren und statistisch zusammenführen. Es entsteht ein Profil, welches im Ernstfall zwischen Minuten-Ausfall und Wochen-Ausfällen entscheiden kann.