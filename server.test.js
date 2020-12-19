const server = require('./server')
//Unit Test
test('Port should be 3001 and not 3000', () => {
    expect(server()).not.toBe(3000)
    expect(server()).toBe(3001)
})

