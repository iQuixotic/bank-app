
// seeds for testing only
db.Bank
  .create([
    {
        name: {
            last: 'Thomas',
            first: 'Terry'
        },
        acct: 7029402,
        balance: 338.84,
        transactions: [
            {
                debit: {
                    ammount: 669.34,
                    party: 'TED'
                },
                debit: {
                    ammount: 57.88,
                    party: 'City Broker'
                },
                debit: {
                    ammount: 167,
                    party: 'Starvation Store'
                },
                credit: {
                    ammount: 900,
                    party: 'Enderman Inc'
                }
            }
        ]
    },

    {
        name: {
            last: 'Dandy',
            first: 'Dirty'
        },
        acct: 4307842,
        balance: 122958.98,
        transactions: [
            {
                credit: {
                    ammount: 6280,
                    party: 'Yopedey Yakkers'
                },
                credit: {
                    ammount: 780,
                    party: 'Yappe Yonders'
                },
                credit: {
                    ammount: 190,
                    party: 'Yandre Yippers'
                },
            }
        ]
    },

    {
        name: {
            last: 'Stevens',
            first: 'Lenard'
        },
        acct: 7465904,
        balance: 144.14,
        transactions: [
            {
                credit: {
                    ammount: 663.34,
                    party: 'Darlen Wiggins'
                },
                debit: {
                    ammount: 257.88,
                    party: 'County June Fireworks Store'
                },
                credit: {
                    ammount: 4167,
                    party: 'Clenard Institute for the Gifted'
                },
                debit: {
                    ammount: 18000,
                    party: 'BOSS'
                },
                credit: {
                    ammount: 1900,
                    party: 'Locker Creme'
                },
                credit: {
                    ammount: 86.54,
                    party: 'Donald Duck'
                },
                debit: {
                    ammount: 64.54,
                    party: 'Reverend Biship Pope'
                },
            }
        ]
    },
]);
