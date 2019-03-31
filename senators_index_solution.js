import Senators from './data/senators'

export const republicans = () => {
  return Senators.filter(target => target.party === 'Republican')
}

export const democrats = () => {
  return Senators.filter(target => target.party === 'Democrat')
}

export const independents = () => {
  return Senators.filter(target => target.party === 'Independent')
}

export const males = () => {
  return Senators.filter(target => target.person.gender === 'male')
}

export const females = () => {
  return Senators.filter(target => target.person.gender === 'female')
}

export const byState = (state = 'UT') => {
  return Senators.filter(target => target.state === 'UT')
}

export const mapping = () => {
  return Senators.map(
    function format(target) {
      return {
        firstName: target.firstname,
        lastName: target.lastname,
        party: target.party,
        gender: target.gender_label
      }
    }
  )
}

export const birthplaceSeniorSenator = () => {
  return Senators.filter(target => target.state === "MD" && target.senator_rank === "senior")
}


const REPLACE_ME_WITH_CODE = false
