module.exports = {
  friendlyName: "Query",

  description: "Query employee.",

  inputs: {
    from: {
      type: "number",
      example: 0,
      defaultsTo: 0
    },
    size: {
      type: "number",
      example: 0,
      defaultsTo: 10,
      max: 100
    },
    query: {
      type: "json",
      defaultsTo: {}
    },
    sort: {
      type: "ref",
      defaultsTo: { createdAt: -1 }
    },
    project: {
      type: "json",
      defaultsTo: {}
    }
  },

  exits: {},

  fn: async function(inputs) {
    if (_.isEmpty(inputs.sort)) {
      inputs.sort = { createdAt: -1 };
    }
    let db = Employee.getDatastore().manager;
    let collection = db.collection(Employee.tableName);
    let result = await collection.find(inputs.query);
    let [total, data] = await Promise.all([
      result.count(),
      result
        .sort(inputs.sort)
        .limit(inputs.size)
        .skip(inputs.from)
        .project(inputs.project)
        .toArray()
    ]);
    // All done.
    return {
      from: inputs.from,
      size: inputs.size,
      total: total,
      data: data
    };
  }
};
