const contactProvider = require('../../fixtures/contact');
const thisModel = 'contact';
const allModels = [thisModel];

describe('ContactController', () => {
  const createDbRecord = async (thisModel, thisNewRecord, multi = false) => {
    if (multi) {
      return await sails.models[thisModel].createEach(thisNewRecord);
    }
    return await sails.models[thisModel].create(thisNewRecord);
  };

  const clearDb = async () => {
    return await Promise.map(allModels, (model) => sails.models[model].destroy({}));
  };

  afterEach(clearDb);

  describe('#list [GET /contact]', () => {
    it('should return 200: Contacts retrieved successfully', async () => {
      const newContacts = contactProvider.getRecord({}, 2);
      await createDbRecord('contact', newContacts, true);
      const response = await request(sails.hooks.http.app)
        .get('/contact')
        .query({ page: 1, perPage: 2 })
        .expect(200);
      response.body.should.have.property('data');
      response.body.should.have.property('meta');
      response.body.data.length.should.eql(2);
    });
    it('should return 200: Contacts retrieved successfully, multiple pages', async () => {
      const newContacts = contactProvider.getRecord({}, 3);
      await createDbRecord('contact', newContacts, true);
      const response = await request(sails.hooks.http.app)
        .get('/contact')
        .query({ page: 2, perPage: 2 })
        .expect(200);
      response.body.should.have.property('data');
      response.body.should.have.property('meta');
      response.body.data.length.should.eql(1);
    });
  });
});
