const axios = require("axios");

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJmYXRpbWFrYXNoaWZhMDRAZ21haWwuY29tIiwiZXhwIjoxNzgwODk2NTEyLCJpYXQiOjE3ODA4OTU2MTIsImlzcyI6IkFmZm9yZCBNZWRpY2FsIFRlY2hub2xvZ2llcyBQcml2YXRlIExpbWl0ZWQiLCJqdGkiOiJhODFiM2YzZS0yNWM5LTQ5MmEtODZkNy0zMjA0MDAzMzdiZjQiLCJsb2NhbGUiOiJlbi1JTiIsIm5hbWUiOiJrYXNoaWZhIGZhdGltYSIsInN1YiI6ImMwYmIxYzhlLTAwYzctNDViNy05YzYzLTg3YjE4MTE0NWMwOSJ9LCJlbWFpbCI6ImZhdGltYWthc2hpZmEwNEBnbWFpbC5jb20iLCJuYW1lIjoia2FzaGlmYSBmYXRpbWEiLCJyb2xsTm8iOiIzMDMzMTEzMjMwMzIiLCJhY2Nlc3NDb2RlIjoiYUdCVEpaIiwiY2xpZW50SUQiOiJjMGJiMWM4ZS0wMGM3LTQ1YjctOWM2My04N2IxODExNDVjMDkiLCJjbGllbnRTZWNyZXQiOiJhZHlCQURTR1Boc3R0bWRBIn0.OKiBYzRxoiu_h3VuP48fUptYT9RuTjKr8vGpVNHU-as";

async function fetchNotifications() {
    try {

        const response = await axios.get(
            "http://4.224.186.213/evaluation-service/notifications",
            {
                headers: {
                    Authorization: `Bearer ${TOKEN}`
                }
            }
        );

        console.log(response.data);

    } catch (error) {

        console.log("Status:", error.response?.status);
        console.log("Data:", error.response?.data);

    }
}

fetchNotifications();
