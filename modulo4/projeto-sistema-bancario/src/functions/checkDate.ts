const transformDate = (data: string): Date | boolean => {
    if (data.length === 10) {
        const dateEntered: string[] = data.split(`/`);
        const checkIndividualDate: boolean = !isNaN(Number(dateEntered[2])) && !isNaN(Number(dateEntered[1])) && !isNaN(Number(dateEntered[0]));
        const checkDateCharacters: boolean = dateEntered[0].length === 2 && dateEntered[1].length === 2 && dateEntered[2].length === 4;
        const checkMaxDate: boolean = Number(dateEntered[0]) <= 31 && Number(dateEntered[1]) <= 12 && Number(dateEntered[2]) <= new Date().getFullYear();
        if (checkIndividualDate && checkDateCharacters && checkMaxDate) {
            const newDate: string = `${dateEntered[2]}/${dateEntered[1]}/${dateEntered[0]}`
            return new Date(newDate);
        } else {
            return false;
        }
    } else {
        return false;
    }
}

export const checkAge = (birthDate: string): any => {
    let newBirthdate: Date | boolean = transformDate(birthDate);
    if (!newBirthdate) {
        return false;
    } else {
        if (typeof newBirthdate === "object") {
            const currentDate = new Date();
            const age: number = Number(((currentDate.getTime() - newBirthdate.getTime()) / 31536000000).toFixed(0));
            if (age > 18) {
                return { age, birthDate: newBirthdate }
            } else {
                return false;
            }
        } 
    }
}