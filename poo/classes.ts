abstract class Animal {
	protected _name: string;
	protected _yearMaxLife: number;

	constructor(theName: string, theYearMaxLife: number) {
		this._name = theName;
		this._yearMaxLife = theYearMaxLife
	}

	abstract movewalksAshore(): void

	yearLive() {
		console.log(`${this._name} tem um tempo de vida de ${this._yearMaxLife} anos aproximadamente`)
	}

	abstract getName(): void

	setName(name: string) {
		this._name = name;
	}

}

class Dog extends Animal {
	protected porte: string;
	constructor(_name: string, _yearMaxLife: number, porte: string) { 
		super(_name, _yearMaxLife); 
		this.porte = porte;
	}

	movewalksAshore(distanceInMeters: number = 5) {
		console.log(`${this._name} move-se ${distanceInMeters}m por dia em terra.`);
	}

	getName() {
		console.log(`Nome do cachorro: ${this._name}`);
	}

	getPorte() {
		console.log(`Porte do cachorro: ${this.porte}`);
	}
	
	setPorte(porte: string) {
		this.porte = porte;
	}
}

let dog = new Dog("Snoopy", 15, "Medio");
dog.getName();
dog.getPorte();
dog.movewalksAshore(1000);
dog.yearLive();
console.log(dog);

dog.setName("Pitoco");
dog.getName();
dog.setPorte("Grande");
dog.getPorte();
console.log(dog);
