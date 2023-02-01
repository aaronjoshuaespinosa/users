import main from "@/database/connection"
import user from "@/database/schema"

export default function handler(req, res) {

    main().catch(error => console.error(error))

    const create = new user({fName: "Aaron Joshua"})
    create.save().then(() => {
        res.status(200).json(create)
        console.log(create)
    })

    // const { value } = req.body
    // res.status(200).json({ value })
}