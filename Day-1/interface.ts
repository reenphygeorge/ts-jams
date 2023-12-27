interface User {
    readonly _id: string
    name: string
    email: string
}

interface Admin {
    readonly _id: string
    name: string
    email: string
    adminKey: string
    role(): string
}

// An arrow function (example)
const getRole = () => {
    return 'Admin'
}

const user: Admin = {
    _id: '123',
    name: 'Mr. Admin',
    email: 'admin@gmail.com',
    adminKey: '431245f4e',
    role: () => {
        return 'Admin'
    }
}

console.log(user.role());

export { }