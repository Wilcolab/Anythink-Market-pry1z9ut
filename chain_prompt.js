function toKebabCase(str) {
    if (typeof str !== 'string') {
        throw new Error('Invalid input type.');
    }

    // Trim leading/trailing spaces
    let trimmed = str.trim();

    if (trimmed.length === 0) {
        return '';
    }

    // Replace spaces, underscores, or hyphens between words with a single hyphen
    let kebab = trimmed
        .replace(/[\s_-]+/g, '-') // Replace one or more space, underscore, or hyphen with a single hyphen
        .toLowerCase();

    return kebab;
}

// Example usage:
// console.log(toKebabCase("Hello World")); // "hello-world"
// console.log(toKebabCase(" hello_world ")); // "hello-world"
// console.log(toKebabCase("hello---world")); // "hello-world"
// console.log(toKebabCase("")); // ""
// console.log(toKebabCase(null)); // throws Error