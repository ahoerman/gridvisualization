var inputState = 'AL';

var states = {
    'AL': '01',
    'AK': '02',
    'AZ': '03',
    'AR': '04',
    'CA': '05',
    'CO': '06',
    'CT': '07',
    'DE': '08',
    'DC': '09',
    'FL': '10',
    'GA': '11',
    'HI': '12',
    'ID': '13',
    'IL': '14',
    'IN': '15',
    'IA': '16',
    'KS': '17',
    'KY': '18',
    'LA': '19',
    'ME': '20',
    'MD': '21',
    'MA': '22',
    'MI': '23',
    'MN': '24',
    'MS': '25',
    'MO': '26',
    'MT': '27',
    'NE': '28'
    'NV': '29',
    'NH': '30',
    'NJ': '31',
    'NM': '32',
    'NY': '33',
    'NC': '34',
    'ND': '35',
    'OH': '36',
    'OK': '37',
    'OR': '38',
    'PA': '39',
    'RI': '40',
    'SC': '41',
    'SD': '42',
    'TN': '43',
    'TX': '44',
    'UT': '45',
    'VT': '46',
    'VA': '47',
    'WA': '48',
    'WV': '49',
    'WI': '50',
    'WY': '51'
}

var stateIDcode = states[inputState];

console.log('Clicked on state ' + inputState);
console.log('tanias stateID for ' + inputState + ' = ' + stateIDcode);

var popLinkStart = 'https://api.census.gov/data/2019/pep/charagegroups?get=POP&for=state:'
var popLinkEnd = '&key=e4b43bc429a5c0ef1ae5cd388b9e6873e488e775'
var popLinkMiddle = stateIDcode
var popLink = popLinkStart + popLinkMiddle + popLinkEnd

var obj;

fetch(popLink)
    .then(res => res.json())
    .then(data => obj = data)
    .then(() => console.log(obj))