---
title: ZUGFeRD 2.1 in StromQuittung 1.1
date: 2021-07-29T22:03:52.586Z
description: >+
  ZUGFeRD ist ein branchenübergreifendes Datenformat für den elektronischen
  Rechnungsdatenaustausch, welches auf Industriestandards setzt und in von
  vielen Buchhaltungs- und ERP-Softwaresysteme unterstützt wird.  Im Rahmen der
  ersten technischen Erweiterung der StromQuittung ist diese nun noch einfacher
  in bestehende Arbeitsabläufe von Unternehmen und Behörden integrierbar.

image: img/mare-4170531_1280.jpg
---
Mit [ZUGFeRD](https://www.ferd-net.de/) ist ein Standard für elektronische Rechnungen geschaffen, der auch für Energieabrechnungen genutzt werden kann. Da der Energiemarkt aufgrund abweichender Geschäftsprozesse teilweise spezifische Anforderungen an Energierechnungen vorschreibt, benötigt die Umsetzung in einen Online-Service wie die [StromQuittung](https://corrently.de/service/quittung.html) einige Interpretationen und Standardisierungen bei der tatsächlichen Implementierung. 

Unter Berücksichtigung der [Umsetzungsempfehlung der EDNA](https://www.meine-energie.de/media/umsetzungsempfehlungen_zugferd_2.0.pdf) ist so eine sehr praktische Erweiterung der StromQuittung entstanden, welche auf der einen Seite weiterhin eine schlanke und effiziente Methode der Belegerstellung von Stromlieferungen an Dritte ermöglicht. Dennoch, auf der anderen Seite die Vorgaben für eine automatisierte Massenbelegverarbeitung erfüllt.

## Motivation: Massentauglichkeit

Beim Verband e-Rechnung (VeR) kann man [nachlesen](https://www.verband-e-rechnung.org/news/branchennews/enbw-setzt-bei-rechnungen-auf-zugferd/), dass Konzerne wie die EnBW jeden Monat mehr als 20.000 Rechnungen von ihren Lieferanten und Dienstleistern verarbeiten. Diese Menge ist nur möglich, wenn Rechnungsprüfung, Belegerfassung und selbstverständlich auch die Langzeitarchivierung automatisiert und digitalisiert ist. Die Verarbeitung von kleineren Belegen über ein paar Euro können sehr schnell in der internen Verarbeitung zu hohen Prozesskosten führen. 

Stellt man sich nun vor, dass im Zuge einer Elektrifizierung der Firmenwagenflotte eine Unmenge von *"Ladebelege"* zusätzlich erfasst werden müssen, dann ist dies nur möglich, wenn es keine manuellen Prozessschritte gibt und von Rechnungsempfang über Auszahlung, bis zur Langzeitarchivierung alle Schritte ohne Interaktion eines Mitarbeiters möglich sind. Was bei manchen Taxi-Quittungen heute bereits Standard ist, ist für die Abrechnung von Ladevorgängen oder Energieabrechnungen ein Novum. 

## Umsetzung: Corrently StromQuittung

Belege bei einer StromQuittung sind konzipiert, dass sie mit wenigen Interaktionsschritten direkt am SmartPhone ausgestellt werden können. Die Daten, welche aus der Domain der Energiewirtschaft stammen, werden direkt aus dem relevanten System wie Wallbox, SmartMeter oder auch CRM System übernommen. Mithilfe der [Corrently API](https://corrently.io/)  sind diese Schritte auch vollständig automatisierbar, wie eine [Zappier basierte Implementierung](https://zapier.com/developer/public-invite/141502/84bb9fa622b1679e6f5ead9ae2f11e01/) zeigt. Das Ergebnis ist am Ende immer eine Quittung, die man sich online ansehen kann - oder als PDF herunterladen kann.

Eine automatisch verarbeitbare elektronische Rechnung, und besonders eine mit ZUGFeRD informationen, besteht aus zwei Teilen. Zum einen eine Repräsentation, die menschenlesbar ist und sehr stark an eine gedruckte Rechnung ähnelt. Der zweite Teil ist ein maschinenlesbares XML Dokument, welches direkt, aber unsichtbar, in das PDF Dokument eingebettet ist. Mit Werkzeugen wie dem [Mustang Project](https://www.mustangproject.org/) kann das XML-Dokument ausgelesen und weiterverarbeitet werden. 

Die Besonderheit der Umsetzung für die StromQuittung ist, dass die technische Sicherheitseinrichtung, bestehend aus einer digitalen Identität des Beleges selbst und seiner Signaturen durch die [EnergyChain](https://github.com/energychain/) abgesichert werden und so auch nachträglich digital verarbeitet werden können.