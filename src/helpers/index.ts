//formatea el valor del objecto en un formato dado.
export function formatCurrency(quantity:number){
    return new Intl.NumberFormat('en-US',{
        style:'currency',currency:'USD'
    }).format(quantity);

}