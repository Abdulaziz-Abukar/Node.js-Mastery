lastId = 3;
function idGenerator() {
  lastId++;

  return lastId;
}
module.exports = idGenerator;
