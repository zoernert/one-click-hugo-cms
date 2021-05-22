---
title: Wallbox Sharing geht in die Testphase
date: 2021-05-22T22:17:10.448Z
description: >-
  "Schnell mal beim Nachbarn den Plugin-Hybriden laden, die eigene Wallbox ohne,
  dass einem selbst Kosten entstehen auch anderen zugänglich zu machen.
  Unkompliziert und frei von unnötigen Hürden. "


  Mit diesen Worten könnte man die Ergebnisse einer Umfrage unter Correntlyanern beschreiben. Zeit den nächsten Schritt zu wagen...
image: img/co2_armes_laden.png
---
Noch immer können [Wünsche geäußert werden](https://stromdao-gmbh.ideanote.io/login/link/070efcae1b3d1ceb0c5e8a17), wie ein perfektes e-Parkplatz-Sharing aussehen soll, doch schon jetzt zeichnen sich einige Trends ab, die wir umsetzen. Dachten wir zunächst an komplizierte Messtechnik und noch viel komplizierteren Abrechnungslogiken, so konnten wir das System deutlich entschlacken. Nur, weil es ultra-nervig ist die richtige App oder Ladekarte an einer öffentlich geförderten Ladesäule zu finden, muss es das nicht sein, wenn man bei einem privaten Stellplatz laden möchte. Ein einfacher QR-Code genügt.

## Willst Du mal bei uns parken und laden?

Im nächsten Schritt stellen wir unseren Parkplatz als Realtest zur Verfügung. Der Clou ist, man muss nicht einmal hier in Mauer vor Ort sein, denn was auf dem QR-Code hinterlegt ist, ist letztendlich eine mobile Webseite, die  man natürlich auch aufrufen kann, wenn man am anderen Ende der Welt ist. 

Kostenlos parken und laden: [Gleich mal probieren](https://corrently.de/service/parken.html).

Die zwei vorhandenen Wallboxen (KEBA und EASEE) sind dauerhaft freigeschaltet. Allerdings werden die abgenommenen Strommengen über die [Corrently API](https://corrently.io/) überwacht und so sichergestellt, dass der Ökostrom, der hier geladen wird immer CO2 neutral bleibt. 

## Vollintegrierte Parkplatzvermietung aus der Cloud

Betrachtet man das [entstandene Geschäftsmodell](/post/parkplatzvermietung-zul%C3%A4ssig-trotz-vorhandener-ladestation/) , sowie dessen Implementierung in das Corrently Ökosystem einmal genauer an, so sieht man, dass es sich eigentlich um eine auf die cloudbasierte Parkplatzvermietung handelt.  [Anbieter von Parkflächen](/service/parksite.html) verlinken ihren Stripe Account und können direkt loslegen. Quasi geschenkt bekommen sie dazu die Seite der Energiewirtschaft mit den Statistiken den einzelnen Parkvorgängen und die Abrechnung. Monatliche Fixkosten entstehen dabei nicht und auch die Möglichkeit sein Angebot für einige Stunden oder komplett zu sperren, ist quasi gratis mit dabei.

## Partner finden und API Design sind nächste Schritte

Wir wollen von Anfang an das System so offen wie nur irgend möglich gestalten. Hierzu gehört es, dass wir eine API anbieten wollen, die sowohl das Parken, die Bewirtschaftung der Stellfläche als auch die energiewirtschaftliche Seite (Ablesung, Abrechnung und Versorgung) offen gestaltet.  Wer seinen Parkplatz im Smarthome verwalten möchte, soll hierzu genauso in der Lage sein, wie derjenige, der eine eigene App nutzen möchte, um den Parkvorgang zu starten. 

Gerade für die spezielleren Anwendungsfälle sind wir auf der Suche nach Partnern. Bereits im Gespräch sind wir über die OpenEMS mit dem [Hotelkompetenzzentrum](http://www.hotelkompetenzzentrum.de/de/), da gerade bei den Beherbergungsbetrieben der Trend zur E-Mobilität spürbar ist.