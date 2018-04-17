var div = document.createElement("div");
div.setAttribute("class", "modal");
div.setAttribute("id", "modal");

function drawMap(data) {

    var rows = data['rows'];
    for (var i in rows) {
        if (rows[i][0] != 'Antarctica') {


            var newCoordinates = [];
            var geometries = rows[i][1]['geometries'];

            if (geometries) {
                for (var j in geometries) {
                    newCoordinates.push(constructNewCoordinates(geometries[j]));
                }
            } else {
                newCoordinates = constructNewCoordinates(rows[i][1]['geometry']);
            }
            var country = new google.maps.Polygon({
                paths: newCoordinates,
                strokeColor: 'transparent',
                strokeOpacity: 1,
                strokeWeight: 0.3,
                fillColor: '#cd0000',
                fillOpacity: 0,
                name: rows[i][0]
            });
            google.maps.event.addListener(country, 'mouseover', function () {
                this.setOptions({fillOpacity: 0.4});
            });
            google.maps.event.addListener(country, 'mouseout', function () {
                this.setOptions({fillOpacity: 0});
            });
            google.maps.event.addListener(country, 'click', function () {
                var countryName = this.name;
                var code = convert(countryName); // Calls a function that converts the name of the country to its official ISO 3166-1 alpha-2 code.
                var modal = document.querySelector('.modal');
                var instance = M.Modal.init(modal);
                instance.open();


            });


            country.setMap(map);
        }
    }
    //console.log(map);
    //test(map)
}

/*
 * This function contains a switch that returns an ISO 3166-1 alpha-2 code.
 */
function convert(countryName) {
    var code = '';

    switch (countryName) {

        case 'Afghanistan':
            code = 'afg';
            break;
        case 'United Arab Emirates':
            code = 'ae';
            break;
        case 'Burkina Faso':
            code = 'bf';
            break;
        case 'Bangladesh':
            code = 'bd';
            break;
        case 'Congo (Kinshasa)':
            code = 'cg';
            break;
        case 'Cuba':
            code = 'cu';
            break;
        case 'Czech Rep.':
            code = 'cz';
            break;
        case 'Denmark':
            code = 'dk';
            break;
        case 'Ethiopia':
            code = 'et';
            break;
        case 'Guinea Bissau':
            code = 'gw';
            break;
        case 'Croatia':
            code = 'hr';
            break;
        case 'Indonesia':
            code = 'id';
            break;
        case 'Iran':
            code = 'ir';
            break;
        case 'Jordan':
            code = 'jo';
            break;
        case 'Kazakhstan':
            code = 'kz';
            break;
        case 'Cambodia':
            code = 'kh';
            break;
        case 'Laos':
            code = 'la';
            break;
        case 'New Zealand':
            code = 'nz';
            break;
        case 'Papua New Guinea':
            code = 'pg';
            break;
        case 'Russia':
            code = 'ru';
            break;
        case 'Rwanda':
            code = 'rw';
            break;
        case 'Somalia':
            code = 'so';
            break;
        case 'Serbia':
            code = 'rs';
            break;
        case 'Trinidad and Tobago':
            code = 'tt';
            break;
        case 'Tunisia':
            code = 'tn';
            break;
        case 'Yemen':
            code = 'ye';
            break;
        case 'Zimbabwe':
            code = 'zw';
            break;
        case 'Angola':
            code = 'ao';
            break;
        case 'Armenia':
            code = 'am';
            break;
        case 'Fr. S. and Antarctic Lands':
            code = 'tf';
            break;
        case 'Burundi':
            code = 'bi';
            break;
        case 'Bosnia and Herz.':
            code = 'ba';
            break;
        case 'Colombia':
            code = 'co';
            break;
        case 'Cyprus':
            code = 'cy';
            break;
        case 'Ecuador':
            code = 'ec';
            break;
        case 'Eritrea':
            code = 'er';
            break;
        case 'Honduras':
            code = 'hn';
            break;
        case 'Kuwait':
            code = 'kw';
            break;
        case 'Sri Lanka':
            code = 'lk';
            break;
        case 'Lithuania':
            code = 'lt';
            break;
        case 'Moldova':
            code = 'md';
            break;
        case 'Nicaragua':
            code = 'ni';
            break;
        case 'Nepal':
            code = 'np';
            break;
        case 'Panama':
            code = 'pa';
            break;
        case 'Portugal':
            code = 'pt';
            break;
        case 'Qatar':
            code = 'qa';
            break;
        case 'Romania':
            code = 'ro';
            break;
        case 'Solomon Is.':
            code = 'sb';
            break;
        case 'Slovenia':
            code = 'si';
            break;
        case 'Vietnam':
            code = 'vn';
            break;
        case 'Albania':
            code = 'al';
            break;
        case 'Australia':
            code = 'au';
            break;
        case 'Azerbaijan':
            code = 'az';
            break;
        case 'Belgium':
            code = 'be';
            break;
        case 'Switzerland':
            code = 'ch';
            break;
        case 'Congo (Brazzaville)':
            code = 'cd';
            break;
        case 'Costa Rica':
            code = 'cr';
            break;
        case 'N. Cyprus':
            code = 'cy';
            break;
        case 'France':
            code = 'fr';
            break;
        case 'Guyana':
            code = 'gy';
            break;
        case 'Luxembourg':
            code = 'lu';
            break;
        case 'Latvia':
            code = 'lv';
            break;
        case 'Madagascar':
            code = 'mg';
            break;
        case 'Mali':
            code = 'ml';
            break;
        case 'Mozambique':
            code = 'mz';
            break;
        case 'Saudi Arabia':
            code = 'sa';
            break;
        case 'Slovakia':
            code = 'sk';
            break;
        case 'Syria':
            code = 'sy';
            break;
        case 'Thailand':
            code = 'th';
            break;
        case 'Uzbekistan':
            code = 'uz';
            break;
        case 'South Africa':
            code = 'za';
            break;
        case 'Argentina':
            code = 'ar';
            break;
        case 'Brunei':
            code = 'bn';
            break;
        case 'Botswana':
            code = 'bw';
            break;
        case 'Canada':
            code = 'ca';
            break;
        case 'China':
            code = 'cn';
            break;
        case 'Ivory Coast':
            code = 'ci';
            break;
        case 'Germany':
            code = 'de';
            break;
        case 'Egypt':
            code = 'eg';
            break;
        case 'Spain':
            code = 'es';
            break;
        case 'Finland':
            code = 'fi';
            break;
        case 'Gambia':
            code = 'gm';
            break;
        case 'Greenland':
            code = 'gl';
            break;
        case 'Iraq':
            code = 'iq';
            break;
        case 'S. Korea':
            code = 'kr';
            break;
        case 'Kosovo':
            code = 'xk';
            break;
        case 'Malaysia':
            code = 'my';
            break;
        case 'Namibia':
            code = 'na';
            break;
        case 'Norway':
            code = 'no';
            break;
        case 'N. Korea':
            code = 'kp';
            break;
        case 'Somaliland':
            code = 'so';
            break;
        case 'Turkmenistan':
            code = 'tm';
            break;
        case 'Taiwan':
            code = 'tw';
            break;
        case 'Tanzania':
            code = 'tz';
            break;
        case 'Venezuela':
            code = 've';
            break;
        case 'Vanuatu':
            code = 'vu';
            break;
        case 'Benin':
            code = 'bj';
            break;
        case 'Belarus':
            code = 'by';
            break;
        case 'Belize':
            code = 'bz';
            break;
        case 'Bolivia':
            code = 'bo';
            break;
        case 'Brazil':
            code = 'br';
            break;
        case 'Bhutan':
            code = 'bt';
            break;
        case 'Central African Rep.':
            code = 'cf';
            break;
        case 'Chile':
            code = 'cl';
            break;
        case 'Fiji':
            code = 'fj';
            break;
        case 'Georgia':
            code = 'ge';
            break;
        case 'Hungary':
            code = 'hu';
            break;
        case 'Ireland':
            code = 'ie';
            break;
        case 'Italy':
            code = 'it';
            break;
        case 'Jamaica':
            code = 'jm';
            break;
        case 'Japan':
            code = 'jp';
            break;
        case 'Kyrgyzstan':
            code = 'kg';
            break;
        case 'Morocco':
            code = 'ma';
            break;
        case 'Macedonia':
            code = 'mk';
            break;
        case 'Malawi':
            code = 'mw';
            break;
        case 'Suriname':
            code = 'sr';
            break;
        case 'Sweden':
            code = 'se';
            break;
        case 'East Timor':
            code = 'tl';
            break;
        case 'Turkey':
            code = 'tr';
            break;
        case 'United States':
            code = 'us';
            break;
        case 'Austria':
            code = 'at';
            break;
        case 'Cameroon':
            code = 'cm';
            break;
        case 'Djibouti':
            code = 'dj';
            break;
        case 'Dominican Rep.':
            code = 'do';
            break;
        case 'Falkland Is.':
            code = 'fk';
            break;
        case 'Gabon':
            code = 'ga';
            break;
        case 'United Kingdom':
            code = 'gb';
            break;
        case 'Ghana':
            code = 'gh';
            break;
        case 'Greece':
            code = 'gr';
            break;
        case 'Iceland':
            code = 'is';
            break;
        case 'Lebanon':
            code = 'lb';
            break;
        case 'Libya':
            code = 'ly';
            break;
        case 'Lesotho':
            code = 'ls';
            break;
        case 'Mexico':
            code = 'mx';
            break;
        case 'Myanmar':
            code = 'mm';
            break;
        case 'Montenegro':
            code = 'me';
            break;
        case 'Mongolia':
            code = 'mn';
            break;
        case 'Niger':
            code = 'ne';
            break;
        case 'Nigeria':
            code = 'ng';
            break;
        case 'Netherlands':
            code = 'nl';
            break;
        case 'Sudan':
            code = 'sd';
            break;
        case 'S. Sudan':
            code = 'ss';
            break;
        case 'Senegal':
            code = 'sn';
            break;
        case 'Sierra Leone':
            code = 'sl';
            break;
        case 'El Salvador':
            code = 'sv';
            break;
        case 'Chad':
            code = 'td';
            break;
        case 'Tajikistan':
            code = 'tj';
            break;
        case 'Uganda':
            code = 'ug';
            break;
        case 'Ukraine':
            code = 'ua';
            break;
        case 'Uruguay':
            code = 'uy';
            break;
        case 'Zambia':
            code = 'zm';
            break;
        case 'Bulgaria':
            code = 'bg';
            break;
        case 'Algeria':
            code = 'dz';
            break;
        case 'Estonia':
            code = 'ee';
            break;
        case 'Haiti':
            code = 'ht';
            break;
        case 'India':
            code = 'in';
            break;
        case 'Kenya':
            code = 'ke';
            break;
        case 'Liberia':
            code = 'lr';
            break;
        case 'Mauritania':
            code = 'mr';
            break;
        case 'New Caledonia':
            code = 'nc';
            break;
        case 'Pakistan':
            code = 'pk';
            break;
        case 'Peru':
            code = 'pe';
            break;
        case 'Philippines':
            code = 'ph';
            break;
        case 'Paraguay':
            code = 'py';
            break;
        case 'Swaziland':
            code = 'sz';
            break;
        case 'West Bank':
            code = 'ps';
            break;
        case 'Bahamas':
            code = 'bs';
            break;
        case 'Guinea':
            code = 'gn';
            break;
        case 'Guatemala':
            code = 'gt';
            break;
        case 'Israel':
            code = 'il';
            break;
        case 'Oman':
            code = 'om';
            break;
        case 'Poland':
            code = 'pl';
            break;
        case 'Puerto Rico':
            code = 'pr';
            break;
        case 'W. Sahara':
            code = 'eh';
            break;
        case 'Togo':
            code = 'tg';
            break;

    }

    var url = "https://restcountries.eu/rest/v2/alpha/" + code;
    console.log(url);
    var callback = httpGet(url); // Calls a function that makes a XMLHttpRequest
    return code;

}

/*
 * This function retrieves all the data from "url" and parses it to a JSON object.
 */
function httpGet(url) {
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = xmlhttp.responseText;
            var result = JSON.parse(data);
            console.log(result["name"]);
            var rows = modal(result); // Calls a function that creates a modal.

        }
    };

    xmlhttp.open("GET", url, false);
    xmlhttp.send();
}

/*
 * The variable "result" contains the response of the XMLHttpRequest.
 * This function creates a modal that shows up when a country is clicked on.
 */
function modal(result) {
    var englishName = result["name"];
    var nativeName = result["nativeName"];
    var capital = result["capital"];
    var area = result["area"];
    var demonym = result["demonym"];
    var flag = result["flag"];
    var gini = result["gini"];
    var population = result["population"];
    var region = result["region"];
    var subregion = result["subregion"];
    var languages = result["languages"];
    var currencies = result["currencies"];
    var timezones = result["timezones"];
    var regionalBlocs = result["regionalBlocs"];
    var hdi;
    var gdp;
    var ppp;
    var happiness;
    var mili;


    gdp = getGdp(englishName);
    var giniStyle = giniIcon(gini);
    hdi = getHdi(englishName);
    ppp = getPpp(englishName);
    happiness = getHappiness(englishName);
    var hdiStyle = hdiIcon(hdi);
    var pppStyle = pppIcon(ppp);
    var happinessStyle = happinessIcon(happiness);
    mili = getGfp(englishName);
    var gfpStyle = gfpIcon(mili);

    if (typeof(mili) == 'object'){
        var info = mili[0];
        var airforce = mili[1];
        var army = mili[2];
        var navy = mili[3];
        var geo = mili[4];
        var money = mili[5];
        var rank = mili[6];
        var innerHmlNorm = "<div class='modal-content'>" +
            "<h4 class='center-align'>" + englishName + "</h4>" +
            "<h6 class='center-align'>" + nativeName + "</h6>" +
            "<img class='responsive-img center-align' style='border: grey 1px solid' src='" + flag + "'>" +
            "<ul>" +
            "<li><p>Hoofdstad: " + capital + "</p></li>" +
            "<div class='divider'></div>" +
            "<li><p>Aantal inwoners: " + numeral(population).format('0,0') + "</p></li>" +
            "<div class='divider'></div>" +
            "<li><p id='language'>Talen:</p></li>" +
            "<div class='divider'></div>" +
            "<li><p>Inwoneraanduiding: " + demonym + "</p></li>" +
            "<div class='divider'></div>" +
            "<li><p>Oppervlakte: " + numeral(area).format('0,0') + " km2</p></li>" +
            "<div class='divider'></div>" +
            "<li><p>Regio: " + region + " (" + subregion + "),<br>" + "</p></li>" +
            "<div class='divider'></div>" +
            "<li><p id='regionalBloc'>Regionale Blokken: </p></li>" +
            "<div class='divider'></div>" +
            "<li><p id='timezone'>Tijdzones: </p></li>" +
            "<div class='divider'></div>" +
            "<li><p id='currency'>Munteenheid: </p></li>" +
            "<div class='divider'></div>" +
            "<li><p>Bruto binnenlands product(2016): $" + numeral(gdp).format('0,0.00') + "</p></li>" +
            "<div class='divider'></div>" +
            pppStyle +
            "<div class='divider'></div>" +
            giniStyle +
            "<div class='divider'></div>" +
            hdiStyle +
            "<div class='divider'></div>" +
            happinessStyle +
            "<div class='divider'></div>" +
            "<li><a id='mili-btn' onclick='showFunction()'>Show Global Fire Power</a></li>" +
            "<div id='defensie'>" +
            "<li><p>Global Firepower Rank(2018): #" + rank + "</p></li>" +
            "<div class='divider'></div>" +
            "    <li><p>Mankracht beschikbaar: " + numeral(info[0]).format('0,0') + "</p></li>" +
            "    <li><p>Geschikt voor militaire dienst: " + numeral(info[1]).format('0,0') + "</p></li>" +
            "<li><p>Bereikt jaarlijks de militaire leeftijd: " + numeral(info[2]).format('0,0') + "</p></li>" +
            "<li><p>Totaal militair personeel: " + numeral(info[3]).format('0,0') + "</p></li>" +
            "<li><p>Actief personeel: " + numeral(info[4]).format('0,0') + "</p></li>" +
            "<li><p>Nationale reserve: " + numeral(info[5]).format('0,0') + "</p></li>" +
            "    <div class='divider'></div>" +
            "    <li><p>Totale sterkte van de luchtmacht: " + airforce[0] + "</p></li>" +
            "    <li><p>Jachtvliegtuigen: " + airforce[1] + "</p></li>" +
            "    <li><p>Gevechtsvliegtuigen: " + airforce[2] + "</p></li>" +
            "    <li><p>Transportvliegtuigen: " + airforce[3] + "</p></li>" +
            "    <li><p>Opleidingsvliegtuigen: " + airforce[4] + "</p></li>" +
            "    <div class='divider'></div>" +
            "<li><p>Totale helicopter kracht: " + army[0] + "</p></li>" +
            "<li><p>Aanvalshelikopters: " + army[1] + "</p></li>" +
            "<li><p>Tanks: " + army[2] + "</p></li>" +
            "<li><p>Pantservoertuigen: " + army[3] + "</p></li>" +
            "<li><p>Gemechaniseerde artillerie: " + army[4] + "</p></li>" +
            "<li><p>Artillerie: " + army[5] + "</p></li>" +
            "<li><p>Raketlanceerprojectoren: " + army[6] + "</p></li>" +
            "<div class='divider'></div>" +
            "<li><p>Totaal aantal oorlogschepen: " + navy[0] + "</p></li>" +
            "<li><p>Vliegdekschepen: " + navy[1] + "</p></li>" +
            "<li><p>Fregatten: " + navy[2] + "</p></li>" +
            "<li><p>Torpedobootjagers: " + navy[3] + "</p></li>" +
            "<li><p>korvetten: " + navy[4] + "</p></li>" +
            "<li><p>Onderzeeërs: " + navy[5] + "</p></li>" +
            "<li><p>Patrouillevaartuigen: " + navy[6] + "</p></li>" +
            "<li><p>Mijnenvegers: " + navy[7] + "</p></li>" +
            "<div class='divider'></div>" +
            "<li><p>Totale koopvaardij sterkte: " + numeral(geo[0]).format('0,0') + "</p></li>" +
            "<li><p>Grote havens / Terminals: " + numeral(geo[1]).format('0,0') + "</p></li>" +
            "<li><p>Roadway Coverage (km): " + numeral(geo[2]).format('0,0.00') + " km</p></li>" +
            "<li><p>Railway Coverage (km): " + numeral(geo[3]).format('0,0.00') + " km</p></li>" +
            "<li><p>Bruikbare vliegvelden: " + numeral(geo[4]).format('0,0') + "</p></li>" +
            "<li><p>Kustlijn (km): " + numeral(geo[5]).format('0,0.00') + " km</p></li>" +
            "<li><p>Geldeelde grenzen (km): " + numeral(geo[6]).format('0,0.00') + " km</p></li>" +
            "<li><p>Waterways (km): " + numeral(geo[7]).format('0,0.00') + " km</p></li>" +
            "<div class='divider'></div>" +
            "<li><p>Defensie Budget: $" + numeral(money[0]).format('0,0.00') + "</p></li>" +
            "<li><p>Staatschuld: $" + numeral(money[1]).format('0,0.00') + "</p></li>" +
            "</div>" +
            "</ul>" +
            "</div>" +
            "<div class='modal-footer'>" +
            "<btn id='modalclose' class='modal-action modal-close waves-effect waves-green btn-flat'>Close</btn>" +
            "</div>" +
            "</div>";
    }

    else{
        var innerHmlNorm = "<div class='modal-content'>" +
            "<h4 class='center-align'>" + englishName + "</h4>" +
            "<h6 class='center-align'>" + nativeName + "</h6>" +
            "<img class='responsive-img center-align' style='border: grey 1px solid' src='" + flag + "'>" +
            "<ul>" +
            "<li><p>Hoofdstad: " + capital + "</p></li>" +
            "<div class='divider'></div>" +
            "<li><p>Aantal inwoners: " + numeral(population).format('0,0') + "</p></li>" +
            "<div class='divider'></div>" +
            "<li><p id='language'>Languages:</p></li>" +
            "<div class='divider'></div>" +
            "<li><p>Inwoneraanduiding: " + demonym + "</p></li>" +
            "<div class='divider'></div>" +
            "<li><p>Oppervlakte: " + numeral(area).format('0,0') + " km2</p></li>" +
            "<div class='divider'></div>" +
            "<li><p>Regio: " + region + " (" + subregion + "),<br>" + "</p></li>" +
            "<div class='divider'></div>" +
            "<li><p id='regionalBloc'>Regionaal Blok: </p></li>" +
            "<div class='divider'></div>" +
            "<li><p id='timezone'>Tijdzones: </p></li>" +
            "<div class='divider'></div>" +
            "<li><p id='currency'>Munteenheid: </p></li>" +
            "<div class='divider'></div>" +
            "<li><p>Bruto binnenlands product(2016): $" + numeral(gdp).format('0,0.00') + "</p></li>" +
            "<div class='divider'></div>" +
            pppStyle +
            "<div class='divider'></div>" +
            giniStyle +
            "<div class='divider'></div>" +
            hdiStyle +
            "<div class='divider'></div>" +
            happinessStyle +
            "<div class='divider'></div>" +
            gfpStyle +
            "<div class='modal-footer'>" +
            "<btn id='modalclose' class='modal-action modal-close waves-effect waves-green btn-flat'>Close</btn>" +
            "</div>" +
            "</div>";
    }


    div.innerHTML = innerHmlNorm;
    document.body.appendChild(div);


    /* The following "for loops" loop through json objects that came back as arrays and adds the results to the modal.
     */
    for (var i = 0; i < languages.length; i++) {
        var languageEnglish = languages[i]["name"];
        var languageNative = languages[i]["nativeName"];
        var a = document.getElementById("language");

        a.innerHTML += " " + languageEnglish + " (" + languageNative + "), ";
    }
    for (var j = 0; j < currencies.length; j++) {
        var currencyName = currencies[j]["name"];
        var currencySymbol = currencies[j]["symbol"];
        var b = document.getElementById("currency");

        b.innerHTML += " " + currencyName + " (" + currencySymbol + ")";
    }
    for (var k = 0; k < timezones.length; k++) {
        var timezone = timezones[k];
        var c = document.getElementById("timezone");

        c.innerHTML += " " + timezone + ", ";


    }
    for (var l = 0; l < regionalBlocs.length; l++) {
        var regionalBloc = regionalBlocs[l]["name"];
        var d = document.getElementById("regionalBloc");

        d.innerHTML += " " + regionalBloc + ", ";
    }


}

/*
 *   The variable "englishName" holds a string containing the name of the country that is clicked on.
 *   This function retrieves the Human Development Index score of "englishName" from "hdi.json"
 */
function getHdi(englishName) {
    var hdi;
    var french = "French Southern Territories";
    var sahara = "Western Sahara";
    var caledonia = "New Caledonia";
    var somaliland = "Somaliland";
    var ncyprus = "North Cyprus";
    var falk = "Falkland Islands (Malvinas)";
    var rico = "Puerto Rico";

    var request = new XMLHttpRequest();
    request.open('GET', '../data/hdi.json', false);  // `false` makes the request synchronous
    request.send(null);

    if (request.status === 200) {
        var data = request.responseText;
        var result = JSON.parse(data);
        for (var i = 0; i < result.length; i++) {

            var exceptions = [french, sahara, caledonia, somaliland, ncyprus, falk, rico];
            for (var j = 0; j < exceptions.length; j++) {
                if (exceptions[j].indexOf(englishName) != -1) {
                    hdi = exceptions[j];
                    return hdi;
                } else {
                    var country = result[i]["Country"];
                    if (country.indexOf(englishName) != -1) {
                        hdi = result[i]["2014"];
                        console.log("found hdi: " + hdi);
                        return hdi;
                    }
                }
            }
        }
    }
}

/*
 *   The variable "englishName" holds a string containing the name of the country that is clicked on.
 *   This function retrieves the gross domestic product of "englishName" from "gdp.json"
 */
function getGdp(englishName) {
    var gdp;
    var som = "Somaliland";
    var french = "French Southern Territories";
    var sahara = "Western Sahara";
    var request = new XMLHttpRequest();
    request.open('GET', '../data/gdp.json', false);  // `false` makes the request synchronous
    request.send(null);

    if (request.status === 200) {
        var data = request.responseText;
        var result = JSON.parse(data);
        for (var i = 0; i < result.length; i++) {

            var exceptions = [som, french, sahara];
            for (var j = 0; j < exceptions.length; j++) {
                if (exceptions[j].indexOf(englishName) != -1) {
                    gdp = "No data available";
                    return gdp;
                } else {
                    var country = result[i]["Country Name"];
                    if (country.indexOf(englishName) != -1) {
                        gdp = result[i]["2016 [YR2016]"];
                        console.log("found gdp: " + gdp);
                        return gdp;
                    }
                }
            }
        }
    }
}

/*
 *  The variable "englishName" holds a string containing the name of the country that is clicked on.
 *  This function retrieves the gross domestic product (at purchasing power parity) per capita of "englishName" from "ppp.json"
 */
function getPpp(englishName) {
    var ppp;
    var falk = "Falkland Islands (Malvinas)";
    var ncyprus = "North Cyprus";
    var french = "French Southern Territories";
    var vanuatu = "Vanuatu";
    var sahara = "Western Sahara";
    var request = new XMLHttpRequest();
    request.open('GET', '../data/ppp.json', false);  // `false` makes the request synchronous
    request.send(null);

    if (request.status === 200) {
        var data = request.responseText;
        var result = JSON.parse(data);
        for (var i = 0; i < result.length; i++) {

            var exceptions = [falk, ncyprus, french, vanuatu, sahara];
            for (var j = 0; j < exceptions.length; j++) {
                if (exceptions[j].indexOf(englishName) != -1) {
                    ppp = exceptions[j];
                    return ppp;
                } else {
                    var country = result[i]["Country Name"];
                    if (country.indexOf(englishName) != -1) {
                        ppp = result[i]["2016 [YR2016]"];
                        console.log("found ppp: " + ppp);
                        return ppp;
                    }
                }
            }
        }
    }
}

/*
 *  The variable "englishName" holds a string containing the name of the country that is clicked on.
 *  This function retrieves the happiness index of "englishName" from "happiness.json"
 */
function getHappiness(englishName) {
    var happiness;
    var falk = "Falkland Islands (Malvinas)";
    var french = "French Southern Territories";
    var vanuatu = "Vanuatu";
    var sahara = "Western Sahara";
    var bahamas = "Bahamas";
    var greenland = "Greenland";
    var fiji = "Fiji";
    var djibouti = "Djibouti";
    var caledonia = "New Caledonia";
    var swazi = "Swaziland";
    var eri = "Eritrea";
    var equa = "Equatoriaal-Guinea";
    var bissau = "Guinea-Bissau";
    var gambia = "Gambia";
    var laos = "Lao People's Democratic Republic";
    var timor = "Timor-Leste";
    var papua = "Papua New Guinea";
    var solomon = "Solomon Islands";
    var request = new XMLHttpRequest();
    request.open('GET', '../data/happy.json', false);  // `false` makes the request synchronous
    request.send(null);

    if (request.status === 200) {
        var data = request.responseText;
        var result = JSON.parse(data);
        for (var i = 0; i < result.length; i++) {
            var exceptions = [falk, french, vanuatu, sahara, bahamas, greenland, fiji, djibouti, caledonia, swazi, eri, equa, bissau, gambia, laos, timor, papua, solomon];
            for (var j = 0; j < exceptions.length; j++) {
                if (exceptions[j].indexOf(englishName) != -1) {
                    happiness = exceptions[j];
                    return happiness;
                } else {
                    var country = result[i]["Country"];
                    if (country.indexOf(englishName) != -1) {
                        happiness = result[i]["Happiness.Rank"];
                        console.log("found happiness index: " + happiness);
                        return happiness;
                    }
                }
            }
        }
    }
}

/*
 *  The variable "englishName" holds a string containing the name of the country that is clicked on.
 *  This function retrieves the military strength of "englishName" from "gfp.json"
 */
function getGfp(englishName) {
    var mili;
    var exceptions = [
        "Costa Rica",
        "Jamaica",
        "Puerto Rico",
        "Bahamas",
        "Haiti",
        "Falkland Islands (Malvinas)",
        "North Cyprus",
        "Greenland",
        "Somaliland",
        "Fiji",
        "Djibouti",
        "Lesotho",
        "Liberia",
        "New Caledonia",
        "Swaziland",
        "Western Sahara",
        "Montenegro",
        "Republic of Kosovo",
        "Moldova (Republic of)",
        "Cyprus",
        "Palestine, State of",
        "Eritrea",
        "Rwanda",
        "Burundi",
        "Malawi",
        "Equatoriaal-Giunea",
        "Benin",
        "Togo",
        "Burkina Faso",
        "Liberia",
        "Guinea",
        "Guinea-Bissau",
        "Senegal",
        "Gambia",
        "Timor-Leste",
        "Papua New Guinea",
        "Solomon Islands",
        "Iceland",
        "Vanuatu",
        "French Southern Territories",
        "Luxembourg"
    ];
    var request = new XMLHttpRequest();
    request.open('GET', '../data/gfp.json', false);  // `false` makes the request synchronous
    request.send(null);

    if (request.status === 200) {
        var data = request.responseText;
        var result = JSON.parse(data);
        for (var i = 0; i < result.length; i++) {
            var country = result[i]["Country"];
            if (country.indexOf(englishName) != -1 && englishName != null) {
                var rank = result[i]["Rank"];
                var info = [result[i]["Manpower Available"], result[i]["Fit-for-Service"], result[i]["Reaching Military Age"], result[i]["Total Military Personnel"], result[i]["Active Personnel"], result[i]["Reserve Personnel"]];
                var airforce = [result[i]["Total Aircraft Strength"], result[i]["Fighter Aircraft"], result[i]["Attack Aircraft"], result[i]["Transport Aircraft"], result[i]["Trainer Aircraft"]];
                var army = [result[i]["Total Helicopter Strength"], result[i]["Attack Helicopters"], result[i]["Combat Tanks"], result[i]["Armored Fighting Vehicles"], result[i]["Self-Propelled Artillery"], result[i]["Towed Artillery"], result[i]["Rocket Projectors"]];
                var navy = [result[i]["Total Naval Assets"], result[i]["Aircraft Carriers"], result[i]["Frigates"], result[i]["Destroyers"], result[i]["Corvettes"], result[i]["Submarines"], result[i]["Patrol Craft"], result[i]["Mine Warfare Vessels"]];
                var geo = [result[i]["Merchant Marine Strength"], result[i]["Major Ports / Terminals"], result[i]["Roadway Coverage (km)"], result[i]["Railway Coverage (km)"], result[i]["Serivecable Airports"], result[i]["Coastline (km)"], result[i]["Shared Borders (km)"], result[i]["Waterways (km)"]];
                var money = [result[i]["Defense Budget"], result[i]["External Debt"]];

                return [info, airforce, army, navy, geo, money, rank];
            } else {
                for (var j = 0; j < exceptions.length; j++) {
                    if (exceptions[j].indexOf(englishName) != -1) {
                        mili = exceptions[j];
                        return mili;
                    }
                }
            }

        }
    }
}

/*
 * The variable "hdi" contains the retrieved value from "getHdi" function.
 * This function categorizes hdi scores in four different categories "Very High, High, Medium, Low".
 * Each category has a different color.
 */
function hdiIcon(hdi) {
    if (hdi <= 0.999 && hdi > 0.800) {
        hdi = "<li><p>Index van de menselijke ontwikkeling(2014): " + hdi + "<span style='color: #30ff30'><b> Very high</b></span></p>";
    } else if (hdi <= 0.800 && hdi > 0.701) {
        hdi = "<li><p>Index van de menselijke ontwikkeling(2014): " + hdi + "<span style='color: #9aff9a'><b> High</b></span></p>";
    } else if (hdi <= 0.700 && hdi > 550) {
        hdi = "<li><p>Index van de menselijke ontwikkeling(2014): " + hdi + "<span style='color: #fc0'><b> Medium</b></span></p>";
    } else if (hdi <= 0.550 && hdi > 0.100) {
        hdi = "<li><p>Index van de menselijke ontwikkeling(2014): " + hdi + "<span style='color: #cd0000'><b> Low</b></span></p>";
    } else {
        hdi = "<li><p>Index van de menselijke ontwikkeling(2014): Geen data beschikbaar</p>";
    }
    return hdi;
}

/*
 * The variable "gini" contains the retrieved value from "getGini" function.
 * This function categorizes gini scores in eight different categories "25-30, 30-35, 35-40, 40-45, 45-50, 50-55, 55-60, 60-66".
 * Each category has a different colour.
 */
function giniIcon(gini) {
    if (gini < 30) {
        gini = "<li><p>Gini-coëfficiënt van inkomensverdeling: " + gini + "<span style='color: #00cd00'><b> Very high</b></span></p></li>";
    } else if (gini >= 30 && gini < 35) {
        gini = "<li><p>Gini-coëfficiënt van inkomensverdeling: " + gini + "<span style='color: #30ff30'><b> High</b></span></p></li>";
    } else if (gini >= 35 && gini < 40) {
        gini = "<li><p>Gini-coëfficiënt van inkomensverdeling: " + gini + "<span style='color: #9aff9a'><b> Ok</b></span></p></li>";
    } else if (gini >= 40 && gini < 45) {
        gini = "<li><p>Gini-coëfficiënt van inkomensverdeling: " + gini + "<span style='color: #ffcdff'><b> Medium</b></span></p></li>";
    } else if (gini >= 45 && gini < 50) {
        gini = "<li><p>Gini-coëfficiënt van inkomensverdeling: " + gini + "<span style='color: #ff6666'><b> Kind of low</b></span></p></li>";
    } else if (gini >= 50 && gini < 55) {
        gini = "<li><p>Gini-coëfficiënt van inkomensverdeling: " + gini + "<span style='color: #ff1212'><b> Low</b></span></p></li>";
    } else if (gini >= 55 && gini < 60) {
        gini = "<li><p>Gini-coëfficiënt van inkomensverdeling: " + gini + "<span style='color: #cd0000'><b> Very low</b></span></p></li>";
    } else if (gini >= 60 && gini <= 66) {
        gini = "<li><p>Gini-coëfficiënt van inkomensverdeling: " + gini + "<span style='color: #9a0000'><b> Extremely low</b></span></p></li>";
    } else {
        gini = "<li><p>Gini-coëfficiënt van inkomensverdeling: " + gini + "</p></li>";
    }
    return gini;
}

/*
 * The variable "gfp" contains the retrieved value from "getGfp" function.
 */
function gfpIcon(mili) {
    if (mili == "Costa Rica") {
        mili = "<li><p>Costa Rica is een van de weinige landen zonder een leger.</p></li>";
    } else if (mili == "Jamaica") {
        mili = "<li><p>Geen militaire data beschikbaar voor " + mili + "</p></li>";
    } else if (mili == "Puerto Rico") {
        mili = "<li><p>Under US protectorate</p></li>";
    } else if (mili == "Bahamas") {
        mili = "<li><p>Geen militaire data beschikbaar voor " + mili + "</p></li>";
    } else if (mili == "Haiti") {
        mili = "<li><p>Geen militaire data beschikbaar voor " + mili + "</p></li>";
    } else if (mili == "Falkland Islands (Malvinas)") {
        mili = "<li><p>Under British protectorate</p></li>";
    } else if (mili == "North Cyprus") {
        mili = "<li><p>Under Turkish protectorate</p></li>";
    } else if (mili == "Greenland") {
        mili = "<li><p>Under Danish protectorate </p></li>";
    } else if (mili == "Somaliland") {
        mili = "<li><p>Republiek Somaliland, is een de facto onafhankelijk land op het territorium van Somalië en volgt de grenzen van het vroegere protectoraat Brits-Somaliland.</p></li>";
    } else if (mili == "Fiji") {
        mili = "<li><p>Geen militaire data beschikbaar voor " + mili + "</p></li>";
    } else if (mili == "Djibouti") {
        mili = "<li><p>Geen militaire data beschikbaar voor " + mili + "</p></li>";
    } else if (mili == "Lesotho") {
        mili = "<li><p>Under South African protectorate</p></li>";
    } else if (mili == "Liberia") {
        mili = "<li><p>Geen militaire data beschikbaar voor " + mili + "</p></li>";
    } else if (mili == "New Caledonia") {
        mili = "<li><p>Under French protectorate</p></li>";
    } else if (mili == "Swaziland") {
        mili = "<li><p>Under South African protectorate</p></li>";
    } else if (mili == "Western Sahara") {
        mili = "<li><p>Niet-zelfsturend gebied. Geclaimed door Marokko.</p></li>";
    } else if (mili == "Montenegro") {
        mili = "<li><p>Geen militaire data beschikbaar voor " + mili + "</p></li>";
    } else if (mili == "Republic of Kosovo") {
        mili = "<li><p>Geen militaire data beschikbaar voor " + mili + "</p></li>";
    } else if (mili == "Moldova (Republic of)") {
        mili = "<li><p>Geen militaire data beschikbaar voor " + mili + "</p></li>";
    } else if (mili == "Cyprus") {
        mili = "<li><p>Geen militaire data beschikbaar voor " + mili + "</p></li>";
    } else if (mili == "Palestine, State of") {
        mili = "<li><p>Zelfstandige autoriteit met grote mate van autonomie, maar geen volledige soevereiniteit: mogelijk toekomstige republiek. Palestina is militair afhankelijk van Israël.</p></li>";
    } else if (mili == "Eritrea") {
        mili = "<li><p>Geen militaire data beschikbaar voor " + mili + "</p></li>";
    } else if (mili == "Rwanda") {
        mili = "<li><p>Geen militaire data beschikbaar voor " + mili + "</p></li>";
    } else if (mili == "Burundi") {
        mili = "<li><p>Geen militaire data beschikbaar voor " + mili + "</p></li>";
    } else if (mili == "Malawi") {
        mili = "<li><p>Geen militaire data beschikbaar voor " + mili + "</p></li>";
    } else if (mili == "Equatorial-Guinea") {
        mili = "<li><p>Geen militaire data beschikbaar voor " + mili + "</p></li>";
    } else if (mili == "Benin") {
        mili = "<li><p>Geen militaire data beschikbaar voor " + mili + "</p></li>";
    } else if (mili == "Togo") {
        mili = "<li><p>Geen militaire data beschikbaar voor " + mili + "</p></li>";
    } else if (mili == "Burkina Faso") {
        mili = "<li><p>Geen militaire data beschikbaar voor " + mili + "</p></li>";
    } else if (mili == "Guinea") {
        mili = "<li><p>Geen militaire data beschikbaar voor " + mili + "</p></li>";
    } else if (mili == "Guinea-Bissau") {
        mili = "<li><p>Geen militaire data beschikbaar voor " + mili + "</p></li>";
    } else if (mili == "Senegal") {
        mili = "<li><p>Geen militaire data beschikbaar voor " + mili + "</p></li>";
    } else if (mili == "Gambia") {
        mili = "<li><p>Geen militaire data beschikbaar voor " + mili + "</p></li>";
    } else if (mili == "Timor-Leste") {
        mili = "<li><p>Geen militaire data beschikbaar voor " + mili + "</p></li>";
    } else if (mili == "Papua New Guinea") {
        mili = "<li><p>Geen militaire data beschikbaar voor " + mili + "</p></li>";
    } else if (mili == "Solomon Islands") {
        mili = "<li><p>Maintained a paramilitary force until a heavy ethnic conflict, in which Australia, New Zealand and other Pacific countries intervened to restore law and order. Since then no military has been maintained, however, there is a relatively large police force, and a Maritime Surveillance Unit for internal security. The Maritime Surveillance Unit is equipped with small arms, and maintains two Pacific-class patrol boats, the Auki and the Lata. Defense and policing assistance was the responsibility of the RAMSI until June 30, 2017.</p></li>";
    } else if (mili == "Iceland") {
        mili = "<li><p>Iceland has not had a standing army since 1869, but is an active member of NATO.</p></li>";
    } else if (mili == "Vanuatu") {
        mili = "<li><p>The Vanuatu Police Force maintain a paramilitary force, called the Vanuatu Mobile Force for internal security purposes. The Vanuatu Mobile Force is manned by almost 300 men and women, who are well-equipped with small arms.</p></li>";
    } else if (mili == "French Southern Territories") {
        mili = "<li><p>Under French portectorate</p></li>";
    } else if (mili == "Luxembourg") {
        mili = "<li><p>Geen militaire data beschikbaar voor " + mili + "</p></li>";
    }

    return mili;
}

/*
 * The variable "ppp" contains the retrieved value from "getPpp" function.
 * This function categorizes ppp scores in seven different categories.
 * Each category has a different colour.
 */
function pppIcon(ppp) {
    if (ppp >= 50000) {
        ppp = "<li><p>koopkrachtpariteit (kkp) per hoofd van de bevolking (2016): $" + numeral(ppp).format('0,0.00') + "<span style='color: #00cd00'><b> Extremely high</b></span></p></li>";
    } else if (ppp < 50000 && ppp >= 35000) {
        ppp = "<li><p>koopkrachtpariteit (kkp) per hoofd van de bevolking (2016): $" + numeral(ppp).format('0,0.00') + "<span style='color: #30ff30'><b> Very high</b></span></p></li>";
    } else if (ppp < 35000 && ppp >= 20000) {
        ppp = "<li><p>koopkrachtpariteit (kkp) per hoofd van de bevolking (2016): $" + numeral(ppp).format('0,0.00') + "<span style='color: #9aff9a'><b> High</b></span></p></li>";
    } else if (ppp < 20000 && ppp >= 10000) {
        ppp = "<li><p>koopkrachtpariteit (kkp) per hoofd van de bevolking (2016): $" + numeral(ppp).format('0,0.00') + "<span style='color: #fc0'><b> Medium</b></span></p></li>";
    } else if (ppp < 10000 && ppp >= 5000) {
        ppp = "<li><p>koopkrachtpariteit (kkp) per hoofd van de bevolking (2016): $" + numeral(ppp).format('0,0.00') + "<span style='color: #ff6666'><b> Low</b></span></p></li>";
    } else if (ppp < 5000 && ppp >= 2000) {
        ppp = "<li><p>koopkrachtpariteit (kkp) per hoofd van de bevolking (2016): $" + numeral(ppp).format('0,0.00') + "<span style='color: #ff1212'><b> Very low</b></span></p></li>";
    } else if (ppp < 2000) {
        ppp = "<li><p>koopkrachtpariteit (kkp) per hoofd van de bevolking (2016): $" + numeral(ppp).format('0,0.00') + "<span style='color: #cd0000'><b> Extremely low</b></span></p></li>";
    } else {
        ppp = "<li><p>koopkrachtpariteit (kkp) per hoofd van de bevolking (2016): Geen data beschikbaar </p></li>";
    }

    return ppp;
}

/*
 * The variable "happiness" contains the retrieved value from "getHappiness" function.
 * This function categorizes happiness scores in different categories.
 * Each category has a different colour.
 */
function happinessIcon(happiness) {
    if (happiness >= 1 && happiness <= 8) {
        happiness = "<li><p>World Happiness Index(2018): #" + happiness + "<span style='color: #002400'><b> Near perfect</b></span></p></li>";
    } else if (happiness > 8 && happiness <= 20) {
        happiness = "<li><p>World Happiness Index(2018): #" + happiness + "<span style='color: #006d00'><b> Extremely good</b></span></p></li>";
    } else if (happiness > 20 && happiness <= 36) {
        happiness = "<li><p>World Happiness Index(2018): #" + happiness + "<span style='color:#00b600 '><b> Very good</b></span></p></li>";
    } else if (happiness > 36 && happiness <= 48) {
        happiness = "<li><p>World Happiness Index(2018): #" + happiness + "<span style='color: #24ff24'><b> Good</b></span></p></li>";
    } else if (happiness > 48 && happiness <= 61) {
        happiness = "<li><p>World Happiness Index(2018): #" + happiness + "<span style='color: #6dff6d'><b> Quite well</b></span></p></li>";
    } else if (happiness > 61 && happiness <= 74) {
        happiness = "<li><p>World Happiness Index(2018): #" + happiness + "<span style='color:#b6ffb6 '><b> Ok</b></span></p></li>";
    } else if (happiness > 74 && happiness <= 87) {
        happiness = "<li><p>World Happiness Index(2018): #" + happiness + "<span style='color: #ffb6b6'><b> Not so well</b></span></p></li>";
    } else if (happiness > 87 && happiness <= 92) {
        happiness = "<li><p>World Happiness Index(2018): #" + happiness + "<span style='color: #ff6d6d'><b> Kind of bad</b></span></p></li>";
    } else if (happiness > 92 && happiness <= 107) {
        happiness = "<li><p>World Happiness Index(2018): #" + happiness + "<span style='color: #ff2424'><b> Bad</b></span></p></li>";
    } else if (happiness > 107 && happiness <= 118) {
        happiness = "<li><p>World Happiness Index(2018): #" + happiness + "<span style='color: #b60000'><b> Very bad</b></span></p></li>";
    } else if (happiness > 118 && happiness <= 131) {
        happiness = "<li><p>World Happiness Index(2018): #" + happiness + "<span style='color: #6d0000'><b> Extremely bad</b></span></p></li>";
    } else if (happiness > 131 && happiness <= 143) {
        happiness = "<li><p>World Happiness Index(2018): #" + happiness + "<span style='color: #240000'><b> Super bad</b></span></p></li>";
    } else if (happiness > 143 && happiness <= 156) {
        happiness = "<li><p>World Happiness Index(2018): #" + happiness + "<span style='color: #000000'><b> Fucked</b></span></p></li>";
    } else {
        happiness = "<li><p>World Happiness Index(2018): Geen data beschikbaar</p></li>";
    }
    return happiness;
}

function constructNewCoordinates(polygon) {
    var newCoordinates = [];
    var coordinates = polygon['coordinates'][0];
    for (var i in coordinates) {
        newCoordinates.push(
            new google.maps.LatLng(coordinates[i][1], coordinates[i][0]));
    }
    return newCoordinates;
}

