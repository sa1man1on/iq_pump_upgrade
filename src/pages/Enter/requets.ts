// const data = {account: account};
// const response = await axios.post('https://stt.market/api/notifications/check/', data);

// const data = { account: account };
// const response = await axios.post('https://stt.market/api/notifications/change/', data);

// const response = await axios.post('https://stt.market/api/notifications/create/', data);
// const data = { account: account };


import axios from "axios";


export async function getCodeFromTelegram(erc_address: string) {
    try {
        const data = {
            account: erc_address
        };

        const response = await axios.post('https://stt.market/api/notifications/create/', data);
        console.log(response.data); // ← response.data, чтобы увидеть тело ответа
        return response.data.code;
    } catch (error) {
        console.error('Ошибка запроса:', error);
    }
}
