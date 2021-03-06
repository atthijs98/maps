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
            var iso = result["alpha2Code"];
            if (result["name"] == "Afghanistan") {
                iso = result["alpha3Code"];
                iso = iso.toLowerCase();
            }else {
                var iso = result["alpha2Code"];
                iso = iso.toLowerCase();
            }
            var sales = getSales(iso);
            var gdp = getGdp(result["name"]);
            var giniStyle = giniIcon(result["gini"]);
            var hdi = getHdi(result["name"]);
            var ppp = getPpp(result["name"]);
            var happiness = getHappiness(result["name"]);
            var hdiStyle = hdiIcon(hdi);
            var pppStyle = pppIcon(ppp);
            var happinessStyle = happinessIcon(happiness);

            modal(result, sales,gdp, giniStyle, hdiStyle, pppStyle, happinessStyle, iso);

        }
    };

    xmlhttp.open("GET", url, false);
    xmlhttp.send();
}

/*
 * The variable "result" contains the response of the XMLHttpRequest.
 * This function creates a modal that shows up when a country is clicked on.
 */
function modal(result, sales, gdp, gini, hdi, ppp, happy,iso) {
    var totalTickets = sales[1];
    var totalMoney = sales[0];
    var refund = sales[2];

        var innerHmlNorm = "<div class='modal-content'>" +
            "<h4 class='center-align'>" + result["name"] + "</h4>" +
            "<h6 class='center-align'>" + result["nativeName"] + "</h6>" +
            "<div class='row'>" +
            "<div class='col s10 push-s1'><div class='center-align'><img style='border: grey 1px solid;' src='" + result["flag"] + "' class='responsive-img'></div></div>" +
            "</div>" +
            "<div class='row'>" +
            "<div class='col s10 push-s1'><div class='center-align'><img src='images/coatOfArms/"+iso+".png' class='responsive-img'></div></div>" +
            "</div>" +
            "<li><a href='#!' id='info-btn' onclick='showFunction2()'>Laat land informatie zien</a></li>" +
            "<div id='informatie'>" +
                "<ul>" +
                    "<li><p>Hoofdstad: " + result["capital"] + "</p></li>" +
                    "<div class='divider'></div>" +
                    "<li><p>Aantal inwoners: " + numeral(result["population"]).format('0,0') + "</p></li>" +
                    "<div class='divider'></div>" +
                    "<li><p id='language'>Languages:</p></li>" +
                    "<div class='divider'></div>" +
                    "<li><p>Inwoneraanduiding: " + result["demonym"] + "</p></li>" +
                    "<div class='divider'></div>" +
                    "<li><p>Oppervlakte: " + numeral(result["area"]).format('0,0') + " km2</p></li>" +
                    "<div class='divider'></div>" +
                    "<li><p>Regio: " + result["region"] + " (" + result["subregion"] + "),<br>" + "</p></li>" +
                    "<div class='divider'></div>" +
                    "<li><p id='regionalBloc'>Regionaal Blok: </p></li>" +
                    "<div class='divider'></div>" +
                    "<li><p id='timezone'>Tijdzones: </p></li>" +
                    "<div class='divider'></div>" +
                    "<li><p>Landnummer: " + result["callingCodes"] + "</p></li>" +
                    "<div class='divider'></div>" +
                    "<li><p id='currency'>Munteenheid: </p></li>" +
                    "<div class='divider'></div>" +
                    "<li><p>Bruto binnenlands product(2016): " + numeral(gdp).format('$ 0,0[.]00') + "</p></li>" +
                    "<div class='divider'></div>" +
                    ppp +
                    "<div class='divider'></div>" +
                    gini +
                    "<div class='divider'></div>" +
                    hdi +
                    "<div class='divider'></div>" +
                    happy +


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
            "<br><div class='divider'></div>" +
            "</div>" +
            "<div class='modal-footer'>" +
            "<btn id='modalclose' class='modal-action modal-close waves-effect waves-green btn-flat'>Sluiten</btn>" +
            "</div>" +
            "</div>";





    div.innerHTML = innerHmlNorm;
    document.body.appendChild(div);


    /* The following "for loops" loop through json objects that came back as arrays and adds the results to the modal.
     */
    for (var i = 0; i < result["languages"].length; i++) {
        var languageEnglish = result["languages"][i]["name"];
        var languageNative = result["languages"][i]["nativeName"];
        var a = document.getElementById("language");

        a.innerHTML += " " + languageEnglish + " (" + languageNative + "), ";
    }
    for (var j = 0; j < result["currencies"].length; j++) {
        var currencyName = result["currencies"][j]["name"];
        var currencySymbol = result["currencies"][j]["symbol"];
        var b = document.getElementById("currency");

        b.innerHTML += " " + currencyName + " (" + currencySymbol + ")";
    }
    for (var k = 0; k < result["timezones"].length; k++) {
        var timezone = result["timezones"][k];
        var c = document.getElementById("timezone");

        c.innerHTML += " " + timezone + ", ";


    }
    for (var l = 0; l < result["regionalBlocs"].length; l++) {
        var regionalBloc = result["regionalBlocs"][l]["name"];
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
    var apiCall = 'https://83814.rest.afas.online/ProfitRestServices/connectors/Profit_Salesorders_2?filterfieldids=ISO_Alpha-2&filtervalues=' + iso + '&operatortypes=1&take=1000000';
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

