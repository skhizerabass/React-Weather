(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(t,a,e){t.exports=e(61)},56:function(t,a,e){},58:function(t,a,e){},61:function(t,a,e){"use strict";e.r(a);var n=e(0),i=e.n(n),c=e(25),r=e.n(c),o=e(10),u=e(12),y=e(28),s=e(29),l=e.n(s),m="http://api.openweathermap.org/data/2.5",d="REQUEST_WEATHER",h="RECEIVE_WEATHER",p="REQUEST_WEATHER_FAILED",g="2ecc38b6399b67e99e5a6c97147249ff";function v(t){var a="".concat(m,"/weather?").concat(t,"&units=metric&appid=").concat(g);return function(t){return t({type:d}),l()(a).then(function(t){return t.json()}).then(function(a){return t(function(t){return{type:h,payload:{json:t}}}(a))}).catch(function(a){return t(function(t){return{type:p,error:t}}(a.toString()))})}}var b="REQUEST_LOCATION",f="RECEIVE_LOCATION";var E="ADD_CITY";var S={isFetching:!0};var w={};var N={cities:[]};var k=Object(u.combineReducers)({weather:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case d:return Object.assign({},t,{isFetching:!0});case p:return Object.assign({},t,{isFetching:!1,error:a.error});case h:return Object.assign({},t,{isFetching:!1,current:a.payload.json});default:return t}},location:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case b:return Object.assign({},t,{isFetching:!0});case f:return Object.assign({},t,{isFetching:!1,data:a.payload.location});default:return t}},cities:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case E:return Object.assign({},t,{cities:t.cities.push(a.payload.cities)});default:return t}}});var C=e(64),j=e(66),T=e(63),O=e(4),M=e(5),A=e(8),B=e(6),I=e(7),L=e(62),P=e(65),D=function(t){var a=t.city,e="/ShowWeather/"+a;return i.a.createElement("div",null,i.a.createElement(L.a,{to:e},i.a.createElement("h5",{className:"capital"},a)))},W=function(t){function a(){return Object(O.a)(this,a),Object(A.a)(this,Object(B.a)(a).apply(this,arguments))}return Object(I.a)(a,t),Object(M.a)(a,[{key:"render",value:function(){var t=this.props.cities.cities;return i.a.createElement("div",{className:"center_div"},t.map(function(t){return i.a.createElement(D,{city:t})}),i.a.createElement(L.a,{to:"/addCities"},i.a.createElement("i",{className:"button_add fa fa-2x fa-plus"})))}}]),a}(i.a.Component),F=Object(P.a)(Object(o.connect)(function(t){return{cities:t.cities}})(W)),R=e(13),G=[{country:"Afghanistan",city:"Kabul"},{country:"Albania",city:"Tirana"},{country:"Algeria",city:"Alger"},{country:"American Samoa",city:"Fagatogo"},{country:"Andorra",city:"Andorra la Vella"},{country:"Angola",city:"Luanda"},{country:"Anguilla",city:"The Valley"},{country:"Antarctica",city:null},{country:"Antigua and Barbuda",city:"Saint John's"},{country:"Argentina",city:"Buenos Aires"},{country:"Armenia",city:"Yerevan"},{country:"Aruba",city:"Oranjestad"},{country:"Australia",city:"Canberra"},{country:"Austria",city:"Wien"},{country:"Azerbaijan",city:"Baku"},{country:"Bahamas",city:"Nassau"},{country:"Bahrain",city:"al-Manama"},{country:"Bangladesh",city:"Dhaka"},{country:"Barbados",city:"Bridgetown"},{country:"Belarus",city:"Minsk"},{country:"Belgium",city:"Bruxelles [Brussel]"},{country:"Belize",city:"Belmopan"},{country:"Benin",city:"Porto-Novo"},{country:"Bermuda",city:"Hamilton"},{country:"Bhutan",city:"Thimphu"},{country:"Bolivia",city:"La Paz"},{country:"Bosnia and Herzegovina",city:"Sarajevo"},{country:"Botswana",city:"Gaborone"},{country:"Bouvet Island",city:null},{country:"Brazil",city:"Bras\xedlia"},{country:"British Indian Ocean Territory",city:null},{country:"Brunei",city:"Bandar Seri Begawan"},{country:"Bulgaria",city:"Sofia"},{country:"Burkina Faso",city:"Ouagadougou"},{country:"Burundi",city:"Bujumbura"},{country:"Cambodia",city:"Phnom Penh"},{country:"Cameroon",city:"Yaound"},{country:"Canada",city:"Ottawa"},{country:"Cape Verde",city:"Praia"},{country:"Cayman Islands",city:"George Town"},{country:"Central African Republic",city:"Bangui"},{country:"Chad",city:"N'Djam"},{country:"Chile",city:"Santiago de Chile"},{country:"China",city:"Peking"},{country:"Christmas Island",city:"Flying Fish Cove"},{country:"Cocos (Keeling) Islands",city:"West Island"},{country:"Colombia",city:"Santaf"},{country:"Comoros",city:"Moroni"},{country:"Congo",city:"Brazzaville"},{country:"Cook Islands",city:"Avarua"},{country:"Costa Rica",city:"San Jos"},{country:"Croatia",city:"Zagreb"},{country:"Cuba",city:"La Habana"},{country:"Cyprus",city:"Nicosia"},{country:"Czech Republic",city:"Praha"},{country:"Denmark",city:"Copenhagen"},{country:"Djibouti",city:"Djibouti"},{country:"Dominica",city:"Roseau"},{country:"Dominican Republic",city:"Santo Domingo de Guzm"},{country:"East Timor",city:"Dili"},{country:"Ecuador",city:"Quito"},{country:"Egypt",city:"Cairo"},{country:"El Salvador",city:"San Salvador"},{country:"England",city:"London"},{country:"Equatorial Guinea",city:"Malabo"},{country:"Eritrea",city:"Asmara"},{country:"Estonia",city:"Tallinn"},{country:"Ethiopia",city:"Addis Abeba"},{country:"Falkland Islands",city:"Stanley"},{country:"Faroe Islands",city:"T\xf3rshavn"},{country:"Fiji Islands",city:"Suva"},{country:"Finland",city:"Helsinki [Helsingfors]"},{country:"France",city:"Paris"},{country:"French Guiana",city:"Cayenne"},{country:"French Polynesia",city:"Papeete"},{country:"French Southern territories",city:null},{country:"Gabon",city:"Libreville"},{country:"Gambia",city:"Banjul"},{country:"Georgia",city:"Tbilisi"},{country:"Germany",city:"Berlin"},{country:"Ghana",city:"Accra"},{country:"Gibraltar",city:"Gibraltar"},{country:"Greece",city:"Athenai"},{country:"Greenland",city:"Nuuk"},{country:"Grenada",city:"Saint George's"},{country:"Guadeloupe",city:"Basse-Terre"},{country:"Guam",city:"Aga"},{country:"Guatemala",city:"Ciudad de Guatemala"},{country:"Guinea",city:"Conakry"},{country:"Guinea-Bissau",city:"Bissau"},{country:"Guyana",city:"Georgetown"},{country:"Haiti",city:"Port-au-Prince"},{country:"Heard Island and McDonald Islands",city:null},{country:"Holy See (Vatican City State)",city:"Citt"},{country:"Honduras",city:"Tegucigalpa"},{country:"Hong Kong",city:"Victoria"},{country:"Hungary",city:"Budapest"},{country:"Iceland",city:"Reykjav"},{country:"India",city:"New Delhi"},{country:"Indonesia",city:"Jakarta"},{country:"Iran",city:"Tehran"},{country:"Iraq",city:"Baghdad"},{country:"Ireland",city:"Dublin"},{country:"Israel",city:"Jerusalem"},{country:"Italy",city:"Roma"},{country:"Ivory Coast",city:"Yamoussoukro"},{country:"Jamaica",city:"Kingston"},{country:"Japan",city:"Tokyo"},{country:"Jordan",city:"Amman"},{country:"Kazakstan",city:"Astana"},{country:"Kenya",city:"Nairobi"},{country:"Kiribati",city:"Bairiki"},{country:"Kuwait",city:"Kuwait"},{country:"Kyrgyzstan",city:"Bishkek"},{country:"Laos",city:"Vientiane"},{country:"Latvia",city:"Riga"},{country:"Lebanon",city:"Beirut"},{country:"Lesotho",city:"Maseru"},{country:"Liberia",city:"Monrovia"},{country:"Libyan Arab Jamahiriya",city:"Tripoli"},{country:"Liechtenstein",city:"Vaduz"},{country:"Lithuania",city:"Vilnius"},{country:"Luxembourg",city:"Luxembourg [Luxemburg/L"},{country:"Macao",city:"Macao"},{country:"Macedonia",city:"Skopje"},{country:"Madagascar",city:"Antananarivo"},{country:"Malawi",city:"Lilongwe"},{country:"Malaysia",city:"Kuala Lumpur"},{country:"Maldives",city:"Male"},{country:"Mali",city:"Bamako"},{country:"Malta",city:"Valletta"},{country:"Marshall Islands",city:"Dalap-Uliga-Darrit"},{country:"Martinique",city:"Fort-de-France"},{country:"Mauritania",city:"Nouakchott"},{country:"Mauritius",city:"Port-Louis"},{country:"Mayotte",city:"Mamoutzou"},{country:"Mexico",city:"Ciudad de M"},{country:"Micronesia, Federated States of",city:"Palikir"},{country:"Moldova",city:"Chisinau"},{country:"Monaco",city:"Monaco-Ville"},{country:"Mongolia",city:"Ulan Bator"},{country:"Montserrat",city:"Plymouth"},{country:"Morocco",city:"Rabat"},{country:"Mozambique",city:"Maputo"},{country:"Myanmar",city:"Rangoon (Yangon)"},{country:"Namibia",city:"Windhoek"},{country:"Nauru",city:"Yaren"},{country:"Nepal",city:"Kathmandu"},{country:"Netherlands",city:"Amsterdam"},{country:"Netherlands Antilles",city:"Willemstad"},{country:"New Caledonia",city:"Noum"},{country:"New Zealand",city:"Wellington"},{country:"Nicaragua",city:"Managua"},{country:"Niger",city:"Niamey"},{country:"Nigeria",city:"Abuja"},{country:"Niue",city:"Alofi"},{country:"Norfolk Island",city:"Kingston"},{country:"North Korea",city:"Pyongyang"},{country:"Northern Ireland",city:"Belfast"},{country:"Northern Mariana Islands",city:"Garapan"},{country:"Norway",city:"Oslo"},{country:"Oman",city:"Masqat"},{country:"Pakistan",city:"Islamabad"},{country:"Palau",city:"Koror"},{country:"Palestine",city:"Gaza"},{country:"Panama",city:"Ciudad de Panam"},{country:"Papua New Guinea",city:"Port Moresby"},{country:"Paraguay",city:"Asunci"},{country:"Peru",city:"Lima"},{country:"Philippines",city:"Manila"},{country:"Pitcairn",city:"Adamstown"},{country:"Poland",city:"Warszawa"},{country:"Portugal",city:"Lisboa"},{country:"Puerto Rico",city:"San Juan"},{country:"Qatar",city:"Doha"},{country:"Reunion",city:"Saint-Denis"},{country:"Romania",city:"Bucuresti"},{country:"Russian Federation",city:"Moscow"},{country:"Rwanda",city:"Kigali"},{country:"Saint Helena",city:"Jamestown"},{country:"Saint Kitts and Nevis",city:"Basseterre"},{country:"Saint Lucia",city:"Castries"},{country:"Saint Pierre and Miquelon",city:"Saint-Pierre"},{country:"Saint Vincent and the Grenadines",city:"Kingstown"},{country:"Samoa",city:"Apia"},{country:"San Marino",city:"San Marino"},{country:"Sao Tome and Principe",city:"S"},{country:"Saudi Arabia",city:"Riyadh"},{country:"Scotland",city:"Edinburgh"},{country:"Senegal",city:"Dakar"},{country:"Seychelles",city:"Victoria"},{country:"Sierra Leone",city:"Freetown"},{country:"Singapore",city:"Singapore"},{country:"Slovakia",city:"Bratislava"},{country:"Slovenia",city:"Ljubljana"},{country:"Solomon Islands",city:"Honiara"},{country:"Somalia",city:"Mogadishu"},{country:"South Africa",city:"Pretoria"},{country:"South Georgia and the South Sandwich Islands",city:null},{country:"South Korea",city:"Seoul"},{country:"South Sudan",city:"Juba"},{country:"Spain",city:"Madrid"},{country:"SriLanka",city:null},{country:"Sudan",city:"Khartum"},{country:"Suriname",city:"Paramaribo"},{country:"Svalbard and Jan Mayen",city:"Longyearbyen"},{country:"Swaziland",city:"Mbabane"},{country:"Sweden",city:"Stockholm"},{country:"Switzerland",city:"Bern"},{country:"Syria",city:"Damascus"},{country:"Tajikistan",city:"Dushanbe"},{country:"Tanzania",city:"Dodoma"},{country:"Thailand",city:"Bangkok"},{country:"The Democratic Republic of Congo",city:null},{country:"Togo",city:"Lom"},{country:"Tokelau",city:"Fakaofo"},{country:"Tonga",city:"Nuku'alofa"},{country:"Trinidad and Tobago",city:"Port-of-Spain"},{country:"Tunisia",city:"Tunis"},{country:"Turkey",city:"Ankara"},{country:"Turkmenistan",city:"Ashgabat"},{country:"Turks and Caicos Islands",city:"Cockburn Town"},{country:"Tuvalu",city:"Funafuti"},{country:"Uganda",city:"Kampala"},{country:"Ukraine",city:"Kyiv"},{country:"United Arab Emirates",city:"Abu Dhabi"},{country:"United Kingdom",city:"London"},{country:"United States",city:"Washington"},{country:"United States Minor Outlying Islands",city:null},{country:"Uruguay",city:"Montevideo"},{country:"Uzbekistan",city:"Toskent"},{country:"Vanuatu",city:"Port-Vila"},{country:"Venezuela",city:"Caracas"},{country:"Vietnam",city:"Hanoi"},{country:"Virgin Islands, British",city:"Road Town"},{country:"Virgin Islands, U.S.",city:"Charlotte Amalie"},{country:"Wales",city:"Cardiff"},{country:"Wallis and Futuna",city:"Mata-Utu"},{country:"Western Sahara",city:"El-Aai"},{country:"Yemen",city:"Sanaa"},{country:"Yugoslavia",city:"Beograd"},{country:"Zambia",city:"Lusaka"},{country:"Zimbabwe",city:"Harare"}],z=e(31),K=e.n(z),U=function(t){function a(){return Object(O.a)(this,a),Object(A.a)(this,Object(B.a)(a).apply(this,arguments))}return Object(I.a)(a,t),Object(M.a)(a,[{key:"render",value:function(){var t=this.props.city,a=this.props.selectedValue;return i.a.createElement(K.a,{highlightClassName:"selectedText",searchWords:[a],autoEscape:!0,textToHighlight:t})}}]),a}(i.a.Component),V=function(t){function a(t){var e;return Object(O.a)(this,a),(e=Object(A.a)(this,Object(B.a)(a).call(this,t))).handleSubmit=e.handleSubmit.bind(Object(R.a)(Object(R.a)(e))),e.state={cityList:[],value:"",selectedCity:""},e}return Object(I.a)(a,t),Object(M.a)(a,[{key:"handleSubmit",value:function(t){t.preventDefault();var a=this.refs.city;a.value.trim()&&(this.props.cities.cities.push(this.state.selectedCity),a.value="",this.setState({selectedCity:""}),this.setState({cityList:[]}))}},{key:"findCities",value:function(t){var a=t.target.value.toUpperCase();this.setState({value:a});var e=[];if(a.length>0)for(var n=this.props.cities.cities,i=0;i<G.length;i++){var c=G[i];if(c.city&&c.city.toUpperCase().includes(a)&&!n.includes(c.city)&&e.push(c.city),e.length>=7)break}this.setState({cityList:e})}},{key:"myfunction",value:function(t){this.setState({selectedCity:t})}},{key:"render",value:function(){var t=this,a=this.state.cityList;return i.a.createElement("div",{className:"container"},i.a.createElement(L.a,{to:"/"},i.a.createElement("i",{className:"button_back fa fa-2x fa-chevron-left"})),i.a.createElement("div",{className:"center_div"},i.a.createElement("form",{className:"findCities",onSubmit:this.handleSubmit},i.a.createElement("div",{className:"searchBox"},i.a.createElement("input",{className:"searchTextBox",value:this.state.value,onChange:function(a){return t.findCities(a)},placeholder:"Search city",ref:"city"}),i.a.createElement("i",{className:"button_search fa fa-chevron-down"})),a.map(function(a){return i.a.createElement("div",{className:"capitalItem",onClick:function(){t.myfunction(a)}},i.a.createElement(U,{city:a,selectedValue:t.state.value}))}),this.state.selectedCity.length?i.a.createElement("input",{type:"submit",className:"theme_button",value:"SAVE"}):null)))}}]),a}(i.a.Component),H=Object(P.a)(Object(o.connect)(function(t){return{cities:t.cities}})(V)),x=function(t){function a(){return Object(O.a)(this,a),Object(A.a)(this,Object(B.a)(a).apply(this,arguments))}return Object(I.a)(a,t),Object(M.a)(a,[{key:"render",value:function(){return i.a.createElement("h1",null,"Loading...")}}]),a}(i.a.Component),_=e(24),J=function(t){function a(t){var e;return Object(O.a)(this,a),(e=Object(A.a)(this,Object(B.a)(a).call(this,t))).state={time:new Date},e}return Object(I.a)(a,t),Object(M.a)(a,[{key:"componentWillMount",value:function(){this.tick()}},{key:"tick",value:function(){var t=this;setInterval(function(){t.setState({time:new Date})},6e3)}},{key:"render",value:function(){var t=this.props.country,a=_.getTimezonesForCountry(t),e=this.state.time.toLocaleTimeString("en-US",{timeZone:a[0].name,hour12:!1});return e=e.split(":"),i.a.createElement("div",{className:"WeatherTime"},i.a.createElement("span",null,e[0]),i.a.createElement("span",{className:"TimeSpan"},e[1]),i.a.createElement("span",{className:"TimeCity"},this.props.city))}}]),a}(i.a.Component),Y=e(24),q=function(t){function a(){return Object(O.a)(this,a),Object(A.a)(this,Object(B.a)(a).apply(this,arguments))}return Object(I.a)(a,t),Object(M.a)(a,[{key:"render",value:function(){var t=this.props.country,a=Y.getTimezonesForCountry(t),e=this.props.sunrise,n=this.props.sunset;return e=new Date(1e3*e).toLocaleTimeString("en-US",{timeZone:a[0].name}),n=new Date(1e3*n).toLocaleTimeString("en-US",{timeZone:a[0].name}),i.a.createElement("div",{className:"WeatherIcon"},i.a.createElement("div",{className:"WeatherTime"},i.a.createElement("div",{className:"TempDiv"},i.a.createElement("i",{className:"wi wi-fw wi-thermometer TimeIconMargin"}," ")," ",i.a.createElement("span",{className:"TimeSpanMarginLeft"},this.props.temperature)),i.a.createElement("div",{className:"TempDiv"},i.a.createElement("i",{className:"wi wi-fw wi-sunrise TimeIconMargin"}," ")," ",i.a.createElement("span",{className:"TimeSpanMarginLeft"},e)),i.a.createElement("div",{className:"TempDiv"},i.a.createElement("i",{className:"wi wi-fw wi-sunset TimeIconMargin"}," ")," ",i.a.createElement("span",{className:"TimeSpanMarginLeft"},n))))}}]),a}(i.a.Component),Z=function(t){function a(){return Object(O.a)(this,a),Object(A.a)(this,Object(B.a)(a).apply(this,arguments))}return Object(I.a)(a,t),Object(M.a)(a,[{key:"componentWillMount",value:function(){var t=this.props.match.params.city;t&&this.props.dispatch(v("q=".concat(t)))}},{key:"render",value:function(){var t=this.props.weather;if(t.error)return i.a.createElement("div",{className:"container"},i.a.createElement(L.a,{to:"/"},i.a.createElement("i",{className:"button_back fa fa-2x fa-chevron-left"})),i.a.createElement("div",{className:"WeatherDiv"},i.a.createElement("p",null,"Failed to get data: ",t.error)));if(!t.current)return i.a.createElement("div",{className:"container"},i.a.createElement(L.a,{to:"/"},i.a.createElement("i",{className:"button_back fa fa-2x fa-chevron-left"})),i.a.createElement("div",{className:"WeatherDiv"},i.a.createElement(x,null)));var a=t.current.weather[0],e="";return e=a.icon.includes("d")?"wi wi-owm-day-"+a.id:"wi wi-owm-night-"+a.id,i.a.createElement("div",{className:"container"},i.a.createElement(L.a,{to:"/"},i.a.createElement("i",{className:"button_back fa fa-2x fa-chevron-left"})),i.a.createElement("div",{className:"WeatherDiv"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm order-sm-2 "},i.a.createElement("div",{className:"WeatherIcon"},i.a.createElement(J,{time:t.current.dt,city:t.current.name,country:t.current.sys.country}))),i.a.createElement("div",{className:"col-sm order-sm-1"},i.a.createElement("div",{className:"WeatherIcon WeatherIconMargin"},i.a.createElement("i",{className:e}),i.a.createElement("span",{className:"marginTop"},a.description))),i.a.createElement("div",{className:"col-sm order-sm-12"},i.a.createElement(q,{temperature:t.current.main.temp,sunrise:t.current.sys.sunrise,sunset:t.current.sys.sunset,country:t.current.sys.country})))))}}]),a}(i.a.Component),Q=Object(P.a)(Object(o.connect)(function(t){return{location:t.location,weather:t.weather}})(Z)),$=function(){return i.a.createElement(C.a,null,i.a.createElement("div",null,i.a.createElement(j.a,null,i.a.createElement(T.a,{path:"/",exact:!0,component:F}),i.a.createElement(T.a,{path:"/ShowWeather/:city",component:Q}),i.a.createElement(T.a,{path:"/addCities",component:H}))))},X=(e(56),e(58),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function tt(t,a){navigator.serviceWorker.register(t).then(function(t){t.onupdatefound=function(){var e=t.installing;null!=e&&(e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(t)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(t)))})}}).catch(function(t){console.error("Error during service worker registration:",t)})}var at,et=Object(u.createStore)(k,at,Object(u.applyMiddleware)(y.a));et.subscribe(function(){console.log(et.getState())}),et.dispatch(function(t){navigator.geolocation?(t({type:b}),navigator.geolocation.getCurrentPosition(function(a){var e=a.coords,n=e.latitude,i=e.longitude;t({type:f,payload:{location:{latitude:n,longitude:i}}})},function(t){console.error(t)})):console.log("navigator.geolocation not supported.")}),r.a.render(i.a.createElement(o.Provider,{store:et},i.a.createElement($,null)),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/react-weather",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var a="".concat("/react-weather","/service-worker.js");X?(function(t,a){fetch(t).then(function(e){var n=e.headers.get("content-type");404===e.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(t){t.unregister().then(function(){window.location.reload()})}):tt(t,a)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(a,t),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):tt(a,t)})}}()}},[[32,2,1]]]);
//# sourceMappingURL=main.0e05fc11.chunk.js.map