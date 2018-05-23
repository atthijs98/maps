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
                this.setOptions({fillOpacity: 0.3});
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
                    //console.log("clicked on polygon");

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
            //console.log(result["name"]);
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
    var calling = result["callingCodes"];
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
    if (englishName == "Afghanistan") {
        iso = result["alpha3Code"];
        iso = iso.toLowerCase();
    }else {
        var iso = result["alpha2Code"];
        iso = iso.toLowerCase();
    }

    var hdi;
    var gdp;
    var ppp;
    var happiness;
    var mili;
    var sales;
    var cato;

    cato = getCato(englishName);
    sales = getSales(iso);
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

    if (typeof(mili) == 'object' && typeof(cato) == 'object'){
        var info = mili[0];
        var airforce = mili[1];
        var army = mili[2];
        var navy = mili[3];
        var geo = mili[4];
        var money = mili[5];
        var rank = mili[6];
        var totalTickets = sales[1];
        var totalMoney = sales[0];
        var refund = sales[2];

        var HumanFreedom = cato[14],
            PersonalFreedom = cato[0],
            RuleOfLaw = cato[1],
            SecurityAndSafety = cato[2],
            Movement = cato[3],
            ReligiousFreedom = cato[4],
            Association = cato[5],
            ExpressionAndInformation = cato[6],
            IdentityAndRelationships = cato[7],
            EconomicFreedom = cato[8],
            SizeOfGovernment = cato[9],
            LegalSystemAndPropRights = cato[10],
            SoundMoney = cato[11],
            FreedomToTradeInt = cato[12],
            Regulation = cato[13];

        var innerHmlNorm =
            "<div class='modal-content'>" +
                "<h4 class='center-align'>" + englishName + "</h4>" +
                "<h6 class='center-align'>" + nativeName + "</h6>" +
                "<div class='row'>" +
                    "<div class='col s10 push-s1'><div class='center-align'><img style='border: grey 1px solid;' src='" + flag + "' class='responsive-img'></div></div>" +
                "</div>" +
                "<div class='row'>" +
                    "<div class='col s10 push-s1'><div class='center-align'><img src='images/coatOfArms/"+iso+".png' class='responsive-img'></div></div>" +
                "</div>" +
                "<div class='divider'></div><br>" +
                "<li><a href='#!' id='info-btn' onclick='showFunction2()'>Laat land informatie zien</a></li>" +
                "<div id='informatie'>" +
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
                    "<li><p>Landnummer: " + calling + "</p></li>" +
                    "<div class='divider'></div>" +
                    "<li><p id='currency'>Munteenheid: </p></li>" +
                    "<div class='divider'></div>" +
                    "<li><p>Bruto binnenlands product(2016): " + numeral(gdp).format('$ 0,0[.]00') + "</p></li>" +
                    "<div class='divider'></div>" +
                    pppStyle +
                    "<div class='divider'></div>" +
                    giniStyle +
                    "<div class='divider'></div>" +
                    hdiStyle +
                    "<div class='divider'></div>" +
                    happinessStyle +
                    "<div class='divider'></div>" +
                    "<li><p>Human Freedom Ranking(2017): "+HumanFreedom[1]+"/159</p></li>" +
                "</div>"+

                "<br><div class='divider'></div><br>" +
                "<li><a href='#!' id='mili-btn' onclick='showFunction()'>Laat Global Fire Power zien</a></li>" +
                "<div id='defensie'>" +
                    "<li><p>Global Firepower Rank(2018): " + numeral(rank).format('0o') + "</p></li>" +
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
                    "<li><p>Totale grootte van het wegennet (km): " + numeral(geo[2]).format('0,0.00') + " km</p></li>" +
                    "<li><p>Grootte van het spoorwegvervoer (km): " + numeral(geo[3]).format('0,0.00') + " km</p></li>" +
                    "<li><p>Bruikbare vliegvelden: " + numeral(geo[4]).format('0,0') + "</p></li>" +
                    "<li><p>Kustlijn (km): " + numeral(geo[5]).format('0,0.00') + " km</p></li>" +
                    "<li><p>Geldeelde grenzen (km): " + numeral(geo[6]).format('0,0.00') + " km</p></li>" +
                    "<li><p>Waterwegen (km): " + numeral(geo[7]).format('0,0.00') + " km</p></li>" +
                    "<div class='divider'></div>" +
                    "<li><p>Defensie Budget: " + numeral(money[0]).multiply(1000000).format('($0.00a)') + "</p></li>" +
                    "<li><p>Staatschuld: " + numeral(money[1]).multiply(1000000).format('($0.00a)') + "</p></li>" +
                    "<li><p><small>Bron: https://www.globalfirepower.com/</small></p></li>"+
                "</div>" +
                "<br><div class='divider'></div><br>" +
                    "<li><a href='#!' id='verkoop-btn' onclick='showFunction3()'>Laat kaarten verkoop zien</a></li>" +
                    "<div id='verkopen'>" +
                    "<ul>" +
                    "<li><p>Totaal aantal verkochte tickets: " + numeral(totalTickets).format('0,0') + "</p></li>" +
                    "<li><p>Totale omzet: " + numeral(totalMoney).format('$0,0[.]00') + "</p></li>" +
                    "<li><p>Totaal bedrag credit nota's: " + numeral(refund).format('$0,0[.]00') + "</p></li>" +
                    "</ul>" +
                    "</div>" +

                    "<br><div class='divider'></div><br>" +
                    "<li><a href='#!' id='info-btn' onclick='showFunction4()'>Laat Cato Human Freedom Index zien</a></li><br>" +
                    "<div id='freedom'>" +
                    "<li>" +
                    "<b>Persoonlijke vrijheid </b>" +
                    +PersonalFreedom +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate'  style='width: " + PersonalFreedom * 10 + "%'></div>" +
                    "</div>" +
                    "</li>" +
                    "<br><div class='divider'></div></br>" +
                    "<li>" +
                    "<b>Economische vrijheid </b>" +
                    +EconomicFreedom +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate'  style='width: " + EconomicFreedom * 10 + "%'></div>" +
                    "</div>" +
                    "</li>" +
                    "<br><div class='divider'></div></br>" +
                    "<li>" +
                    "<b>Rechtsstaat </b>" +
                    +RuleOfLaw[0] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate'  style='width: " + RuleOfLaw[0] * 10 + "%'></div>" +
                    "</div>" +
                    "</li>" +
                    "<li>" +
                    "Procedurele rechtvaardigheid " +
                    +RuleOfLaw[1] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + RuleOfLaw[1] * 10 + "%'></div>" +
                    "</div>" +
                    "</li>" +
                    "<li>" +
                    "Civiel recht " +
                    +RuleOfLaw[2] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + RuleOfLaw[2] * 10 + "%'></div>" +
                    "</div>" +
                    "</li>" +
                    "<li>" +
                    "Strafrecht " +
                    +RuleOfLaw[3] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + RuleOfLaw[3] * 10 + "%'></div>" +
                    "</div>" +
                    "</li>" +
                    "<br><div class='divider'></div><br>" +
                    "<li>" +
                    "<b>Beveiliging en veiligheid </b>" +
                    +SecurityAndSafety[0] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate'  style='width: " + SecurityAndSafety[0] * 10 + "%'></div> " +
                    "</div>" +
                    "Manslag " +
                    +SecurityAndSafety[1] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + SecurityAndSafety[1] * 10 + "%'></div>" +
                    "</div>" +
                    "Verdwijningen, conflicten en terrorisme " +
                    +SecurityAndSafety[2] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + SecurityAndSafety[2] * 10 + "%'></div>" +
                    "</div>" +
                    "Vrouwen veiligheid " +
                    +SecurityAndSafety[3] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + SecurityAndSafety[3] * 10 + "%'></div>" +
                    "</div>" +
                    "</li>" +
                    "<br><div class='divider'></div><br>" +
                    "<li>" +
                    "<b>Beweging </b>" +
                    +Movement[0] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate'  style='width: " + Movement[0] * 10 + "%'></div> " +
                    "</div>" +
                    "Vrijheid van buitenlandse beweging " +
                    +Movement[1] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + Movement[1] * 10 + "%'></div> " +
                    "</div>" +
                    "Vrijheid van binnenlandse beweging " +
                    +Movement[2] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + Movement[2] * 10 + "%'></div> " +
                    "</div>" +
                    "Bewegingsvrijheid van vrouwen " +
                    +Movement[3] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + Movement[3] * 10 + "%'></div> " +
                    "</div>" +
                    "</li>" +
                    "<br><div class='divider'></div><br>" +
                    "<li>" +
                    "<b>Geloofs vrijheid </b>" +
                    +ReligiousFreedom[0] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate'  style='width: " + ReligiousFreedom[0] * 10 + "%'></div> " +
                    "</div>" +
                    "Vrijheid om religieuze organisaties op te richten en te exploiteren " +
                    +ReligiousFreedom[1] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + ReligiousFreedom[1] * 10 + "%'></div> " +
                    "</div>" +
                    "Intimidatie en fysieke vijandelijkheden " +
                    +ReligiousFreedom[2] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + ReligiousFreedom[2] * 10 + "%'></div> " +
                    "</div>" +
                    "Juridische en wettelijke beperkingen " +
                    +ReligiousFreedom[3] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + ReligiousFreedom[3] * 10 + "%'></div> " +
                    "</div>" +
                    "</li>" +
                    "<br><div class='divider'></div><br>" +
                    "<li>" +
                    "<b>Vereniging </b>" +
                    +Association[0] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate'  style='width: " + Association[0] * 10 + "%'></div> " +
                    "</div>" +
                    "Vrijheid van vereniging " +
                    +Association[1] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + Association[1] * 10 + "%'></div> " +
                    "</div>" +
                    "Verzamelen en demonstreren " +
                    +Association[2] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + Association[2] * 10 + "%'></div> " +
                    "</div>" +
                    "Vrijheid om organisaties te vestigen en te exploiteren " +
                    +Association[3] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + Association[3] * 10 + "%'></div> " +
                    "</div>" +
                    "</li>" +
                    "<br><div class='divider'></div><br>" +
                    "<li>" +
                    "<b>Uitdrukking en informatie </b>" +
                    +ExpressionAndInformation[0] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate'  style='width: " + ExpressionAndInformation[0] * 10 + "%'></div> " +
                    "</div>" +
                    "Journalisten vermoord " +
                    +ExpressionAndInformation[1] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + ExpressionAndInformation[1] * 10 + "%'></div> " +
                    "</div>" +
                    "Journalisten gevangen gezet " +
                    +ExpressionAndInformation[2] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + ExpressionAndInformation[2] * 10 + "%'></div> " +
                    "</div>" +
                    "Wetten en voorschriften die van invloed zijn op media " +
                    +ExpressionAndInformation[3] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + ExpressionAndInformation[3] * 10 + "%'></div> " +
                    "</div>" +
                    "Politieke druk, controlemedia " +
                    +ExpressionAndInformation[4] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + ExpressionAndInformation[4] * 10 + "%'></div> " +
                    "</div>" +
                    "Toegang tot kabel en satelliet " +
                    +ExpressionAndInformation[5] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + ExpressionAndInformation[5] * 10 + "%'></div> " +
                    "</div>" +
                    "Vrijheid van toegang tot buitenlandse informatie " +
                    +ExpressionAndInformation[6] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + ExpressionAndInformation[6] * 10 + "%'></div> " +
                    "</div>" +
                    "Staatscontrole over internettoegang " +
                    +ExpressionAndInformation[7] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + ExpressionAndInformation[7] * 10 + "%'></div> " +
                    "</div>" +
                    "</li>" +
                    "<br><div class='divider'></div><br>" +
                    "<li>" +
                    "<b>Identiteit en relaties </b>" +
                    +IdentityAndRelationships[0] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate'  style='width: " + IdentityAndRelationships[0] * 10 + "%'></div> " +
                    "</div>" +
                    "Wettelijke genders " +
                    +IdentityAndRelationships[1] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + IdentityAndRelationships[1] * 10 + "%'></div> " +
                    "</div>" +
                    "Ouderlijke rechten " +
                    +IdentityAndRelationships[2] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + IdentityAndRelationships[2] * 10 + "%'></div> " +
                    "</div>" +
                    "Gelijksoortige relaties " +
                    +IdentityAndRelationships[3] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + IdentityAndRelationships[3] * 10 + "%'></div> " +
                    "</div>" +
                    "Scheiden " +
                    +IdentityAndRelationships[4] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + IdentityAndRelationships[4] * 10 + "%'></div> " +
                    "</div>" +
                    "</li>" +
                    "<br><div class='divider'></div><br>" +
                    "<li>" +
                    "<b>Size of Government </b>" +
                    +SizeOfGovernment[0] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate'  style='width: " + SizeOfGovernment[0] * 10 + "%'></div> " +
                    "</div>" +

                    "Government Consumption " +
                    +SizeOfGovernment[1] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + SizeOfGovernment[1] * 10 + "%'></div> " +
                    "</div>" +

                    "Transfers and Subsidies " +
                    +SizeOfGovernment[2] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + SizeOfGovernment[2] * 10 + "%'></div> " +
                    "</div>" +

                    "Government Enterprises " +
                    +SizeOfGovernment[3] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + SizeOfGovernment[3] * 10 + "%'></div> " +
                    "</div>" +

                    "Top Marginal Tax Rate " +
                    +SizeOfGovernment[4] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + SizeOfGovernment[4] * 10 + "%'></div> " +
                    "</div>" +
                    "</li>" +
                    "<br><div class='divider'></div><br>" +
                    "<li>" +
                    "<b>Legal System and Property Rights </b>" +
                    +LegalSystemAndPropRights[0] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate'  style='width: " + LegalSystemAndPropRights[0] * 10 + "%'></div>" +
                    "</div>" +
                    "Judicial Independence " +
                    +LegalSystemAndPropRights[1] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + LegalSystemAndPropRights[1] * 10 + "%'></div>" +
                    "</div>" +
                    "Impartial Courts " +
                    +LegalSystemAndPropRights[2] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + LegalSystemAndPropRights[2] * 10 + "%'></div>" +
                    "</div>" +
                    "Protection of Property Rights " +
                    +LegalSystemAndPropRights[3] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + LegalSystemAndPropRights[3] * 10 + "%'></div>" +
                    "</div>" +
                    "Military Interference " +
                    +LegalSystemAndPropRights[4] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + LegalSystemAndPropRights[4] * 10 + "%'></div>" +
                    "</div>" +
                    "Integrity of the Legal System " +
                    +LegalSystemAndPropRights[5] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + LegalSystemAndPropRights[5] * 10 + "%'></div>" +
                    "</div>" +
                    "Legal Enforcements of Contracts " +
                    +LegalSystemAndPropRights[6] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + LegalSystemAndPropRights[6] * 10 + "%'></div>" +
                    "</div>" +
                    "Regulatory Restrictions " +
                    +LegalSystemAndPropRights[7] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + LegalSystemAndPropRights[7] * 10 + "%'></div>" +
                    "</div>" +
                    "Reliability of Police " +
                    +LegalSystemAndPropRights[8] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + LegalSystemAndPropRights[8] * 10 + "%'></div>" +
                    "</div>" +
                    "Business Cost of Crime " +
                    +LegalSystemAndPropRights[9] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + LegalSystemAndPropRights[9] * 10 + "%'></div>" +
                    "</div>" +
                    "</li>" +
                    "<br><div class='divider'></div><br>" +
                    "<li>" +
                    "<b>Sound Money </b>" +
                    +SoundMoney[0] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate'  style='width: " + SoundMoney[0] * 10 + "%'></div> " +
                    "</div>" +
                    "Money Growth " +
                    +SoundMoney[1] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + SoundMoney[1] * 10 + "%'></div> " +
                    "</div>" +
                    "Standard Deviation of Inflation " +
                    +SoundMoney[2] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + SoundMoney[2] * 10 + "%'></div> " +
                    "</div>" +
                    "Inflation: Most Recent Year " +
                    +SoundMoney[3] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + SoundMoney[3] * 10 + "%'></div> " +
                    "</div>" +
                    "Freedom to Own Foreign Currency " +
                    +SoundMoney[4] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + SoundMoney[4] * 10 + "%'></div> " +
                    "</div>" +
                    "</li>" +
                    "<br><div class='divider'></div><br>" +
                    "<li>" +
                    "<b>Freedom to Trade Internationally </b>" +
                    +FreedomToTradeInt[0] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate'  style='width: " + FreedomToTradeInt[0] * 10 + "%'></div> " +
                    "</div>" +
                    "Tariffs " +
                    +FreedomToTradeInt[1] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + FreedomToTradeInt[1] * 10 + "%'></div> " +
                    "</div>" +
                    "Regulatory Trade Barriers " +
                    +FreedomToTradeInt[2] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + FreedomToTradeInt[2] * 10 + "%'></div> " +
                    "</div>" +
                    "Black-Market Exchange Rates " +
                    +FreedomToTradeInt[3] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + FreedomToTradeInt[3] * 10 + "%'></div> " +
                    "</div>" +
                    "Movement of Capital and People " +
                    +FreedomToTradeInt[4] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + FreedomToTradeInt[4] * 10 + "%'></div> " +
                    "</div>" +
                    "</li>" +
                    "<br><div class='divider'></div><br>" +
                    "<li>" +
                    "<b>Regulation </b>" +
                    +Regulation[0] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate'  style='width: " + Regulation[0] * 10 + "%'></div> " +
                    "</div>" +
                    "Credit Market Regulations " +
                    +Regulation[1] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + Regulation[1] * 10 + "%'></div> " +
                    "</div>" +
                    "Labor Market Regulations " +
                    +Regulation[2] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + Regulation[2] * 10 + "%'></div> " +
                    "</div>" +
                    "Business Regulations " +
                    +Regulation[3] +
                    "<div class='progress grey lighten-2' style='height: 10px'>" +
                    "<div class='determinate teal lighten-3'  style='width: " + Regulation[3] * 10 + "%'></div> " +
                    "</div>" +
                    "</li>" +
                    "</div>" +

            "</div>" +
            "<div class='modal-footer'>" +
            "<btn id='modalclose' class='modal-action modal-close waves-effect waves-green btn-flat'>Sluiten</btn>" +
            "</div>" +
            "</div>";
    }
    else if (typeof(mili) == 'object' && typeof(cato) != 'object') {
        var info = mili[0];
        var airforce = mili[1];
        var army = mili[2];
        var navy = mili[3];
        var geo = mili[4];
        var money = mili[5];
        var rank = mili[6];
        var totalTickets = sales[1];
        var totalMoney = sales[0];
        var refund = sales[2];


        var innerHmlNorm =
            "<div class='modal-content'>" +
            "<h4 class='center-align'>" + englishName + "</h4>" +
            "<h6 class='center-align'>" + nativeName + "</h6>" +
            "<div class='row'>" +
            "<div class='col s10 push-s1'><div class='center-align'><img style='border: grey 1px solid;' src='" + flag + "' class='responsive-img'></div></div>" +
            "</div>" +
            "<div class='row'>" +
            "<div class='col s10 push-s1'><div class='center-align'><img src='images/coatOfArms/"+iso+".png' class='responsive-img'></div></div>" +
            "</div>" +
            "<div class='divider'></div><br>" +
            "<li><a href='#!' id='info-btn' onclick='showFunction2()'>Laat land informatie zien</a></li>" +
            "<div id='informatie'>" +
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
            "<li><p>Landnummer: " + calling + "</p></li>" +
            "<div class='divider'></div>" +
            "<li><p id='currency'>Munteenheid: </p></li>" +
            "<div class='divider'></div>" +
            "<li><p>Bruto binnenlands product(2016): " + numeral(gdp).format('$ 0,0[.]00') + "</p></li>" +
            "<div class='divider'></div>" +
            pppStyle +
            "<div class='divider'></div>" +
            giniStyle +
            "<div class='divider'></div>" +
            hdiStyle +
            "<div class='divider'></div>" +
            happinessStyle +
            "</div>"+

            "<br><div class='divider'></div><br>" +
            "<li><a href='#!' id='mili-btn' onclick='showFunction()'>Laat Global Fire Power zien</a></li>" +
            "<div id='defensie'>" +
            "<li><p>Global Firepower Rank(2018): " + numeral(rank).format('0o') + "</p></li>" +
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
            "<li><p>Totale grootte van het wegennet (km): " + numeral(geo[2]).format('0,0.00') + " km</p></li>" +
            "<li><p>Grootte van het spoorwegvervoer (km): " + numeral(geo[3]).format('0,0.00') + " km</p></li>" +
            "<li><p>Bruikbare vliegvelden: " + numeral(geo[4]).format('0,0') + "</p></li>" +
            "<li><p>Kustlijn (km): " + numeral(geo[5]).format('0,0.00') + " km</p></li>" +
            "<li><p>Geldeelde grenzen (km): " + numeral(geo[6]).format('0,0.00') + " km</p></li>" +
            "<li><p>Waterwegen (km): " + numeral(geo[7]).format('0,0.00') + " km</p></li>" +
            "<div class='divider'></div>" +
            "<li><p>Defensie Budget: " + numeral(money[0]).multiply(1000000).format('($0.00a)') + "</p></li>" +
            "<li><p>Staatschuld: " + numeral(money[1]).multiply(1000000).format('($0.00a)') + "</p></li>" +
            "<li><p><small>Bron: https://www.globalfirepower.com/</small></p></li>"+
            "</div>" +
            "<br><div class='divider'></div><br>" +
            "<li><a href='#!' id='verkoop-btn' onclick='showFunction3()'>Laat kaarten verkoop zien</a></li>" +
            "<div id='verkopen'>" +
            "<ul>" +
            "<li><p>Totaal aantal verkochte tickets: " + numeral(totalTickets).format('0,0') + "</p></li>" +
            "<li><p>Totale omzet: " + numeral(totalMoney).format('$0,0[.]00') + "</p></li>" +
            "<li><p>Totaal bedrag credit nota's: " + numeral(refund).format('$0,0[.]00') + "</p></li>" +
            "</ul>" +
            "</div>" +

            "<br><div class='divider'></div><br>" +
            "<p>Geen Human Freedom Index beschikbaar voor " +englishName+ "</p>" +
            "</div>" +
            "<div class='modal-footer'>" +
            "<btn id='modalclose' class='modal-action modal-close waves-effect waves-green btn-flat'>Sluiten</btn>" +
            "</div>" +
            "</div>";
    }
    else if (typeof (mili) != 'object' && typeof (cato) == 'object') {
        var HumanFreedom = cato[14],
            PersonalFreedom = cato[0],
            RuleOfLaw = cato[1],
            SecurityAndSafety = cato[2],
            Movement = cato[3],
            ReligiousFreedom = cato[4],
            Association = cato[5],
            ExpressionAndInformation = cato[6],
            IdentityAndRelationships = cato[7],
            EconomicFreedom = cato[8],
            SizeOfGovernment = cato[9],
            LegalSystemAndPropRights = cato[10],
            SoundMoney = cato[11],
            FreedomToTradeInt = cato[12],
            Regulation = cato[13];


        var totalTickets = sales[1];
        var totalMoney = sales[0];
        var refund = sales[2];
        var innerHmlNorm = "<div class='modal-content'>" +
            "<h4 class='center-align'>" + englishName + "</h4>" +
            "<h6 class='center-align'>" + nativeName + "</h6>" +
            "<div class='row'>" +
            "<div class='col s10 push-s1'><div class='center-align'><img style='border: grey 1px solid;' src='" + flag + "' class='responsive-img'></div></div>" +
            "</div>" +
            "<div class='row'>" +
            "<div class='col s10 push-s1'><div class='center-align'><img src='images/coatOfArms/"+iso+".png' class='responsive-img'></div></div>" +
            "</div>" +
            "<li><a href='#!' id='info-btn' onclick='showFunction2()'>Laat land informatie zien</a></li>" +
            "<div id='informatie'>" +
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
            "<li><p>Landnummer: " + calling + "</p></li>" +
            "<div class='divider'></div>" +
            "<li><p id='currency'>Munteenheid: </p></li>" +
            "<div class='divider'></div>" +
            "<li><p>Bruto binnenlands product(2016): " + numeral(gdp).format('$ 0,0[.]00') + "</p></li>" +
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
            "<div class='divider'></div> " +
            "<li><p>Human Freedom Ranking(2017): "+HumanFreedom[1]+"/159</p></li>" +
            "</ul>" +
            "</div>" +
            "<br><div class='divider'></div><br>" +
            "<li><a href='#!' id='verkoop-btn' onclick='showFunction3()'>Laat kaarten verkoop zien</a></li>"+
            "<div id='verkopen'>"+
            "<ul>" +
            "<li><p>Totaal aantal verkochte tickets: " + numeral(totalTickets).format('0,0')+ "</p></li>" +
            "<li><p>Totale omzet: " + numeral(totalMoney).format('$0,0[.]00') + "</p></li>"+
            "<li><p>Totaal bedrag credit nota's: " + numeral(refund).format('$0,0[.]00') + "</p></li>"+
            "</ul>" +
            "</div>"+
            "<br><div class='divider'></div><br>" +
            "<li><a href='#!' id='info-btn' onclick='showFunction4()'>Laat Cato Human Freedom Index zien</a></li><br>" +
            "<div id='freedom'>" +
            "<li>" +
            "<b>Persoonlijke vrijheid </b>"+
            +PersonalFreedom+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate'  style='width: "+PersonalFreedom*10+"%'></div>"+
            "</div>" +
            "</li>"+
            "<br><div class='divider'></div></br>" +
            "<li>" +
            "<b>Economische vrijheid </b>"+
            +EconomicFreedom+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate'  style='width: "+EconomicFreedom*10+"%'></div>"+
            "</div>" +
            "</li>"+
            "<br><div class='divider'></div></br>" +
            "<li>" +
            "<b>Rechtsstaat </b>"+
            +RuleOfLaw[0]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate'  style='width: "+RuleOfLaw[0]*10+"%'></div>"+
            "</div>" +
            "</li>"+
            "<li>"+
            "Procedurele rechtvaardigheid "+
            + RuleOfLaw[1]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+RuleOfLaw[1]*10+"%'></div>"+
            "</div>" +
            "</li>"+
            "<li>"+
            "Civiel recht "+
            + RuleOfLaw[2]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+RuleOfLaw[2]*10+"%'></div>"+
            "</div>" +
            "</li>"+
            "<li>"+
            "Strafrecht "+
            + RuleOfLaw[3] +
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+RuleOfLaw[3]*10+"%'></div>"+
            "</div>" +
            "</li>"+
            "<br><div class='divider'></div><br>" +
            "<li>"+
            "<b>Beveiliging en veiligheid </b>"+
            + SecurityAndSafety[0]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate'  style='width: "+SecurityAndSafety[0]*10+"%'></div> "+
            "</div>" +
            "Manslag "+
            + SecurityAndSafety[1]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+SecurityAndSafety[1]*10+"%'></div>"+
            "</div>" +
            "Verdwijningen, conflicten en terrorisme "+
            + SecurityAndSafety[2]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+SecurityAndSafety[2]*10+"%'></div>"+
            "</div>" +
            "Vrouwen veiligheid "+
            + SecurityAndSafety[3]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+SecurityAndSafety[3]*10+"%'></div>"+
            "</div>" +
            "</li>" +
            "<br><div class='divider'></div><br>" +
            "<li>"+
            "<b>Beweging </b>"+
            + Movement[0]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate'  style='width: "+Movement[0]*10+"%'></div> "+
            "</div>" +
            "Vrijheid van buitenlandse beweging "+
            + Movement[1]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+Movement[1]*10+"%'></div> "+
            "</div>" +
            "Vrijheid van binnenlandse beweging "+
            + Movement[2]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+Movement[2]*10+"%'></div> "+
            "</div>" +
            "Bewegingsvrijheid van vrouwen "+
            + Movement[3]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+Movement[3]*10+"%'></div> "+
            "</div>" +
            "</li>" +
            "<br><div class='divider'></div><br>" +
            "<li>"+
            "<b>Geloofs vrijheid </b>"+
            +ReligiousFreedom[0]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate'  style='width: "+ReligiousFreedom[0]*10+"%'></div> "+
            "</div>" +
            "Vrijheid om religieuze organisaties op te richten en te exploiteren "+
            +ReligiousFreedom[1]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+ReligiousFreedom[1]*10+"%'></div> "+
            "</div>" +
            "Intimidatie en fysieke vijandelijkheden "+
            +ReligiousFreedom[2]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+ReligiousFreedom[2]*10+"%'></div> "+
            "</div>" +
            "Juridische en wettelijke beperkingen "+
            +ReligiousFreedom[3]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+ReligiousFreedom[3]*10+"%'></div> "+
            "</div>" +
            "</li>" +
            "<br><div class='divider'></div><br>" +
            "<li>"+
            "<b>Vereniging </b>"+
            +Association[0]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate'  style='width: "+Association[0]*10+"%'></div> "+
            "</div>" +
            "Vrijheid van vereniging "+
            +Association[1]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+Association[1]*10+"%'></div> "+
            "</div>" +
            "Verzamelen en demonstreren "+
            +Association[2]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+Association[2]*10+"%'></div> "+
            "</div>" +
            "Vrijheid om organisaties te vestigen en te exploiteren "+
            +Association[3]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+Association[3]*10+"%'></div> "+
            "</div>" +
            "</li>" +
            "<br><div class='divider'></div><br>" +
            "<li>"+
            "<b>Uitdrukking en informatie </b>" +
            +ExpressionAndInformation[0]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate'  style='width: "+ExpressionAndInformation[0]*10+"%'></div> "+
            "</div>" +
            "Journalisten vermoord " +
            +ExpressionAndInformation[1]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+ExpressionAndInformation[1]*10+"%'></div> "+
            "</div>" +
            "Journalisten gevangen gezet " +
            +ExpressionAndInformation[2]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+ExpressionAndInformation[2]*10+"%'></div> "+
            "</div>" +
            "Wetten en voorschriften die van invloed zijn op media " +
            +ExpressionAndInformation[3]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+ExpressionAndInformation[3]*10+"%'></div> "+
            "</div>" +
            "Politieke druk, controlemedia " +
            +ExpressionAndInformation[4]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+ExpressionAndInformation[4]*10+"%'></div> "+
            "</div>" +
            "Toegang tot kabel en satelliet " +
            +ExpressionAndInformation[5]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+ExpressionAndInformation[5]*10+"%'></div> "+
            "</div>" +
            "Vrijheid van toegang tot buitenlandse informatie " +
            +ExpressionAndInformation[6]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+ExpressionAndInformation[6]*10+"%'></div> "+
            "</div>" +
            "Staatscontrole over internettoegang " +
            +ExpressionAndInformation[7]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+ExpressionAndInformation[7]*10+"%'></div> "+
            "</div>" +
            "</li>" +
            "<br><div class='divider'></div><br>" +
            "<li>"+
            "<b>Identiteit en relaties </b>"+
            +IdentityAndRelationships[0]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate'  style='width: "+IdentityAndRelationships[0]*10+"%'></div> "+
            "</div>" +
            "Wettelijke genders "+
            +IdentityAndRelationships[1]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+IdentityAndRelationships[1]*10+"%'></div> "+
            "</div>" +
            "Ouderlijke rechten "+
            +IdentityAndRelationships[2]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+IdentityAndRelationships[2]*10+"%'></div> "+
            "</div>" +
            "Gelijksoortige relaties "+
            +IdentityAndRelationships[3]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+IdentityAndRelationships[3]*10+"%'></div> "+
            "</div>" +
            "Scheiden "+
            +IdentityAndRelationships[4]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+IdentityAndRelationships[4]*10+"%'></div> "+
            "</div>" +
            "</li>" +
            "<br><div class='divider'></div><br>" +
            "<li>"+
            "<b>Size of Government </b>"+
            +SizeOfGovernment[0]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate'  style='width: "+SizeOfGovernment[0]*10+"%'></div> "+
            "</div>" +

            "Government Consumption "+
            +SizeOfGovernment[1]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+SizeOfGovernment[1]*10+"%'></div> "+
            "</div>" +

            "Transfers and Subsidies "+
            +SizeOfGovernment[2]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+SizeOfGovernment[2]*10+"%'></div> "+
            "</div>" +

            "Government Enterprises "+
            +SizeOfGovernment[3]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+SizeOfGovernment[3]*10+"%'></div> "+
            "</div>" +

            "Top Marginal Tax Rate "+
            +SizeOfGovernment[4]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+SizeOfGovernment[4]*10+"%'></div> "+
            "</div>" +
            "</li>" +
            "<br><div class='divider'></div><br>" +
            "<li>"+
            "<b>Legal System and Property Rights </b>"+
            +LegalSystemAndPropRights[0]+
            "<div class='progress grey lighten-2' style='height: 10px'>"+
            "<div class='determinate'  style='width: "+LegalSystemAndPropRights[0]*10+"%'></div>" +
            "</div>" +
            "Judicial Independence "+
            +LegalSystemAndPropRights[1]+
            "<div class='progress grey lighten-2' style='height: 10px'>"+
            "<div class='determinate teal lighten-3'  style='width: "+LegalSystemAndPropRights[1]*10+"%'></div>" +
            "</div>" +
            "Impartial Courts "+
            +LegalSystemAndPropRights[2]+
            "<div class='progress grey lighten-2' style='height: 10px'>"+
            "<div class='determinate teal lighten-3'  style='width: "+LegalSystemAndPropRights[2]*10+"%'></div>" +
            "</div>" +
            "Protection of Property Rights "+
            +LegalSystemAndPropRights[3]+
            "<div class='progress grey lighten-2' style='height: 10px'>"+
            "<div class='determinate teal lighten-3'  style='width: "+LegalSystemAndPropRights[3]*10+"%'></div>" +
            "</div>" +
            "Military Interference "+
            +LegalSystemAndPropRights[4]+
            "<div class='progress grey lighten-2' style='height: 10px'>"+
            "<div class='determinate teal lighten-3'  style='width: "+LegalSystemAndPropRights[4]*10+"%'></div>" +
            "</div>" +
            "Integrity of the Legal System "+
            +LegalSystemAndPropRights[5]+
            "<div class='progress grey lighten-2' style='height: 10px'>"+
            "<div class='determinate teal lighten-3'  style='width: "+LegalSystemAndPropRights[5]*10+"%'></div>" +
            "</div>" +
            "Legal Enforcements of Contracts "+
            +LegalSystemAndPropRights[6]+
            "<div class='progress grey lighten-2' style='height: 10px'>"+
            "<div class='determinate teal lighten-3'  style='width: "+LegalSystemAndPropRights[6]*10+"%'></div>" +
            "</div>" +
            "Regulatory Restrictions "+
            +LegalSystemAndPropRights[7]+
            "<div class='progress grey lighten-2' style='height: 10px'>"+
            "<div class='determinate teal lighten-3'  style='width: "+LegalSystemAndPropRights[7]*10+"%'></div>" +
            "</div>" +
            "Reliability of Police "+
            +LegalSystemAndPropRights[8]+
            "<div class='progress grey lighten-2' style='height: 10px'>"+
            "<div class='determinate teal lighten-3'  style='width: "+LegalSystemAndPropRights[8]*10+"%'></div>" +
            "</div>" +
            "Business Cost of Crime "+
            +LegalSystemAndPropRights[9]+
            "<div class='progress grey lighten-2' style='height: 10px'>"+
            "<div class='determinate teal lighten-3'  style='width: "+LegalSystemAndPropRights[9]*10+"%'></div>" +
            "</div>" +
            "</li>" +
            "<br><div class='divider'></div><br>" +
            "<li>"+
            "<b>Sound Money </b>"+
            +SoundMoney[0]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate'  style='width: "+SoundMoney[0]*10+"%'></div> "+
            "</div>" +
            "Money Growth "+
            +SoundMoney[1]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+SoundMoney[1]*10+"%'></div> "+
            "</div>" +
            "Standard Deviation of Inflation "+
            +SoundMoney[2]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+SoundMoney[2]*10+"%'></div> "+
            "</div>" +
            "Inflation: Most Recent Year "+
            +SoundMoney[3]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+SoundMoney[3]*10+"%'></div> "+
            "</div>" +
            "Freedom to Own Foreign. Currency "+
            +SoundMoney[4]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+SoundMoney[4]*10+"%'></div> "+
            "</div>" +
            "</li>" +
            "<br><div class='divider'></div><br>" +
            "<li>"+
            "<b>Freedom to Trade Internationally </b>"+
            +FreedomToTradeInt[0]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate'  style='width: "+FreedomToTradeInt[0]*10+"%'></div> "+
            "</div>" +
            "Tariffs "+
            +FreedomToTradeInt[1]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+FreedomToTradeInt[1]*10+"%'></div> "+
            "</div>" +
            "Regulatory Trade Barriers "+
            +FreedomToTradeInt[2]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+FreedomToTradeInt[2]*10+"%'></div> "+
            "</div>" +
            "Black-Market Exchange Rates "+
            +FreedomToTradeInt[3]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+FreedomToTradeInt[3]*10+"%'></div> "+
            "</div>" +
            "Movement of Capital and People "+
            +FreedomToTradeInt[4]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+FreedomToTradeInt[4]*10+"%'></div> "+
            "</div>" +
            "</li>" +
            "<br><div class='divider'></div><br>" +
            "<li>"+
            "<b>Regulation </b>"+
            +Regulation[0]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate'  style='width: "+Regulation[0]*10+"%'></div> "+
            "</div>" +
            "Credit Market Regulations "+
            +Regulation[1]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+Regulation[1]*10+"%'></div> "+
            "</div>" +
            "Labor Market Regulations "+
            +Regulation[2]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+Regulation[2]*10+"%'></div> "+
            "</div>" +
            "Business Regulations "+
            +Regulation[3]+
            "<div class='progress grey lighten-2' style='height: 10px'>" +
            "<div class='determinate teal lighten-3'  style='width: "+Regulation[3]*10+"%'></div> "+
            "</div>" +
            "</li>" +
            "</div>" +
            "</div>" +
            "<div class='modal-footer'>" +
            "<btn id='modalclose' class='modal-action modal-close waves-effect waves-green btn-flat'>Sluiten</btn>" +
            "</div>" +
            "</div>";
    }
    else {
        var totalTickets = sales[1];
        var totalMoney = sales[0];
        var refund = sales[2];
        var innerHmlNorm = "<div class='modal-content'>" +
            "<h4 class='center-align'>" + englishName + "</h4>" +
            "<h6 class='center-align'>" + nativeName + "</h6>" +
            "<div class='row'>" +
            "<div class='col s10 push-s1'><div class='center-align'><img style='border: grey 1px solid;' src='" + flag + "' class='responsive-img'></div></div>" +
            "</div>" +
            "<div class='row'>" +
            "<div class='col s10 push-s1'><div class='center-align'><img src='images/coatOfArms/"+iso+".png' class='responsive-img'></div></div>" +
            "</div>" +
            "<li><a href='#!' id='info-btn' onclick='showFunction2()'>Laat land informatie zien</a></li>" +
            "<div id='informatie'>" +
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
                    "<li><p>Landnummer: " + calling + "</p></li>" +
                    "<div class='divider'></div>" +
                    "<li><p id='currency'>Munteenheid: </p></li>" +
                    "<div class='divider'></div>" +
                    "<li><p>Bruto binnenlands product(2016): " + numeral(gdp).format('$ 0,0[.]00') + "</p></li>" +
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

                "</ul>" +
            "</div>" +
            "<br><div class='divider'></div><br>" +
            "<li><a href='#!' id='verkoop-btn' onclick='showFunction3()'>Laat kaarten verkoop zien</a></li>"+
            "<div id='verkopen'>"+
                "<ul>" +
                    "<li><p>Totaal aantal verkochte tickets: " + numeral(totalTickets).format('0,0')+ "</p></li>" +
                    "<li><p>Totale omzet: " + numeral(totalMoney).format('$0,0[.]00') + "</p></li>"+
                    "<li><p>Totaal bedrag credit nota's: " + numeral(refund).format('$0,0[.]00') + "</p></li>"+
                "</ul>" +
            "</div>"+
            "<br><div class='divider'></div><br>" +
            "<p>Geen Human Freedom Index data beschikbaar voor "+englishName+"</p>" +
            "</div>" +
            "<div class='modal-footer'>" +
            "<btn id='modalclose' class='modal-action modal-close waves-effect waves-green btn-flat'>Sluiten</btn>" +
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
 * This function gets all the sales from afas.
 */
function getSales(iso) {
    // "iso" is the ISO 1366 alpha-2 code of the country clicked on.
    var authcode = btoa("<token><version>1</version><data>BFB2BED0440C49DFBC53C0781B68E47F71ACC7C44C3F7CF69A397ABB3F943B73</data></token>");

    var request = new XMLHttpRequest();
    var apiCall = 'https://83814.afasonlineconnector.nl/ProfitRestServices/connectors/Profit_Salesorders_2?filterfieldids=ISO_Alpha-2&filtervalues=' + iso + '&operatortypes=1&take=1000000';
    request.open('GET', apiCall, false);  // `false` makes the request synchronous
    request.setRequestHeader('Authorization', 'AfasToken ' + authcode);
    request.send(null);
    var result = [];
    if (request.status === 200) {
        var data = request.responseText;
        var response = JSON.parse(data);

        var totalOrder = response.rows.length;
        var refund = 0.00;
        var totalPrice = 0.00;
        for (var i = 0; i < response.rows.length; i++) {
            var orderNr = response.rows[i].OrderNumber;
            var totalAmount = parseFloat(response.rows[i].TotalAmount);
            var currency = response.rows[i].CurrencyId;
            var orderDate = response.rows[i].OrderDate;
            //console.log(response.rows[i]);
            orderDate = orderDate.slice(0,-10);

            if (currency !== "EUR") {
                //console.log("before: " + totalAmount);
                var ConvertRequest = new XMLHttpRequest();
                var ConvertApiCall = "http://data.fixer.io/api/" + orderDate + "?access_key=9356b1315cce0a5654a1eeb7ea64f9ee";
                ConvertRequest.open('GET', ConvertApiCall, false);
                ConvertRequest.send(null);
                //console.log(ConvertApiCall);
                var rows = JSON.parse(ConvertRequest.responseText);
                var rates = rows.rates;
                for (var x in rates) {
                    if (x.indexOf(currency) != -1) {
                        if(JSON.stringify(totalAmount).indexOf("-") != -1) {
                            totalAmount = totalAmount * rates[x];
                            refund += totalAmount;
                        } else {
                            totalAmount = totalAmount * rates[x];
                            totalPrice += totalAmount;
                            //console.log("after: " +totalAmount);
                        }
                    }
                }

            }
            if (!(result.includes(orderNr))) {
                totalPrice += totalAmount;
                result.push(orderNr);
            }
            if (JSON.stringify(totalAmount).indexOf("-") != -1) {
                refund += totalAmount;

            }
        }
        result = [];
        //console.log(totalPrice);

    }
    return [totalPrice, totalOrder, refund];

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
    request.open('GET', 'data/hdi.json', false);  // `false` makes the request synchronous
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
                        //console.log("found hdi: " + hdi);
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
    request.open('GET', 'data/gdp.json', false);  // `false` makes the request synchronous
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
                        var ConvertRequest = new XMLHttpRequest();
                        var ConvertApiCall = "http://data.fixer.io/api/latest?access_key=9356b1315cce0a5654a1eeb7ea64f9ee";
                        ConvertRequest.open('GET', ConvertApiCall, false);
                        ConvertRequest.send(null);
                        var rows = JSON.parse(ConvertRequest.responseText);
                        var rates = rows.rates;
                        for (var x in rates) {
                            if (x.indexOf("USD") != -1) {
                                gdp = gdp / rates[x];
                            }
                        }
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
    request.open('GET', 'data/ppp.json', false);  // `false` makes the request synchronous
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
                        var ConvertRequest = new XMLHttpRequest();
                        var ConvertApiCall = "http://data.fixer.io/api/latest?access_key=9356b1315cce0a5654a1eeb7ea64f9ee";
                        ConvertRequest.open('GET', ConvertApiCall, false);
                        ConvertRequest.send(null);
                        var rows = JSON.parse(ConvertRequest.responseText);
                        var rates = rows.rates;
                        for (var x in rates) {
                            if (x.indexOf("USD") != -1) {
                                ppp = ppp / rates[x];
                            }
                        }
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
    request.open('GET', 'data/happy.json', false);  // `false` makes the request synchronous
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
                        //console.log("found happiness index: " + happiness);
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
        "Luxembourg",
        "Trinidad and Tobago",
        "Brunei Darussalam"
    ];
    var request = new XMLHttpRequest();
    request.open('GET', 'data/gfp.json', false);  // `false` makes the request synchronous
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
                for (var k = 0; k < money.length; k++) {
                    var ConvertRequest = new XMLHttpRequest();
                    var ConvertApiCall = "http://data.fixer.io/api/latest?access_key=9356b1315cce0a5654a1eeb7ea64f9ee";
                    ConvertRequest.open('GET', ConvertApiCall, false);
                    ConvertRequest.send(null);
                    var rows = JSON.parse(ConvertRequest.responseText);
                    var rates = rows.rates;
                    for (var x in rates) {
                        if (x.indexOf("USD") != -1) {
                            money[k] = money[k] / rates[x];
                        }
                    }
                }

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
 * The variable "englishName" holds a string containing the name of the country that is click on.
 * This function retrieves the Human Freedom Index information of "englishName" from cato.json
 *
 */
function getCato(englishName) {
    var cato;
    var exceptions = [
        "Puerto Rico",
        "Falkland Islands (Malvinas)",
        "North Cyprus",
        "Greenland",
        "Somaliland",
        "Djibouti",
        "New Caledonia",
        "Western Sahara",
        "Republic of Kosovo",
        "Palestine, State of",
        "Eritrea",
        "Equatoriaal-Giunea",
        "Solomon Islands",
        "French Southern Territories",
        "Iraq",
        "Uzbekistan",
        "Belarus",
        "Somalia",
        "Afghanistan",
        "Turkmenistan",
        "Korea (Democratic People's Republic of)",
        "Cuba",
        "Côte d'Ivoire",
        "South Sudan",
        "Sudan"

    ];
    var request = new XMLHttpRequest();
    request.open('GET', 'data/cato.json', false);  // `false` makes the request synchronous
    request.send(null);

    if (request.status === 200) {
        var data = request.responseText;
        var result = JSON.parse(data);
        for (var i = 0; i < result.length; i++) {
            var country = result[i]["Countries"];
            if (country.indexOf(englishName) != -1 && englishName != null) {
                var personalFreedom = result[i]["PERSONAL FREEDOM (Score)"];
                var ruleOfLaw = [result[i]["Rule of Law"], result[i]["Procedural Justice"], result[i]["Civil Justice"], result[i]["Criminal Justice"]];
                var securityAndSafety = [result[i]["Security & Safety"], result[i]["Homicide"], result[i]["Disapperances  Conflicts and Terrorism"], result[i]["Womens Security & Safety"]];
                var movement = [result[i]["Movement"], result[i]["Domestic Movement"], result[i]["Foreign Movement"], result[i]["Womens Movement"]];
                var religiousFreedom = [result[i]["Religion"], result[i]["Establishing and Operating Religious Organizations"], result[i]["Harassment and Physical Hostilities"], result[i]["Legal and Regulatory Restrictions"]];
                var association = [result[i]["Association"], result[i]["Assembly"], result[i]["Establishing and Operating Organizations"], result[i]["Association Assembly & Civil Society"]];
                var expressionAndInformation = [result[i]["Expression & Information"], result[i]["Press Killed"], result[i]["Press Jailed"], result[i]["Laws and Regulations that Influence Media Content"], result[i]["Political Pressures and Controls on Media Content"], result[i]["Access to Cable/Satellite"], result[i]["Access to Foreign Newspapers"], result[i]["State Control over Internet Access"]];
                var identityAndRelationships = [result[i]["Identity & Relationships"], result[i]["Legal Gender"], result[i]["Parental Rights"], result[i]["SameSex Relationships"], result[i]["Divorce"]];
                var economicFreedom = result[i]["ECONOMIC FREEDOM (Score)"];
                var sizeOfGovernment = [result[i]["Size of Government"], result[i]["Government Consumption"], result[i]["Transfers and subsidies"], result[i]["Government enterprises and investment"], result[i]["Top marginal tax rate"]];
                var legalSystemAndPropRights = [result[i]["Legal System & Property Rights"], result[i]["Judicial independence"], result[i]["Impartial courts"], result[i]["Protection of property rights"], result[i]["Military interference in rule of law and politics"], result[i]["Integrity of the legal system"], result[i]["Legal enforcement of contracts"], result[i]["Regulatory restrictions on the sale of real property"], result[i]["Reliability of police"], result[1]["Business costs of crime"]];
                var soundMoney = [result[i]["Sound Money"], result[i]["Money growth"], result[i]["Standard deviation of inflation"], result[i]["Inflation: Most recent year"], result[i]["Freedom to own foreign currency bank accounts"]];
                var freedomToTradeInt = [result[i]["Freedom to trade internationally"], result[i]["Tariffs"], result[i]["Regulatory trade barriers"], result[i]["Black market exchange rates"], result[i]["Controls of the movement of capital and people"]];
                var regulation = [result[i]["Regulation"], result[i]["Ownership of banks"], result[i]["Credit market regulations"], result[i]["Labor market regulations"], result[i]["Business regulations"]];
                var humanFreedom = [result[i]["HUMAN FREEDOM (Score)"], result[i]["HUMAN FREEDOM (Rank)"]];

                return [personalFreedom, ruleOfLaw, securityAndSafety, movement, religiousFreedom, association, expressionAndInformation, identityAndRelationships, economicFreedom, sizeOfGovernment, legalSystemAndPropRights, soundMoney, freedomToTradeInt, regulation, humanFreedom];
            } else {
                for (var j = 0; j < exceptions.length; j++) {
                    if (exceptions[j].indexOf(englishName) != -1) {
                        cato = "Geen Human Freedom Index data beschikbaar";
                        return cato;
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
    } else if (mili == "Trinidad and Tobago") {
        mili = "<li><p>Geen militaire data beschikbaar voor " + mili + "</p></li>";
    } else if (mili == "Brunei Darussalam") {
        mili = "<li><p>Geen militaire data beschikbaar voor "+ mili + "</p></li>";
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
        ppp = "<li><p>koopkrachtpariteit per hoofd van de bevolking (2016): " + numeral(ppp).format('$0,0[.]00') + "<span style='color: #00cd00'><b> Extremely high</b></span></p></li>";
    } else if (ppp < 50000 && ppp >= 35000) {
        ppp = "<li><p>koopkrachtpariteit per hoofd van de bevolking (2016): " + numeral(ppp).format('$0,0[.]00') + "<span style='color: #30ff30'><b> Very high</b></span></p></li>";
    } else if (ppp < 35000 && ppp >= 20000) {
        ppp = "<li><p>koopkrachtpariteit per hoofd van de bevolking (2016): " + numeral(ppp).format('$0,0[.]00') + "<span style='color: #9aff9a'><b> High</b></span></p></li>";
    } else if (ppp < 20000 && ppp >= 10000) {
        ppp = "<li><p>koopkrachtpariteit per hoofd van de bevolking (2016): " + numeral(ppp).format('$0,0[.]00') + "<span style='color: #fc0'><b> Medium</b></span></p></li>";
    } else if (ppp < 10000 && ppp >= 5000) {
        ppp = "<li><p>koopkrachtpariteit per hoofd van de bevolking (2016): " + numeral(ppp).format('$0,0[.]00') + "<span style='color: #ff6666'><b> Low</b></span></p></li>";
    } else if (ppp < 5000 && ppp >= 2000) {
        ppp = "<li><p>koopkrachtpariteit per hoofd van de bevolking (2016): " + numeral(ppp).format('$0,0[.]00') + "<span style='color: #ff1212'><b> Very low</b></span></p></li>";
    } else if (ppp < 2000) {
        ppp = "<li><p>koopkrachtpariteit per hoofd van de bevolking (2016): " + numeral(ppp).format('$0,0[.]00') + "<span style='color: #cd0000'><b> Extremely low</b></span></p></li>";
    } else {
        ppp = "<li><p>koopkrachtpariteit per hoofd van de bevolking (2016): Geen data beschikbaar </p></li>";
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
        happiness = "<li><p>World Happiness Index(2018): " + numeral(happiness).format('0o') + "<span style='color: #002400'><b> Near perfect</b></span></p></li>";
    } else if (happiness > 8 && happiness <= 20) {
        happiness = "<li><p>World Happiness Index(2018): " + numeral(happiness).format('0o') + "<span style='color: #006d00'><b> Extremely good</b></span></p></li>";
    } else if (happiness > 20 && happiness <= 36) {
        happiness = "<li><p>World Happiness Index(2018): " + numeral(happiness).format('0o') + "<span style='color:#00b600 '><b> Very good</b></span></p></li>";
    } else if (happiness > 36 && happiness <= 48) {
        happiness = "<li><p>World Happiness Index(2018): " + numeral(happiness).format('0o') + "<span style='color: #24ff24'><b> Good</b></span></p></li>";
    } else if (happiness > 48 && happiness <= 61) {
        happiness = "<li><p>World Happiness Index(2018): " + numeral(happiness).format('0o') + "<span style='color: #6dff6d'><b> Quite well</b></span></p></li>";
    } else if (happiness > 61 && happiness <= 74) {
        happiness = "<li><p>World Happiness Index(2018): " + numeral(happiness).format('0o') + "<span style='color:#b6ffb6 '><b> Ok</b></span></p></li>";
    } else if (happiness > 74 && happiness <= 87) {
        happiness = "<li><p>World Happiness Index(2018): " + numeral(happiness).format('0o') + "<span style='color: #ffb6b6'><b> Not so well</b></span></p></li>";
    } else if (happiness > 87 && happiness <= 92) {
        happiness = "<li><p>World Happiness Index(2018): " + numeral(happiness).format('0o') + "<span style='color: #ff6d6d'><b> Kind of bad</b></span></p></li>";
    } else if (happiness > 92 && happiness <= 107) {
        happiness = "<li><p>World Happiness Index(2018): " + numeral(happiness).format('0o') + "<span style='color: #ff2424'><b> Bad</b></span></p></li>";
    } else if (happiness > 107 && happiness <= 118) {
        happiness = "<li><p>World Happiness Index(2018): " + numeral(happiness).format('0o') + "<span style='color: #b60000'><b> Very bad</b></span></p></li>";
    } else if (happiness > 118 && happiness <= 131) {
        happiness = "<li><p>World Happiness Index(2018): " + numeral(happiness).format('0o') + "<span style='color: #6d0000'><b> Extremely bad</b></span></p></li>";
    } else if (happiness > 131 && happiness <= 143) {
        happiness = "<li><p>World Happiness Index(2018): " + numeral(happiness).format('0o') + "<span style='color: #240000'><b> Super bad</b></span></p></li>";
    } else if (happiness > 143 && happiness <= 156) {
        happiness = "<li><p>World Happiness Index(2018): " + numeral(happiness).format('0o') + "<span style='color: #000000'><b> Worst of the worst</b></span></p></li>";
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

