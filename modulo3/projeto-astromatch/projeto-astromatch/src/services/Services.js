import axios from "axios";

export const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:jose-rodolfo/"

export const getProfileToChoose = async () => {
    try {
        const response = await axios.get(url + "person")
        return response.data.profile
    } catch (err) {
        console.log(err.message)
    }
}

export const getMatches = async () => {
    try {
        const response = await axios.get(url + "matches")
        console.log(response.data)
        return response.data
    } catch (err) {
        console.log(err.message)
    }
}

export const choosePerson = async (id, escolha) => {
    const body = {
        "id": id,
        "choice": escolha
    }
    try {
        const response = await axios.get(url + "choose-person", body)
        console.log(response.data)
        return response.data
    } catch (err) {
        console.log(err.response.data)
    }
}

export const clear = async () => {
    try {
        const response = await axios.put(url + "clear")
        console.log(response.data)
        return response.data
    } catch (err) {
        console.log(err.response.data)
    }
}