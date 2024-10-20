const obj = {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    password: '123456',
    address:{
        street: 'Street 8',
        city: 'City 1',
        state: 'State 1',
        zip: 'Zip 2',
        countryStates: {
            name: "Bangladesh",
            continent: "Asia",
            region: "South Asia"

        }
    }
}
const {name, password, address:{city, zip, countryStates: {continent, region}}} = obj // when destructuring an obj we can easily take the parameters from the object, we can go inside a nested object and can call the nested property with : and his parent name.

console.log(name, password, city, zip, continent, region )