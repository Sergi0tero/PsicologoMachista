var app = function(){
    bien = ["amor", "alegria", "generosidad", "gozo", "afecto", "jubilo", "compasion", "esperanza", "libertad", "logro", "justicia", "agradecimiento", "aceptacion", "acompañamiento", "bondad"
        , "admiracion", "apreciacion", "benevolencia","amabiidad","alivio","ogullo","empatia","integridad","apego","aprobacion","suficiencia","armonia","honestidad","humildad","concentracion","templanza"
        ,"tolerancia","motivacion","felicidad","firmeza","fortaleza","autonomia","honorabilidad","optimismo","satisfaccion","seguridad","simpatia","cariño","estima","comprension","entusiasmo","solidaridad"
        ,"respeto","pasion","paz","placer","compromiso","fervor","competencia","plenitud","omnipotencia","encanto","euforia","extasis","ilusion","interes","confianza","cuidado","apoyo","contento","dignidad"
        ,"energico","alborozo","vitalidad","complacencia","bien","feliz","contento","alegre"];

    mal = ["necesidad","tristeza","melancolía","abandono","aburrimiento","abuso","ausencia","desmotivación","asustado","amargura","angustia","agresión","agobio"
        ,"ansiedad","asco","vacilación","valentía","vastidio","venganza","vergüenza","vacío","hastió","hostilidad","humillación","temor","terquedad","terror","traición","lastima","manipulación","menosprecio","mezquindad","miedo"
        ,"molestia","fasticio","fobia","fracaso","fragilidad","frustración","furia","soledad","rencor","rabia","recelo","panuco","imperturbabilidad","parálisis","pavor","preocupación"
        ,"prepotencia","pudor","pesprotección","pesimismo","incongruencia","pena","pereza","pesadumbre","odio","enfado","engaño","estrés","duelo","enjuiciamiento","enojo","envidia","ofendido"
        ,"espanto","entristecimiento","estupor","impaciencia","desconfianza","impotencia","desconcierto","incapacidad","incompatibilidad","incomprensión","desventura","indignación","inestabilidad","infelicidad","inferioridad","injusticia"
        ,"destrucción","desamor","insatisfacción","inseguridad","insuficiencia","intolerancia","ira","irritación","celos","culpa","censura","cólera","contrariedad","dependencia","depresión","derrota"
        ,"desaliento","desamparo","desánimo","desasosiego","desconsideración","abatimiento","desconsuelo","desdicha","resquemor","desencanto","desesperación","desgano","desilusión","desolación","petrificación","desorientación"
        ,"desprecio","hambruna","desprestigio","desvalimiento","devaluación","dolor","disgusto","lástima","desidia","disforia","exasperación","remordimiento","agravio","obnubilación","aflicción","decepción","mal","depresivo","triste","agobiado"
        ,"deseperado","engañado","apagado","cansado","atiborrado","agotado","hambriento","sediento","confundido"];

    neutro = ["nostalgia","añoranza","lujuria","unidad","atracción","alarma","asombro","valentía", "alteración","soberbia","vulnerabilidad","valoración","tentación","paciencia","sorpresa","ambivalencia","ternura","deseo","timidez","tranquilidad","arrepentimiento","paranoia","turbación","frenesí"
        ,"confusión","serenidad","sometimiento","sumisión","sosiego","rebeldía","rechazo","pertenencia","compromiso","dicha","repudio","resentimiento","reserva","persecución","obligación","ostentación"
        ,"excitación","dominación","extrañeza","inconformidad","incredulidad","resignación","indiferencia","intrepidez","intriga","invasión","impulsivo","calma","consuelo","inquietud","correspondencia","curiosidad"
        ,"cercanía","congoja","duda","desdén","regocijo","exaltación","codescendencia","ecuanimidad","apatía","inspiración","seriedad","trance","obstinación","arrojo","normal"];

    submitGenero = document.getElementById("submit-genero");
    submitGenero.addEventListener("click", function(){
        var ele = document.getElementsByName('gender');            
            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked){
                    console.log(ele[i].value);
                }
            }
    })

    var _pj;

var edr;

function _pj_snippets(container) {
  function in_es6(left, right) {
    if (right instanceof Array || typeof right === "string") {
      return right.indexOf(left) > -1;
    } else {
      if (right instanceof Map || right instanceof Set || right instanceof WeakMap || right instanceof WeakSet) {
        return right.has(left);
      } else {
        return left in right;
      }
    }
  }

  container["in_es6"] = in_es6;
  return container;
}

var _pj = {};


while (cnt !== v52.length - 1) {
  if (_pj.in_es6(v52[cnt], dat)) {
    while (edr !== 1) {
      if (_pj.in_es6("Hombre" && "hombre", dat)) {
        if (val === 1) {
          console.log("Madure");
          edr = 1;
        }

        if (val === 2) {
          console.log("Deje de chillar y sea hombre");
          edr = 1;
        }

        if (val === 3) {
          console.log("No sea loca");
          edr = 1;
        }

        if (val === 4) {
          console.log("Que delicado para ser hombre");
          edr = 1;
        }

        if (val === 5) {
          console.log("Sea hombre y listo");
          edr = 1;
        }

        if (val === 6) {
          console.log("No llore tanto");
          edr = 1;
        }

        if (val === 7) {
          console.log("Ese se su problema, no fastidie");
          edr = 1;
        }

        if (val === 8) {
          console.log("Guardeselo y deje de ser tan nena");
          edr = 1;
        }

        if (val === 9) {
          console.log("Aguantese y listo");
          edr = 1;
        }

        if (val === 10) {
          console.log("\u00bfY a mi que me importa?");
          edr = 1;
        }

        if (val === 11) {
          console.log("Pues chupe y aguante");
          edr = 1;
        }

        if (val === 12) {
          console.log("Guardese sus problemas y madure");
          edr = 1;
        }

        if (val === 13) {
          console.log("Severa flor, deje de chillar");
          edr = 1;
        }

        if (val === 14) {
          console.log("\u00bfY eso que me importa?");
          edr = 1;
        }

        if (val === 15) {
          console.log("Bueno, \u00bfy eso que o que putas me importa?");
          edr = 1;
        }

        if (val === 16) {
          console.log("Y si mejor se calla chilletas");
          edr = 1;
        }

        if (val === 17) {
          console.log("\u00bfY eso en que me incumbe?");
          edr = 1;
        }

        if (val === 18) {
          console.log("Solucionelo usted solo y no me joda");
          edr = 1;
        }

        if (val === 19) {
          console.log("Que flor mas delicada, madure");
          edr = 1;
        }

        if (val === 20) {
          console.log("No me importa");
          edr = 1;
        }
      }

      if (_pj.in_es6("Mujer" && "mujer", dat)) {
        if (val === 1) {
          console.log("\u00bfY si vas a terapia mejor?");
          edr = 1;
        }

        if (val === 2) {
          console.log("\u00bfHas buscado alguien con quien hablarlo?");
          edr = 1;
        }

        if (val === 3) {
          console.log("Es terrible escuchar eso");
          edr = 1;
        }

        if (val === 4) {
          console.log("Que terrible noticia");
          edr = 1;
        }

        if (val === 5) {
          console.log("Lamento escuchar eso");
          edr = 1;
        }

        if (val === 6) {
          console.log("Y has hablado con alguien al respecto?");
          edr = 1;
        }

        if (val === 7) {
          console.log("Que cosa tan fea eso");
          edr = 1;
        }

        if (val === 8) {
          console.log("Que vaina");
          edr = 1;
        }

        if (val === 9) {
          console.log("Deberias hablarlo con alguien");
          edr = 1;
        }

        if (val === 10) {
          console.log("Que mala noticia escuchar eso");
          edr = 1;
        }

        if (val === 11) {
          console.log("Que cosa tan mala escuchar eso");
          edr = 1;
        }

        if (val === 12) {
          console.log("Y si hablas con alguien al respecto");
          edr = 1;
        }

        if (val === 13) {
          console.log("Deberias comentarselo a alguien");
          edr = 1;
        }

        if (val === 14) {
          console.log("Se fuerte que tu puedes");
          edr = 1;
        }

        if (val === 15) {
          console.log("Dale que tu puedes con toda");
          edr = 1;
        }

        if (val === 16) {
          console.log("Con toda a darle pues");
          edr = 1;
        }

        if (val === 17) {
          console.log("Espero que mejores");
          edr = 1;
        }

        if (val === 18) {
          console.log("Mejorate pronto");
          edr = 1;
        }

        if (val === 19) {
          console.log("\u00bfQue cosas no?");
          edr = 1;
        }

        if (val === 20) {
          console.log("Terrible que estes asi");
          edr = 1;
        }
      }
    }
  }

  cnt += 1;
}

}()
