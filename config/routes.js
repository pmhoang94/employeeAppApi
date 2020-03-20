/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  "POST /api/employee/edit": {
    action: "employee/edit"
  },
  "GET /api/employee/get": {
    action: "employee/get"
  },
  "DELETE /api/employee/delete": {
    action: "employee/delete"
  },
  "POST /api/employee/query": {
    action: "employee/query"
  }
};
