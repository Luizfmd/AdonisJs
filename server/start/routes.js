'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group( () => {
  
  Route.get('/getAll', 'AlbumController.GetAll')
  Route.get('/getOne/:id', 'AlbumController.GetOne')
  Route.post('/createOne', 'AlbumController.CreateOne')
  Route.delete('/deleteOne/:id', 'AlbumController.DeleteOne')
  Route.put('/updatePhoto/:id', 'AlbumController.UpdatePhoto')

}).prefix('albums')

Route.group( () => {

  Route.post('/createOne/:id', 'SongController.CreateOne')
  Route.put('/updateOne/:id', 'SongController.UpdateOne')
  Route.delete('/deleteOne/:id', 'SongController.DeleteOne')

}).prefix('songs')