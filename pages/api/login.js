export default function handler(req, res) {

    const { value } = req.body
    console.log(value)
    res.status(200).json({ value })
}