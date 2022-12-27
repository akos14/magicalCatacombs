Varázslatos katakomba
motto.pngNekeresdországban Nevenincs királynak egyik szeme sír, a másik nevet. Nevet, mert tündérszép lányának kérője akadt, és sír, mert a kiváló kérőből nem egy, hanem több is van. Hát most hogyan döntse el, melyiknek adja lánya kezét és fele királyságát? Gondolja kikéri udvari tanácsosa, Furfang véleményét. Az udvari tanácsos nevéhez illő ötlettel áll elő: állítsák próba elé a kérőket, s aki a legrátermettebbnek bizonyul, az nyerje el a szépséges királylány kezét. Van a várnak egy elvarázsolt katakombája, ahol a szobák helye folyamatosan változtatható. Ebben rejtenek el kincseket, s az a kérő nyeri el a királylány kezét, aki a leghamarabb szedi össze a rábízott kincseket.

maze.png

A játék leírása
A katakomba szobáit egy 7x7-es négyzetrács cellái jelképezik. Minden szoba esetén adott, hogy mely falain van ajtó. Ha két szomszédos szoba érintkező falán egy-egy ajtó van, akkor át lehet menni egyik szobából a másikba. A négyzetrács páros sorait és oszlopait el lehet tolni, a többi szoba végig rögzített a játék során. Az eltolásokkal az ajtókon keresztül utak nyílnak a szobák között, így lehet eljutni a kincsekhez. Mindegyik kérő arra törekszik, hogy a katakomba szobáinak ötletes eltolásával eljusson a kincsekhez. Aki elsőként találja meg mindahányat és kiindulópontjára sikeresen visszaérkezik az a nyertes.

fix.png

before.png

Megjegyzés: a jobb oldali ábrán és majd a következő két ábrán a jobb oldali világoskék csík "véletlenül" került oda, a plusz elem miatt jelent meg. Ennek megjelenítése nem elvárás, sőt csúnya megoldásnak számít!

A játék elején a szobákat véletlen sorrendben és véletlen irányban kirakjuk a játéktábla szabad mezőire. A szobák közül az egyik mindenképpen fölösleges marad. A játék folyamán majd mindig az éppen kimaradó szobát használjuk a többi szoba elcsúsztatására. A játékban legfeljebb 24 kincset kell megtalálni. Ezeket véletlen sorrendben felrakjuk a táblára úgy, hogy egy mezőn csak egy kincs lehet, és a sarokba nem rakhatunk, majd az ezeket jelző kártyákat összekeverjük, és egyenlő számban szétosztjuk a játékosok között, felfedve mindig a legfelső kártyát. A játékosokat jelző figurákat a tábla külön sarkaiba helyezzük.

shift.png

after.png

A játék során minden játékosnak a kincsei közül azt kell megszereznie, amit az aktuálisan legfelső, mindenki által látható kincskártya mutat. Arra a mezőre kell eljutni. Ahhoz, hogy a célt elérje, a játékosnak

először a katakombát kell átalakítania a kimaradt szoba becsúsztatásával, és
lépnie mindig csak ez után szabad a figurájával.
A katakomba átalakítása a következőképpen történik: A játékos a kimaradt szobát (tetszőlegesen elforgatva) valamelyik oldalról becsúsztathatja a játéktábla területére egy szabadon mozgó sor vagy oszlop szélén, aminek következtében az átellenes oldalon kiesik egy másik szoba. A tábla szélén nyilak jelzik azokat a helyeket, ahol a szobát be lehet csúsztatni. A szoba bárhol betolható, kivétel ott, ahol az imént kilökődött. Nem szabad tehát az előző játékos lépését rögtön „visszacsinálni". Ha a szobák eltolása során a szobával együtt egy figura is kitolódnék – akár másé, akár a miénk -, akkor ezt a figurát az ellenkező oldalról imént becsúsztatott szobába kell helyezni.

A szobák eltolását követi a játékos lépése a figurával. A katakomba minden olyan pontjáig el lehet jutni, amelyet a kiindulóponttal folyamatos járatvonal köt össze. Az ilyen járatokban tehát olyan messzire mehetünk el, amilyen messzire csak akarunk, vagyis nem számít, hogy hány szobán lépkedünk végig. Nem kötelező lépni. Figuránkat akár ott is hagyhatjuk, ahol éppen van. Egy mezőn több figura is állhat: a figurák nem ütik ki egymást. Ha valaki nem tud rögtön céljáig eljutni, akkor figurájával addig a pontig célszerű elmennie, ahol feltehetőleg jó helyzetben várhatja következő lépést. Ha valaki elérte a felfedett kincskártya által megjelölt célt, akkor felfedi a következőt, és most ehhez a célhoz igyekszik eljutni, stb.

A játék akkor ér véget, ha egy játékos az összes kincskártyájához tartozó kincset megszerezte, és visszavezette a figuráját arra mezőre, ahonnan elindult. Az a győztes, aki valamennyi kincsét megtalálta és figuráját elsőként juttatta vissza a kiindulópontra.

A játék megvalósítása
Kezdőképernyő
Legyen egy kezdőképernyő, ahol a játék paramétereit lehet beállítani:

hány játékos (1-4) -- alapértelmezetten 2
játékosonként hány kincskártya (1-(24/játékosok száma)) -- alapértelmezetten 2
Egy start gomb megnyomásával megjelenik a játéktér.

Egy másik gomb megnyomásával a játék leírása jelenik meg.

Figyelem! Ezek nem külön oldalak, hanem csak megjelenített vagy elrejtett panelek. Az egész játék egy HTML oldalon legyen!

Játéktér előkészítése
A játéktérnek a következő elemeket kell tartalmaznia:

a pályát, ami egy 7x7-es négyzetrács, rajta
a fixelemek (ld ábra)
a mozgatható elemek véletlenszerűen elforgatva és elhelyezve
13 db egyenes
15 db kanyar
6 db hármas elágazás
kincsek az elemeken (együtt mozognak velük)
egy elemen legfeljebb 1 kincs lehet
sarokba nem rakhatunk kincset
a kincset színnel, számmal, egyedi grafikai elemekkel jelölhetjük (gyűrű, drágakő)
figurák a sarokban (színnel vagy számmal jelölve)
a kimaradt, betolandó elem
az egyes játékosok adatait
hányadik játékos
aktuális kincskártyája
hányból hányat teljesített
az aktuális játékos jelzése
Az éppen soros játékost valamilyen módon jelezzük. Ő lép.

Katakomba átalakítása
A kimaradt szoba elemet be kell csúsztatni valamelyik páros oszlopba vagy sorba, valamelyik oldalról. Legyen lehetőség a szobaelemet 90 fokkal forgatni (pl. jobb kattintás). Legyen lehetőség a szobaelemet egy mozgó sorba betolni, pl. a nyilacskák valamelyikére kattintva. (Pro: a nyilacskák fölé víve az egeret a szobát odahelyezhetjük, hogy lássuk a sorral együtt. Jobb gombbal forgatjuk, bal kattintásra betoljuk.) A mozgás során minden mozog a szobákkal együtt: a figurák, a kincsek. Ha figura esik le, akkor ciklikusan a másik oldalra kell helyeznünk. A szobák eltolását animációval tegyük szemléletessé.

Lépés a figurával
Az átalakítás után az aktuális játékos léphet. Jelöljük meg más színnel azokat a szobákat, amelyek az adott pontról elérhetők, beleértve a jelenlegi szobát is. Egy ilyen szobára kattintva a figura áthelyeződik. Ha azon a helyen, ahova a figura lépett az adott játékos által aktuálisan megszerzendő kincs van, akkor azt teljesítette, és a következőt kell felfedni a saját kincskártyái közül. Ha minden cél megvan és a játékos aktuális pozíciója lépés után a kiindulási helye, akkor a játék véget ér.

A lépés animációval történjen.

A lépés tekintetében alapvető elvárás a szomszéd szobákba lépés. Plusz pontért lehet az ajtókon keresztül elérhető összes szobát kijelölni lépésre (gráfbejárás).

A játék vége
A játék végén írjuk ki a győztes játékos számát, majd legyen lehetőség új játékot kezdeni.

Játék mentése
Ugyancsak plusz pontért lehessen félbehagyni és elmenteni az aktuális játékot a böngésző helyi tárolójába. A főképernyőn pedig jelezzük, ha van ilyen mentés, és legyen lehetőség a mentett játékot folytatni.

További elvárások
Fontos az igényes megjelenés. Ez nem feltétlenül jelenti egy agyon csicsázott oldal elkészítését, de azt igen, hogy 1024x768 felbontásban és a fölött az elrendezés jól jelenjen meg, a játéktábla négyzetes cellákat tartalmazzon. Ehhez lehet minimalista designt is alkalmazni, lehet különböző háttérképekkel és grafikus elemekkel felturbózott saját CSS-t készíteni, de lehet bármilyen CSS keretrendszer segítségét is igénybe venni.

Nincs elvárás arra vonatkozóan, hogy milyen technológiával (táblázat, div-ek vagy canvas) oldod meg a feladatot, továbbá a megjelenést és működést illetően sincsenek kőbe vésett elvárások. A lényeg, hogy a fenti feladatok felismerhetők legyenek, és a játék jól játszható legyen.

Segítség
Első lépésként alakítsd ki a játékhoz szükséges elemeket. Ha nem canvast használsz, akkor készítsd el a játék HTML és CSS statikus prototípusát. Kísérletezd ki és készítsd elő a szükséges elemeket:

hogyan valósítod meg a rácsos elrendezést?
táblázat?
abszolútan pozícionált elemek?
flexbox?
CSS grid?
hogyan jelenítesz meg egy szobát?
az ajtókat
hogy lesz forgatható?
hogyan raksz rá kincset, hogy jól látható legyen?
szöveg?
szám?
szín?
kép?
hogyan jelzed egy szobában a benne lévő figurákat?
mi van ha többen vannak?
ha animációban gondolkozol, akkor az első lépésben kiválasztott technológia támogatja a sorok, oszlopok eltolását?
kísérletezd ki, pl statikusan hover-rel az egeret föléhúzva
hogy jeleníted meg a nyilacskákat a tábla mellett?
a plusz szobát hova rakod?
külön helyre?
vagy mindig a kitolás helyén marad?
hogyan jeleníted meg az egyes játékosok adatait?
a kezdőképernyő hogyan néz ki?
Ezekhez mind nem kell programozás, hanem csak HTML és CSS.

A következő lépés, hogy találd ki, hogy a játékhoz milyen adatok szükségesek, és ezeket milyen adatszerkezetben tárolod?

a játéktér
a szobák pozíciója
a szoba típusa (egyenes, kanyar, hármas)
a szobák forgatása
a kincsek pozíciója
a figurák kezdeti és aktuális pozíciója
a játékosok "kezében" lévő kincskártyák
a leeső szoba
stb.
Ezeken milyen műveletekre lesz szükség?

hogyan oldod meg a szoba becsúsztatását?
az elérhető szobák kiválasztását?
a különböző ellenőrzéseket?
a kincs felvételét
új kincskártya felfedését
stb
Milyen események lesznek az oldalon?

esemény típusa?
mi jelzi?
milyen szinten kell kezelni?
buborékolás és delegálás szükséges?
A játékban fontos lépés az előkészület, hogy a játékteret legeneráljuk, a szobákat véletlenszerűen elforgassuk, felrakjuk, a kincskártyákat kiosszuk a játékosoknak. Utána két fontos lépést kell jól átgondolni:

milyen események kellenek a katakomba átalakításához, és
hogyan kell lépni
Ezek ismétlődnek a játékban.

Egy nagyobb feladatnál nem látunk át előre mindent. A fenti lépéseket lehet részfeladatonként alkalmazni. A HTML, CSS fázist nem kell feltétlenül kis lépésekre bontani, meg lehet előre tervezni az egész felületet. A JavaScript logika fejlesztésénél viszont érdemes kis lépésekben haladni. Egyszerre egy dolog működjön.

Pontozás
A feladat megoldásával 20 pont szerezhető. Vannak minimum elvárások, melyek teljesítése nélkül a beadandó nem elfogadható. A plusz feladatokért további 5 pont szerezhető. Azaz ha valaki mindent megcsinál a beadandóra 25 pontot kaphat.

Minimálisan teljesítendő (enélkül nem fogadjuk el, 8 pont)
Egyéb: A "További elvárások" részben szereplő README.md fájl megfelelően kitöltve szerepel a feltöltött csomagban (0 pont)
Játéktér: A játéktér megjelenik. (0 pont)
Játéktér: Egy 7x7-es rácsban megjelennek a fix elemek. (1 pont)
Játéktér: Ugyanebben a rácsban megjelennek véletlenszerűen forgatva és elhelyezve a mozgatható elemek. (2 pont)
Játéktér: A rácsra fel van helyezve legalább 3 kincs véletlen helyre (kivéve a sarkokat) (0,5 pont)
Játéktér: A rácsra fel van helyezve legalább 1 játékos figurája (0,5 pont)
Katakomba átalakítása: A kimaradt szoba becsúsztatható egy mozgatható sorba vagy oszlopba. A katakomba szobái helyesen változnak. (2 pont)
Lépés: A figurával szabályosan lehet lépni a szomszédos mező valamelyikére. (2 pont)
Az alap feladatok (12 pont)
Kezdőképernyő: játékosszám beállítása (0,5 pont)
Kezdőképernyő: játékosonkénti kincskártyák számának beállítása (0,5 pont)
Kezdőképernyő: Start gombra megjelenik a játéktér (0,5 pont)
Kezdőképernyő: megtekinthető a játékleírás (0,5 pont)
Játéktér: a kincsek a beállításoknak megfelelően jelennek meg (0,5 pont)
Játéktér: a figurák a sarkokban megjelennek (0,5 pont)
Játéktér: kimaradt elem megjelenik (0,5 pont)
Játéktér: játékosadatok megjelennek (0,5 pont)
Játéktér: jelezve van, hogy melyik az aktuális játékos (0,5 pont)
Katakomba átalakítása: a kimaradt szoba forgatható becsúsztatás előtt (0,5 pont)
Katakomba átalakítása: a szobák eltolása animációval történik (1 pont)
Katakomba átalakítása: a kincsek abban a szobában maradnak, ahova az elején generáltuk őket (0,5 pont)
Katakomba átalakítása: leeső figura ciklikusan a másik oldalra kerül (0,5 pont)
Lépés: a szomszédos elérhető szobák jelölése (0,5 pont)
Lépés: a lépés animációval történik (1 pont)
Lépés: ha elérendő kincskártyára lépünk, akkor a játékos adatlapja helyesen változik (0,5 pont)
Lépés: ha minden kincs megvan, és a kiindulási pontra léptünk, akkor a játék vége van (0,5 pont)
Lépés: több figura jól jelenik meg egy mezőn (0,5 pont)
Vége: a győztes játékos száma megjelenik (0,5 pont)
Vége: egy gombra kattintva a játék újrakezdhető a kezdőképernyőtől (0,5 pont)
Egyéb: Igényes kialakítás (1 pont)
1 hét késés (-3 pont)
2 hét késés (-6 pont)
2 hétnél több késés (nincs elfogadva a beadandó, nincs jegy)
Plusz feladatok (plusz 5 pont)
Lépés: minden elérhető szoba jelölése (3 pont)
Mentés: játék közben egy gombra kattintva elmenthető az aktuális állapot (0,5 pont)
Mentés: a kezdőképernyőn megjelenik, ha van mentett állapot (0,5 pont)
Mentés: a kezdőképernyőn megjelenő mentett állapot betölthető (1 pont)