/**
 * Performs binary search on a sorted list to find a specific element.
 * @param {number[]} haystack - The sorted list to search in.
 * @param {number} needle - The element to search for.
 * @returns {bolean} True if the element is found in the list, false otherwise.
 * @complexity O(log n)
*/
export default function bs_list(haystack: number[], needle: number): boolean {
    
    let low = 0;
    let high = haystack.length; 
    do{
        const midpoint = Math.floor(low + (high-low)/2); //Calculate the midpoint of the list
        const value = haystack[midpoint];

        if (value === needle){
            return true; //Found the needle, return true
        }else if (value > needle){
            high = midpoint; //If Needle is in the lower half, update the high index
        }else{
            low = midpoint +1; //If Needle is in the upper half, update the low index
        } 
    }while(low < high); // Repeat until the low index is less than the high index

    return false; //Needle not found, return false
}

//Representation of the algorithm

//             0, 1, 2, 3, 4, 5, 6, 7, 8, 9
// haystack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// needle = 3

// low = 1, high = 10
// midpoint = (1 + 10/2) = 5.5 = 5
// value = haystack[5] = 6
// 6 != 3
// value > needle

// after doing the first iteration we set high = 5
// low = 1, high = 5
// midpoint = (1 + 5)/2 = 3
// value = haystack[3] = 4
// 4 != 3
// value > needle

// after doing the second iteration we set high = 3
// low = 1, high = 3
// midpoint = (1 + 3)/2 = 2
// value = haystack[2] = 3
// 3 == 3
// return true
