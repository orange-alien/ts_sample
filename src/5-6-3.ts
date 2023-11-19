

const getMessage = createUser('uhyo', 26, 1234);

console.log( getMessage('こんにちは', 12234) );


function createUser(name: string, age: number, hoge:number)
{
    return (message: string, num: number) => {
        return `${name} (${age}) 「${message}」 ${hoge}`;
    }
}