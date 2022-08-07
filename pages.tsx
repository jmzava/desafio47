import { React, ReactDOMServer } from "./deps.ts";

const Varios = ( props:Array<string>) =>(
    <pre>
        {JSON.stringify(props, null, 2)}
    </pre>
)

export default (props:Array<string> = [])=>
`<!DOCTYPE html>
${ReactDOMServer.renderToString((
    <>
    <form action="/" method="post"> 
        <input name="textColor" placeholder="color" type="text" />
        <button type="submit">submit</button>
    </form>
    <hr/>
    < Varios {...props} />
    </>
))}`