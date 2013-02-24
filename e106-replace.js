console.log('hola que tal'.replace(/la/, 'LA'));
console.log('hola que tal'.replace(/[la]{2}/, 'XX'));
console.log('hola que tal'.replace(/[la]{2}/g, 'XX'));
console.log('hola que tal'.replace(/(al|la)/g, '$1'));
console.log('hola que tal'.replace(/(al)|(la)/g, '$1'));

