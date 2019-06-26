export class Solicitacao{
  
    public id:string;

    public solicitanteCpf:string;
    public solicitanteNome:string;
    public solicitanteEmail:string;

    public solicitadoCpf:string;
    public solicitadoNome:string;
    public solicitadoEmail:string;

    public solicitadoEm:Date;
    public expiraEm:Date;
    public modificacaoEm:Date;

    public situacao:string;
    public visualizado:string;


    constructor() {
        this.id  = null;

        this.solicitanteCpf   = "";
        this.solicitanteNome = "";
        this.solicitanteEmail = "";

        this.solicitadoCpf  = "";
        this.solicitadoNome   = "";
        this.solicitadoEmail = "";

        this.solicitadoEm  = null;
        this.expiraEm   = null;
        this.modificacaoEm = null;

        this.situacao = "NOVA";   
        this.visualizado = "N";    
    }

}