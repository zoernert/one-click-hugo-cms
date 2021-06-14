---
title: Corrently OCPP Ladesäulen Simulator
date: 2021-06-14T08:22:56.785Z
description: "Durch die angestoßene Verkehrswende und der damit verbundenen
  Abkehr von spritbetriebenen Fahrzeugen werden immer mehr Ladesäulen benötigt.
  Das bestätigen auch die Zahlen: Im Verhältnis zum Vorjahr hat sich die Menge
  von elektrisch angetriebenen Kraftfahrzeugen auf Deutschlands Straßen mehr als
  Verdoppelt."
image: img/ladesaeule-elektroautos.jpg
---
**Eine klare Kommunikation ist essenziell**

Mit dem Vormarsch der E-Autos und Ladesäulen muss eine einwandfreie Kommunikation zwischen den beiden Entitäten gewährleistet sein. Denn die Messlatte des einfach zu handhabenden Tankvorgangs liegt hoch: Zapfhahn in den Tankstutzen, Hebel ziehen, Zapfhahn herausnehmen und die Sache hat sich erledigt. Dieses Prinzip (in elektrischer Form), wird auch für E-Autos angestrebt und faktisch gewährleistet.

**Corrently spricht OCPP**

Um die Kommunikation zwischen E-Auto und Ladesäule herstellerunabhängig sicherzustellen, wurde das Open Charge Point Protocol (OCPP) entwickelt. Auch macht es OCPP möglich, dass Ladesäulen mit Verrechnungs- sowie Management-Systemen von Ladeinfrastrukturen kommunizieren können. Den offenen Zugang des Protokolls hat sich Corrently zu Nutze gemacht und einen OCPP Simulator veröffentlicht.

**Der Ladesäulen-Simulator**

Das Open Charge Point Protocol hat sich mitlerweile als Standard in der Ladestation-Welt etabliert. Da das Protokoll nicht nur Ladesäulenherstellern vorbehalten ist, sondern öffentlich einsehbar, findet man es auch in diveresen Open Source Projekten. Unter anderem auch in [OpenEMS](https://openems.io/), das OCPP für seine implementierte Ladesäulenansteuerung verwendet.

Corrently hat nun eine Spielwiese für begeisterte E-Auto Pioniere sowie welche die es werden wollen entwickelt und kostenlos zur Verfügung gestellt.

[https://ocpp.corrently.cloud](https://ocpp.corrently.cloud/#) bietet die Möglichkeit Ladevorgänge zu simulieren. Einfach die gewünschten Daten eintragen, verbinden, authorisieren, die Transaktion starten und danach wieder stoppen. Auch stehen weitere Funktionen zur Verfügung.

Jeder OCPP Client benötigt einen Buchhalter. Das sogenannte OCPP Backend. Das Backend kommuniziert mit dem OCPP Client und speichert die Informationen der Ladevorgänge. In der vorausgefüllten Standardeinstellung wird das dafür entwickelte Corrently-OCPP-Backend verwendet. Natürlich steht es jedem findigen E-Auto-Liebhaber frei einen anderen Endpunkt für das OCPP Backend zu verwenden.

Somit ist alles notwendige gesagt und die Zellen mit den nötigen Informationen geladen. Jetzt heißt es Ladevorgänge simulieren, um weitere Informationen in das Gehirn zu fließen zu lassen!

## [Corrently Ladesäulen Simulator](https://ocpp.corrently.cloud)