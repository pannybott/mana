const greetings = ["Hello", "Hi", "Hey", "Welcome"];

export function randomGreeting(name = "World") {
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];
  return `${greeting}, ${name}!`;
}

console.log(randomGreeting());
