class Vault {
    secret = new Map<string, any>();

    setSecret(key: string, value: any) {
        this.secret.set(key, value);
    }

    getSecret(key: string) {
        return this.secret.get(key);
    }
}


class VaultProxy{

    obj: Vault

    constructor (){
        this.obj = new Vault()
    }

    setSecret(key:string, value:any){
        console.log(`Password changed to ${value} in ${key}}`);
        this.obj.setSecret(key, value)
    }

    getSecret(key:string){
        console.log("See the password below for the Bank Account: " + key);
        const password = this.obj.getSecret(key)
        console.log(password);
        return password
    }
}

const vault = new VaultProxy();
vault.setSecret("Swiss Bank Account", "11928001838");
console.log(vault.getSecret("Swiss Bank Account"));
