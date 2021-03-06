/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
   * etc. depending on your default view engine) your home page.              *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  '/': {
    view: 'homepage'
  },
  'get /admin/login': 'UserController.login',
  'post /admin/login-check': 'UserController.loginCheck',
  'get /admin/logout': 'UserController.logout',

  'get /admin': 'ConsultantController.table',
  'get /admin/consultants': 'ConsultantController.table',
  'get /admin/consultants/new': 'ConsultantController.new',
  'get /admin/consultants/:id/edit': 'ConsultantController.edit',

  'get /admin/projects': 'ProjectController.table',
  'get /admin/projects/new': 'ProjectController.new',
  'get /admin/projects/:id/edit': 'ProjectController.edit',

  'get /admin/open-positions': 'OpenPositionController.table',
  'get /admin/open-positions/new': 'OpenPositionController.new',
  'get /admin/open-positions/:id/edit': 'OpenPositionController.edit'

  /***************************************************************************
   *                                                                          *
   * Custom routes here...                                                    *
   *                                                                          *
   *  If a request to a URL doesn't match any of the custom routes above, it  *
   * is matched against Sails route blueprints. See `config/blueprints.js`    *
   * for configuration options and examples.                                  *
   *                                                                          *
   ***************************************************************************/

};
