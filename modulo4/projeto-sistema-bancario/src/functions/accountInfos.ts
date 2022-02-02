import data from "../data/data.json";
import { Account, BankStat } from "./types";
const fs = require("fs");

export const verifyAccount = (cpf: string, name: string): boolean => {
    let result: boolean = false;
    for (let i = 0; i < data.length; i++) {
        if (data[i].cpf === cpf && data[i].name === name) {
            result = true;
        }
    }
    return result;
}

export const getAccountInfo = (cpf: string): Account | undefined => {
    let result;
    const newData: Account[] = data;
    for (let i = 0; i < newData.length; i++) {
        if (newData[i].cpf === cpf) {
               result = newData[i];
        }
    }
    fs.writeFileSync('src/data/data.json', JSON.stringify(newData, null, '\t'));
    return result;
}

export const updateAccount = (cpf: string): Account | undefined => {
    let result;
    let total = 0;
    const newData: Account[] = data;
    for (let i = 0; i < newData.length; i++) {
        if (newData[i].cpf === cpf) {
            for (let j = 0; j < newData[i].bankStatement.length; j++) {
                if ((new Date().getTime() - new Date(newData[i].bankStatement[j].date).getTime()) * 1.1574e-8 > 0) {
                    total = total + newData[i].bankStatement[j].value;
                }
            }
            newData[i].accountBalance = total;
            result = newData[i];
        }
    }
    fs.writeFileSync('src/data/data.json', JSON.stringify(newData, null, '\t'));
    return result;
}

export const addBankStat = (cpf: string, value: number, dateParams: Date, desc: string): void => {
    const bankStat: BankStat = { value: value, date: dateParams, desc: desc }
    const newData: Account[] = data;
    for (let i = 0; i < newData.length; i++) {
        if (newData[i].cpf === cpf) {
            newData[i].bankStatement.push(bankStat);
        }
    }
    fs.writeFileSync('src/data/data.json', JSON.stringify(newData, null, '\t'));
}

export const addBalance = (cpf: string, value: number) => {
    const newData: Account[] = data;
    let newAccountBallance;
    for (let i = 0; i < newData.length; i++) {
        if (newData[i].cpf === cpf) {
            newData[i].accountBalance = newData[i].accountBalance + value;
            newAccountBallance = newData[i].accountBalance
        }
    }
    fs.writeFileSync('src/data/data.json', JSON.stringify(newData, null, '\t'));
    return newAccountBallance;
}

export const remBalance = (cpf: string, value: number) => {
    const newData: Account[] = data;
    let newAccountBalance;
    for (let i = 0; i < newData.length; i++) {
        if (newData[i].cpf === cpf) {
            if (newData[i].accountBalance >= value) {
                newData[i].accountBalance = newData[i].accountBalance - value;
                newAccountBalance = newData[i].accountBalance;
            } else {
                newAccountBalance = false;
            }
        }
    }
    fs.writeFileSync('src/data/data.json', JSON.stringify(newData, null, '\t'));
    return newAccountBalance;
}