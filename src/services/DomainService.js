import api from '../services/api.js'; 

const serviceDomain = (domain) => {
    const result = api(domain)

    return result.then(console.log)
}

export default serviceDomain;