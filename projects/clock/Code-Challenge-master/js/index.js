function handleDayClick(day) {
  // get open text and hours text based on day
  var result = getBusinessHoursText(day)
  
  // get open text span and insert correct text
  var openTextEl = document.getElementById('open-text')
  openTextEl.innerHTML = result.openText

  // get hours text span and insert correct hours text
  var hoursTextEl = document.getElementById('hours-text')
  hoursTextEl.innerHTML = result.hoursText
}

function getBusinessHoursText(day, hour, minute, currDay) {
  var d = new Date()

  if(!hour) hour = d.getHours()
  if(!minute) minute = d.getMinutes()
  if(!currDay) currDay = d.getDay()
  
  var time = hour*100 + minute
  
  var hoursInfo = [
    { closed: true },
    { closed: false, startTime: 900, endTime: 1800, text: '9am - 6pm' },
    { closed: true },
    { closed: false, startTime: 930, endTime: 1630, text: '9:30am - 4:30pm' },
    { closed: false, startTime: 1000, endTime: 1630, text: '10am - 4:30pm' },
    { closed: false, startTime: 900, endTime: 1800, text: '9am - 6pm' },
    { closed: true }
  ]
  
  var dayInfo = hoursInfo[ day ]
  
  var openText
  var hoursText = ''
  
  if( dayInfo.closed ) {
    openText = 'CLOSED'
  } else if (
      day == currDay &&
      time >= dayInfo.startTime &&
      time <= dayInfo.endTime
    ) {
    openText = 'OPEN NOW'
  } else {
    openText = 'OPEN FROM'
  }
  
  if( !dayInfo.closed ) {
    hoursText = dayInfo.text
  }

  var ret = {
    openText: openText,
    hoursText: hoursText
  }

  return ret
}

/*
var result

result= getBusinessHoursText(0, 9, 30, 1)
if( result.openText != 'CLOSED' || result.hoursText != '') {
  throw new Error('different day closed test failed!')
}

result= getBusinessHoursText(3, -1, -1, 1)
if( result.openText != 'OPEN FROM' || result.hoursText != '9:30am - 4:30pm') {
  console.log(result)
  throw new Error('different day open test failed!')
}

result= getBusinessHoursText(1, 9, 30, 1)
if( result.openText != 'OPEN NOW' || result.hoursText != '9am - 6pm') {
  throw new Error('monday same day open test failed!')
}

result= getBusinessHoursText(1, 8, 30, 1)
if( result.openText != 'OPEN FROM' || result.hoursText != '9am - 6pm') {
  throw new Error('monday same day too early test failed!')
}

result= getBusinessHoursText(1, 19, 30, 1)
if( result.openText != 'OPEN FROM' || result.hoursText != '9am - 6pm') {
  throw new Error('monday same day too late test failed!')
}

console.log('all tests passed!')
*/

