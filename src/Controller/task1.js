
const testuser = async function (req, res) {
    try {

        return res.status(200).send({ status: true, message: "Hello ,World!" })

    } catch (err) {
        return res.status(400).send({ status: false, message: err.message })
    }
}

module.exports = { testuser }