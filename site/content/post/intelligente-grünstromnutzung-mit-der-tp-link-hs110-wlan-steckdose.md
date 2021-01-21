---
title: Intelligente Grünstromnutzung mit der TP-Link HS110 WLAN Steckdose
date: 2021-01-20T23:08:33.320Z
description: Intelligentes Laden für die E-Mobilität bezieht sich gerade jetzt
  in der Winterzeit eher auf eine Erhaltungsladung. Eine Stunde am Tag etwas
  nachladen, damit man beim kleinsten Sonnenschein gleich auf den Roller
  springen kann. In diesem Beitrag wird gezeigt, wie man mit wenigen Zeilen Code
  und einer TP-Link Kasa HS110 WLAN zur besten Stunde des Tages sein Fahrzeug
  laden kann.
image: img/intelligentes_laden_hs110.png
---
Die TP-Link Kasa HS110 Wifi Steckdose ist eines der Urgesteine der SmartPlugs, dennoch kann sie sich [im Vergleichstest](https://www.homeandsmart.de/wlan-steckdose-test) immer noch gut behaupten. Basierend auf dem vorgestellten Datenendpunkt aus dem Beitrag  ["Die beste Stunde des Tages"](https://corrently.de/post/ger%C3%A4te-zur-gr%C3%BCnsten-stunde-des-tages-schalten-war-noch-nie-so-einfach/) wird hier heute gezeigt, wie die [intelligente Stromnutzung auf Industrieniveau](https://corrently.de/post/forschungsprojekt-delfine-start-f%C3%BCr-intelligente-gr%C3%BCnstromnutzung-der-deutschen-industrie/) auch im eigenen Heim genutzt werden kann.

Voraussetzungen:

* Funktionierenden TP Link HS 110 SmartPlug
* NodeJS Installation (zum Beispiel auf einem Raspberry)

Als wichtigste Zutat werden wir das Node JS Modul [TP-Link-Cloud-API](https://www.npmjs.com/package/tplink-cloud-api) vom ITNerd nutzen, welches zwar eine inoffizielle Implementierung ist, jedoch sehr solide funktioniert und zur Not auch ein entferntes Schalten zulässt, wenn man zum Beispiel keinen eigenen Mini-Server zu Hause betreiben kann/will.

## Schritt für Schritt

Zunächst laden und entpacken wir alle Dateien, die wir benötigen. Hierfür gibt es ein [GIT Repository zu diesem Beitrag](https://github.com/energychain/hs110_gsischalter), welches heruntergeladen werden kann mit:

`git clone https://github.com/energychain/hs110_gsischalter.git`

`cd hs110_gsischalter `

Im Verzeichnis lassen wir zunächst die Node JS Bibliotheken installieren:

`npm install`

Diese sind:

* [Axios](https://www.npmjs.com/package/axios) für den HTTP Zugriff auf die [REST-Schnittstelle ](https://corrently.io/#operation/gsiBesthour)
* [DotENV](https://www.npmjs.com/package/dotenv) für das Einlesen unserer Konfiguration aus einer .env Datei
* TPLink Cloud API zum Zugriff auf die HS110 Steckdose

Mit einem Texteditor passen wir die Datei `sample.env` an unsere eigenen Zugangsdaten an und speichern sie als `.env` . 

Jetzt können wir bereits das Script ausführen mittels:

`node index.js`

## Der Code

Das Script ruft die Funktion `runner`  alle 15 Minuten auf, wobei zunächst die Liste aller Geräte geladen wird, dann abgefragt wird, ob es sich um die beste Stunde handelt und im Anschluss die Geräte geschaltet werden.

In Javascript Code gegossen sieht dies dann wie folgt aus:

```
const runner = async function() {
  const tplink = await login(process.env.KasaUsername, process.env.KasaPassword);
  const deviceList = await tplink.getDeviceList();

  const gsibesthour = await axios.get("http://api.corrently.io/v2.0/gsi/bestHour?zip=" + process.env.Postleitzahl);
  /*
    gsibesthour.data = true/false
  */
  for(let i=0;i<deviceList.length;i++) {
    if(gsibesthour.data) {
      await tplink.getHS100(deviceList[i].alias).powerOn();
    } else  {
      await tplink.getHS100(deviceList[i].alias).powerOff();
    }
    console.log(new Date().toLocaleString(),deviceList[i].alias,gsibesthour.data);
  }
}
```

Jetzt kann man natürlich unendlich viel optimieren und auf die eigenen Bedürfnisse anpassen. Gerade im Frühjahr, wenn es auch hier wieder mehr Strom aus Photovoltaik auf dem Dach gibt, sollte die Ladung nur innerhalb der kommenden 12 Stunden gesucht werden und nicht 24 Stunden, wie im Standardaufruf.