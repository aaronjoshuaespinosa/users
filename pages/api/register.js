export default function handler(req, res) {

    const { value } = req.body
    res.status(200).json({ value })
}