const titles1000 = [
   {name:'Monikers',reduced:'monikers',year:2015,url:'/boardgame/156546/monikers'},
   {name:'Wingspan',reduced:'wingspan',year:2019,url:'/boardgame/266192/wingspan'},
   {name:'El Grande',reduced:'elgrande',year:1995,url:'/boardgame/93/el-grande'},
   {name:'Nations',reduced:'nations',year:2013,url:'/boardgame/126042/nations'},
   {name:'Istanbul',reduced:'istanbul',year:2014,url:'/boardgame/148949/istanbul'},
   {name:'Santiago',reduced:'santiago',year:2003,url:'/boardgame/8125/santiago'},
   {name:'Vikings',reduced:'vikings',year:2007,url:'/boardgame/27173/vikings'},
   {name:'Camel Up',reduced:'camelup',year:2018,url:'/boardgame/260605/camel-second-edition'},
   {name:'Mexica',reduced:'mexica',year:2002,url:'/boardgame/2955/mexica'},
   {name:'Jambo',reduced:'jambo',year:2004,url:'/boardgame/12002/jambo'},
   {name:'The Mind',reduced:'themind',year:2018,url:'/boardgame/244992/mind'},
   {name:'Sushi Go!',reduced:'sushigo',year:2013,url:'/boardgame/133473/sushi-go'},
   {name:'Feudum',reduced:'feudum',year:2017,url:'/boardgame/163839/feudum'},
   {name:'Aquatica',reduced:'aquatica',year:2019,url:'/boardgame/283393/aquatica'},
   {name:'Cry Havoc',reduced:'cryhavoc',year:2016,url:'/boardgame/192457/cry-havoc'},
   {name:'Mandala',reduced:'mandala',year:2019,url:'/boardgame/264241/mandala'},
   {name:'Bohnanza',reduced:'bohnanza',year:1997,url:'/boardgame/11/bohnanza'},
   {name:'Antike',reduced:'antike',year:2005,url:'/boardgame/19600/antike'},
   {name:'Egizia',reduced:'egizia',year:2009,url:'/boardgame/58421/egizia'},
   {name:'Biblios',reduced:'biblios',year:2007,url:'/boardgame/34219/biblios'},
   {name:'Tribune: Primus Inter Pares',reduced:'tribune',year:2007,url:'/boardgame/30957/tribune-primus-inter-pares'},
   {name:'Gentes',reduced:'gentes',year:2017,url:'/boardgame/217780/gentes'},
   {name:'Euphoria: Build a Better Dystopia',reduced:'euphoria',year:2013,url:'/boardgame/133848/euphoria-build-better-dystopia'},
   {name:'Nusfjord',reduced:'nusfjord',year:2017,url:'/boardgame/234277/nusfjord'},
   {name:'Blokus',reduced:'blokus',year:2000,url:'/boardgame/2453/blokus'},
   {name:'Cubitos',reduced:'cubitos',year:2021,url:'/boardgame/298069/cubitos'},
   {name:'Dominion',reduced:'dominion',year:2008,url:'/boardgame/36218/dominion'},
   {name:'Amerigo',reduced:'amerigo',year:2013,url:'/boardgame/137408/amerigo'},
   {name:'Brass: Birmingham',reduced:'brass',year:2018,url:'/boardgame/224517/brass-birmingham'},
   {name:'On Mars',reduced:'onmars',year:2020,url:'/boardgame/184267/mars'},
   {name:'Yokohama',reduced:'yokohama',year:2016,url:'/boardgame/196340/yokohama'},
   {name:'Honsho??',reduced:'honshu',year:2016,url:'/boardgame/207336/honshu'},
   {name:'Gugo??ng',reduced:'gugong',year:2018,url:'/boardgame/250458/gugng'},
   {name:'Lisboa',reduced:'lisboa',year:2017,url:'/boardgame/161533/lisboa'},
   {name:'Tapestry',reduced:'tapestry',year:2019,url:'/boardgame/286096/tapestry'},
   {name:'Shipyard',reduced:'shipyard',year:2009,url:'/boardgame/55600/shipyard'},
   {name:'Menara',reduced:'menara',year:2018,url:'/boardgame/244608/menara'},
   {name:'Madeira',reduced:'madeira',year:2013,url:'/boardgame/95527/madeira'},
   {name:'Junk Art',reduced:'junkart',year:2016,url:'/boardgame/193042/junk-art'},
   {name:'Maria',reduced:'maria',year:2009,url:'/boardgame/40354/maria'},
   {name:'Skull',reduced:'skull',year:2011,url:'/boardgame/92415/skull'},
   {name:'Pax Pamir: Second Edition',reduced:'paxpamir',year:2019,url:'/boardgame/256960/pax-pamir-second-edition'},
   {name:'Raptor',reduced:'raptor',year:2015,url:'/boardgame/177639/raptor'},
   {name:'Perudo',reduced:'perudo',year:1800,url:'/boardgame/45/perudo'},
   {name:'Firenze',reduced:'firenze',year:2010,url:'/boardgame/75449/firenze'},
   {name:'Genoa',reduced:'genoa',year:2001,url:'/boardgame/1345/genoa'},
   {name:'Le Havre',reduced:'lehavre',year:2008,url:'/boardgame/35677/le-havre'},
   {name:'Imperium: Classics',reduced:'imperium',year:2021,url:'/boardgame/318184/imperium-classics'},
   {name:'Ambush!',reduced:'ambush',year:1983,url:'/boardgame/1608/ambush'},
   {name:'Tobago',reduced:'tobago',year:2009,url:'/boardgame/42215/tobago'},
   {name:'Myrmes',reduced:'myrmes',year:2012,url:'/boardgame/126792/myrmes'},
   {name:'Fresco',reduced:'fresco',year:2010,url:'/boardgame/66188/fresco'},
   {name:'China',reduced:'china',year:2005,url:'/boardgame/18100/china'},
   {name:'Project L',reduced:'projectl',year:2020,url:'/boardgame/260180/project-l'},
   {name:'War Chest',reduced:'warchest',year:2018,url:'/boardgame/249259/war-chest'},
   {name:'Kanban EV',reduced:'kanbanev',year:2020,url:'/boardgame/284378/kanban-ev'},
   {name:'Lanterns: The Harvest Festival',reduced:'lanterns',year:2015,url:'/boardgame/160851/lanterns-harvest-festival'},
   {name:'Yamataa??',reduced:'yamatai',year:2017,url:'/boardgame/213893/yamatai'},
   {name:'Sub Terra',reduced:'subterra',year:2017,url:'/boardgame/204472/sub-terra'},
   {name:'Meadow',reduced:'meadow',year:2021,url:'/boardgame/314491/meadow'},
   {name:'Coconuts',reduced:'coconuts',year:2013,url:'/boardgame/145639/coconuts'},
   {name:'Bonfire',reduced:'bonfire',year:2020,url:'/boardgame/304420/bonfire'},
   {name:'Parade',reduced:'parade',year:2007,url:'/boardgame/56692/parade'},
   {name:'Las Vegas',reduced:'lasvegas',year:2012,url:'/boardgame/117959/las-vegas'},
   {name:'Qwirkle',reduced:'qwirkle',year:2006,url:'/boardgame/25669/qwirkle'},
   {name:'Village',reduced:'village',year:2011,url:'/boardgame/104006/village'},
   {name:'Friday',reduced:'friday',year:2011,url:'/boardgame/43570/friday'},
   {name:'Attika',reduced:'attika',year:2003,url:'/boardgame/8051/attika'},
   {name:'Suburbia',reduced:'suburbia',year:2012,url:'/boardgame/123260/suburbia'},
   {name:'Pan Am',reduced:'panam',year:2020,url:'/boardgame/303057/pan-am'},
   {name:'Smash Up',reduced:'smashup',year:2012,url:'/boardgame/122522/smash'},
   {name:'Akrotiri',reduced:'akrotiri',year:2014,url:'/boardgame/154458/akrotiri'},
   {name:'Fugitive',reduced:'fugitive',year:2017,url:'/boardgame/197443/fugitive'},
   {name:'Domaine',reduced:'domaine',year:2003,url:'/boardgame/5737/domaine'},
   {name:'TZAAR',reduced:'tzaar',year:2007,url:'/boardgame/31999/tzaar'},
   {name:'Manila',reduced:'manila',year:2005,url:'/boardgame/15817/manila'},
   {name:'Hardback',reduced:'hardback',year:2018,url:'/boardgame/223750/hardback'},
   {name:'Star Wars: Armada',reduced:'starwars',year:2015,url:'/boardgame/163745/star-wars-armada'},
   {name:'Cyclades',reduced:'cyclades',year:2009,url:'/boardgame/54998/cyclades'},
   {name:'Rococo',reduced:'rococo',year:2013,url:'/boardgame/144344/rococo'},
   {name:'Argent: The Consortium',reduced:'argent',year:2015,url:'/boardgame/144797/argent-consortium'},
   {name:'Endeavor',reduced:'endeavor',year:2009,url:'/boardgame/33160/endeavor'},
   {name:'Cribbage',reduced:'cribbage',year:1630,url:'/boardgame/2398/cribbage'},
   {name:'Abyss',reduced:'abyss',year:2014,url:'/boardgame/155987/abyss'},
   {name:'PARKS',reduced:'parks',year:2019,url:'/boardgame/266524/parks'},
   {name:'San Juan',reduced:'sanjuan',year:2004,url:'/boardgame/8217/san-juan'},
   {name:'Louis XIV',reduced:'louisxiv',year:2005,url:'/boardgame/13642/louis-xiv'},
   {name:'Jamaica',reduced:'jamaica',year:2007,url:'/boardgame/28023/jamaica'},
   {name:'Mission: Red Planet ',reduced:'mission',year:2015,url:'/boardgame/176920/mission-red-planet-second-edition'},
   {name:'Vinci',reduced:'vinci',year:1999,url:'/boardgame/60/vinci'},
   {name:'Wizard',reduced:'wizard',year:1984,url:'/boardgame/1465/wizard'},
   {name:'Hawaii',reduced:'hawaii',year:2011,url:'/boardgame/106217/hawaii'},
   {name:'Panamax',reduced:'panamax',year:2014,url:'/boardgame/131287/panamax'},
   {name:'Tzolkin: The Mayan Calendar',reduced:'tzolkin',year:2012,url:'/boardgame/126163/tzolk-mayan-calendar'},
   {name:'Caylus',reduced:'caylus',year:2005,url:'/boardgame/18602/caylus'},
   {name:'Luxor',reduced:'luxor',year:2018,url:'/boardgame/245643/luxor'},
   {name:'Legacy: The Testament of Duke de Crecy',reduced:'legacy',year:2013,url:'/boardgame/52461/legacy-testament-duke-de-crecy'},
   {name:'Diamonds: Second Edition',reduced:'diamonds',year:2014,url:'/boardgame/152162/diamonds-second-edition'},
   {name:'Taluva',reduced:'taluva',year:2006,url:'/boardgame/24508/taluva'},
   {name:'Scoville',reduced:'scoville',year:2014,url:'/boardgame/145659/scoville'},
   {name:'Unfair',reduced:'unfair',year:2017,url:'/boardgame/179172/unfair'},
   {name:'Cthulhu: Death May Die',reduced:'cthulhu',year:2019,url:'/boardgame/253344/cthulhu-death-may-die'},
   {name:'Jaipur',reduced:'jaipur',year:2009,url:'/boardgame/54043/jaipur'},
   {name:'Furnace',reduced:'furnace',year:2021,url:'/boardgame/318084/furnace'},
   {name:'Clank!: A Deck-Building Adventure',reduced:'clank',year:2016,url:'/boardgame/201808/clank-deck-building-adventure'},
   {name:'Mahjong',reduced:'mahjong',year:1850,url:'/boardgame/2093/mahjong'},
   {name:'Lowlands',reduced:'lowlands',year:2018,url:'/boardgame/242804/lowlands'},
   {name:'Kanagawa',reduced:'kanagawa',year:2016,url:'/boardgame/200147/kanagawa'},
   {name:'Barrage',reduced:'barrage',year:2019,url:'/boardgame/251247/barrage'},
   {name:'Trains',reduced:'trains',year:2012,url:'/boardgame/121408/trains'},
   {name:'Android: Netrunner',reduced:'android',year:2012,url:'/boardgame/124742/android-netrunner'},
   {name:'DVONN',reduced:'dvonn',year:2001,url:'/boardgame/2346/dvonn'},
   {name:'The Crew: The Quest for Planet Nine',reduced:'thecrew',year:2019,url:'/boardgame/284083/crew-quest-planet-nine'},
   {name:'San Marco',reduced:'sanmarco',year:2001,url:'/boardgame/1041/san-marco'},
   {name:'Alhambra',reduced:'alhambra',year:2003,url:'/boardgame/6249/alhambra'},
   {name:'London',reduced:'london',year:2010,url:'/boardgame/65781/london'},
   {name:'Mr. Jack',reduced:'mrjack',year:2006,url:'/boardgame/21763/mr-jack'},
   {name:'Scythe',reduced:'scythe',year:2016,url:'/boardgame/169786/scythe'},
   {name:'Star Trek: Ascendancy',reduced:'startrek',year:2016,url:'/boardgame/193949/star-trek-ascendancy'},
   {name:'Cerebria: The Inside World',reduced:'cerebria',year:2018,url:'/boardgame/218479/cerebria-inside-world'},
   {name:'Macao',reduced:'macao',year:2009,url:'/boardgame/55670/macao'},
   {name:'Spyrium',reduced:'spyrium',year:2013,url:'/boardgame/137269/spyrium'},
   {name:'Wiz-War',reduced:'wizwar',year:2012,url:'/boardgame/104710/wiz-war-eighth-edition'},
   {name:'Troyes',reduced:'troyes',year:2010,url:'/boardgame/73439/troyes'},
   {name:'Elysium',reduced:'elysium',year:2015,url:'/boardgame/163968/elysium'},
   {name:'Paleo',reduced:'paleo',year:2020,url:'/boardgame/300531/paleo'},
   {name:'Descent: Journeys in the Dark',reduced:'descent',year:2005,url:'/boardgame/17226/descent-journeys-dark'},
   {name:'Firefly: The Game',reduced:'firefly',year:2013,url:'/boardgame/138161/firefly-game'},
   {name:'Qwixx',reduced:'qwixx',year:2012,url:'/boardgame/131260/qwixx'},
   {name:'Just One',reduced:'justone',year:2018,url:'/boardgame/254640/just-one'},
   {name:'Stone Age',reduced:'stoneage',year:2008,url:'/boardgame/34635/stone-age'},
   {name:'Canvas',reduced:'canvas',year:2021,url:'/boardgame/290236/canvas'},
   {name:'Nexus Ops',reduced:'nexusops',year:2005,url:'/boardgame/15363/nexus-ops'},
   {name:'Takenoko',reduced:'takenoko',year:2011,url:'/boardgame/70919/takenoko'},
   {name:'My City',reduced:'mycity',year:2020,url:'/boardgame/295486/my-city'},
   {name:'Caverna: The Cave Farmers',reduced:'caverna',year:2013,url:'/boardgame/102794/caverna-cave-farmers'},
   {name:'La Citta ',reduced:'lacitta ',year:2000,url:'/boardgame/554/la-citta'},
   {name:'Tsuro',reduced:'tsuro',year:2004,url:'/boardgame/16992/tsuro'},
   {name:'Calico',reduced:'calico',year:2020,url:'/boardgame/283155/calico'},
   {name:'Acquire',reduced:'acquire',year:1964,url:'/boardgame/5/acquire'},
   {name:'Diamant',reduced:'diamant',year:2005,url:'/boardgame/15512/diamant'},
   {name:'Medici',reduced:'medici',year:1995,url:'/boardgame/46/medici'},
   {name:'Samurai',reduced:'samurai',year:1998,url:'/boardgame/3/samurai'},
   {name:'Belfort',reduced:'belfort',year:2011,url:'/boardgame/50750/belfort'},
   {name:'Agricola',reduced:'agricola',year:2007,url:'/boardgame/31260/agricola'},
   {name:'Ethnos',reduced:'ethnos',year:2017,url:'/boardgame/206718/ethnos'},
   {name:'Kemet',reduced:'kemet',year:2012,url:'/boardgame/127023/kemet'},
   {name:'Morels',reduced:'morels',year:2012,url:'/boardgame/122298/morels'},
   {name:'Quantum',reduced:'quantum',year:2013,url:'/boardgame/143519/quantum'},
   {name:'The Duke',reduced:'theduke',year:2013,url:'/boardgame/36235/duke'},
   {name:'Oceans',reduced:'oceans',year:2020,url:'/boardgame/232414/oceans'},
   {name:'Up Front',reduced:'upfront',year:1983,url:'/boardgame/586/front'},
   {name:'Shogun',reduced:'shogun',year:2006,url:'/boardgame/20551/shogun'},
   {name:'Middara: Unintentional Malum ???????? Act 1',reduced:'middara',year:2019,url:'/boardgame/169427/middara-unintentional-malum-act-1'},
   {name:'Tikal',reduced:'tikal',year:1999,url:'/boardgame/54/tikal'},
   {name:'Targi',reduced:'targi',year:2012,url:'/boardgame/118048/targi'},
   {name:'Blackout: Hong Kong',reduced:'blackout',year:2018,url:'/boardgame/262215/blackout-hong-kong'},
   {name:'ZhanGuo',reduced:'zhanguo',year:2014,url:'/boardgame/160495/zhanguo'},
   {name:'Fleet: The Dice Game',reduced:'fleet',year:2018,url:'/boardgame/245961/fleet-dice-game'},
   {name:'Tichu',reduced:'tichu',year:1991,url:'/boardgame/215/tichu'},
   {name:'Imperial',reduced:'imperial',year:2006,url:'/boardgame/24181/imperial'},
   {name:'Citadels',reduced:'citadels',year:2000,url:'/boardgame/478/citadels'},
   {name:'PitchCar',reduced:'pitchcar',year:1995,url:'/boardgame/150/pitchcar'},
   {name:'Everdell',reduced:'everdell',year:2018,url:'/boardgame/199792/everdell'},
   {name:'Gizmos',reduced:'gizmos',year:2018,url:'/boardgame/246192/gizmos'},
   {name:'Taj Mahal',reduced:'tajmahal',year:2000,url:'/boardgame/475/taj-mahal'},
   {name:'Signorie',reduced:'signorie',year:2015,url:'/boardgame/177678/signorie'},
   {name:'Coimbra',reduced:'coimbra',year:2018,url:'/boardgame/245638/coimbra'},
   {name:'ZeRTZ',reduced:'zertz',year:1999,url:'/boardgame/528/zertz'},
   {name:'Pipeline',reduced:'pipeline',year:2019,url:'/boardgame/256730/pipeline'},
   {name:'Survive: Escape from Atlantis!',reduced:'survive',year:1982,url:'/boardgame/2653/survive-escape-atlantis'},
   {name:'Eclipse',reduced:'eclipse',year:2011,url:'/boardgame/72125/eclipse'},
   {name:'Hanabi',reduced:'hanabi',year:2010,url:'/boardgame/98778/hanabi'},
   {name:'Seasons',reduced:'seasons',year:2012,url:'/boardgame/108745/seasons'},
   {name:'Empires: Age of Discovery',reduced:'empires',year:2015,url:'/boardgame/173442/empires-age-discovery'},
   {name:'Ex Libris',reduced:'exlibris',year:2017,url:'/boardgame/201825/ex-libris'},
   {name:'Bruges',reduced:'bruges',year:2013,url:'/boardgame/136888/bruges'},
   {name:'Bora Bora',reduced:'borabora',year:2013,url:'/boardgame/127060/bora-bora'},
   {name:'Witness',reduced:'witness',year:2014,url:'/boardgame/164265/witness'},
   {name:'Zendo',reduced:'zendo',year:2001,url:'/boardgame/6830/zendo'},
   {name:'No Thanks!',reduced:'nothanks',year:2004,url:'/boardgame/12942/no-thanks'},
   {name:'Bridge',reduced:'bridge',year:1925,url:'/boardgame/2181/bridge'},
   {name:'Clinic: Deluxe Edition',reduced:'clinic',year:2020,url:'/boardgame/272739/clinic-deluxe-edition'},
   {name:'Paris: La Cite de la Lumia??re',reduced:'paris',year:2019,url:'/boardgame/276498/paris-la-cite-de-la-lumiere'},
   {name:'Concept',reduced:'concept',year:2013,url:'/boardgame/147151/concept'},
   {name:'Glen More',reduced:'glenmore',year:2010,url:'/boardgame/66362/glen-more'},
   {name:'La Granja',reduced:'lagranja',year:2014,url:'/boardgame/146886/la-granja'},
   {name:'Dixit: Odyssey',reduced:'dixit',year:2011,url:'/boardgame/92828/dixit-odyssey'},
   {name:'Brass: Lancashire',reduced:'brass',year:2007,url:'/boardgame/28720/brass-lancashire'},
   {name:'For Sale',reduced:'forsale',year:1997,url:'/boardgame/172/sale'},
   {name:'Haggis',reduced:'haggis',year:2010,url:'/boardgame/37628/haggis'},
   {name:'Linko!',reduced:'linko',year:2014,url:'/boardgame/153065/linko'},
   {name:'ICECOOL',reduced:'icecool',year:2016,url:'/boardgame/177524/icecool'},
   {name:'Ark Nova',reduced:'arknova',year:2021,url:'/boardgame/342942/ark-nova'},
   {name:'Finca',reduced:'finca',year:2009,url:'/boardgame/40628/finca'},
   {name:'KeyForge: Call of the Archons',reduced:'keyforge',year:2018,url:'/boardgame/257501/keyforge-call-archons'},
   {name:'Celestia',reduced:'celestia',year:2015,url:'/boardgame/175117/celestia'},
   {name:'Dixit: Journey',reduced:'dixit',year:2012,url:'/boardgame/121288/dixit-journey'},
   {name:'Sagrada',reduced:'sagrada',year:2017,url:'/boardgame/199561/sagrada'},
   {name:'Magic: The Gathering',reduced:'magic',year:1993,url:'/boardgame/463/magic-gathering'},
   {name:'Rurik: Dawn of Kiev',reduced:'rurik',year:2019,url:'/boardgame/228328/rurik-dawn-kiev'},
   {name:'Cat Lady',reduced:'catlady',year:2017,url:'/boardgame/228504/cat-lady'},
   {name:'Ikusa',reduced:'ikusa',year:1986,url:'/boardgame/221/ikusa'},
   {name:'Catan',reduced:'catan',year:1995,url:'/boardgame/13/catan'},
   {name:'Yspahan',reduced:'yspahan',year:2006,url:'/boardgame/22345/yspahan'},
   {name:'YINSH',reduced:'yinsh',year:2003,url:'/boardgame/7854/yinsh'},
   {name:'Maharaja: The Game of Palace Building in India',reduced:'maharaja',year:2004,url:'/boardgame/9440/maharaja-game-palace-building-india'},
   {name:'Conan',reduced:'conan',year:2016,url:'/boardgame/160010/conan'},
   {name:'Torres',reduced:'torres',year:1999,url:'/boardgame/88/torres'},
   {name:'Imhotep',reduced:'imhotep',year:2016,url:'/boardgame/191862/imhotep'},
   {name:'Splendor',reduced:'splendor',year:2014,url:'/boardgame/148228/splendor'},
   {name:'Runewars',reduced:'runewars',year:2010,url:'/boardgame/59294/runewars'},
   {name:'Polis: Fight for the Hegemony',reduced:'polis',year:2012,url:'/boardgame/69779/polis-fight-hegemony'},
   {name:'Mombasa',reduced:'mombasa',year:2015,url:'/boardgame/172386/mombasa'},
   {name:'Onirim ',reduced:'onirim',year:2014,url:'/boardgame/156336/onirim-second-edition'},
   {name:'Cryptid',reduced:'cryptid',year:2018,url:'/boardgame/246784/cryptid'},
   {name:'Spyfall',reduced:'spyfall',year:2014,url:'/boardgame/166384/spyfall'},
   {name:'Steam',reduced:'steam',year:2009,url:'/boardgame/27833/steam'},
   {name:'Wendake',reduced:'wendake',year:2017,url:'/boardgame/229265/wendake'},
   {name:'Outlive',reduced:'outlive',year:2017,url:'/boardgame/191051/outlive'},
   {name:'Unlock!: Escape Adventures ???????? Squeek & Sausage',reduced:'unlock',year:2017,url:'/boardgame/216092/unlock-escape-adventures-squeek-sausage'},
   {name:'The Crew: Mission Deep Sea',reduced:'thecrew',year:2021,url:'/boardgame/324856/crew-mission-deep-sea'},
   {name:'Valeria: Card Kingdoms',reduced:'valeria',year:2016,url:'/boardgame/170561/valeria-card-kingdoms'},
   {name:'Fauna',reduced:'fauna',year:2008,url:'/boardgame/35497/fauna'},
   {name:'Karuba',reduced:'karuba',year:2015,url:'/boardgame/183251/karuba'},
   {name:'Merlin',reduced:'merlin',year:2017,url:'/boardgame/230933/merlin'},
   {name:'Nippon',reduced:'nippon',year:2015,url:'/boardgame/154809/nippon'},
   {name:'Formula D',reduced:'formulad',year:2008,url:'/boardgame/37904/formula-d'},
   {name:'Nova Luna',reduced:'novaluna',year:2019,url:'/boardgame/284435/nova-luna'},
   {name:'Century: Spice Road',reduced:'century',year:2017,url:'/boardgame/209685/century-spice-road'},
   {name:'Freedom: The Underground Railroad',reduced:'freedom',year:2012,url:'/boardgame/119506/freedom-underground-railroad'},
   {name:'Cacao',reduced:'cacao',year:2015,url:'/boardgame/171499/cacao'},
   {name:'Dice Town',reduced:'dicetown',year:2009,url:'/boardgame/40793/dice-town'},
   {name:'Majesty: For the Realm',reduced:'majesty',year:2017,url:'/boardgame/230080/majesty-realm'},
   {name:'Gold West',reduced:'goldwest',year:2015,url:'/boardgame/154086/gold-west'},
   {name:'Decrypto',reduced:'decrypto',year:2018,url:'/boardgame/225694/decrypto'},
   {name:'Hannibal: Rome vs. Carthage',reduced:'hannibal',year:1996,url:'/boardgame/234/hannibal-rome-vs-carthage'},
   {name:'Amun-Re',reduced:'amunre',year:2003,url:'/boardgame/5404/amun-re'},
   {name:'Chess',reduced:'chess',year:1475,url:'/boardgame/171/chess'},
   {name:'Orleans',reduced:'orleans',year:2014,url:'/boardgame/164928/orleans'},
   {name:'Nemesis',reduced:'nemesis',year:2018,url:'/boardgame/167355/nemesis'},
   {name:'Not Alone',reduced:'notalone',year:2016,url:'/boardgame/194879/not-alone'},
   {name:'Cascadia',reduced:'cascadia',year:2021,url:'/boardgame/295947/cascadia'},
   {name:'Last Will',reduced:'lastwill',year:2011,url:'/boardgame/97842/last-will'},
   {name:'Hadara',reduced:'hadara',year:2019,url:'/boardgame/269144/hadara'},
   {name:'Pandemic',reduced:'pandemic',year:2008,url:'/boardgame/30549/pandemic'},
   {name:'Onitama',reduced:'onitama',year:2014,url:'/boardgame/160477/onitama'},
   {name:'Thebes',reduced:'thebes',year:2007,url:'/boardgame/30869/thebes'},
   {name:'KLASK',reduced:'klask',year:2014,url:'/boardgame/165722/klask'},
   {name:'Tekhenu: Obelisk of the Sun',reduced:'tekhenu',year:2020,url:'/boardgame/297030/tekhenu-obelisk-sun'},
   {name:'Dixit',reduced:'dixit',year:2008,url:'/boardgame/39856/dixit'},
   {name:'Batman: Gotham City Chronicles',reduced:'batman',year:2019,url:'/boardgame/222514/batman-gotham-city-chronicles'},
   {name:'Trajan',reduced:'trajan',year:2011,url:'/boardgame/102680/trajan'},
   {name:'Vinhos',reduced:'vinhos',year:2010,url:'/boardgame/42052/vinhos'},
   {name:'Tokaido',reduced:'tokaido',year:2012,url:'/boardgame/123540/tokaido'},
   {name:'Newton',reduced:'newton',year:2018,url:'/boardgame/244711/newton'},
   {name:'Escape: The Curse of the Temple',reduced:'escape',year:2012,url:'/boardgame/113294/escape-curse-temple'},
]

export default titles1000
