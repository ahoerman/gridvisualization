let states = {
    'AL': '4,903,185',
    'AK': '731,545',
    'AZ': '7,278,717',
    'AR': '',
    'CA': '06',
    'CO': '08',
    'CT': '09',
    'DE': '10',
    'DC': '11',
    'FL': '12',
    'GA': '13',
    'HI': '15',
    'ID': '16',
    'IL': '17',
    'IN': '18',
    'IA': '19',
    'KS': '20',
    'KY': '21',
    'LA': '22',
    'ME': '23',
    'MD': '24',
    'MA': '25',
    'MI': '26',
    'MN': '27',
    'MS': '28',
    'MO': '29',
    'MT': '30',
    'NE': '31',
    'NV': '32',
    'NH': '33',
    'NJ': '34',
    'NM': '35',
    'NY': '36',
    'NC': '37',
    'ND': '38',
    'OH': '39',
    'OK': '40',
    'OR': '41',
    'PA': '42',
    'RI': '44',
    'SC': '45',
    'SD': '46',
    'TN': '47',
    'TX': '48',
    'UT': '49',
    'VT': '50',
    'VA': '51',
    'WA': '53',
    'WV': '54',
    'WI': '55',
    'WY': '56'
}

// TUrn this into a function, that accepts the selected state as an argument

const handleDataFetch = async (state) => {
    var stateIDcode = states[state];

    // console.log('Clicked on state ' + state);
    // console.log('tanias stateID for ' + state + ' = ' + stateIDcode);

    var popLinkStart = 'https://api.census.gov/data/2019/pep/charagegroups?get=POP&for=state:'
    var popLinkEnd = '&key=e4b43bc429a5c0ef1ae5cd388b9e6873e488e775'
    var popLinkMiddle = stateIDcode
    var popLink = popLinkStart + popLinkMiddle + popLinkEnd

    var dataArray;
    var population;

    await fetch(popLink)
        .then(res => res.json())
        .then(data => {
            dataArray = data;
            population = dataArray[1][0];

        })
        .catch(err => console.log(err))

    return population;
}

export default handleDataFetch;



