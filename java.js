class utente {
    
    constructor(_firstName, _lastName, _age, _location) {
     
      this.firstName = _firstName
      this.lastName = _lastName
      this._age = _age
      this._location = _location
    }
    SiamoUguali(confronto) {
        if (this._age > confronto._age) {
          console.log(`${this.firstName} è più vecchio di ${confronto.firstName}.`);
        } else if (this._age < confronto._age) {
          console.log(`${this.firstName} è più giovane di ${confronto.firstName}.`);
        } else {
          console.log(`${this.firstName} e ${confronto.firstName} hanno la stessa età.`);
        }
      }
    }

const daniel = new utente(
    'Daniel',
'Indrieri',
23,
'Rossano'
)
console.log(daniel)

const marco= new utente (
    'Marco',
    'Buglione',
    23,
    'San Giovanni'
)
console.log(marco)

daniel.SiamoUguali(marco)



const listaPets = [];
class Pet{  
    constructor( _petName,_ownerName,_species,_breed) {
    
        this.petName = _petName
        this.ownerName = _ownerName
        this.species = _species
        this.breed = _breed 
    }
    SameOwner(pet){
        return this.ownerName === pet.ownerName
    }
    }

    const Namepet = document.getElementById('cucciolo')
const Ownerpet = document.getElementById('Padrone')
const Speciepet = document.getElementById('specie')
const Razza = document.getElementById('breed')

const myForm = document.getElementById('PetForm')


    myForm.addEventListener('submit',function(e){
        e.preventDefault()
        const Cliente = new Pet (
            Namepet.value, 
            Ownerpet.value, 
            Speciepet.value, 
            Razza.value  
        )
        
    })
 