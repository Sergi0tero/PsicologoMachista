var app = function(){

    var bien = ["amor", "alegria", "generosidad", "gozo", "afecto", "jubilo", "compasion", "esperanza", "libertad", "logro", "justicia", "agradecimiento", "aceptacion", "acompañamiento", "bondad"
        , "admiracion", "apreciacion", "benevolencia","amabiidad","alivio","ogullo","empatia","integridad","apego","aprobacion","suficiencia","armonia","honestidad","humildad","concentracion","templanza"
        ,"tolerancia","motivacion","felicidad","firmeza","fortaleza","autonomia","honorabilidad","optimismo","satisfaccion","seguridad","simpatia","cariño","estima","comprension","entusiasmo","solidaridad"
        ,"respeto","pasion","paz","placer","compromiso","fervor","competencia","plenitud","omnipotencia","encanto","euforia","extasis","ilusion","interes","confianza","cuidado","apoyo","contento","dignidad"
        ,"energico","alborozo","vitalidad","complacencia","bien","feliz","contento","alegre"];

    var mal = ["necesidad","tristeza","melancolía","abandono","aburrimiento","abuso","ausencia","desmotivación","asustado","amargura","angustia","agresión","agobio"
        ,"ansiedad","asco","vacilación","valentía","vastidio","venganza","vergüenza","vacío","hastió","hostilidad","humillación","temor","terquedad","terror","traición",
        "lastima","manipulación","menosprecio","mezquindad","miedo","molestia","fasticio","fobia","fracaso","fragilidad","frustración","furia","soledad","rencor","rabia","recelo","panuco","imperturbabilidad","parálisis","pavor","preocupación"
        ,"prepotencia","pudor","pesprotección","pesimismo","incongruencia","pena","pereza","pesadumbre","odio","enfado","engaño","estrés","duelo","enjuiciamiento","enojo","envidia","ofendido"
        ,"espanto","entristecimiento","estupor","impaciencia","desconfianza","impotencia","desconcierto","incapacidad","incompatibilidad","incomprensión","desventura","indignación","inestabilidad","infelicidad","inferioridad","injusticia"
        ,"destrucción","desamor","insatisfacción","inseguridad","insuficiencia","intolerancia","ira","irritación","celos","culpa","censura","cólera","contrariedad","dependencia","depresión","derrota"
        ,"desaliento","desamparo","desánimo","desasosiego","desconsideración","abatimiento","desconsuelo","desdicha","resquemor","desencanto","desesperación","desgano","desilusión","desolación","petrificación","desorientación"
        ,"desprecio","hambruna","desprestigio","desvalimiento","devaluación","dolor","disgusto","lástima","desidia","disforia","exasperación","remordimiento","agravio","obnubilación","aflicción","decepción","mal","depresivo","triste","agobiado"
        ,"deseperado","engañado","apagado","cansado","atiborrado","agotado","hambriento","sediento","confundido"];

    var neutro = ["nostalgia","añoranza","lujuria","unidad","atracción","alarma","asombro","valentía", "alteración","soberbia","vulnerabilidad","valoración","tentación","paciencia","sorpresa","ambivalencia","ternura","deseo","timidez","tranquilidad","arrepentimiento","paranoia","turbación","frenesí"
        ,"confusión","serenidad","sometimiento","sumisión","sosiego","rebeldía","rechazo","pertenencia","compromiso","dicha","repudio","resentimiento","reserva","persecución","obligación","ostentación"
        ,"excitación","dominación","extrañeza","inconformidad","incredulidad","resignación","indiferencia","intrepidez","intriga","invasión","impulsivo","calma","consuelo","inquietud","correspondencia","curiosidad"
        ,"cercanía","congoja","duda","desdén","regocijo","exaltación","codescendencia","ecuanimidad","apatía","inspiración","seriedad","trance","obstinación","arrojo","normal"];

    var forms = ["formGenero", "formSentimientoGeneral", "formSentimientoEspecifico", "formRespuesta"];
    var actualForm = document.getElementById(forms.shift());
    nextForm = function(){
      actualForm.style.display = "none";
      actualForm = document.getElementById(forms.shift());
      actualForm.style.display = "block";
      if (forms.length == 0){
        elegirRespuesta();
      }
    }

    var generoElegido;
    var submitGenero = document.getElementById("submit-genero");
    submitGenero.addEventListener("click", function(){
        var gender = document.getElementsByName('gender');            
            for(i = 0; i < gender.length; i++) {
                if(gender[i].checked){
                  nextForm();
                  generoElegido = gender[i].value;
                }
            } 
    })

    var sentimientoGeneral;
    var submitSentimientoGeneral = document.getElementById("submit-sentimientoGeneral");
    // console.log(submitSentimientoGeneral)
    submitSentimientoGeneral.addEventListener("click", function(){
        var generalFeeling = document.getElementsByName('generalFeeling');            
            for(i = 0; i < generalFeeling.length; i++) {
                if(generalFeeling[i].checked){
                  nextForm();
                  sentimientoGeneral = generalFeeling[i].value;
                  createComboBox(sentimientoGeneral);
                }
            } 
    })

    var sentimientoEspecifico;
    var submitSentimientoEspecifico = document.getElementById("submit-sentimientoEspecifico");
    // console.log(submitSentimientoEspecifico)
    submitSentimientoEspecifico.addEventListener("click", function(){
      var specificFeeling = document.getElementsByName('feelingsComboBox');
      nextForm();
      sentimientoEspecifico = specificFeeling.value;
    })

    createComboBox = function(sentimiento){
      var comboBox = document.getElementById("feelingsComboBox");
      if (sentimiento == "bien"){
        bien.forEach(element => {
          var newOption = document.createElement('option');
          newOption.value = "feelings";
          newOption.textContent = element;
          comboBox.appendChild(newOption);
        });
      } else if (sentimiento == "mal"){
        mal.forEach(element => {
          var newOption = document.createElement('option');
          newOption.value = "feelings";
          newOption.textContent = element;
          comboBox.appendChild(newOption);
        });
      } else{
        neutro.forEach(element => {
          var newOption = document.createElement('option');
          newOption.value = "feelings";
          newOption.textContent = element;
          comboBox.appendChild(newOption);
        });
      }
    }

    desplegarRespuesta = function(respuesta){
      var respuestaForm = document.getElementById("formRespuesta");
      var newH3 = document.createElement("h3");
      newH3.textContent = respuesta;
      respuestaForm.appendChild(newH3);
    }

    elegirRespuesta = function(){
      var val = Math.floor(Math.random() * 20);
      console.log(sentimientoGeneral);
      if (sentimientoGeneral == "bien"){
          desplegarRespuesta("Que bueno! Me alegro!");
      }else if(sentimientoGeneral == "neutro"){
          desplegarRespuesta("Podria ser peor");
      }else{
        if (generoElegido == "hombre") {
          if (val === 1) {
            desplegarRespuesta("Madure");
          }

          if (val === 2) {
            desplegarRespuesta("Deje de chillar y sea hombre");
          }

          if (val === 3) {
            desplegarRespuesta("No sea loca");
          }

          if (val === 4) {
            desplegarRespuesta("Que delicado para ser hombre");
          }

          if (val === 5) {
            desplegarRespuesta("Sea hombre y listo");
          }

          if (val === 6) {
            desplegarRespuesta("No llore tanto");
          }

          if (val === 7) {
            desplegarRespuesta("Ese se su problema, no fastidie");
          }

          if (val === 8) {
            desplegarRespuesta("Guardeselo y deje de ser tan nena");
          }

          if (val === 9) {
            desplegarRespuesta("Aguantese y listo");
          }

          if (val === 10) {
            desplegarRespuesta("Y a mi que me importa?");
          }

          if (val === 11) {
            desplegarRespuesta("Pues chupe y aguante");
          }

          if (val === 12) {
            desplegarRespuesta("Guardese sus problemas y madure");
          }

          if (val === 13) {
            desplegarRespuesta("Severa flor, deje de chillar");
          }

          if (val === 14) {
            desplegarRespuesta("Y eso que me importa?");
          }

          if (val === 15) {
            desplegarRespuesta("Bueno, y eso que me importa?");
          }

          if (val === 16) {
            desplegarRespuesta("Y si mejor se calla?");
          }

          if (val === 17) {
            desplegarRespuesta("Y eso en que me incumbe?");
          }

          if (val === 18) {
            desplegarRespuesta("Solucionelo usted solo y no me joda");
          }

          if (val === 19) {
            desplegarRespuesta("Que flor mas delicada, madure");
          }

          if (val === 20) {
            desplegarRespuesta("No me importa");
          }
        }

        else{
          if (val === 1) {
            desplegarRespuesta("Y si vas a terapia mejor?");
          }

          if (val === 2) {
            desplegarRespuesta("Has buscado alguien con quien hablarlo?");
          }

          if (val === 3) {
            desplegarRespuesta("Es terrible escuchar eso");
          }

          if (val === 4) {
            desplegarRespuesta("Que terrible noticia");
          }

          if (val === 5) {
            desplegarRespuesta("Lamento escuchar eso");
          }

          if (val === 6) {
            desplegarRespuesta("Y has hablado con alguien al respecto?");
          }

          if (val === 7) {
            desplegarRespuesta("Que cosa tan fea eso");
          }

          if (val === 8) {
            desplegarRespuesta("Que vaina");
          }

          if (val === 9) {
            desplegarRespuesta("Deberias hablarlo con alguien");
          }

          if (val === 10) {
            desplegarRespuesta("Que mala noticia escuchar eso");
          }

          if (val === 11) {
            desplegarRespuesta("Que cosa tan mala escuchar eso");
          }

          if (val === 12) {
            desplegarRespuesta("Y si hablas con alguien al respecto");
          }

          if (val === 13) {
            desplegarRespuesta("Deberias comentarselo a alguien");
          }

          if (val === 14) {
            desplegarRespuesta("Se fuerte que tu puedes");
          }

          if (val === 15) {
            desplegarRespuesta("Dale que tu puedes con toda");
          }

          if (val === 16) {
            desplegarRespuesta("Con toda a darle pues");
          }

          if (val === 17) {
            desplegarRespuesta("Espero que mejores");
          }

          if (val === 18) {
            desplegarRespuesta("Mejorate pronto");
          }

          if (val === 19) {
            desplegarRespuesta("Que cosas no?");
          }

          if (val === 20) {
            desplegarRespuesta("Terrible que estes asi");
          }
        }
      }
    }

}()
