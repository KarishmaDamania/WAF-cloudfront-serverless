'use-strict'

let init = require('./steps/init')
let{an_authenticated_user} = require('./steps/given')
let{we_invoke_createNote, we_invoke_updateNote, we_invoke_deleteNote} = require('./steps/when')
let idToken

describe('Given an authenticated user', () => {
    beforeAll(async () => {
        init()
        let user = await an_authenticated_user()
        idToken = user.AuthenticationResult.IdToken
        console.log(idToken)
    })


describe('When we invoke POST /notes endpoint', () => {
    it('Should create a new note', async () => {
        const body = {
            id: "1",
            title: "Test Title",
            body: "Test Body"
        }
        let result = await we_invoke_createNote({idToken, body})
        console.log(result)
        expect(result.statusCode).toEqual(201)
        expect(result.body).not.toBeNull()

    })
})

describe(`When we invoke PUT /notes/:id endpoint`, () => {
    it('Should update the note', async () => {
        const noteId = "1"
        const body = {
            title: "Updated Title",
            body: "Updated Body"
        }
        let result = await we_invoke_updateNote({idToken, body, noteId})
        console.log(result)
        expect(result.statusCode).toEqual(200)
        expect(result.body).not.toBeNull()

    })
})

describe(`When we invoke DELETE /notes/:id endpoint`, () => {
    it('Should delete the note', async () => {
        const noteId = "1"
        let result = await we_invoke_deleteNote({idToken, noteId})
        console.log(result)
        expect(result.statusCode).toEqual(200)
        expect(result.body).not.toBeNull()

    })
})

})

// https://i2u7k1ywhc.execute-api.us-east-1.amazonaws.com/dev/notes
// https://i2u7k1ywhc.execute-api.us-east-1.amazonaws.com/dev/notes

