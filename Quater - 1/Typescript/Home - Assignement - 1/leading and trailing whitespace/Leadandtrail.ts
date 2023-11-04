// Store the person's name with leading and trailing whitespace
const nameWithWhitespace: string = "\t   Bilal - Mazhar \n";

// Print the name with whitespace
console.log("Name with Whitespace:");
console.log(`"${nameWithWhitespace}"`);

// Remove the leading and trailing whitespace
const strippedName: string = nameWithWhitespace.trim();

// Print the stripped names
console.log("\nStripped Name:");
console.log(`"${strippedName}:"`);
