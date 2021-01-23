---
title: Blockchainnutzung 2021
date: 2021-01-23T00:57:48.969Z
description: Wer ein Stromkonto nutzt, was letztendlich auf die
  Energiewirtschaft ausgerichtete Blockchain Wallet ist, wird einige große
  Veränderungen im Spätjahr 2020 festgestellt haben. Um auch in Zukunft gut
  skalieren zu können, wurde in der gesamten Energychain auf eine neue
  Implementierung migriert, welche nicht nur einige tausend Transaktionen pro
  Minute erlaubt, wie bisher - sondern rechnerisch unendlich. Der Versuch einer
  einfachen Beschreibung, wie Blockchain jetzt in 2021 funktioniert, in diesem
  Beitrag.
image: img/chain-3481377_640.jpg
---
Zugegeben mitten in der Migration auf die neue Architektur hatte die Entwickler im November 2020 die Nachricht kalt erwischt, dass es zu einem Engpass bei der Transaktionsabwicklung gekommen ist. 

Man kann sich dies so vorstellen, als ob man bei der Bank einen Überweisungsträger vorbeigebracht hätte, die Bank allerdings wegen Überfüllung diese nicht sofort abarbeiten konnte, sondern sich erst einmal mit dem vorhandenen beschäftigt hat. Ein Vorgang, den wir von der realen Welt zwar kennen uns dort ärgert, aber zum Alltag gehört. Wir sind eigentlich gewohnt, dass eine Transaktion (Vorgang) nicht sofort bearbeitet wird, weil vor unserem Vorgang noch andere sind. Anträge bei Behörden, Rechnungen an Kunden und viele andere Transaktionen in der Geschäftswelt haben diese Moral des "vollen Posteingangs". 

## Voller Posteingang darf es nicht geben

Technisch ist ein Posteingang, in dem unerledigte Aufgaben schlummern, ein Problem, denn der Auftraggeber könnte seine Meinung (Intention) geändert haben und die Aufgabe zurückgezogen haben. Der Stapel könnte unendlich groß werden. Der eigene Stapel muss nicht identisch mit dem Stapel der Kollegen sein und zum Beispiel in der Reihenfolge sich gedreht haben. 

In einer Welt wie der Blockchain-Welt, in der alles auf Konsens beruht, existiert nichts, was außerhalb der Blockchain selbst ist. Der Posteingang ist nicht innerhalb dieser (Daten-)Welt. Daher wird er auch Folgefehler verursachen, die man nicht mehr beherrschen kann. 

Die Abarbeitung des Posteingangs kann man zum Glück sehr leicht skalieren. Eine Möglichkeit ist, dass man mehre Mitarbeiter damit beauftragt - oder im Falle der Blockchain mehrere Nodes mit getrennten Transaction Ques aufsetzt. Die hereinkommenden Transaktionen werden dann Round-Robin zunächst an den ersten, die nächste an den Zweiten usw... übergeben. Zwar bekommt man mit einer Verdopplung der Ressourcen so nicht doppelt soviel Leistung, jedoch skaliert man immerhin fast linear.

### Linear reicht nicht in der Energiewirtschaft

Bei einer anderen Art der Skalierung, die Aufteilung in Zuständigkeiten, benötigt man zwar initial mehr Ressourcen, dafür kann das System dann auch exponentiell wachsen und seine Leistungsfähigkeit sehr schnell steigern. In Zahlen ausgedrückt hatten wir beim Problem im November, bei dem eine Transaktion im Posteingang länger als vorgesehen liegengeblieben ist, im Vergleich zu heute bei gleichem Rechenaufwand (=Serverlandschaft) eine um den Faktor 1000 schlechtere Leistungsfähigkeit.

Am Beispiel einer Überweisung, die zur Bank gebracht wird, kann man die Aufteilung nach Zuständigkeiten recht leicht erklären.  Der Überweisungsträger bekommt 3 Durchschläge. 

Ein Durchschlag landet im Posteingang eines "Transaktionsverarbeiters"  - genauer gesagt einer Blockchain - welche nur die Transaktionen des Auftraggebers enthält. Ein Durchschlag landet im Posteingang für den Tag (Block). Dieser kennt nicht die einzelnen "Konten", aber die zeitliche Reihenfolge. Der letzte Durchschlag geht zur "Bank" des Empfängers und des Posteingangs dort.

Jeder Bearbeiter der Posteingänge erstellt am Ende eines Buchungslaufes jeweils eine Transaktion und signiert diese mit seiner Wertveränderung. Diese Transaktion wird mit dem Konsens der anderen Bearbeiter überprüft und in ein übergeordnetes Kassenbuch (Ledger) geschrieben.

### Das gibt es schon - richtig! Aber...

Genau, das Bankensystem arbeitet heute exakt nach diesem Verfahren. Giralgeld wird in Sammelbuchungen zwischen den Banken hin und hergeschoben und die einzelnen Überweisungen "belasten" den Datenaustausch des Interbanknetzwekes eigentlich nicht. Tatsächlich können nach diesem Prinzip ganze Hierarchien aufgebaut werden, wie sie auch bei den Banken mit ihren "Rechenzentren" existieren. 

Am Anfang hatte man bei der Blockchain immer das Ziel, dass man komplett ohne Intermediäre auskommt. Die Bank übernimmt diese [Funktion für das Banking](https://corrently.de/post/banking-braucht-man-banken-nicht-und-so-verh%C3%A4lt-es-sich-auch-mit-stromversorgern/) am Beispiel der Überweisung. Jedoch erlauben digitale Entitäten und automatische Trust-Beziehungen, welche sich auch mit der Blockchain abbilden lassen, dass theoretisch jeder die Funktionen übernehmen kann und so einen oder mehrere Posteingänge aggregieren kann.