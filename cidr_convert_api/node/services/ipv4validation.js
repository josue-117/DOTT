export const ipv4ValidationFunction = (value) => {
  //console.log(value);
  // Expression Pattern
  var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  if (value.match(ipformat)){
    // Matches or Evaluates the ipformat with the given input in value
    // Message("Your IP is valid")
    return true;
  }
  else
  {
    // Alert("Your IP Adress is invalid !")
    return false
  }
}
