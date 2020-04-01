export const devlUrl = "http://localhost:5000"
export const prodUrl = "https://survey-cmr.herokuapp.com"

export const rootUrl = process.env.NODE_ENV === 'development' ? devlUrl : prodUrl;