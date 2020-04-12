     function validaFechaMenor(campo){
        var bRet = false;
        var dHoy = new Date();
        var dCapt = null;
        if (campo.value == "")
          alert("Faltan datos");
        else{
          dCapt = validaFecha(campo.value);
          if (dCapt != null && dCapt < dHoy)
            bRet = true;
          else
            alert("La fecha debe ser menor a la fecha actual");
        }
        return bRet;
      }

        function validaFecha(valor){
        		var dConvertida = null;
        		var sAnio = "";
        		var sMes = "";
        		var sDia = "";
        		var nAnio=0, nMes=0, nDia = 0;

        		if (valor.match(/^\d{2}\/\d{2}\/\d{4}$/)){
        			nDia = parseInt(valor.substring(0,2), 10);
        			nMes = parseInt(valor.substring(3,5), 10);
        			nAnio = parseInt(valor.substring(6,10), 10);

        			if (nDia <1 || nDia>31)
        				alert("El día no es válido")
        			else{
        				if (nMes <1 || nMes>12)
        					alert("El mes no es válido");
        				else{
        					if ((nMes==1 || nMes==3 || nMes==5 || nMes==7 ||
        						 nMes==8 || nMes==10 || nMes==12) && nDia > 31)
        						 alert("El mes tiene máximo 31 días");
        					else if ((nMes==4 || nMes==6 || nMes==9 ||
        								nMes==11) && nDia > 30)
        						 alert("El mes tiene máximo 30 días");
        					else if ((nMes==2) && ((nDia>29) || (nAnio%4!=0 && nDia>28)))
        						 alert("Febrero tiene 28 días o 29 en bisiesto");
        					else{
        						dConvertida = new Date();
        						dConvertida.setFullYear(nAnio, nMes-1, nDia);
        					}//fin validaci�n día-mes
        				}//mes válido
        			}//día válido
              creasigno(nDia,nMes);
        		}//formato válido

        		else{
        			alert("No tiene formato de fecha");
        		}
        		return dConvertida;
        }
        function creasigno(nDia,nMes){

        var newDiv = document.createElement("div");
         var color;
        if((nDia>20) && (nMes==3) || (nDia <=20) && (nMes==4)){
        var newContent = document.createTextNode("SIGNO ARIES \n Números de la suerte: 11, 24 y 60");  
            color="rgb(253,158,0)";
        }
        else if ((nDia>20) && (nMes==4) || (nDia <=20) && (nMes==5)){
              var newContent = document.createTextNode("SIGNO TAURO \n Números de la suerte: 21, 40 y 35");  
            color="rgb(254,245,0)";
           
            }
          
          else if ((nDia>20) && (nMes==5) || (nDia <=20) && (nMes==6)){
            var newContent = document.createTextNode("SIGNO GEMINIS  \n Números de la suerte: 19, 33 y 67");   
           color="rgb(18,212,0)";    
          }
           
            else if ((nDia>20) && (nMes==6) || (nDia <=22) && (nMes==7)){
              var newContent = document.createTextNode("SIGNO CANCER  \n Números de la suerte: 22, 9 y 45");
                color="rgb(0,213,195)";
   
            }
            else if ((nDia>22) && (nMes==7) || (nDia <=23) && (nMes==8)){
                var newContent = document.createTextNode("SIGNO LEO  \n Números de la suerte: 13, 34 y 78");
                color="rgb(0,125,213)";
            }
                else if ((nDia>23) && (nMes==8) || (nDia <=22) && (nMes==9))
                    {
                        var newContent = document.createTextNode("SIGNO VIRGO  \n Números de la suerte: 13, 44 y 09");
                        color= "rgb(0,18,213)";
                    }
                  
                  else if ((nDia>22) && (nMes==9) || (nDia <=22) && (nMes==10)){
                      var newContent = document.createTextNode("SIGNO LIBRA  \n Números de la suerte: 19, 70 y 21");
                     color="rgb(89,0,213)";
                  }
                    
                    else if ((nDia>22) && (nMes==10) || (nDia <=22) && (nMes==11)){
                        var newContent = document.createTextNode("SIGNO ESCORPIO  \n Números de la suerte: 10, 77 y 21");
                       color="rgb(185,0,25)"
                    }
                      
                      else if ((nDia>22) && (nMes==11) || (nDia <=21) && (nMes==12)){
                          var newContent = document.createTextNode("SIGNO SAGITARIO  \n Números de la suerte: 29, 69 y 18");
                          color="rgb(213,0,168)";
                      }
                        
                        else if ((nDia>21) && (nMes==12) || (nDia <=21) && (nMes==1)){
                            var newContent = document.createTextNode("SIGNO CAPRICORNIO  \n Números de la suerte: 12, 67 y 14"); 
                            color="rgb(213,0,62)";
                        }
                          
                          else if ((nDia>21) && (nMes==1) || (nDia <=21) && (nMes==2))
                              {
                                 var newContent = document.createTextNode("SIGNO ACUARIO  \n Números de la suerte: 07, 55 y 39"); 
                                  color="rgb(213,45,0)";
                              }
                            else if ((nDia>22) && (nMes==21) || (nDia <=23) && (nMes==3))
                                {
                                     var newContent = document.createTextNode("SIGNO PICIS  \n Números de la suerte: 25, 87 y 56");
                                    color="rgb(213,151,0)";
                                }
                             

    

        //var newContent = document.createTextNode("SIGNO");
        newDiv.appendChild(newContent); //añade texto al div creado.

         // añade el elemento creado y su contenido al DOM
         var currentDiv = document.getElementById("div");
         document.body.insertBefore(newDiv, currentDiv);
        newDiv.style="border: 3px solid #999999; background-color:"+color+"; width: 200px;  margin-left:5%; padding:1px 16px; height:300px; ";
}