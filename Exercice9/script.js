function checkAge(age) {

    switch (true) {
        case age < 18:
            return 'Vous êtes mineur.';
        case age < 65:
            return 'Vous êtes majeur.';
            case age >= 65:
                return 'Vous êtes senior.';
        default:
            return 'Erreur de donnée';
    }
        
}
export default checkAge;
