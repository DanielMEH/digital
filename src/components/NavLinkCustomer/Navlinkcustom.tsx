import { Link } from "react-router-dom"
import { NavlinkcustomProps } from "../../util/interfaces/customerInterface"


function Navlinkcustom({to,children, className,}:NavlinkcustomProps) {
  return (
    <li className={className} >
      <Link to={to} className={className}>
      {children}
    </Link>
    </li>
  )
}

export default Navlinkcustom