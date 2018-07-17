const db = require('../models');

module.exports = {
    // seeds for testing only
    generate: () => {
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
                            type: 'debit',
                            ammount: 669.34,
                            party: 'TED'

                        }, {
                            type: 'debit',
                            ammount: 57.88,
                            party: 'City Broker'

                        }, {
                            type: 'debit',
                            ammount: 167,
                            party: 'Starvation Store'

                        }, {
                            type: 'credit',
                            ammount: 900,
                            party: 'Enderman Inc'
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
                            type: 'credit',
                            ammount: 6280,
                            party: 'Yopedey Yakkers'

                        }, {
                            type: 'credit',
                            ammount: 780,
                            party: 'Yappe Yonders'

                        }, {
                            type: 'credit',
                            ammount: 190,
                            party: 'Yandre Yippers'

                        },

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
                            type: 'credit',
                            ammount: 663.34,
                            party: 'Darlen Wiggins'

                        }, {
                            type: 'debit',
                            ammount: 257.88,
                            party: 'County June Fireworks Store'

                        }, {
                            type: 'credit',
                            ammount: 4167,
                            party: 'Clenard Institute for the Gifted'

                        }, {
                            type: 'debit',
                            ammount: 18000,
                            party: 'BOSS'

                        }, {
                            type: 'credit',
                            ammount: 1900,
                            party: 'Locker Creme'

                        }, {
                            type: 'credit',
                            ammount: 86.54,
                            party: 'Donald Duck'

                        }, {
                            type: 'debit',
                            ammount: 64.54,
                            party: 'Reverend Biship Pope'

                        },

                    ]
                },
            ]);
    }
}