export const transformDate = (data: string): Date | boolean => {
    const dateEntered: string[] = data.split("-");
    const defaultDate = new Date(dateEntered.join("/"));
    if ((defaultDate.getMonth() + 1 === Number(dateEntered[1])) && (defaultDate.getDate() === Number(dateEntered[2])) && (defaultDate.getFullYear() === Number(dateEntered[0]))) {
        return defaultDate;
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

export const compareDates = (payday: string): any => {
    const newPayDay = transformDate(payday);
    if (!newPayDay) {
        return { payday: "false" };
    } else {
        if (typeof newPayDay === "object") {
            const dateDifferences = (new Date().getTime() - newPayDay.getTime()) * 1.1574e-8;
            if (dateDifferences < 1) {
                return { date: newPayDay }
            }
            else {
                return { date: "Invalid Date" };
            }
        }
    }
}