function vendingmachine() {
    // inventory of snacks and drinks
    let inventory = {
        'S1': {item: 'Coca-Cola', count: 5},
        'C1': {item: 'Fortnite Slurp Potion', count: 99},
        'S2': {item: 'VoughtaBurger', count: 4},
        'C2': {item: 'Davids Team', count: 7},
    }
};

// function to check and dispense item from machine
function dispenseitem(code, callbackfn) {
    // check if inventory includes requested item
    if (inventory[code] && inventory[code].count > 0) {
        invetory[code].count--;
        callbackfn();
 
    } else {
        callbackfn();
    }
    return {
        selectitem: function(code, callbackfn) {
            dispenseitem(code, callback);
        },
    inventorystatus:function() {
        return inventory;
        },
    };
}

function handleresponse(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(result);

        }
    }


const machine = vendingmachine();
console.log(machine);

machine.selectitem("S1", handleresponse);
machine.selectitem("S1", handleresponse);
machine.selectitem("S1", handleresponse);
machine.selectitem("S1", handleresponse);
machine.selectitem("S1", handleresponse);
machine.selectitem("S2", handleresponse);
machine.selectitem("S2", handleresponse);
machine.selectitem("S2", handleresponse);
machine.selectitem("C1", handleresponse);
machine.selectitem("C1", handleresponse);
machine.selectitem("S1", handleresponse);
machine.selectitem("S2", handleresponse);
machine.selectitem("C2", handleresponse);