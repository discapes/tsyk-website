<script lang="ts">
	const qna = [
		[
			"[palautteet mobiiliversiosta ja isoista näytöistä]",
			"Paransin responsiivisuutta, ilmoittakaa jos on vielä ongelmia ja millä näytöillä.",
		],
		["Linkkeihin voisi lisätä myös Editan", "Lisätty."],
		[
			"uusi palikka kiukaan jälkeen oispa eliittiin kiitos",
			"Palautteeseen voi lähettää ehdotuksia uusille palikoille, lisään ne mielellään.",
		],
		[
			"Keskiviikon ENA01.6 ei näy",
			"Se ei näy myöskään tsykin virallisessa ruokavuorotaulukossa, joten en tiedä mihin kohtaan se kuuluu.",
		],
		[
			"Ruokailuvuorolaskuri ei näytä ollenkaan tiistai ruokavuoroja!!",
			"Jos tolleen käy niin laittakaa palautteeseen ko. tunti niin tiedän missä ongelma on.",
		],
		[
			"ruakavuorot eivät jää selaimen välimuistiin, vaan ne pitää kopioida aina uudestaan.",
			"Korjasin yhden mahdollisen syyn, toivottavasti toimii nyt.",
		],
		["kissi mirri", "joo"],
	];
	const qna2 = [
		[
			"Lukujärjestys ei säily itselläni ainakaan sivustolla. Voi johtua ihan omasta selaimestani, mutta aikasemmalla nettisivulla kun joskus oli niin toimi hyvin!",
			"Pahoittelut. Ongelmaa on ollut vaikea selvittää osin sen takia, että sivusto toimii joillakin selaimilla täysin oikein, ja joillakin ei. Testaan uusia korjauksia kun ehdin.",
		],
		[
			"Ruokavuorot ei valitse oikeaa kurssinumeroa, jos työjärjestykseen merkitty samalle tunnille monta moduulia. Eli esim jos tunti sisältää Ena01,02,03, niin ohjelma valitsee usein sen väärän, eikä sitä mikä löytyy ruokavuorolistasta",
			"Jep. Olen manuaalisesti joutunut korjaamaan asiaa lisäämällä ruokavuorotaulukosta otettuihin tietoihin mm. ENA02 ja ENA03 -kurssit ENA01-kurssin viereen.",
		],
		[
			"olis kiva jos oispa eliittiin sais sen että ruutuja vois ite lisätä (toki score boardis vaa vakiokokosten tulokset)",
			"Jos meinaat sitä, että siellä olisi esim. 5x5 ruudukko, tämä saattaa tulla vielä joskus.",
		],
		[
			"Olisko mahollista tehdä etusivun ikoneista saman kokoiset, jotta olisivat esteettisesti miellyttävempiä.",
			"Hoidettu! Nyt ne on kaikki neliöitä.",
		],
		["Oispa kielioppia", "🤓"],
		["Rakastan sua", "thx"],
		["moi", "moi"],
		["mur", "mur"],
		["DROP TABLE tuokset;", "hehheh hauska, onneks oli kirjoitusvirhe tai ois kanta kadonnu"],
	];
</script>

<div class="bg p-3 flex flex-col gap-5">
	<h3>Ilmoitukset</h3>
	<div class="p-3 bg max-w-md">
		<h4>ilmoitus</h4>
		<p class="text-stone-400">7.12.</p>
		<p>Ruokavuorot päivitetty 3. jaksolle, ja etusivulla näkyy mitä syödään</p>
	</div>
	<div class="p-3 bg max-w-3xl">
		<h4>vastauksia palautteisiin</h4>
		<p class="text-stone-400">23.11.</p>
		<p class="text-rose-200">
			&gt; Eliittilukio.fi:n tietoturvallisuutta on haukuttu jo muiden koulujen jäsenten toimesta.
			En usko, että tilien salasanoja scryptataan. Miten kommentoitte tietoturvallisuuttanne?
		</p>
		<p class="text-lime-200">
			Sivuston tietoturvallisuus on ihan samalla tasolla kun suosituimmatkin nettipalvelut.
			Pistemäärien hakemisessa palvelin lähettää vain pelinimen ja pistemäärän, eikä esimerkiksi
			sähköpostia. Palvelimen puolella salasanat suojataan Argon2-algoritmillä, joka on yksi
			maailman vahvimmista. Käytännössä tämä tarkoittaa sitä, että jos muuttuisin ilkeäksi ja
			haluisin katsoa jonkun henkilön salasanan, en sitä pysty itsekään tekemään. Salasanoja ei
			myöskään säilytetä clientillä (selaimessa), vaan kirjautumistunnukset vaihdetaan JWT-tokeniin,
			jolla tunnistaudutaan palveluun ensimmäisen kirjautumisen jälkeen. JWT:t taas on
			allekirjoitettu HS256:lla, johon sisältyvä SHA-256-hajautusfunktio on käytössä esimerkiksi
			pankeissa. Jos tämän onnistuu rikkomaan, pystyy vaikka siirtämään itselleen kaikki
			olemassaolevat Bitcoinit eli satoja miljardeja euroja. Palvelimessa on Debian 12
			-käyttöjärjestelmä turvapäivityksillä, ja sinne ei voi kirjautua salasanalla (pelkästään
			avaimella). Jos keneltäkään löytyy tähän parannettavaa, otan ideoita ilomielin ja kiitollisena
			vastaan. Myös kehittämiseen pääsee mukaan, kunhan osaa Rustia tai TypeScriptia.
		</p>
		<p class="text-lime-200">
			Kerttulin puolelta tulleen vandalismin kannalta haluan vielä selkeyttää, että ainoa helposti
			ohitettava järjestelmän osa on feikkien pistemäärien lähettäminen palvelimelle. Se on
			äärimmäisen helppoa, ja sen voi tehdä pelkällä selainsovelluksella noin minuutissa. En siksi
			ottaisi tosissaan ketään kyseisellä taidolla leveilevää. Miksi se on sitten niin helppoa?
			Yksinkertaisesti sen takia, että kunnollisen anti-cheatin lisääminen 2048-peliin on
			käytännössä mahdoton tehtävä. Tätä on yritetty muun muassa KSYKin lukion omassa pelissä -
			siinä anti-cheat lähettää jokaisen pelaajan tekemän siirron palvelimelle, joka tarkistaa
			johtavatko ne ilmoitettuun pistemäärään. Kun KSYKistä joskus kauan sitten laitettiin
			feikkipisteitä oispaeliitti-peliin, tein saman heille (ystävämielessä tietenkin). Anti-cheatin
			kiertämiseen riitti yhden täydellisen pelin generoiminen, jonka jälkeen kuka tahansa pystyi
			käyttämään ko. pelin siirtoja päästäkseen ykkössijalle. Eli jos monen eri ihmisen kauan
			kehittämä järjestelmä ei estänyt feikkipisteitä, tuskin yhden henkilön kannattaa tuhlata
			siihen aikaa. Joka tapauksessa kyse ei ole tietoturvasta, sillä se ei vaikuta käyttäjien
			tietojen salaisuuteen.
		</p>
		{#each qna2 as [q, a]}
			<p>
				<span class="text-rose-200">&gt; {q}</span><br />
				<span class="text-lime-200">{a}</span>
			</p>
		{/each}
	</div>
	<div class="p-3 bg max-w-md">
		<h4>vastauksia palautteisiin</h4>
		<p class="text-stone-400">29.10.</p>
		{#each qna as [q, a]}
			<p>
				<span class="text-rose-200">&gt; {q}</span><br />
				<span class="text-lime-200">{a}</span>
			</p>
		{/each}
	</div>
</div>
