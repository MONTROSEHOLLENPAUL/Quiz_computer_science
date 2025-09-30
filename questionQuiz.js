const quizChoice = {
  architecture: [
    {
      question: "En quelle année Blaise Pascal inventa la Pascaline?",
      answers: ["1642", "1641", "1643"],
      correct: "1642",
    },
    {
      question:
        "Quelle est le nom du premier personnage a inventé la machine à calculer et dans quelle année?",
      answers: ["Bill Gates en", "Charles Babbage", "Wihlem Chickardt en 1623"],
      correct: "Wihlem Chickardt en 1623",
    },
    {
      question: "Quelle est le nom du fondateur de Microsoft?",
      answers: ["Bill Gates", "Elon Musk", "Satya Nadella"],
      correct: "Bill Gates",
    },
    {
      question:
        "Quelle est le nom du premier ordinateur électronique programmable?",
      answers: [
        "ENIAC(Electronical Numerical Integrator And Computer)",
        "ENIAC(Electronical Numerical Integrator And Calculator)",
        "ENIAC(Electronical Numerical Interface And Calculator)",
      ],
      correct: "ENIAC(Electronical Numerical Integrator And Calculator)",
    },
    {
      question:
        "Qui a crée le premier ordinateur portable et dans quelle année",
      answers: ["Bill Gates","Whilem Schickardt","Alan Turing","Charles Babbage","Adam Osborne en 1981"],
      correct: "Adam Osborne en 1981",
    },
    {
      question: "Quelle est l’origine du mot Informatique?",
      answers: ["Viens du mots grec","Viens de 2 mots francais 'automatique' et 'information'"],
      correct: "Viens de 2 mots francais 'automatique' et 'information'",
    },
    {
      question: "Informatique Définition?",
      answers: ["Science des ordianteurs","L'etude des technologies","Sciences du Traitement des informations rationnel de facon automatique","L'etude des IA"],
      correct: "Sciences du Traitement des informations rationnel de facon automatique",
    },
    {
      question: "Qui est le père de l’informatique?",
      answers: ["Blaise Pascal","Philipe Drefus","Charles Babbage"],
      correct: "Charles Babbage",
    },
    {
      question: "Ordinateur Définition?.",
      answers: ["Une appareil electronique permettant d'ecrire du text","Une appareil electronique programmable permettant de stocker des informations et donnees","une apprareil electronique servant comme une passe passe temps"],
      correct: "une appareil electronique programmable permettant de stocker des informations et donnees",
    },
    {
      question: "Memoire Définition?",
      answers: ["Une dispositif permettent de conserver et de restituer des informations quand le besoin se fait sentir",""],
      correct: "Une dispositif permettent de conserver et de restituer des informations quand le besoin se fait sentir",
    },
    {
      question: "Microprocesseur définition?",
      answers: ["Il est considere comme un circuit electronique comlexe qui effectuer les operations logiques,arithemetiques et de controle","",""],
      correct: "Il est considere comme un circuit electronique comlexe qui effectuer les operations logiques,arithemetiques et de controle",
    },
    {
      question: "Software Définition?",
      answers: ["Le software, ou logiciel, désigne l'ensemble des programmes et applications qui permettent à un ordinateur d'exécuter des tâches spécifiques.",""],
      correct: "Le software, ou logiciel, désigne l'ensemble des programmes et applications qui permettent à un ordinateur d'exécuter des tâches spécifiques.",
    },
    {
      question: "Hardware Définition?",
      answers: ["Le hardware, ou matériel informatique, désigne l'ensemble des composants physiques d'un ordinateur, tels que la carte mère, le processeur, la mémoire, etc.",""],
      correct: "Le hardware, ou matériel informatique, désigne l'ensemble des composants physiques d'un ordinateur, tels que la carte mère, le processeur, la mémoire, etc.",
    },
    {
      question: "Périphérique Définition?",
      answers: ["Un périphérique est un dispositif externe connecté à un ordinateur pour permettre l'interaction ou l'ajout de fonctions supplémentaires, comme un clavier, une souris, une imprimante, etc.",""],
      correct: "Un périphérique est un dispositif externe connecté à un ordinateur pour permettre l'interaction ou l'ajout de fonctions supplémentaires, comme un clavier, une souris, une imprimante, etc.",
    },
    {
      question: "Port Définition?",
      answers: ["Un port est une interface physique ou logique sur un ordinateur qui permet de connecter des périphériques, tels que les ports USB, HDMI, ou les ports réseau.",""],
      correct: "Un port est une interface physique ou logique sur un ordinateur qui permet de connecter des périphériques, tels que les ports USB, HDMI, ou les ports réseau.",
    },
    {
      question: "Modem Définition?",
      answers: ["Un modem est un appareil qui permet la transmission de données entre un ordinateur et un réseau (souvent Internet) en modulant et démodulant les signaux analogiques et numériques.",""],
      correct: "Un modem est un appareil qui permet la transmission de données entre un ordinateur et un réseau (souvent Internet) en modulant et démodulant les signaux analogiques et numériques.",
    },
    {
      question: "Différence entre mémoire morte et mémoire vive?",
      answers: ["La mémoire morte (ROM) est une mémoire non volatile qui conserve les données même lorsque l'ordinateur est éteint. La mémoire vive (RAM) est une mémoire volatile qui perd son contenu lorsque l’ordinateur est éteint.",""],
      correct: "La mémoire morte (ROM) est une mémoire non volatile qui conserve les données même lorsque l'ordinateur est éteint. La mémoire vive (RAM) est une mémoire volatile qui perd son contenu lorsque l’ordinateur est éteint.",
    },
    {
      question: "Quelle est le langage utilisée par l’ordinateur?",
      answers: ["L’ordinateur utilise principalement le langage binaire (composé de 0 et 1), également appelé langage machine.",""],
      correct: "L’ordinateur utilise principalement le langage binaire (composé de 0 et 1), également appelé langage machine.",
    },
    {
      question:
        "Sur quel élément matériel sont regroupés les composants de l’unité central?",
      answers: ["Les composants de l'unité centrale sont regroupés dans le boîtier de l'ordinateur, sur la carte mère.",""],
      correct: "Les composants de l'unité centrale sont regroupés dans le boîtier de l'ordinateur, sur la carte mère.",
    },
    {
      question: "Quelle est l’unité de mesure de la mémoire?",
      answers: ["L'octet (byte)","Le bit","le GigaByte"],
      correct: "L'octet (byte)",
    },
    {
      question: "Quelle est l’unité de mesure du microprocesseur?",
      answers: ["Le Hertz(H)","byte","tera","Le Herz(hz)"],
      correct: "Le Herz(hz)",
    },
    {
      question: "Quelle est l’unité de mesure de la fréquence?",
      answers: ["Hertz (Hz)","Metre(m)","Ohm"],
      correct: "Hertz (Hz)",
    },
    {
      question: "quelle est la plus petite unité de mesure en informatique?",
      answers: ["Le bit","Hertz","Ohm"],
      correct: "Le bit",
    },
    {
      question: "Quelle est la plus petite capacité ?",
      answers: ["Un bit","noeud","1Ko"],
      correct: "Un bit",
    },
    {
      question: "1 Octet = 1 byte vaut?",
      answers: ["1Ko","8 bits","1024 Ko"],
      correct: "8 bits",
    },
    {
      question:
        "Différence entre système d’exploitation et logiciel d’application?",
      answers: ["Un système d’exploitation est un logiciel qui gère les ressources matérielles de l'ordinateur (ex. Windows, macOS). Un logiciel d’application permet d'exécuter des tâches spécifiques pour l'utilisateur, comme un traitement de texte ou un navigateur.",""],
      correct: "Un système d’exploitation est un logiciel qui gère les ressources matérielles de l'ordinateur (ex. Windows, macOS). Un logiciel d’application permet d'exécuter des tâches spécifiques pour l'utilisateur, comme un traitement de texte ou un navigateur.",
    },
    {
      question: "Qu’est-ce qu’un moteur de recherche?",
      answers: ["Un moteur de recherche est un programme qui permet de rechercher des informations sur Internet en indexant et en classant les pages web, comme Google ou Bing.",""],
      correct: "Un moteur de recherche est un programme qui permet de rechercher des informations sur Internet en indexant et en classant les pages web, comme Google ou Bing.",
    },
    {
      question:
        "La mémoire qui permet l’opération de lecture et d’écriture simultanées est?",
      answers: ["La mémoire DRAM (Dynamic Read Access Memory).","La mémoire DRAM (Dynamic Random Access Memory).",": La mémoire SRAM (Static Random Access Memory)."],
      correct: ":La mémoire DRAM (Dynamic Random Access Memory).",
    },
    {
      question:
        "Le format ………………………………………………. est généralement utilisé pour stocker des données.",
      answers: [],
      correct: "",
    },
    {
      question: "Un programme source est généralement écrit en",
      answers: ["Langage de bas niveau","Langage de haut niveau","Langage binaire"],
      correct: "Langage de haut niveau",
    },
    {
      question:
        "Un programme informatique qui converti un programme en langage machine en même temps est appelé",
      answers: ["Compilateur","word"],
      correct: "Compilateur",
    },
    {
      question:
        "Nous appellons l’unité qui décode et traduit chaque instruction et génère les signaux d’activation nécessaires pour ALU et d’autres unités",
      answers: ["Unité de commande","Unité de contrôle","Convertisseur"],
      correct: "Unité de contrôle",
    },
    {
      question:
        "Les mémoires cache sont des mémoires tampons(buffers) à grande vitesse insérées entre les processeurs et la mémoire principale.",
      answers: ["Vrai","Faux"],
      correct: "Vrai",
    },
    {
      question: " Le canal qui traite les demandes multiples et multiplexe les transferts de données de ces périphériques, octet par octet, est appelé",
      answers: ["Canal multiplexeur","canal sélecteur","canal du vent"],
      correct: "Canal multiplexeur",
    },
    {
      question: "Le mappage des adresses est terminé, lorsque le programme est chargé initialement est appelé",
      answers: ["Relocalisation statique","Localisation","Relocalisation  dynamique"],
      correct: "Relocalisation statique",
    },
    {
      question: "Le bus PCI se règle à 33 MHz et peut transférer 32 bits de données (quatre octets) à chaque impulsion d’horloge.",
      answers: ["Vrai","Faux"],
      correct: "Vrai",
    },
    {
      question: "Le temps qui s’écoule entre le début d’une opération et son achèvement s’appelle………………….. ",
      answers: ["Temps d’accès à la mémoire","temps d’accès à la rivé","Temps de réponse et d’exécution"],
      correct: "Temps de réponse et d’exécution",
    },
    {
      question: "Un microprogramme écrit sous forme de chaîne de 0 et de 1 est un ……………………………….. ",
      answers: ["Programme binaire","Microcode"],
      correct: "Microcode",
    },
    {
      question: "L’accès à la mémoire dans l’architecture RISC est limité aux instructions",
      answers: ["STA et LDA","SATA ET SPRO","LDA  et RAM"],
      correct: "STA et LDA",
    },
    {
      question: "L’unité de mémoire qui communique directement avec la CPU est appelée :……………………….",
      answers: ["Mémoire RAM","Mémoire cache","Les Bus"],
      correct: "Mémoire cache",
    },
    {
      question: "CISC définition:",
      answers: ["Complex Instruction Step Computing","Complex Instruction Set Computer"],
      correct: "Complex Instruction Set Computer",
    },
    {
      question: "SSD définition:",
      answers: ["Solid State Drive","Solid SanDisk"],
      correct: "Solid State Drive",
    },
    {
      question: " SATA définition:",
      answers: ["","Serial Advanced Technology Attachement"],
      correct: "Serial Advanced Technology Attachement",
    },
    {
      question: "DRAM FPM:",
      answers: ["Type de mémoire vive qui permet une lecture plus rapide des données en utilisant une méthode de lecture en mode page.",""],
      correct: "Type de mémoire vive qui permet une lecture plus rapide des données en utilisant une méthode de lecture en mode page.",
    },
    {
      question: "DRAM EDO:",
      answers: ["","Une version améliorée de la DRAM qui permet d’accéder à une donnée pendant qu'une autre donnée est en cours de lecture, offrant ainsi de meilleures performances."],
      correct: "Une version améliorée de la DRAM qui permet d’accéder à une donnée pendant qu'une autre donnée est en cours de lecture, offrant ainsi de meilleures performances.",
    },
    {
      question: "Registre définition:",
      answers: ["Ce sont des petites unités de stockage très rapides dans le processeur utilisées pour stocker temporairement des données ou des instructions en cours d’exécution.",""],
      correct: "Ce sont des petites unités de stockage très rapides dans le processeur utilisées pour stocker temporairement des données ou des instructions en cours d’exécution.",
    },
    {
      question: "Mémoire cache définition:",
      answers: ["Il s'agit d'une mémoire haute vitesse utilisée pour stocker les données fréquemment demandées par le processeur, permettant un accès plus rapide que la mémoire principale (RAM).",""],
      correct: "Il s'agit d'une mémoire haute vitesse utilisée pour stocker les données fréquemment demandées par le processeur, permettant un accès plus rapide que la mémoire principale (RAM).",
    },
    {
      question: "Qu'est ce qu'un compteur de programme",
      answers: ["C'est un registre qui garde la trace de l'adresse de la prochaine instruction à exécuter.",""],
      correct: "C'est un registre qui garde la trace de l'adresse de la prochaine instruction à exécuter.",
    },
    {
      question: "Qu'est ce qu'un Registre d’instruction",
      answers: ["","C'est un registre qui contient l'instruction en cours d'exécution.",""],
      correct: "C'est un registre qui contient l'instruction en cours d'exécution.",
    },
    {
      question: "NMI définition:",
      answers: ["Nombre Minimum d'Individus","National Measurement Institute","Non-Maskable Interrupt","National Museum Indonesia"],
      correct: "Non-Maskable Interrupt",
    },
    {
      question: "Cylindres définition:",
      answers: ["","un cylindre est un ensemble de pistes situées à la même distance du centre du disque. Il est constitué de toutes les pistes à une même position sur chaque plateau du disque",""],
      correct: "un cylindre est un ensemble de pistes situées à la même distance du centre du disque. Il est constitué de toutes les pistes à une même position sur chaque plateau du disque",
    },
    {
      question: "Coprocesseur définition",
      answers: ["","Un coprocesseur est un processeur secondaire qui assiste le processeur principal dans l'exécution de certaines tâches spécifiques, telles que les calculs mathématiques complexes ou la gestion des graphiques."],
      correct: "Un coprocesseur est un processeur secondaire qui assiste le processeur principal dans l'exécution de certaines tâches spécifiques, telles que les calculs mathématiques complexes ou la gestion des graphiques.",
    },
    {
      question: "Memoire Définition?",
      answers: [],
      correct: "",
    },
    {
      question: "Memoire Définition?",
      answers: [],
      correct: "",
    },
  ],
  programmation: [
    {
      question: "Comment déclarer une variable qui ne peut pas être modifiée ?",
      answers: ["const", "let", "var"],
      correct: "const",
    },
    {
      question:
        "Quelle est la fonction qui permet de faire le racine carre d'un nombre",
      answers: ["pow()", "sqrt()", "abs()"],
      correct: "sqrt()",
    },
    {
      question:
        'Quelle est la valeur de "null" lorsqu\'elle est convertie en nombre ?',
      answers: ["0", "1", "undefined", "null"],
      correct: "0",
    },
    {
      question:
        "Quel est le type de donnees utilise pour stocker des nombres entier",
      answers: ["Integer", "Float", "String", "Boolean"],
      correct: "Integer",
    },
    {
      question:
        "Quel operateur est utilise pour effectuer une division entiere",
      answers: ["+", "-", "*", "/"],
      correct: "/",
    },
    {
      question:
        "Quel est le nom donne a une zone de memoire utilisee pour stocker des valeurs",
      answers: ["Variable", "Tableau", "Fonction", "Classe", "Objet"],
      correct: "Variable",
    },
    {
      question: "Quel type de donnees est utilise pour stocker du texte",
      answers: ["Integer", "Float", "String", "Boolean"],
      correct: "String",
    },
    {
      question: "Quel operateur est utilise pour effectuer une addition",
      answers: ["+", "-", "*", "/"],
      correct: "+",
    },
    {
      question:
        "Quel type de donnees est utilise pour stocker des valeurs booleennes",
      answers: ["Integer", "Float", "String", "Boolean"],
      correct: "Boolean",
    },
    {
      question: "Que faire la fonction abs() ?",
      answers: [
        "faire le cube d'un nombre",
        "calcul de la valeur absolue d'un nombre",
        "Arrondir un nombre",
      ],
      correct: "calcul de la valeur absolue d'un nombre",
    },
    {
      question: "De quoi est constitue un programme informatique ?",
      answers: [
        "De codes",
        "De phrases",
        "De lignes",
        "De chiffres et de nombres",
      ],
      correct: "De codes",
    },
    {
      question: "Quelle erreur nous renvoie une code 404 ?",
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
      question: "Ou est stockee une variable ?",
      answers: [
        "Dans la memoire cachee",
        "Dans le disque dur",
        "Dans la memoire vive",
      ],
      correct: "Dans la memoire vive",
    },
    {
      question: "for(int i = 0;i < 10;i++) quelles sont les valeurs prises par i ",
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
      question:
        "Comment s'appelle une suite ordonnee d'operations elementaires qui permet de resoudre un probleme identifie et obtenir un resultat precis ?",
      answers: [
        "Un algorithme",
        "Un cahier des charges",
        "un programme",
        "Une suite informatique",
      ],
      correct: "Un algorithme",
    },
    {
      question: "Le resultat de cette fonction floor(5.95) est",
      answers: ["5", "6", "5.9", "6.9"],
      correct: "5",
    },
    {
      question:
        "le resultat de str1 +' '+ str2 ou str1 = 'Hello' et str2 = 'World'",
      answers: ["HelloWorld", "Hello World", "hello world", "WorldHello"],
      correct: "Hello World",
    },
    {
      question:
        "Un algorithme s'ecrit uniquement avec un logiciel dans un language precis",
      answers: ["Faux", "vrai"],
      correct: "Faux",
    },
    {
      question:
        "Avec un tableau d'element [0,6,9,3] quelle est la fonction permettant de trouver la plus grande valeur?",
      answers: ["Min()", "Maximu()", "Max()", "Max"],
      correct: "Max()",
    },
    {
      question:
        "La solution du probleme doit etre la premiere etape de l'ecriture d'un programme",
      answers: ["Faux", "Vrai"],
      correct: "Faux",
    },
    {
      question:
        "Quelle est la syntaxe correcte pour afficher « Hello World » en C ?",
      answers: ["printf('Hello World');", "sortie << « Hello World » ;","Console.WriteLine(« Hello World ») ;","System.out.printline(« Hello World ») ;"],
      correct: "printf('Hello World');",
    },
    {
      question:
        "Lorsqu’une variable est créée en C, une adresse mémoire est affectée à la variable.",
      answers: ["Faux", "Vrai"],
      correct: "Vrai",
    },
    {
      question:
        "Comment créer une variable en C avec la valeur numérique 5 ?",
      answers: ["num = 5 ;","val num = 5 ;", "var num = 5 ;" , "int num = 5 ;"],
      correct: "int num = 5 ;",
    },
    {
      question:
        "En C, les instructions de code doivent se terminer par un point-virgule (;)",
      answers: ["Vrai", "Faux"],
      correct: "Vrai",
    },
    {
      question:
        "Quelle fonction est souvent utilisée pour générer des valeurs et imprimer du texte en C ?",
      answers: ["sortie()", "écrire()","printf()","printword()"],
      correct: "printf()",
    },
    {
      question:
        "Quel spécificateur de format est souvent utilisé pour imprimer des entiers en C ?",
      answers: ["%D", "%d","%n"],
      correct: "%d",
    },
    {
      question:
        "Quel mot-clé est utilisé pour créer une structure en C ?",
      answers: ["Struct", "structure","structures","Str"],
      correct: "Struct",
    },
    {
      question:
        "En C, il est possible d’hériter des propriétés et des fonctions de classe d’une classe à une autre.",
      answers: ["Vrai", "Faux"],
      correct: "Faux",
    },
    {
      question:
        "Qu’est-ce que le ptr dans le code suivant ? int* ptr = &monÂge ;",
      answers: ["Une classe", "Un tableau","Un paramètre","Un pointeur"],
      correct: "Un pointeur",
    },
    {
      question:
        "Quel mot-clé est utilisé pour créer une classe en C ?",
      answers: ["classe {}", "Aucune de ces réponses","class = maClasse","classe()"],
      correct: "Aucune de ces réponses",
    },
    {
      question:
        "Quelle instruction est utilisée pour arrêter une boucle ?",
      answers: ["exit","stop", "break","void"],
      correct: "break",
    },
    {
      question:
        "Quelle instruction peut être utilisée pour sélectionner l’un des nombreux blocs de code à exécuter ?",
      answers: ["break","default", "switch","case when"],
      correct: "switch",
    },
    {
      question:
        "Quel mot-clé est utilisé pour renvoyer une valeur à l’intérieur d’une fonction ?",
      answers: ["return", "break","get"],
      correct: "return",
    },
    {
      question:
        "Quel opérateur peut être utilisé pour trouver la taille de la mémoire (en octets) d’un type de données ou d’une variable en C ?",
      answers: ["The len property", "The sizeof property","The length property"],
      correct: "The sizeof property",
    },
    {
      question:
        "Quel mot-clé est utilisé pour créer une classe en C++ ?",
      answers: ["class()","class", "className","MyClass"],
      correct: "class",
    },
    {
      question:
        "Quelle méthode peut-on utiliser pour trouver la longueur d’une chaine en C++ ?",
      answers: ["length()","getSize()", "sizeof()","len()"],
      correct: "length()",
    },
    {
      question:
        "",
      answers: ["","", "",""],
      correct: "",
    },
    {
      question:
        "Quelle est la bonne façon de créer un objet appelé myObj de MyClass en C++ ?",
      answers: ["new myObj = MonClass() ;","class MaClasse = nouveau myObj() ;", "MyClass myObj ;","class myObj = nouveau MyClass() ;"],
      correct: "MyClass myObj ;",
    },
    {
      question:
        "",
      answers: ["","", "",""],
      correct: "",
    },
    {
      question:
        "",
      answers: ["","", "",""],
      correct: "",
    },
  ],
  geometrie: [
    {
      question: "Parmi ces equations ou est l'equation cartesienne:",
      answers: ["ax²+by+c = 0","ax²+bx = 0" ,"ax+by+c = 0", "x+1/2=t y-8/6 =t"],
      correct: "ax+by+c = 0",
    },
    {
      question: "Si u(1;1;1) et v(0;-1;-3) sont 2 vecteurs de l'espace euclidien (E) alors est egal a:",
      answers: ["√3 + √3","√3 + √10","√5","√10"],
      correct: "",
    },
    {
      question: "Le vecteur normal n du plan (P) d'equation: 3x + 5y - 4z - 6 = 0 est:",
      answers: ["n(-4;5;3)", "n(5;3;4)", "n(3;5;-4)","n(-5;3;-4)"],
      correct: "n(3;5;-4)",
    },
    {
      question: "L'equation cartesienne du plan (Q) contenant la droite:(D):x = -3;y = 1 + t z = 2t t E R et perpendiculaire au plan:(Pi):x-y+z = 0",
      answers: ["-3x-2y+z+7 = 0", "3x+2y+z-7 = 0", "x-y+z+7 = 0","3x+2y-z+7 = 0","Aucune reponse",],
      correct: "",
    },
    {
      question: "Dans l'espace affine muni d'un repere orthonome (o,i,j,k),on considere la droite D(A,u) A(-1;2;3) u(-3;4;-2) et un point B(3;4-5).L'equation du plan (P) passant par B et perpendiculaire a (D)",
      answers: ["-3x+4y+2z+17 = 0", "3x-4y-2z+17 = 0", "11x-y+6z+41 = 0","3x-4y+2z-3 = 0"],
      correct: "",
    },
    {
      question: "La distance du point A(-1;1) a la droite (D) d'equation: 2x+3y+5 = 0 est:",
      answers: ["8√13/13", "7√13/3", "6√13/13","Aucune reponse"],
      correct: "6√13/13",
    },
    {
      question: "Dans le plan muni d'une base orthonormee,si u(-2,3) est un vecteur normal de (D) et que A(1,1) est sur (D) alors une equation cartesienne de (D) est:",
      answers: ["-2x+3y = 0", "3x+2y+1 = 0", "-2x+3y-1 = 0","-2x+3y+1 = 0","3x-2y+1 = 0"],
      correct: "3x+2y+1 = 0",
    },
    {
      question: "Le centre I et le rayon R du cercle(C) d’equation :x²+y²-6x-5y+9 =0 sont",
      answers: ["I(3;5/2) et R = 5/2", "I(5/2;3) et R = 5/2", "I(-3;5/2) et R = 5/2"],
      correct: "I(3;5/2) et R = 5/2",
    },
    {
      question: "Dans le plan affine euclidien,le cercle d'equation:(x-1)²+(y+2)²=25 a son centre A et son rayon R:",
      answers: ["A(1,2) et R = 25", "A(1,-2) et R = 5", "A(2,1) et R = 5","A(1,-2) et R = 25"],
      correct: "A(1,-2) et R = 5",
    },
    {
      question: "Dans un plan  affine euclidien ,le centre A et le rayon R du cercle (C) d'equation x²+y²-6x-4y-3 = 0 est",
      answers: ["A(-6;4) et R = 3", "A(3;2) et R = 6", "A(3;-2) et R = 4","A(-3;2) et R = 4"],
      correct: "A(-3;2) et R = 4 *",
    },
    {
      question: "Ou est l'equation du cercle sous forme developper",
      answers: ["x²+y²-2ax-2by+c = 0", "(x-a)²+(y-b)² = r²", "x²+y²-ax-by+c = r²","x²+y²-2a-2b+c = 0"],
      correct: "x²+y²-2ax-2by+c = 0",
    },
    {
      question: "A(1;-2) et B(-3;1) sont deux points d'un plan affine euclidien muni d'un repere orthonorme.L'equation de la mediatrice du segement [AB] passamt par le point  I est:",
      answers: ["-8x+6y+5 = 0", "x-2y-5 = 0", "x+2y-5 = 0","8x-6y+5 = 0"],
      correct: "",
    },
    {
      question: "Quelle est la relation pour une equation cartesienne? ",
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
      question: "A quoi est egale le rayon du cercle?",
      answers: ["√a²+b²-c", "√a²+b²+c", "√a²+b²-c²"],
      correct: "√a²+b²-c",
    },
     {
      question: "Dans l'espace affine euclidien muni du repere orthonorme(o,i,j,k),l'equation cartesienne du plan (P) defini par le point A(3,-1,2) et de vecteur normal n(1;-3;5) est",
      answers: ["(P):x-3y+5z-10 = 0", "(P):x-3y+5z+16 = 0", "(P):x-3y+5z-16 = 0","(P):x-3y+5z-13 = 0"],
      correct: "",
    },
    {
      question: "Dans l'espace muni d'une base orthonormee si u(2,-3,4) est un vecteur normal du plan (P) et que le point A(1;-1;-1) est dans le plan (P),alors une equation cartesienne de (P) est:",
      answers: ["2x-3y+4z-1 = 0", "2x-3y+4z+1 = 0", "2x-3y+4z-2 = 0"],
      correct: "",
    },
    {
      question: "La distance du point A(1;0;-2) au plan (P) d'equation 3x + 2y + 4z - 1 = 0 est:",
      answers: ["-9√29/29", "9√29/29", "6√29/29"],
      correct: "6√29/29 *",
    },
     {
      question: "Donnez l'intersection de cette droite:(D) x-3/2 = y+1/1 = z-2/-2; (P):x+3y+3z-7 =0",
      answers: ["D∩P ={(-1,-2,4)}", "D∩P ={(1,-2,4)}", "D∩P ={(1,-2,-4)}"],
      correct: "D∩P ={(1,-2,4)}",
    },
  ],
  algebre_de_bool: [
    {
      question: "",
      answers: ["", "", ""],
      correct: "",
    },
    {
      question: "",
      answers: [],
      correct: "",
    },
    {
      question: "",
      answers: ["", "", ""],
      correct: "",
    },
    {
      question: "",
      answers: [],
      correct: "",
    },
    {
      question: "",
      answers: ["", "", ""],
      correct: "",
    },
    {
      question: "",
      answers: [],
      correct: "",
    },
    {
      question: "",
      answers: ["", "", ""],
      correct: "",
    },
    {
      question: "",
      answers: [],
      correct: "",
    },
    {
      question: "",
      answers: ["", "", ""],
      correct: "",
    },
    {
      question: "",
      answers: [],
      correct: "",
    },
  ],
  goat_level: [
    {
      question: "Que signifie le sigle API en informatique ?",
      answers: ["Application Programming Interface", "Advanced Program Instruction", "Automated Processing Integration","Applied Programm Interaction"],
      correct: "Application Programming Interface",
    },
    {
      question: "Que represente une classe en programmation orientee objet ?",
      answers: ["Un modele pour creer des objets","Une fonction temporaire","Un type de boucle","Une base de donnes"],
      correct: "Un modele pour creer des objets",
    },
    {
      question: "Quel est le role du noyau (Kernel) d'un systeme d'exploitation ?",
      answers: ["Gerer la communication entre le materiel et les logiciels", "Supprimer les fichiers inutiles", "Sauvegarder les mots de passe","Optimiser la vitesse d'internet"],
      correct: "Gerer la communication entre le materiel et les logiciels",
    },
    {
      question: "Dans une base de donnees relationnelle,que signifie SQL ?",
      answers: ["Simple Question Language","Server Query List","Structured Query Language","Systeme Quick Load"],
      correct: "Structured Query Language",
    },
    {
      question: "En reseau,que designe l'adresse IP 127.0.0.1 ?",
      answers: ["Adresse d'un serveur DNS", "Adresse publique", "Adresse locale(localhost)","Adresse d'un routeur"],
      correct: "Adresse locale(localhost)",
    },
    {
      question: "Quelle methode de chiffrement est consideree comme la plus securisee actuellement ?",
      answers: ["AES-256","DES","MD5","SHA-1"],
      correct: "AES-256",
    },
    {
      question: "Qu'est-ce qu'une attaque par phishing ?",
      answers: ["Une tentation de voler des informations personnelles via de faux emails", "Un virus qui infecte les ordinateurs", "Une attaque par deni de service","Un logiciel espion"],
      correct: "Une tentation de voler des informations personnelles via de faux emails",
    },
    {
      question: "Quel port est generalement utilise par HTTPS ?",
      answers: ["80","443","21","25"],
      correct: "443",
    },
    {
      question: "Qu'est-ce qu'une attaque zero-day ?",
      answers: ["Une attaque exploitant une vulnerabilite inconnue", "Une attaque durant exactement 24 heures", "Une attaque qui efface toutes les donnees","Une attaques preventives"],
      correct: "Une attaque exploitant une vulnerabilite inconnue",
    },
    {
      question: "Quel est le principe de l'authentification a deux facteurs (2FA) ?",
      answers: ["Utiliser deux mots de passe differents","Se connecter depuis deux appareils differents","Changer son mot de passe deux fois","Combiner quelque chose que vous savez et quelques chose que vous avez"],
      correct: "Combiner quelque chose que vous savez et quelques chose que vous avez",
    },
    {
      question: "Que signifie l'acronyme CI/CD ?",
      answers: ["Continuous Integration/Continuous Deployment", "Code Integration/Code Depoyment", "Central Integration/Central Deployement","Container Integration/Container Deployment"],
      correct: "Continuous Integration/Continuous Deployment",
    },
    {
      question: "Quel est l'avantage principale des conteneurs Docker ?",
      answers: ["Ils sont rapides que les machines virtuelles","Ils garantissent la portabilite et l'isolation des applications","Ils consomment moin de memoire","Ils sont plus securises"],
      correct: "Ils garantissent la portabilite et l'isolation des applications",
    },
    {
      question: "Qu'est-ce que Kubernetes ?",
      answers: ["Un language de programmation", "Un systeme d'orchestration de conteneurs", "Une base de donnees","Un serveur web"],
      correct: "Un systeme d'orchestration de conteneurs",
    },
    {
      question: "Quel language de programmation est le plus utilise pour le developpment web cote client ?",
      answers: ["Python","Javascript","Java","PHP"],
      correct: "Javascript",
    },
    {
      question: "Que signifie l'abreviation IP dans une adresse IP ?",
      answers: ["Internet Protocol", "Internet Program", "Integrated Process"],
      correct: "Internet Protocol",
    },
    {
      question: "Quel systeme de gestion de versions est le plus utilise par les developpeurs",
      answers: ["Mercurial","Git","Subversion(SVN)","CVS"],
      correct: "Git",
    },
    {
      question: "Que signifie HTML dans le developpment web ?",
      answers: ["HyperText Markup Language", "High Tect Modern Layout","Hyper Tool Machine Learning","Home Tool Markup Link"],
      correct: "HyperText Markup Language",
    },
    {
      question: "Quel language est utilise pour le machine learning ?",
      answers: ["PHP","Ruby","Python","C++"],
      correct: "Python",
    },
    {
      question: "Que fait la commande ping dans un terminal ?",
      answers: ["Teste la connexion avec une adresse reseau", "Effacer le cache DNS", "Ouvre un port TCP","Ferme toutes les connexions"],
      correct: "Teste la connexion avec une adresse reseau",
    },
    {
      question: "Laquelle de ces entreprises n'a pas ete creee par Elon Musk ?",
      answers: ["PayPal","OpenAI","SpaceX","Apple"],
      correct: "Apple",
    },
    {
      question: "Quel est le format des images compressees le plus courant ?",
      answers: ["JPEG", "PDF", "MP3","HTML"],
      correct: "JPEG",
    },
    {
      question: "Que signifie l'abreviation USB ?",
      answers: ["Universal Serial Bus","Unique Signal Board","Ultra System Base","User Storage Backup"],
      correct: "Universal Serial Bus",
    },
    {
      question: "Quel type d'attaque consiste a saturer un serveur pour le rendre indisponible ?",
      answers: ["Phishing", "Man-in-the-middle", "DDoS","Brute force"],
      correct: "Man-in-the-middle",
    },
    {
      question: "Que signifie l'acronyme VPN ?",
      answers: ["Virtual Private Network","Verified Protocol Node","Virtual Public Network","Variable Protection Network"],
      correct: "Virtual Private Network",
    },
    {
      question: "Quel protocole est principalement utilise pour securiser les communications Web ?",
      answers: ["HTTP", "SMTP", "HTTPS","FTP"],
      correct: "HTTPS",
    },
    {
      question: "Quelle technique consiste a tester les mots de passe en essayant toutes les combinaisons possibles ?",
      answers: ["Brute force","Phishing","SQL injection","Social Engineering"],
      correct: "Brute force",
    },
    {
      question: "Que fait un logiciel de detection IDS(Instrusion Detection System)",
      answers: ["Il corrige automatique les vulnerabilites", "Il detecte des comportements suspects sur le reseau", "Il bloque tous les ports reseau","Il chiffre les bases de donnees"],
      correct: "Il detecte des comportements suspects sur le reseau",
    },
    {
      question: "Docker est principalement utilise pour:",
      answers: ["Creer des machines virtuelles","Gerer des conteneurs","Heberger des sites web","Ecrire des scripts de test"],
      correct: "Gerer des conteneurs",
    },
    {
      question: "Kubernetes est principalement utilise pour:",
      answers: ["Orchestrer des conteneurs", "Surveiller les performances reseau", "Analyser le code source","Compiler des programmes"],
      correct: "Orchestrer des conteneurs",
    },
    {
      question: "Teraform est une outil qui sert a:",
      answers: ["Gerer l'infrastructure comme du code","Creer des conteneurs Docker","Tester des API","Monitorer des serveurs"],
      correct: "Gerer l'infrastructure comme du code",
    },
    {
      question: "Prometheus est principalement utilise pour:",
      answers: ["Le monitoring et la collecte de metriques", "La gestion des versions de code", "Le deploiement automatique","La creation de scripts Bash"],
      correct: "Le monitoring et la collecte de metriques",
    },
    {
      question: "Quel systeme de gestion de versions est le plus utilise en DevOps ?",
      answers: ["Git","SVN","Mercurial","CVS"],
      correct: "Git",
    },
    {
      question: "Quel framework est le plus utilise pour construire des interfaces front-end modernes ?",
      answers: ["Django", "Laravel", "React","Flask","Vue"],
      correct: "React",
    },
    {
      question: "Quel language s'execute cote client dans le navigateur ?",
      answers: ["Javascript","Python","Java","PHP"],
      correct: "Javascript",
    },
    {
      question: "Quel protocole est principalement utilise pour les requetes web ?",
      answers: ["HTTP", "HTTPS", "FTP","SSH","SMTP"],
      correct: "HTTP",
    },
    {
      question: "Quel framework back-end est base sur le language  Python ?",
      answers: ["Django","Lavarel","Spring","Rails","Express"],
      correct: "Django",
    },
    {
      question: "Quel est le role principale de SQL ? ",
      answers: ["Gerer des bases de donnees", "Programmer de jeux video", "Compiler du code","Creer des sites web statistiques"],
      correct: "Gerer des bases de donnees",
    },
    {
      question: "Qu'est-ce qu'un reseau de neurones artificiels ?",
      answers: ["Un type de processeur","Un modele inspire du cerveau humain","Un language de programmation","Une base de donnees"],
      correct: "Un modele inspire du cerveau humain",
    },
    {
      question: "Quel protocole est principalement utilise pour securiser la navigation web",
      answers: ["HTTPS", "HTTP", "FTP","SMTP"],
      correct: "HTTPS",
    },
    {
      question: "Dans le contexte de l'IA qu'est-ce qu'un dataset ?",
      answers: ["Un type de logiciel","Une collection de donnees","Un algorithme de recherche","Un type de materiel"],
      correct: "Une collection de donnees",
    },
    {
      question: "Quel processus gere la memoire ?",
      answers: ["Gestionnaire de fichiers","Interpreteur de commandes","Planificateur de taches","Gestionnaire de memoire"],
      correct: "Gestionnaire de memoire",
    },
     {
      question: "Qu'est-ce qu'un thread ?",
      answers: ["Un programme complet","Une partie d'un processus","Un fichier systeme","Un peripherique"],
      correct: "Une partie d'un processus",
    },
     {
      question: "A quoi sert le swap ?",
      answers: ["Sauvegarder les donnees","Accelerer le processeur","Gerer la memoire virtuelle","Controler les peripheriques"],
      correct: "Gerer la memoire virtuelle",
    },
     {
      question: "Quelles technique d'attaque exploite une vulnerabilite dans un logiciel pour executer du code malveillant ?",
      answers: ["Usurpation d'identite","Deni de service","Injection de code","Ingenierie social"],
      correct: "Injection de code",
    },
     {
      question: "Quel protocole assure la confidentialite et l'integrite des donnees lors d'une communication reseau ?",
      answers: ["HTTP","FTP","DNS","TSL/SSL"],
      correct: "TSL/SSL",
    },
     {
      question: "Qu'est-ce qu'un honeypot en cybersecurite ?",
      answers: ["Un  logiciel antivirus performant","Un systeme de detection d'intrusion","Un leurre numerique pour attirer les attaquants","Une technique de cryptage avancee"],
      correct: "Un leurre numerique pour attirer les attaquants",
    },
     {
      question: "Quel type de malware se replique et se propage automatiquement sans intervention humaine ?",
      answers: ["Cheval de Troie","Spyware","Ransomware","Ver informatique"],
      correct: "Ver informatique",
    },
     {
      question: "Quel type d'attaque consiste a saturer un serveur avec trop de requetes ?",
      answers: ["DoS/DDoS","Phishing","MITM","Ransomware"],
      correct: "DoS/DDoS",
    },
     {
      question: "En SQL quelle commande permet de supprimer une table ?",
      answers: ["REMOVE TABLE","DELETE TABLE","DROP TABLE","TRUNCATE TABLE"],
      correct: "DROP TABLE",
    },
     {
      question: "Quel outil est utilise pour orchestrer des conteneurs a grande echelle ?",
      answers: ["Kubernetes","Docker Compose","Terraform","Ansible"],
      correct: "Kubernetes",
    },
    {
      question: "Quel algorithme est utilise pour l'echange securise de cles en cryptographie asymetrique ?",
      answers: ["RSA","SHA-256","AES","MD5"],
      correct: "RSA",
    },
     {
      question: "Quelle commande Linux permet de lister les processus actifs ?",
      answers: ["Is","ps","top","cd"],
      correct: "ps",
    },
    {
      question: "Quel outil est principalement utilise pour capturer et analyser le trafic reseau ?",
      answers: ["Wireshark","Nmap","Metasploit","Aircrack-ng"],
      correct: "Wireshark",
    },
     {
      question: "Quel est l'objectif principale d'un honeypot dans la cybersecurite ?",
      answers: ["Attirer les attaquants pour analyser leurs methodes","Bloquer le trafic entrant non securise","Sauvegarder les donnees sensibles","Crypter les bases de donnees"],
      correct: "Attirer les attaquants pour analyser leurs methodes",
    },
    {
      question: "Quel format de cle publique est couramment utilise pour les connexions SSH ?",
      answers: ["RSA","SHA-256","MD5","TLS"],
      correct: "RSA",
    },
     {
      question: "Quelle est la taille d'une adresse IPv6 ?",
      answers: ["32 bits","64 bits","128 bits","256 bits"],
      correct: "128 bits",
    },
    {
      question: "Quel fichier de configuration Linux est utilise pour definir les regles de firewall avec iptables persisitantes apres redemarrage ?",
      answers: ["/etc/iptables/rules.v4","/etc/firewall.conf","/etc/network/interfaces","/etc/sysctl.conf"],
      correct: "/etc/iptables/rules.v4",
    },
     {
      question: "En developpement web securise,quelle en-tete HTTP permet de proteger contre le clickjacking ?",
      answers: ["Content-Security-Policy","X-Frame-Options","Strict-Transport-Security","X-Content-Type-Options"],
      correct: "X-Frame-Options",
    },
    {
      question: "Dans un reseau ,a quoi sert le protocole ARP ?",
      answers: ["Crypter les paquets reseau","Verifier la connectivite d'un hote","Associer une adresse IP a une adresse MAC","Gerer la bande passante"],
      correct: "Associer une adresse IP a une adresse MAC",
    },
     {
      question: "Quel port est utilise par defaut pour MySQL ?",
      answers: ["3306","1521","1433","5432"],
      correct: "3306",
    },
  ],
};

console.log(quizChoice);

const architecture = [
  {
    question: "En quelle année Blaise Pascal inventa la Pascaline?",
    answers: ["1642", "1641", "1643"],
    correct: "1642",
  },
  {
    question:
      "Quelle est le nom du premier personnage a inventé la machine à calculer et dans quelle année?",
    answers: ["Bill Gates", "Charles Babbage", "Wihlem Chickardt"],
    correct: "Wihlem Chickardt",
  },
  {
    question: "Quelle est le nom du fondateur de Microsoft?",
    answers: ["Bill Gates", "Elon Musk", "Satya Nadella"],
    correct: "Bill Gates",
  },
  {
    question:
      "Quelle est le nom du premier ordinateur électronique programmable?",
    answers: [
      "ENIAC(Electronical Numerical Integrator And Computer)",
      "ENIAC(Electronical Numerical Integrator And Calculator)",
      "ENIAC(Electronical Numerical Interface And Calculator)",
    ],
    correct: "ENIAC(Electronical Numerical Integrator And Calculator)",
  },
];
