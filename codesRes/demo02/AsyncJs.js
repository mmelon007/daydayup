let stocks = {
    fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"]
};

let is_shop_open = true;


function time(ms){
    return new Promise((resolve, reject) => {
        if(is_shop_open){
            setTimeout(resolve, ms);
        }
        else {
            reject(console.log("shop is closed"));
        }
    });
}

async function kitchen () {
    try {
        await time(2000);
        console.log(`${stocks.fruits[0]} was selected`);

        await time(0);
        console.log("production has started");

        await time(2000);
        console.log("fruit has been chopped");

        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);

        await time(1000);
        console.log("start the machine");

        await time(2000);
        console.log(`ice cream placed on ${stocks.holder[1]}`);

        await time(3000);
        console.log(`${stocks.toppings[0]} as toppings`);

        await time(2000);
        console.log("Serve Ice Cream");
    } catch (error) {
        console.log("customer left", error);
    } finally {
        console.log("day ended.");
    }
}

kitchen();

// await and async
// let topping_choice = () => {
//     return new Promise( (resolve, reject) => {
//         setTimeout(() => {
//             resolve(() => console.log("which topping do u like?"));
//         }, 3000);
//     });
// }

// async function kitchen () {
//     console.log(" A ");
//     console.log(" B ");
//     console.log(" C ");

//     await topping_choice();

//     console.log(" D ");
//     console.log(" E ");
// }

// kitchen();
// console.log('doing the dishes');
// console.log('cleaning the tables');
// console.log('taking others orders');

// async function kitchen(){

//     try{
//  // Let's create a fake problem      
//        await abc;
//     }
 
//     catch(error){
//        console.log("abc does not exist", error)
//     }

//     finally{
//        console.log("Runs code anyways")
//     }
//  }
 
//  kitchen() 

// promise part
// let order = (time, work) => {
//     return new Promise( (resolve, reject) => {
//         if(is_shop_open) {
//             setTimeout(() => {
//                 resolve(work());
//             }, time);
//         }
//         else {
//             reject(console.log("our shop is closed."));
//         }
//     });
// }

// order(2000, () => console.log(`${stocks.fruits[0]} was selected`))
// .then( () => {
//     return order(0, () => console.log("production has started"));
// })
// .then( () => {
//     return order(1000, () => console.log("fruit has been chopped."));
// })
// .then( () => {
//     return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was selected`))
// })
// .then( () => {
//     return order(1000, () => console.log("machine was started"));
// })
// .then( () => {
//     return order(1000, () => console.log(`the ice cream was placed on ${stocks.holder[0]}.`));
// })
// .then( () => {
//     return order(1000, () =>  console.log(`the ${stocks.toppings[0]} was added as toppings.`));
// })
// .then( () => {
//     return order(1000, () =>  console.log(`serve the ice cream`));
// })
// .catch(() => {
//     console.log("customer left.")
// })
// .finally(() => {
//     console.log("day ended, shop closed");
// });

// callback hell
// let order = (fruit_name, liquid_name, holder_name, toppings_name, call_production) => {
//     setTimeout(()=>{
//         console.log(`${stocks.fruits[fruit_name]} was selected`);
//         call_production(liquid_name, holder_name, toppings_name,);
//     },2000);
// };
// let production = (liquid_name, holder_name, toppings_name) => {
//     setTimeout(()=>{
//         console.log("production start");
//         setTimeout(()=>{
//             console.log("the fruit has been chopped");
//             setTimeout(()=>{
//                 console.log(`${stocks.liquid[liquid_name]} was added`);
//                 setTimeout(() => {
//                     console.log("machine was started");
//                     setTimeout(() => {
//                         console.log(`the ice cream was placed on ${stocks.holder[holder_name]}.`);
//                         setTimeout(() => {
//                             console.log(`the  ${stocks.toppings[toppings_name]} was added as toppings.`);
//                             setTimeout(() => {
//                                 console.log("serve the ice cream");
//                             }, 1000);
//                         }, 1000);
//                     },1000);
//                 }, 2000);
//             },2000);
//         },2000);
//     }, 0);
// };

// order(0,0,0,0,production);