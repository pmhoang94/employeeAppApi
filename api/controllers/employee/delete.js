module.exports = {
  friendlyName: "Delete",

  description: "Delete employee.",

  inputs: {
    id: { type: "string", required: true }
  },

  exits: {},

  fn: async function(inputs) {
    inputs.isDelete = true;
    let employee = await Employee
      .update({ id: inputs.id }, { isDelete: true, updatedBy: "system" })
      .fetch();
    // All done.
    return employee;
  }
};
