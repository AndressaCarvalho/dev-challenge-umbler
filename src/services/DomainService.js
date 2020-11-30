import viewDomain from '../database/operations/View.js';

const serviceDomain = (domain) => {
    const view = viewDomain(domain)

    return view.then(console.log)
}

export default serviceDomain;