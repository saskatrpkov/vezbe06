//Primitivni tipovi

let godine:number=25;
let ime:string="Saska";
let studira:boolean=true;

//Nizovi

let predmeti:string[]=["EPOS","Klijentske","CLOUD"];
let ocene:number[]=[10,8,9];

//Tuples
let tuple:[string,number]=["Saska",25];

//Enum

enum Modul{
    TehnologijeElektronskogPoslovanja,
    SoftverskoInzenjerstvo,
    InformacioniSistemi
}

let modul:Modul=Modul.TehnologijeElektronskogPoslovanja;

//Objekat

let student:{ime:string,godine:number,studira:boolean}={
    ime:"Danica",
    godine:24,
    studira:true
};


//Unija tipova


let brojIliString:number | string=10;


//Any tip

let biloSta:any="Moze bilo koji tip";

//void

function cao():void{
    console.log("cao");
}

// null undefined

let n:null=null;
let u:undefined=undefined;


let nekaVrednost:any="Neki string";
let duzinaStringa:number=(nekaVrednost as String).length;

console.log(godine,ime,studira);
console.log(predmeti,ocene);
console.log(tuple);
console.log(modul);
console.log(student);
console.log(brojIliString);
console.log(biloSta);
console.log(n,u);
console.log(duzinaStringa);


