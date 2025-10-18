const quizChoice = {
  architecture: [
    {
      question: "En quelle année Blaise Pascal inventa la Pascaline?",
      answers: ["1642", "1641", "1643", "1650"],
      correct: "1642",
    },
    {
      question: "Quelle est le nom du premier personnage a inventé la machine à calculer et dans quelle année?",
      answers: ["Bill Gates en 1992", "Charles Babbage en 1814", "Wilhelm Schickard en 1623", "Leonardo da Vinci en 1500"],
      correct: "Wilhelm Schickard en 1623",
    },
    {
      question: "Quelle est le nom du fondateur de Microsoft?",
      answers: ["Bill Gates", "Elon Musk", "Satya Nadella", "Steve Jobs"],
      correct: "Bill Gates",
    },
    {
      question: "Quelle est le nom du premier ordinateur électronique programmable?",
      answers: [
        "ENIAC (Electronic Numerical Integrator And Computer)",
        "ENIAC (Electronic Numerical Integrator And Calculator)",
        "ENIAC (Electronic Numerical Interface And Calculator)",
        "UNIVAC (Universal Automatic Computer)"
      ],
      correct: "ENIAC (Electronic Numerical Integrator And Computer)",
    },
    {
      question: "Qui a créé le premier ordinateur portable et dans quelle année?",
      answers: ["Bill Gates en 1992", "Wilhelm Schickard en 1623", "Alan Turing en 1808", "Charles Babbage en 1814", "Adam Osborne en 1981"],
      correct: "Adam Osborne en 1981",
    },
    {
      question: "Quelle est l'origine du mot Informatique?",
      answers: ["Vient du mot grec", "Vient de 2 mots français 'automatique' et 'information'", "Vient de l'anglais 'computer science'", "Vient de l'allemand 'informatik'"],
      correct: "Vient de 2 mots français 'automatique' et 'information'",
    },
    {
      question: "Informatique Définition?",
      answers: ["Science des ordinateurs", "L'étude des technologies", "Science du Traitement des informations rationnel de façon automatique", "L'étude des IA"],
      correct: "Science du Traitement des informations rationnel de façon automatique",
    },
    {
      question: "Qui est le père de l'informatique?",
      answers: ["Blaise Pascal", "Philippe Dreyfus", "Charles Babbage", "Alan Turing"],
      correct: "Charles Babbage",
    },
    {
      question: "Ordinateur Définition?",
      answers: ["Un appareil électronique permettant d'écrire du texte", "Un appareil électronique programmable permettant de stocker des informations et données", "Un appareil électronique servant comme passe-temps", "Un appareil pour jouer aux jeux vidéo"],
      correct: "Un appareil électronique programmable permettant de stocker des informations et données",
    },
    {
      question: "Mémoire Définition?",
      answers: ["Un dispositif permettant de conserver et de restituer des informations quand le besoin se fait sentir", "Aucune de ces réponses", "Un écran d'ordinateur", "Un clavier"],
      correct: "Un dispositif permettant de conserver et de restituer des informations quand le besoin se fait sentir",
    },
    {
      question: "Microprocesseur définition?",
      answers: ["Unité de stockage de données", "Périphérique d'entrée", "Câble de connexion","Il est considéré comme un circuit électronique complexe qui effectue les opérations logiques, arithmétiques et de contrôle"],
      correct: "Il est considéré comme un circuit électronique complexe qui effectue les opérations logiques, arithmétiques et de contrôle",
    },
    {
      question: "Software Définition?",
      answers: ["Le software, ou logiciel, désigne l'ensemble des programmes et applications qui permettent à un ordinateur d'exécuter des tâches spécifiques.", "Les composants physiques de l'ordinateur", "Les câbles et connecteurs", "L'écran et le clavier"],
      correct: "Le software, ou logiciel, désigne l'ensemble des programmes et applications qui permettent à un ordinateur d'exécuter des tâches spécifiques.",
    },
    {
      question: "Hardware Définition?",
      answers: ["Le hardware, ou matériel informatique, désigne l'ensemble des composants physiques d'un ordinateur, tels que la carte mère, le processeur, la mémoire, etc.", "Les programmes informatiques", "Les systèmes d'exploitation", "Les applications"],
      correct: "Le hardware, ou matériel informatique, désigne l'ensemble des composants physiques d'un ordinateur, tels que la carte mère, le processeur, la mémoire, etc.",
    },
    {
      question: "Périphérique Définition?",
      answers: ["Un système d'exploitation","Un périphérique est un dispositif externe connecté à un ordinateur pour permettre l'interaction ou l'ajout de fonctions supplémentaires, comme un clavier, une souris, une imprimante, etc.", "Un programme système", "Un virus informatique"],
      correct: "Un périphérique est un dispositif externe connecté à un ordinateur pour permettre l'interaction ou l'ajout de fonctions supplémentaires, comme un clavier, une souris, une imprimante, etc.",
    },
    {
      question: "Port Définition?",
      answers: ["Un port est une interface physique ou logique sur un ordinateur qui permet de connecter des périphériques, tels que les ports USB, HDMI, ou les ports réseau.", "Un type de mémoire", "Un processeur", "Un écran tactile"],
      correct: "Un port est une interface physique ou logique sur un ordinateur qui permet de connecter des périphériques, tels que les ports USB, HDMI, ou les ports réseau.",
    },
    {
      question: "Modem Définition?",
      answers: ["Un modem est un appareil qui permet la transmission de données entre un ordinateur et un réseau (souvent Internet) en modulant et démodulant les signaux analogiques et numériques.", "Un processeur graphique", "Une carte mémoire", "Un écran LCD"],
      correct: "Un modem est un appareil qui permet la transmission de données entre un ordinateur et un réseau (souvent Internet) en modulant et démodulant les signaux analogiques et numériques.",
    },
    {
      question: "Différence entre mémoire morte et mémoire vive?",
      answers: ["Les deux sont volatiles","La mémoire morte (ROM) est une mémoire non volatile qui conserve les données même lorsque l'ordinateur est éteint. La mémoire vive (RAM) est une mémoire volatile qui perd son contenu lorsque l'ordinateur est éteint.", "Les deux sont non volatiles", "Il n'y a pas de différence"],
      correct: "La mémoire morte (ROM) est une mémoire non volatile qui conserve les données même lorsque l'ordinateur est éteint. La mémoire vive (RAM) est une mémoire volatile qui perd son contenu lorsque l'ordinateur est éteint.",
    },
    {
      question: "Quelle est le langage utilisée par l'ordinateur?",
      answers: ["Le langage binaire (composé de 0 et 1)", "Le langage Python", "Le langage Java", "Le langage C++"],
      correct: "Le langage binaire (composé de 0 et 1)",
    },
    {
      question: "Sur quel élément matériel sont regroupés les composants de l'unité centrale?",
      answers: ["Sur le disque dur", "Sur l'écran", "Sur le clavier","Les composants de l'unité centrale sont regroupés dans le boîtier de l'ordinateur, sur la carte mère."],
      correct: "Les composants de l'unité centrale sont regroupés dans le boîtier de l'ordinateur, sur la carte mère.",
    },
    {
      question: "Quelle est l'unité de mesure de la mémoire?",
      answers: ["L'octet (byte)", "Le bit", "Le GigaByte", "Le Hertz"],
      correct: "L'octet (byte)",
    },
    {
      question: "Quelle est l'unité de mesure du microprocesseur?",
      answers: ["Le byte","Le Hertz (Hz)", "Le tera", "Le mètre"],
      correct: "Le Hertz (Hz)",
    },
    {
      question: "Quelle est l'unité de mesure de la fréquence?",
      answers: ["Hertz (Hz)", "Mètre (m)", "Ohm", "Volt"],
      correct: "Hertz (Hz)",
    },
    {
      question: "Quelle est la plus petite unité de mesure en informatique?",
      answers: ["Hertz", "Ohm","Le bit","L'octet"],
      correct: "Le bit",
    },
    {
      question: "Quelle est la plus petite capacité?",
      answers: ["Un bit", "Noeud", "1 Ko", "1 Mo"],
      correct: "Un bit",
    },
    {
      question: "1 Octet = 1 byte vaut?",
      answers: ["1 Ko", "8 bits", "1024 Ko", "1024 bits"],
      correct: "8 bits",
    },
    {
      question: "Différence entre système d'exploitation et logiciel d'application?",
      answers: ["Un système d'exploitation est un logiciel qui gère les ressources matérielles de l'ordinateur (ex. Windows, macOS). Un logiciel d'application permet d'exécuter des tâches spécifiques pour l'utilisateur, comme un traitement de texte ou un navigateur.", "Aucune différence", "Le système d'exploitation est un jeu vidéo tandis qu'un logiciel d'application est un système permettant d'installer des app"],
      correct: "Un système d'exploitation est un logiciel qui gère les ressources matérielles de l'ordinateur (ex. Windows, macOS). Un logiciel d'application permet d'exécuter des tâches spécifiques pour l'utilisateur, comme un traitement de texte ou un navigateur.",
    },
    {
      question: "Qu'est-ce qu'un moteur de recherche?",
      answers: ["Un système d'exploitation","Un moteur de recherche est un programme qui permet de rechercher des informations sur Internet en indexant et en classant les pages web, comme Google ou Bing.","Un processeur", "Une carte graphique"],
      correct: "Un moteur de recherche est un programme qui permet de rechercher des informations sur Internet en indexant et en classant les pages web, comme Google ou Bing.",
    },
    {
      question: "La mémoire qui permet l'opération de lecture et d'écriture simultanées est?",
      answers: ["La mémoire DRAM (Dynamic Random Access Memory)", "La mémoire ROM", "La mémoire cache", "La mémoire morte"],
      correct: "La mémoire DRAM (Dynamic Random Access Memory)",
    },
    {
      question: "Le format …………… est généralement utilisé pour stocker des données.",
      answers: ["Texte","Binaire", "JSON", "XML"],
      correct: "Binaire",
    },
    {
      question: "Un programme source est généralement écrit en",
      answers: ["Langage de bas niveau", "Langage de haut niveau", "Langage binaire", "Langage machine"],
      correct: "Langage de haut niveau",
    },
    {
      question: "Un programme informatique qui convertit un programme en langage machine en même temps est appelé",
      answers: ["Interpréteur", "Assembleur", "Éditeur","Compilateur"],
      correct: "Compilateur",
    },
    {
      question: "Nous appelons l'unité qui décode et traduit chaque instruction et génère les signaux d'activation nécessaires pour ALU et d'autres unités",
      answers: ["Unité de commande", "Unité de contrôle", "Convertisseur", "Multiplexeur"],
      correct: "Unité de contrôle",
    },
    {
      question: "Les mémoires cache sont des mémoires tampons (buffers) à grande vitesse insérées entre les processeurs et la mémoire principale.",
      answers: ["Vrai", "Faux"],
      correct: "Vrai",
    },
    {
      question: "Le canal qui traite les demandes multiples et multiplexe les transferts de données de ces périphériques, octet par octet, est appelé",
      answers: ["Canal multiplexeur", "Canal sélecteur", "Canal du vent", "Canal parallèle"],
      correct: "Canal multiplexeur",
    },
    {
      question: "Le mappage des adresses est terminé, lorsque le programme est chargé initialement est appelé",
      answers: ["Localisation","Relocalisation statique", "Relocalisation dynamique", "Compilation"],
      correct: "Relocalisation statique",
    },
    {
      question: "Le bus PCI se règle à 33 MHz et peut transférer 32 bits de données (quatre octets) à chaque impulsion d'horloge.",
      answers: ["Vrai", "Faux"],
      correct: "Vrai",
    },
    {
      question: "Le temps qui s'écoule entre le début d'une opération et son achèvement s'appelle………………….. ",
      answers: ["Temps d'accès à la mémoire", "Temps de latence", "Temps de réponse et d'exécution", "Temps de compilation"],
      correct: "Temps de réponse et d'exécution",
    },
    {
      question: "Un microprogramme écrit sous forme de chaîne de 0 et de 1 est un ……………………………….. ",
      answers: ["Programme binaire", "Microcode", "Firmware", "Assembleur"],
      correct: "Microcode",
    },
    {
      question: "L'accès à la mémoire dans l'architecture RISC est limité aux instructions",
      answers: ["ADD et SUB","STA et LDA", "LOAD et STORE", "MUL et DIV"],
      correct: "LOAD et STORE",
    },
    {
      question: "L'unité de mémoire qui communique directement avec la CPU est appelée :……………………….",
      answers: ["Mémoire RAM", "Mémoire cache", "Les Bus", "Le disque dur"],
      correct: "Mémoire cache",
    },
    {
      question: "CISC sigle définition:",
      answers: ["Complex Instruction Step Computing", "Complex Instruction Set Computer", "Complete Instruction Set Computing", "Computer Instruction System Code"],
      correct: "Complex Instruction Set Computer",
    },
    {
      question: "SSD sigle définition:",
      answers: ["Solid State Drive", "Solid SanDisk", "Serial State Device", "System Storage Device"],
      correct: "Solid State Drive",
    },
    {
      question: "SATA sigle définition:",
      answers: ["System Advanced Technology Access","Serial Advanced Technology Attachment", "Serial Access Technology Attachment", "Standard Advanced Technology Attachment"],
      correct: "Serial Advanced Technology Attachment",
    },
    {
      question: "DRAM FPM: définition",
      answers: ["Type de mémoire vive qui permet une lecture plus rapide des données en utilisant une méthode de lecture en mode page.", "Mémoire morte", "Mémoire cache", "Mémoire virtuelle"],
      correct: "Type de mémoire vive qui permet une lecture plus rapide des données en utilisant une méthode de lecture en mode page.",
    },
    {
      question: "DRAM EDO: définition",
      answers: ["Mémoire graphique","Une version améliorée de la DRAM qui permet d'accéder à une donnée pendant qu'une autre donnée est en cours de lecture, offrant ainsi de meilleures performances.", "Mémoire morte", "Mémoire flash"],
      correct: "Une version améliorée de la DRAM qui permet d'accéder à une donnée pendant qu'une autre donnée est en cours de lecture, offrant ainsi de meilleures performances.",
    },
    {
      question: "Registre définition:",
      answers: ["Ce sont des petites unités de stockage très rapides dans le processeur utilisées pour stocker temporairement des données ou des instructions en cours d'exécution.", "Mémoire externe", "Disque dur", "Carte graphique"],
      correct: "Ce sont des petites unités de stockage très rapides dans le processeur utilisées pour stocker temporairement des données ou des instructions en cours d'exécution.",
    },
    {
      question: "Mémoire cache définition:",
      answers: ["Disque dur externe", "Carte SD","Il s'agit d'une mémoire haute vitesse utilisée pour stocker les données fréquemment demandées par le processeur, permettant un accès plus rapide que la mémoire principale (RAM).", "Mémoire de stockage permanent"],
      correct: "Il s'agit d'une mémoire haute vitesse utilisée pour stocker les données fréquemment demandées par le processeur, permettant un accès plus rapide que la mémoire principale (RAM).",
    },
    {
      question: "Qu'est ce qu'un compteur de programme",
      answers: ["C'est un registre qui garde la trace de l'adresse de la prochaine instruction à exécuter.", "Unité de calcul", "Mémoire cache", "Disque dur"],
      correct: "C'est un registre qui garde la trace de l'adresse de la prochaine instruction à exécuter.",
    },
    {
      question: "Qu'est ce qu'un Registre d'instruction",
      answers: ["Compteur de programme","C'est un registre qui contient l'instruction en cours d'exécution.", "Registre de données", "Registre d'adresse"],
      correct: "C'est un registre qui contient l'instruction en cours d'exécution.",
    },
    {
      question: "NMI définition:",
      answers: ["Non-Maskable Interrupt", "National Measurement Institute", "Nombre Minimum d'Individus", "New Memory Interface"],
      correct: "Non-Maskable Interrupt",
    },
    {
      question: "Cylindres définition:",
      answers: ["Type de mémoire", "Câble de connexion","Un cylindre est un ensemble de pistes situées à la même distance du centre du disque. Il est constitué de toutes les pistes à une même position sur chaque plateau du disque", "Partie du processeur"],
      correct: "Un cylindre est un ensemble de pistes situées à la même distance du centre du disque. Il est constitué de toutes les pistes à une même position sur chaque plateau du disque",
    },
    {
      question: "Coprocesseur définition:",
      answers: ["Processeur principal","Un coprocesseur est un processeur secondaire qui assiste le processeur principal dans l'exécution de certaines tâches spécifiques, telles que les calculs mathématiques complexes ou la gestion des graphiques.", "Mémoire cache", "Carte mère"],
      correct: "Un coprocesseur est un processeur secondaire qui assiste le processeur principal dans l'exécution de certaines tâches spécifiques, telles que les calculs mathématiques complexes ou la gestion des graphiques.",
    },
  ],  
  programmation: [
    {
      question: "Comment déclarer une variable qui ne peut pas être modifiée ?",
      answers: ["const", "let", "var"],
      correct: "const",
    },
    {
      question: "Quelle est la fonction qui permet de calculer la racine carrée d'un nombre ?",
      answers: ["pow()", "sqrt()", "abs()"],
      correct: "sqrt()",
    },
    {
      question: "Quelle est la valeur de 'null' lorsqu'elle est convertie en nombre ?",
      answers: ["0", "1", "undefined", "null"],
      correct: "0",
    },
    {
      question: "Quel est le type de données utilisé pour stocker des nombres entiers ?",
      answers: ["Integer", "Float", "String", "Boolean"],
      correct: "Integer",
    },
    {
      question: "Quel opérateur est utilisé pour effectuer une division entière ?",
      answers: ["+", "-", "*", "/"],
      correct: "/",
    },
    {
      question: "Quel est le nom donné à une zone de mémoire utilisée pour stocker des valeurs ?",
      answers: ["Variable", "Tableau", "Fonction", "Classe", "Objet"],
      correct: "Variable",
    },
    {
      question: "Quel type de données est utilisé pour stocker du texte ?",
      answers: ["Integer", "Float", "String", "Boolean"],
      correct: "String",
    },
    {
      question: "Quel opérateur est utilisé pour effectuer une addition ?",
      answers: ["+", "-", "*", "/"],
      correct: "+",
    },
    {
      question: "Quel type de données est utilisé pour stocker des valeurs booléennes ?",
      answers: ["Integer", "Float", "String", "Boolean"],
      correct: "Boolean",
    },
    {
      question: "Que fait la fonction abs() ?",
      answers: [
        "Faire le cube d'un nombre",
        "Calcul de la valeur absolue d'un nombre",
        "Arrondir un nombre",
      ],
      correct: "Calcul de la valeur absolue d'un nombre",
    },
    {
      question: "De quoi est constitué un programme informatique ?",
      answers: [
        "De codes",
        "De phrases",
        "De lignes",
        "De chiffres et de nombres",
      ],
      correct: "De codes",
    },
    {
      question: "Quelle erreur nous renvoie un code 404 ?",
      answers: [
        "Page not found",
        "Bad request",
        "Forbidden",
        "Internal server error",
        "Not allowed"
      ],
      correct: "Page not found",
    },
    {
      question: "Où est stockée une variable ?",
      answers: [
        "Dans la mémoire cache",
        "Dans le disque dur",
        "Dans la mémoire vive",
      ],
      correct: "Dans la mémoire vive",
    },
    {
      question: "Dans la boucle for(int i = 0; i < 10; i++), quelles sont les valeurs prises par i ?",
      answers: [
        "0,1,2,3,4,5",
        "0,1,2,3,4,5,6,7,8,9",
        "1,2,3,4,5,6,7,8,9",
        "9,8,7,6,5,4,3,2,1,0",
        "10",
      ],
      correct: "0,1,2,3,4,5,6,7,8,9",
    },
    {
      question: "Comment s'appelle une suite ordonnée d'opérations élémentaires qui permet de résoudre un problème identifié et d'obtenir un résultat précis ?",
      answers: [
        "Un algorithme",
        "Un cahier des charges",
        "Un programme",
        "Une suite informatique",
      ],
      correct: "Un algorithme",
    },
    {
      question: "Le résultat de cette fonction floor(5.95) est :",
      answers: ["5", "6", "5.9", "6.9"],
      correct: "5",
    },
    {
      question: "Le résultat de str1 + ' ' + str2 où str1 = 'Hello' et str2 = 'World' est :",
      answers: ["HelloWorld", "Hello World", "hello world", "WorldHello"],
      correct: "Hello World",
    },
    {
      question: "Un algorithme s'écrit uniquement avec un logiciel dans un langage précis",
      answers: ["Faux", "Vrai"],
      correct: "Faux",
    },
    {
      question: "Avec un tableau d'éléments [0,6,9,3], quelle est la fonction permettant de trouver la plus grande valeur ?",
      answers: ["Min()", "Maximu()", "Max()", "Max"],
      correct: "Max()",
    },
    {
      question: "La solution du problème doit être la première étape de l'écriture d'un programme",
      answers: ["Faux", "Vrai"],
      correct: "Faux",
    },
    {
      question: "Quelle est la syntaxe correcte pour afficher « Hello World » en C ?",
      answers: ["printf(\"Hello World\");", "sortie << \"Hello World\" ;", "Console.WriteLine(\"Hello World\") ;", "System.out.printline(\"Hello World\") ;"],
      correct: "printf(\"Hello World\");",
    },
    {
      question: "Lorsqu'une variable est créée en C, une adresse mémoire est affectée à la variable.",
      answers: ["Faux", "Vrai"],
      correct: "Vrai",
    },
    {
      question: "Comment créer une variable en C avec la valeur numérique 5 ?",
      answers: ["num = 5 ;", "val num = 5 ;", "var num = 5 ;", "int num = 5 ;"],
      correct: "int num = 5 ;",
    },
    {
      question: "En C, les instructions de code doivent se terminer par un point-virgule (😉",
      answers: ["Vrai", "Faux"],
      correct: "Vrai",
    },
    {
      question: "Quelle fonction est souvent utilisée pour générer des valeurs et imprimer du texte en C ?",
      answers: ["sortie()", "écrire()", "printf()", "printword()"],
      correct: "printf()",
    },
    {
      question: "Quel spécificateur de format est souvent utilisé pour imprimer des entiers en C ?",
      answers: ["%c", "%d", "%n", "%int"],
      correct: "%d",
    },
    {
      question: "Quel mot-clé est utilisé pour créer une structure en C ?",
      answers: ["Struct", "structure", "structures", "Str"],
      correct: "Struct",
    },
    {
      question: "En C, il est possible d'hériter des propriétés et des fonctions de classe d'une classe à une autre.",
      answers: ["Vrai", "Faux"],
      correct: "Faux",
    },
    {
      question: "Qu'est-ce que ptr dans le code suivant ?\nint* ptr = &monAge;",
      answers: ["Une classe", "Un tableau", "Un paramètre", "Un pointeur"],
      correct: "Un pointeur",
    },
    {
      question: "Quel mot-clé est utilisé pour créer une classe en C ?",
      answers: ["classe {}", "Aucune de ces réponses", "class = maClasse", "classe()"],
      correct: "Aucune de ces réponses",
    },
    {
      question: "Quelle instruction est utilisée pour arrêter une boucle ?",
      answers: ["exit", "stop", "break", "void"],
      correct: "break",
    },
    {
      question: "Quelle instruction peut être utilisée pour sélectionner l'un des nombreux blocs de code à exécuter ?",
      answers: ["break", "default", "switch", "case when"],
      correct: "switch",
    },
    {
      question: "Quel mot-clé est utilisé pour renvoyer une valeur à l'intérieur d'une fonction ?",
      answers: ["return", "break", "get"],
      correct: "return",
    },
    {
      question: "Quel opérateur peut être utilisé pour trouver la taille de la mémoire (en octets) d'un type de données ou d'une variable en C ?",
      answers: ["La propriété len", "L'opérateur sizeof", "La propriété length"],
      correct: "L'opérateur sizeof",
    },
    {
      question: "Quel mot-clé est utilisé pour créer une classe en C++ ?",
      answers: ["class()", "class", "className", "MyClass"],
      correct: "class",
    },
    {
      question: "Quelle méthode peut-on utiliser pour trouver la longueur d'une chaîne en C++ ?",
      answers: ["length()", "getSize()", "sizeof()", "len()"],
      correct: "length()",
    },
    {
      question: "En Python, pourquoi cette boucle est-elle problématique ?\ni = 0\nwhile i < 5:\n    print(i)",
      answers: ["Condition toujours fausse", "Boucle infinie", "Mauvaise indentation", "Variable mal nommée"],
      correct: "Boucle infinie",
    },
    {
      question: "Quelle est la bonne façon de créer un objet appelé myObj de MyClass en C++ ?",
      answers: ["new myObj = MyClass() ;", "class MyClass = new myObj() ;", "MyClass myObj ;", "class myObj = new MyClass() ;"],
      correct: "MyClass myObj ;",
    },
    {
      question: "Quelle est la différence entre new et malloc en C++ ?\nint* arr1 = (int*)malloc(10* sizeof(int))\nint* arr2 = new int[10]",
      answers: ["new appelle le constructeur, malloc non", "malloc est plus rapide", "new ne peut pas être utilisé avec des tableaux", "Aucune différence"],
      correct: "new appelle le constructeur, malloc non",
    },
    {
      question: "Quel JOIN retourne tous les enregistrements de la table gauche ?\nSELECT *\nFROM clients c\n... commandes cmd ON c.id = cmd.client_id;",
      answers: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"],
      correct: "LEFT JOIN",
    },
  ],
  geometrie: [
   {
      question: "Dans un repère orthonormé, comment appelle-t-on l'axe horizontal et l'axe vertical ?",
      answers: ["Ordinaire et extraordinaire", "Abscisse et ordonnée", "Horizontal et vertical","X et Y"],
      correct: "Abscisse et ordonnée",
    },
	{
      question: "Quelle est la formule correcte pour calculer les coordonnées du milieu I du segment [AB], avec A(xₐ, yₐ) et B(x₆, y₆) ?",
      answers: ["I((Xa + Ya)/2,(Xb + Yb)/2)", "I((Xa + Xb)/2,(Ya + Yb)/2)", "I((Xa - Xb)/2,(Ya - Yb)/2)","I(Xa * Xb,Ya * Yb)"],
      correct: "I((Xa + Xb)/2,(Ya + Yb)/2)",
    },
    {
      question: "Parmi ces équations ou est l'équation cartésienne:",
      answers: ["ax²+by+c = 0","ax²+bx = 0" ,"ax+by+c = 0", "x+1/2=t y-8/6 =t"],
      correct: "ax+by+c = 0",
    },
    {
      question: "À quelle condition deux droites sont-elles parallèles ?",
      answers: ["Le produit de leurs pentes vaut -1.","Leurs pentes sont égales.","Leurs ordonnées à l'origine sont égales.","Leur point d'intersection est (0,0)."],
      correct: "Leurs pentes sont égales.",
    },
    {
      question: "Le vecteur normal n du plan (P) d'équation: 3x + 5y - 4z - 6 = 0 est:",
      answers: ["n(-4;5;3)", "n(5;3;4)", "n(3;5;-4)","n(-5;3;-4)"],
      correct: "n(3;5;-4)",
    },
    {
      question: "L'équation cartésienne du plan (Q) contenant la droite:(D):x = -3;y = 1 + t; z = 2t t E R et perpendiculaire au plan:(Pi):x-y+z = 0",
      answers: ["-3x-2y+z+7 = 0", "3x+2y+z-7 = 0", "x-y+z+7 = 0","3x+2y-z+7 = 0","Aucune réponse",],
      correct: "3x+2y-z+7 = 0",
    },
    {
      question: "Dans l'espace affine muni d'un répere orthonome (o,i,j,k),on considere la droite D(A,u) A(-1;2;3) u(-3;4;-2) et un point B(3;4;-5).L'équation du plan (P) passant par B et perpendiculaire a (D)",
      answers: ["-3x+4y+2z+17 = 0", "3x-4y+2z+17 = 0", "11x-y+6z+41 = 0","-3x-4y-2z-17 = 0"],
      correct: "3x-4y+2z+17 = 0",
    },
    {
      question: "La distance du point A(-1;1) a la droite (D) d'équation: 2x+3y+5 = 0 est:",
      answers: ["8√13/13", "7√13/3", "6√13/13","Aucune réponse"],
      correct: "6√13/13",
    },
    {
      question: "Dans le plan muni d'une base orthonormée,si u(-2,3) est un vécteur normal de (D) et que A(1,1) est sur (D) alors une équation cartésienne de (D) est:",
      answers: ["-2x+3y = 0", "3x+2y+1 = 0", "-2x+3y-1 = 0","-2x+3y+1 = 0","3x-2y+1 = 0"],
      correct: "-2x+3y-1 = 0",
    },
    {
      question: "Le centre I et le rayon R du cercle(C) d'équation :x²+y²-6x-5y+9 =0 sont",
      answers: ["I(3;5/2) et R = 5/2", "I(5/2;3) et R = 5/2", "I(-3;5/2) et R = 5/2"],
      correct: "I(3;5/2) et R = 5/2",
    },
    {
      question: "Dans le plan affine euclidien,le cercle d'équation:(x-1)²+(y+2)²=25 a son centre A et son rayon R:",
      answers: ["A(1;2) et R = 25", "A(1;-2) et R = 5", "A(2;1) et R = 5","A(1;-2) et R = 25"],
      correct: "A(1;-2) et R = 5",
    },
    {
      question: "Dans un plan  affine euclidien ,le centre A et le rayon R du cercle (C) d'équation x²+y²-6x-4y-3 = 0 est",
      answers: ["A(-6;4) et R = 3", "A(3;2) et R = 6", "A(3;-2) et R = 4","A(3;2) et R = 4"],
      correct: "A(3;2) et R = 4",
    },
    {
      question: "Ou est l'équation du cercle sous forme dévélopper",
      answers: ["x²+y²-2ax-2by+c = 0", "(x-a)²+(y-b)² = r²", "x²+y²-ax-by+c = r²","x²+y²-2a-2b+c = 0"],
      correct: "x²+y²-2ax-2by+c = 0",
    },
    {
      question: "A(1;-2) et B(-3;1) sont deux points d'un plan affine euclidien muni d'un répere orthonormé.L'équation de la médiatrice du ségement [AB] passamt par le point  I est:",
      answers: ["-8x+6y+5 = 0", "x-2y-5 = 0", "x+2y-5 = 0","8x-6y+5 = 0"],
      correct: "8x-6y+5 = 0",
    },
    {
      question: "Quelle est la relation pour une équation cartésienne? ",
      answers: ["ssi det(vect AB,vect u,vect v) = 0", "M(x,y) e D(A,vect u) <=> det(AM,vect u) = 0", "M(x,y) e D(A,vect n) <=> det(AM,vect n.u) = 0"],
      correct: "M(x,y) e D(A,vect u) <=> det(AM,vect u) = 0",
    },
     {
      question: "Quelle est est l'intersection de cette droite (C): x²+y²-2x-4y+3 = 0; (D)x=1+t y =1-2t",
      answers: ["C∩D ={M1(0,-3) et M2(6/5,3/5)}", "C∩D ={(0,3)}", "C∩D ={(6/5,3/5)}","C∩D ={M1(0,3) et M2(6/5,3/5)}"],
      correct: "C∩D ={M1(0,3) et M2(6/5,3/5)}",
    },
    {
      question: "Q'arrive t-il si une droite est tangente a un cercle",
      answers: ["Il y a 2 points d'intersection", "Il y a une seul point d'intersection", "Pas de point d'intersection"],
      correct: "Il y a une seul point d'intersection",
    },
    {
      question: "A quoi est égale le rayon du cercle?",
      answers: ["√a²+b²-c", "√a²+b²+c", "√a²+b²-c²"],
      correct: "√a²+b²-c",
    },
     {
      question: "Dans l'espace affine euclidien muni du répere orthonormé(o,i,j,k),l'équation cartésienne du plan (P) défini par le point A(3,-1,2) et de vecteur normal n(1;-3;5) est",
      answers: ["(P):x-3y+5z-10 = 0", "(P):x-3y+5z+16 = 0", "(P):x-3y+5z-16 = 0","(P):x-3y+5z-13 = 0"],
      correct: "(P):x-3y+5z-13 = 0",
    },
    {
      question: "Dans l'espace muni d'une base orthonormee si u(2,-3,4) est un vecteur normal du plan (P) et que le point A(1;-1;-1) est dans le plan (P),alors une equation cartesienne de (P) est:",
      answers: ["2x-3y+4z-1 = 0", "2x-3y+4z+1 = 0", "2x-3y+4z-2 = 0"],
      correct: "2x-3y+4z-1 = 0",
    },
    {
      question: "La distance du point A(1;0;-2) au plan (P) d'equation 3x + 2y + 4z - 1 = 0 est:",
      answers: ["-9√29/29", "9√29/29", "6√29/29"],
      correct: "6√29/29",
    },
     {
      question: "Donnez l'intersection de cette droite:(D) x-3/2 = y+1/1 = z-2/-2; (P):x+3y+3z-7 =0",
      answers: ["D∩P ={(-1,-2,4)}", "D∩P ={(1,-2,4)}", "D∩P ={(1,-2,-4)}"],
      correct: "D∩P ={(1,-2,4)}",
    },
	{
      question: "Dans l'équation réduite y = mx + p, que représente 'm' et 'p' ?",
      answers: ["m est l'ordonnée à l'origine, p est la pente.", "m est la pente, p est l'ordonnée à l'origine.", " m est la pente, p est l'abscisse à l'origine.","m et p sont deux points de la droite."],
      correct: "m est la pente, p est l'ordonnée à l'origine.",
    },
	{
      question: "Quelle est l'équation réduite d'une droite horizontale ?",
      answers: ["x = c", "y = c", "y = 0","x = y"],
      correct: "y = c",
    },
	{
      question: "Quelle est l'équation de la droite passant par l'origine O(0,0) et de pente 3 ?",
      answers: ["y = 3x", " y = 3x + 3", "y = 3","x = 3y"],
      correct: "y = 3x",
    },
	{
      question: "La droite (d) passe par A(1, 3) et B(2, 5). Quel est son coefficient directeur ?",
      answers: ["1/2", "2", "-2","8"],
      correct: "2",
    },
	{
      question: "Les droites (d1): y = 4x - 1 et (d2): y = 4x + 3 sont :",
      answers: ["Sécantes", "Perpendiculaires", "Confondues","Parallèles"],
      correct: "Parallèles",
    },
	{
      question: "Comment trouve-t-on le point d'intersection de deux droites sécantes ?",
      answers: ["En calculant la distance entre elles.", "En résolvant le système formé par leurs équations.", "En traçant leur médiatrice.","En calculant la moyenne de leurs coefficients."],
      correct: "En résolvant le système formé par leurs équations.",
    },
	{
      question: "Les droites d'équations 2x + 3y - 5 = 0 et 4x + 6y + 7 = 0 sont :",
      answers: [" Perpendiculaires", "Confondues", "Parallèles strictes","Sécantes"],
      correct: "Parallèles strictes",
    },
	{
      question: "Soit un triangle ABC avec A(0,0), B(4,0) et C(0,3). Quelle est la longueur de la médiane issue de A ?",
      answers: ["3", "2.5", "4","5"],
      correct: "2.5",
    },
  ],
  algebre_de_bool: [
    {
      question: "La simplification de AB + A'C + BC donne :",
      answers: ["AB + BC","AB + A'C", "A'C + BC", "A + B + C"],
      correct: "AB + A'C",
    },
	{
      question: "L'expression (A + B)(A + C) se simplifie en :",
      answers: ["A + BC","AB + AC","A + B + C","ABC"],
      correct: "A + BC",
    },
    {
      question: "L'identité A + A'B = A + B est un exemple de :",
      answers: ["Absorption", "Élimination", "Consensus","Idempotence"],
      correct: "Élimination",
    },
	{
      question: "La forme simplifiée de l'expression A + A'B est :",
      answers: ["A + B","AB","A'","B"],
      correct: "A + B",
    },
    {
      question: "Quelle est la table de vérité d'une porte NOR à 2 entrées ?",
      answers: ["00→1, 01→0, 10→0, 11→0", "00→0, 01→1, 10→1, 11→1", "00→1, 01→1, 10→1, 11→0"],
      correct: "00→1, 01→0, 10→0, 11→0",
    },
    {
      question: "Le théorème d'absorption stipule que :",
      answers: ["AB + A'C + BC = AB + A'C","A + AB = A", "A + A'B = A + B"],
      correct: "A + AB = A",
    },
    {
      question: " L'expression duale de A(B + C) est :",
      answers: ["AB + C","AB + AC","A + BC","A + B + C"],
      correct: "A + BC",
    },
    {
      question: "La porte XNOR donne 1 lorsque :",
      answers: ["Les deux entrées sont différentes", "Une seule entrée est à 1","Les deux entrées sont à 0", "Les deux entrées sont identiques"],
      correct: "Les deux entrées sont identiques",
    },
    {
      question: "La loi de De Morgan pour (AB)' est :",
      answers: ["A'B'","A' + B'","A + B","AB"],
      correct: "A' + B'",
    },
    {
      question: "Le code Gray est caractérisé par :",
      answers: ["Tous les bits changent entre nombres successifs","C'est un code pondéré","Il utilise le complément à 2","Un seul bit change entre nombres successifs"],
      correct: "Un seul bit change entre nombres successifs",
    },
	{
      question: "Le théorème d'idempotence dit que :",
      answers: ["A + A' = 1","A + 0 = A","A + A = A","A + 1 = 1"],
      correct: "A + A = A",
    },
	{
      question: "L'expression duale de A + 1 est :",
      answers: ["A · 0","A · 1","A + 0","A' · 1"],
      correct: "A · 0",
    },
	{
      question: " La porte NAND est un groupe fonctionnel complet car :",
      answers: ["Elle est plus rapide que les autres portes","On peut implémenter toutes les fonctions avec uniquement des NAND","Elle a moins de transistors","Elle consomme moins d'énergie"],
      correct: "On peut implémenter toutes les fonctions avec uniquement des NAND",
    },
	{
      question: "La table de vérité d'une fonction à 4 variables a combien de lignes ?",
      answers: ["4","8","16","32"],
      correct: "16",
    },
	{
      question: "L'expression A ⊕ A vaut :",
      answers: ["0","1","A","A'"],
      correct: "0",
    },
	{
      question: " La méthode de Karnaugh est utilisée pour :",
      answers: ["Analyser les séquences temporelles","Calculer les temps de propagation","Simplifier les fonctions logiques","Déterminer la fréquence maximale"],
      correct: "Simplifier les fonctions logiques",
    },
	{
      question: "Un circuit combinatoire se caractérise par :",
      answers: ["Des sorties qui dépendent des entrées passées","La présence d'éléments de mémoire","Des sorties qui ne dépendent que des entrées actuelles","Une horloge de synchronisation"],
      correct: "Des sorties qui ne dépendent que des entrées actuelles",
    },
	{
      question: "Combien de portes logiques fondamentales existe-t-il?",
      answers: ["4","5","6","7"],
      correct: "7",
    },
	{
      question: "Quelle porte logique donne la sortie 1 seulement si toutes ses entrées sont 1?",
      answers: ["ET","OU","NON","NAND"],
      correct: "ET",
    },
	{
      question: "La porte OU donne 1 quand:",
      answers: ["Toutes les entrées sont 0","Une seule entrée est 1","Au moins une entrée est 1","Toutes les entrées sont 1"],
      correct: "Au moins une entrée est 1",
    },
	{
      question: "La porte NON est aussi appelée:",
      answers: ["Conjonction","Inverseur","Disjonction","Buffer"],
      correct: "Inverseur",
    },
	{
      question: "La table de vérité d'une porte ET à 2 entrées contient combien de 1 dans la colonne sortie?",
      answers: ["2","3","4","1"],
      correct: "1",
    },
	{
      question: "Quelle porte implémente la fonction complément de ET?",
      answers: ["NOR","XOR","NAND","XNOR"],
      correct: "NAND",
    },
	{
      question: "Pour une porte OU à 3 entrées, la sortie est 0 seulement quand:",
      answers: ["Toutes les entrées sont 0","Une entrée est 0","Deux entrées sont 0","Toutes les entrées sont 1"],
      correct: "Toutes les entrées sont 0",
    },
	{
      question: "La porte XOR à 2 entrées donne 1 quand:",
      answers: ["A et B sont identiques","A=1 et B=1","A=0 et B=0","A et B sont différents"],
      correct: "A et B sont différents",
    },
	{
      question: "Combien de combinaisons possibles pour une porte à 3 entrées?",
      answers: ["4","6","8","16"],
      correct: "8",
    },
	{
      question: "La porte XNOR est l'équivalent de:",
      answers: ["NON suivie de XOR","XOR suivie de NON","OU suivie de ET","ET suivie de OU"],
      correct: "XOR suivie de NON",
    },
	{
      question: "Le cercle dans les symboles logiques représente:",
      answers: ["L'inversion","La convergence","La divergence","L'amplification"],
      correct: "L'inversion",
    },
	{
      question: "Quelle porte a le même symbole que OU mais avec des cercles aux entrées?",
      answers: ["NOR","OR","NAND","AND"],
      correct: "NAND",
    },
	{
      question: "Pourquoi la porte NAND est-elle universelle?",
      answers: ["Elle a le moins de transistors","On peut créer toutes les autres portes avec elle","Elle consomme le moins","Elle est la plus rapide"],
      correct: "On peut créer toutes les autres portes avec elle",
    },
	{
      question: "Comment créer une porte NON avec une NAND?",
      answers: ["Mettre une entrée à 1","Mettre une entrée à 0","Utiliser deux NAND","Relier les deux entrées ensemble"],
      correct: "Relier les deux entrées ensemble",
    },
	{
      question: "La porte NOR est aussi universelle:",
      answers: ["Vrai","Seulement pour certaines fonctions","Faux","Seulement en CMOS"],
      correct: "Vrai",
    },
	{
      question: "Combien de portes NAND pour faire un OU?",
      answers: ["1","2","3","4"],
      correct: "3",
    },
	{
      question: "Quel est la limitation des mémoires de 32 bits?",
      answers: ["4Mo","4To","4Go","2Ko"],
      correct: "4Go",
    },
	{
      question: "Le circuit équivalent à A ⊕ B utilise:",
      answers: ["2 ET, 1 OU, 2 NON","1 ET, 1 OU, 1 NON","4 NAND","2 NOR"],
      correct: "4 NAND",
    },
	{
      question: "Quelle porte a généralement le temps de propagation le plus court?",
      answers: ["ET","OU","XOR","NON"],
      correct: "NON",
    },
	{
      question: "La famille CMOS est connue pour:",
      answers: ["Son faible coût","Sa forte immunité au bruit","Sa faible consommation","Sa haute vitesse"],
      correct: "Sa faible consommation",
    },
	{
      question: " Pour tester une porte, on utilise:",
      answers: ["Un générateur de motifs et un analyseur","Un voltmètre seulement","Un oscilloscope seulement","Un ampèremètre"],
      correct: "Un générateur de motifs et un analyseur",
    },
	{
      question: "Comment sont répartis les bits dans une mémoire d'ordinateur saturées à 64 bits ?",
      answers: ["1 bit signe 8 bits exposants 23 bits mantisse","1 bit signe 4 bits exposants 16 bits mantisse","2 bit signes 11 bits exposant 52 bits mantisse","1 bit signe 11 bits exposant 52 bits mantisse"],
      correct: "1 bit signe 11 bits exposant 52 bits mantisse",
    },
	{
      question: "Si une porte ET donne toujours 0, le défaut peut être:",
      answers: ["L'alimentation coupée","Une entrée court-circuitée à 0","Une entrée court-circuitée à 1","La sortie court-circuitée à 1"],
      correct: "Une entrée court-circuitée à 0",
    },
  ],
  goat_level: [
    {
      question: "Que signifie le sigle API en informatique ?",
      answers: ["Application Programming Interface", "Advanced Program Instruction", "Automated Processing Integration", "Applied Programm Interaction"],
      correct: "Application Programming Interface",
    },
    {
      question: "Que représente une classe en programmation orientée objet ?",
      answers: ["Un modèle pour créer des objets", "Une fonction temporaire", "Un type de boucle", "Une base de données"],
      correct: "Un modèle pour créer des objets",
    },
    {
      question: "Quel est le rôle du noyau (Kernel) d'un système d'exploitation ?",
      answers: ["Gérer la communication entre le matériel et les logiciels", "Supprimer les fichiers inutiles", "Sauvegarder les mots de passe", "Optimiser la vitesse d'internet"],
      correct: "Gérer la communication entre le matériel et les logiciels",
    },
    {
      question: "Dans une base de données relationnelle, que signifie SQL ?",
      answers: ["Simple Question Language", "Server Query List", "Structured Query Language", "Système Quick Load"],
      correct: "Structured Query Language",
    },
    {
      question: "En réseau, que désigne l'adresse IP 127.0.0.1 ?",
      answers: ["Adresse d'un serveur DNS", "Adresse publique", "Adresse locale (localhost)", "Adresse d'un routeur"],
      correct: "Adresse locale (localhost)",
    },
    {
      question: "Quelle méthode de chiffrement est considérée comme la plus sécurisée actuellement ?",
      answers: ["AES-256", "DES", "MD5", "SHA-1"],
      correct: "AES-256",
    },
    {
      question: "Qu'est-ce qu'une attaque par phishing ?",
      answers: ["Une tentative de voler des informations personnelles via de faux emails", "Un virus qui infecte les ordinateurs", "Une attaque par déni de service", "Un logiciel espion"],
      correct: "Une tentative de voler des informations personnelles via de faux emails",
    },
    {
      question: "Quel port est généralement utilisé par HTTPS ?",
      answers: ["80", "443", "21", "25"],
      correct: "443",
    },
    {
      question: "Qu'est-ce qu'une attaque zero-day ?",
      answers: ["Une attaque exploitant une vulnérabilité inconnue", "Une attaque durant exactement 24 heures", "Une attaque qui efface toutes les données", "Une attaque préventive"],
      correct: "Une attaque exploitant une vulnérabilité inconnue",
    },
    {
      question: "Quel est le principe de l'authentification à deux facteurs (2FA) ?",
      answers: ["Utiliser deux mots de passe différents", "Se connecter depuis deux appareils différents", "Changer son mot de passe deux fois", "Combiner quelque chose que vous savez et quelque chose que vous avez"],
      correct: "Combiner quelque chose que vous savez et quelque chose que vous avez",
    },
    {
      question: "Que signifie l'acronyme CI/CD ?",
      answers: ["Continuous Integration/Continuous Deployment", "Code Integration/Code Deployment", "Central Integration/Central Deployment", "Container Integration/Container Deployment"],
      correct: "Continuous Integration/Continuous Deployment",
    },
    {
      question: "Quel est l'avantage principal des conteneurs Docker ?",
      answers: ["Ils sont plus rapides que les machines virtuelles", "Ils garantissent la portabilité et l'isolation des applications", "Ils consomment moins de mémoire", "Ils sont plus sécurisés"],
      correct: "Ils garantissent la portabilité et l'isolation des applications",
    },
    {
      question: "Qu'est-ce que Kubernetes ?",
      answers: ["Un langage de programmation", "Un système d'orchestration de conteneurs", "Une base de données", "Un serveur web"],
      correct: "Un système d'orchestration de conteneurs",
    },
    {
      question: "Quel langage de programmation est le plus utilisé pour le développement web côté client ?",
      answers: ["Python", "JavaScript", "Java", "PHP"],
      correct: "JavaScript",
    },
    {
      question: "Que signifie l'abréviation IP dans une adresse IP ?",
      answers: ["Internet Protocol", "Internet Program", "Integrated Process"],
      correct: "Internet Protocol",
    },
    {
      question: "Quel système de gestion de versions est le plus utilisé par les développeurs ?",
      answers: ["Mercurial", "Git", "Subversion (SVN)", "CVS"],
      correct: "Git",
    },
    {
      question: "Que signifie HTML dans le développement web ?",
      answers: ["HyperText Markup Language", "High Tech Modern Layout", "Hyper Tool Machine Learning", "Home Tool Markup Link"],
      correct: "HyperText Markup Language",
    },
    {
      question: "Quel langage est utilisé pour le machine learning ?",
      answers: ["PHP", "Ruby", "Python", "C++"],
      correct: "Python",
    },
    {
      question: "Que fait la commande ping dans un terminal ?",
      answers: ["Teste la connexion avec une adresse réseau", "Effacer le cache DNS", "Ouvre un port TCP", "Ferme toutes les connexions"],
      correct: "Teste la connexion avec une adresse réseau",
    },
    {
      question: "Laquelle de ces entreprises n'a pas été créée par Elon Musk ?",
      answers: ["PayPal", "OpenAI", "SpaceX", "Apple"],
      correct: "Apple",
    },
    {
      question: "Quel est le format des images compressées le plus courant ?",
      answers: ["JPEG", "PDF", "MP3", "HTML"],
      correct: "JPEG",
    },
    {
      question: "Que signifie l'abréviation USB ?",
      answers: ["Universal Serial Bus", "Unique Signal Board", "Ultra System Base", "User Storage Backup"],
      correct: "Universal Serial Bus",
    },
    {
      question: "Quel type d'attaque consiste à saturer un serveur pour le rendre indisponible ?",
      answers: ["Phishing", "Man-in-the-middle", "DDoS", "Brute force"],
      correct: "DDoS",
    },
    {
      question: "Que signifie l'acronyme VPN ?",
      answers: ["Virtual Private Network", "Verified Protocol Node", "Virtual Public Network", "Variable Protection Network"],
      correct: "Virtual Private Network",
    },
    {
      question: "Quel protocole est principalement utilisé pour sécuriser les communications Web ?",
      answers: ["HTTP", "SMTP", "HTTPS", "FTP"],
      correct: "HTTPS",
    },
    {
      question: "Quelle technique consiste à tester les mots de passe en essayant toutes les combinaisons possibles ?",
      answers: ["Brute force", "Phishing", "SQL injection", "Social Engineering"],
      correct: "Brute force",
    },
    {
      question: "Que fait un logiciel de détection IDS (Intrusion Detection System) ?",
      answers: ["Il corrige automatiquement les vulnérabilités", "Il détecte des comportements suspects sur le réseau", "Il bloque tous les ports réseau", "Il chiffre les bases de données"],
      correct: "Il détecte des comportements suspects sur le réseau",
    },
    {
      question: "Docker est principalement utilisé pour :",
      answers: ["Créer des machines virtuelles", "Gérer des conteneurs", "Héberger des sites web", "Écrire des scripts de test"],
      correct: "Gérer des conteneurs",
    },
    {
      question: "Kubernetes est principalement utilisé pour :",
      answers: ["Orchestrer des conteneurs", "Surveiller les performances réseau", "Analyser le code source", "Compiler des programmes"],
      correct: "Orchestrer des conteneurs",
    },
    {
      question: "Terraform est un outil qui sert à :",
      answers: ["Gérer l'infrastructure comme du code", "Créer des conteneurs Docker", "Tester des API", "Monitorer des serveurs"],
      correct: "Gérer l'infrastructure comme du code",
    },
    {
      question: "Prometheus est principalement utilisé pour :",
      answers: ["Le monitoring et la collecte de métriques", "La gestion des versions de code", "Le déploiement automatique", "La création de scripts Bash"],
      correct: "Le monitoring et la collecte de métriques",
    },
    {
      question: "Quel système de gestion de versions est le plus utilisé en DevOps ?",
      answers: ["Git", "SVN", "Mercurial", "CVS"],
      correct: "Git",
    },
    {
      question: "Quel framework est le plus utilisé pour construire des interfaces front-end modernes ?",
      answers: ["Django", "Laravel", "React", "Flask", "Vue"],
      correct: "React",
    },
    {
      question: "Quel langage s'exécute côté client dans le navigateur ?",
      answers: ["JavaScript", "Python", "Java", "PHP"],
      correct: "JavaScript",
    },
    {
      question: "Quel protocole est principalement utilisé pour les requêtes web ?",
      answers: ["HTTP", "HTTPS", "FTP", "SSH", "SMTP"],
      correct: "HTTP",
    },
    {
      question: "Quel framework back-end est basé sur le langage Python ?",
      answers: ["Django", "Laravel", "Spring", "Rails", "Express"],
      correct: "Django",
    },
    {
      question: "Quel est le rôle principal de SQL ?",
      answers: ["Gérer des bases de données", "Programmer des jeux vidéo", "Compiler du code", "Créer des sites web statiques"],
      correct: "Gérer des bases de données",
    },
    {
      question: "Qu'est-ce qu'un réseau de neurones artificiels ?",
      answers: ["Un type de processeur", "Un modèle inspiré du cerveau humain", "Un langage de programmation", "Une base de données"],
      correct: "Un modèle inspiré du cerveau humain",
    },
    {
      question: "Comment sont répartis les bits dans une mémoire d'ordinateur saturées à 32 bits ?",
      answers: ["1 bit signe 8 bits exposants 20 bits mantisse", "1 bit signe 8 bits exposants 23 bits mantisse", "1 bit signe 6 bits exposants 23 bits mantisse", "1 bit signe 11 bits exposants 52 bits mantisse"],
      correct: "1 bit signe 8 bits exposants 23 bits mantisse",
    },
    {
      question: "Dans le contexte de l'IA, qu'est-ce qu'un dataset ?",
      answers: ["Un type de logiciel", "Une collection de données", "Un algorithme de recherche", "Un type de matériel"],
      correct: "Une collection de données",
    },
    {
      question: "Quel processus gère la mémoire ?",
      answers: ["Gestionnaire de fichiers", "Interpréteur de commandes", "Planificateur de tâches", "Gestionnaire de mémoire"],
      correct: "Gestionnaire de mémoire",
    },
    {
      question: "Qu'est-ce qu'un thread ?",
      answers: ["Un programme complet", "Une partie d'un processus", "Un fichier système", "Un périphérique"],
      correct: "Une partie d'un processus",
    },
    {
      question: "À quoi sert le swap ?",
      answers: ["Sauvegarder les données", "Accélérer le processeur", "Gérer la mémoire virtuelle", "Contrôler les périphériques"],
      correct: "Gérer la mémoire virtuelle",
    },
    {
      question: "Quelle technique d'attaque exploite une vulnérabilité dans un logiciel pour exécuter du code malveillant ?",
      answers: ["Usurpation d'identité", "Déni de service", "Injection de code", "Ingénierie sociale"],
      correct: "Injection de code",
    },
    {
      question: "Quel protocole assure la confidentialité et l'intégrité des données lors d'une communication réseau ?",
      answers: ["HTTP", "FTP", "DNS", "TLS/SSL"],
      correct: "TLS/SSL",
    },
    {
      question: "Qu'est-ce qu'un honeypot en cybersécurité ?",
      answers: ["Un logiciel antivirus performant", "Un système de détection d'intrusion", "Un leurre numérique pour attirer les attaquants", "Une technique de cryptage avancée"],
      correct: "Un leurre numérique pour attirer les attaquants",
    },
    {
      question: "Quel type de malware se réplique et se propage automatiquement sans intervention humaine ?",
      answers: ["Cheval de Troie", "Spyware", "Ransomware", "Ver informatique"],
      correct: "Ver informatique",
    },
    {
      question: "Quel type d'attaque consiste à saturer un serveur avec trop de requêtes ?",
      answers: ["DoS/DDoS", "Phishing", "MITM", "Ransomware"],
      correct: "DoS/DDoS",
    },
    {
      question: "En SQL, quelle commande permet de supprimer une table ?",
      answers: ["REMOVE TABLE", "DELETE TABLE", "DROP TABLE", "TRUNCATE TABLE"],
      correct: "DROP TABLE",
    },
    {
      question: "Quel outil est utilisé pour orchestrer des conteneurs à grande échelle ?",
      answers: ["Kubernetes", "Docker Compose", "Terraform", "Ansible"],
      correct: "Kubernetes",
    },
    {
      question: "Quel algorithme est utilisé pour l'échange sécurisé de clés en cryptographie asymétrique ?",
      answers: ["RSA", "SHA-256", "AES", "MD5"],
      correct: "RSA",
    },
    {
      question: "Quelle commande Linux permet de lister les processus actifs ?",
      answers: ["ls", "ps", "top", "cd"],
      correct: "ps",
    },
    {
      question: "Quel outil est principalement utilisé pour capturer et analyser le trafic réseau ?",
      answers: ["Wireshark", "Nmap", "Metasploit", "Aircrack-ng"],
      correct: "Wireshark",
    },
    {
      question: "Quel est l'objectif principal d'un honeypot dans la cybersécurité ?",
      answers: ["Attirer les attaquants pour analyser leurs méthodes", "Bloquer le trafic entrant non sécurisé", "Sauvegarder les données sensibles", "Crypter les bases de données"],
      correct: "Attirer les attaquants pour analyser leurs méthodes",
    },
    {
      question: "Quel format de clé publique est couramment utilisé pour les connexions SSH ?",
      answers: ["RSA", "SHA-256", "MD5", "TLS"],
      correct: "RSA",
    },
    {
      question: "Quelle est la taille d'une adresse IPv6 ?",
      answers: ["32 bits", "64 bits", "128 bits", "256 bits"],
      correct: "128 bits",
    },
    {
      question: "Quel fichier de configuration Linux est utilisé pour définir les règles de firewall avec iptables persistantes après redémarrage ?",
      answers: ["/etc/iptables/rules.v4", "/etc/firewall.conf", "/etc/network/interfaces", "/etc/sysctl.conf"],
      correct: "/etc/iptables/rules.v4",
    },
    {
      question: "En développement web sécurisé, quelle en-tête HTTP permet de protéger contre le clickjacking ?",
      answers: ["Content-Security-Policy", "X-Frame-Options", "Strict-Transport-Security", "X-Content-Type-Options"],
      correct: "X-Frame-Options",
    },
    {
      question: "Dans un réseau, à quoi sert le protocole ARP ?",
      answers: ["Crypter les paquets réseau", "Vérifier la connectivité d'un hôte", "Associer une adresse IP à une adresse MAC", "Gérer la bande passante"],
      correct: "Associer une adresse IP à une adresse MAC",
    },
    {
      question: "Quel port est utilisé par défaut pour MySQL ?",
      answers: ["3306", "1521", "1433", "5432"],
      correct: "3306",
    },
  ]
  ,
};

//console.log(quizChoice);