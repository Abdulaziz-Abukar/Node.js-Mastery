let lastUserId = 2;
function idGenerator() {
  lastUserId += 1;

  return lastUserId;
}

module.exports = idGenerator;
