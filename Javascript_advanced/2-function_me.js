function welcomeMessage (fullName) {
  // closure for alert that displays Welcome <fullname>
  return function () {
    alert('Welcome ' + fullName);
  };
}
const guillaume = welcomeMessage('Guillaume');
const alex = welcomeMessage('Alex');
const fred = welcomeMessage('Fred');
