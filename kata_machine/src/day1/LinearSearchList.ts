/**
 * Performs a linear search on an array to find a specific element.
 * @param {number[]} haystack  - The array to search through.
 * @param {number} needle - The element to search for.
 * @returns {boolean} `true` if the element is found, `false` otherwise.
 * @complexity O(n)
*/
export default function linear_search(haystack: number[], needle: number): boolean {
    // Loop through the array
    for (let i = 0; i < haystack.length; ++i) {
        // If the element is found, return true
        if (haystack[i] === needle) {
            return true;
        }
    }
    return false;
}

//Representation of the algorithm

//            0, 1, 2, 3, 4, 5, 6, 7, 8, 9
// haystack= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// needle = 6

// i = 0, haystack[0] = 1 != 6
// i = 1, haystack[1] = 2 != 6
// i = 2, haystack[2] = 3 != 6
// i = 3, haystack[3] = 4 != 6
// i = 4, haystack[4] = 5 != 6
// i = 5, haystack[5] = 6 == 6
// return true