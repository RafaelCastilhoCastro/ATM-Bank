export type transaction = {
    date: string,
    amount: number,
    description: string
}

export type userAccount = {
    name: string,
    cpf: number,
    birthday: string,
    balance: number,
    transactions: transaction[]
}

export let users: userAccount[] = [
    {
        name: 'Maria',
        cpf: 12345678901,
        birthday: '01/01/1950',
        balance: 1000,
        transactions: [
            {
                date: '02/02/2002',
                amount: 10,
                description: 'Mercado'
            }
        ]
    },
    {
        name: 'Martha',
        cpf: 23456789123,
        birthday: '10/02/1960',
        balance: 100,
        transactions: [
            {
                date: '01/05/2000',
                amount: 50,
                description: 'Pet-shop'
            },
            {
                date: '12/07/2004',
                amount: 15,
                description: 'Hot-dog'
            }
        ]
    },
    {
        name: 'Eva',
        cpf: 34567891234,
        birthday: '25/07/1975',
        balance: 550,
        transactions: [
            {
                date: '03/09/2021',
                amount: 90,
                description: 'Pizza'
            },
            {
                date: '04/08/2001',
                amount: 101,
                description: 'Calça jeans'
            },
            {
                date: '02/09/2010',
                amount: 500,
                description: 'Vinhos'
            }
        ]
    }
]
