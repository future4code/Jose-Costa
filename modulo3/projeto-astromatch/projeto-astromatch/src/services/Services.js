import axios from "axios";

export const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:jose-rodolfo/"

export const getProfileToChoose = async () => {
    try {
        const response = await axios.get(url + "person")
        return response.data.profile
    } catch (err) {
        console.log(err)
    }
}

export const getMatches = async () => {
    try {
        const response = await axios.get(url + "matches")
        return response.data
    } catch (err) {
        console.log(err)
    }
}

export const choosePerson = async (id, escolha) => {
    const body = {
        id: id,
        choice: escolha
    }
    try {
        const response = await axios.post(url + "choose-person", body)
        return response.data
    } catch (err) {
        console.log(err)
    }
}

export const clearMatches = async () => {
    try {
        const response = await axios.put(url + "clear")
        console.log(response.data)
        return response.data
    } catch (err) {
        console.log(err)
    }
}