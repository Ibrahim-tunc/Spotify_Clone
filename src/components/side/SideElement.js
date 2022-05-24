
function SideElement({name, src}) {
  return (
    <>
        <li className="side__element">
            <img className="icon" src={src} />
            {name}    
        </li>
    </>
  )
}

export default SideElement