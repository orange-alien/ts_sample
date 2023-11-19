

// function map(array: number[], callback: (num: number) => number) : number[] {
//     const result: number[] = [];
//     for(const item of array) {
//         result.push(
//             callback(item)
//         );
//     }

//     return result;
// }

// const numbers = [1,1,2,3,5,8,13];

// const result = map(numbers, (x)=> x * 10);

// console.log(result);




// function map2<T>(array: T[], callback: (item : T)  => T) {
//     const result: T[] = [];
//     for(const item of array) {
//         result.push(
//             callback(item)
//         );
//     }

//     return result;
// }

// const item2 : number[]  = [1,2,3,4,5];
// const item3 : string[] =  ['a', 'b', 'c'];


// const result2 = map2(item2, (x:number) => x * 10);
// const result3 = map2(item3, (x:string) => `_${x}_`);

// console.log(result2);
// console.log(result3);




// function map3<T, U>(array: T[], callback: (item: T) => U) {
//     const result: U[] = [];
//     for(const item of array) {
//         result.push(
//             callback(item)
//         );
//     }

//     return result;
// }

// const func = (x: number) => String(x) + 'yen';

// const items4: number[] = [2,3,4,5,6];
// const result4 = map3(items4, func);

// console.log(result4);

