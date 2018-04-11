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
        case 'Fr. S. and Antartic Lands':
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


    gdp = getGdp(englishName);
    var giniStyle = giniIcon(gini);
    hdi = getHdi(englishName);
    ppp = getPpp(englishName);
    var hdiStyle = hdiIcon(hdi);
    var pppStyle = pppIcon(ppp);



    div.innerHTML = "<div class='modal-content'>" +
        "<h4 class='center-align'>" + englishName + "</h4>" +
        "<h6 class='center-align'>" + nativeName + "</h6>" +
        "<img class='responsive-img center-align' style='border: grey 1px solid' src='" + flag + "'>" +
        "<ul>" +
        "<li><p>Capital: " + capital + "</p></li>" +
        "<div class='divider'></div>" +
        "<li><p>Population: " + numeral(population).format('0,0') + "</p></li>" +
        "<div class='divider'></div>" +
        "<li><p id='language'>Languages:</p></li>" +
        "<div class='divider'></div>" +
        "<li><p>Demonym: " + demonym + "</p></li>" +
        "<div class='divider'></div>" +
        "<li><p>Area: " + numeral(area).format('0,0') + " km2</p></li>" +
        "<div class='divider'></div>" +
        "<li><p>Region: " + region + " (" + subregion + "),<br>" + "</p></li>" +
        "<div class='divider'></div>" +
        "<li><p id='regionalBloc'>Regional Blocs: </p></li>" +
        "<div class='divider'></div>" +
        "<li><p id='timezone'>Timezones: </p></li>" +
        "<div class='divider'></div>" +
        "<li><p id='currency'>Currency: </p></li>" +
        "<div class='divider'></div>" +
        "<li><p>Gross Domestic Product(GDP)(2016): $" + numeral(gdp).format('0,0.00') + "</p></li>" +
        "<div class='divider'></div>" +
        pppStyle+
        "<div class='divider'></div>" +
        giniStyle +
        "<div class='divider'></div>"+
        hdiStyle +
        "</ul>" +
        "</div>" +
        "<div class='modal-footer'>" +
        "<btn id='modalclose' class='modal-action modal-close waves-effect waves-green btn-flat'>Close</btn>" +
        "</div>" +
        "</div>";
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
    var request = new XMLHttpRequest();
    request.open('GET', '../hdi.json', false);  // `false` makes the request synchronous
    request.send(null);

    if (request.status === 200) {
        var data = request.responseText;
        var result = JSON.parse(data);
        for (var i = 0; i < result.length; i++) {
            var country = result[i]["Country"];
            if (country.indexOf(englishName) != -1) {
                hdi = result[i]["2014"];
                console.log("found hdi: " + hdi);
                return hdi;
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
    var request = new XMLHttpRequest();
    request.open('GET', '../gdp.json', false);  // `false` makes the request synchronous
    request.send(null);

    if (request.status === 200) {
        var data = request.responseText;
        var result = JSON.parse(data);
        for (var i = 0; i < result.length; i++) {
            var country = result[i]["Country Name"];
            if (country.indexOf(englishName) != -1) {
                gdp = result[i]["2016 [YR2016]"];
                console.log("found gdp: " + gdp);
                return gdp;
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
    var request = new XMLHttpRequest();
    request.open('GET', '../ppp.json', false);  // `false` makes the request synchronous
    request.send(null);

    if (request.status === 200) {
        var data = request.responseText;
        var result = JSON.parse(data);
        for (var i = 0; i < result.length; i++) {
            var country = result[i]["Country Name"];
            if (country.indexOf(englishName) != -1) {
                ppp = result[i]["2016 [YR2016]"];
                console.log("found ppp: " + ppp);
                return ppp;
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
        hdi = "<li><p>Human Development Index(2014): " + hdi + "<span style='color: #30ff30'> Very high</span></p>";
    } else if (hdi <= 0.800 && hdi > 0.701) {
        hdi = "<li><p>Human Development Index(2014): " + hdi + "<span style='color: #9aff9a'> High</span></p>";
    } else if (hdi <= 0.700 && hdi > 550) {
        hdi = "<li><p>Human Development Index(2014): " + hdi + "<span style='color: #fc0'> Medium</span></p>";
    } else if (hdi <= 0.550 && hdi > 0.100) {
        hdi = "<li><p>Human Development Index(2014): " + hdi + "<span style='color: #cd0000'> Low</span></p>";
    } else {
        hdi = "<li><p>Human Development Index(2014): " + hdi + "</p>";
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
        gini = "<li><p>Income Equality Index: " + gini + "<span style='color: #00cd00'> Very high</span></p></li>";
    } else if (gini >= 30 && gini < 35) {
        gini = "<li><p>Income Equality Index: " + gini + "<span style='color: #30ff30'> High</span></p></li>";
    } else if (gini >= 35 && gini < 40) {
        gini = "<li><p>Income Equality Index: " + gini + "<span style='color: #9aff9a'> Above average</span></p></li>";
    } else if (gini >= 40 && gini < 45) {
        gini = "<li><p>Income Equality Index: " + gini + "<span style='color: #ffcdff'> Average</span></p></li>";
    } else if (gini >= 45 && gini < 50) {
        gini = "<li><p>Income Equality Index: " + gini + "<span style='color: #ff6666'> Below average</span></p></li>";
    } else if (gini >= 50 && gini < 55) {
        gini = "<li><p>Income Equality Index: " + gini + "<span style='color: #ff1212'> Low</span></p></li>";
    } else if (gini >= 55 && gini < 60) {
        gini = "<li><p>Income Equality Index: " + gini + "<span style='color: #cd0000'> Very low</span></p></li>";
    } else if (gini >= 60 && gini <= 66) {
        gini = "<li><p>Income Equality Index: " + gini + "<span style='color: #9a0000'> Extremely low</span></p></li>";
    } else {
        gini = "<li><p>Income Equality Index: " + gini + "</p></li>";
    }
    return gini;
}

/*
 * The variable "ppp" contains the retrieved value from "getPpp" function.
 * This function categorizes gini scores in seven different categories.
 * Each category has a different colour.
 */
function pppIcon(ppp) {
    if (ppp >= 50000){
        ppp = "<li><p>GDP (at PPP) per capita (2016): $" + numeral(ppp).format('0,0.00') + "<span style='color: #00cd00'> Extremely high</span></p></li>";
    } else if (ppp < 50000 && ppp >= 35000) {
        ppp = "<li><p>GDP (at PPP) per capita (2016): $" + numeral(ppp).format('0,0.00') + "<span style='color: #30ff30'> Very high</span></p></li>";
    } else if (ppp < 35000 && ppp >= 20000) {
        ppp = "<li><p>GDP (at PPP) per capita (2016): $" + numeral(ppp).format('0,0.00') + "<span style='color: #9aff9a'> High</span></p></li>";
    } else if (ppp < 20000 && ppp >= 10000) {
        ppp = "<li><p>GDP (at PPP) per capita (2016): $" + numeral(ppp).format('0,0.00') + "<span style='color: #fc0'> Medium</span></p></li>";
    } else if (ppp < 10000 && ppp >= 5000) {
        ppp = "<li><p>GDP (at PPP) per capita (2016): $" + numeral(ppp).format('0,0.00') + "<span style='color: #ff6666'> Low</span></p></li>";
    } else if (ppp < 5000 && ppp >= 2000) {
        ppp = "<li><p>GDP (at PPP) per capita (2016): $" + numeral(ppp).format('0,0.00') + "<span style='color: #ff1212'> Very low</span></p></li>";
    } else if (ppp < 2000) {
        ppp = "<li><p>GDP (at PPP) per capita (2016): $" + numeral(ppp).format('0,0.00') + "<span style='color: #cd0000'> Extremely low</span></p></li>";
    } else {
        ppp = "<li><p>GDP (at PPP) per capita (2016): $" + numeral(ppp).format('0,0.00') + "</p></li>";
    }

    return ppp;
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

