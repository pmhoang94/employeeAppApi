module.exports = {
  friendlyName: "Get",

  description: "Get employee.",

  inputs: {
    id: { type: "string", required: true }
  },

  exits: {},

  fn: async function(inputs) {
    let employee = await Employee.findOne({ id: inputs.id });
    // All done.
    return employee;
  }
};
