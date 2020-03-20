module.exports = {
  friendlyName: "Edit",

  description: "Edit employee.",

  inputs: {
    id: { type: "string" },
    name: { type: "string" },
    phone: { type: "string" },
    email: { type: "string" },
    picture: { type: "string" },
    salary: { type: "string" },
    position: { type: "string" }
  },

  exits: {},

  fn: async function(inputs) {
    let employee = {};
    if (inputs.id) {
      inputs.updatedBy = "system";
      let employees = await Employee.update({ id: inputs.id }, inputs).fetch();
      employee = _.head(employees)
    } else {
      inputs.createdBy = "system";
      employee = await Employee.create(inputs).fetch();
    }
    // All done.
    return employee;
  }
};
