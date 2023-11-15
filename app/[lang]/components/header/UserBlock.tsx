'use client'

const UserBlock = ({message}: {message: any}) => {
  const isAuth = false
  return (
    <div>
      { isAuth ? (
        <div>auth</div>
      ) : (
        <button className="btn primary-btn">{message.sign_in}</button>
      )}
    </div>
  )
}

export default UserBlock