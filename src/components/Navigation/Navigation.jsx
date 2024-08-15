import styles from "./Navigation.module.css";  // here instEAD of styles we can write any name of our choice

function Navigation() {
  // console.log("Inside Navigation Css module file : " , styles); just for testing purpose
  return (
    <nav className={`${styles.navigationx} container`}>
      <div className="logo">
        <img src="/images/logo.png" alt="do some coding logo" />
      </div>

      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navigation