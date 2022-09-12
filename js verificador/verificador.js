
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('anonasc')
    var res = document.getElementById('resultado')
    if(fano.value.length === 0 || Number(fano.value )>ano) {
 window.alert('Verifica seus dados, poder ter preenchiddo o ano de nascimento errado')

    }
    else{
        var sex = document.getElementsByName('radiosex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if(sex [0].checked){
            genero = "Homem"
            if( idade <= 0 && idade <12){
                img.setAttribute ('src', 'crianca.jpg')
                //criança
            }
            else if ( idade > 12 && idade <22 ){
                img.setAttribute('src' , 'hoemem adolescente.jpg')
                //Adolescente
            }
            else if ( idade >22 && idade <50 ){
                img.setAttribute('src' , 'HOMEM ADULTO.jpg')
                // adulto
            }
            else{
                img.setAttribute('src' , 'IDOSO HOMEM.jpg')
                // idoso
            }
            
        }
        
            else {
                genero = "Mulher"
                if( idade <= 0 && idade <12){
                    img.setAttribute('src' , 'CRINÇA FEMENINA.jpg')
                    //criança
                }
                else if ( idade > 12 && idade <22 ){
                    img.setAttribute('src' , 'mulher adolescente.jpg')
                    //Adolescente
                }
                else if ( idade >22 && idade <50 ){
                    img.setAttribute('src' , 'MULHER.jpg')
                    // adulto
                }
                else{
                    img.setAttribute('src' , 'IDOSA.jpg')
                    // idoso
                }
            }

        }
        res.innerHTML =  ` Você é     ${genero}   com  ${idade} anos`
        res.style.backgroundColor = 'rgba(208, 209, 141, 0.929)'
        res.appendChild(img)
    }

