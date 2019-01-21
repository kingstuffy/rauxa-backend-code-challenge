const provider = require('../../fixtures/contact');
const thisModel = 'contact';

describe('Contact (model)', () => {
  const createRecord = async (thisNewRecord) => {
    return await sails.models[thisModel].create(thisNewRecord);
  };

  const clearDb = async () => {
    return await sails.models[thisModel].destroy({});
  };

  afterEach(clearDb);

  describe('#create()', () => {
    it('should create record', async () => {
      const newRecord = provider.getRecord();
      const createdRecord = await sails.models[thisModel].create(newRecord);
      createdRecord.should.have.property('name', newRecord.name);
    });
  });
  describe('#find()', () => {
    it('should find records', async () => {
      await createRecord(provider.getRecord());
      const records = await sails.models[thisModel].find();
      records.length.should.not.be.eql(0);
    });
  });
  describe('#findOne()', () => {
    it('should find one record', async () => {
      const newRecord = await createRecord(provider.getRecord());
      const record = await sails.models[thisModel].findOne({ name: newRecord.name });
      should.exist(record);
    });
  });
  describe('#update()', () => {
    it('should update record', async () => {
      const newRecord = await createRecord(provider.getRecord());
      const name = chance.name();
      const updateRecord = await sails.models[thisModel].update({ name: newRecord.name }, { name });
      updateRecord[0].should.have.property('name', name);
    });
  });
  describe('#delete()', () => {
    it('should destroy record', async () => {
      const newRecord = await createRecord(provider.getRecord());
      await sails.models[thisModel].destroy({ id: newRecord.id });
    });
  });
});
