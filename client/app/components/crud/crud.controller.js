
import * as firebase from "firebase";
var config = {
    apiKey: "AIzaSyCjhEN9yHOBDoNhM2M8aBFTSVcT87MqE5M",
    authDomain: "myfirstfirebaseapp-fa781.firebaseapp.com",
    databaseURL: "https://myfirstfirebaseapp-fa781.firebaseio.com",
    storageBucket: "myfirstfirebaseapp-fa781.appspot.com",
    messagingSenderId: "1005784677268"
  };
  firebase.initializeApp(config);

class crudController {
  constructor($firebaseObject) {"ngInject";
    const ref = firebase.database().ref();
    let vm = this;
    vm.name = `Data about students`;
    vm.data = $firebaseObject(ref);
    let arr = [];
    let arrIndex;
    vm.displayData = false;
	    
	
    vm.data.$loaded().then(() => {
	    ref.on('value', snap =>  {
	      	for (let keys in snap.val())  {
	       		arr.push(snap.val()[keys]);
	        //alert(snap.val()[keys].id);
	        }
	    });
	    vm.array = arr;
	});

    vm.addNewStudent = function() {
    	vm.array.push({id: `${vm.idStudent}`, name: `${vm.nameStudent}`, surname: `${vm.surnameStudent}`, age: `${vm.ageStudent}`});
    	vm.idStudent = vm.nameStudent = vm.surnameStudent = vm.ageStudent = ``;
  	};

  	vm.editStudent = function(index) {		
  		
  		arrIndex = index;

  		vm.idEdit = vm.array[index].id;
  		vm.nameEdit = vm.array[index].name;
  		vm.surnameEdit = vm.array[index].surname;
  		vm.ageEdit = vm.array[index].age;

  		vm.displayEditFunc();
  	};

  	vm.displayEditFunc = function() {

  		if(vm.displayData) vm.displayData = false;
  		else vm.displayData = true;
  	};
    
    vm.editStudentsData = function() {
    	vm.array[arrIndex].id = vm.idEdit;
  		vm.array[arrIndex].name = vm.nameEdit;
  		vm.array[arrIndex].surname = vm.surnameEdit;
  		vm.array[arrIndex].age = vm.ageEdit;

  		vm.idEdit = vm.nameEdit = vm.surnameEdit = vm.ageEdit = ``;
  		vm.displayEditFunc();
    };

    vm.deleteStudentsData = function(index) {
    	vm.array.splice(index,1);
    };

     

  }
}
export default crudController;
