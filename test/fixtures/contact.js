const getRecord = (overrides = {}, qty = 1) => {
  const {
    name = chance.name(),
    phone = chance.phone(),
    imgUrl = chance.url(),
    thumbnailUrl = chance.url(),
  } = overrides;

  const records = _.times(qty, () => {
    return {
      name,
      phone,
      imgUrl,
      thumbnailUrl,
    };
  });

  if (qty === 1) {
    return records[0];
  }
  return records;
};

module.exports = {
  getRecord
};
