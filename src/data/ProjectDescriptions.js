import * as routes from '../router/routes.js'

export const titles = {
  fibco: 'FIBCO',
  synth: 'Synth',
  portfolio: 'Personal Portfolio Website',
  canchalibre: 'Cancha Libre'
}

export const projectDescriptions = {
  getProjectByTitle (title) {
    return this.projects.find(project => project.title === title)
  },
  projects: [
    {
      header: 'School Projects'
    },
    {
      title: titles.fibco,
      subtitle: 'A Blockchain based flight delay compensation system',
      icon: 'flight_takeoff',
      github: 'https://github.com/mandresbr/fibco',
      to: {name: routes.PROJECT_DESCRIPTION, params: { project: titles.fibco }},
      about:
        `
        A flight delay compensation system which is unhackable or which cannot be tampered. Using blockchain based distributed networks to store and record policies which makes the process of compensation to be almost 99.9% secure as it is distributed among a cluster of networks and requires computing power of over 500 supercomputers to even get hold of the network which is currently impossible to achieve. In this work, a decentralized application based on Blockchain will be built with Ethereum's smart contracts to make up passengers in case of flight delays in the Colombian aviation context. The system has a user friendly interface where travelers can search their flight and pay for the policy that will compensate in case of the delay.


        A descentralized application (dapp) for compensating passengers when a flight delay happens. This is all based 
        on Blockchain technology. <a href="fibco.netlify.com">FIBCO</a>, the flight delay compensation 
        system, is build on top of the Ethereum virtual machine (EVM) and it uses truffle framework 
        for managing the smart contracts. The frontend of the dapp is built using VueJS and Vuetify.`
    },
    {
      title: titles.canchalibre,
      subtitle: 'Spring MVC Web Application for soccer fields reservations',
      icon: 'import_contacts',
      github: 'https://github.com/mandresbr/canchalibre',
      to: {name: routes.PROJECT_DESCRIPTION, params: { project: titles.canchalibre }},
      about:
        `
        A Spring MVC Web Application that supports customer reservations of soccer fields
        in the city of Cali. There were two main profiles, the basic user of the system and
        owners of fields that wanted to subscribe their fields to the App. Users were able to
        reserve a field with specific time and hour and also with a custom price.
        `
    },
    {
      title: titles.synth,
      subtitle: 'A Web Audio API Synthesizer using Nexus UI',
      icon: 'fa-music',
      github: 'https://github.com/mandresbr/PUJSynth',
      to: {name: routes.PROJECT_DESCRIPTION, params: { project: titles.synth }},
      about:
      `
      A Web Audio API Synthesizer using Nexus UI. This Synth was built on top of Web Audio API
      and Nexus UI, that is a Javascript toolkit for creating musical interfaces on the web. 
      
      `,
      gallery: '/static/synth.png'
    },
    {
      header: 'Personal Projects/Contributions'
    },
    {
      title: titles.portfolio,
      subtitle: 'The site you\'re viewing right now! Made with <strong>Vue.js</strong> and <strong>Vuetify</strong>',
      icon: 'fa-user',
      github: 'https://github.com/TrevRawr/Personal-Portfolio-Website/',
      to: {name: routes.PROJECT_DESCRIPTION, params: { project: titles.portfolio }},
      about:
        `This personal portfolio is built with VueJS, Router and Vuetify. The goal here with
        this website was not only to present myself to the world, but also to learn to code with
        a progressive Javascript framework like Vue.`
    }
  ]
}
