var AppClientAppData = {
	"result": "SUCCESS",
	"initparameters": "question1=image%7Chttps%3A%2F%2Fdbimg.eu%2Fi%2Fu3zfubqv2x.png%7C&answer1=320%2C4&order=%D1%80%D0%B0%D1%81%D0%BF%D0%BE%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%BE%20%D0%BA%D0%B0%D0%BA%20%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%BE&allowhits=true&feedback=%D0%9C%D0%BE%D0%BB%D0%BE%D0%B4%D0%B5%D1%86%2C%20%D1%82%D1%8B%20%D1%80%D0%B5%D1%88%D0%B8%D0%BB%20%D0%B2%D1%81%D0%B5%20%D0%B2%D0%BE%D0%BF%D1%80%D0%BE%D1%81%D1%8B%20%D0%B2%D0%B5%D1%80%D0%BD%D0%BE%21",
	"title": "Название не указано",
	"tool": "143",
	"helptext": "",
	"tasktext": "Рассчитайте рабочие отметки и объем насыпи. В картограмму уже вписаны проектные и фактические отметки. Объем насыпи будет ответом.",
	"formlanguage": "DE",
	"language": "RU",
	"parameters": [
		{
			"t": "list",
			"label": "%Fragen%",
			"description": "%FragenBeschreibung%",
			"name": "list1",
			"min": "1",
			"max": 30,
			"addtext": "weiteres Element hinzufügen",
			"children": [
				{
					"t": "parameter",
					"value": "",
					"width": "",
					"height": "",
					"name": "question#",
					"label": "%Frage% #",
					"type": "media",
					"description": "",
					"media": "image|video|audio|text|speech",
					"usehint": "true"
				},
				{
					"t": "parameter",
					"value": "",
					"width": "",
					"height": "",
					"name": "answer#",
					"label": "%Antwort%",
					"type": "text",
					"description": ""
				},
				{
					"t": "parameter",
					"value": "",
					"width": "",
					"height": "",
					"name": "feedback#bad",
					"label": "%Hinweis% %FalscheAntwort%",
					"type": "text",
					"description": ""
				},
				{
					"t": "parameter",
					"value": "",
					"width": "",
					"height": "",
					"name": "feedback#ok",
					"label": "%Hinweis% %RichtigeAntwort%",
					"type": "text",
					"description": ""
				},
				{
					"t": "space",
					"value": "20"
				}
			]
		},
		{
			"t": "group",
			"label": "%Setup%",
			"description": "%SetupBeschreibung%",
			"name": "",
			"children": [
				{
					"t": "parameter",
					"value": "false",
					"width": "",
					"height": "",
					"name": "casesense",
					"label": "%Case%",
					"type": "check",
					"description": ""
				},
				{
					"t": "parameter",
					"value": "false",
					"width": "",
					"height": "",
					"name": "partof",
					"label": "%Part%",
					"type": "check",
					"description": ""
				}
			]
		},
		{
			"t": "parameter",
			"value": "%geordnet%|%zufällige%",
			"width": "",
			"height": "",
			"name": "order",
			"label": "%Sortieren%",
			"type": "select",
			"description": "%SortierenBeschreibung%"
		},
		{
			"t": "parameter",
			"value": "true",
			"width": "",
			"height": "",
			"name": "allowhits",
			"label": "%Lösungshinweise%",
			"type": "check",
			"description": "%LösungshinweiseBeschreibung%"
		},
		{
			"t": "parameter",
			"value": "%FeedbackValue%",
			"width": "",
			"height": "",
			"name": "feedback",
			"label": "%Feedback%",
			"type": "textarea",
			"description": "%FeedbackBeschreibung%"
		},
		{
			"t": "parameter",
			"value": "",
			"width": "",
			"height": "",
			"name": "backgroundImage",
			"label": "%Hintergrundbild%",
			"type": "media",
			"description": "%HintergrundbildBeschreibung%",
			"media": "image"
		}
	],
	"translation": [
		{
			"id": "APP_TITLE",
			"language": "DE",
			"value": "Quiz mit Eingabe"
		},
		{
			"id": "APP_TITLE",
			"language": "EN",
			"value": "Quiz with text input"
		},
		{
			"id": "APP_DESCRIPTION",
			"language": "DE",
			"value": "Stellen Sie sich einer Serie von Fragen, die mit einer Texteingabe beantwortet werden müssen. Sie können auch mehrere gültige Eingaben pro Frage angeben."
		},
		{
			"id": "APP_DESCRIPTION",
			"language": "EN",
			"value": "Quiz with text inputs for each question. You can also provide multiple correct answers per question."
		},
		{
			"id": "Ende",
			"language": "DE",
			"value": "Quiz beenden"
		},
		{
			"id": "Ende",
			"language": "EN",
			"value": "finish Quiz"
		},
		{
			"id": "Ende",
			"language": "FR",
			"value": "Terminer le quiz"
		},
		{
			"id": "Fragen",
			"language": "DE",
			"value": "Fragen"
		},
		{
			"id": "Fragen",
			"language": "EN",
			"value": "Questions"
		},
		{
			"id": "FragenBeschreibung",
			"language": "DE",
			"value": "Geben Sie jeweils eine Frage und eine richtige Antwort oder eine Liste von richtigen Antworten getrennt durch ein Semikolon ( ; ) ein. Optional kann ein Hinweistext bei richtiger/falscher Lösung definiert werden."
		},
		{
			"id": "FragenBeschreibung",
			"language": "EN",
			"value": "For each segment, provide a question and a correct answer or a list of correct answers seperated by a Semicolon ( ; ). Optionally you can enter a text with hints when a correct/wrong answer has been given."
		},
		{
			"id": "Sortieren",
			"language": "DE",
			"value": "Fragen sortieren"
		},
		{
			"id": "Sortieren",
			"language": "EN",
			"value": "Sort questions"
		},
		{
			"id": "SortierenBeschreibung",
			"language": "DE",
			"value": "Die Fragen können wahlweise zufällig oder geordnet gestellt werden."
		},
		{
			"id": "SortierenBeschreibung",
			"language": "EN",
			"value": "Questions can either be displayed randomly or in order."
		},
		{
			"id": "zufällige",
			"language": "DE",
			"value": "zufällige Reihenfolge"
		},
		{
			"id": "zufällige",
			"language": "EN",
			"value": "random order"
		},
		{
			"id": "geordnet",
			"language": "DE",
			"value": "geordnet wie oben angegeben"
		},
		{
			"id": "geordnet",
			"language": "EN",
			"value": "ordered like listed above"
		},
		{
			"id": "Frage",
			"language": "DE",
			"value": "Frage"
		},
		{
			"id": "Frage",
			"language": "EN",
			"value": "Question"
		},
		{
			"id": "Eingabe",
			"language": "DE",
			"value": "Eingabe"
		},
		{
			"id": "Eingabe",
			"language": "EN",
			"value": "Answer"
		},
		{
			"id": "Antwort",
			"language": "DE",
			"value": "Antwort(en)"
		},
		{
			"id": "Antwort",
			"language": "EN",
			"value": "Answer(s)"
		},
		{
			"id": "RichtigeAntwort",
			"language": "DE",
			"value": "richtig"
		},
		{
			"id": "RichtigeAntwort",
			"language": "EN",
			"value": "correct"
		},
		{
			"id": "FalscheAntwort",
			"language": "DE",
			"value": "falsch"
		},
		{
			"id": "FalscheAntwort",
			"language": "EN",
			"value": "wrong"
		},
		{
			"id": "Lösungshinweise",
			"language": "DE",
			"value": "Lösungen anzeigen erlauben"
		},
		{
			"id": "Lösungshinweise",
			"language": "EN",
			"value": "Allow display of correct solutions"
		},
		{
			"id": "LösungshinweiseBeschreibung",
			"language": "DE",
			"value": "Nach einer falschen Lösung kann die richtige auf Wunsch eingeblendet werden."
		},
		{
			"id": "LösungshinweiseBeschreibung",
			"language": "EN",
			"value": "After a wrong entry, the correct solution can be displayed upon request."
		},
		{
			"id": "Hinweis",
			"language": "DE",
			"value": "Hinweis"
		},
		{
			"id": "Hinweis",
			"language": "EN",
			"value": "Hint"
		},
		{
			"id": "Setup",
			"language": "DE",
			"value": "Einstellungen"
		},
		{
			"id": "Setup",
			"language": "EN",
			"value": "Setup"
		},
		{
			"id": "SetupBeschreibung",
			"language": "DE",
			"value": "Soll die Groß- und Kleinschreibung beachtet werden? Wenn aktiviert, wird eine Eingabe als falsch gewertet, wenn die Schreibweise nicht exakt der Vorgabe entspricht. Reicht es aus, wenn die Lösung in der Eingabe enthalten ist (z. B. gesucht ist 300 und die Eingabe ist 300 Meter)?"
		},
		{
			"id": "SetupBeschreibung",
			"language": "EN",
			"value": "Select whether inputs are case sensitive or not. If this is active, all inputs must exactly match the given answers. Select whether a given input is correct if it contains the right solution (e.g. the correct answer is &quot;300&quot; and the input is &quot;300 meters&quot;)?"
		},
		{
			"id": "Case",
			"language": "DE",
			"value": "Groß- und Kleinschreibung beachten."
		},
		{
			"id": "Case",
			"language": "EN",
			"value": "Input is case sensitiv."
		},
		{
			"id": "Part",
			"language": "DE",
			"value": "Lösungswort muss nur enthalten sein."
		},
		{
			"id": "Part",
			"language": "EN",
			"value": "Input only needs to contain the solution."
		},
		{
			"id": "Feedback",
			"language": "DE",
			"value": "Feedback"
		},
		{
			"id": "Feedback",
			"language": "EN",
			"value": "Feedback"
		},
		{
			"id": "Prüfen",
			"language": "DE",
			"value": "Lösung überprüfen"
		},
		{
			"id": "Prüfen",
			"language": "EN",
			"value": "Check solution"
		},
		{
			"id": "Skip",
			"language": "DE",
			"value": "Lösung anzeigen"
		},
		{
			"id": "Skip",
			"language": "EN",
			"value": "Show solution"
		},
		{
			"id": "Weiter",
			"language": "DE",
			"value": "nächste Frage"
		},
		{
			"id": "Weiter",
			"language": "EN",
			"value": "next question"
		},
		{
			"id": "feedbackFalse",
			"language": "DE",
			"value": "Leider noch nicht richtig."
		},
		{
			"id": "feedbackFalse",
			"language": "EN",
			"value": "Unfortunately this is the wrong answer."
		},
		{
			"id": "feedbackTrue",
			"language": "DE",
			"value": "Prima, richtig."
		},
		{
			"id": "feedbackTrue",
			"language": "EN",
			"value": "Well done! That´s correct."
		},
		{
			"id": "FeedbackBeschreibung",
			"language": "DE",
			"value": "Geben Sie einen Text an, der eingeblendet wird, wenn alle Fragen richtige beantwortet wurden."
		},
		{
			"id": "FeedbackBeschreibung",
			"language": "EN",
			"value": "Provide a feedback text which will be displayed when all the questions have been answered correctly."
		},
		{
			"id": "FeedbackValue",
			"language": "DE",
			"value": "Prima, du hast alle Fragen gelöst."
		},
		{
			"id": "FeedbackValue",
			"language": "EN",
			"value": "Well done! You've answered all the questions correctly."
		},
		{
			"id": "Feedback",
			"language": "FR",
			"value": "Feedback"
		},
		{
			"id": "Feedback",
			"language": "IT",
			"value": "Feedback"
		},
		{
			"id": "Feedback",
			"language": "RU",
			"value": "Обратная связь"
		},
		{
			"id": "FeedbackBeschreibung",
			"language": "FR",
			"value": "Rédigez le texte qui apparaît à la fin du questionnaire si toutes les réponses sont correctes."
		},
		{
			"id": "FeedbackBeschreibung",
			"language": "IT",
			"value": "Indichi un testo che verrà inserito quando si avrà risposto correttamente a tutte le domande."
		},
		{
			"id": "FeedbackBeschreibung",
			"language": "RU",
			"value": "Если на все вопросы были  даны правильные ответы, то напишите здесь текст, который появится потом как вставка."
		},
		{
			"id": "feedbackFalse",
			"language": "FR",
			"value": "Ce n'est pas la réponse attendue !"
		},
		{
			"id": "feedbackFalse",
			"language": "IT",
			"value": "Purtroppo non ancora corretto."
		},
		{
			"id": "feedbackFalse",
			"language": "RU",
			"value": "К сожалению, пока неверно!"
		},
		{
			"id": "feedbackTrue",
			"language": "FR",
			"value": "Bravo !"
		},
		{
			"id": "feedbackTrue",
			"language": "IT",
			"value": "Fantastico, giusto."
		},
		{
			"id": "feedbackTrue",
			"language": "RU",
			"value": "Здорово, верно!"
		},
		{
			"id": "FeedbackValue",
			"language": "FR",
			"value": "Bravo ! Vous avez répondu correctement à toutes les questions."
		},
		{
			"id": "FeedbackValue",
			"language": "IT",
			"value": "Fantastico! Hai risposto correttamente a tutte le domande."
		},
		{
			"id": "FeedbackValue",
			"language": "RU",
			"value": "Молодец, ты решил все вопросы верно!"
		},
		{
			"id": "Frage",
			"language": "FR",
			"value": "Question"
		},
		{
			"id": "Frage",
			"language": "IT",
			"value": "Domanda"
		},
		{
			"id": "Frage",
			"language": "RU",
			"value": "Вопрос"
		},
		{
			"id": "Fragen",
			"language": "FR",
			"value": "Questions"
		},
		{
			"id": "Fragen",
			"language": "IT",
			"value": "Domande"
		},
		{
			"id": "Fragen",
			"language": "RU",
			"value": "Вопросы"
		},
		{
			"id": "Hinweis",
			"language": "FR",
			"value": "Remarque"
		},
		{
			"id": "Hinweis",
			"language": "IT",
			"value": "Riferimento"
		},
		{
			"id": "Hinweis",
			"language": "RU",
			"value": "Подсказка"
		},
		{
			"id": "Prüfen",
			"language": "FR",
			"value": "Vérifier la réponse !"
		},
		{
			"id": "Prüfen",
			"language": "IT",
			"value": "Verifica la soluzione"
		},
		{
			"id": "Prüfen",
			"language": "RU",
			"value": "Проверить решение"
		},
		{
			"id": "Weiter",
			"language": "FR",
			"value": "Question suivante"
		},
		{
			"id": "Weiter",
			"language": "IT",
			"value": "prossima domanda"
		},
		{
			"id": "Weiter",
			"language": "RU",
			"value": "Следующий вопрос"
		},
		{
			"id": "APP_TITLE",
			"language": "FR",
			"value": "Quiz avec saisie de texte pour la réponse"
		},
		{
			"id": "APP_DESCRIPTION",
			"language": "FR",
			"value": "Quiz avec saisie de texte pour chaque question. Vous pouvez également proposer plusieurs réponses correctes pour une question."
		},
		{
			"id": "Eingabe",
			"language": "FR",
			"value": "Saisie"
		},
		{
			"id": "FragenBeschreibung",
			"language": "FR",
			"value": "Préparez les questions. Entrez une réponse pour chaque question ou plusieurs, en les séparant par un point-virgule. Vous pouvez également, si vous le souhaitez, ajouter un indice à chaque question."
		},
		{
			"id": "Antwort",
			"language": "FR",
			"value": "Réponse(s)"
		},
		{
			"id": "RichtigeAntwort",
			"language": "FR",
			"value": "Correct"
		},
		{
			"id": "FalscheAntwort",
			"language": "FR",
			"value": "incorrect"
		},
		{
			"id": "Setup",
			"language": "FR",
			"value": "Réglages"
		},
		{
			"id": "SetupBeschreibung",
			"language": "FR",
			"value": "Choisissez si les réponses sont sensibles à la casse ou non. Si oui, les réponses saisies doivent correspondre exactement aux réponses préparées. Si non, la réponse est évaluée sans tenir compte des majuscules, points, …"
		},
		{
			"id": "Case",
			"language": "FR",
			"value": "Saisie sensible à la casse"
		},
		{
			"id": "Part",
			"language": "FR",
			"value": "La saisie doit contenir uniquement la réponse."
		},
		{
			"id": "geordnet",
			"language": "FR",
			"value": "Mettre dans l'ordre comme ci-dessus"
		},
		{
			"id": "geordnet",
			"language": "IT",
			"value": "nell'ordine di cui sopra"
		},
		{
			"id": "geordnet",
			"language": "RU",
			"value": "расположено как задано"
		},
		{
			"id": "Sortieren",
			"language": "FR",
			"value": "Trier les questions"
		},
		{
			"id": "Sortieren",
			"language": "IT",
			"value": "Ordinare le domande"
		},
		{
			"id": "Sortieren",
			"language": "RU",
			"value": "Сортировать вопросы"
		},
		{
			"id": "zufällige",
			"language": "FR",
			"value": "Ordre aléatoire"
		},
		{
			"id": "zufällige",
			"language": "IT",
			"value": "Sequenza casuale"
		},
		{
			"id": "zufällige",
			"language": "RU",
			"value": "случайный порядок"
		},
		{
			"id": "Skip",
			"language": "FR",
			"value": "Indiquer la solution"
		},
		{
			"id": "LösungshinweiseBeschreibung",
			"language": "FR",
			"value": "Après une réponse erronée, la solution peut être demandée"
		},
		{
			"id": "Lösungshinweise",
			"language": "FR",
			"value": "Permettre l'affichage des solutions"
		},
		{
			"id": "Sortieren",
			"language": "RM",
			"value": "Zavrar damondas"
		},
		{
			"id": "FragenBeschreibung",
			"language": "RM",
			"value": "Endatescha mintgamai ina damonda ed ina risposta correcta ni ina gliesta da rispostas correctas che vegnan separadas cun iagid d'in semicolon (;). Opziunalmein sa in text cun indezis vegnir definius tenor la sligiaziun correcta ni fallida."
		},
		{
			"id": "Fragen",
			"language": "RM",
			"value": "Damondas"
		},
		{
			"id": "APP_DESCRIPTION",
			"language": "RM",
			"value": "Scriva ina seria da damondas che sto vegnir rispundida cun in'endataziun. Ti sas era indicar pliras endataziuns per ina damonda."
		},
		{
			"id": "APP_TITLE",
			"language": "RM",
			"value": "Quiz cun endataziun"
		},
		{
			"id": "Eingabe",
			"language": "RM",
			"value": "Endataziun"
		},
		{
			"id": "Frage",
			"language": "RM",
			"value": "Damonda"
		},
		{
			"id": "geordnet",
			"language": "RM",
			"value": "Successiun ordinada sco sisura"
		},
		{
			"id": "zufällige",
			"language": "RM",
			"value": "Successiun tenor casualitad"
		},
		{
			"id": "SortierenBeschreibung",
			"language": "RM",
			"value": "Las damondas san vegnir ordinadas tenor casualitad ni tenor uorden."
		},
		{
			"id": "LösungshinweiseBeschreibung",
			"language": "RM",
			"value": "Suenter ina sligiaziun fallida sa vegnir mussau la sligiaziun correcta tenor giavisch ."
		},
		{
			"id": "Lösungshinweise",
			"language": "RM",
			"value": "Lubir da mussar las sligiaziuns"
		},
		{
			"id": "FalscheAntwort",
			"language": "RM",
			"value": "falliu"
		},
		{
			"id": "RichtigeAntwort",
			"language": "RM",
			"value": "endretg"
		},
		{
			"id": "Antwort",
			"language": "RM",
			"value": "Risposta(s)"
		},
		{
			"id": "Case",
			"language": "RM",
			"value": "Far attenziun alla scripziun grond ni pign"
		},
		{
			"id": "Setup",
			"language": "RM",
			"value": "Configuraziuns"
		},
		{
			"id": "SetupBeschreibung",
			"language": "RM",
			"value": "Duei ila scripziun grond ni pign vegnir risguardada? Sche quei element ei activaus, vegn in'endataziun buc acceptada ch'ei buca scretta precisamein sco la sligiaziun."
		},
		{
			"id": "Hinweis",
			"language": "RM",
			"value": "Indezi"
		},
		{
			"id": "Prüfen",
			"language": "RM",
			"value": "Controllar la sligiaziun."
		},
		{
			"id": "Skip",
			"language": "RM",
			"value": "Mussar la sligiaziun."
		},
		{
			"id": "feedbackFalse",
			"language": "RM",
			"value": "Anc buca diltuttafatg correct."
		},
		{
			"id": "Weiter",
			"language": "RM",
			"value": "Proxima damonda"
		},
		{
			"id": "APP_TITLE",
			"language": "RO",
			"value": "Quiz cu introducere"
		},
		{
			"id": "Fragen",
			"language": "RO",
			"value": "Întrebări"
		},
		{
			"id": "Hinweis",
			"language": "RO",
			"value": "Notificare"
		},
		{
			"id": "Setup",
			"language": "RO",
			"value": "Setări"
		},
		{
			"id": "Antwort",
			"language": "RO",
			"value": "Răspuns/uri"
		},
		{
			"id": "RichtigeAntwort",
			"language": "RO",
			"value": "corect"
		},
		{
			"id": "FalscheAntwort",
			"language": "RO",
			"value": "greșit"
		},
		{
			"id": "Frage",
			"language": "RO",
			"value": "Întrebare"
		},
		{
			"id": "Weiter",
			"language": "RO",
			"value": "Următoarea intrebare"
		},
		{
			"id": "feedbackTrue",
			"language": "RO",
			"value": "Bravo, corect!"
		},
		{
			"id": "feedbackFalse",
			"language": "RO",
			"value": "Din păcate incorect"
		},
		{
			"id": "Skip",
			"language": "RO",
			"value": "Afișeaza soluție"
		},
		{
			"id": "Prüfen",
			"language": "RO",
			"value": "Verifică soluție"
		},
		{
			"id": "Feedback",
			"language": "RO",
			"value": "Feedback"
		},
		{
			"id": "FeedbackBeschreibung",
			"language": "RO",
			"value": "Introduceți un text care este vizibil atunci când toate întrebările sunt  corecte. "
		},
		{
			"id": "Sortieren",
			"language": "RO",
			"value": "Sortează intrebări"
		},
		{
			"id": "SortierenBeschreibung",
			"language": "RO",
			"value": "Întrebările pot fi puse la alegere aleator sau în ordine."
		},
		{
			"id": "zufällige",
			"language": "RO",
			"value": "Ordine aleatoare"
		},
		{
			"id": "geordnet",
			"language": "RO",
			"value": "Ordonat cum e afișat mai sus"
		},
		{
			"id": "Lösungshinweise",
			"language": "RO",
			"value": "Permite afișare soluții"
		},
		{
			"id": "LösungshinweiseBeschreibung",
			"language": "RO",
			"value": "După o soluție greșită, cea corectă poate fi inserată/vizibilă la cerere"
		},
		{
			"id": "Case",
			"language": "RO",
			"value": "Atentia la scrierea cu majuscula sau cu litera mică"
		},
		{
			"id": "Part",
			"language": "RM",
			"value": "Il plaid da sligiaziun sto mo esser cuntenius."
		},
		{
			"id": "Part",
			"language": "RO",
			"value": "Cuvântul soluție trebuie sa fie doar inclus.  "
		},
		{
			"id": "feedbackTrue",
			"language": "RM",
			"value": "Bravo, correct."
		},
		{
			"id": "FeedbackBeschreibung",
			"language": "RM",
			"value": "Endatescha in text che vegn mussaus sche tuttas damondas ein vegnidas rispundidas correctameinl."
		},
		{
			"id": "FeedbackValue",
			"language": "RM",
			"value": "Bravo, ti has sligiau tut endretg!"
		},
		{
			"id": "FeedbackValue",
			"language": "RO",
			"value": "Super, ai răspuns corect la toate întrebările!"
		},
		{
			"id": "FragenBeschreibung",
			"language": "RO",
			"value": "Introduceți câte o întrebare și un răspuns corect sau o lista de răspunsuri corecte separate prin ; opțional poate fi definit un text indiciu la o soluția corectă/greșită."
		},
		{
			"id": "APP_DESCRIPTION",
			"language": "RO",
			"value": "Puneți o serie de întrebări la care trebuie sa se răspundă prin introducerea unui text. Puteți indica mai multe introduceri valabile pentru fiecare întrebare."
		},
		{
			"id": "Eingabe",
			"language": "RO",
			"value": "Introducere"
		},
		{
			"id": "SetupBeschreibung",
			"language": "RO",
			"value": "Să fie respectată scrierea cu literă mare și mică? Dacă este activată această setare o introducere va fi valorizată ca fiind greșită, dacă modul de scriere nu corespunde exact specificării. Este de ajuns dacă soluția este conținută în introducere(de exemplu căutat este 300 și introducerea este 300 metri)?"
		},
		{
			"id": "Prüfen",
			"language": "GL",
			"value": "Comprobar a solución"
		},
		{
			"id": "Skip",
			"language": "GL",
			"value": "Mirar a solución"
		},
		{
			"id": "Weiter",
			"language": "GL",
			"value": "Seguinte pregunta"
		},
		{
			"id": "feedbackFalse",
			"language": "GL",
			"value": "Non é a solución correcta."
		},
		{
			"id": "feedbackTrue",
			"language": "GL",
			"value": "Moi ben, correcto!"
		},
		{
			"id": "FeedbackValue",
			"language": "GL",
			"value": "Moi ben, contestaches correctamente a todas!"
		},
		{
			"id": "Frage",
			"language": "GL",
			"value": "Cuestión"
		},
		{
			"id": "Eingabe",
			"language": "GL",
			"value": "Resposta"
		},
		{
			"id": "RichtigeAntwort",
			"language": "GL",
			"value": "Correcto"
		},
		{
			"id": "FalscheAntwort",
			"language": "GL",
			"value": "Incorrecto"
		},
		{
			"id": "Sortieren",
			"language": "PL",
			"value": "Sortowanie pytań"
		},
		{
			"id": "zufällige",
			"language": "PL",
			"value": "przypadkowa kolejność"
		},
		{
			"id": "geordnet",
			"language": "PL",
			"value": "uporządkowane jak wyżej "
		},
		{
			"id": "Frage",
			"language": "PL",
			"value": "Pytanie"
		},
		{
			"id": "Hinweis",
			"language": "GL",
			"value": "Pista"
		},
		{
			"id": "Feedback",
			"language": "PL",
			"value": "Informacja zwrotna."
		},
		{
			"id": "Prüfen",
			"language": "ES",
			"value": "Ver solución"
		},
		{
			"id": "Prüfen",
			"language": "PL",
			"value": "Sprawdź rozwiązanie."
		},
		{
			"id": "APP_TITLE",
			"language": "PL",
			"value": "Quiz z wpisywaniem tekstu"
		},
		{
			"id": "APP_DESCRIPTION",
			"language": "PL",
			"value": "Zadaj serię pytań, na które należy odpowiadać wpisując odpowiedni tekst. Można również uwzględnić kilka poprawnych sformułowań."
		},
		{
			"id": "Fragen",
			"language": "PL",
			"value": "Pytania"
		},
		{
			"id": "SortierenBeschreibung",
			"language": "PL",
			"value": "Pytania mogą być wyświetlane losowo lub w kolejności. "
		},
		{
			"id": "Eingabe",
			"language": "PL",
			"value": "Odpowiedź"
		},
		{
			"id": "Antwort",
			"language": "PL",
			"value": "Odpowiedź (odpowiedzi)"
		},
		{
			"id": "RichtigeAntwort",
			"language": "PL",
			"value": "dobrze "
		},
		{
			"id": "FalscheAntwort",
			"language": "PL",
			"value": "źle "
		},
		{
			"id": "Lösungshinweise",
			"language": "PL",
			"value": "Zezwalaj na wyświetlanie poprawnych rozwiązań "
		},
		{
			"id": "LösungshinweiseBeschreibung",
			"language": "PL",
			"value": "Po błędnym rozwiązaniu, poprawne może być wyświetlone na życzenie."
		},
		{
			"id": "Hinweis",
			"language": "PL",
			"value": "Wskazówka"
		},
		{
			"id": "Setup",
			"language": "PL",
			"value": "Ustawienia "
		},
		{
			"id": "FragenBeschreibung",
			"language": "PL",
			"value": "Wprowadź kolejne pytania i poprawną odpowiedź lub listę poprawnych odpowiedzi oddzielonych ; . Jeśli chcesz możesz też dodać tekst odniesienia do każdej odpowiedzi prawdziwej/fałszywej."
		},
		{
			"id": "Case",
			"language": "PL",
			"value": "Rozróżniana wielkość liter "
		},
		{
			"id": "SetupBeschreibung",
			"language": "PL",
			"value": "Wybierz czy ma być uwzględniana wielkość liter czy nie. Gdy zaznaczymy ten wybór, odpowiedź będzie błędna, jeśli pisownia nie będzie dokładnie odpowiadała specyfikacji.  Wybierz, czy wpis jest poprawny, jeśli zawiera odpowiednie rozwiązanie bez dokładnego dopasowania (np. podano 300, a jest 300 metrów."
		},
		{
			"id": "Part",
			"language": "PL",
			"value": "Wpis musi jedynie zawierać rozwiązanie."
		},
		{
			"id": "Skip",
			"language": "PL",
			"value": "Pokaż rozwiązanie "
		},
		{
			"id": "Weiter",
			"language": "PL",
			"value": "następne pytanie "
		},
		{
			"id": "feedbackFalse",
			"language": "PL",
			"value": "To nie jest dobre rozwiązanie."
		},
		{
			"id": "feedbackTrue",
			"language": "PL",
			"value": "Świetnie, prawidłowo."
		},
		{
			"id": "FeedbackBeschreibung",
			"language": "PL",
			"value": "Podaj tekst wyświetlany, gdy wszystkie odpowiedzi będą poprawnie."
		},
		{
			"id": "FeedbackValue",
			"language": "PL",
			"value": "Świetnie, odpowiedziałeś na wszystkie pytania poprawnie."
		},
		{
			"id": "APP_TITLE",
			"language": "RU",
			"value": "Викторина c вводом текста"
		},
		{
			"id": "APP_DESCRIPTION",
			"language": "RU",
			"value": "Викторина с вводом ответа на каждый вопрос. Вы также можете указать несколько правильных ответов на каждый вопрос."
		},
		{
			"id": "Eingabe",
			"language": "RU",
			"value": "Ответ"
		},
		{
			"id": "RichtigeAntwort",
			"language": "RU",
			"value": "Правильно"
		},
		{
			"id": "Antwort",
			"language": "RU",
			"value": "Ответ(ы)"
		},
		{
			"id": "FalscheAntwort",
			"language": "RU",
			"value": "Неправильно"
		},
		{
			"id": "Lösungshinweise",
			"language": "RU",
			"value": "Разрешить просмотр правильных ответов"
		},
		{
			"id": "LösungshinweiseBeschreibung",
			"language": "RU",
			"value": "При неправильном ответе верное решение может быть показано по запросу,"
		},
		{
			"id": "Case",
			"language": "RU",
			"value": "Ввод с учетом регистра."
		},
		{
			"id": "Skip",
			"language": "RU",
			"value": "Показать ответ"
		},
		{
			"id": "APP_TITLE",
			"language": "ET",
			"value": "Teksti sisestamine"
		},
		{
			"id": "APP_TITLE",
			"language": "IT",
			"value": "Quiz con input "
		},
		{
			"id": "Eingabe",
			"language": "IT",
			"value": "Risposta"
		},
		{
			"id": "Antwort",
			"language": "IT",
			"value": "Risposte"
		},
		{
			"id": "RichtigeAntwort",
			"language": "IT",
			"value": "corretto"
		},
		{
			"id": "FalscheAntwort",
			"language": "IT",
			"value": "sbagliato"
		},
		{
			"id": "Lösungshinweise",
			"language": "IT",
			"value": "Permettere la visualizzazione delle soluzioni"
		},
		{
			"id": "Skip",
			"language": "IT",
			"value": "Far vedere la soluzione"
		},
		{
			"id": "Fragen",
			"language": "ET",
			"value": "Küsimused"
		},
		{
			"id": "Sortieren",
			"language": "ET",
			"value": "Sorteeri küsimused"
		},
		{
			"id": "SortierenBeschreibung",
			"language": "ET",
			"value": "Küsimusi võib esitada juhuslikus või etteantud järjekoras.\n"
		},
		{
			"id": "zufällige",
			"language": "ET",
			"value": "juhuslik esitlus"
		},
		{
			"id": "geordnet",
			"language": "ET",
			"value": "järjestatakse nagu praegu ülevalpool"
		},
		{
			"id": "Frage",
			"language": "ET",
			"value": "küsimus"
		},
		{
			"id": "Lösungshinweise",
			"language": "ET",
			"value": "Luba õigeid vastuseid näidata "
		},
		{
			"id": "LösungshinweiseBeschreibung",
			"language": "ET",
			"value": "Pärast vale vastust võib soovi korral vaadata õiget."
		},
		{
			"id": "Feedback",
			"language": "RM",
			"value": "Resun"
		},
		{
			"id": "Feedback",
			"language": "ET",
			"value": "tagasiside"
		},
		{
			"id": "Prüfen",
			"language": "ET",
			"value": "Kontrollige lahendust"
		},
		{
			"id": "Skip",
			"language": "ET",
			"value": "Näita lahendust"
		},
		{
			"id": "Weiter",
			"language": "ET",
			"value": "järgmine küsimus"
		},
		{
			"id": "feedbackFalse",
			"language": "ET",
			"value": "See pole veel päris õige vastus"
		},
		{
			"id": "feedbackTrue",
			"language": "ET",
			"value": "Tubli, see on õige!"
		},
		{
			"id": "FeedbackBeschreibung",
			"language": "ET",
			"value": "Kirjutage tekst, mis kuvatakse, kui kõik küsimused on õigesti vastatud."
		},
		{
			"id": "FeedbackValue",
			"language": "ET",
			"value": "Tubli, sa vastasid kõigile küsimustele õigesti!"
		},
		{
			"id": "RichtigeAntwort",
			"language": "ES",
			"value": "Correcto"
		},
		{
			"id": "FalscheAntwort",
			"language": "ES",
			"value": "Incorrecto"
		},
		{
			"id": "Antwort",
			"language": "ES",
			"value": "Respuesta(s)"
		},
		{
			"id": "Hinweis",
			"language": "ES",
			"value": "Pista"
		},
		{
			"id": "Skip",
			"language": "ES",
			"value": "Mostrar solución"
		},
		{
			"id": "Weiter",
			"language": "ES",
			"value": "Siguiente pregunta"
		},
		{
			"id": "feedbackFalse",
			"language": "ES",
			"value": "Esta respuesta no es correcta."
		},
		{
			"id": "FeedbackValue",
			"language": "ES",
			"value": "Muy bien, todas las preguntas están bien."
		},
		{
			"id": "feedbackTrue",
			"language": "ES",
			"value": "¡Muy bien!"
		},
		{
			"id": "Fragen",
			"language": "ES",
			"value": "Preguntas"
		},
		{
			"id": "Frage",
			"language": "ES",
			"value": "Pregunta"
		},
		{
			"id": "Eingabe",
			"language": "ES",
			"value": "Respuesta"
		},
		{
			"id": "FeedbackValue",
			"language": "BG",
			"value": "Чудесно е, че отговорите на всички въпроси са правилни. "
		},
		{
			"id": "FeedbackBeschreibung",
			"language": "BG",
			"value": "Осигурете текстова обратна връзка, която се показва, когато всички въпроси е отговорено правилно."
		},
		{
			"id": "feedbackTrue",
			"language": "BG",
			"value": "Браво! Това е вярното решение. "
		},
		{
			"id": "feedbackFalse",
			"language": "BG",
			"value": "Това не е най-правилното решение."
		},
		{
			"id": "Weiter",
			"language": "BG",
			"value": "следващ въпрос"
		},
		{
			"id": "Skip",
			"language": "BG",
			"value": "Покажи решението"
		},
		{
			"id": "Prüfen",
			"language": "BG",
			"value": "Провери решението"
		},
		{
			"id": "Feedback",
			"language": "BG",
			"value": "Обратна връзка"
		},
		{
			"id": "Case",
			"language": "BG",
			"value": "Чувствителност при въвеждането на буквите. "
		},
		{
			"id": "Part",
			"language": "BG",
			"value": "Достатъчно е да бъде въведено вярното решение. "
		},
		{
			"id": "SetupBeschreibung",
			"language": "BG",
			"value": "Изберете дали при въвеждането главните и малките букви трябва да имат значение. Ако активирате тази опция, при въвеждането ще се отчете като неправилен отговорът, чийто правопис не съответства на зададения. Изберете дали отговорът да се отчете като верен, ако той съдържа вярното решение, но без да се изисква точно съвпадение при въвеждането на буквите. "
		},
		{
			"id": "Hinweis",
			"language": "BG",
			"value": "Подсказка"
		},
		{
			"id": "Setup",
			"language": "BG",
			"value": "Настройки"
		},
		{
			"id": "LösungshinweiseBeschreibung",
			"language": "BG",
			"value": "След неправилно решение правилният отговор може да бъде показан при поискване."
		},
		{
			"id": "FalscheAntwort",
			"language": "BG",
			"value": "неправилно"
		},
		{
			"id": "Lösungshinweise",
			"language": "BG",
			"value": "Позволете показването на правилните решения"
		},
		{
			"id": "RichtigeAntwort",
			"language": "BG",
			"value": "правилно"
		},
		{
			"id": "Antwort",
			"language": "BG",
			"value": "Отговор/и"
		},
		{
			"id": "Eingabe",
			"language": "BG",
			"value": "Отговор"
		},
		{
			"id": "geordnet",
			"language": "BG",
			"value": "подреждане като изброените по-горе"
		},
		{
			"id": "Frage",
			"language": "BG",
			"value": "Въпрос"
		},
		{
			"id": "SortierenBeschreibung",
			"language": "BG",
			"value": "Въпроси могат да бъдат показани на случаен принцип или в определен ред."
		},
		{
			"id": "zufällige",
			"language": "BG",
			"value": "произволен ред"
		},
		{
			"id": "FragenBeschreibung",
			"language": "BG",
			"value": "Осигуряване на въпросите за теста. Въведете валиден отговор за всеки въпрос или няколко верни отговора, като ги разделите един от друг със знака точка и запетая (;). Може да добавите и подсказки или съвети към всеки отговор, ако желаете."
		},
		{
			"id": "Sortieren",
			"language": "BG",
			"value": "Подреждане на въпросите"
		},
		{
			"id": "Fragen",
			"language": "BG",
			"value": "Въпроси"
		},
		{
			"id": "APP_TITLE",
			"language": "BG",
			"value": "Тест с въвеждане на текст"
		},
		{
			"id": "APP_DESCRIPTION",
			"language": "BG",
			"value": "Тест с текстово въвеждане за всеки въпрос. Може да осигурите няколко верни отговора към даден въпрос."
		},
		{
			"id": "APP_TITLE",
			"language": "UK",
			"value": "Вікторина з друкуванням"
		},
		{
			"id": "APP_DESCRIPTION",
			"language": "UK",
			"value": "Питання з відповідями, які потрібно друкувати. Можна задавати по кілька правильних відповідей на питання."
		},
		{
			"id": "SortierenBeschreibung",
			"language": "UK",
			"value": "Питання можна показувати впорядковано чи випадково"
		},
		{
			"id": "zufällige",
			"language": "UK",
			"value": "випадковий порядок"
		},
		{
			"id": "Fragen",
			"language": "UK",
			"value": "Питання"
		},
		{
			"id": "Frage",
			"language": "UK",
			"value": "Питання"
		},
		{
			"id": "Sortieren",
			"language": "UK",
			"value": "Сортувати питання"
		},
		{
			"id": "geordnet",
			"language": "UK",
			"value": "порядок, показаний вище"
		},
		{
			"id": "FalscheAntwort",
			"language": "UK",
			"value": "неправильно"
		},
		{
			"id": "RichtigeAntwort",
			"language": "UK",
			"value": "правильно"
		},
		{
			"id": "Eingabe",
			"language": "UK",
			"value": "Відповідь"
		},
		{
			"id": "Antwort",
			"language": "UK",
			"value": "Відповіді"
		},
		{
			"id": "Setup",
			"language": "UK",
			"value": "Налаштування"
		},
		{
			"id": "Lösungshinweise",
			"language": "UK",
			"value": "Дозволити показ правильних відповідей"
		},
		{
			"id": "LösungshinweiseBeschreibung",
			"language": "UK",
			"value": "Після неправильної відповіді можна попросити показати правильну"
		},
		{
			"id": "Case",
			"language": "UK",
			"value": "Враховувати регістр"
		},
		{
			"id": "Feedback",
			"language": "UK",
			"value": "Зворотній зв'язок"
		},
		{
			"id": "Part",
			"language": "UK",
			"value": "Текст має містити відповідь"
		},
		{
			"id": "Weiter",
			"language": "UK",
			"value": "Наступне питання"
		},
		{
			"id": "feedbackFalse",
			"language": "UK",
			"value": "На жаль, це неправильно."
		},
		{
			"id": "Skip",
			"language": "UK",
			"value": "Показати рішення"
		},
		{
			"id": "feedbackTrue",
			"language": "UK",
			"value": "Так, правильно!"
		},
		{
			"id": "FeedbackValue",
			"language": "UK",
			"value": "Чудово, правильні відповіді знайдено!"
		},
		{
			"id": "Hinweis",
			"language": "UK",
			"value": "Підказка"
		},
		{
			"id": "Prüfen",
			"language": "UK",
			"value": "Перевірити рішення"
		},
		{
			"id": "FeedbackBeschreibung",
			"language": "UK",
			"value": "Напишіть текст зворотнього зв'язку, який з'явиться, коли правильне рішення буде знайдено."
		},
		{
			"id": "FragenBeschreibung",
			"language": "UK",
			"value": "Введіть одне питання і правильну відповідь або список правильних відповідей, відділених ;  При бажанні, можна записати підказки для кожної відповіді."
		},
		{
			"id": "SetupBeschreibung",
			"language": "UK",
			"value": "Велика і малі літери вважаються різними? Коли стоїть позначка, відповідь повинна абсолютно точно збігатися зі зразком. Також можна вказати, чи достатньо, щоб відповідь містила певний текст (наприклад, шукається 300 і відповідь &quot;300 метрів&quot;)?"
		},
		{
			"id": "APP_TITLE",
			"language": "TR",
			"value": "Bilgi yarışı (metin girmeli)"
		},
		{
			"id": "APP_DESCRIPTION",
			"language": "TR",
			"value": "Metin girerek cevaplandırılacak bir dizi soru sorun. Her soruya bir den çok doğru cevap girdisi belirleyebilirsiniz."
		},
		{
			"id": "Fragen",
			"language": "TR",
			"value": "Sorular"
		},
		{
			"id": "FragenBeschreibung",
			"language": "TR",
			"value": "Bir soru ve cevabını yazınız. Bir sorunun geçerli bir den çok doğru cevabı olabilecekse, bu cevapları noktalı virgül (;) ile ayırarak giriniz."
		},
		{
			"id": "Sortieren",
			"language": "TR",
			"value": "Soruları guruplandır"
		},
		{
			"id": "SortierenBeschreibung",
			"language": "TR",
			"value": "Soruların belli bir sıra ile mi, yoksa rastgele mi gösterileceğini belirleyiniz."
		},
		{
			"id": "zufällige",
			"language": "TR",
			"value": "Rastgele sırala"
		},
		{
			"id": "geordnet",
			"language": "TR",
			"value": "Yukarıda gösterildiği gibi sırala"
		},
		{
			"id": "Frage",
			"language": "TR",
			"value": "Sorular"
		},
		{
			"id": "Eingabe",
			"language": "TR",
			"value": "Metin/cevap gir"
		},
		{
			"id": "Antwort",
			"language": "TR",
			"value": "Cevap(lar)"
		},
		{
			"id": "RichtigeAntwort",
			"language": "TR",
			"value": "doğru"
		},
		{
			"id": "FalscheAntwort",
			"language": "TR",
			"value": "yanlış"
		},
		{
			"id": "Lösungshinweise",
			"language": "TR",
			"value": "Çözüm gösterilsin"
		},
		{
			"id": "LösungshinweiseBeschreibung",
			"language": "TR",
			"value": "Yanlış cevaptan sonra, doğru cevap gösterilsin mi?"
		},
		{
			"id": "Hinweis",
			"language": "TR",
			"value": "İp ucu"
		},
		{
			"id": "Setup",
			"language": "TR",
			"value": "Ayarlar"
		},
		{
			"id": "SetupBeschreibung",
			"language": "TR",
			"value": "Tam bir imla uyumluğu dikkate alınsın mı? Eğer bu etkinleştirilirse, yazılımdaki en ufak farklılık, cevabın yanlış değerlendirilmesine neden olacaktır."
		},
		{
			"id": "Case",
			"language": "TR",
			"value": "İmla kurallarına riayet edilsin"
		},
		{
			"id": "Feedback",
			"language": "TR",
			"value": "Geri dönüşüm"
		},
		{
			"id": "Prüfen",
			"language": "TR",
			"value": "Çözüm kontrol edilsin"
		},
		{
			"id": "Skip",
			"language": "TR",
			"value": "Çözüm gösterilsin"
		},
		{
			"id": "Weiter",
			"language": "TR",
			"value": "Bir sonraki soru"
		},
		{
			"id": "feedbackFalse",
			"language": "TR",
			"value": "Maalesef, henüz doğru değil!"
		},
		{
			"id": "feedbackTrue",
			"language": "TR",
			"value": "Tebrikler, doğru!"
		},
		{
			"id": "FeedbackBeschreibung",
			"language": "TR",
			"value": "Tüm sorular doğru cevaplandırıldığında, gösterilmesini istediğiniz bir metni buraya giriniz."
		},
		{
			"id": "FeedbackValue",
			"language": "TR",
			"value": "Maşaallah, tüm soruları doğru cevaplandırdınız!"
		},
		{
			"id": "Part",
			"language": "TR",
			"value": "Çözüm kelimesinin, metnin içinde bulunması yeterli."
		},
		{
			"id": "APP_TITLE",
			"language": "GE",
			"value": "ვიქტორინა"
		},
		{
			"id": "APP_DESCRIPTION",
			"language": "GE",
			"value": "კითხვებს პასუხი უნდა გაეცეს ტექსტის კლავიატურიდან შეყვანით. შეგძლიათ მიუთითოთ ; სიმბოლოთი გამოყოფილი რამდენიმე სწორი ჩანაწერი. მაგალითად აკაკი წერეთელი;აკაკი"
		},
		{
			"id": "Fragen",
			"language": "GE",
			"value": "დასვით კითხვა"
		},
		{
			"id": "FragenBeschreibung",
			"language": "GE",
			"value": "შეიყვანეთ კითხვა და მასზე სწორი პასუხი ან სწორი პასუხების სია შეიყვანეთ ცალკე, რაც აუცილებელი არ არის."
		},
		{
			"id": "Sortieren",
			"language": "GE",
			"value": "კითხვების დახარისხება"
		},
		{
			"id": "SortierenBeschreibung",
			"language": "GE",
			"value": "შეკითხვები შეიძლება დაისვას დადგენილი წესის მიხედვით ან შემთხვევითი შერჩევით."
		},
		{
			"id": "zufällige",
			"language": "GE",
			"value": "შემთხვევითი შერჩევა"
		},
		{
			"id": "geordnet",
			"language": "GE",
			"value": "დადგენილი თანმიმდევრობა"
		},
		{
			"id": "Frage",
			"language": "GE",
			"value": "კითხვა"
		},
		{
			"id": "Eingabe",
			"language": "GE",
			"value": "შეყვანა"
		},
		{
			"id": "Antwort",
			"language": "GE",
			"value": "პასუხი(პასუხები)"
		},
		{
			"id": "RichtigeAntwort",
			"language": "GE",
			"value": "სწორია"
		},
		{
			"id": "FalscheAntwort",
			"language": "GE",
			"value": "არ არის სწორი"
		},
		{
			"id": "Lösungshinweise",
			"language": "GE",
			"value": "პასუხების შემოწმება"
		},
		{
			"id": "LösungshinweiseBeschreibung",
			"language": "GE",
			"value": "მცდარი პასუხების ასახვა."
		},
		{
			"id": "Hinweis",
			"language": "GE",
			"value": "მიმართვა"
		},
		{
			"id": "Setup",
			"language": "GE",
			"value": "პარამეტრები"
		},
		{
			"id": "Case",
			"language": "GE",
			"value": "რეგისტრის გათვალისწინებით."
		},
		{
			"id": "Part",
			"language": "GE",
			"value": "სწორი პასუხი ჩართული იყოს."
		},
		{
			"id": "Feedback",
			"language": "GE",
			"value": "უკუკავშირი"
		},
		{
			"id": "Prüfen",
			"language": "GE",
			"value": "შეამოწმეთ პასუხი"
		},
		{
			"id": "Skip",
			"language": "GE",
			"value": "პასუხის ჩვენება"
		},
		{
			"id": "Weiter",
			"language": "GE",
			"value": "შემდეგი კითხვა"
		},
		{
			"id": "feedbackFalse",
			"language": "GE",
			"value": "სამწუხაროდ ვერ შეავსეთ."
		},
		{
			"id": "feedbackTrue",
			"language": "GE",
			"value": "კარგია, სწორია!"
		},
		{
			"id": "FeedbackBeschreibung",
			"language": "GE",
			"value": "შეიყვანეთ ტესქტი, რომელიც აისახება როდესაც ყველა სიტყვა სწორადაა შეტანილი."
		},
		{
			"id": "FeedbackValue",
			"language": "GE",
			"value": "კარგია, თქვენ ყველა დავალება სწორად შეასრულეთ!"
		},
		{
			"id": "Hintergrundbild",
			"language": "DE",
			"value": "Hintergrundbild"
		},
		{
			"id": "Hintergrundbild",
			"language": "EN",
			"value": "Background image"
		},
		{
			"id": "HintergrundbildBeschreibung",
			"language": "DE",
			"value": "Wählen Sie optional ein Hintergrundbild für das Quiz aus."
		},
		{
			"id": "HintergrundbildBeschreibung",
			"language": "EN",
			"value": "Optionally, you can select a background image for this Quiz."
		},
		{
			"id": "Hintergrundbild",
			"language": "GE",
			"value": "ფონი"
		},
		{
			"id": "HintergrundbildBeschreibung",
			"language": "GE",
			"value": "სურვილისამებრ აირჩიეთ სურათი ამ თავსატეხის ფონისათვის."
		},
		{
			"id": "SetupBeschreibung",
			"language": "GE",
			"value": "არის თუ არა რეგისტრი გადართული? თუ რეგისტრი გადართულია ან ორთოგრაფია არ არის სწორი შესვლა შეუძლებელია (მაგ., ვწერთ 300-სს, ხოლო სწორ პასუხად მითითებულია 300 მეტრი)?"
		},
		{
			"id": "SortierenBeschreibung",
			"language": "RU",
			"value": "Вопросы могут показываться в постоянном или случайном порядке."
		},
		{
			"id": "zufällige",
			"language": "ES",
			"value": "Orden aleatorio"
		},
		{
			"id": "Setup",
			"language": "ES",
			"value": "Configuración"
		},
		{
			"id": "Setup",
			"language": "ET",
			"value": "Seaded"
		},
		{
			"id": "Hintergrundbild",
			"language": "FR",
			"value": "Image d'arrière-plan"
		},
		{
			"id": "Hintergrundbild",
			"language": "IT",
			"value": "Immagine di sfondo"
		},
		{
			"id": "Hintergrundbild",
			"language": "RU",
			"value": "Фоновая картинка"
		},
		{
			"id": "Hintergrundbild",
			"language": "RM",
			"value": "Maletg da funs"
		},
		{
			"id": "Hintergrundbild",
			"language": "RO",
			"value": "Imagine fundal"
		},
		{
			"id": "Hintergrundbild",
			"language": "PL",
			"value": "Tapeta "
		},
		{
			"id": "Hintergrundbild",
			"language": "BG",
			"value": "Фоново изображение"
		},
		{
			"id": "Hintergrundbild",
			"language": "ET",
			"value": "Taustapilt"
		},
		{
			"id": "Hintergrundbild",
			"language": "TR",
			"value": "Arkaplan resmi"
		},
		{
			"id": "Hintergrundbild",
			"language": "UK",
			"value": "Фонове зображення"
		},
		{
			"id": "HintergrundbildBeschreibung",
			"language": "FR",
			"value": "Choisissez une image d'arrière-plan"
		},
		{
			"id": "HintergrundbildBeschreibung",
			"language": "RU",
			"value": "Выберите фоновую картинку для кроссворда,если желаете."
		},
		{
			"id": "HintergrundbildBeschreibung",
			"language": "RM",
			"value": "Elegia opziunalmein in maletg da funs per quei il legn."
		},
		{
			"id": "HintergrundbildBeschreibung",
			"language": "RO",
			"value": "Alegeți opțional o imagine de fundal pentru acest rebus"
		},
		{
			"id": "HintergrundbildBeschreibung",
			"language": "PL",
			"value": "Opcjonalnie, można wybrać obraz tła."
		},
		{
			"id": "HintergrundbildBeschreibung",
			"language": "BG",
			"value": "Изберете фоново изображение за кръстословицата, ако желаете."
		},
		{
			"id": "HintergrundbildBeschreibung",
			"language": "TR",
			"value": "İsterseniz arkaplan resmi belirleyebilirsiniz"
		},
		{
			"id": "HintergrundbildBeschreibung",
			"language": "UK",
			"value": "Можете обрати фонове зображення для кросворду"
		},
		{
			"id": "Fragen",
			"language": "BS",
			"value": "Pitanja"
		},
		{
			"id": "FragenBeschreibung",
			"language": "BS",
			"value": "Pitanje, tačan odgovor ili listu tačnih odgovora odvojite sa ;"
		},
		{
			"id": "Sortieren",
			"language": "BS",
			"value": "Sortirajte pitanja"
		},
		{
			"id": "SortierenBeschreibung",
			"language": "BS",
			"value": "Pitanja mogu biti prikazana po redu ili slučajnim redoslijedom."
		},
		{
			"id": "zufällige",
			"language": "BS",
			"value": "Slučajni raspored"
		},
		{
			"id": "geordnet",
			"language": "BS",
			"value": "Raspored po gornjem redu"
		},
		{
			"id": "Frage",
			"language": "BS",
			"value": "Pitanje"
		},
		{
			"id": "Antwort",
			"language": "BS",
			"value": "Odgovori"
		},
		{
			"id": "Lösungshinweise",
			"language": "BS",
			"value": "Dozvoli prikazivanje pravilnog odgovora"
		},
		{
			"id": "RichtigeAntwort",
			"language": "BS",
			"value": "Pravilno"
		},
		{
			"id": "Eingabe",
			"language": "BS",
			"value": "Odgovor"
		},
		{
			"id": "LösungshinweiseBeschreibung",
			"language": "BS",
			"value": "Nakon pogrešnog odgovora, pravilan može biti prikazan na zahtjev"
		},
		{
			"id": "FalscheAntwort",
			"language": "BS",
			"value": "Pogrešno"
		},
		{
			"id": "Setup",
			"language": "BS",
			"value": "Postavke"
		},
		{
			"id": "Hinweis",
			"language": "BS",
			"value": "Savjet"
		},
		{
			"id": "Part",
			"language": "BS",
			"value": "Odgovor mora sadržavati traženu riječ"
		},
		{
			"id": "Case",
			"language": "BS",
			"value": "Pazite na veliko i malo slovo."
		},
		{
			"id": "SetupBeschreibung",
			"language": "BS",
			"value": "Odredi da li će na ispravnost odgovora utjecati veliko ili malo slovo. Ako je ovo označeno, svako slovo mora biti identično ponuđenom odgovoru. Ako ostavite neoznačeno onda se može prihvatiti odgovor ako sadrži i ukazuje da je tačan (npr. traži se odgovor &quot;300 metara&quot;, a ponudi se &quot;300&quot;)"
		},
		{
			"id": "Feedback",
			"language": "BS",
			"value": "Feedback"
		},
		{
			"id": "Weiter",
			"language": "BS",
			"value": "Sljedeće pitanje"
		},
		{
			"id": "Prüfen",
			"language": "BS",
			"value": "Provjeri ispravnost rješenja"
		},
		{
			"id": "Skip",
			"language": "BS",
			"value": "Prikaži rješenje"
		},
		{
			"id": "feedbackTrue",
			"language": "BS",
			"value": "Bravo, to je ispravno!"
		},
		{
			"id": "feedbackFalse",
			"language": "BS",
			"value": "Nažalost, još nije ispravno"
		},
		{
			"id": "FeedbackValue",
			"language": "BS",
			"value": "Čestitamo, na sva pitanja ste tačno odgovorili"
		},
		{
			"id": "HintergrundbildBeschreibung",
			"language": "BS",
			"value": "Odaberite pozadinsku sliku za ovu vježbu po želji."
		},
		{
			"id": "Hintergrundbild",
			"language": "BS",
			"value": "Pozadinska slika."
		},
		{
			"id": "APP_TITLE",
			"language": "BS",
			"value": "Kviz sa pisanjem odgovora"
		},
		{
			"id": "APP_DESCRIPTION",
			"language": "BS",
			"value": "Kviz sa pisanjem odgovora za svako pitanje. Može se ponuditi i više tačnih mogućnosti."
		},
		{
			"id": "FeedbackBeschreibung",
			"language": "BS",
			"value": "Unesite feedback tekst koji će se pojaviti nakon što sva na sva pitanja budu pravilno odgovoreno."
		},
		{
			"id": "Antwort",
			"language": "ET",
			"value": "Vastus(ed)"
		},
		{
			"id": "RichtigeAntwort",
			"language": "ET",
			"value": "õige"
		},
		{
			"id": "FalscheAntwort",
			"language": "ET",
			"value": "vale"
		},
		{
			"id": "Hinweis",
			"language": "ET",
			"value": "Juhend"
		},
		{
			"id": "HintergrundbildBeschreibung",
			"language": "ET",
			"value": "Võite selle mõistatuse jaoks valida taustapildi."
		},
		{
			"id": "APP_DESCRIPTION",
			"language": "IT",
			"value": "Formula una serie di domande a cui si deve rispondere scrivendo nello spazio vuoto. È possibile indicare più soluzioni."
		},
		{
			"id": "SortierenBeschreibung",
			"language": "IT",
			"value": "Le domande possono essere poste casualmente o in un ordine prestabilito."
		},
		{
			"id": "FragenBeschreibung",
			"language": "IT",
			"value": "Formula una domanda e una risposta corre o una lista di risposte corrette divise da ; . Puoi dare un indizio se la risposta è corretta o sbagliata."
		},
		{
			"id": "Case",
			"language": "IT",
			"value": "Considerare le maiuscole e le minuscole."
		},
		{
			"id": "LösungshinweiseBeschreibung",
			"language": "IT",
			"value": "Dopo una risposta sbagliata può essere visualizzata la risposta corretta."
		},
		{
			"id": "SetupBeschreibung",
			"language": "IT",
			"value": "Si deve considerare le maiuscole e le minuscole? Se si attiva la casella, la risposta sarà considerata sbagliata se l'ortografia non corrisponde perfettamente alla risposta prestabilita. Basta che la risposta sia inclusa nel testo immesso (esempio: la risposta è 300 e il testo immesso è 300 metri)?"
		},
		{
			"id": "Part",
			"language": "IT",
			"value": "La risposta è inclusa nel testo immesso."
		},
		{
			"id": "HintergrundbildBeschreibung",
			"language": "IT",
			"value": "Scegli un'immagine come fondo di questo quiz."
		},
		{
			"id": "APP_DESCRIPTION",
			"language": "NL",
			"value": "Ontwerp een reeks vragen die met een tekst beantwoord moet worden. U kunt ook meerdere juiste antwoorden per vraag opgeven."
		},
		{
			"id": "APP_TITLE",
			"language": "NL",
			"value": "Quiz met in te vullen tekst"
		},
		{
			"id": "Fragen",
			"language": "NL",
			"value": "Vragen"
		},
		{
			"id": "FragenBeschreibung",
			"language": "NL",
			"value": "Ontwerp de vragen bij de quiz. Geef een juist antwoord op bij elke vraag of meerdere juiste anwoorden gescheiden door een ; U kunt, als u wilt,  ook hints toevoegen voor elk antwoord."
		},
		{
			"id": "Sortieren",
			"language": "NL",
			"value": "Vragen sorteren"
		},
		{
			"id": "SortierenBeschreibung",
			"language": "NL",
			"value": "De vragen kunnen willekeurig of in volgorde aangeboden worden."
		},
		{
			"id": "zufällige",
			"language": "NL",
			"value": "In willekeurige volgorde"
		},
		{
			"id": "geordnet",
			"language": "NL",
			"value": "In volgorde zoals hierboven aangegeven"
		},
		{
			"id": "Frage",
			"language": "NL",
			"value": "Vraag"
		},
		{
			"id": "RichtigeAntwort",
			"language": "NL",
			"value": "Juist"
		},
		{
			"id": "Eingabe",
			"language": "NL",
			"value": "Oplossing"
		},
		{
			"id": "FalscheAntwort",
			"language": "NL",
			"value": "Fout"
		},
		{
			"id": "Antwort",
			"language": "NL",
			"value": "Antwoord(en)"
		},
		{
			"id": "Setup",
			"language": "NL",
			"value": "Instellingen"
		},
		{
			"id": "Lösungshinweise",
			"language": "NL",
			"value": "Oplossingen bekijken toelaten"
		},
		{
			"id": "Case",
			"language": "NL",
			"value": "Het antwoord is hoofdlettergevoelig"
		},
		{
			"id": "LösungshinweiseBeschreibung",
			"language": "NL",
			"value": "Na een foute ingave kan de juiste oplossing op verzoek getoodn worden."
		},
		{
			"id": "Part",
			"language": "NL",
			"value": "Het antwoord moet enkel de oplossing bevatten"
		},
		{
			"id": "SetupBeschreibung",
			"language": "NL",
			"value": "Is de oplossing hoofdlettergevoelig? Als u dit activeert moet het antwoord exact gelijk zijn aan de opgegeven oplossing. Volstaat het als de oplossing in het antwoord vervat zit zonder dat dit exact hetzelfde is?"
		},
		{
			"id": "Prüfen",
			"language": "NL",
			"value": "Oplossing controleren"
		},
		{
			"id": "Hinweis",
			"language": "NL",
			"value": "Hint"
		},
		{
			"id": "Skip",
			"language": "NL",
			"value": "Oplossing tonen"
		},
		{
			"id": "Feedback",
			"language": "NL",
			"value": "Feedback"
		},
		{
			"id": "Weiter",
			"language": "NL",
			"value": "Volgende vraag"
		},
		{
			"id": "feedbackFalse",
			"language": "NL",
			"value": "Helaas nog steeds niet juist"
		},
		{
			"id": "FeedbackValue",
			"language": "NL",
			"value": "Prima, u heeft alle vragen correct beantwoord."
		},
		{
			"id": "feedbackTrue",
			"language": "NL",
			"value": "Prima, helemaal correct."
		},
		{
			"id": "FeedbackBeschreibung",
			"language": "NL",
			"value": "Voorzie een feedbacktekst die getoond zal worden als alle vragen juist beantwoord zijn."
		},
		{
			"id": "Hintergrundbild",
			"language": "NL",
			"value": "Achtergrondafbeelding"
		},
		{
			"id": "HintergrundbildBeschreibung",
			"language": "NL",
			"value": "Voorzie een achtergrondafbeelding bij deze oefening indien u wenst."
		},
		{
			"id": "APP_TITLE",
			"language": "GR",
			"value": "Κουίζ με εισαγωγή απάντησης"
		},
		{
			"id": "Sortieren",
			"language": "SV",
			"value": "Sortera frågor"
		},
		{
			"id": "SortierenBeschreibung",
			"language": "FR",
			"value": "Les questions peuvent être affichées aléatoirement ou dans l'ordre."
		},
		{
			"id": "Frage",
			"language": "SV",
			"value": "Fråga"
		},
		{
			"id": "Setup",
			"language": "GR",
			"value": "Ρυθμίσεις"
		},
		{
			"id": "Feedback",
			"language": "GR",
			"value": "Μήνυμα επιβράβευσης"
		},
		{
			"id": "Prüfen",
			"language": "GR",
			"value": "Έλεγξε τη λύση"
		},
		{
			"id": "feedbackFalse",
			"language": "GR",
			"value": "Δεν είναι η σωστή απάντηση"
		},
		{
			"id": "FeedbackBeschreibung",
			"language": "SV",
			"value": "Text som visas när alla frågor blivit korrekt besvarade."
		},
		{
			"id": "Hintergrundbild",
			"language": "SV",
			"value": "Bakgrundsbild"
		},
		{
			"id": "Hintergrundbild",
			"language": "GR",
			"value": "Εικόνα φόντου"
		},
		{
			"id": "APP_TITLE",
			"language": "HU",
			"value": "Kvíz szövegbevitellel"
		},
		{
			"id": "APP_TITLE",
			"language": "PT",
			"value": "Questionário com entrada"
		},
		{
			"id": "APP_DESCRIPTION",
			"language": "PT",
			"value": "Questionário com entradas de texto para cada pergunta. Também pode fornecer várias respostas correctas para cada pergunta."
		},
		{
			"id": "Fragen",
			"language": "PT",
			"value": "Questões"
		},
		{
			"id": "Sortieren",
			"language": "PT",
			"value": "Ordenar perguntas"
		},
		{
			"id": "SortierenBeschreibung",
			"language": "PT",
			"value": "As questões podem ser exibidas aleatoriamente ou em ordem.\n"
		},
		{
			"id": "zufällige",
			"language": "PT",
			"value": "forma aleatória"
		},
		{
			"id": "geordnet",
			"language": "PT",
			"value": "ordenada como assinalado em cima"
		},
		{
			"id": "Frage",
			"language": "PT",
			"value": "questão"
		},
		{
			"id": "Eingabe",
			"language": "PT",
			"value": "entrada"
		},
		{
			"id": "RichtigeAntwort",
			"language": "PT",
			"value": "certo"
		},
		{
			"id": "Antwort",
			"language": "PT",
			"value": "resposta"
		},
		{
			"id": "FalscheAntwort",
			"language": "PT",
			"value": "errado"
		},
		{
			"id": "Lösungshinweise",
			"language": "PT",
			"value": "permitir mostrar soluções correctas"
		},
		{
			"id": "LösungshinweiseBeschreibung",
			"language": "PT",
			"value": "depois de uma resposta incorrecta, a solução pode ser apresentada se solicitado."
		},
		{
			"id": "Hinweis",
			"language": "PT",
			"value": "dica"
		},
		{
			"id": "Setup",
			"language": "PT",
			"value": "configurações"
		},
		{
			"id": "Part",
			"language": "PT",
			"value": "entrada necessita apenas da solução"
		},
		{
			"id": "Feedback",
			"language": "PT",
			"value": "Feedback"
		},
		{
			"id": "Prüfen",
			"language": "PT",
			"value": "verificar solução"
		},
		{
			"id": "Skip",
			"language": "PT",
			"value": "mostrar solução"
		},
		{
			"id": "Weiter",
			"language": "PT",
			"value": "próxima questão"
		},
		{
			"id": "feedbackFalse",
			"language": "PT",
			"value": "esta não é a solução correcta"
		},
		{
			"id": "feedbackTrue",
			"language": "PT",
			"value": "Óptimo, está certo"
		},
		{
			"id": "FeedbackBeschreibung",
			"language": "PT",
			"value": "Fornecer um texto de feedback que é exibido quando a solução é encontrada."
		},
		{
			"id": "FeedbackValue",
			"language": "PT",
			"value": "Óptimo, respondeu a todas as questões correctamente"
		},
		{
			"id": "Hintergrundbild",
			"language": "PT",
			"value": "Imagem de fundo"
		},
		{
			"id": "HintergrundbildBeschreibung",
			"language": "PT",
			"value": "Seleccione uma imagem de fundo para as palavras cruzadas, se quiser."
		},
		{
			"id": "FragenBeschreibung",
			"language": "PT",
			"value": "Forneça as perguntas para o quiz. Insira uma resposta válida para cada questão ou várias respostas correctas separadas por; para cada questão. Também pode adicionar dicas para cada resposta, se quiser."
		},
		{
			"id": "Case",
			"language": "PT",
			"value": "Sensível a maiúsculas"
		},
		{
			"id": "SetupBeschreibung",
			"language": "PT",
			"value": "Selecione se as entradas são sensíveis a maiúsculas  ou não. Se esta funcionalidade for é activada, todas as entradas devem corresponder exatamente às respostas dadas. Selecione se uma entrada é correcta contendo a solução certa, sem corresponder exactamente ."
		},
		{
			"id": "Ende",
			"language": "TR",
			"value": "Bilgi yarışmasını sonlandır!"
		},
		{
			"id": "APP_DESCRIPTION",
			"language": "HU",
			"value": "Adja meg azon kérdések sorozatát, melyeket szövegbevitellel kell megválaszolni. Kérdésenként több helyes válasz megadása lehetséges."
		},
		{
			"id": "Ende",
			"language": "HU",
			"value": "Kvíz befejezése"
		},
		{
			"id": "Fragen",
			"language": "HU",
			"value": "Kérdések"
		},
		{
			"id": "FragenBeschreibung",
			"language": "HU",
			"value": "Adja meg a kérdést és a helyes választ, illetve e helyes válaszokat ;-vel elválasztva! Lehetőség van arra is, hogy segítségként súgószöveget adjon meg a helyes/hibás megoldás megtalálásához. "
		},
		{
			"id": "Sortieren",
			"language": "HU",
			"value": "Kérdések rendezése"
		},
		{
			"id": "SortierenBeschreibung",
			"language": "HU",
			"value": "Lehetőség van a kérdések véletlenszerű, vagy sorrendben történő feltevésére."
		},
		{
			"id": "zufällige",
			"language": "HU",
			"value": "véletlenszerű sorrend"
		},
		{
			"id": "geordnet",
			"language": "HU",
			"value": "A fent megadott sorrend szerinti rendezés"
		},
		{
			"id": "Eingabe",
			"language": "HU",
			"value": "Bevitel"
		},
		{
			"id": "Frage",
			"language": "HU",
			"value": "Kérdés"
		},
		{
			"id": "RichtigeAntwort",
			"language": "HU",
			"value": "helyes "
		},
		{
			"id": "Antwort",
			"language": "HU",
			"value": "Válasz(ok)"
		},
		{
			"id": "FalscheAntwort",
			"language": "HU",
			"value": "hibás"
		},
		{
			"id": "LösungshinweiseBeschreibung",
			"language": "HU",
			"value": "Hibás válasz után engedélyezhető a helyes megoldás felvillantása."
		},
		{
			"id": "Setup",
			"language": "HU",
			"value": "Beállítások"
		},
		{
			"id": "Lösungshinweise",
			"language": "HU",
			"value": "Megoldások megmutatásának engedélyezése"
		},
		{
			"id": "Hinweis",
			"language": "HU",
			"value": "Súgószó"
		},
		{
			"id": "SetupBeschreibung",
			"language": "HU",
			"value": "Kis- és nagybetűk megkülönböztetésre kerülnek-e? Amennyiben ezt a funkciót bekapcsoljuk, akkor az előre megadottal nem teljesen egyező válaszok hibásként tűnnek fel. Érvényes ez akkor is, ha a helyes megoldás része a válasznak. (pl. azt várjuk válaszként, hogy 300 és a bevitel 300 m)"
		},
		{
			"id": "Case",
			"language": "HU",
			"value": "Kis- és nagybetűk megkülönböztetése"
		},
		{
			"id": "Part",
			"language": "HU",
			"value": "A helyes választ tartalmazza a bevitel."
		},
		{
			"id": "Feedback",
			"language": "HU",
			"value": "Visszajelzés"
		},
		{
			"id": "Skip",
			"language": "HU",
			"value": "Megoldás mutatása"
		},
		{
			"id": "Prüfen",
			"language": "HU",
			"value": "Megoldás ellenőrzése"
		},
		{
			"id": "feedbackFalse",
			"language": "HU",
			"value": "Sajnos ez még nem helyes!"
		},
		{
			"id": "feedbackTrue",
			"language": "HU",
			"value": "Nagyszerű, ez helyes!"
		},
		{
			"id": "Weiter",
			"language": "HU",
			"value": "Következő kérdés"
		},
		{
			"id": "FeedbackValue",
			"language": "HU",
			"value": "Nagyszerű! Minden kérdést jól megválaszoltál."
		},
		{
			"id": "Hintergrundbild",
			"language": "HU",
			"value": "Háttérkép"
		},
		{
			"id": "FeedbackBeschreibung",
			"language": "HU",
			"value": "Adjon meg egy üzenetet, mely az összes kérdés helyes megválaszolása után megjelenik!"
		},
		{
			"id": "HintergrundbildBeschreibung",
			"language": "HU",
			"value": "A feladványhoz háttérkép kiválasztására van lehetőség."
		},
		{
			"id": "Ende",
			"language": "RU",
			"value": "Завершить викторину"
		},
		{
			"id": "Sortieren",
			"language": "BY",
			"value": "Сартаваць пытанні"
		},
		{
			"id": "SortierenBeschreibung",
			"language": "BY",
			"value": "Пытанні можна паказваць у выпадковым ці зададзеным парадку."
		},
		{
			"id": "zufällige",
			"language": "BY",
			"value": "выпадковая паслядоўнасць"
		},
		{
			"id": "geordnet",
			"language": "BY",
			"value": "як зададзена вышэй"
		},
		{
			"id": "Frage",
			"language": "BY",
			"value": "Пытанне"
		},
		{
			"id": "Hinweis",
			"language": "BY",
			"value": "Падказка"
		},
		{
			"id": "Setup",
			"language": "BY",
			"value": "Наладкі"
		},
		{
			"id": "Case",
			"language": "BY",
			"value": "Увод з улікам рэгістру (вялікія і малыя літары)"
		},
		{
			"id": "Part",
			"language": "BY",
			"value": "Увесці толькі слова-адказ"
		},
		{
			"id": "Feedback",
			"language": "BY",
			"value": "Зваротная сувязь"
		},
		{
			"id": "Prüfen",
			"language": "BY",
			"value": "Праверыць адказ"
		},
		{
			"id": "Setup",
			"language": "RU",
			"value": "Настройки"
		},
		{
			"id": "Hintergrundbild",
			"language": "BY",
			"value": "Фонавы малюнак"
		},
		{
			"id": "feedbackFalse",
			"language": "BY",
			"value": "Паказаць адказ"
		},
		{
			"id": "Antwort",
			"language": "BY",
			"value": "Адказ(ы)"
		},
		{
			"id": "Fragen",
			"language": "BY",
			"value": "Пытанні"
		},
		{
			"id": "feedbackTrue",
			"language": "BY",
			"value": "Цудоўна, правільна!"
		},
		{
			"id": "RichtigeAntwort",
			"language": "BY",
			"value": "Правільна"
		},
		{
			"id": "Weiter",
			"language": "BY",
			"value": "Наступнае пытанне"
		},
		{
			"id": "FalscheAntwort",
			"language": "BY",
			"value": "Няправільна"
		},
		{
			"id": "Ende",
			"language": "PL",
			"value": "Zakończ quiz"
		},
		{
			"id": "FeedbackBeschreibung",
			"language": "BY",
			"value": "Дадайце тэкст, які будзе паказаны, калі на ўсе пытанні будуць даны правільныя адказы."
		},
		{
			"id": "Ende",
			"language": "BG",
			"value": "Завършване на теста"
		},
		{
			"id": "Ende",
			"language": "UK",
			"value": "Завершити вікторину"
		},
		{
			"id": "Ende",
			"language": "NL",
			"value": "Quiz stoppen"
		},
		{
			"id": "HintergrundbildBeschreibung",
			"language": "BY",
			"value": "Абярыце фонавую выяву для гэтага практыкавання."
		},
		{
			"id": "Feedback",
			"language": "ES",
			"value": "Retroalimentación"
		},
		{
			"id": "Ende",
			"language": "IT",
			"value": "Uscita quiz"
		},
		{
			"id": "Sortieren",
			"language": "ES",
			"value": "Ordenar preguntas"
		},
		{
			"id": "Setup",
			"language": "IT",
			"value": "impostazioni"
		},
		{
			"id": "APP_TITLE",
			"language": "CZ",
			"value": "Kvíz se zadáváním textu "
		},
		{
			"id": "APP_DESCRIPTION",
			"language": "CZ",
			"value": "Sestavte sérii otázek, které musejí být zodpovězeny zadáním textu. Pro každou otázku můžete uvést i několik platných zadání."
		},
		{
			"id": "Ende",
			"language": "CZ",
			"value": "Ukončit kvíz "
		},
		{
			"id": "Fragen",
			"language": "CZ",
			"value": "Otázky"
		},
		{
			"id": "FragenBeschreibung",
			"language": "CZ",
			"value": "Zadejte vždy jednu otázku a jednu správnou odpověď nebo seznam správných odpovědí oddělených středníkem. Volitelně lze stanovit text s pokynem pro případ správného/chybného řešení."
		},
		{
			"id": "Sortieren",
			"language": "CZ",
			"value": "Roztřídit otázky "
		},
		{
			"id": "SortierenBeschreibung",
			"language": "CZ",
			"value": "Otázky mohou být kladeny nahodile nebo postupně."
		},
		{
			"id": "zufällige",
			"language": "CZ",
			"value": "nahodilé pořadí "
		},
		{
			"id": "geordnet",
			"language": "CZ",
			"value": "postupně, jak je uvedeno výše "
		},
		{
			"id": "Frage",
			"language": "CZ",
			"value": "Otázka"
		},
		{
			"id": "Eingabe",
			"language": "CZ",
			"value": "Zadání"
		},
		{
			"id": "Antwort",
			"language": "CZ",
			"value": "Odpověď (odpovědi)"
		},
		{
			"id": "RichtigeAntwort",
			"language": "CZ",
			"value": "správně"
		},
		{
			"id": "FalscheAntwort",
			"language": "CZ",
			"value": "špatně"
		},
		{
			"id": "Lösungshinweise",
			"language": "CZ",
			"value": "Povolit zobrazit řešení"
		},
		{
			"id": "LösungshinweiseBeschreibung",
			"language": "CZ",
			"value": "Po zadání chybného řešení lze na přání zobrazit správné řešení."
		},
		{
			"id": "Hinweis",
			"language": "CZ",
			"value": "Pokyn"
		},
		{
			"id": "Setup",
			"language": "CZ",
			"value": "Nastavení"
		},
		{
			"id": "SetupBeschreibung",
			"language": "CZ",
			"value": "Má být zohledněno psaní malých a velkých písmen? Pokud ano, bude zadaný text ohodnocen jako chybný, nebude-li pravopis přesně odpovídat správné odpovědi. Stačí, když bude řešení obsaženo v zadaném textu (např. hledáno je 300 a zadaný text zní 300 metrů)?"
		},
		{
			"id": "Case",
			"language": "CZ",
			"value": "Zohlednit psaní malých a velkých písmen."
		},
		{
			"id": "Part",
			"language": "CZ",
			"value": "Musí být obsažena pouze tajenka."
		},
		{
			"id": "Feedback",
			"language": "CZ",
			"value": "Odezva"
		},
		{
			"id": "Prüfen",
			"language": "CZ",
			"value": "Zkontrolovat řešení "
		},
		{
			"id": "Skip",
			"language": "CZ",
			"value": "Zobrazit řešení"
		},
		{
			"id": "Weiter",
			"language": "CZ",
			"value": "další otázka "
		},
		{
			"id": "feedbackFalse",
			"language": "CZ",
			"value": "Odpověď bohužel není správná."
		},
		{
			"id": "feedbackTrue",
			"language": "CZ",
			"value": "Výborně, správná odpověď."
		},
		{
			"id": "FeedbackBeschreibung",
			"language": "CZ",
			"value": "Zadejte text, který se zobrazí, když byly všechny otázky zodpovězeny správně."
		},
		{
			"id": "FeedbackValue",
			"language": "CZ",
			"value": "Výborně, vyřešil jsi všechny otázky."
		},
		{
			"id": "Hintergrundbild",
			"language": "CZ",
			"value": "Obrázek na pozadí"
		},
		{
			"id": "HintergrundbildBeschreibung",
			"language": "CZ",
			"value": "Vyberte obrázek na pozadí pro tuto hádanku."
		},
		{
			"id": "Ende",
			"language": "RM",
			"value": "Finir il quiz"
		},
		{
			"id": "APP_TITLE",
			"language": "BY",
			"value": "Віктарына з уводам тэксту"
		},
		{
			"id": "APP_DESCRIPTION",
			"language": "BY",
			"value": "Задайце шэраг пытанняў, на якія трэба адказаць, уводзячы тэкст. Вы таксама можаце паказаць некалькі дапушчальных варыянтаў для кожнага пытання."
		},
		{
			"id": "Ende",
			"language": "BY",
			"value": "Канец віктарыны"
		},
		{
			"id": "FragenBeschreibung",
			"language": "BY",
			"value": "Калі ласка, увядзіце адно пытанне і правільны адказ ці спіс правільных адказаў, падзеленых знакам &quot;;&quot; Тэкст падказкі можа дапамагчы зразумець: адказ правільны ці не."
		},
		{
			"id": "Lösungshinweise",
			"language": "BY",
			"value": "Дазволіць паказаць правільныя адказы"
		},
		{
			"id": "LösungshinweiseBeschreibung",
			"language": "BY",
			"value": "Пасля няправільнага адказу правільны можа быць паказаны па запыце."
		},
		{
			"id": "Eingabe",
			"language": "BY",
			"value": "Увод тэксту"
		},
		{
			"id": "SetupBeschreibung",
			"language": "BY",
			"value": "Прымяніць увод з улікам рэгістру (Вялікія і малыя літары)? Увод тэксту будзе ацэнены як памылковы, калі тэкст не будзе дакладна супадаць з тэкстам, уведзеным вучнем. ДАстаткова, калі правільны адказ ужо змешчаны ў пытанні (напрыклад, шукаць лічбы 300 пры ўводзе &quot;300 метраў&quot;)"
		},
		{
			"id": "Skip",
			"language": "BY",
			"value": "Паказаць адказ"
		},
		{
			"id": "FeedbackValue",
			"language": "BY",
			"value": "Выдатна, вы адказалі на ўсе пытанні!"
		},
		{
			"id": "Ende",
			"language": "BS",
			"value": "Završiti kviz"
		},
		{
			"id": "Ende",
			"language": "RO",
			"value": "Încheie Quiz"
		},
		{
			"id": "HintergrundbildBeschreibung",
			"language": "ES",
			"value": "Puede elegir una imagen de fondo para este rompecabezas."
		},
		{
			"id": "Hintergrundbild",
			"language": "ES",
			"value": "imagen de fondo"
		},
		{
			"id": "FeedbackBeschreibung",
			"language": "ES",
			"value": "Ingrese un texto que se mostrará cuando todas las preguntas hayan sido respondidas correctamente."
		},
		{
			"id": "Part",
			"language": "ES",
			"value": "Solo es necesario incluir la palabra que es la solución."
		},
		{
			"id": "Case",
			"language": "ES",
			"value": "Tenga en cuenta mayúsculas y minúsculas."
		},
		{
			"id": "SetupBeschreibung",
			"language": "ES",
			"value": "¿Debe ser sensible a mayúsculas y minúsculas? Si se activa, una entrada se considera incorrecta si la ortografía no coincide exactamente con la especificada. ¿Es suficiente si la solución se incluye en la entrada (por ejemplo, se busca 300 y la entrada es de 300)?"
		},
		{
			"id": "LösungshinweiseBeschreibung",
			"language": "ES",
			"value": "Después de una solución incorrecta, se se desea se puede mostrar la correcta."
		},
		{
			"id": "Lösungshinweise",
			"language": "ES",
			"value": "Permitir mostrar soluciones"
		},
		{
			"id": "geordnet",
			"language": "ES",
			"value": "ordenado como se indicó anteriormente"
		},
		{
			"id": "SortierenBeschreibung",
			"language": "ES",
			"value": "Las preguntas pueden hacerse al azar o de manera ordenada."
		},
		{
			"id": "FragenBeschreibung",
			"language": "ES",
			"value": "Ingrese una pregunta y una respuesta correcta o una lista de respuestas correctas separadas por punto y coma (;). Se puede definir un texto opcional si la solución es correcta / incorrecta."
		},
		{
			"id": "Ende",
			"language": "ES",
			"value": "Finalizar cuestionario"
		},
		{
			"id": "APP_DESCRIPTION",
			"language": "ES",
			"value": "Haga una serie de preguntas que deben responderse con un texto. También puede ingresar múltiples entradas válidas por pregunta."
		},
		{
			"id": "APP_TITLE",
			"language": "ES",
			"value": "Prueba con entrada"
		},
		{
			"id": "FragenBeschreibung",
			"language": "RU",
			"value": "Введите вопрос и правильный ответ или список правильных ответов, разделенных точкой с запятой (;). Информационный текст может быть дополнительно определен в случае правильного / неправильного решения."
		},
		{
			"id": "SetupBeschreibung",
			"language": "RU",
			"value": "Вы чувствительны к регистру? Если эта функция активирована, запись оценивается как неправильная, если написание не полностью соответствует спецификации. Достаточно ли, если ответ включен во входные данные (например, поиск - 300, а вход - 300 метров)?"
		},
		{
			"id": "Part",
			"language": "RU",
			"value": "Нужно только решение."
		},
		{
			"id": "Sortieren",
			"language": "GL",
			"value": "Ordenar as preguntas"
		},
		{
			"id": "Setup",
			"language": "GL",
			"value": "Configuración"
		},
		{
			"id": "Hintergrundbild",
			"language": "GL",
			"value": "Imaxe de fondo"
		},
		{
			"id": "APP_TITLE",
			"language": "LT",
			"value": "Testas su teksto įvestimi"
		},
		{
			"id": "APP_DESCRIPTION",
			"language": "LT",
			"value": "Testas, kuriame reikia įrašyti tekstą kiekvienam klausimui. Galite pateikti ir keletą teisingų atsakymų į vieną klausimą."
		},
		{
			"id": "Fragen",
			"language": "LT",
			"value": "Klausimai"
		},
		{
			"id": "Sortieren",
			"language": "LT",
			"value": "Rūšiuoti klausimus"
		},
		{
			"id": "SortierenBeschreibung",
			"language": "LT",
			"value": "Klausimai gali būti rodomi atsitiktinai arba nustatyta tvarka"
		},
		{
			"id": "Ende",
			"language": "LT",
			"value": "Užbaigti testą"
		},
		{
			"id": "geordnet",
			"language": "LT",
			"value": "viršuje nustatyta tvarka"
		},
		{
			"id": "zufällige",
			"language": "LT",
			"value": "atsitiktine tvarka"
		},
		{
			"id": "Frage",
			"language": "LT",
			"value": "Klausimas"
		},
		{
			"id": "FragenBeschreibung",
			"language": "LT",
			"value": "Kiekvienoje skiltyje pateikite klausimą ir teisingą atsakymą arba sąrašą teisingų atsakymų, atskirtų kabliataškiais ( ; ). Jei norite, galite parašyti ir užuominas, kurios rodomos, kuomet pateikiamas teisingas / klaidingas atsakymas."
		},
		{
			"id": "Eingabe",
			"language": "LT",
			"value": "Atsakymas"
		},
		{
			"id": "LösungshinweiseBeschreibung",
			"language": "LT",
			"value": "Po klaidingos įvesties gali būti rodomas teisingas atsakymas, jei jo prašoma."
		},
		{
			"id": "Antwort",
			"language": "LT",
			"value": "Atsakymas / atsakymai"
		},
		{
			"id": "Hinweis",
			"language": "LT",
			"value": "Atliepas"
		},
		{
			"id": "Lösungshinweise",
			"language": "LT",
			"value": "Leisti rodyti teisingus atsakymus"
		},
		{
			"id": "SetupBeschreibung",
			"language": "LT",
			"value": "Pasirinkite, ar bus atsižvelgiama į įvesto teksto didžiąsias ir mažąsias raides. Jei taip, visas įvestas tekstas turi tiksliai atitikti numatytus atsakymus. Taip pat pasirinkite, ar užtenka, jog teisingas atsakymas būtų įvesto teksto dalyje (pvz., teisingas atsakymas yra &quot;300&quot;, o mokinys parašė &quot;300 metrų&quot;)."
		},
		{
			"id": "Case",
			"language": "LT",
			"value": "Įvestame tekste svarbios didžiosios ir mažosios raidės"
		},
		{
			"id": "RichtigeAntwort",
			"language": "LT",
			"value": "į teisingą atsakymą"
		},
		{
			"id": "Feedback",
			"language": "LT",
			"value": "Grįžtamasis ryšys"
		},
		{
			"id": "FalscheAntwort",
			"language": "LT",
			"value": "į klaidingą atsakymą"
		},
		{
			"id": "Prüfen",
			"language": "LT",
			"value": "Patikrinti sprendimą"
		},
		{
			"id": "Part",
			"language": "LT",
			"value": "Užtenka, jei įvesto teksto dalyje bus teisingas atsakymas"
		},
		{
			"id": "feedbackFalse",
			"language": "LT",
			"value": "Deja, tai klaidingas atsakymas."
		},
		{
			"id": "Setup",
			"language": "LT",
			"value": "Sąranka"
		},
		{
			"id": "Weiter",
			"language": "LT",
			"value": "Kitas klausimas"
		},
		{
			"id": "FeedbackValue",
			"language": "LT",
			"value": "Puikiai padirbėjai! Į visus klausimus atsakei teisingai."
		},
		{
			"id": "Hintergrundbild",
			"language": "LT",
			"value": "Fono vaizdas"
		},
		{
			"id": "HintergrundbildBeschreibung",
			"language": "LT",
			"value": "Jei norite, galite pasirinkti fono vaizdą šiam testui."
		},
		{
			"id": "Skip",
			"language": "LT",
			"value": "Rodyti atsakymus"
		},
		{
			"id": "feedbackTrue",
			"language": "LT",
			"value": "Puiku! Teisingai atsakei."
		},
		{
			"id": "FeedbackBeschreibung",
			"language": "LT",
			"value": "Įrašykite grįžtamojo ryšio tekstą, kai į visus klausimus atsakyta teisingai."
		},
		{
			"id": "Frage",
			"language": "GR",
			"value": "Ερώτηση"
		},
		{
			"id": "RichtigeAntwort",
			"language": "GR",
			"value": "σωστό"
		},
		{
			"id": "FalscheAntwort",
			"language": "GR",
			"value": "λάθος"
		},
		{
			"id": "Antwort",
			"language": "GR",
			"value": "Απάντηση(εις)"
		},
		{
			"id": "Fragen",
			"language": "GR",
			"value": "Ερωτήσεις"
		},
		{
			"id": "Sortieren",
			"language": "GR",
			"value": "Ταξινόμηση ερωτήσεων"
		},
		{
			"id": "Weiter",
			"language": "GR",
			"value": "επόμενη ερώτηση"
		},
		{
			"id": "feedbackTrue",
			"language": "GR",
			"value": "Τέλεια, απάντησες σωστά."
		},
		{
			"id": "Ende",
			"language": "GR",
			"value": "Τέλος κουίζ"
		},
		{
			"id": "zufällige",
			"language": "GR",
			"value": "τυχαία σειρά"
		},
		{
			"id": "FeedbackValue",
			"language": "GR",
			"value": "Καταπληκτικά, ολοκλήρωσες όλες τις ερωτήσεις"
		},
		{
			"id": "APP_DESCRIPTION",
			"language": "GR",
			"value": "Κάντε μια σειρά από ερωτήσεις που πρέπει να απαντηθούν με μια καταχώρηση κειμένου. Μπορείτε επίσης να εισαγάγετε πολλές έγκυρες καταχωρήσεις ανά ερώτηση."
		},
		{
			"id": "FragenBeschreibung",
			"language": "GR",
			"value": "Εισαγάγετε μια ερώτηση και μια σωστή απάντηση ή μια λίστα με σωστές απαντήσεις χωρισμένες με ερωτηματικό (;). Προαιρετικά μπορείτε να δώσετε και ένα βοηθητικό κείμενο σε περίπτωση σωστής / λανθασμένης απάντησης."
		},
		{
			"id": "SortierenBeschreibung",
			"language": "GR",
			"value": "Οι ερωτήσεις μπορούν να εμφανίζονται τυχαία ή με σειρά."
		},
		{
			"id": "Skip",
			"language": "GR",
			"value": "Εμφάνιση λύσης"
		},
		{
			"id": "HintergrundbildBeschreibung",
			"language": "GR",
			"value": "Προαιρετικά, επιλέξτε μια εικόνα φόντου για το κουίζ."
		},
		{
			"id": "FeedbackBeschreibung",
			"language": "GR",
			"value": "Εισαγάγετε ένα κείμενο που θα εμφανίζεται όταν όλες οι ερωτήσεις έχουν απαντηθεί σωστά."
		},
		{
			"id": "geordnet",
			"language": "GR",
			"value": "ταξινόμηση όπως φαίνεται παραπάνω"
		},
		{
			"id": "LösungshinweiseBeschreibung",
			"language": "GR",
			"value": "Μετά από μια λανθασμένη λύση, μπορεί να εμφανιστεί η σωστή εάν επιθυμείτε."
		},
		{
			"id": "Lösungshinweise",
			"language": "GR",
			"value": "Να επιτρέπεται η εμφάνιση λύσεων"
		},
		{
			"id": "SetupBeschreibung",
			"language": "GR",
			"value": "Έχετε διάκριση πεζών-κεφαλαίων; Εάν ενεργοποιηθεί, μια καταχώριση βαθμολογείται ως λανθασμένη εάν η ορθογραφία δεν ταιριάζει ακριβώς με την προδιαγραφή. Είναι αρκετό εάν η απάντηση περιέχεται στην απάντηση του χρήστη΄(π.χ. αν η σωστή απάντηση είναι 300 και ο χρήστης καταχώρησε 300 μέτρα);"
		},
		{
			"id": "Case",
			"language": "GR",
			"value": "Δώστε προσοχή στα κεφαλαία και πεζά."
		},
		{
			"id": "Part",
			"language": "GR",
			"value": "Αρκεί να περιλαμβάνεται η σωστή λέξη."
		},
		{
			"id": "Hinweis",
			"language": "GR",
			"value": "Στοιχείο βοήθειας"
		},
		{
			"id": "Eingabe",
			"language": "GR",
			"value": "Εισαγωγή"
		}
	],
	"path": "https://learningapps.org/tools/143/9/",
	"version": "9"
};