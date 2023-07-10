function insert(num) {

			document.form.textView.value = 	document.form.textView.value+num
		}



		function c (){
					document.form.textView.value = '';
		}

		function d (){




					var s = document.form.textView.value;
							document.form.textView.value = s.substring(0, s.length-1);

		}

		function e (){

			var m = document.form.textView.value;
			if( m == '' ){
				alert('Hatama Uluk Lai Numero!')
			} else{

					
					document.form.textView.value = eval(m);

			}

			}