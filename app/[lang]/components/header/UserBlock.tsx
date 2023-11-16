import Link from "next/link"

const UserBlock = ({message}: {message: any}) => {
  const isAuth = true
  return (
    <div>
      { isAuth ? (
        <Link href="#" className="profile-link">moonshine25</Link>
      ) : (
        <button className="btn primary-btn">{message.sign_in}</button>
      )}
    </div>
  )
}

export default UserBlock