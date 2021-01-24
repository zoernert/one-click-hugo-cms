---
title: goE Charger  mit GSI für Node-Red
date: 2021-01-24T01:00:07.308Z
description: "Wer einen goE Charger sein Eigen nennt, der kann sich im Node-Red
  Dashboard recht einfach die CO2 Emission ausgeben lassen, welche trotz
  Ökostromtarifes ergeben haben. "
image: img/goe-charger_gsi-dashboard.png
---
Der [Node-Red Flow](https://flows.nodered.org/flow/cdd1d827702541f4f5b7e8eb35afefb8)  kommt ohne zusätzliche Bibliotheken aus und greift direkt auf die Abbildung  des Stromzählers via Cloud-API zu. 

## Ist Ökostrom nicht immer CO2 frei?

Nein! Bei Ökostrom wird sichergestellt, dass bei der Erzeugung kein CO2 anfällt. Jedoch muss der Strom durch das Netz geleitet werden. Mit steigender Entfernung zwischen Erzeugung und Verbrauch nehmen die Netzverluste zu, welche nicht mit Ökostrom "aufgefüllt" werden. Dank des [GrünstromIndex](https://gruenstromindex.de/) kann in Deutschland eine verlässliche und genau Bestimmung der Entfernung zwischen Erzeugung und Verbrauch vorgenommen werden, warum sich die spezifische CO2 Emission ableiten lässt.

Wer CO2 neutral bleiben möchte, der kann sich zum Beispiel am [Corrently Klimawald](https://corrently.de/service/klimawald.html) beteiligen.