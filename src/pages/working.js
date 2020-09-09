/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import DangerouslySetHtmlContent from "../components/DangerouslySetHtmlContent"


const Working = () =>{ 


  const html = `<script>var widget = new SimplybookWidgetRW({element:"widget","widget_type":"iframe","url":"https:\/\/manlysurfnslide.enterpriseappointments.com","theme":"default","theme_settings":{"timeline_modern_display":"as_table","timeline_hide_unavailable":"0","timeline_show_end_time":"0","sb_base_color":"#33bb60","display_item_mode":"block","booking_nav_bg_color":"#d1e9c6","body_bg_color":"#fdfdfd","dark_font_color":"#494949","light_font_color":"#ffffff","btn_color_1":"#5e7da7","sb_company_label_color":"#ffffff","hide_img_mode":"1","show_sidebar":"1","sb_busy":"#dad2ce","sb_available":"#d3e0f1"},"timeline":"modern","datepicker":"inline_datepicker","is_rtl":false,"app_config":{"predefined":[]}});</script>`


  return (
    <div>
      <Helmet></Helmet>
      <h1>Simply book me</h1>
      <h2>Customised widget.js (local/test.js)</h2>
      <p>
        By using the customised widget.js I am able to prevent the replacement
        of all HTML, and thus you can read this :)
      </p>
      <Link to="/">Go back to the homepage</Link>
      <div id="widget"></div>
      <DangerouslySetHtmlContent html={html} />
    </div>
  )}

export default Working
