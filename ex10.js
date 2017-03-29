/*

    getPerson

    Ecrire une fonction "getPerson", prenant en paramètre:

    "firstName": pour le prénom ("toto"),
    "lastName": pour le nom de famille ("tata"),
    "age": pour l'age (45)

    Nous attendons un objet comme valeur de retour.

    Cet objet contiendra:

        - un attribut "fullName" pour le prénom et le nom ensemble "toto tata"
        - un attribut "age" pour l'age de la personne
        - une fonction "isAdult" pour tester si la personne est majeur;

*/
function getPerson() {
    var person = {firstName:"toto", lastName:"tata", age:"45"}
    var fullName = (firstName + lastName);
    //function(name){return this.firstName + " " + this.lastName}
    return person;

}
console.log(getPerson());
