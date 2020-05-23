const stateData = [
    {
        "NAME": "AL",
        "POPESTIMATE2019": 4903185
    },
    {
        "NAME": "AK",
        "POPESTIMATE2019": 731545
    },
    {
        "NAME": "AZ",
        "POPESTIMATE2019": 7278717
    },
    {
        "NAME": "AR",
        "POPESTIMATE2019": 3017804
    },
    {
        "NAME": "CA",
        "POPESTIMATE2019": 39512223
    },
    {
        "NAME": "CO",
        "POPESTIMATE2019": 5758736
    },
    {
        "NAME": "CT",
        "POPESTIMATE2019": 3565287
    },
    {
        "NAME": "DE",
        "POPESTIMATE2019": 973764
    },
    {
        "NAME": "DC",
        "POPESTIMATE2019": 705749
    },
    {
        "NAME": "FL",
        "POPESTIMATE2019": 21477737
    },
    {
        "NAME": "GA",
        "POPESTIMATE2019": 10617423
    },
    {
        "NAME": "HI",
        "POPESTIMATE2019": 1415872
    },
    {
        "NAME": "ID",
        "POPESTIMATE2019": 1787065
    },
    {
        "NAME": "IL",
        "POPESTIMATE2019": 12671821
    },
    {
        "NAME": "IN",
        "POPESTIMATE2019": 6732219
    },
    {
        "NAME": "IA",
        "POPESTIMATE2019": 3155070
    },
    {
        "NAME": "KS",
        "POPESTIMATE2019": 2913314
    },
    {
        "NAME": "KY",
        "POPESTIMATE2019": 4467673
    },
    {
        "NAME": "LA",
        "POPESTIMATE2019": 4648794
    },
    {
        "NAME": "ME",
        "POPESTIMATE2019": 1344212
    },
    {
        "NAME": "MD",
        "POPESTIMATE2019": 6045680
    },
    {
        "NAME": "MA",
        "POPESTIMATE2019": 6892503
    },
    {
        "NAME": "Mi",
        "POPESTIMATE2019": 9986857
    },
    {
        "NAME": "MN",
        "POPESTIMATE2019": 5639632
    },
    {
        "NAME": "MS",
        "POPESTIMATE2019": 2976149
    },
    {
        "NAME": "MO",
        "POPESTIMATE2019": 6137428
    },
    {
        "NAME": "MT",
        "POPESTIMATE2019": 1068778
    },
    {
        "NAME": "NE",
        "POPESTIMATE2019": 1934408
    },
    {
        "NAME": "NV",
        "POPESTIMATE2019": 3080156
    },
    {
        "NAME": "NH",
        "POPESTIMATE2019": 1359711
    },
    {
        "NAME": "NJ",
        "POPESTIMATE2019": 8882190
    },
    {
        "NAME": "NM",
        "POPESTIMATE2019": 2096829
    },
    {
        "NAME": "NY",
        "POPESTIMATE2019": 19453561
    },
    {
        "NAME": "NC",
        "POPESTIMATE2019": 10488084
    },
    {
        "NAME": "ND",
        "POPESTIMATE2019": 762062
    },
    {
        "NAME": "OH",
        "POPESTIMATE2019": 11689100
    },
    {
        "NAME": "OK",
        "POPESTIMATE2019": 3956971
    },
    {
        "NAME": "OR",
        "POPESTIMATE2019": 4217737
    },
    {
        "NAME": "PA",
        "POPESTIMATE2019": 12801989
    },
    {
        "NAME": "RI",
        "POPESTIMATE2019": 1059361
    },
    {
        "NAME": "SC",
        "POPESTIMATE2019": 5148714
    },
    {
        "NAME": "SD",
        "POPESTIMATE2019": 884659
    },
    {
        "NAME": "TN",
        "POPESTIMATE2019": 6829174
    },
    {
        "NAME": "TX",
        "POPESTIMATE2019": 28995881
    },
    {
        "NAME": "UT",
        "POPESTIMATE2019": 3205958
    },
    {
        "NAME": "VT",
        "POPESTIMATE2019": 623989
    },
    {
        "NAME": "VA",
        "POPESTIMATE2019": 8535519
    },
    {
        "NAME": "WA",
        "POPESTIMATE2019": 7614893
    },
    {
        "NAME": "WV",
        "POPESTIMATE2019": 1792147
    },
    {
        "NAME": "WI",
        "POPESTIMATE2019": 5822434
    },
    {
        "NAME": "WY",
        "POPESTIMATE2019": 578759
    }
];

const getPopData = (state) => {
    const statePopObj = stateData.filter((item) => {
        for (let key in item) {
            const stateString = state.toString()
            if (item[key] === stateString) {
                return item[key]
            }
        }
    });
    
    const popNumber = statePopObj[0].POPESTIMATE2019
    console.log('getPopData: ', statePopObj[0].POPESTIMATE2019);
    return popNumber;
}

export default getPopData;

