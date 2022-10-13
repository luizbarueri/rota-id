const db = require('./db.json')

export default function Database() {
    return JSON.stringify(db)
}