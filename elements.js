function criaElementos(){
    if(document.getElementById('inputinseretarefa').value){
    var novatarefa = document.createElement('div');
    novatarefa.className = 'divtarefaaberta';
    body.appendChild(novatarefa);
    
    var novatarefainput = document.createElement('input');
    novatarefainput.className = 'input inputtarefaaberta';
    novatarefainput.value = document.getElementById('inputinseretarefa').value
    novatarefa.appendChild(novatarefainput);

     var btndeletatarefa= document.createElement('button');
     btndeletatarefa.className = 'material-icons'
     novatarefainput.appendChild(btndeletatarefa)
    
     var scandeletatarefa = document.createElement('span');
     scandeletatarefa.className = 'material-icons'
     btndeletatarefa.appendChild(scandeletatarefa)

    document.getElementById('inputinseretarefa').value = '';
    document.getElementById('inputinseretarefa').focus();
}
}
