/* 2. Handle Sync Error
    Use a try/catch block to catch a JSON parsing error
*/
const badJson = '{"name": "Abdulaziz", "age": 23,'; // Note the missing closing

try {
  JSON.parse(badJson);
} catch (err) {
  console.log("Failed to parse JSON:", err.message);
}
