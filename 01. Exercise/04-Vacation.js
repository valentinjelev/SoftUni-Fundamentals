// function solve(a, b, c) {

//     let groupOfPeople = a;
//     let typeOfGroup = b;
//     let dayOfWeek = c;
//     let price = 0;

//     if (dayOfWeek === "Friday") {
//         switch(typeOfGroup) {
//             case "Students":
//                 price = 8.45;
//                 break;
//             case "Business":
//                 price = 10.90;
//                 break;
//             case "Regular":
//                 price = 15;
//                 break;
//         }
//     } else if (dayOfWeek === "Saturday") {
//         switch(typeOfGroup) {
//             case "Students":
//                 price = 9.80;
//                 break;
//             case "Business":
//                 price = 15.60;
//                 break;
//             case "Regular":
//                 price = 20;
//                 break;
//         }
//     } else if (dayOfWeek === "Sunday") {
//         switch(typeOfGroup) {
//             case "Students":
//                 price = 10.46;
//                 break;
//             case "Business":
//                 price = 16;
//                 break;
//             case "Regular":
//                 price = 22.50;
//                 break;
//         }
//     }


//     if (typeOfGroup === "Students" && groupOfPeople >= 30) {
//         price *= groupOfPeople;
//         price = price - (price * 0.15);
//     } else if (typeOfGroup === "Business" && groupOfPeople >= 100) {
//         price = price * (groupOfPeople - 10);
//     } else if (typeOfGroup === "Regular") {
//         price *= groupOfPeople;
//         if (groupOfPeople >= 10 && groupOfPeople <= 20) {
//             price = price - (price * 0.05);
//         }
//     }


//     console.log(`Total price: ${price.toFixed(2)}`);

// }
// solve(40,
//     "Regular",
//     "Saturday");

function solve(people, groupType, day) {

    let price = 0;

    switch (groupType) {
        case "Students":

            if (day === "Friday") {
                price = people * 8.45;
            } else if (day === "Saturday") {
                price = people * 9.80;
            } else if (day === "Sunday") {
                price = people * 10.46;
            }

            if (people >= 30) {
                price = price * 0.85;
            }
            break;

        case "Business":
            if (people >= 100) {
                people = people - 10;
            }

            if (day === "Friday") {
                price = people * 10.90;
            } else if (day === "Saturday") {
                price = people * 15.60;
            } else if (day === "Sunday") {
                price = people * 16;
            }

            break;

        case "Regular":

            if (day === "Friday") {
                price = people * 15;
            } else if (day === "Saturday") {
                price = people * 20;
            } else if (day === "Sunday") {
                price = people * 22.50;
            }

            if (people >= 10 && people <= 20) {
                price = price * 0.95;
            }
            break;
    }
    console.log(`Total price: ${price.toFixed(2)}`);
}
solve(30,
    "Students",
    "Sunday");