import { FooterStyled } from "./Footer.styled"
import { Link } from "react-router-dom"

export default function Footer(){
  return(
    <FooterStyled>
      <h2>Love & Vendors</h2>
        <Link>
        About
        </Link>
    </FooterStyled>
  )
}