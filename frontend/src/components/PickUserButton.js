import styles from "./PickUserButton.module.css"

/* 
:users:
  the selected user type
:type:
  string
:chooseUser:
  function that identifies which user is accessing the system
:type:
  function
*/
function UserButton ({user,chooseUser}) {
  // ToDo 10.1
  return (
    <div className={styles.bodyContainer}>
          <button onClick={()=>chooseUser("admin")} className={user === 'admin' ? styles.userButtonActive : styles.userButtonDefault}>
            Admin
          </button>
        
          <button onClick={()=>chooseUser("nurse")} className={user === 'nurse' ? styles.userButtonActive : styles.userButtonDefault}>
            Nurse
          </button>

          <button onClick={()=>chooseUser("patient")} className={user === 'patient' ? styles.userButtonActive : styles.userButtonDefault}>
            Patient
          </button>
    </div>      
  );

}

export default UserButton;
