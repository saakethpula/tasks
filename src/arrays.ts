/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const newnumber: number[] = [];
    if (numbers.length == 0) {
        return newnumber;
    } else if (numbers.length == 1) {
        newnumber.push(numbers[0]);
        newnumber.push(numbers[0]);
    } else {
        newnumber.push(numbers[0]);
        newnumber.push(numbers[numbers.length - 1]);
    }
    return newnumber;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((x: number): number => x * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const integers = numbers.map((ints: string): number =>
        Number.isNaN(parseInt(ints)) ? 0 : parseInt(ints)
    );
    return integers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const integers = amounts.map((number: string): number => {
        const parsedNumber = parseInt(number.replace("$", ""), 10);
        return isNaN(parsedNumber) ? 0 : parsedNumber;
    });
    return integers;
};
/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noquestions = messages.filter(
        (fix: string): boolean => fix.charAt(fix.length - 1) != "?"
    );
    const newmessages = noquestions.map((message: string): string =>
        message.charAt(message.length - 1) == "!"
            ? message.toUpperCase()
            : message
    );
    return newmessages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const short = words.filter((fix: string): boolean => fix.length < 4);
    return short.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length == 0) {
        return true;
    } else {
        return colors.every(
            (color) => color == "red" || color == "green" || color == "blue"
        );
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const number = addends.reduce((acc, curr) => acc + curr, 0);
    if (addends.length != 0) {
        return number.toString() + "=" + addends.join().replaceAll(",", "+");
    } else {
        return (
            number.toString() + "=" + addends.join().replaceAll(",", "+") + "0"
        );
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const newnewvalues = values.slice();
    const negIndex = values.findIndex((value: number): boolean => value < 0);
    console.log(negIndex);
    const newvalues = values.slice(0, negIndex);
    const sum = newvalues.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    if (negIndex == -1) {
        newnewvalues.push(
            newnewvalues.reduce(
                (currentTotal: number, num: number) => currentTotal + num,
                0
            )
        );
    } else if (negIndex == 0) {
        newnewvalues.splice(negIndex + 1, 0, 0);
    } else {
        newnewvalues.splice(negIndex + 1, 0, sum);
    }
    return newnewvalues;
}
