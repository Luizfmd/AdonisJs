'use strict'

const Song = use('App/Models/Song')

class SongController {
    async CreateOne({ request, params }) {
        
        const { name } = request.all()
        
        const song = new Song()

        song.album_id = params.id
        song.name     = name
        
        await song.save() 
        return song
    }

    async UpdateOne({ request, params }) {
        
        const { name } = request.all()

        const song = await Song.find(params.id)
        song.name = name

        await song.save()

        return song
    }

    async DeleteOne({ params }) {
        const song = await Song.find(params.id)
        return song.delete()
    }
}

module.exports = SongController
