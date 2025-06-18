/**
 * Converts a given string to camelCase.
 *
 * The function accepts strings containing only letters, numbers, spaces, hyphens, and underscores.
 * It splits the input into words using spaces, hyphens, or underscores as delimiters, converts all words to lowercase,
 * and then capitalizes the first letter of each word except the first one. The resulting words are concatenated to form a camelCase string.
 *
 * @param {string} input - The input string to convert to camelCase.
 * @returns {string} The camelCase version of the input string.
 * @throws {Error} Throws an error if the input is null, undefined, not a string, or contains invalid characters.
 *
 * @example
 * toCamelCase("hello world"); // returns "helloWorld"
 * toCamelCase("Hello-World"); // returns "helloWorld"
 * toCamelCase("HELLO_world"); // returns "helloWorld"
 * toCamelCase("hello!"); // throws Error: Input contains invalid characters.
 */

/**
 * Converts a given string to dot.case.
 *
 * The function accepts strings containing only letters, numbers, spaces, hyphens, and underscores.
 * It splits the input into words using spaces, hyphens, or underscores as delimiters, converts all words to lowercase,
 * and then joins them with dots to form a dot.case string.
 *
 * @param {string} input - The input string to convert to dot.case.
 * @returns {string} The dot.case version of the input string.
 * @throws {Error} Throws an error if the input is null, undefined, not a string, or contains invalid characters.
 *
 * @example
 * toDotCase("hello world"); // returns "hello.world"
 * toDotCase("Hello-World"); // returns "hello.world"
 * toDotCase("HELLO_world"); // returns "hello.world"
 * toDotCase("hello!"); // throws Error: Input contains invalid characters.
 */
function toCamelCase(input) {
    if (input === null || input === undefined) {
        throw new Error("Input cannot be null or undefined.");
    }
    if (typeof input !== "string") {
        throw new Error("Input must be a string.");
    }
    if (input.length === 0) {
        return "";
    }
    // Only allow letters, numbers, spaces, hyphens, and underscores
    if (/[^a-zA-Z0-9 _-]/.test(input)) {
        throw new Error("Input contains invalid characters.");
    }

    // Split by space, hyphen, or underscore
    const words = input
        .split(/[\s_-]+/)
        .filter(Boolean)
        .map(word => word.toLowerCase());

    if (words.length === 0) {
        return "";
    }
    if (words.length === 1) {
        return words[0];
    }

    // Capitalize first letter of each word except the first
    const camelCased = words[0] + words.slice(1).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join("");
    return camelCased;
}

// Example usage:
// console.log(toCamelCase("hello world")); // "helloWorld"
// console.log(toCamelCase("Hello-World")); // "helloWorld"
// console.log(toCamelCase("HELLO_world")); // "helloWorld"
// console.log(toCamelCase("hello!")); // Error: Input contains invalid characters.

function toDotCase(input) {
    if (input === null || input === undefined) {
        throw new Error("Input cannot be null or undefined.");
    }
    if (typeof input !== "string") {
        throw new Error("Input must be a string.");
    }
    if (input.length === 0) {
        return "";
    }
    // Only allow letters, numbers, spaces, hyphens, and underscores
    if (/[^a-zA-Z0-9 _-]/.test(input)) {
        throw new Error("Input contains invalid characters.");
    }

    // Split by space, hyphen, or underscore
    const words = input
        .split(/[\s_-]+/)
        .filter(Boolean)
        .map(word => word.toLowerCase());

    return words.join(".");
}

// Example usage:
// console.log(toDotCase("hello world")); // "hello.world"
// console.log(toDotCase("Hello-World")); // "hello.world"
// console.log(toDotCase("HELLO_world")); // "hello.world"
// console.log(toDotCase("hello!")); // Error: Input contains invalid characters.

