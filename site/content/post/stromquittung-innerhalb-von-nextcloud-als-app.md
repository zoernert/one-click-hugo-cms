---
title: StromQuittung innerhalb von Nextcloud als App
date: 2021-07-16T23:39:25.143Z
description: "NextCloud hat sehr wenig mit Energie-Management zu tun. Aber, es
  ist für viele eine beliebte Lösung wichtige Dokumente abzulegen. Mit einer
  neuen Erweiterung wird das Erstellen eines Beleges für das heimische Laden zur
  Abrechnung mit dem Arbeitgeber zum Kinderspiel. Click und fertig ... und das
  sogar noch mit einer lokalen REST Schnittstelle zum Andocken des
  Energie-Managements. "
image: img/strom-quittung.png
---
Auch wir bei der **STROM**DAO nutzen für viele unserer täglichen Prozesse die Dienste von Nextcloud, welche auf unseren Servern installiert ist. Dateiablage, Chat - ja, sogar die Belege für die Buchhaltung dort in Ordner abgelegt und am Anfang des Monats einfach per Link an den Steuerberater "freigegeben".

Was uns immer ein Dorn im Auge gewesen ist, ist die unsagbar komplizierte Abrechnung des heimischen Ladens unserer Geschäftswagen. Man könnte denken, dass dies für Mitarbeiter eines Stromanbieters ein Kinderspiel ist - und irgendwie unbürokratischer "auf dem kleinen Dienstweg" erledigt werden kann, aber weit gefehlt. Zumindest bislang. 

Nach der Installation der Erweiterung aus dem [Nextcloud Apps Store](https://apps.nextcloud.com/apps/stromquittung) genügt ein Klick auf das Icon und schon kann ein Ladevorgang in einen Beleg umgewandelt werden. Gespeichert wird der Beleg direkt in der Nextcloud als PDF Dokument. 

Hat man seine Wallbox an ein Energie-Management oder Smart-Home angebunden, so kann dieses die Daten des Ladevorgangs direkt an die StromQuittungs App von Nextcloud übermitteln. Per REST-Aufruf müssen lediglich die gelieferte Strommenge sowie die Dauer der Stromlieferung (Ladevorgang) übergeben werden, und schon sind diese Felder bei der Erstellung der nächsten Quittung vorausgefüllt.