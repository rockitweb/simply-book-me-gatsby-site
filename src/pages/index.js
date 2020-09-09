import React from "react"
import { Link } from "gatsby"
export default function Home() {
  return (
    <div>
      <h1>Simply Book Me - Hello world!</h1>
      <p>This is a quick repo reproducing an issue with rendering the widget in static sites (in this case GatsbyJS) </p>
      <ul>
        <li>
          <Link to="/not-working/">Original</Link> - This page uses the widget out of the box.  You will see that the widget is all that is shown on the page
          as other HTML is being overwritten by the widget
        </li>
        <li>
          <Link to="/working/">Modified</Link> - This pages uses a local, modified, version of widget.js that replaces an element in the DOM rather than the entire Body
        </li>
      </ul>
    </div>
  )
}
