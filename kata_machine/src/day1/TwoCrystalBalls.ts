/** 
 * You have two identical crystal balls, and you need to find when 1 of them breaks.
 * @param {boolean[]} breaks - An array of booleans representing when the ball breaks.
 * @returns {number} The index of the array where the ball breaks.
 * @complexity O(sqrt(n))
*/

export default function two_crystal_balls(breaks: boolean[]): number {
    // Calculate the jump amount (root of the length of the array)
    const jumpAmount = Math.floor(Math.sqrt(breaks.length));
    let i = jumpAmount;

    // Jump through the array by the jump amount
    for (; i < breaks.length; i += jumpAmount){
        if( breaks[i]){
            break;
        }
    }

    // Move back to the last jump point
    i-= jumpAmount;

    
    for (let j = 0; j < jumpAmount && i < breaks.length; ++j, ++i){
        // If the ball broke, return the index
        if (breaks[i]){
            return i;
        }
    }

    return -1
}

//Representation of the algorithm

// 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
// 0 0 0 0 0 0 0 0 0  0  1  1  1  1  1  1
// ball broke at array index 11

// sqrt of 16 = 4
// jumpAmount = 4

// breaks[4] = 0, breaks[8] = 0, breaks[12] = 1
// we know that ball broke between 8 and 12
// i = 12

// we move i back to the last breaking point with value 0 (8)
// i = 8

// we check the next 4 elements until we find the breaking point
// breaks[8] = 0, breaks[9] = 0 , breaks[10] = 1
// return 10
