import axios from 'axios'

export const FETCH = 'FETCH'
export const SUCCESS = 'SUCCESS'
export const FAIL = 'FAIL'

export const hunt = () => dispatch => {
    console.log("made it here")
    dispatch({type: FETCH})
    axios
        .get(`https://swapi.co/api/people/`)
        .then(res => {
            console.log(res.data.results)
            dispatch({type: SUCCESS, payload: res.data.results})
            }
        )
        .catch(err => dispatch({type: FAIL, payload: err}))
}