'use strict'

/*
|--------------------------------------------------------------------------
| AlbumSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class AlbumSeeder {
  async run () {
    await Factory.model('App/Models/Album').createMany(10)
  }
}

module.exports = AlbumSeeder
