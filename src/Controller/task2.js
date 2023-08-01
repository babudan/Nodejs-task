
const { dataManipulateSchema } = require("../dto/task2Validation");

const datamanipulation = async function (req, res) {
    try {

        const data = req.body;
        const { error, value } = dataManipulateSchema.validate(data);
        if (error) return res.status(400).send({ status: false, message: error.message })

        const totalSum = value.arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        return res.status(200).send({ status: true, data: totalSum })

    } catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

module.exports = { datamanipulation }