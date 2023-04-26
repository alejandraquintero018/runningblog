
const { Client } = require("@notionhq/client");
const dotenv = require("dotenv");

dotenv.config()

//Initializing a client
const NOTION_TOKEN = new Client({
  auth: process.env.NOTION_TOKEN,
})

const DATABASE_ID = process.env.NOTION_DATABASE_ID


    // try {
    //     const data = res.json();
    // } catch (error) {
    //     console.log(error)
    // }

export default async function Page() {

    // const res = await fetch('https://github.com/alejandraquintero018/runningblog');


    // const json = await res.json();

    // const listUsersResponse = await notion.users.list({})

    return (

    <div>

        <h1 className="mx-auto">  This is how I got into veganism </h1>

        {/* <h2> { listUsersResponse} </h2> */}

        {/* <h2> { json } </h2> */}

    </div>

    )

}
