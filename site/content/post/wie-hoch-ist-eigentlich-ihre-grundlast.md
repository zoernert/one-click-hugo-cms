---
title: Wie hoch ist eigentlich Ihre Grundlast?
date: 2018-05-16T10:31:29.107Z
description: Eine nicht ganz unwichtige Frage, wenn es um die Dimensionierung
  einer sogenannten Plug&Play Solar-Anlage geht.
image: img/pnp.png
---
[Solarsteckdosensystem für jedermann, auch für Mieter](http://www.sun-ev.de/html/aktuelles.html#Termine) lautete der Titel des 6. Metropolsolar Energiegespräches in Mosbach. Der generellen Vorstellung der Technik und der Unterschiede zum klassischen Solardach, folgte eine VorOrt-Besuch bei Oma Christine (ich darf sie noch ein paar Tage so nennen ![🙂](https://s.w.org/images/core/emoji/13.0.1/svg/1f642.svg) ), die zusätzlich zur Bestandsanlage nun auch eine Mini-PV Anlage besitzt. Schon im allgemeinen Teil wurde klar: Allgemeine Aussagen zur Größen und zum Nutzen einer solchen Anlage können kaum gemacht werden.

Das besondere an den auch [Guerilla PV](https://www.heise.de/tp/news/Guerilla-PV-Geht-s-noch-etwas-kleiner-2282166.html) genannten Geräten ist, dass der Strom ausschließlich für den Eigenverbrauch bestimmt ist. In das Netz sollte und darf kein Strom eingespeist werden. Im Betrieb bedeutet dies, dass zu keinem Zeitpunkt mehr Strom erzeugt werden darf, als vom Anschlusspunkt (Haushalt) gerade verbraucht wird.

Eine Mini-PV Anlage wird dabei an eine (Solar-)Steckdose fest angeschlossen. Dies bedeutet, dass sie auch nur auf einer Phase einspeisen wird. Die Verbraucher eines Haushaltes sind allerdings auf alle 3 Phasen  gleichmäßig verteilt. Bislang ist dies kein Problem, da die verbauten Zähler in Deutschland eine Summe für den Verbrauch ermitteln. D.h. wird von der PV-Anlage mehr Strom eingespeist, als auf der gleichen Phase entnommen wird, dann wird der Zähler die Summe des Verbrauchs richtig bilden.

**Beispiel:**\
L1 (mit Mini PV) = – 120W\
L2 = +80W\
L3 = +50W\
= Summe = +10W

Zähler dreht sich weiter wie bei einem Verbrauch von 10W. Verändert sich nichts über eine Stunde, so wird ein Verbrauch von 10Wh auf dem Zähler sein.

Auch wenn es im Verhältnis zum gesamten Stromverbrauch in Deutschland – oder innerhalb eines Verteilnetzes – um sehr geringe Beträge geht, so sollte man nicht unterschlagen, dass man dennoch vom Netz die Dienstleistung der „Phasenschiebung“ eingekauft hat. D.h. irgendwie muss es dem öffentlichen Stromnetz gelingen den Verbrauch auf den einzelnen Phasen wieder gleich zu bekommen.

Für heute reicht es, wenn die Summe einen Wert von **größer 0** zeigt. Benötigt wird der minimale Stromverbrauch aller Elektrogeräte im Haushalt. In anderen Worten der geringste Stromverbrauch, der ohne Anlage aus dem Netz genommen wird. Die Einheit hierfür ist Watt! Nicht Wattstunde! – Ohne eine Speichertechnik ist dies von der Mini-PV Anlage als maximal mögliche Erzeugung anzusetzen.

Je nach Art und Anzahl der Standby-Geräte ist die Grundlast sehr unterschiedlich. In der *Casa Stromhaltig*  liegt er bei 90 Watt. Wobei unser Mieter einen Wert von 28 Watt hat. Eine maximale Anlagengröße von 90 Wp ist ziemlich klein… Der Durchschnitt über viele Haushalte dürfte deutlich höher liegen. Geschätzt bei einem 3-4 Personen Haushalt bei 130-180 Watt.

Ein gerne gemachter Fehler ist die Messung direkt an den Verbrauchern durch Zwischenstecker mit Energiemessfunktion. Damit werden gleich zwei Fehler auf einmal gemacht. Zum einen wird vergessen, dass [20% des Gesamtstromverbrauchs](https://blog.stromhaltig.de/2013/01/stromverbrauch-20-fur-alles-ohne-stecker/) und ein deutlich höherer Anteil der Grundlast durch Geräte verursacht wird, die keinen Stecker haben. Zu diesen Geräten zählen Heizungsventile oder die Türklingel. Zum anderen werden die Eigenschaften der Geräte nicht beachtet. Steckt man zum Beispiel einen Zwischenstecker bei einem Kühlschrank ein, so wird dieser bei der Rückkehr des Stroms zunächst die Temperatur anfangen zu regeln (abkühlen). Der notwendige Kompressorlauf führt zu einem höheren Verbrauch als beim „Leerlauf“.  Der Kühlschrank in der *Casa Stromhaltig* verbraucht am Tag etwa 500 Watt-Stunden macht einen durchschnittlichen Verbrauch von 20,83 Watt. Im Leerlauf werden aber tatsächlich nur 3 Watt aus dem Netz entnommen.

Eine Bestimmung der Grundlast ist somit nur direkt am Zähler bzw. im Zählerschrank möglich. Leider bieten nur sehr wenige Smart-Meter (inkl. Portale) die Möglichkeit die minimale Leistungsaufnahme auszulesen. Bei selbst gestrickten Lösungen wie der [Volkszähler](https://blog.stromhaltig.de/2014/08/volkszaehler-trifft-discovergy-und-smappee/) lässt sich dieser Wert direkt ablesen.

Leider bei der Veranstaltung etwas zu kurz gekommen ist die Vorstellung der neuen Plug-And-Play Speicher. Speichersysteme, die einen eigenen Wechselrichter haben und ebenfalls an eine (Solar-)Steckdose angeschlossen werden können. Auf Rückfrage wurde erklärt, dass über PowerLine der Speicher von dem Wechselrichter aus den Modulen „informiert“ wird, wenn mehr Strom erzeugt wird, als für die Grundlast benötigt wird. In diesem Fall wird dieser Strom gepeichert und sobald die Module wieder weniger erzeugen, zurück gespeist.

In Falle der Verwendung eines solchen Speichers wird es natürlich noch etwas spannender, denn wenn die Kommunikation wirklich auf die Grundlast allein ausgelegt ist, dann muss der Speicher so dimensioniert werden, dass er niemals „Voll“ werden kann. D.h. für die 12 Stunden ohne Sonnenstrom je Tag die Grundlast aufnehmen kann.

Nach meinem Verständnis ergibt sich für die Grundlast von 90 Watt somit folgende Berechnung:

Benötigter Strom in 24 Stunden: 24*90 = 2.160 Wh\
Für maximal 12 Stunden Vollast am Tag: 180Wp\
Minimaler Speicher: 1080 Wh

Deutlich optimieren könnte man dieses System, wenn der Speicher direkt mit dem Entnahmezähler kommunizieren würde, d.h. von dort die Info bekommen würde, wie hoch tatsächlich der Verbrauch ist. Damit rechnen sich auch deutlich größere Mini-PV-Anlagen mit Speicher…