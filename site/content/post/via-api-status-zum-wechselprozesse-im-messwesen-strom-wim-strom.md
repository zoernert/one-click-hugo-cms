---
title: "Via API: Status zum Wechselprozesse im Messwesen Strom (WiM Strom)"
date: 2021-03-27T12:31:36.160Z
description: In der openAPI des Corrently Ökosystems sind
  nun  Statusinformationen der Wechselprozesse und der Marktkommunikation
  abrufbar. Dem Ziel einer transparenten Kommunikation für Stromkunden zu jedem
  Zeitpunkt können wir damit ein großes Stück näher kommen und setzen neue
  Maßstäbe hinsichtlich Verbraucherinformationen und Datentransparenz.
image: img/edv_dose.png
---
Wechselt ein Stromkunde seinen Stromanbieter oder seinen Zähler, so läuft im Hintergrund die sogenannte [Marktkommunikation](https://www.energynet.de/2018/10/08/blockchain-technologie-in-der-energiewirtschaft/) statt. Zwischen den Akteuren wie Vorversorger, Netzbetreiber und Messstellenbetreiber werden automatisiert Informationen ausgetauscht, bis der Wechsel endgültig vollzogen ist. Da dies im Verborgenen passiert kommt es in der Praxis zu sehr vielen Unstimmigkeiten. 

So erkennen wir bei unseren Kunden häufig, dass bei Eheleuten nur eine Person als Anschlussinhaber eingetragen ist und der neue Stromvertrag auf das Paar abgeschlossen wird. Die Folge ist, dass der Netzbetreiber den Wechsel ablehnt. Es existieren unzählige Fälle und Varianten, die es aus Sicht des Kunden schwierig machen zu verstehen, was eigentlich der Status seines Wechselauftrages ist.

Um [Partnern](https://corrently.de/post/corrently-partnerprogramm-gestartet/), aber vor allem Kunden die Möglichkeit zu geben, den Status zu sehen, haben wir eine[ API Schnittstelle](https://corrently.io/#operation/wimstatus) eingerichtet, bei der eine Abfrage möglich ist. Bislang wurden die Kunden einzig über "wichtige" Schritte, wie die Kündigung beim Vorversorger oder den eigentlichen Lieferbeginn per Mail informiert. Bei der WiM-API können die Informationen deutlich feingranularer abgerufen werden.