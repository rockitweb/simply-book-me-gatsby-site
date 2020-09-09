import React from 'react'
import { withPrefix } from 'gatsby'
export const onRenderBody = ({ setPostBodyComponents, setHeadComponents }) => {
  setHeadComponents([
    <script src={withPrefix("test.js")}></script>,
    <script src="https://widget.enterpriseappointments.com/v2/widget/widget.js"></script>,
  ])
}
