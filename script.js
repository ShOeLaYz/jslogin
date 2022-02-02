function adminlogin() {
    let text;
    let username = prompt("Username:", "");
    if (username == "admin" || username == "yourusername") {
        text = "Hello " + username +" Welcome Back";
    } else {
        text = "Username: " +username+ " Was Not Found In Our Database";console.warn('Data(Search--none) --> Username Not Found =(');alert("This Username Does Not Exist");location.replace("#");
    }
    if (username == "admin" || username == "yourusername") {
    let password = prompt("Password:")
    if (password == "thispassword"|| password == "thispasscode") {
        text = "";
      } else {
        text = "The Password '" + password + "' Is Invalid";console.error('Password(id=pwcheck)==> Password Incorrect!(');alert("Password Invalid , Try Again?");
      }}
      if (username == "hacker") {
          alert("HACKER!!! CATCH HIMMMMMMM")
          console.info('UserID=//bcv//hackaboi.vww = Deleted hash=146349354428(');
      }
    document.getElementById("info").innerHTML = text;
  }
function showip() {
    var x = document.getElementById("ip");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
