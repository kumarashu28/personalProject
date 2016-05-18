import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';



Template.login.events({
  'click button'(event, instance) {

 var x=document.getElementById('u').value;
	var y=  document.getElementById('p').value;
	  if((x=="cdac")&&(y=="cdac"))
	  {
			alert("User authenticated");
		  Meteor.Router.to('/home');
	  }
	  else
	  {
		  alert("Not authenticated");
	  }
	 
	 var msg =  document.getElementById("cmm").value;
     document.getElementById('d').innerHTML = msg;
	  
  },
});
