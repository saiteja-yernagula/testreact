

function Protectedroute({islogin,children}) {
  if (islogin){
    return children
  }
  return (
    <div>please mama login</div>
  )
}

export default Protectedroute