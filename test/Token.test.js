const Tazo = artifacts.require('Tazo')

contract('Tazo', accounts => {
    let tazo

    before(async () => {
        tazo = await Tazo.deployed()
    })

    it('deploys successfully', async () => {
        const address = tazo.address
        assert.notEqual(address, 0x0)
        assert.notEqual(address, '')
        assert.notEqual(address, null)
        assert.notEqual(address, undefined)
    })

    it('has a name', async () => {
        const name = await tazo.name()
        assert.equal(name, 'Tazo')
    })

    it('has a symbol', async () => {
        const symbol = await tazo.symbol()
        assert.equal(symbol, 'TZX')
    })

    it('mints tokens', async () => {
        let result
        await tazo.mint(accounts[0], 'https://www.token-uri.com/nft')
        result = await tazo.totalSupply();
        assert.equal(result.toString(), '1', 'total supply is correct')

        result = await tazo.balanceOf(accounts[0])
        assert.equal(result.toString(), '1', 0)

        result = await tazo.ownerOf('1')
        assert.equal(result.toString(), accounts[0].toString(), 'owner is correct')

        let balanceOf = await tazo.balanceOf(accounts[0])
        let tazoIds = []
        for (let i = 0; i<balanceOf; i++){
            let id = await tazo.tokenOfOwnerByIndex(accounts[0], i)
            tazoIds.push(id.toString())
        }
        let expected = ['1']
        assert.equal(tazoIds.toString(), expected.toString(), 'tokens Ids are correct')

        let tokenURI = await tazo.tokenURI('1')
        assert.equal(tokenURI, 'https://www.token-uri.com/nft')
    })
})
