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
}()
