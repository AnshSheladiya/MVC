class MongooseService {
  constructor(model) {
    this.model = model;
  }
  create(body) {
    return this.model.create(body);
  }

  //find
  findAll() {
    return this.model.find({}).select("-__v");
  }
  findById(_id) {
    return this.model.findOne({ _id }).select("-__v");
  }

  findByField(field) {
    return this.model.find(field).select("-__v");
  }

  findOneByField(field) {
    return this.model.findOne(field).select("-__v");
  }
}

module.exports = MongooseService;
