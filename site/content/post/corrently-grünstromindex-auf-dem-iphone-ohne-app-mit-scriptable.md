---
title: Corrently GrünstromIndex auf dem iPhone ohne App - mit Scriptable
date: 2021-06-21T07:00:52.929Z
description: Die kostenlos verfügbare iOS-App Scriptable macht es möglich eigene
  Widgets zu erstellen. Dabei stehen einem Tür und Tor offen der eigenen
  Kreativität freien Lauf zu lassen. Es bedarf lediglich etwas JavaScript Code.
  Beispielsweise lässt sich der Impffortschritt, über die verfügbare
  Schnittstelle des Robert-Koch-Instituts, auf dem Home-Screen darstellen. Auch
  lassen sich Daten des eigenen Smartphones abrufen. So können Informationen wie
  das noch verfügbare Datenvolumen oder der Ladezustand in Kombination mit
  anderen Angaben, visualisiert werden.
image: img/iphone-410311_1280.jpg
---
## Der GrünstromIndex als iPhone-Widget

Da der Corrently GrünstromIndex als HTTP-Schnittstelle von Corrently verfügbar gemacht ist, kann dieser auch über Scriptable abgerufen werden.

Mit dem unten einsehbaren JavaScript-Code wird der GrünstromIndex für die jeweilige Postleitzahl dargestellt:

![](img/widget.png "GSI-Widget")

 Das Widget kann über den Homescreen mit Preview

![](img/home_1.png "GSI-Preview")

als App-Design

![](img/home_2.png "GSI-App")

oder über die Scriptable-App selbst abgerufen werden.

## Der GrünstromIndex JavaScript-Code

Wie der GrünstromIndex auch, ist der benötigte Code, um den GrünstromIndex auf dem iPhone darzustellen, frei verfügbar.

Der komplette Code kann hier eingesehen werden: <https://pastebin.com/rsmTRWzN>\
(Es gilt zu beachten, dass die Reihenfolge der Codezeilen von der geschriebenen Anleitung abweichen kann, was der Funktionalität jedoch keinen Abbruch tut.)

Um mit dem Scripten zu starten muss lediglich die Scriptable App geöffnet werden und ein neues Script, über das "+" Symbol, erstellt werden

In erster Instanz müssen die Einstellungen definiert werden. Dazu gehören: wie viele GSI-Werte in die Zukunft dargestellt werden sollen und für welche Postleitzahl. Außerdem werden die Einstellung für die Abmessung der Ladebalken definiert.

```javascript
// put your zipcode here
const zip = "94469";
// put your amount of future GSI values here
// value 0 will show GSI for current hour only
// max value should be 4 for visibility reasons
const additionalHours = 2;

// progress bar settings
const width = 200;
const height = 3;
```

Um den GSI zu erhalten muss die Funktion dafür geschrieben und später abgerufen werden. Hierbei wird die vorherig definierte "zip"-Variable genutzt, um die Postleitzahl für die Abfrage zu bestimmen. 

Als Antwort erhält man ein JSON Objekt, welches in der "forecast"-Variable gespeichert wird. \
(siehe: <https://corrently.io/#tag/GreenPowerIndex-(GrunstromIndex)>)

```javascript
// get GSI-values forecast
let forecast = await getGsiForecast();

async function getGsiForecast() {
  let url = "https://api.corrently.io/core/gsi?zipcode=" + zip + "&key=13374711";
  let req = new Request(url);
  let res = await req.loadJSON();
  return res.forecast;
}
```

Da die GSI-Abfrage in Ausnahmefällen die Werte von vorangegangen Stunden zurückgeben kann, jedoch nur die aktuellen sowie zukünftigen Werte (für diesen Fall) von Bedeutung sind, muss der relevante Startindex-Wert des Ergebnises mit einer Funktion eruiert werden.  Dazu wird die aktuelle Stunde mit dem Forecast-Objekt von vorne nach hinten vergleichen. Sobald die Stunde übereinstimmt, wird der Index-Wert zurückgegeben.

```javascript
function getStartHourIndex(forecast) {
  let currHour = new Date().getHours();

  for (let i = 0; i < forecast.length - 1; i++) {
    let gsiHour = new Date(forecast[i].timeStamp).getHours();
    if (currHour === gsiHour) {
      return i;
    }
  }
}
```

Das Forecast-Objekt muss für eine einfachere Verarbeitung im Anschluss noch über eine Funktion modifiziert werden.

Ziel der Funktion ist es ein Array mit Objekten, welche die Stunde und den dazugehörigen GSI-Wert enthalten, zurückzugeben. Hierzu wird mit einem For-Loop, abhängig vom "StartHourIndex", das Forecast-Objekt durchiteriert und die jeweiligen Werte als Objekt in das gsiValuesArr geschoben. Das befüllte Array wird schlussendlich zurückgegeben.

```javascript
function getRelevantGsiValues() {
  let gsiValuesArr = [];
  let startIndex = getStartHourIndex(forecast);

  for (let i = startIndex; i < startIndex + additionalHours + 1; i++) {
    gsiValuesArr.push({
      hour: new Date(forecast[i].timeStamp).getHours().toString() + ":00",
      gsi: forecast[i].gsi,
    });
  }

  return gsiValuesArr;
}
```

Für die Ladebalken werden die, über Scriptable verfügbar gemachten, Funktionen genutzt. Die Balken selbst werden über Path-Variablen realisiert. Um die korrekte Breite der Ladebalken zu erfassen, muss der GSI-Wert übergeben werden. Abhängig von selbigem werden auch die Farben der Balken definiert. Zum Schluss der Funktion wird der Ladebalken als Image zurückgegeben.

```javascript
function createProgressBar(gsi) {
  const context = new DrawContext();
  const pathFrame = new Path();
  const pathProgress = new Path();

  pathFrame.addRoundedRect(new Rect(0, 0, width, height), 3, 2);
  pathProgress.addRoundedRect(new Rect(0, 0, (width * gsi) / 100, height), 3, 2);
  
  context.size = new Size(width, height);
  context.opaque = false;
  context.respectScreenScale = true;
  context.setFillColor(new Color("#48484b"));
  context.addPath(pathFrame);
  context.fillPath();

  // set specific GSI colors
  if (gsi < 45) {
    context.setFillColor(new Color("#f00"));
  } else if (gsi < 56) {
    context.setFillColor(new Color("#ffd60a"));
  } else {
    context.setFillColor(new Color("#0d6d37"));
  }

  context.addPath(pathProgress);
  context.fillPath();

  return context.getImage();
}
```

Anschließend muss die Funktion, welche für die Widgeterstellung zuständig ist, definiert werden. Für die Darstellung wird das ListWidget von Scriptable genutzt. Zuerst werden die Texte für den Corrently GrünstromIndex Schriftzug mit der dazugehörigen Postleitzahl hinzugefügt, um dann für die konkrete Darstellung der GSI-Werte durch das Array der getRelevantGsiValues() Funktion zu iterieren und für jeden Wert einen Text mit Ladebalken hinzuzufügen.

```javascript
async function createWidget() {
  let listWidget = new ListWidget();
  listWidget.backgroundColor = new Color("#0000");

  let correntlyHeading = listWidget.addText("Corrently");
  let gsiHeading = listWidget.addText("GrünstromIndex");
  let zipHeading = listWidget.addText(zip + "\n");

  correntlyHeading.centerAlignText();
  correntlyHeading.textColor = new Color("feb133");
  correntlyHeading.font = Font.systemFont(11);

  gsiHeading.centerAlignText();
  gsiHeading.textColor = new Color("#0d6d37");
  gsiHeading.font = Font.boldSystemFont(10);

  zipHeading.centerAlignText();
  zipHeading.font = Font.systemFont(9);

  for (let i = 0; i < getRelevantGsiValues().length; i++) {
    let gsiValue = listWidget.addText(getRelevantGsiValues()[i].hour + ": " + getRelevantGsiValues()[i].gsi);
    gsiValue.leftAlignText();
    gsiValue.color = new Color("#ffff");
    gsiValue.font = Font.boldSystemFont(8);

    let gsiProgressBar = listWidget.addImage(createProgressBar(getRelevantGsiValues()[i].gsi));
    gsiProgressBar.leftAlignImage();
  }

  return listWidget;
}
```

Schlussendlich muss die createWidget() Funktion genutzt werden, um das Widget zu erstellen und das Script abzuschließen.

```javascript
// set widget
let widget = await createWidget();

if (config.runsInWidget) {
  Script.setWidget(widget);
} else {
  widget.presentMedium();
}

Script.complete();
```

## Fertig gecodet! Wie mache ich das jetzt sichtbar?

### Corrently GrünstromIndex im App-Design

* Script in Scriptable aufrufen
* Script Settings aufrufen (Symbol links unten)
* Add to Home Screen wählen und Anleitung befolgen

### Corrently GrünstromIndex als Preview

* iPhone Startbildschirm aufrufen (Wo sich Ladezustand, Wetter etc. befindet)
* Nach unten scrollen und "Bearbeiten" wählen
* Über das "+" Symbol Scriptable wählen
* Die Bearbeitung (tanzende Widgets) verlassen
* Lange auf das erstellte Scriptable Widget drücken
* Das Corrently GrünstromIndex-Script auswählen