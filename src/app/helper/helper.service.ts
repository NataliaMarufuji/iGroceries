import { Http, Headers, Response } from '@angular/http';
import { HelperComponent } from './helper.component';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ProdutoComponent } from '../produto/produto.component';

@Injectable()
export class HelperService { 

    private _menuLogin;

    formataData(data: Date){
        var dia = data.getDate();
        var mes = data.getMonth() + 1;
        var diaString;
        var mesString;
        var diaEntreZeroENove =  false;
        var mesEntreZeroENove = false;

        if(this.diaOuMesEntreZeroENove(dia)){
            diaString = "0" + dia;
            diaEntreZeroENove = true;
        }
        if(this.diaOuMesEntreZeroENove(mes)){
            mesString = "0" + mes;
            mesEntreZeroENove = true;
        }

        if(diaEntreZeroENove && !mesEntreZeroENove){
            return diaString  + "/" + mes + "/" + data.getFullYear();
        }else if(!diaEntreZeroENove && mesEntreZeroENove){
            return data.getDate()  + "/" + mesString + "/" + data.getFullYear();
        }else if(diaEntreZeroENove && mesEntreZeroENove){
            return diaString  + "/" + mesString + "/" + data.getFullYear();
        }else{
            return data.getDate()  + "/" + mes + "/" + data.getFullYear();
        }
    }

    formataDataCartao(data: Date){
        var mes = data.getMonth() + 1;

        if(this.diaOuMesEntreZeroENove(mes)){
            return "0" + mes + "/" + data.getFullYear();
        }else{
            return mes + "/" + data.getFullYear();
        }
    }

    formataValor(valor: number){
        var valorString = valor.toString();
        var splitted = valorString.split(".");
        if(splitted[1].length == 1){
            return splitted[0] + "." + splitted[1] + "0";
        }else if(splitted[1].length == 0){
            return splitted[0] + ".00";
        }else{
            return valorString;
        }
    }

    retornaScriptModal(){
        return $.getScript('app/helper/modal.min.js');
    }

    retornaScripCollapse(){
        return $.getScript('app/helper/helper.min.js');
    }

    retornaScriptToast(frase){
        return $.getScript('app/helper/toast.min.js', function() {
            mostraToast(frase);
         });
    }

    retornaScriptMascaras(){
        return $.getScript('app/helper/mascaras.min.js');
    }

    diaOuMesEntreZeroENove(numero: number){
        if(numero == 1 || numero == 2 || numero == 3 || numero == 4 || numero == 5 || numero == 6
            || numero == 7 || numero == 8 || numero == 9){
                return true;
        }
        return false;
    }

    retornaQuantidadeDeProdutosCarrinho(produtos: ProdutoComponent[]){
        var quantidade = 0;
        produtos.forEach(atual =>{
            quantidade+= atual.quantidade;
        });
        return quantidade;
    }

}
