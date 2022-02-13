const axios = require("axios").default;

it('list users on system', async () => {
    var req = await axios.get('http://localhost:3030/api/users');
    var data = req.data;
    expect(data.length).toBeGreaterThan(0);
});