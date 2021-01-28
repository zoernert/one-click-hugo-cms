---
title: Emotet - in der Marktkommunikation der Energieversorger?
date: 2021-01-28T16:04:21.809Z
description: "Am vergangenen Montag und Dienstag wurde die Infrastruktur hinter
  der Schadsoftware Emotet durch die Polizeibehörden zerschlagen. Scheinbar ist
  dies an der Marktkommunikation der Energiewirtschaft nicht spurlos
  vorbeigegangen, was den Verdacht nahe legt, dass auch etliche Energieversorger
  betroffen gewesen sind. "
image: img/uptime.png
---
Wir (die STROMDAO) betreiben einen Mailserver, welcher unsere Schnittstelle zur Marktkommunikation ist.  Mit Hilfe der Marktkommunikation werden zum Beispiel Wechselprozesse von Stromkunden oder die Bilanzierung von Energiemengen abgewickelt (vergl. [Edi@Energy](https://www.edi-energy.de/)). 

Wie alle Server wird auch dieses System bei uns auf heuristische Anomalien überwacht, was nicht viel anderes bedeutet wie Muster, die so noch nicht vorgekommen sind und dem System "komisch" vorkommen. Die übliche Gegenreaktion ist, dass innerhalb von wenigen Millisekunden das System (der Server) zunächst vollständig physikalisch vom Netz getrennt wird und mittels einer Tiefenanalyse untersucht wird. 

Bereits in der Vergangenheit ist uns aufgefallen, dass in der Email Kommunikation hinter den Edifact-Nachrichten zum Teil "reale" Postfächer von Mitarbeitern versteckt sind. D.h. die Marktkommunikation nicht wie gedacht automatisch von Systemen übernommen und verarbeitet wird, sondern sich zum Beispiel eine von Outlook generierte "Out Of Office" Mail plötzlich unter den Mails befindet. Aus hiesiger Sicht halten wir dies für gefährlich, denn hier ist beim Marktbegleiter mit Sicherheit ein Einfalltor für Schadsoftware vorhanden, welche sich über "Personen zu Personen" Mails auch weiterverbreiten könnte.

Im Jahresschnitt sind von den bei uns über die Marktkommunikation empfangenen Mails 9,7% "falsch". Bedeutet, dass wir nicht der Empfänger sind, die Zertifikate nicht stimmen oder es sich um eine "Out Of Office" Nachricht handelt. Am letzten Montag und Dienstag waren es 45% der Nachrichten, die eindeutig fehlerhaft gewesen sind.

Was wir, aber wahrscheinlich auch alle anderen Versorger, machen, ist diese Mails entweder direkt löschen (<10%), archivieren oder in eine "Quarantäne" stecken. Mails in der Quarantäne werden manuell überprüft und bringen dann auch gerne einmal Fundstücke zum Vorschein, bei dem der Marktpartner den Syntax nicht richtig getroffen hat. Der liebste Fall sind HTML-Mails mit Edifact Nachrichten ... 

Das Problem an der Quarantäne ist, dass man sich hier quasi erneut ein Einfallstor baut, wenn eine Schadsoftware es auf bestimmte Clients (Outlook, Thunderbird,...) abgesehen hat, da ein Mensch diese Mails liest in einer dafür gedachten Software.

Wir sind auf jeden Fall froh, dass unsere Cyber-Abwehr zwar erkannt hat, dass etwas im Busche ist, aber soweit nichts durchgelassen hat. Möge es bitte so bleiben...