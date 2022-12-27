# Játék
https://akos14.github.io/magicalCatacombs/

# Varázslatos katakomba
Nekeresdországban Nevenincs királynak egyik szeme sír, a másik nevet. Nevet, mert tündérszép lányának kérője akadt, és sír, mert a kiváló kérőből nem egy, hanem több is van. Hát most hogyan döntse el, melyiknek adja lánya kezét és fele királyságát? Gondolja kikéri udvari tanácsosa, Furfang véleményét. Az udvari tanácsos nevéhez illő ötlettel áll elő: állítsák próba elé a kérőket, s aki a legrátermettebbnek bizonyul, az nyerje el a szépséges királylány kezét. Van a várnak egy elvarázsolt katakombája, ahol a szobák helye folyamatosan változtatható. Ebben rejtenek el kincseket, s az a kérő nyeri el a királylány kezét, aki a leghamarabb szedi össze a rábízott kincseket.

## A játék leírása
A katakomba szobáit egy 7x7-es négyzetrács cellái jelképezik. Minden szoba esetén adott, hogy mely falain van ajtó. Ha két szomszédos szoba érintkező falán egy-egy ajtó van, akkor át lehet menni egyik szobából a másikba. A négyzetrács páros sorait és oszlopait el lehet tolni, a többi szoba végig rögzített a játék során. Az eltolásokkal az ajtókon keresztül utak nyílnak a szobák között, így lehet eljutni a kincsekhez. Mindegyik kérő arra törekszik, hogy a katakomba szobáinak ötletes eltolásával eljusson a kincsekhez. Aki elsőként találja meg mindahányat és kiindulópontjára sikeresen visszaérkezik az a nyertes.

### A játék eleje
A játék elején a szobákat véletlen sorrendben és véletlen irányban kirakjuk a játéktábla szabad mezőire. A szobák közül az egyik mindenképpen fölösleges marad. A játék folyamán majd mindig az éppen kimaradó szobát használjuk a többi szoba elcsúsztatására. A játékban legfeljebb 24 kincset kell megtalálni. Ezeket véletlen sorrendben felrakjuk a táblára úgy, hogy egy mezőn csak egy kincs lehet, és a sarokba nem rakhatunk, majd az ezeket jelző kártyákat összekeverjük, és egyenlő számban szétosztjuk a játékosok között, felfedve mindig a legfelső kártyát. A játékosokat jelző figurákat a tábla külön sarkaiba helyezzük.

### Játék közben
A játék során minden játékosnak a kincsei közül azt kell megszereznie, amit az aktuálisan legfelső, mindenki által látható kincskártya mutat. Arra a mezőre kell eljutni. Ahhoz, hogy a célt elérje, a játékosnak
 1. először a katakombát kell átalakítania a kimaradt szoba becsúsztatásával, és
 1. lépnie mindig csak ez után szabad a figurájával.

	
A katakomba átalakítása a következőképpen történik: A játékos a kimaradt szobát (tetszőlegesen elforgatva) valamelyik oldalról becsúsztathatja a játéktábla területére egy szabadon mozgó sor vagy oszlop szélén, aminek következtében az átellenes oldalon kiesik egy másik szoba. A tábla szélén nyilak jelzik azokat a helyeket, ahol a szobát be lehet csúsztatni. A szoba bárhol betolható, kivétel ott, ahol az imént kilökődött. Nem szabad tehát az előző játékos lépését rögtön „visszacsinálni". Ha a szobák eltolása során a szobával együtt egy figura is kitolódnék – akár másé, akár a miénk -, akkor ezt a figurát az ellenkező oldalról imént becsúsztatott szobába kell helyezni.

A szobák eltolását követi a játékos lépése a figurával. A katakomba minden olyan pontjáig el lehet jutni, amelyet a kiindulóponttal folyamatos járatvonal köt össze. Az ilyen járatokban tehát olyan messzire mehetünk el, amilyen messzire csak akarunk, vagyis nem számít, hogy hány szobán lépkedünk végig. Nem kötelező lépni. Figuránkat akár ott is hagyhatjuk, ahol éppen van. Egy mezőn több figura is állhat: a figurák nem ütik ki egymást. Ha valaki nem tud rögtön céljáig eljutni, akkor figurájával addig a pontig célszerű elmennie, ahol feltehetőleg jó helyzetben várhatja következő lépést. Ha valaki elérte a felfedett kincskártya által megjelölt célt, akkor felfedi a következőt, és most ehhez a célhoz igyekszik eljutni, stb.

### A játék vége
A játék akkor ér véget, ha egy játékos az összes kincskártyájához tartozó kincset megszerezte, és visszavezette a figuráját arra mezőre, ahonnan elindult. Az a győztes, aki valamennyi kincsét megtalálta és figuráját elsőként juttatta vissza a kiindulópontra.

## A játék megvalósítása
### Kezdőképernyő
Legyen egy kezdőképernyő, ahol a játék paramétereit lehet beállítani:
- hány játékos (1-4) -- alapértelmezetten 2
- játékosonként hány kincskártya (1-(24/játékosok száma)) -- alapértelmezetten 2

Egy start gomb megnyomásával megjelenik a játéktér.
Egy másik gomb megnyomásával a játék leírása jelenik meg.
Figyelem! Ezek nem külön oldalak, hanem csak megjelenített vagy elrejtett panelek. Az egész játék egy HTML oldalon legyen!

### Játéktér előkészítése
- A játéktérnek a következő elemeket kell tartalmaznia:
	- a pályát, ami egy 7x7-es négyzetrács, rajta
	- a fixelemek (ld ábra)
	-	a mozgatható elemek véletlenszerűen elforgatva és elhelyezve:
		-	13 db egyenes
		-	15 db kanyar
		-	6 db hármas elágazás
	-	kincsek az elemeken (együtt mozognak velük):
		-	egy elemen legfeljebb 1 kincs lehet
		-	sarokba nem rakhatunk kincset
		-	a kincset színnel, számmal, egyedi grafikai elemekkel jelölhetjük (gyűrű, drágakő)
	-	figurák a sarokban (színnel vagy számmal jelölve)
	-	a kimaradt, betolandó elem
-	az egyes játékosok adatait
	-	hányadik játékos
	-	aktuális kincskártyája
	-	hányból hányat teljesített
	-	az aktuális játékos jelzése

Az éppen soros játékost valamilyen módon jelezzük. Ő lép.

### Katakomba átalakítása
A kimaradt szoba elemet be kell csúsztatni valamelyik páros oszlopba vagy sorba, valamelyik oldalról. Legyen lehetőség a szobaelemet 90 fokkal forgatni (pl. jobb kattintás). Legyen lehetőség a szobaelemet egy mozgó sorba betolni, pl. a nyilacskák valamelyikére kattintva. (Pro: a nyilacskák fölé víve az egeret a szobát odahelyezhetjük, hogy lássuk a sorral együtt. Jobb gombbal forgatjuk, bal kattintásra betoljuk.) A mozgás során minden mozog a szobákkal együtt: a figurák, a kincsek. Ha figura esik le, akkor ciklikusan a másik oldalra kell helyeznünk. A szobák eltolását animációval tegyük szemléletessé.

### Lépés a figurával
Az átalakítás után az aktuális játékos léphet. Jelöljük meg más színnel azokat a szobákat, amelyek az adott pontról elérhetők, beleértve a jelenlegi szobát is. Egy ilyen szobára kattintva a figura áthelyeződik. Ha azon a helyen, ahova a figura lépett az adott játékos által aktuálisan megszerzendő kincs van, akkor azt teljesítette, és a következőt kell felfedni a saját kincskártyái közül. Ha minden cél megvan és a játékos aktuális pozíciója lépés után a kiindulási helye, akkor a játék véget ér.

A lépés animációval történjen.

A lépés tekintetében alapvető elvárás a szomszéd szobákba lépés. Plusz pontért lehet az ajtókon keresztül elérhető összes szobát kijelölni lépésre (gráfbejárás).

### A játék vége
A játék végén írjuk ki a győztes játékos számát, majd legyen lehetőség új játékot kezdeni.

### Játék mentése
Ugyancsak plusz pontért lehessen félbehagyni és elmenteni az aktuális játékot a böngésző helyi tárolójába. A főképernyőn pedig jelezzük, ha van ilyen mentés, és legyen lehetőség a mentett játékot folytatni.

### További elvárások
Fontos az igényes megjelenés. Ez nem feltétlenül jelenti egy agyon csicsázott oldal elkészítését, de azt igen, hogy 1024x768 felbontásban és a fölött az elrendezés jól jelenjen meg, a játéktábla négyzetes cellákat tartalmazzon. Ehhez lehet minimalista designt is alkalmazni, lehet különböző háttérképekkel és grafikus elemekkel felturbózott saját CSS-t készíteni, de lehet bármilyen CSS keretrendszer segítségét is igénybe venni.

Nincs elvárás arra vonatkozóan, hogy milyen technológiával (táblázat, div-ek vagy canvas) oldod meg a feladatot, továbbá a megjelenést és működést illetően sincsenek kőbe vésett elvárások. A lényeg, hogy a fenti feladatok felismerhetők legyenek, és a játék jól játszható legyen.
