// const square = function ( x ) {
//     return x * x;
// }

// const square = (x) => {
//     return x * x;
// }
// console.log(square(3));

// const square = (x) => x * x;
// console.log(square(8));

const event = {
    name: 'Birthday',
    guestList: ['jose', 'susana', 'tatiana'],
    printGuestList () {
        console.log(`Guest list for ${this.name}`);

        this.guestList.forEach(( guest ) => {
            console.log(`${guest}  is atending ${this.name}`);
        });
    }
}

event.printGuestList();