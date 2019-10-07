'use strict'

/*
|--------------------------------------------------------------------------
| SongSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class SongSeeder {
  async run () {
    await Factory.model('App/Models/Song').createMany(100)
  }
}

module.exports = SongSeeder
