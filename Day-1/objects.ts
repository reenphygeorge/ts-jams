type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    cardDetails?: CardDeails[]
}

type CardDeails = {
    readonly cardNo: string
    expiry: string
}

const myUser: User = {
    _id: '123',
    name: 'RG',
    email: 'rxg@gmail.com',
    isActive: true,
    cardDetails: [{
        cardNo: '3245167312TRWRE',
        expiry: '24/07',
    }, {
        cardNo: '3245167312TRWRE',
        expiry: '24/07',
    }]
}

myUser.name = 'RxG'
// myUser._id = '321' // Error

if (myUser.cardDetails) {
    myUser.cardDetails[0].expiry = '24/05'
    // myUser.cardDetails[0].cardNo = '13452IUYI67899' // Error
}

console.log(myUser);


export { }