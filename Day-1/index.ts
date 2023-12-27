interface UserData {
    name: string
    email: string
    rollNo: number
}

const data: UserData = {
    name: 'rXg',
    email: 'r@r.com',
    rollNo: 12
}

function printData(data: UserData) {
    console.log(data);
}

printData(data)