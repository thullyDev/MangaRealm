export const AccountBtn = () => {
  const redirect = () => window.location.assign("/profile")
  return (
    <button onClick={redirect} type="button" className="account-button">
      <i className="fas fa-user-circle text-3xl"></i>
    </button>  
  )
}