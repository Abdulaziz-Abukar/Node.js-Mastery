lastId = 2;
function idGenerator() {
  lastId++;

  return lastId;
}
module.exports = idGenerator;
