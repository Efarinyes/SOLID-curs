// import axios from 'axios'; Ja no usem la llibreria axios

export class HttpClient {

    // Codi funcional amb la llibreria axios instalada

    /* async get(url: string ) {
        const { data, status } = await axios.get(url)
        console.log({ status})
        return { data, status }
    } */

    async get(url: string) {

        const resp = await fetch(url)
        const data = await resp.json();


        return { data, status: resp.status }
    }
}