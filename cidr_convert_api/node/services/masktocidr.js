export const maskToCidrFunction = (value) => {

  
  var cidr = ''
  for (var m of value.split('.')) {
      if (parseInt(m)>255) {console.log('Invalid Netmask')} // Check each group is 0-255
      if (parseInt(m)>0 && parseInt(m)<128) {console.log('ERROR: Invalid Netmask')} //Check each group isn't between 0 and 128 

      cidr+=(m >>> 0).toString(2)
  }
  // Condition to check for validity of the netmask
  if (cidr.substring(cidr.search('0'),32).search('1') !== -1)
      {console.log('ERROR: Invalid Netmask ' + value)}

  return cidr.split('1').length-1
}
