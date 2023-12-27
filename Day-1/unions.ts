function changeCase(data: string | number) {
    if (typeof data === 'string') {
        const newData = data.toLowerCase()
        console.log(newData);
    }
}


type User = {
    readonly _id: string
    name: string
    email: string
    accessKey: string
}

type Admin = {
    readonly _id: string
    name: string
    email: string
    adminKey: string
    modKey: string
}

const userData: User | Admin = {
    _id: '123',
    name: 'John',
    email: 'john@gmail.com',
    adminKey: 'rty2345',
    modKey: 'sdfdsd',
}

const arrData: string[] | number[] = ['1']
const arrData2: (string | number | boolean)[] = ['3', '45', 45, 65, true]

let role: 'admin' | 'editor' | 'viewer'

role = 'editor'

export { }