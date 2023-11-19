// type User = {
//     name: string;
//     age: number;
//     premiumUser: boolean;
// }

// const data: string = `
// huyo,26,1
// John Smith,17,0
// Mary Sue,14,1
// `;


// const lines: string[] = data.split('\n').filter((text) => {
//     return text.length > 0;
// });

// console.log(lines);

// const users: User[] = [];

// for(const line of lines)
// {
//     const splited: string[] = line.split(',');
//     const name: string = String(splited[0]);
//     const age: number  = Number(splited[1]);
//     const premiumUser : boolean = Number(splited[2]) === 1 ? true : false;

//     const user = {
//         name       : name,
//         age        : age,
//         premiumUser: premiumUser,
//        };
//     users.push(user);
// }



// for(const user of users) {
//     if(user.premiumUser) {
//         console.log(`${user.name} ${user.age}はプレミアムユーザーです。`);
//     }  else {
//         console.log(`${user.name} ${user.age}はプレミアムユーザーではありません。`);
//     }
// }